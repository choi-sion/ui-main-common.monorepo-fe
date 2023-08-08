export const noticeArray = [
  {
    title: '상담지연안내',
    body: '방역패스 적용 관련 문의가 급증하여 응대가 늦어지고 있습니다. 이용에 불편을 드려 대단히 죄송합니다.',
  },
  {
    title: '공지타이틀',
    body: 'ABC\n!@#$%^&*()\n\n\n- 청구할인 이벤트 혜택 : 인터파크(투어/티켓)에서 인터파크페이에 등록된 NOL 카드로 결제시 2만원 청구할인 됩니다. 단, 네이버페이 등 간편결제를 통해 결제한 건은 제외 됩니다.\n\n\n- 본 이벤트는 본인 인증한 회원 중 인터파크(투어/티켓), 야놀자, 트리플을 통합하여 NOL 카드 최초 1회 결제시에만 적용됩니다.\n※ 인터파크(투어/티켓) 일부 상품에 한해, 일반 결제 시에도 청구할인 이벤트 적용 가능\n\n\n- 최소 결제 금액 : 실 결제가 21,000원 이상의 경우에 청구할인 됩니다. \n ※ 실 결제가란 쿠폰, 포인트, 기타 할인 금액 등을 제외한 최종 실 결제금액을 말합니다.\n\n\n- 청구할인 이벤트 적용 요건 및 기간\n\n\n1. 카드 등록 기간(2023. 6. 1. ~ 2023. 6. 30.) 내 인터파크페이에 NOL 카드 등록\n\n2. 카드 등록일로 부터 90일까지 청구할인 이벤트가 적용\n※ 야놀자, 트리플의 NOL 카드 페이와 인터파크페이 등록일 중 빠른 날을 기준\n\n3. 대상 : NOL 카드 기 소지 회원',
  },
];

export const receiveTypesArray = [
  {
    type: 'text',
    body: '현재 모든 상담사가 상담 중입니다. 잠시만 기다려 주세요.',
  },
  {
    type: 'image',
  },
  {
    type: 'button',
  },
  {
    type: 'buttonFirst',
  },
  {
    type: 'textButtonOne',
  },
  {
    type: 'textButtonMultiple',
  },
  {
    type: 'imageButton',
  },
];

export const receiveSingleArray = [
  {
    type: 'text',
    body: '상담사의 메세지가 한개만 갈 때는 이렇습니다.',
  },
];

export const sendSingleArray = [
  {
    type: 'text',
    body: '안녕하세요. 예매한 티켓 두장 중 한장만 취소 가능할까요?',
  },
];

export const sendMultipleArray = [
  {
    type: 'text',
    body: '회원이 보낸 메세지가 연달아 가면',
  },
  {
    type: 'text',
    body: '이렇게 보여집니다.',
  },
];

export const ticketReceiveArray = [
  {
    caseType: 'ticketProduct',
  },
  {
    caseType: 'ticketReserveReceive',
  },
];

export const ticketSentArray = [
  {
    caseTitleLine: 1,
  },
  {
    caseTitleLine: 2,
  },
];

export const tourSlideArray = [
  {
    type: 'text',
    body: '안녕하세요. 고객님의 상담을 도와드릴 국내숙소 톡집사입니다.',
  },
  {
    type: 'text',
    body: '예약하신 숙소에 대해 문의하실 수 있습니다. 상담받을 호텔을 선택해주세요.',
  },
  {
    type: 'horizontal-stack',
  },
];

