
import React from 'react';
import { Heart, Instagram, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Heart className="text-white fill-white" size={16} />
              </div>
              <span className="text-xl font-black text-white">멍냥지킴이</span>
            </div>
            <p className="max-w-xs mb-6 text-sm leading-relaxed">
              우리는 보호자와 반려동물 모두가 행복한 세상을 꿈꿉니다. 최고의 기술과 마음으로 돌봄의 혁신을 만들어갑니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-bold mb-4">서비스</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">방문 돌봄</a></li>
                <li><a href="#" className="hover:text-white">산책 대행</a></li>
                <li><a href="#" className="hover:text-white">펫시터 지원</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">고객지원</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">공지사항</a></li>
                <li><a href="#" className="hover:text-white">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:text-white">문의하기</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-white font-bold mb-4">법적 고지</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">이용약관</a></li>
                <li><a href="#" className="hover:text-white">개인정보처리방침</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Pet Keeper Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <p>사업자등록번호: 000-00-00000</p>
            <p>대표자: 김지킴</p>
            <p>주소: 서울특별시 강남구 반려동물로 123</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
