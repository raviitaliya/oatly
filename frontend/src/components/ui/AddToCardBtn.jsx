function AddToCardBtn({ onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-black hover:bg-black  text-white font-font1 text-pretty w-64 py-2 px-4 rounded"
      >
        Add To Card
      </button>
    </div>
  );
}

export default AddToCardBtn;
