var timer;

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  timer = setInterval(displayHello, 1000);
});

function displayHello() {
  console.log("timer running");

  let progress = document.getElementById("count");

  if (progress != null) {
    if (progress.innerHTML == "100%") {
      console.log("div 1 found, remove right wrong answer, clear timer");

      removeRightWrongAnswer();
      clearInterval(timer);
    }
  }
}

function removeRightWrongAnswer() {
  let questionCount = document
    .getElementById(`workarea`)
    .getElementsByClassName("div").length;

  for (let i = 0; i < questionCount; i++) {
    console.log(`loop through div ${i}`);

    Array.from(
      document.getElementById(`div${i + 1}`).getElementsByTagName("input")
    ).forEach((element) => {
      element.remove();
    });

    document
      .getElementById(`div${i + 1}`)
      .getElementsByClassName("explanationbox")[0]
      .setAttribute("class", "hidden");

    Array.from(
      document
        .getElementById(`div${i + 1}`)
        .getElementsByClassName("ansno direction")
    ).forEach((element) => {
      element.setAttribute("class", "hidden");
    });

    document
      .getElementById(`div${i + 1}`)
      .getElementsByClassName("questioninforeviewmode")[0]
      .setAttribute("class", "hidden");

    let wrongAnswer = document
      .getElementById(`div${i + 1}`)
      .getElementsByClassName("wronganswer")[0];

    console.log(`wrongAnswer found ${wrongAnswer}`);

    if (wrongAnswer != null) {
      wrongAnswer.className = "";

      wrongAnswer
        .getElementsByTagName("label")[0]
        .getElementsByTagName("span")[0].className = "direction ansimg fa";

      // wrongAnswer.getElementsByTagName("input")[0].remove();
    }

    let rightanswer = document
      .getElementById(`div${i + 1}`)
      .getElementsByClassName("rightanswer")[0];

    console.log(`rightanswer found ${rightanswer}`);

    if (rightanswer != null) {
      rightanswer.className = "";

      rightanswer
        .getElementsByTagName("label")[0]
        .getElementsByTagName("span")[0].className = "direction ansimg fa";

      // rightanswer.getElementsByTagName("input")[0].remove();
    }
  }
}
