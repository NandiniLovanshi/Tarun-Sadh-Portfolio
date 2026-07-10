import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";


const quickLinks = [
  "Home",
  "About",
  "Services",
  "Cars",
  "Contact",
];


const Footer = () => {

  return (

    <footer
      className="
      bg-slate-950
      text-gray-300
      py-10 sm:py-12
      "
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-3
          gap-8
          "
        >


          {/* Quick Links */}

          <div>

            <h3
              className="
              text-lg
              font-semibold
              text-white
              mb-4
              "
            >
              Quick Links
            </h3>


            <ul className="space-y-3">

              {
                quickLinks.map((link,index)=>(

                  <li key={index}>

                    <a
                      href={`#${link.toLowerCase()}`}
                      className="
                      text-sm
                      hover:text-blue-500
                      transition
                      "
                    >
                      {link}
                    </a>

                  </li>

                ))
              }

            </ul>

          </div>





          {/* Contact */}

          <div>

            <h3
              className="
              text-lg
              font-semibold
              text-white
              mb-4
              "
            >
              Contact
            </h3>


            <div className="space-y-4">


              <a
                href="tel:+917247337941"
                className="
                flex
                items-center
                gap-3
                text-sm
                hover:text-blue-500
                transition
                "
              >

                <FaPhoneAlt className="text-blue-500"/>

                +91 7247337941

              </a>




              <a
                href="mailto:tarunsadh0@gmail.com"
                className="
                flex
                items-center
                gap-3
                text-sm
                hover:text-blue-500
                transition
                break-all
                "
              >

                <FaEnvelope className="text-blue-500"/>

                tarunsadh0@gmail.com

              </a>


            </div>


          </div>






          {/* Social */}

          <div>


            <h3
              className="
              text-lg
              font-semibold
              text-white
              mb-4
              "
            >
              Follow Us
            </h3>



            <div className="flex gap-4">


              <a
                href="#"
                className="
                w-10 h-10
                rounded-full
                bg-blue-600
                flex
                items-center
                justify-center
                text-white
                hover:scale-110
                transition
                "
              >

                <FaLinkedin />

              </a>

              <a
  href="https://instagram.com/tarun_sadh_2020"
  target="_blank"
  rel="noreferrer"
  className="
  w-10 h-10
  rounded-full
  bg-blue-600
  flex
  items-center
  justify-center
  text-white
  hover:scale-110
  transition
  "
>
  <FaInstagram />
</a>


            </div>


          </div>


        </div>



        {/* Bottom */}

        <div
          className="
          border-t
          border-gray-700
          mt-10
          pt-6
          text-center
          text-xs sm:text-sm
          text-gray-500
          "
        >

          © {new Date().getFullYear()} Tarun Sadh. All Rights Reserved.

        </div>


      </div>


    </footer>

  );

};


export default Footer;