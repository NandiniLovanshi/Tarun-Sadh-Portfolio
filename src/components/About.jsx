import {
  FaUserTie,
  FaCar,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      data-aos="fade-right"
      className="py-24 bg-white dark:bg-slate-950 transition-all duration-500"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h4 className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest">
          About Me
        </h4>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Professional Sales Manager
        </h2>

        <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

        {/* Description */}
        <p className="mt-8 sm:mt-10 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2 sm:px-0 animate-fadeUp">
          I am an experienced <strong>Relationship Manager</strong> at
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            {" "}Maruti Suzuki
          </span>
          , passionate about helping customers choose the perfect vehicle
          according to their needs and budget.
          I specialize in automobile sales, customer relationship management,
          finance coordination, insurance assistance, vehicle delivery, and
          after-sales support. My goal is to provide every customer with a
          smooth, transparent, and satisfying car buying experience.
        </p>

        {/* Cards */}
        <div 
        data-aos="fade-up"
        
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          <div className="bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-blue-800 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <FaCar className="text-4xl text-blue-600 mx-auto mb-5" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Car Sales
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-6">
              Helping customers choose the right Maruti Suzuki vehicle.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-blue-800 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <FaHandshake className="text-4xl text-blue-600 mx-auto mb-5" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Customer Care
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-6">
              Building long-term trust through excellent customer service.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-blue-800 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <FaUsers className="text-4xl text-blue-600 mx-auto mb-5" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Team Leadership
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-6">
              Working efficiently with sales teams to achieve monthly targets.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-blue-800 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <FaUserTie className="text-4xl text-blue-600 mx-auto mb-5" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Professional Service
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-6">
              Dedicated to providing a smooth and hassle-free buying experience.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;