import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll"; 
export const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope className="w-6 h-6 text-cyan-400" />,
      title: "Email",
      description: "I'm here to help!",
      contact: "muneebmas04@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-cyan-400" />,
      title: "Location",
      description: "Come say hello.",
      contact: "Karachi, Pakistan",
    },
    {
      icon: <FaPhone className="w-6 h-6 text-cyan-400" />,
      title: "Phone",
      description: "24/7 Availability.",
      contact: "+92 316 113 2744",
    },
  ];

  return (
    <section className="bg-transparent py-12" id="contact">
       <RevealOnScroll>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-medium text-cyan-400 dark:text-cyan-400">Contact us</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Get in touch
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Our friendly team is always here to chat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="p-3 rounded-full bg-blue-100/80 dark:bg-gray-800">
                {contact.icon}
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                {contact.title}
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">{contact.description}</p>
              <p className="mt-2 text-cyan-400 dark:text-cyan-400">{contact.contact}</p>
            </div>
          ))}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