export const tourReserveArray = [
  {
    headline: '예약완료',
    description: '예약번호 T1234567890',
    title: '[아주 NICE한 서유럽 4국 12일] 남프랑스+융프라우+베르사유+몽쉘미셸+스위스+영국',
    image: '/packages/data/images/ilink/tour-product.jpeg',
    items: [
      {
        title: '2022.12.28(금) ~ 12.30(토)',
      },
      {
        title: '타이 에어아시아 맥스1',
      },
      {
        title: '2,536,000원',
      },
    ],
  },
  {
    headline: '예약완료',
    description: '예약번호 T1234567890',
    title: '제주여행 만들기',
    items: [
      {
        title: '2022.9.8(목) ~ 9.11(일)',
      },
      {
        title: '진에어',
      },
      {
        title: '136,000원',
      },
    ],
  },
  {
    headline: '예약완료',
    description: '예약번호 T1234567890',
    title: '더 뉴모닝(2021)',
    image: '/packages/data/images/ilink/tour-product.jpeg',
    items: [
      {
        title: '2022.9.8(목)',
      },
      {
        title: '무지개렌터카',
      },
      {
        title: '136,000원',
      },
    ],
  },
  {
    headline: '예약완료',
    description: '예약번호 T1234567890',
    title: '차오프라야 프린세스 디너 크루즈 티켓 당일사용만 가능',
    items: [
      {
        title: '2022.9.2(금) ~ 9.3(토)',
      },
      {
        title: '수량: 성인 1매',
      },
      {
        title: '2356,000원',
      },
    ],
  },
];

export const roomList = [
  {
    CH_INFO: {
      PROFILE: '//ticketimage.interpark.com/TicketImage/ilink_test/ic_ct_tour_air.png',
      NAME: '해외항공',
    },
    ROOM_INFO: {
      LAST_CHAT_MSG: {
        text: '메세지를 보냈습니다.',
        timestamp: '오후 4:00',
      },
      BADGE: 3,
    },
  },
  {
    CH_INFO: {
      PROFILE: '//ticketimage.interpark.com/TicketImage/ilink_test/ic_ct_tour_home.png',
      NAME: '해외숙소',
    },
    ROOM_INFO: {
      LAST_CHAT_MSG: {
        text: '멀티메세지를 보냈습니다.',
        timestamp: '2022.02.28',
      },
      BADGE: 0,
    },
  },
  {
    CH_INFO: {
      PROFILE: '//ticketimage.interpark.com/TicketImage/ilink_test/ic_ct_ticket.png',
      NAME: '티켓',
    },
    ROOM_INFO: {
      LAST_CHAT_MSG: {
        text: '잠시만 기다려주세요. 상담사를 연결 중입니다. 상담 운영시간은 평일/토요일/공휴일은 9시 ~ 17시(일요일 휴무)이며, 이외의 시간은 상담을 할 수 없습니다. 문의내용을 남겨주시면 운영시간에 답변 드리겠습니다.',
        timestamp: '2022.02.28',
      },
      BADGE: 103,
    },
  },
  {
    CH_INFO: {
      PROFILE: '//ticketimage.interpark.com/TicketImage/ilink_test/ic_ct_tour_pkg2.png',
      NAME: '국내패키지',
    },
    ROOM_INFO: {
      LAST_CHAT_MSG: {
        text: '예약건이 없음',
        timestamp: '4월 17일',
      },
      BADGE: 20,
    },
  },
  {
    CH_INFO: {
      PROFILE: '//ticketimage.interpark.com/TicketImage/ilink_test/ic_ct_tour_air2.png',
      NAME: '국내항공',
    },
    ROOM_INFO: {
      LAST_CHAT_MSG: {
        text: '메세지를 보냈습니다.',
        timestamp: '4월 17일',
      },
      BADGE: 0,
    },
  },
  {
    CH_INFO: {
      PROFILE: '//ticketimage.interpark.com/TicketImage/ilink_test/ic_ct_tour_home2.png',
      NAME: '국내숙소',
    },
    ROOM_INFO: {
      LAST_CHAT_MSG: {
        text: '메세지를 보냈습니다.',
        timestamp: '4월 17일',
      },
      BADGE: 0,
    },
  },
  {
    CH_INFO: {
      PROFILE: '//ticketimage.interpark.com/TicketImage/ilink_test/ic_ct_tour_ticket.png',
      NAME: '투어・티켓',
    },
    ROOM_INFO: {
      LAST_CHAT_MSG: {
        text: '메세지를 보냈습니다.',
        timestamp: '4월 17일',
      },
      BADGE: 0,
    },
  },
  {
    CH_INFO: {
      PROFILE: '//ticketimage.interpark.com/TicketImage/ilink_test/ic_ct_tour_pkg.png',
      NAME: '해외패키지',
    },
    ROOM_INFO: {
      LAST_CHAT_MSG: {
        text: '메세지를 보냈습니다.',
        timestamp: '4월 17일',
      },
      BADGE: 0,
    },
  },
];
