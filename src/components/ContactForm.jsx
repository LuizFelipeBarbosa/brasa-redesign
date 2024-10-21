import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../LanguageContext";

function ContactForm() {
  const { language } = useLanguage();
  const translations = {
    en: {
      contact_us: "CONTACT US",
      contact_us_desc: "Feel free to reach out to us with any questions!",
      first_name: "First Name",
      last_name: "Last Name",
      message: "Message",
      send_button: "Send",
      success_message: "Your message has been sent successfully! We'll contact you shortly.",
      error_message: "Something went wrong. Please try again.",
    },
    pt: {
      contact_us: "CONTATE-NOS",
      contact_us_desc: "Sinta-se à vontade para entrar em contato conosco com qualquer dúvida!",
      first_name: "Nome",
      last_name: "Sobrenome",
      message: "Mensagem",
      send_button: "Enviar",
      success_message: "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.",
      error_message: "Ocorreu um erro. Por favor, tente novamente.",
    },
  };

  const form = useRef();
  const [message, setMessage] = useState(""); // State for success or error message

  const EMAILJS_SERVICE_ID = "service_flmskp1";
  const EMAILJS_TEMPLATE_ID = "template_8ajyjmt";
  const EMAILJS_API_PUBLIC_KEY = "5C7OPKEdQuru3mWeV"; 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID, // Your actual EmailJS service ID
        EMAILJS_TEMPLATE_ID, // Your actual EmailJS template ID
        form.current,
        EMAILJS_API_PUBLIC_KEY // Your actual EmailJS public key
      )
      .then(
        () => {
          setMessage(translations[language].success_message); // Success message
        },
        (error) => {
          console.error("FAILED...", error.text);
          setMessage(translations[language].error_message); // Error message
        }
      );
  };

  return (
    <div className="min-h-[calc(100vh-346px)] flex items-center justify-center max-w-[1200px] mx-auto">
      <div className="bg-white p-8 flex flex-col md:flex-row md:space-x-12">
        {/* Column 1 */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-blue-500 mb-8">
            {translations[language].contact_us}
          </h2>
          <p className="text-gray-700 mb-4">
            {translations[language].contact_us_desc}
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit explicabo, repellendus deserunt itaque commodi iste
            dignissimos. Rem itaque voluptate ipsam. Ipsam atque aliquam quam
            maxime minima corrupti suscipit obcaecati ipsa!
          </p>
        </div>
        {/* Column 2 */}
        <div className="md:w-1/2">
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <div className="flex space-x-4">
              <input
                type="text"
                name="user_name"
                placeholder={translations[language].first_name}
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                name="last_name"
                placeholder={translations[language].last_name}
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              name="message"
              placeholder={translations[language].message}
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              value="Send"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
            >
              {translations[language].send_button}
            </button>
          </form>
          {message && (
            <div className="mt-4 p-4 text-white bg-green-500 rounded-md">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
