import {
    FaBriefcase,
    FaBuilding,
    FaCalendarAlt,
} from "react-icons/fa";

const Experience = () => {
    return (
        <section
            id="experience"
            data-aos="fade-up"
            className="py-20 bg-blue-50 dark:bg-slate-900 transition-all duration-500"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h4 className="text-blue-600 dark:text-blue-400 uppercase tracking-[4px] font-semibold">
                        Experience
                    </h4>

                    <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                        My Professional Journey
                    </h2>

                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>
                </div>

                <div className="space-y-8">

                    {/* Experience 1 */}
                    <div 
                    data-aos="zoom-in"
                    
                    className="bg-white dark:bg-slate-950 rounded-2xl shadow-lg border-2 border-blue-600 p-4 sm:p-6 hover:-translate-y-2 transition-all duration-300">

                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">

                            <div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                                    Relationship Manager
                                </h3>

                                <p className="flex items-center gap-2 mt-2 text-sm sm:text-base text-blue-600 dark:text-blue-400">
                                    <FaBuilding />
                                    Maruti Suzuki Arena – KTL Automobile, Star Square,
                                    Vijay Nagar, Indore
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-blue-600" />
                                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                                    2025 – Present
                                </span>
                            </div>

                        </div>

                        <p className="mt-5 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-gray-600 dark:text-gray-300">
                            Currently working as a <strong>Relationship Manager</strong> at
                            <span className="font-semibold text-blue-600 dark:text-blue-400">
                                {" "}Maruti Suzuki Arena – KTL Automobile
                            </span>, managing end-to-end customer interactions, automobile sales,
                            finance & insurance coordination, documentation, vehicle delivery,
                            after-sales support, and maintaining long-term customer relationships
                            while consistently achieving monthly sales targets.
                        </p>

                    </div>

                    {/* Experience 2 */}
                    <div 
                    data-aos="zoom-in"
                    className="bg-white dark:bg-slate-950 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-800 p-4 sm:p-6 hover:-translate-y-2 transition-all duration-300">

                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">

                            <div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                                    Relationship Manager
                                </h3>

                                <p className="flex items-center gap-2 mt-2 text-sm sm:text-base text-blue-600 dark:text-blue-400">
                                    <FaBuilding />
                                    Maruti Suzuki Arena – Patel Motors, Vijay Nagar, Indore
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                                <FaCalendarAlt />
                                <span>2023 – 2025 (2 Years)</span>
                            </div>

                        </div>

                        <p className="mt-5 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 text-gray-600 dark:text-gray-300">
                            Managed automobile sales, finance coordination, customer relationship
                            management, insurance assistance, vehicle delivery, and after-sales
                            support while consistently achieving monthly sales targets and delivering
                            excellent customer satisfaction.
                        </p>

                    </div>

                    {/* Experience 3 */}
                    <div 
                    data-aos="zoom-in"
                    className="bg-white dark:bg-slate-950 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-800 p-4 sm:p-6 hover:-translate-y-2 transition-all duration-300">

                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">

                            <div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                                    Customer Support Executive
                                </h3>

                                <p className="flex items-center gap-2 mt-2 text-sm sm:text-base text-blue-600 dark:text-blue-400">
                                    <FaBuilding />
                                    SBI Card
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                                <FaCalendarAlt />
                                <span>2022 – 2023 (1 Year)</span>
                            </div>

                        </div>

                        <p className="mt-5 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 text-gray-600 dark:text-gray-300">
                            Assisted customers with SBI Credit Card services, resolved customer
                            queries, handled complaints professionally, explained card benefits,
                            processed service requests, and ensured high customer satisfaction
                            through effective communication and timely support.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Experience;