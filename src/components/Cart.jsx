const Cart = ({ cart }) => {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
  
    return (
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Savat</h2>
        {cart.length === 0 ? (
          <p>Savat bo'sh</p>
        ) : (
          <>
            <ul>
              {cart.map((product, index) => (
                <li key={index} className="flex justify-between mb-4">
                  <span>{product.name}</span>
                  <span>${product.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Jami:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Buyurtma berish
            </button>
          </>
        )}
      </div>
    );
  };
  
  export default Cart;
  