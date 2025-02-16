import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import linkedin2 from "../assets/linkedin-2.png";
import twitternew from "../assets/icons8-twitter.svg";
import github from "../assets/github-2.svg";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for empty fields
    if (!form.name.trim() || !form.email.trim()) {
      alert("Please fill in both Name and Email fields.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_h38mj57",
        "template_jcn15mh",
        {
          from_name: form.name,
          to_name: "Raj Raghav Singh",
          from_email: form.email,
          to_email: "raghavnandini47336@gmail.com",
          message: form.message,
        },
        "161S6AksTg0QheTWq"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-6 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-neutral-950 backdrop-blur-lg p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <div className="flex justify-between">
            <div className="align-middle">
              <button
                type="submit"
                className="bg-tertiary py-3 px-8 rounded-xl border outline-none w-fit text-white font-bold shadow-md shadow-primary"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>

            <div className="flex justify-end align-middle gap-8">
              <button
                className="bg-tertiary rounded-xl outline-none w-fit font-bold shadow-md shadow-primary"
                onClick={() => window.open("https://x.com/Rajraghav05", "_blank")}
              >
                <img src={twitternew} alt="Twitter" className="h-12" />
              </button>
              <button
                className="bg-tertiary rounded-xl outline-none w-fit font-bold shadow-md shadow-primary"
                onClick={() => window.open("https://www.linkedin.com/in/raj-raghav-singh-195176271", "_blank")}
              >
                <img src={linkedin2} alt="LinkedIn" />
              </button>
              <button
                className="bg-tertiary rounded-xl outline-none w-fit font-bold shadow-md shadow-primary"
                onClick={() => window.open("https://github.com/raghavsingh05", "_blank")}
              >
                <img src={github} alt="GitHub" className="invert" />
              </button>
            </div>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[450px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
