function AddToCardBtn({ onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-black hover:bg-black  text-white text-[22px] font-font1 text-pretty w-64 py-1  rounded"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default AddToCardBtn;
