import { useState } from "react";
import { motion } from "framer-motion";

const WEB3FORMS_ACCESS_KEY = "18a378a7-539c-48ee-a3d6-957665219e2a";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
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

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      alert("Contact form is not configured yet. Add your Web3Forms access key.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio message from ${form.name}`,
          from_name: "Portfolio Contact",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert(data.message || "Failed to send message");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-6 md:px-16 py-14 md:py-16 bg-page-soft/40">
      <div className="text-center mb-8 md:mb-10">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink">
          Get In Touch
        </h2>
        <p className="text-muted mt-4">
          Have a project in mind? I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-line bg-surface p-8 shadow-sm"
        >
          <h3 className="font-display text-2xl font-semibold text-ink mb-3">
            Let&apos;s Connect
          </h3>
          <p className="text-muted mb-7 text-sm leading-relaxed">
            Reach out for opportunities, collaboration, or just to say hello.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ljpriyanka7@gmail.com&su=Portfolio%20Inquiry"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-line p-4 mb-3 hover:bg-accent-soft transition text-ink text-sm"
          >
            ljpriyanka7@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/priyankalj/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-line p-4 hover:bg-accent-soft transition text-ink text-sm"
          >
            LinkedIn Profile
          </a>
        </motion.div>

        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="rounded-3xl border border-line bg-surface p-8 shadow-sm"
        >
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mb-3 p-3.5 rounded-2xl bg-page border border-line text-ink placeholder:text-muted/70 focus:outline-none focus:border-accent"
          />
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mb-3 p-3.5 rounded-2xl bg-page border border-line text-ink placeholder:text-muted/70 focus:outline-none focus:border-accent"
          />
          <textarea
            name="message"
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full mb-4 p-3.5 rounded-2xl bg-page border border-line text-ink placeholder:text-muted/70 focus:outline-none focus:border-accent"
          />

          <motion.button
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="w-full py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-bright transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {success && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent mt-4 text-sm font-medium"
            >
              Message sent successfully
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
