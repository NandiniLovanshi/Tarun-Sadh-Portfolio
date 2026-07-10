import { FaAward, FaBuilding } from "react-icons/fa";

const certificates = [
  {
    title: "Risk Management",
    company: "IDIGITALPRENEUR PRIVATE LIMITED",
    year: "Certified",
    link: "/risk-management.jpeg",
    description:
      "Successfully completed professional training in Risk Management with practical knowledge of identifying, assessing and managing business risks.",
  },
  {
    title: "Marketing Mindset",
    company: "IDIGITALPRENEUR PRIVATE LIMITED",
    year: "Certified",
    link: "/marketing-mindset.jpeg",
    description:
      "Completed Marketing Mindset certification focusing on customer psychology, branding, communication and modern marketing strategies.",
  },
  {
    title: "Sales Pro",
    company: "IDIGITALPRENEUR PRIVATE LIMITED",
    year: "Certified",
    link: "/sales-pro.jpeg",
    description:
      "Successfully completed Sales Pro certification covering professional sales techniques, customer handling, negotiation and closing strategies.",
  },
];

const Certificate = () => {
  return (
    <section
      id="certificate"
      data-aos="fade-up"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600">Certificates</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications that enhanced my sales, marketing,
            customer relationship management and business development skills.
          </p>
        </div>

        {/* Cards */}
        <div 
        data-aos="zoom-in"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {certificates.map((item, index) => (

            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-blue-100 dark:border-blue-800 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-6 max-w-sm mx-auto w-full"
            >

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white">
                {item.title}
              </h3>

              {/* Company */}
              <p className="mt-3 flex justify-center items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium text-center">
                <FaBuilding />
                {item.company}
              </p>

              {/* Badge */}
              <div className="flex justify-center mt-4">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {item.year}
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-7 text-center text-gray-600 dark:text-gray-300">
                {item.description}
              </p>

              {/* Button */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 py-3 text-white font-semibold hover:bg-blue-800 hover:scale-105 transition-all duration-300"
              >
                <FaAward />
                View Certificate
              </a>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Certificate;