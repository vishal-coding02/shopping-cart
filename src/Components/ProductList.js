import products from "../products";

function ProductList({ addToCart }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">🛒 Shopping Cart</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((data) => (
          <div
            key={data.id}
            className="border p-4 rounded-lg shadow-lg text-center bg-white hover:shadow-xl transition"
          >
            <p className="text-lg font-semibold">{data.name}</p>
            <p className="text-gray-600 text-lg font-medium">₹{data.price}</p>
            <button
              onClick={() => addToCart(data)}
              className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-600 transition"
            >
              Add to Cart 🛍
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
