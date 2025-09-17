/*
  File: Product.jsx
  Description: Maps over product items to display alternating rope roll and strand images.
  Author: Kendrick Tan
*/

import { useState } from "react";
import roll1 from "../assets/gallery/roll1.jpg";
import roll2 from "../assets/gallery/roll2.jpg";
import roll3 from "../assets/gallery/roll3.jpg";
import roll4 from "../assets/gallery/roll4.jpg";
import string1 from "../assets/gallery/string1.jpg";
import string2 from "../assets/gallery/string2.jpg";
import string3 from "../assets/gallery/string3.jpg";
import string4 from "../assets/gallery/string4.jpg";

const Product = () => {
  // Map of roll/string objects
  const items = [
    { id: 1, roll: roll1, string: string1, alt: "Abaca rope roll 1" },
    { id: 2, roll: roll2, string: string2, alt: "Abaca rope roll 2" },
    { id: 3, roll: roll3, string: string3, alt: "Abaca rope roll 3" },
    { id: 4, roll: roll4, string: string4, alt: "Abaca rope roll 4" },
  ];

  // Track which image is showing for each item
  const [showString, setShowString] = useState({});

  // Toggles whether to show rope roll or string.
  const toggleString = (id) => {
    setShowString((prev) => ({
      ...prev,
      [id]: !prev[id], // toggle true/false
    }));
  };

  return (
    <section className="py-20 bg-offwhite" id="product">
      <div className="max-w-4xl mx-auto px-6 text-center text-charcoal">
        {/* ==== Heading ==== */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">
          Our Products
        </h2>

        {/* ==== Subtext ==== */}
        <p className="mt-4 text-base max-w-2xl mx-auto font-sans">
          Made from the world’s strongest natural fiber, our abaca ropes are a
          sustainable solution that combines resilience with environmental
          responsibility.
        </p>
      </div>

      {/* ==== Products Grid ==== */}
      <div className="max-w-6xl mx-auto px-10 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Each image */}
          {items.map((item) => (
            <figure
              key={item.id}
              className="overflow-hidden rounded-2xl bg-white border border-black/10"
              onClick={() => toggleString(item.id)} // clicking image will toggle roll/string view
            >
              {/* Shows either roll or string based on showString state */}
              <img
                src={showString[item.id] ? item.string : item.roll}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-300 ease-out hover:scale-[1.02] cursor-pointer"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
