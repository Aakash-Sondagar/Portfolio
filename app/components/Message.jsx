import { useState } from "react";
import { FcCheckmark, FcHighPriority } from "react-icons/fc";

const Message = () => {
  const [formStatus, setFormStatus] = useState("");
  const [icon, setIcon] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    setFormStatus("Sending...");

    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mbjnezny", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("Message sent successfully!");
        setIcon(<FcCheckmark />);
        form.reset();
      } else {
        setFormStatus("Failed to send message. Please try again.");
        setIcon(<FcHighPriority />);
      }
    } catch (error) {
      setFormStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="mt-3 bg-[#161616] py-3 px-3 rounded-xl">
      <p className="text-neutral-300 font-Interegular font-bold mt-1">
        Leave a Message
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-neutral-800 rounded-lg p-2 w-full placeholder:text-neutral-600 mt-2 focus:ring-2 ring-neutral-500 outline-none text-neutral-400 font-Intermedium "
          type="text"
          placeholder="Your Name"
          name="name"
          required
        />
        <input
          className="bg-neutral-800 rounded-lg p-2 w-full placeholder:text-neutral-600 mt-2 focus:ring-2 ring-neutral-500 outline-none text-neutral-400 font-Intermedium "
          type="email"
          placeholder="Your email"
          name="email"
          required
        />
        <textarea
          className="bg-neutral-800 rounded-lg p-2 w-full placeholder:text-neutral-600 mt-2 focus:ring-2 ring-neutral-500 outline-none text-neutral-400 font-Intermedium "
          rows={5}
          placeholder="Your message"
          name="message"
          required
        />
        <button className="bg-neutral-800 p-2 rounded-lg mt-2 w-full text-neutral-200 font-Intermedium">
          Send
        </button>
      </form>
      {
        <p className="mt-2 text-neutral-400 flex items-center justify-center gap-x-2">
          {formStatus}
          <span>{icon}</span>
        </p>
      }
    </div>
  );
};

export default Message;
