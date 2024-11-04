import React from "react";

const FeaturedCakes = () => {
  const cakes = [
    { name: "Chocolate Cake", description: "Rich and creamy", image: "/images/chocolate-cake.jpg" },
    { name: "Vanilla Cake", description: "Light and fluffy", image: "/images/vanilla-cake.jpg" },
    { name: "Red Velvet Cake", description: "Smooth and velvety", image: "/images/red-velvet-cake.jpg" }
  ];

  return (
    <section className="featured-cakes">
      <h2>Our Featured Cakes</h2>
      <div className="cake-grid">
        {cakes.map((cake, index) => (
          <div key={index} className="cake-card">
            <img src={cake.image} alt={cake.name} />
            <h3>{cake.name}</h3>
            <p>{cake.description}</p>
            <button>Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCakes;
