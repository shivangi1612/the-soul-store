import { useState, useEffect } from "react";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard"; 
import CircularText from './CircularText';

const products = [
  {
    id: "1",
    name: "My Angel",
    price: 199,
    mainImage: image1,
    hoverImage: image1,
    description: "Stealth urban design with reflective elements"
  },
  {
    id: "2",
    name: "Downtown Drip",
    price: 179,
    mainImage: image2,
    hoverImage: image2,
    description: "Anime Character Inspired-Toji",
  },
  {
    id: "3",
    name: "Cyber Rebel",
    price: 189,
    mainImage: image3,
    hoverImage: image3,
    description: "Cyberpunk-inspired premium hoodie with matrix pattern",
  },
  {
    id: "4",
    name: "Two Cherries",
    price: 149,
    mainImage: image4,
    hoverImage: image4,
    description: "Dark aesthetic inspired comfort for modern lifestyle",
  },
];

export default function ProductGrid({ cart, addToCart }) {
  const [notification, setNotification] = useState("");

  // Add to cart function
  const addToCartHandler = (product) => {
    addToCart(product);
    setNotification(`${product.name} has been added to your cart!`);
  };

  // Hide the notification after 3 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div>
      <Navbar cart={cart} />

      {notification && (
        <div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-md text-center 
                     w-[90%] md:w-auto md:left-3/4 md:-translate-x-2"
        >
          {notification}
        </div>
      )}

      <div id="products" className="container mx-auto px-6 py-10 center">

      <CircularText
       text="*PREMIUM*STREETWEAR*COLLECTION"
       onHover="speedUp"
       spinDuration={20}
       className="mb-10 custom-class"
      />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCartHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
