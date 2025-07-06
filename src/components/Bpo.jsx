import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import mainImage from "../assets/images/Bpo.jpg";

export default function Bpo() {
  const fullText = "Process Efficiency. Cost Optimization. Focus on What Matters.";
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

      {/* Hero Section */}
      <div
        className="relative h-[780px] bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <div className="bg-white/80 p-6 rounded-xl shadow-xl">
          <h1 className="text-5xl font-bold text-[#0B1E40] mb-4">
            Business Process Outsourcing
          </h1>
          <p className="text-xl font-medium text-[#0B1E40]">{displayedText}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16 text-white">
        <section>
          <p className="text-lg md:text-xl leading-relaxed">
            At CSN Global IT Solutions, our BPO services help you optimize operations, reduce costs, and boost scalability...
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold">Our BPO Services</h2>
          <motion.hr
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="border-t-2 border-white mt-2 mb-6"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Customer Support", "Omnichannel assistance (email, chat, voice)..."],
              ["Data Processing", "Clean, secure, and structured data entry..."],
              ["Technical Helpdesk", "Tier 1 & Tier 2 IT support..."],
              ["Payroll & HR Support", "End-to-end support in employee documentation..."],
              ["Finance & Accounting", "Invoice handling, reconciliation, and more."],
            ].map(([title, desc], index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-lg shadow-md backdrop-blur transform transition duration-300 hover:scale-105 hover:bg-white/20"
              >
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-white/90">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Why Choose Our BPO Model?</h2>
          <ul className="list-disc list-inside space-y-3 text-white/90">
            <li><strong>Experienced teams</strong> trained for global delivery and diverse industries.</li>
            <li><strong>Cost-efficient operations</strong> powered by SLA-driven process management.</li>
            <li><strong>Quick onboarding</strong> and process transition for minimal business disruption.</li>
            <li><strong>Secure infrastructure</strong> with full compliance on data confidentiality.</li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}
