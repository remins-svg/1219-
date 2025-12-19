
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_DATA, FAQItem } from '../constants';

const FAQAccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-orange-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
          {item.question}
        </span>
        {isOpen ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="pb-8 text-gray-600 leading-relaxed animate-fade-in break-keep">
          {item.answer}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">자주 묻는 질문</h2>
        <div className="bg-orange-50/30 rounded-[2rem] p-8 md:p-12 border border-orange-50">
          {FAQ_DATA.map((item, idx) => (
            <FAQAccordionItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
