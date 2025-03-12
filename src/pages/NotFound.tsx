
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <div className="max-w-lg mx-auto px-6 md:px-10 py-20 text-center">
        <h1 className="text-8xl font-bold text-muted mb-4 animate-slide-up">404</h1>
        <h2 className="text-2xl font-semibold mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
