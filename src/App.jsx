import { useState, useEffect } from 'react';

import "video.js/dist/video-js.css";
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import BlobCursor from './components/BlobCursor';
import AutoSliderBanner from './components/AutoSliderBanner';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showBlobCursor, setShowBlobCursor] = useState(true);

  // Function to add products to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowBlobCursor(window.innerWidth > 768); // Hide on screens smaller than 768px
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {showBlobCursor && <BlobCursor className="blob-cursor" />}
      {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      <main className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar cart={cart} />
        <AutoSliderBanner />
        <ProductGrid 
          cart={cart} 
          addToCart={addToCart} 
        />
        <Footer />
      </main> 
    </div>
  );
}
