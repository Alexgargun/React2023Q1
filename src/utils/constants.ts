export default function capitalizeWords(string: string) {
  const words = string.split(' ');
  const capitalizedWords = words.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  return capitalizedWords.join(' ');
}
