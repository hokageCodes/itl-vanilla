import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../components/loader/Loader';

const faqs = [
  { question: " What is the Internationally Trained Lawyers Conference?", answer: "The ITL Conference is the largest gathering of Internationally Trained Lawyers (ITLs) in Canada. The Conference will feature different legal professionals, regulators, change makers, and other stakeholders committed to supporting ITLs in their legal practice journey in Canada. The ITL Conference is a joint effort of our partner organizations: The ITL Network and Global Lawyers of Canada." },
  { question: "When and where will the ITL Conference take place?", answer: "The ITL Conference has been scheduled to hold between April 3-5, 2025 in the city of Calgary, Alberta." },
  { question: "Who should attend the ITL Conference?", answer: "The conference is opened to internationally trained lawyers, students, legal educators, employers, recruiters, equity seeking groups and other legal professionals." },
  { question: "What can attendees expect from the ITL Conference?", answer: "Attendees can expect a comprehensive program featuring insightful panel discussions, workshops, networking sessions, and opportunities to engage with fellow legal professionals. The conference will also feature a Gala & Award night recognizing exceptional internationally trained lawyers in Canada." },
  { question: "How can I register for the ITL Conference?", answer: "Registration for the conference can be completed online through our website. Early registration discounts and group rates may be available. Please visit the registration page for details." },
  { question: " Is there a cost to attend the ITL Conference?", answer: "Yes, there is a registration fee to attend the ITL Conference. The fee structure may vary based on factors such as early registration, student discounts, or group rates. Please refer to our registration page for current registration information." },
  { question: "What is included in a ticket?", answer: "Details on tickets will be made available soon." },
  { question: "Are there hotel accommodations and travel discounts available for travelling conference attendees?", answer: "Yes, details on hotel arrangements and travel discounts will be made available soon. " },
  { question: "Are there opportunities for sponsorship or exhibition at the ITL?", answer: "Yes, details on sponsorships and exhibition will be made available soon." },
  { question: "How can I stay updated on the latest updates on the conference?  ", answer: "To stay informed about the conference, please pre-register on the conference registration page." },
];

const DISPLAY_LIMIT = 5;

const FaqItem = ({ faq }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div layout onClick={toggleExpansion} className="cursor-pointer border-b border-gray-200 py-8">
      <motion.header layout className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-textPrimary">{faq.question}</h3>
        <motion.svg animate={{ rotate: isExpanded ? 45 : 0 }} transition={{ duration: 0.4 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </motion.svg>
      </motion.header>
      <AnimatePresence>
        {isExpanded && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-2">
            <p>{faq.answer}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqPage = () => {
  const [displayCount, setDisplayCount] = useState(DISPLAY_LIMIT);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating data loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const showMoreFaqs = () => {
    setDisplayCount(prevCount => prevCount + DISPLAY_LIMIT);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Banner and Search Input */}
          <div className="bg-ctaBg py-4 mt-20 text-bg text-center font-bold">
            <h1 className="text-3xl mt-8 text-white">Frequently Asked Questions</h1>
            <div className="mx-auto max-w-md mt-4">
                <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search FAQs..."
                className="w-72 text-[#000] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            </div>

          {/* FAQ Section */}
          <div className="p-6 bg-white">
            <InfiniteScroll
              dataLength={displayCount}
              next={showMoreFaqs}
              hasMore={displayCount < filteredFaqs.length}
              loader={<h4>Loading...</h4>}
              scrollThreshold={0.9}
            >
              {filteredFaqs.slice(0, displayCount).map((faq, index) => (
                <FaqItem key={index} faq={faq} />
              ))}
            </InfiniteScroll>
          </div>
        </div>
      )}
    </>
  );
};

export default FaqPage;
