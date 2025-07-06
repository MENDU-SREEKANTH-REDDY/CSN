import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import mainImage from "../assets/images/Payroll-3.png";

export default function PayrollManagement() {
  const fullText = "Accurate Payroll. Seamless Compliance. Total Peace of Mind.";
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

      {/* Hero */}
      <div
        className="relative h-[780px] bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <div className="bg-white/80 p-6 rounded-xl shadow-xl">
          <h1 className="text-5xl font-bold text-[#0B1E40] mb-4">Payroll & Compliance Management</h1>
          <p className="text-xl font-medium text-[#0B1E40]">{displayedText}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16 text-white">
        <section>
          <p className="text-lg md:text-xl leading-relaxed text-white">
            Our Payroll and Compliance Management service simplifies the complexities of payroll processing,
            statutory compliance, and documentation for your contracted employees. We ensure accuracy, compliance,
            and timely delivery, enabling your HR team to focus on strategic tasks.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold">Key Services We Offer</h2>
          <motion.hr
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="border-t-2 border-white mt-2 mb-6"
          />

          <div className="grid md:grid-cols-3 gap-6">
            <Card
              title="Efficient Payroll Administration"
              desc="Streamlined payroll processing, ensuring accurate and timely salary disbursements for all contract employees."
            />
            <Card
              title="Statutory Compliance Assurance"
              desc="Complete management of EPF, ESI, PT, TDS, and other compliance filings, ensuring strict adherence to Indian labor laws."
            />
            <Card
              title="Employee Documentation"
              desc="We maintain proper documentation, records, and audit-ready employee files for seamless internal or external checks."
            />
            <Card
              title="Compliance Reporting"
              desc="Detailed, scheduled reporting to meet all statutory and internal compliance needs without missing deadlines."
            />
            <Card
              title="Dedicated Support"
              desc="Get access to a specialized compliance team for handling escalations, audits, and government inspections."
            />
            <Card
              title="Scalable Framework"
              desc="Whether you have 10 or 1000 employees, our systems scale with you—ensuring consistent accuracy and delivery."
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Why Partner with CSN?</h2>
          <ul className="list-disc list-inside space-y-3 text-white/90">
            <li><strong>100% compliance</strong> with real-time statutory tracking and documentation.</li>
            <li><strong>Expert payroll teams</strong> trained in the latest labor and tax regulations.</li>
            <li><strong>Data privacy and security</strong> built into every step of payroll processing.</li>
            <li><strong>End-to-end visibility</strong> through transparent reporting and dashboards.</li>
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

