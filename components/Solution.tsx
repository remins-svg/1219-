
import React from 'react';
import { ShieldCheck, Video, FileText, Heart } from 'lucide-react';

export const Solution: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: "100% 신원 검증 시터",
      desc: "범죄 경력 조회, 대면 면접, 실무 교육을 모두 마친 검증된 시터만 배정합니다."
    },
    {
      icon: <Video size={32} />,
      title: "실시간 돌봄 라이브캠",
      desc: "시터가 직접 지참하는 카메라로 돌봄 과정을 실시간으로 확인할 수 있어 안심입니다."
    },
    {
      icon: <FileText size={32} />,
      title: "상세 돌봄 리포트",
      desc: "식사, 배변 상태, 놀이 시간 등 모든 활동을 사진과 영상이 담긴 리포트로 전달합니다."
    },
    {
      icon: <Heart size={32} />,
      title: "배상 책임 보험 가입",
      desc: "돌봄 중 혹시 모를 사고에 대비하여 최대 1억원 한도의 책임 보험이 적용됩니다."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 md:order-1">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-orange-50 border border-orange-100 flex flex-col items-start">
                <div className="text-orange-500 mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed break-keep">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 break-keep leading-tight">
              멍냥지킴이는 <span className="text-orange-500">보호자님의 마음</span>까지 돌봅니다.
            </h2>
            <p className="text-lg text-gray-600 mb-8 break-keep">
              단순히 사료를 주는 것을 넘어, 아이들의 정서적 안정과 보호자님의 평온한 일상을 위해 최고의 돌봄 시스템을 구축했습니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircleIcon />
                </div>
                <p className="text-gray-700 font-medium">우리 아이가 익숙한 집에서 스트레스 없이</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircleIcon />
                </div>
                <p className="text-gray-700 font-medium">언제 어디서든 라이브 캠으로 소통하며</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircleIcon />
                </div>
                <p className="text-gray-700 font-medium">전문가에게 맡기고 안심하고 일과 여행에 집중하세요</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
