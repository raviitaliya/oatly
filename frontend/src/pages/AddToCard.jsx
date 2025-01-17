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
  return (
    <div>
      <div>
        {cart.map((item) => (
          <div key={item.id} className="flex gap-6 my-5 ">
            <div>
              <img src={item.image} alt={item.name} className="w-36" />
            </div>
            <div className="w-56">
              <h2 className="my-4 font-font2">{item.name}</h2>
              <div className="flex  gap-5">
                <div className="my-2 p-1 w-24 border border-black rounded ">
                  <div className="flex items-center justify-between">
                    <button className=" px-3 rounded font-bold font-font2  hover:bg-gray-200">
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button className=" px-3 rounded font-semibold  font-font2  hover:bg-gray-200">
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="underline underline-offset-4"
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
    </div>
  );
}

export default AddToCard;
