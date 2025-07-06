import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import mainImage from "../assets/images/RPO1.png";

export default function Rpo() {
  const fullText = "Strategic Hiring. Streamlined Execution. End-to-End Ownership.";
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
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundPositionY: "15%",
        }}
      >
        <div className="bg-white/80 p-6 rounded-xl shadow-xl">
          <h1 className="text-5xl font-bold text-[#0B1E40] mb-4">
            Recruitment Process Outsourcing
          </h1>
          <p className="text-xl font-medium text-[#0B1E40]">{displayedText}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16 text-white">
        <section>
          <p className="text-lg md:text-xl leading-relaxed">
            Our RPO services offer a scalable, cost-effective recruitment solution where CSN Global IT Solutions acts as an extension of your internal hiring team...
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold">Our RPO Services</h2>
          <motion.hr
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="border-t-2 border-white mt-2 mb-6"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Job Requirement Intake",
              "Sourcing & Screening",
              "Interview Coordination",
              "Employer Branding",
              "Analytics & Reporting",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-white/10 p-6 rounded-lg shadow-md backdrop-blur transform transition duration-300 hover:scale-105 hover:bg-white/20"
              >
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-white/90">
                  {title === "Job Requirement Intake"
                    ? "Understand roles in detail and conduct market mapping to attract the right talent."
                    : title === "Sourcing & Screening"
                    ? "Identify, assess, and shortlist high-potential candidates aligned with your hiring goals."
                    : title === "Interview Coordination"
                    ? "Manage scheduling, follow-ups, and candidate experience from start to offer."
                    : title === "Employer Branding"
                    ? "Enhance your visibility and reputation to attract top-tier talent consistently."
                    : "Leverage data-driven insights on hiring pipeline, quality metrics, and process improvements."}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Why Choose Our RPO Model?</h2>
          <ul className="list-disc list-inside space-y-3 text-white/90">
            <li><strong>Dedicated recruiting team</strong> aligned with your business goals.</li>
            <li><strong>Reduced time-to-hire</strong> and <strong>lower cost-per-hire</strong> through optimized processes.</li>
            <li><strong>Flexible engagement</strong> options — from full-cycle RPO to project-based hiring.</li>
            <li><strong>Scalable delivery</strong> model that adjusts based on your hiring volume and demand.</li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}
