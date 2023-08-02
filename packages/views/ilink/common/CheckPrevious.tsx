const CheckPrevious = (index: number) => {
  if (index > 0) return 'same';
  else return 'different';
};

export default CheckPrevious;
