import ProductList from "./ProductList";
import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function handleRemoveCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function handleIncrementQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function handleDecrementQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <ProductList addToCart={addToCart} />

      <h2 className="text-2xl font-bold my-4 text-center">🛍 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">Cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-600">
                  ₹{item.price} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecrementQuantity(item.id)}
                  className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  ➖
                </button>
                <span className="text-lg font-bold">{item.quantity}</span>
                <button
                  onClick={() => handleIncrementQuantity(item.id)}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  ➕
                </button>
                <button
                  onClick={() => handleRemoveCart(item.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 ml-2"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
          <div className="text-right text-xl font-bold mt-4">
            Total: ₹{totalPrice}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
