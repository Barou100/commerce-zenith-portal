
import { Product } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "Minimal Desk Lamp",
    description: "A sleek, minimalist desk lamp with adjustable brightness and color temperature. Perfect for your workspace.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Lighting",
    featured: true,
    stock: 15
  },
  {
    id: "2",
    name: "Smart Home Hub",
    description: "Connect and control all your smart devices with this elegant hub. Features voice control and automation.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Smart Home",
    featured: true,
    stock: 8
  },
  {
    id: "3",
    name: "Wireless Earbuds",
    description: "Premium wireless earbuds with noise cancellation and crystal-clear sound quality. 24-hour battery life.",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Audio",
    featured: true,
    stock: 20
  },
  {
    id: "4",
    name: "Ergonomic Office Chair",
    description: "A modern, comfortable chair designed for long hours of work. Adjustable height and lumbar support.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Furniture",
    stock: 5
  },
  {
    id: "5",
    name: "Minimalist Wall Clock",
    description: "A beautifully designed wall clock with silent movement. The perfect accent for any room.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Home Decor",
    stock: 12
  },
  {
    id: "6",
    name: "Smart Water Bottle",
    description: "Track your hydration with this smart water bottle. LED reminder and app integration.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Health",
    stock: 18
  },
  {
    id: "7",
    name: "Leather Portfolio",
    description: "Premium leather portfolio with multiple compartments. Perfect for meetings and presentations.",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Accessories",
    stock: 7
  },
  {
    id: "8",
    name: "Ceramic Coffee Set",
    description: "Elegant ceramic coffee set including mugs and a pour-over dripper. Modern design meets functionality.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Kitchen",
    stock: 10
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
