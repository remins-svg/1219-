
/**
 * Google Apps Script Web App URL
 * 신청하기 버튼 클릭 시 이 주소로 POST 요청이 전송됩니다.
 */
export const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxxZr7o_R7XM9zmVryCCPN7gP2NGeOq52vv-w5d3vAyLCsXkIw8BZjv-Hphpy7kqOt6/exec";

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "어떤 분들이 펫시터로 활동하시나요?",
    answer: "멍냥지킴이의 시터는 100% 신원 확인 및 오프라인 대면 면접을 통과한 전문가들입니다. 반려동물 관련 자격증 보유자나 다년간의 반려 경험이 있는 분들로 엄격하게 선발됩니다."
  },
  {
    question: "사고 발생 시 보상은 어떻게 이루어지나요?",
    answer: "모든 서비스는 전문 배상 책임 보험에 가입되어 있습니다. 돌봄 중 발생할 수 있는 대인/대물/반려동물 사고에 대해 확실한 보상 체계를 갖추고 있으니 안심하세요."
  },
  {
    question: "서비스 이용 비용은 얼마인가요?",
    answer: "방문 시간(30분/60분) 및 반려동물 수에 따라 차등 적용됩니다. 기본 30분 방문 기준 1만원 후반대부터 시작하며, 상세 금액은 매칭 과정에서 투명하게 안내해 드립니다."
  },
  {
    question: "집안에 카메라가 없는데 괜찮나요?",
    answer: "멍냥지킴이 서비스 이용 시, 시터가 휴대용 실시간 캠을 지참하여 실시간 라이브 스트리밍을 제공합니다. 보호자님께서는 앱을 통해 아이의 상태를 실시간으로 확인하실 수 있습니다."
  },
  {
    question: "고양이도 돌봄 신청이 가능한가요?",
    answer: "네, 당연합니다! 강아지 산책 및 놀이뿐만 아니라 고양이 화장실 청소, 사료 급여, 교감 활동 등 고양이 특성에 맞춘 방문 탁묘 서비스도 전문적으로 운영하고 있습니다."
  }
];
