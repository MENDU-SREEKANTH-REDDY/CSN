import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import mainImage from "../assets/images/Home-3.png";


export default function Team() {

  const fullText = "Leading with purpose. Building with trust.";
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


  const team = [
    {
      name: "Mounika Reddy",
      role: "Director of Client Engagement",
      description:
        "Mounika ensures timely and accurate delivery for every contract signed. She brings 6+ years in full-cycle recruitment and is known for his no-compromise attitude on quality.",
    },
    {
      name: "Chanikya Potlapal",
      role: "Director of Operations",
      description:
        "Chanikya leads backend strategy, delivery, and cross-functional execution with precision. A process-optimizer by nature, he ensures seamless coordination across recruitment, compliance, and client servicing—keeping CSN efficient and agile.",
    },
    {
      name: "Nitish Kumar",
      role: "Director of Recruitment",
      description:
        "A talent architect at heart, Nitish brings over a decade of hiring expertise across IT verticals. He leads the sourcing engine at CSN, building high-performing teams through strategic hiring, quality benchmarks, and people-first leadership.",
    },
  ];

  return (
    <div className="bg-gradient-to-tr from-[#0B1E40] via-[#103E7D] to-[#1C64F2] text-white min-h-screen scroll-smooth">
      <Navbar />

      {/* Hero */}
      <div
        className="relative h-[680px] bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <div className="bg-white/90 p-6 rounded-xl shadow-xl text-[#0B1E40]">
          <h1 className="text-5xl font-bold mb-4">Our Leadership</h1>
          <p className="text-xl font-medium text-[#0B1E40]">{displayedText}</p>

        </div>
      </div>

      {/* Intro Paragraph */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <p className="text-xl text-white leading-relaxed text-center md:text-left  border-b border-white/60 my-6">
          At CSN Global IT Solutions, our leadership team brings together deep industry insight,
          a passion for people, and a commitment to building India’s most reliable staffing brand.
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-8xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-10">
        {/* Left Section */}
        <div className="md:col-span-8 space-y-16">
          {/* Founder */}
          <div>
            <h2 className="text-3xl font-bold inline-block">Founder</h2>
            <motion.hr
              initial={{ width: 0 }}
              whileInView={{ width: "115px" }}
              transition={{ duration: 0.8 }}
              className="border-t-2 border-white mt-1 mb-6 origin-left"
            />

            <div className="bg-white text-[#0B1E40] border border-gray-200 rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-bold inline-block">Sainadh Reddy Mendu</h3>
              <motion.hr
                initial={{ width: 0 }}
                whileInView={{ width: "250px" }}
                transition={{ duration: 0.8 }}
                className="border-t-2 border-[#0B1E40] mt-1 mb-2 origin-left"
              />
              <p className="text-lg font-semibold text-blue-900 mb-3">Founder & CEO</p>
              <p className="text-gray-700 leading-relaxed text-base">
                With a sharp eye for talent and a passion for building scalable teams,
                Sainadh founded CSN Global IT Solutions to redefine staffing industry with trust, speed, and strategy.
                Backed by deep recruitment expertise and an ambition to build a nationally recognized brand,
                he leads CSN with a hands-on, client-first mindset and a vision to deliver excellence in every hire.
              </p>
            </div>
          </div>

          {/* Core Team */}
          <div>
            <h2 className="text-3xl font-bold inline-block">Meet the Core Team</h2>
            <motion.hr
              initial={{ width: 0 }}
              whileInView={{ width: "283px" }}
              transition={{ duration: 0.8 }}
              className="border-t-2 border-white mt-1 mb-6 origin-left"
            />

            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white text-[#0B1E40] border border-gray-200 rounded-2xl p-5 shadow-md"
                >
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <motion.hr
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.3, ease: "easeInOut" }}
                    className="border-t-2 border-[#0B1E40] mt-1 mb-2"
                  />
                  <p className="text-xl font-semibold text-blue-900 mb-2">{member.role}</p>
                  <p className="text-gray-700 text-base">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:col-span-4 space-y-16 pt-2">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mt-15  mb-3">Founder’s Note</h2>
            <p className="italic text-white">
              “We started CSN Global IT Solutions with one mission — to simplify hiring and make it human again.
              In a world chasing speed, we prioritize the right fit. We believe in long-term partnerships,
              ethical practices, and growing businesses through great people. This isn’t just staffing. It’s impact.”
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-3">Built on Trust. Driven by People.</h2>
            <p className="text-white">
              We’re not just recruiters—we’re relationship builders. Every member of our team is aligned
              with our values: integrity, responsiveness, accountability, and empathy.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
