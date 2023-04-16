const generateRandomText = () => {
  let words = [
    "The sky",
    "above",
    "the port",
    "was",
    "the color of television",
    "tuned",
    "to",
    "a dead channel",
    ".",
    "All",
    "this happened",
    "more or less",
    ".",
    "I",
    "had",
    "the story",
    "bit by bit",
    "from various people",
    "and",
    "as generally",
    "happens",
    "in such cases",
    "each time",
    "it",
    "was",
    "a different story",
    ".",
    "It",
    "was",
    "a pleasure",
    "to",
    "burn",
  ];
  let text = [];
  let x = 15;
  while (--x) text.push(words[Math.floor(Math.random() * words.length)]);
  return text.join(" ");
};

const cardsDictionary = [];

for (let i = 0; i < 10; i++) {
  cardsDictionary.push({
    imgLink: "yukinatest.png",
    itemDescription: generateRandomText(),
    btnText: "More",
  });
}

export default cardsDictionary;
