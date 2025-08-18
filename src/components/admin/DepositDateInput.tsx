// components/admin/DepositDateInput.tsx
"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface DepositDateInputProps {
  depositDate: string;
  onChange: (value: string) => void;
}

const DepositDateInput: React.FC<DepositDateInputProps> = ({
  depositDate,
  onChange,
}) => {
  return (
    <Card className="bg-muted/50 border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg text-card-foreground">
            Deposit Date
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Input
          type="date"
          value={depositDate}
          onChange={(e) => onChange(e.target.value)}
          className="bg-muted/30 border-border focus:ring-ring"
        />
      </CardContent>
    </Card>
  );
};

export default DepositDateInput;
