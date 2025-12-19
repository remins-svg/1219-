
import React from 'react';
import { Search, UserCheck, CalendarDays, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: <CalendarDays className="text-white" size={32} />,
      title: "1. 예약 요청",
      desc: "원하시는 일자와 반려동물 정보를 입력하여 돌봄을 신청하세요."
    },
    {
      icon: <UserCheck className="text-white" size={32} />,
      title: "2. 맞춤 시터 매칭",
      desc: "아이의 성향과 지역을 고려해 가장 적합한 전문가를 매칭해 드립니다."
    },
    {
      icon: <Search className="text-white" size={32} />,
      title: "3. 방문 및 보고",
      desc: "시터가 방문하여 돌봄을 진행하고 상세한 리포트를 전송합니다."
    }
  ];

  return (
    <section className="py-24 bg-yellow-50/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">서비스 이용 프로세스</h2>
          <p className="text-gray-600">누구나 쉽고 간편하게 아이의 돌봄을 예약할 수 있습니다.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex-1 bg-white p-10 rounded-[2.5rem] shadow-xl border border-yellow-100 flex flex-col items-center text-center relative z-10">
                <div className="w-20 h-20 bg-orange-500 rounded-3xl flex items-center justify-center mb-8 shadow-lg shadow-orange-200">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed break-keep">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block text-orange-300">
                  <ArrowRight size={32} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
