import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitterSquare } from "react-icons/fa";

import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-slate-900 px-10 w-screen mt-16 md:h-96  md:py-16 text-center overflow-hidden">
       <div className="upper-part md:flex justify-around">
                <div className="name">
                  <h1 className="font-bold md:text-6xl">
                    ShopyCom
                  </h1>
                </div>
                <div className="support text-start">
                    <ul>
                      <li className="font-bold md:text-4xl mb-6">Features</li>
                      <li>Link Shortening</li>
                      <li>Branded Links</li>
                      <li>Analytics</li>
                    </ul>
                </div>
                <div className="about-us text-start">
                <ul>
                      <li className="font-bold md:text-4xl mb-6">About Us</li>
                      <li>Blog</li>
                      <li>Developers</li>
                      <li>Support</li>
                    </ul>
                </div>
                <div className="stay-connected text-start">
                <ul>
                      <li className="font-bold md:text-4xl mb-6">Company</li>
                      <li>About</li>
                      <li>Our Team</li>
                      <li>Careers</li>
                      <li>Contact</li>
                    </ul>
                </div>
       </div>
       <div className="middle-part md:flex justify-around border-t-2 md:py-10">
        <div className="text font-bold">
          <h2>Experience ShopyCom</h2>
        </div>
            
            <div className="socials px-10 py-6 flex gap-6">
            <p><FaFacebookSquare size={32}/></p>
            <p>
            <FaInstagramSquare size={32}/>

            </p>
            <p>
            <IoLogoLinkedin size={32}/>


            </p>
            <p>
            <FaTwitterSquare size={32}/>


            </p>
            <p>
            <IoLogoYoutube size={32}/>



            </p>
            </div>

       </div>
       

    </div>
  )
}

export default Footer