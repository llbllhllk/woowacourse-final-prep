const list = {
  에피타이저: [
    { name: '양송이수프', prize: 6000 },
    { name: '타파스', prize: 5500 },
    { name: '시저샐러드', prize: 8000 },
  ],
  메인: [
    { name: '티본스테이크', prize: 55000 },
    { name: '바비큐립', prize: 54000 },
    { name: '해산물파스타', prize: 35000 },
    { name: '크리스마스파스타', prize: 25000 },
  ],
  디저트: [
    { name: '초코케이크', prize: 15000 },
    { name: '아이스크림', prize: 5000 },
  ],
  음료: [
    { name: '제로콜라', prize: 3000 },
    { name: '레드와인', prize: 60000 },
    { name: '샴페인', prize: 25000 },
  ],
};

const MENU = Object.freeze({
  list,
});

export default MENU;
