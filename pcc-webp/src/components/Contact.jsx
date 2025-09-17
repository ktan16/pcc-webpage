/*
  File: Contact.jsx
  Description: Contact section with company contact information and Formspree form submission.
  Author: Kendrick Tan
*/

const Contact = () => {
  return (
    <section className="py-20 bg-offwhite" id="contact">
      <div className="max-w-5xl mx-auto px-6 text-charcoal">
        {/* ==== Heading ==== */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10">
          Contact Us
        </h2>

        {/* ==== Subtext ==== */}
        <p className="mt-4 text-base max-w-2xl mx-auto font-sans text-center">
          Inquire using our contact form, or use our contact information below.
          Your feedback, questions, and suggestions are essential to our ability
          to provide exceptional service.
        </p>

        {/* ==== Content Grid ==== */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {/* ==== Company Info ==== */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold">Our Address</h3>
              <p className="font-sans">123 Rope Street, Manila, Philippines</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold">Call Us</h3>
              <p className="font-sans">+63 917 629 7708</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold">Email Us</h3>
              <p className="font-sans">isi.pcc_localsale@yahoo.com</p>
            </div>
          </div>

          {/* ==== Contact Form ==== */}
          <form
            action="https://formspree.io/f/xkgvlzyy"
            method="POST"
            className="space-y-4 bg-white shadow-md rounded-2xl p-6 font-sans"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-[#b4621e] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
