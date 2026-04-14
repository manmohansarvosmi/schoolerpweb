import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { plans } from "@/components/PricingSection";
import { CreditCard, Shield, Loader2, Lock } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const API_BASE = "http://100.102.119.100:9090";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;
  const [loading, setLoading] = useState(false);

  if (!formData) {
    navigate("/register");
    return null;
  }

  const plan = plans.find((p) => p.id === formData.planId);

  const getAmountInINR = (): number => {
    if (!plan) return 0;
    // Extract numbers from something like "₹4,999" -> 4999
    return parseInt(plan.price.replace(/[^0-9]/g, ""), 10);
  };

  const registerSchool = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/school/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Registration failed");
    } catch {
      // Demo mode fallback – proceed anyway
    }
  };

  const handlePay = async () => {
    setLoading(true);
    try {
      const amountInINR = getAmountInINR();
      // Step 1: Create Razorpay order via backend
      const orderRes = await fetch(`${API_BASE}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: formData.adminUsername,
          amount: amountInINR, // Send in INR, backend will convert to paise
          currency: "INR",
          description: `School ERP - ${plan?.name} Plan`,
          metadata: JSON.stringify({ schoolName: formData.name, planId: formData.planId }),
        }),
      });

      if (!orderRes.ok) throw new Error("Failed to create payment order");
      const responseData = await orderRes.json();
      const orderData = responseData.data || responseData; // Handle both nested and direct responses

      // Step 2: Open Razorpay Checkout
      const options = {
        key: orderData.razorpayKey || orderData.razorpayKeyId || orderData.key || "",
        amount: (orderData.amount * 100) || (amountInINR * 100),
        currency: orderData.currency || "INR",
        name: "Helixion Innovation",
        description: `School ERP - ${plan?.name} Plan`,
        order_id: orderData.orderId || orderData.id,
        handler: async (response: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) => {
          try {
            // Step 3: Verify payment
            const verifyRes = await fetch(`${API_BASE}/api/payment/verify`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
                paymentMethod: "razorpay",
              }),
            });

            if (!verifyRes.ok) throw new Error("Payment verification failed");

            // Step 4: Register school
            await registerSchool();

            toast.success("Payment successful!");
            navigate("/success", {
              state: {
                schoolName: formData.name,
                adminUsername: formData.adminUsername,
                adminEmail: formData.adminEmail,
              },
            });
          } catch {
            toast.error("Payment verification failed. Please contact support.");
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: formData.adminName,
          email: formData.adminEmail,
          contact: formData.phone,
        },
        theme: { color: "#4F46E5" },
        modal: {
          ondismiss: () => {
            setLoading(false);
            toast.error("Payment cancelled");
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response: any) => {
        setLoading(false);
        toast.error(response.error?.description || "Payment failed. Please try again.");
      });
      rzp.open();
    } catch (err) {
      setLoading(false);
      toast.error("Could not initiate payment. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      <div className="container max-w-lg py-16">
        <div className="relative rounded-2xl border border-border/50 bg-card p-8 shadow-xl">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 blur-xl -z-10" />
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-hero text-primary-foreground shadow-md">
              <CreditCard size={22} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Payment Summary</h1>
              <p className="text-sm text-muted-foreground">Complete your purchase</p>
            </div>
          </div>

          <div className="mb-6 space-y-3 rounded-xl bg-secondary/50 p-5 border border-border/30">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">School</span>
              <span className="font-medium text-foreground">{formData.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Plan</span>
              <span className="font-medium text-foreground">{plan?.name}</span>
            </div>
            <div className="border-t border-border/50 pt-3 flex justify-between items-center">
              <span className="font-semibold text-foreground">Total</span>
              <span className="text-2xl font-extrabold gradient-text">{plan?.price}</span>
            </div>
          </div>

          <div className="mb-6 flex items-center gap-2 rounded-xl bg-primary/5 p-4 text-sm text-muted-foreground border border-primary/10">
            <Shield size={16} className="text-primary shrink-0" />
            Secured by Razorpay with 256-bit SSL encryption
          </div>

          <Button
            onClick={handlePay}
            disabled={loading}
            size="lg"
            className="w-full gap-2 py-6 text-base gradient-hero border-0 text-primary-foreground shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300"
          >
            {loading ? (
              <><Loader2 size={18} className="animate-spin" /> Processing...</>
            ) : (
              <><Lock size={16} /> Pay {plan?.price} Now</>
            )}
          </Button>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            By proceeding, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
