// Boolean  相当于 (value) => value
const classNames = (...names: (string | undefined)[]) => {
  return names.filter(Boolean).join(' ');
};

export default classNames;
