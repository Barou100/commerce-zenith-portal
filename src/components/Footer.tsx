
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="font-semibold text-2xl mb-4">ElegantCommerce</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Curated products for a minimal and elegant lifestyle. Quality that speaks for itself.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-4">Shop</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/categories/lighting" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Lighting
              </Link>
            </li>
            <li>
              <Link to="/categories/smart-home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Smart Home
              </Link>
            </li>
            <li>
              <Link to="/categories/audio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Audio
              </Link>
            </li>
            <li>
              <Link to="/categories/accessories" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Accessories
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-4">Stay Updated</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Subscribe to our newsletter for product updates and exclusive offers.
          </p>
          <div className="flex space-x-2">
            <Input 
              type="email" 
              placeholder="Your email" 
              className="max-w-[220px]" 
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ElegantCommerce. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <img src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1672330496/visa_lbhso0.svg" alt="Visa" className="h-6" />
            <img src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1672330496/mastercard_wdhont.svg" alt="Mastercard" className="h-6" />
            <img src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1672330496/paypal_oedv1c.svg" alt="PayPal" className="h-6" />
            <img src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1672330496/apple-pay_dlamhi.svg" alt="Apple Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
