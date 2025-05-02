import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "cc66bad9-998e-4f23-a689-9843531b1e56");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message || "Something went wrong");
      setResult("");
    }
  };

  return (
    <section
      className="text-center p-6 py-20 lg-px-20 w-full overflow-hidden"
      id="Contact"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Let's Work Together
      </h2>

      <div className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-xl">
        {/* Contact Info */}
        <div className="text-gray-700 space-y-6">
          <div>
            <h3 className="text-xl font-semibold">📧 Mail</h3>
            <p className="mt-1">vikashmishra@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">📍 Address</h3>
            <p className="mt-1">Patsa, Hasanpur, Samastipur</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">📞 Phone</h3>
            <p className="mt-1">6204147201</p>
            <p>9310915243</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg py-3 px-4 transition"
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Email
              </label>
              <input
                className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg py-3 px-4 transition"
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg py-3 px-4 h-40 resize-none transition"
              name="Message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 px-8 rounded-lg"
          >
            {result ? result : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
