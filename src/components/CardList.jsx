import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { HiMiniArchiveBoxXMark } from "react-icons/hi2";

function CardList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setData(response.data);
      } catch (err) {
        console.error("xatolik yuz berdi", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {data === null ? (
        <div className="flex flex-col items-center justify-center gap-4  text-gray-500 py-8">
          <div className="text-center text-2xl text-bold">Maxsulotlar yo'q</div>
          <div>
            <HiMiniArchiveBoxXMark size={48} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center py-8">
          {data.map((card) => (
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
      )}
    </div>
  );
}

export default CardList;
