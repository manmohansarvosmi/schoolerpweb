import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Register from "./pages/Register.tsx";
import StudentManagementPage from "./pages/StudentManagementPage.tsx";
import StaffManagementPage from "./pages/StaffManagementPage.tsx";
import FeeManagementPage from "./pages/FeeManagementPage.tsx";
import Payment from "./pages/Payment.tsx";
import Success from "./pages/Success.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features/student-management" element={<StudentManagementPage />} />
          <Route path="/features/staff-management" element={<StaffManagementPage />} />
          <Route path="/features/fee-management" element={<FeeManagementPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
