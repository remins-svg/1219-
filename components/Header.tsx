
import React from 'react';
import { Heart } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
            <Heart className="text-white fill-white" size={24} />
          </div>
          <span className="text-xl font-black text-gray-900 tracking-tight">멍냥지킴이</span>
        </div>
        <a 
          href="#reservation"
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-200"
        >
          사전 예약하기
        </a>
      </div>
    </header>
  );
};
