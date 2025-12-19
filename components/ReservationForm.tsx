
import React, { useState } from 'react';
import { Loader2, Send } from 'lucide-react';
import { WEBAPP_URL } from '../constants';

export const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    idea: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.idea) {
      alert("모든 필드를 입력해 주세요.");
      return;
    }

    setStatus('loading');

    try {
      // API call to Google Apps Script
      const response = await fetch(WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors', // Common for Google Apps Script to avoid CORS errors for simple posts
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Since mode is no-cors, we can't check response.ok reliably
      // But we simulate a success after a short delay if it doesn't throw
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', idea: '' });
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="reservation" className="py-24 bg-[#fffcf9]">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-16 text-center border-4 border-orange-100">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-6 break-keep">신청이 완료되었습니다!</h2>
            <p className="text-gray-600 text-lg mb-8 break-keep leading-relaxed">
              멍냥지킴이가 내용을 확인한 후 곧 연락드릴게요.<br />
              우리 아이와의 소중한 만남을 기다립니다.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-orange-500 font-bold hover:underline"
            >
              추가 신청하기
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="py-24 bg-[#fffcf9]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-orange-100 flex flex-col md:flex-row">
          <div className="flex-1 bg-orange-500 p-10 md:p-12 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-black mb-6 break-keep">우리 아이를 위한<br />첫 걸음을 시작하세요.</h2>
            <p className="text-orange-100 mb-8 break-keep">
              현재 서비스 출시 전 사전 예약을 진행 중입니다. 사전 예약 시 서비스 오픈 시 사용할 수 있는 할인 쿠폰과 우선 배정 혜택을 드립니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <span className="text-sm">🎁</span>
                </div>
                <span>첫 방문 50% 할인 쿠폰</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <span className="text-sm">⭐</span>
                </div>
                <span>베테랑 시터 우선 배정권</span>
              </div>
            </div>
          </div>
          
          <div className="flex-[1.5] p-10 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">성함</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="홍길동"
                    className="w-full bg-orange-50/50 border border-orange-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="010-0000-0000"
                    className="w-full bg-orange-50/50 border border-orange-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">이메일 주소</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@petkeeper.com"
                  className="w-full bg-orange-50/50 border border-orange-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder:text-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">반려동물 종류 및 특이사항</label>
                <textarea 
                  name="idea"
                  value={formData.idea}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="아이의 품종, 나이, 특별히 주의해야 할 점을 적어주세요."
                  className="w-full bg-orange-50/50 border border-orange-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder:text-gray-400 resize-none"
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-orange-100 flex items-center justify-center gap-2 text-lg"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" />
                    <span>전송 중...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>사전 예약 신청하기</span>
                  </>
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-red-500 text-center text-sm">오류가 발생했습니다. 잠시 후 다시 시도해 주세요.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
