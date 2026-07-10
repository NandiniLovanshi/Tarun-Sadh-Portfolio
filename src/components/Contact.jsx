import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";


const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    detail: "+91 7247337941",
    link: "tel:+917247337941",
  },

  {
    icon: <FaEnvelope />,
    title: "Email",
    detail: "tarunsadh0@gmail.com",
    link: "mailto:tarunsadh0@gmail.com",
  },

  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    detail: "Indore, Madhya Pradesh",
    link: "#",
  },
];





const Contact = () => {

  return (

    <section
      id="contact"
      className="
      py-12 sm:py-20
      bg-gradient-to-br 
      from-white via-blue-50 to-blue-100
      dark:from-slate-950 dark:via-slate-900 dark:to-blue-950
      "
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Heading */}

        <div className="text-center mb-10 sm:mb-14">


          <h2
            className="
            text-2xl sm:text-3xl lg:text-4xl
            font-bold
            text-gray-900
            dark:text-white
            "
          >

            Contact <span className="text-blue-600">Me</span>

          </h2>


          <p
            className="
            mt-3 sm:mt-4
            text-sm sm:text-base
            text-gray-600
            dark:text-gray-400
            "
          >

            Feel free to contact me for any enquiry or support.

          </p>


        </div>



        {/* Card */}

        <div className="w-full max-w-sm sm:max-w-xl mx-auto">


          <div
            className="
            bg-white
            dark:bg-slate-900
            rounded-2xl sm:rounded-3xl
            shadow-xl
            p-5 sm:p-8
            border
            border-blue-200
            dark:border-blue-800
            hover:-translate-y-2
            transition-all duration-300
            "
          >


            <h3
              className="
              text-xl sm:text-2xl
              font-bold
              text-gray-900
              dark:text-white
              mb-6 sm:mb-8
              "
            >

              Let's Connect

            </h3>



            {/* Contact Information */}


            <div className="space-y-6 sm:space-y-8">


              {
                contactInfo.map((item,index)=>(


                  <div
                    key={index}
                    className="
                    flex
                    items-center
                    gap-3 sm:gap-5
                    "
                  >


                    {/* Icon */}

                    <div
                      className="
                      flex-shrink-0
                      w-10 h-10
                      sm:w-14 sm:h-14
                      rounded-full
                      bg-blue-600
                      flex
                      items-center
                      justify-center
                      text-white
                      text-base
                      sm:text-xl
                      shadow-lg
                      "
                    >

                      {item.icon}

                    </div>




                    {/* Text */}

                    <div className="min-w-0">


                      <h4
                        className="
                        text-sm sm:text-base
                        font-semibold
                        text-gray-900
                        dark:text-white
                        "
                      >

                        {item.title}

                      </h4>



                      <a
                        href={item.link}
                        className="
                        text-sm sm:text-base
                        text-gray-600
                        dark:text-gray-300
                        hover:text-blue-600
                        break-all
                        "
                      >

                        {item.detail}

                      </a>


                    </div>


                  </div>


                ))
              }


            </div>




            {/* Social Links */}


            



          </div>


        </div>



      </div>


    </section>

  );
};


export default Contact;