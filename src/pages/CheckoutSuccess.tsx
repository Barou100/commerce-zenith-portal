
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const CheckoutSuccess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <div className="max-w-lg mx-auto px-6 md:px-10 py-20 text-center">
        <div className="mb-6 animate-slide-up">
          <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
        </div>
        
        <h1 className="text-2xl font-semibold mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Thank you for your order!
        </h1>
        
        <div className="text-muted-foreground mb-8 space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p>
            Your order has been received and is now being processed.
          </p>
          <p>
            You will receive an email confirmation shortly with your order details.
          </p>
        </div>
        
        <div className="space-y-3 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <Button asChild className="w-full">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link to="/account">View Order History</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutSuccess;
