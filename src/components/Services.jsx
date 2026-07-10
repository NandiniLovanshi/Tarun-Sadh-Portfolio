import {
  FaCar,
  FaHandshake,
  FaMoneyCheckAlt,
  FaFileSignature,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCar />,
    title: "New Car Sales",
    description:
      "Helping customers choose the perfect Maruti Suzuki vehicle according to their budget and requirements.",
  },
  {
    icon: <FaHandshake />,
    title: "Customer Relationship",
    description:
      "Building long-term customer relationships with professional support and guidance.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Finance Assistance",
    description:
      "Providing complete guidance for car loans, EMI options and finance approvals.",
  },
  {
    icon: <FaFileSignature />,
    title: "Documentation",
    description:
      "Helping customers with booking, registration, insurance and vehicle documents.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Insurance Support",
    description:
      "Assistance in selecting the best insurance plans for complete vehicle protection.",
  },
  {
    icon: <FaHeadset />,
    title: "After Sales Support",
    description:
      "Providing continuous customer support, follow-ups and service assistance.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      data-aos="fade-up"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600">Services</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I provide professional automobile sales and customer relationship
            services to ensure a smooth and satisfying buying experience.
          </p>

        </div>

        {/* Service Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 place-items-center">

          {services.map((service, index) => (

            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="bg-white dark:bg-slate-900 rounded-xl p-5 w-full max-w-[330px] border border-blue-100 dark:border-blue-800 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-2xl text-blue-600">

                {service.icon}

              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg sm:text-xl font-bold text-center text-gray-900 dark:text-white">

                {service.title}

              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-center text-gray-600 dark:text-gray-300">

                {service.description}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;