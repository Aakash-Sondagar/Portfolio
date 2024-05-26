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
    <div className="bg-neutral-100 dark:bg-[#161616] mt-3 py-3 px-3 rounded-xl">
      <p className="text-neutral-700 dark:text-neutral-300 font-Interegular font-bold mt-1">
        Leave a Message
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="text-neutral-800 bg-neutral-200 placeholder:text-neutral-400 ring-neutral-300 dark:text-neutral-400 dark:bg-neutral-800 dark:placeholder:text-neutral-600 dark:ring-neutral-500 rounded-lg p-2 w-full mt-2 focus:ring-2 outline-none font-Intermedium "
          type="text"
          placeholder="Your Name"
          name="name"
          required
        />
        <input
          className="text-neutral-800 bg-neutral-200 placeholder:text-neutral-400 ring-neutral-300 dark:text-neutral-400 dark:bg-neutral-800 dark:placeholder:text-neutral-600 dark:ring-neutral-500 rounded-lg p-2 w-full mt-2 focus:ring-2 outline-none font-Intermedium "
          type="email"
          placeholder="Your email"
          name="email"
          required
        />
        <textarea
          className="text-neutral-800 bg-neutral-200 placeholder:text-neutral-400 ring-neutral-300 dark:text-neutral-400 dark:bg-neutral-800 dark:placeholder:text-neutral-600 dark:ring-neutral-500 rounded-lg p-2 w-full mt-2 focus:ring-2 outline-none font-Intermedium "
          rows={5}
          placeholder="Your message"
          name="message"
          required
        />
        <button
          className="bg-neutral-200 text-neutral-800
 dark:bg-neutral-800 dark:text-neutral-200 p-2 rounded-lg mt-2 w-full font-Intermedium"
        >
          Send
        </button>
      </form>
      {
        <p className="text-neutral-800 dark:text-neutral-400 mt-2 flex items-center justify-center gap-x-2">
          {formStatus}
          <span>{icon}</span>
        </p>
      }
    </div>
  );
};

export default Message;
