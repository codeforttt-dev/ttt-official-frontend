import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">

        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Terms & Conditions – Olympiad++ Examination Platform
        </h1>

        <p className="text-center text-gray-600 mb-8 text-base sm:text-lg">
          Last Updated: February 2026
        </p>

        {/* 1 */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
            1. Acceptance of Terms
          </h2>
          <p className="text-base sm:text-xl font-semibold text-gray-700 leading-relaxed">
            By registering or participating in any Olympiad examination
            conducted through our platform, you agree to comply with
            these Terms and Conditions.
          </p>
        </section>

        {/* 2 */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
            2. Student Registration
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-base sm:text-xl font-semibold text-gray-700">
            <li>Students must provide accurate personal and academic information.</li>
            <li>Fake or incorrect information may lead to disqualification.</li>
            <li>Each student may register only once per exam.</li>
          </ul>
        </section>

        {/* 3 */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
            3. Examination Rules
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-base sm:text-xl font-semibold text-gray-700">
            <li>Students must not use unfair means during the exam.</li>
            <li>Copying, screen recording, or cheating is strictly prohibited.</li>
            <li>The exam timer cannot be paused once started.</li>
            <li>Violation may result in permanent account suspension.</li>
          </ul>
        </section>

        {/* 4 */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
            4. Payment & Refund Policy
          </h2>
          <p className="text-base sm:text-xl font-semibold text-gray-700 leading-relaxed">
            Exam registration fees must be paid before the deadline.
            Fees are non-refundable unless the exam is cancelled by the organization.
          </p>
        </section>

        {/* 5 */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
            5. Results & Ranking
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-base sm:text-xl font-semibold text-gray-700">
            <li>Results will be declared on the official website.</li>
            <li>Rankings will be based on total marks obtained.</li>
            <li>The organization’s decision will be final in case of disputes.</li>
          </ul>
        </section>

        {/* 6 */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
            6. Certificates & Awards
          </h2>
          <p className="text-base sm:text-xl font-semibold text-gray-700 leading-relaxed">
            Certificates and awards will be issued digitally or physically
            as per the official announcement.
          </p>
        </section>

        {/* 7 */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
            7. Data Privacy
          </h2>
          <p className="text-base sm:text-xl font-semibold text-gray-700 leading-relaxed">
            Student data will be stored securely and will not be shared
            with third parties without consent, except where required by law.
          </p>
        </section>

        {/* 8 */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
            8. Account Termination
          </h2>
          <p className="text-base sm:text-xl font-semibold text-gray-700 leading-relaxed">
            We reserve the right to suspend or terminate accounts
            found violating examination integrity or platform policies.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
            9. Contact Information
          </h2>
          <p className="text-base sm:text-xl font-semibold text-gray-700">
            For any queries regarding the Olympiad exams:
          </p>
          <p className="text-base sm:text-xl font-bold text-blue-600 mt-2">
            thetruetopper@gmail.com
          </p>
        </section>

      </div>
    </div>
  );
};

export default TermsAndConditions;