
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { 
  MinusCircle, 
  PlusCircle, 
  Trash2, 
  ShoppingBag, 
  ArrowRight 
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (items.length === 0) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-20 text-center">
          <div className="mb-6">
            <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center mx-auto">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild>
            <Link to="/shop">Start Shopping</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="hidden md:grid grid-cols-[2fr,1fr,1fr,auto] gap-4 mb-6 text-sm text-muted-foreground">
              <div>Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-center">Total</div>
            </div>
            
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="animate-fade-in">
                  <div className="md:grid md:grid-cols-[2fr,1fr,1fr,auto] gap-4 items-center">
                    {/* Product */}
                    <div className="flex items-center space-x-4">
                      <div className="h-20 w-20 flex-shrink-0 rounded-md overflow-hidden">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">
                          <Link 
                            to={`/product/${item.product.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {item.product.name}
                          </Link>
                        </h3>
                        <div className="text-sm text-muted-foreground mt-1">
                          {item.product.category}
                        </div>
                        <div className="md:hidden text-sm mt-2">
                          ${item.product.price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Price - Desktop */}
                    <div className="hidden md:block text-center">
                      ${item.product.price.toFixed(2)}
                    </div>
                    
                    {/* Quantity */}
                    <div className="flex items-center justify-center mt-4 md:mt-0">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="text-muted-foreground hover:text-primary disabled:opacity-50"
                        aria-label="Decrease quantity"
                      >
                        <MinusCircle className="h-5 w-5" />
                      </button>
                      <span className="w-10 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        disabled={item.quantity >= item.product.stock}
                        className="text-muted-foreground hover:text-primary disabled:opacity-50"
                        aria-label="Increase quantity"
                      >
                        <PlusCircle className="h-5 w-5" />
                      </button>
                    </div>
                    
                    {/* Total */}
                    <div className="flex items-center justify-between md:justify-end mt-4 md:mt-0">
                      <span className="md:mr-6 font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <Separator className="mt-6" />
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button variant="outline" asChild>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-secondary rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${(totalPrice + totalPrice * 0.1).toFixed(2)}</span>
                </div>
              </div>
              
              <Button asChild className="w-full">
                <Link to="/checkout">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>We accept</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <img src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1672330496/visa_lbhso0.svg" alt="Visa" className="h-6" />
                  <img src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1672330496/mastercard_wdhont.svg" alt="Mastercard" className="h-6" />
                  <img src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1672330496/paypal_oedv1c.svg" alt="PayPal" className="h-6" />
                  <img src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1672330496/apple-pay_dlamhi.svg" alt="Apple Pay" className="h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
