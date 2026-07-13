import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFileDownload,
} from "react-icons/fa";

function Contact() {
       
        const form = useRef();
        const [sending, setSending] = useState(false);
        const sendEmail = (e) => {
            e.preventDefault();

            setSending(true);

            emailjs.sendForm(
              "service_9y875nd",
              "template_6fw8hbh",
              form.current,
              "EZIBH-eRizP-pdc2o"
            )
                .then(() => {
                alert("Message sent successfully! 🚀");
                form.current.reset();
                setSending(false);
                })
                .catch((error) => {
                console.error("Status:", error.status);
                console.error("Text:", error.text);
                console.error(error);

                alert("Failed to send message ❌");
                setSending(false);
              });
            };

        const phone = "201126516608";

        const whatsappMessage = `Hi Ahmed,

    I visited your portfolio and was impressed by your projects and technical skills.

    I'd like to connect with you regarding a potential opportunity.

    Looking forward to hearing from you.

    Best regards.`;

        const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
            whatsappMessage
    )}`;
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6"
    >
        
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[6px] text-blue-500 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's <span className="text-blue-500">Connect</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            I'm currently seeking opportunities in Machine Learning,
            Artificial Intelligence, Data Science, and Backend Development.
            Feel free to reach out if you'd like to collaborate,
            discuss projects, or explore career opportunities.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left Side */}

          <motion.div
            initial={{ opacity:0,x:-40 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.8 }}
            viewport={{ once:true }}
          >

            <div className="space-y-6">

              <a
                href="mailto:af0112651@gmail.com"
                className="flex items-center gap-5 bg-slate-900 p-6 rounded-2xl hover:bg-blue-600 transition"
              >
                <FaEnvelope className="text-3xl" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-300">
                    af0112651@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+201120577817"
                className="flex items-center gap-5 bg-slate-900 p-6 rounded-2xl hover:bg-blue-600 transition"
              >
                <FaPhone className="text-3xl" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-300">
                    +20 1120557817
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/AhmedFarag555"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 bg-slate-900 p-6 rounded-2xl hover:bg-blue-600 transition"
              >
                <FaGithub className="text-3xl" />
                <div>
                  <h3 className="font-bold">GitHub</h3>
                  <p className="text-gray-300">
                    github.com/AhmedFarag555
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/ahmed-farag-89331a264"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 bg-slate-900 p-6 rounded-2xl hover:bg-blue-600 transition"
              >
                <FaLinkedin className="text-3xl" />
                <div>
                  <h3 className="font-bold">LinkedIn</h3>
                  <p className="text-gray-300">
                    https://www.linkedin.com/in/ahmed-farag-89331a264
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5 bg-slate-900 p-6 rounded-2xl">

                <FaMapMarkerAlt className="text-3xl text-blue-500"/>

                <div>

                  <h3 className="font-bold">
                    Location
                  </h3>

                  <p className="text-gray-300">
                    Alexandria, Egypt
                  </p>

                </div>

              </div>

              <a
                href="/Ahmed_Farag_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-4 bg-blue-600 hover:bg-blue-700 transition px-7 py-4 rounded-xl font-semibold"
              >
                <FaFileDownload />
                Download Resume
              </a>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
           >

            <input
                name="from_name"
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
            />

            <input
                name="from_email"
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
            />

            <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
            />

            <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                className="w-full bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
            />

            <button
                type="submit"
                disabled={sending}
                className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-xl font-bold"
                >
                {sending ? "Sending..." : "Send Message"}
            </button>
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3
                            bg-green-600 hover:bg-green-700
                            px-7 py-4 rounded-xl
                            font-semibold transition-all duration-300
                            shadow-lg hover:scale-105 hover:shadow-green-500/40"
                >
                <FaWhatsapp className="text-2xl" />
                <span>Chat on WhatsApp</span>
            </a>
          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;