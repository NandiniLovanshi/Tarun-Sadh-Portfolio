import Navbar from "../components/Navbar";

const cars = [
  {
    name: "Maruti Suzuki Swift",
    image: "/public/swift.jpg",
    price: "₹6.49 Lakh",
  },
  {
    name: "Maruti Suzuki Baleno",
    image: "/public/baleno.jpg",
    price: "₹6.70 Lakh",
  },
  {
    name: "Maruti Suzuki Brezza",
    image: "/public/brezza.jpg",
    price: "₹8.69 Lakh",
  },
  {
    name: "Maruti Suzuki Fronx",
    image: "/public/fronxx.jpg",
    price: "₹7.54 Lakh",
  },
  {
    name: "Maruti Suzuki Grand Vitara",
    image: "/public/grand vitara.jpg",
    price: "₹11.42 Lakh",
  },
  {
    name: "Maruti Suzuki Ertiga",
    image: "/public/Ertiga.jpg",
    price: "₹8.97 Lakh",
  },
];

const Cars = () => {
  return (
    <>
      <Navbar />

      <section
        className="
        py-16 sm:py-20 lg:py-24
        min-h-screen
        bg-gradient-to-br
        from-white
        via-blue-50
        to-blue-100
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Heading */}

          <div className="text-center mb-10 sm:mb-14">

            <h1
              className="
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-bold
              text-gray-900
              dark:text-white
              "
            >
              Maruti Suzuki Cars
            </h1>

            <p
              className="
              mt-3
              text-sm
              sm:text-base
              lg:text-lg
              text-gray-600
              dark:text-gray-400
              "
            >
              Explore the latest Maruti Suzuki models.
            </p>

          </div>

          {/* Cards */}

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            "
          >
            {cars.map((car, index) => (
              <div
                key={index}
                className="
                bg-white
                dark:bg-slate-900
                rounded-2xl
                overflow-hidden
                border
                border-blue-100
                dark:border-slate-700
                shadow-lg
                transition-all
                duration-300
                md:hover:-translate-y-2
                md:hover:shadow-2xl
                active:scale-95
                "
              >
                {/* Image */}

                <img
                  src={car.image}
                  alt={car.name}
                  className="
                  w-full
                  h-40
                  sm:h-48
                  lg:h-52
                  object-cover
                  "
                />

                {/* Content */}

                <div className="p-4 sm:p-5">
                 
                  <h2
                    className="
                    text-lg
                    sm:text-xl
                    font-bold
                    text-gray-900
                    dark:text-white
                    "
                  >
                    {car.name}
                  </h2>

                  <p
                    className="
                    mt-2
                    text-sm
                    sm:text-base
                    text-blue-600
                    dark:text-blue-400
                    font-semibold
                    "
                  >
                    Starting From {car.price}
                  </p>

                  <button
  onClick={() => {
    window.location.href = "/#contact";
  }}
  className="
    mt-5
    w-full
    py-2.5
    sm:py-3
    rounded-xl
    bg-blue-600
    hover:bg-blue-700
    text-white
    text-sm
    sm:text-base
    font-semibold
    transition-all
    duration-300
    active:scale-95
  "
>
  Enquire Now
</button>
                 
                    

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      
    </>
  );
};

export default Cars;