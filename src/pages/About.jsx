import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <header><Navbar></Navbar></header>
      <div className="min-h-screen">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Noctara
          </h1>

          <p className="text-gray-400 text-lg mb-16 leading-relaxed">
            Welcome to{" "}
            <span className="text-purple-400 font-semibold">Noctara</span>, your
            ultimate destination for discovering, collecting, and experiencing
            games across all platforms. We believe gaming is more than just
            entertainment — it's a lifestyle, a story, and a challenge waiting
            to be conquered.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Noctara is built to immerse players in a dark, edgy, and modern
              gaming environment. We carefully curate every game — from AAA
              titles to indie gems — so you can discover experiences that truly
              resonate with your playstyle. Whether you're a competitive
              warrior, a narrative-driven explorer, or someone who just wants to
              unwind after a long day, Noctara powers your next adventure.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Features
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• Curated game library with trending and classic titles</li>
              <li>• Personalized recommendations based on your preferences</li>
              <li>
                • Real-time library management and persistent account data
              </li>
              <li>• Ratings, reviews, and community engagement</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We aim to deliver a seamless and immersive platform that bridges
              the gap between players and the games they love. By combining
              sleek UI, secure authentication, and real-time data handling,
              Noctara provides a polished experience that feels both
              professional and engaging. Every feature, every interaction, and
              every design choice is crafted to fuel your gaming passion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Join Us
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Step into the dark, explore your favorite games, and discover new
              ones. With Noctara, gaming is more than a pastime — it's an
              experience. Power up your adventure today.
            </p>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
