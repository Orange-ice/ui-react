// Boolean  相当于 (value) => value
const joinClass = (...names: (string | undefined)[]) => {
  return names.filter(Boolean).join(' ');
};

export default joinClass;
