import React from "react";

const WisconsinSupperClubSwapsDairy = () => {
  return (
    <div>
      <div>
        <p>Oatly Grasshoppers and Crème Brûlées in America’s Dairy State</p>
        <p>
          We traveled to Wisconsin to swap dairy with Oatly at the renowned Duck
          Inn Supper Club. And we made it out alive.
        </p>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ghvMhQJ4TSM?si=8Yny-D5J5CriJhBv"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <p>
          We thought it would be provocative to bring Oatly to Wisconsin -
          America’s Dairy State - and ask famed restaurant The Duck Inn to use
          our products in its most popular dishes.
        </p>
      </div>

      <div className="text-white  flex items-center justify-center px-4 md:px-8">
        <div className="container mx-auto  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 text-lg md:text-xl  font-font2">
                The pitch to the Oatly execs was, “Dairy people trying non-dairy
                products. Chaos ensues.” Well, we went … but turns out there was
                no chaos. Just really kind people telling us how great our
                products are and asking us which channel our television show
                would air on.
              </p>
              <p className="mt-4 text-gray-300 text-lg md:text-xl font-font2">
                Rather than cancel the whole experiment due to an absence of
                confrontation, we forged ahead.
              </p>
              <p className="mt-4 text-gray-300 text-lg md:text-xl font-font2">
                The Duck Inn, a charming establishment in Delavan, Wisconsin, is
                technically considered a supper club. For anyone outside the
                American Midwest, this descriptor likely means nothing. But for
                you history buffs out there - and yes, the overlap between
                “history buffs” and “Oatly enthusiasts” exists - the term
                “supper club” dates back to Prohibition, when local bars needed
                to reposition themselves as restaurants. Today these haunts will
                typically have their own distinct decor, traditional Midwestern
                cuisine, and patrons who drink brandy old-fashioneds for sport.
              </p>
            </div>

            {/* Right Side Content */}
            <div>
              <p className="text-gray-300 text-lg md:text-xl  font-font2">
              This was the scene we walked into on a very special weekend at The Duck Inn, when we swapped dairy with Oatly in five distinct items: a grasshopper (this is a bizarre concoction of ice cream and green liqueur), crème brûlée, clam chowder, vegetable pasta, and salmon with a dill sauce.
              </p>
              <p className="mt-4 text-gray-300 text-ld md:text-xl font-font2">
              As has been the case with all our swaps, this particular experiment was wildly successful. Upwards of 15 people told us the dishes were “very good,” which they delivered in such understated tones that we imagine half of them were lying. But we’re not here to poke holes in the data. We’re here to celebrate a journey deep into America’s dairy capital, where we swapped dairy with Oatly and absolutely no chaos ensued.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Binge all episodes!</p>
        
      </div>
    </div>
  );
};

export default WisconsinSupperClubSwapsDairy;
