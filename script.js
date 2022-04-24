const documentSelector = (() => {
  let words = [];
  input = document.querySelector(".word-input");
  wordList = document.querySelector(".new-words");

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(input.value);
      words.push(input.value);
      wordList.textContent = words;
      input.value = "";
    }

    // DELETE LAST WORD
  });

  return function (name) {
    greeting = console.log(`hello ${name}`);
  };
})();

const scoreboard = (function () {
  console.log("Hello");
})();
