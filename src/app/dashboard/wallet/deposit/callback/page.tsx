// src/app/dashboard/wallet/deposit/callback/page.tsx
import { Suspense } from "react";
import PaymentCallbackPage from "@/components/wallet/PaymentCallbackPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentCallbackPage />
    </Suspense>
  );
}
