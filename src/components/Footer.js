import { PaymentLogo, nextLogo, nextLogoWhite } from "../assets";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-black text-[#949494] py-20">
            <div className="max-w-screen-xl mx-auto grid grid-cols-4">
                <div className="flex flex-col gap-4">
                    <img className="w-36" src={nextLogoWhite} alt="" />
                    <p className="w-60">&copy; 2024 ALL RIGHTS RESERVED N3XT BRAND</p>
                    <img className="w-36" src={PaymentLogo} alt="" />
                    <div className="flex items-center gap-4 text-lg text-gray-400">
                        <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
                        <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
                        <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
                        <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
                        <FaHome className="hover:text-white duration-300 cursor-pointer" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
                    <div className="text-base flex flex-col gap-2">
                        <p>Sale points</p>
                        <p>Terms and Conditions</p>
                        <p>How to become a distributor</p>
                        <p>Payment methods</p>
                        <p>About us</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">My account</h2>
                    <div className="text-base flex flex-col gap-2">
                        <p>Privacy Policy, GDPR & Cookies</p>
                        <p>Delivery</p>
                        <p>FAQ</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl text-white mb-4">SUBSCRIBE TO OUR NEWSLETTER</h2>
                    <input className="bg-transparent border px-4 py-2 text-sm" type="text" placeholder="Your e-mail" />
                    <button className="text-lg text-white border px-1 mt-2 hover:bg-gray-900 active:bg-white active:text-black ">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Footer
