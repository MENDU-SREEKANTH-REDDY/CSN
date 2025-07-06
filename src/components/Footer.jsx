import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-0 pb-10 bg-gradient-to-b from-[#ffffff33] via-[#1F5EE580] to-[#1F5EE5] backdrop-blur-sm text-white relative">
      {/* Straight White Divider Line */}
      <div className="w-full h-[2px] bg-white opacity-30" />

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-10 mt-20">
        <a
          href="https://www.linkedin.com/company/csn-global-it-solutions/posts/?feedView=all"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-white p-3 rounded-full text-[#1F5EE5] hover:scale-110 transition duration-300 shadow-md">
            <FaLinkedin size={22} />
          </div>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <div className="bg-white p-3 rounded-full text-[#1F5EE5] hover:scale-110 transition duration-300 shadow-md">
            <FaInstagram size={22} />
          </div>
        </a>
        <a href="mailto:hr@csnglobalit.com">
          <div className="bg-white p-3 rounded-full text-[#1F5EE5] hover:scale-110 transition duration-300 shadow-md">
            <FaEnvelope size={22} />
          </div>
        </a>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* About */}
        <div>
          <h3 className="text-black font-semibold mb-2">About</h3>
          <a href="/team" className="block mb-1 hover:underline">About Us</a>
          {/* <a href="/team" className="hover:underline">What We Do</a> */}
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-black font-semibold mb-2">Explore</h3>
          <a href="/" className="block mb-1 hover:underline">Home</a>
          <a href="/team" className="block mb-1 hover:underline">Team</a>
          <a href="/privacy" className="block hover:underline">Privacy Policy</a>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-black font-semibold mb-2">Services</h3>
          <a href="/staffing" className="block mb-1 hover:underline">IT Staffing</a>
          <a href="/RPO" className="block mb-1 hover:underline">RPO</a>
          <a href="/BPO" className="block hover:underline">BPO</a>
          <a href="/Payroll" className="block hover:underline">Payroll</a>

        </div>

        {/* Contact */}
        <div>
          <h3 className="text-black font-semibold mb-2">Contact</h3>
          <a href="">Mobile :</a>
          <p className="opacity-70">+91 8374063809</p>
          <a href="">Email:</a>
          <p className="opacity-70">hr@csnglobalit.com</p>
          <a href="">Address:</a>
          <p className="opacity-70">207,Manjeera Trinity Corporate,KPHB 9 phase,500085</p>
                     <a href="">Available:</a>

                     <p className="opacity-70">Mon-Fri 9 AM to 6 PM IST
  </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm opacity-80">
        © {new Date().getFullYear()} CSN Global IT Solutions. All rights reserved.
      </div>
    </footer>
  );
}
