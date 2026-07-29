import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Local: Express backend. Production (Vercel): /api/send-email serverless function.
    const endpoint = import.meta.env.DEV
      ? "http://localhost:8000/send-email"
      : "/api/send-email";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-6 md:px-16 py-32">
      
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-purple-400">
          Get In Touch
        </h2>
        <p className="text-gray-400 mt-4">
          Have a project in mind? I'd love to hear from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* LEFT PANEL */}
        <div className="border border-gray-800 rounded-2xl p-8 bg-[#0b0f1a]">

          <h3 className="text-xl font-semibold mb-4">
            Let's Connect
          </h3>

          <p className="text-gray-400 mb-6">
            Feel free to reach out for opportunities or collaboration.
          </p>

          {/* Email */}
         <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ljpriyanka7@gmail.com&su=Portfolio%20Inquiry"
  target="_blank"
  rel="noreferrer"
  className="block border border-gray-700 rounded-lg p-4 mb-4 hover:bg-gray-800 transition"
>
  📧 ljpriyanka7@gmail.com
</a>



          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/priyankalj/"
            target="_blank"
            rel="noreferrer"
            className="block border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition"
          >
            💼 LinkedIn Profile
          </a>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={sendEmail}
          className="border border-gray-800 rounded-2xl p-8 bg-[#0b0f1a]"
        >
          
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 rounded-lg bg-black border border-gray-700 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 rounded-lg bg-black border border-gray-700 text-white"
          />

          <textarea
            name="message"
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full mb-4 p-3 rounded-lg bg-black border border-gray-700 text-white"
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="w-full py-3 rounded-lg bg-purple-500 hover:bg-purple-600 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* ✅ Better success animation */}
          {success && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 mt-4 text-sm"
            >
              Message sent successfully 🚀
            </motion.p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;