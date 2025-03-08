import { useState } from 'react';  

function ProductCard({ product, addToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative mb-12 bg-gray-900 rounded-lg overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={isHovered ? product.hoverImage : product.mainImage}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-200 mb-4">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">${product.price}</span>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            className="px-4 py-2 bg-black hover:bg-zinc-600 rounded-lg text-white transition"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
          <button className="px-4 py-2 bg-black hover:bg-blue-600 rounded-lg text-white transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
