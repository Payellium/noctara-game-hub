import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Documentation = () => {
  return (
    <div>
      <header><Navbar></Navbar></header>
      <div className="min-h-screen ">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Documentation
          </h1>

          <p className="text-gray-400 text-lg mb-16 leading-relaxed">
            This documentation provides a structured overview of how Noctara
            functions, including authentication flow, browsing logic, data
            handling, and system-level behavior.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Overview
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Noctara is a modern game library platform designed with
              performance, scalability, and user experience in mind. The
              application ensures smooth navigation, dynamic rendering, and
              secure authentication management across all user interactions.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Account Setup
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• Email and password-based registration</li>
              <li>• Authentication state persistence</li>
              <li>• Secure password reset functionality</li>
              <li>• Protected routes for authenticated access</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Game Discovery
            </h2>
            <p className="text-gray-400 mb-4">
              Users can browse games dynamically with structured filtering and
              detailed viewing capabilities.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li>• Platform and genre-based filtering</li>
              <li>• Trending and popularity indicators</li>
              <li>• Dynamic routing for game detail pages</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Library System
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Games added to a user's library are securely associated with their
              account. Real-time updates ensure consistency across sessions and
              devices.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Security & Data Handling
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• Secure authentication management</li>
              <li>• Controlled route-level access</li>
              <li>• User-specific data isolation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Support
            </h2>
            <p className="text-gray-400 leading-relaxed">
              For technical issues or unexpected behavior, users can contact
              support via the Help section. Feedback submissions are reviewed to
              improve platform stability and feature expansion.
            </p>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Documentation;
