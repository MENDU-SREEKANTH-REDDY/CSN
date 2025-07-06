import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import mainImage from "../assets/images/Services -1.png";

export default function Itstaffing() {
  const fullText = "Flexible Hiring. Proven Talent. Scalable Teams.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-tr from-[#0B1E40] via-[#103E7D] to-[#1C64F2] min-h-screen text-white scroll-smooth">
      <Navbar />

      <div
        className="relative h-[780px] bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <div className="bg-white/80 p-6 rounded-xl shadow-xl">
          <h1 className="text-5xl font-bold text-[#0B1E40] mb-4">IT Staffing Solutions</h1>
          <p className="text-xl font-medium text-[#0B1E40]">{displayedText}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16 text-white">
        <section>
          <p className="text-lg md:text-xl leading-relaxed text-white">
            Whether you're building a new team or filling urgent roles, our IT staffing solutions are designed to connect you with top-tier talent — efficiently and reliably. We tailor our approach to your technical requirements, timeline, and organizational culture.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold">Our Engagement Models</h2>
          <motion.hr
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="border-t-2 border-white mt-2 mb-6"
          />

          <div className="grid md:grid-cols-3 gap-6">
            <Card title="Contract Staffing" desc="Scale your workforce for short-term needs or project-based work with highly vetted IT professionals." />
            <Card title="Permanent Staffing" desc="Hire full-time employees who not only meet technical criteria but align with your company’s vision and values." />
            <Card title="Contract-to-Hire" desc="Minimize hiring risk by evaluating a candidate’s performance on the job before making a long-term commitment." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Why Choose CSN?</h2>
          <ul className="list-disc list-inside space-y-3 text-white/90">
            <li><strong>Fast turnaround</strong> with access to a curated talent pool across technologies and domains.</li>
            <li><strong>Rigorous screening</strong> for technical proficiency and cultural fit.</li>
            <li><strong>Dedicated account managers</strong> who understand your goals and streamline your hiring process.</li>
            <li>Scalable engagement options tailored to startups, mid-size businesses, and enterprises.</li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="bg-white/10 p-6 rounded-lg shadow-md backdrop-blur transform transition duration-300 hover:scale-105 hover:bg-white/20">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-white/90">{desc}</p>
    </div>
  );
}
