
import React from 'react';
import { Home, UserX, AlertTriangle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <Home className="text-orange-500" />,
      title: "펫 호텔의 낯선 환경",
      desc: "예민한 아이들에게는 호텔의 소음과 낯선 냄새 자체가 큰 스트레스가 됩니다."
    },
    {
      icon: <UserX className="text-orange-500" />,
      title: "미안한 지인 부탁",
      desc: "휴가 갈 때마다 친구나 가족에게 아이를 부탁하며 눈치 보셨던 경험 있으신가요?"
    },
    {
      icon: <AlertTriangle className="text-orange-500" />,
      title: "불안한 홈캠 확인",
      desc: "혼자 남겨져 종일 잠만 자거나 문앞에서 기다리는 모습을 보며 마음 아파하지 마세요."
    }
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 break-keep">
            언제까지 <span className="text-orange-500">불안한 마음</span>으로 집을 비우실 건가요?
          </h2>
          <p className="text-gray-600">많은 보호자님들이 겪고 있는 현실적인 고민들입니다.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed break-keep">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
