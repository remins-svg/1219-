
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-yellow-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-orange-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-bold mb-6">
            전국 방문 돌봄 서비스 1위 목표
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.2] mb-6 break-keep">
            혼자 있는 우리 아이<br />
            <span className="text-orange-500">걱정 마세요.</span><br />
            검증된 펫시터가 찾아갑니다.
          </h1>
          <p className="text-lg text-gray-600 mb-10 break-keep max-w-lg">
            갑작스러운 출장, 오랜만의 여행. 혼자 남겨질 아이가 걱정되셨나요? 
            이제 집에서 편안하게 최고의 돌봄을 누리게 해주세요.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a 
              href="#reservation"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold px-10 py-5 rounded-2xl transition-all transform hover:scale-105 shadow-xl shadow-orange-200"
            >
              지금 바로 신청하기
            </a>
            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>100% 신원 검증 시터</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>실시간 라이브 캠 제공</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/happy-pet/800/800" 
              alt="행복한 강아지와 펫시터" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🐶</span>
            </div>
            <div>
              <p className="font-bold text-gray-900">오늘 산책 완료!</p>
              <p className="text-xs text-gray-500">방금 돌봄 리포트가 도착했습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
