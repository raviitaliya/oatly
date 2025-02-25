import { useEffect, useState } from "react";

function AddToCard() {
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    console.log(storedCart);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: item.price * newQuantity,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: item.price * newQuantity,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <div className="h-[calc(100vh-64px)]  overflow-y-auto px-4">
      <div className="max-w-4xl mx-auto py-6">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-6 my-5 ">
            <div>
              <img src={item.image} alt={item.name} className="w-36" />
            </div>
            <div className="w-56">
              <h2 className="my-4 font-font2 text-">{item.name}</h2>
              <div className="flex  gap-4">
                <div className="my-2 p-1 w-24 border border-black rounded ">
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
                {" "}
                <span className="pr-1">₹</span>
                {item.totalPrice}
              </p>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="max-w-4xl mx-auto border-t border-gray-200 py-4">
          <div className="flex justify-between items-center">
            <div className="text-lg font-font2">
              Total Amount: <span className="font-semibold">₹{calculateTotal()}</span>
            </div>
            <button 
              className="bg-black text-white px-8 py-2 rounded-md hover:bg-black/80 transition-colors font-font2"
              onClick={() => {
                alert("Proceeding to payment...");
              }}
            >
              Check out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCard;
