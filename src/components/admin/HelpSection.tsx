// components/admin/HelpSection.tsx
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HelpSection: React.FC = () => {
  return (
    <Card className="bg-gradient-to-br from-card to-muted border-border shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-foreground text-lg font-semibold">
          Need Help?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          If you encounter any issues or need assistance with physical gold
          deposits, please contact technical support.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="w-full border-border hover:bg-muted hover:border-muted-foreground transition-colors"
          onClick={() =>
            (window.location.href =
              "mailto:admin-support@fortunelockdepository.com")
          }
        >
          Contact Support
        </Button>
      </CardContent>
    </Card>
  );
};

export default HelpSection;
