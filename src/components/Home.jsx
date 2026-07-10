import {
    FaPhoneAlt,
    FaEnvelope,
    FaLinkedin,
    FaCar,
} from "react-icons/fa";

const Home = () => {
    return (
        <section
            id="home"
            data-aos="fade-up"
            className="relative overflow-hidden min-h-screen flex items-center pt-24 transition-all duration-500 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950"
        >
            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 -right-40 w-[450px] h-[450px] bg-blue-300/20 dark:bg-cyan-500/20 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">

                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14">

                    {/* Left Side */}

                    <div className="flex-1 text-center lg:text-left animate-fadeLeft">


                        <h1 className="mt-10 sm:mt-14 lg:mt-20 text-3xl sm:text-3xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight animate-fadeUp">
                            Tarun Sadh
                        </h1>

                        <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 dark:text-blue-400 animate-fadeUp">
                            Relationship Manager At Maruti Suzuki
                        </h2>



                        <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-xl animate-fadeUp">
                            Experienced Sales Manager with expertise in automobile sales,
                            customer relationship management, finance coordination, and team
                            leadership. Dedicated to helping customers choose the perfect
                            Maruti Suzuki vehicle while delivering an exceptional buying
                            experience.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5 animate-fadeUp">

                            <a
                                href="#contact"
                                className="px-8 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 hover:-translate-y-1 hover:scale-105 text-white font-semibold shadow-lg transition-all duration-300"
                            >
                                Contact Me
                            </a>

                            <a
                                href="#cars"
                                className="px-8 py-3 rounded-xl border-2 border-blue-700 text-blue-700 dark:text-blue-400 hover:bg-blue-700 hover:text-white hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                            >
                                View Cars
                            </a>

                        </div>

                        {/* Statistics */}
                        <div
                        data-aos="zoom-in"
                        className="grid grid-cols-3 gap-2 sm:gap-6 mt-9 w-full max-w-lg mx-auto lg:mx-0 animate-fadeUp">

                            {/* Card 1 */}
                            <div className="bg-white dark:bg-slate-900 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-lg border border-blue-100 dark:border-blue-800 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center">

                                <h2 className="text-lg sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                                    5+
                                </h2>

                                <p className="text-[10px] sm:text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2 leading-tight">
                                    Years Experience
                                </p>

                            </div>

                            {/* Card 2 */}
                            <div className="bg-white dark:bg-slate-900 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-lg border border-blue-100 dark:border-blue-800 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center">

                                <h2 className="text-lg sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                                    260+
                                </h2>

                                <p className="text-[10px] sm:text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2 leading-tight">
                                    Cars Delivered
                                </p>

                            </div>

                            {/* Card 3 */}
                            <div className="bg-white dark:bg-slate-900 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-lg border border-blue-100 dark:border-blue-800 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center">

                                <h2 className="text-lg sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                                    98%
                                </h2>

                                <p className="text-[10px] sm:text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2 leading-tight">
                                    Customer Satisfaction
                                </p>

                            </div>

                        </div>



                    </div>

                    {/* Right Side */}
                    <div className="flex-1 flex justify-center animate-fadeRight">

                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30 scale-110"></div>

                            {/* Image */}
<div className="relative
w-44 h-44
sm:w-56 sm:h-56
md:w-64 md:h-64
lg:w-[300px] lg:h-[300px]
rounded-full
overflow-hidden
border-2 border-blue-700
shadow-[0_20px_60px_rgba(59,130,246,0.4)]
animate-float
animate-glow
hover:scale-105
transition-all
duration-500"
>
    <img
        src="/sales-manager.png"
        alt="Sales Manager"
        className="w-full h-full object-cover"
    />
</div>

{/* Floating Badge */}
<div
    className="absolute
    -bottom-3 -left-2
    sm:-bottom-5 sm:-left-5
    bg-blue-700 dark:bg-blue-600
    px-3 py-2
    sm:px-5 sm:py-3
    rounded-xl
    shadow-xl
    flex items-center gap-2 sm:gap-3
    animate-float
    hover:scale-105
    transition-all duration-300"
>
    <FaCar className="text-lg sm:text-2xl text-white" />

    <div>
        <h3 className="text-sm sm:text-base font-bold text-white">
            250+
        </h3>

        <p className="text-[11px] sm:text-sm text-blue-100">
            Cars Sold
        </p>
    </div>
</div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Home;