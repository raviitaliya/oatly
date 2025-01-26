import Oatlytv from "../assets/ProductSvg/OatlyTV.svg";
import pinkImage from "../assets/Footer/Pink.png";

const OatlyTv = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 min-h-[40vh] md:min-h-[85vh] bg-center w-full mt-10"
      style={{ backgroundImage: `url(${pinkImage})` }}
    >
      {/* TV Image Section */}
      <div className="flex items-center justify-end p-4 md:p-6 max-sm:justify-center">
        <img
          src={Oatlytv}
          alt="OatlyTV"
          className="w-[300px] h-[300px] md:w-[600px] md:h-[400px]"
        />
      </div>

      {/* Text Section */}
      <div className="flex items-center justify-start p-4 md:p-6 max-sm:justify-center max-sm:text-center">
        <div className="max-w-lg">
          <h1 className="text-6xl md:text-6xl font-font1 mb-4 md:mb-6">
            HOW DO WE MAKE OUR OAT DRINKS?
          </h1>
          <p className="text-lg md:text-xl leading-relaxed font-font2">
            Our oat base is just oats and water. But it's what we do with those
            oats and that water that makes Oatly so special.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OatlyTv;
