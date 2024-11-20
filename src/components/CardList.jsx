import React from "react";
import Card from "./Card";

function CardList() {
  const cards = [
    {
      id: 1,
      title: "Cake Shop",
      image: "https://via.placeholder.com/300",
      description: "A delicious chocolate cake with a rich flavor.",
      rating: 2.8,
      price: 15.99,
      promoPrice: 12.99,
    },
    {
      id: 2,
      title: "Cupcake Heaven",
      image: "https://via.placeholder.com/300",
      description: "Freshly baked cupcakes with various flavors.",
      rating: 4.6,
      price: 8.99,
      promoPrice: null,
    },
    {
      id: 3,
      title: "Bakery Delight",
      image: "https://via.placeholder.com/300",
      description: "Traditional bread and pastries made daily.",
      rating: 3.9,
      price: 12.49,
      promoPrice: 10.99,
    },
    {
      id: 1,
      title: "Cake Shop",
      image: "https://via.placeholder.com/300",
      description: "A delicious chocolate cake with a rich flavor.",
      rating: 2.8,
      price: 15.99,
      promoPrice: 12.99,
    },
    {
      id: 2,
      title: "Cupcake Heaven",
      image: "https://via.placeholder.com/300",
      description: "Freshly baked cupcakes with various flavors.",
      rating: 4.6,
      price: 8.99,
      promoPrice: null,
    },
    {
      id: 3,
      title: "Bakery Delight",
      image: "https://via.placeholder.com/300",
      description: "Traditional bread and pastries made daily.",
      rating: 3.9,
      price: 12.49,
      promoPrice: 10.99,
    },
    {
      id: 1,
      title: "Cake Shop",
      image: "https://via.placeholder.com/300",
      description: "A delicious chocolate cake with a rich flavor.",
      rating: 2.8,
      price: 15.99,
      promoPrice: 12.99,
    },
    {
      id: 2,
      title: "Cupcake Heaven",
      image: "https://via.placeholder.com/300",
      description: "Freshly baked cupcakes with various flavors.",
      rating: 4.6,
      price: 8.99,
      promoPrice: null,
    },
    {
      id: 3,
      title: "Bakery Delight",
      image: "https://via.placeholder.com/300",
      description: "Traditional bread and pastries made daily.",
      rating: 3.9,
      price: 12.49,
      promoPrice: 10.99,
    },
    {
      id: 1,
      title: "Cake Shop",
      image: "https://via.placeholder.com/300",
      description: "A delicious chocolate cake with a rich flavor.",
      rating: 2.8,
      price: 15.99,
      promoPrice: 12.99,
    },
    {
      id: 2,
      title: "Cupcake Heaven",
      image: "https://via.placeholder.com/300",
      description: "Freshly baked cupcakes with various flavors.",
      rating: 4.6,
      price: 8.99,
      promoPrice: null,
    },
    {
      id: 3,
      title: "Bakery Delight",
      image: "https://via.placeholder.com/300",
      description: "Traditional bread and pastries made daily.",
      rating: 3.9,
      price: 12.49,
      promoPrice: 10.99,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center py-8">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
            rating={card.rating}
            price={card.price}
            promoPrice={card.promoPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
