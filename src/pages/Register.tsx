import { forwardRef, memo, useCallback, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { plans } from "@/components/PricingSection";
import { ArrowRight, School, UserCog, CreditCard } from "lucide-react";

const registrationSchema = z.object({
  name: z.string().trim().min(1, "School name is required").max(200),
  schoolCode: z.string().trim().min(1, "School code is required").max(50),
  board: z.string().min(1, "Board is required"),
  medium: z.string().min(1, "Medium is required"),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().min(10, "Phone must be at least 10 digits").max(15),
  alternatePhone: z.string().trim().max(15).optional().or(z.literal("")),
  addressLine1: z.string().trim().min(1, "Address is required").max(300),
  addressLine2: z.string().trim().max(300).optional().or(z.literal("")),
  city: z.string().trim().min(1, "City is required").max(100),
  state: z.string().trim().min(1, "State is required").max(100),
  pincode: z.string().trim().min(5, "Valid pincode required").max(10),
  country: z.string().trim().min(1, "Country is required").max(100),
  adminName: z.string().trim().min(1, "Admin name is required").max(200),
  adminEmail: z.string().trim().email("Invalid admin email"),
  adminUsername: z.string().trim().min(3, "Username must be at least 3 characters").max(50),
  adminPassword: z.string().min(6, "Password must be at least 6 characters").max(100),
  planId: z.number().min(1, "Select a plan"),
});

type FormData = z.infer<typeof registrationSchema>;

const initialForm: FormData = {
  name: "", schoolCode: "", board: "", medium: "", email: "", phone: "",
  alternatePhone: "", addressLine1: "", addressLine2: "", city: "", state: "",
  pincode: "", country: "India", adminName: "", adminEmail: "", adminUsername: "",
  adminPassword: "", planId: 0,
};

interface FieldProps {
  label: string;
  field: keyof FormData;
  type?: string;
  required?: boolean;
  value: string;
  error?: string;
  onChange: (field: keyof FormData, value: string) => void;
}

const Field = memo(
  forwardRef<HTMLDivElement, FieldProps>(({ label, field, type = "text", required = true, value, error, onChange }, ref) => (
    <div ref={ref} className="space-y-1.5">
      <Label htmlFor={field} className="text-sm font-medium">{label} {required && <span className="text-destructive">*</span>}</Label>
      <Input
        id={field}
        type={type}
        value={value}
        onChange={(e) => onChange(field, e.target.value)}
        className={`transition-all duration-200 focus:shadow-md ${error ? "border-destructive" : "hover:border-primary/40"}`}
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )),
);
Field.displayName = "Field";

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preselectedPlan = Number(searchParams.get("plan")) || 0;

  const [form, setForm] = useState<FormData>({ ...initialForm, planId: preselectedPlan });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const updateField = useCallback((field: keyof FormData, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = registrationSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the errors in the form");
      return;
    }
    setErrors({});
    navigate("/payment", { state: { formData: result.data } });
  };

  const selectedPlan = plans.find((p) => p.id === form.planId);

  const fieldProps = (field: keyof FormData, label: string, type?: string, required?: boolean) => ({
    label, field, type, required: required ?? true,
    value: form[field] as string, error: errors[field], onChange: updateField,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      <div className="container max-w-3xl py-12">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Registration
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl">Register Your <span className="gradient-text">School</span></h1>
          <p className="mt-3 text-muted-foreground">Fill in the details to get started with School ERP</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* School Details */}
          <section className="rounded-2xl border border-border/50 bg-card p-6 shadow-card sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-hero text-primary-foreground">
                <School size={20} />
              </div>
              <h2 className="text-xl font-bold text-foreground">School Details</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field {...fieldProps("name", "School Name")} />
              <Field {...fieldProps("schoolCode", "School Code")} />
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">Board <span className="text-destructive">*</span></Label>
                <Select value={form.board} onValueChange={(v) => updateField("board", v)}>
                  <SelectTrigger className={`transition-all duration-200 hover:border-primary/40 ${errors.board ? "border-destructive" : ""}`}><SelectValue placeholder="Select Board" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CBSE">CBSE</SelectItem>
                    <SelectItem value="ICSE">ICSE</SelectItem>
                    <SelectItem value="State">State Board</SelectItem>
                  </SelectContent>
                </Select>
                {errors.board && <p className="text-xs text-destructive">{errors.board}</p>}
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">Medium <span className="text-destructive">*</span></Label>
                <Select value={form.medium} onValueChange={(v) => updateField("medium", v)}>
                  <SelectTrigger className={`transition-all duration-200 hover:border-primary/40 ${errors.medium ? "border-destructive" : ""}`}><SelectValue placeholder="Select Medium" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                    <SelectItem value="Marathi">Marathi</SelectItem>
                    <SelectItem value="Tamil">Tamil</SelectItem>
                    <SelectItem value="Telugu">Telugu</SelectItem>
                  </SelectContent>
                </Select>
                {errors.medium && <p className="text-xs text-destructive">{errors.medium}</p>}
              </div>
              <Field {...fieldProps("email", "Email", "email")} />
              <Field {...fieldProps("phone", "Phone")} />
              <Field {...fieldProps("alternatePhone", "Alternate Phone", "text", false)} />
              <Field {...fieldProps("addressLine1", "Address Line 1")} />
              <Field {...fieldProps("addressLine2", "Address Line 2", "text", false)} />
              <Field {...fieldProps("city", "City")} />
              <Field {...fieldProps("state", "State")} />
              <Field {...fieldProps("pincode", "Pincode")} />
              <Field {...fieldProps("country", "Country")} />
            </div>
          </section>

          {/* Admin Details */}
          <section className="rounded-2xl border border-border/50 bg-card p-6 shadow-card sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-hero text-primary-foreground">
                <UserCog size={20} />
              </div>
              <h2 className="text-xl font-bold text-foreground">Admin Details</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field {...fieldProps("adminName", "Admin Name")} />
              <Field {...fieldProps("adminEmail", "Admin Email", "email")} />
              <Field {...fieldProps("adminUsername", "Username")} />
              <Field {...fieldProps("adminPassword", "Password", "password")} />
            </div>
          </section>

          {/* Plan Selection */}
          <section className="rounded-2xl border border-border/50 bg-card p-6 shadow-card sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-hero text-primary-foreground">
                <CreditCard size={20} />
              </div>
              <h2 className="text-xl font-bold text-foreground">Select Plan</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                   onClick={() => updateField("planId", plan.id)}
                  className={`rounded-xl border-2 p-5 text-left transition-all duration-300 ${
                    form.planId === plan.id
                      ? "border-primary bg-primary/5 shadow-md glow-primary"
                      : "border-border/50 hover:border-primary/40 hover:bg-primary/5"
                  }`}
                >
                  <p className="font-bold text-foreground">{plan.name}</p>
                  <p className="text-2xl font-extrabold gradient-text">{plan.price}<span className="text-sm font-normal text-muted-foreground">{plan.period}</span></p>
                </button>
              ))}
            </div>
            {errors.planId && <p className="mt-1 text-xs text-destructive">{errors.planId}</p>}
          </section>

          {selectedPlan && (
            <div className="rounded-2xl gradient-border bg-primary/5 p-5">
              <p className="text-sm text-muted-foreground">Selected Plan: <span className="font-bold text-foreground">{selectedPlan.name} — {selectedPlan.price}{selectedPlan.period}</span></p>
            </div>
          )}

          <Button type="submit" size="lg" className="w-full py-6 text-base gradient-hero border-0 text-primary-foreground shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 gap-2">
            Proceed to Payment <ArrowRight size={18} />
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
