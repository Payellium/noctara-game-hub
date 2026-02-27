import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FAQ = () => {
  // Example questions and answers
  const faqs = [
    {
      question: "What is Noctara?",
      answer:
        "Noctara is a modern game library platform that allows users to discover, collect, and experience games across all platforms in a sleek, dark-themed environment.",
    },
    {
      question: "How do I create an account?",
      answer:
        "Click the 'Sign Up' button on the homepage, provide a valid email and password, and verify your email. Once done, you can log in and start exploring.",
    },
    {
      question: "Can I access my library from multiple devices?",
      answer:
        "Yes! Noctara uses secure authentication and cloud-based storage to ensure your library is synced and accessible across devices.",
    },
    {
      question: "How do I rate or review a game?",
      answer:
        "Go to the game's detail page and scroll to the 'Ratings & Reviews' section. You can submit your rating and write a review to help other players.",
    },
    {
      question: "Is my data safe on Noctara?",
      answer:
        "Absolutely. We use Firebase Authentication and secure Firestore storage to protect your data. All personal and library information is private and encrypted.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <header><Navbar></Navbar></header>
      <div className="min-h-screen">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            Here are some common questions about Noctara. Click a question to
            reveal the answer.
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-800 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 bg-gray-900 hover:bg-gray-800 transition flex justify-between items-center"
                >
                  <span className="text-gray-100 font-medium">
                    {faq.question}
                  </span>
                  <span className="text-purple-400 font-bold text-xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-950 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FAQ;
