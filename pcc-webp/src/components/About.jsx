/*
  File: About.jsx
  Description: About section describing company background using styled typography and layout.
  Author: Kendrick Tan
*/

import about from "../assets/about.png";

const About = () => {
  return (
    <section className="bg-offwhite py-20 px-10 md:px-30 lg:px-60" id="about">
      <div className="max-w-4xl mx-auto text-center text-charcoal">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">
          About Us
        </h2>

        {/* Image */}
        <img
          src={about}
          alt="About Pacific Cordage Corp."
          className="mx-auto mb-10 rounded-md shadow-md"
        />

        {/* Text */}
        <div className="space-y-6 font-sans leading-relaxed text-justify">
          <p>
            Since 1978,{" "}
            <span className="font-semibold">Pacific Cordage Corp. (PCC)</span>{" "}
            has been dedicated to producing ropes that combine strength,
            durability, and craftsmanship. Located at the heart of the world’s
            most abundant abaca supply in{" "}
            <span className="font-semibold">Bicol, Philippines</span>, we work
            with the strongest natural fiber in the world to craft bespoke rope
            solutions that meet the exact needs of each of our clients. Each
            fiber is sourced from our most trusted suppliers, and every rope is
            designed to exceed international standards of performance and
            safety.
          </p>
          <p>
            For over four decades, Pacific Cordage Corporation has been a
            reliable partner for industries worldwide—supplying ropes used in
            shipping, construction, furniture, set design, and specialized
            applications. Our dedication to precision blending and rigorous
            testing ensures that every rope maintains its grip, strength, and
            reliability, even in the most demanding conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
