import { useProductStore } from "@/store/Store";

function AddToCart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useProductStore();

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-6 my-5">
                <div>
                  <img src={item.image} alt={item.name} className="w-36" />
                </div>
                <div className="w-56">
                  <h2 className="my-4 font-font2">{item.name}</h2>
                  <div className="flex gap-4">
                    <div className="my-2 p-1 w-24 border border-black rounded">
                      <div className="flex items-center justify-between">
                        <button
                          className="px-3 rounded font-bold font-font2"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="px-3 rounded font-semibold font-font2"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="underline underline-offset-4 text-sm text-black/60"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <p className="absolute left-24 top-5">
                    <span className="pr-1">₹</span>
                    {item.totalPrice}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
