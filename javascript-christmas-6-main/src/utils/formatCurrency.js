const formatCurrency = amount =>
  new Intl.NumberFormat('ko-KR', {
    style: 'decimal',
    currency: 'KRW',
  }).format(amount);

export default formatCurrency;
