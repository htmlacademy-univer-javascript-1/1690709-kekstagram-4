const lineLength = (line, length) => {
  if (line.length<length){
    return true;
  }
  return false;
};

// eslint-disable-next-line no-console
console.log('1', lineLength('проверяемая строка', 20));

// eslint-disable-next-line no-unused-vars
const linePalindrome = (line) => {
  line=line.toLowerCase().replaceAll(' ', '');
  return line===line.split('').reverse().join('');
};
// eslint-disable-next-line no-console
console.log(linePalindrome('Кекс'));

