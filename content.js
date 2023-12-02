var timer;

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  timer = setInterval(displayHello, 9000);
});

function displayHello() {
  console.log("timer running");

  let progress = document.getElementById("count");

  if (progress != null) {
    if (progress.innerHTML == "100%") {
      clearInterval(timer);

      removeRightWrongAnswer();
    }
  }
}

function removeRightWrongAnswer() {
  let questionCount = document
    .getElementById(`workarea`)
    .getElementsByClassName("div").length;

  for (let i = 0; i < questionCount; i++) {
    console.log(`loop through div ${i + 1}`);

    let inputs = document
      .getElementById(`div${i + 1}`)
      .getElementsByTagName("input");

    if (inputs != null) {
      Array.from(inputs).forEach((element) => {
        if (element.type == "radio") {
          let span = document.createElement("span");
          span.className = "ansno direction";
          span.innerHTML = "(.)";
          element.replaceWith(span);
        }

        if (element.type == "checkbox") {
          let span = document.createElement("span");
          span.className = "ansno direction";
          span.innerHTML = "[x]";
          element.replaceWith(span);
        }

        // element.setAttribute("class", "hidden");
        // element.removeAttribute("name");
        // element.removeAttribute("checked");
        // element.checked = false;
      });
    }

    let explainationBoxes = document
      .getElementById(`div${i + 1}`)
      .getElementsByClassName("explanationbox");
    if (explainationBoxes != null) {
      if (explainationBoxes.length > 0) {
        explainationBoxes[0].setAttribute("class", "hidden");
      }
    }

    // Label Alphabet

    // let radioButtons =  document
    // .getElementById(`div${i + 1}`)
    // .getElementsByClassName("ansno direction")

    // if (radioButtons != null) {
    //   Array.from(
    //     radioButtons
    //   ).forEach((element) => {
    //     element.getElementsByTagName("b")[0].innerHTML += "radio"
    //     // element.setAttribute("class", "hidden");
    //   });
    // }

    // Question info

    let questionInfos = document
      .getElementById(`div${i + 1}`)
      .getElementsByClassName("questioninforeviewmode");
    if (questionInfos != null) {
      questionInfos[0].setAttribute("class", "hidden");
    }

    // // textfield answer
    // let textfieldAnswers = document
    //   .getElementById(`div${i + 1}`)
    //   .getElementsByClassName("fillrightansbox");
    // if (textfieldAnswers != null) {
    //   textfieldAnswers[0].setAttribute("class", "hidden");
    // }

    // Wrong answer

    let wrongAnswers = document
      .getElementById(`div${i + 1}`)
      .getElementsByClassName("wronganswer");

    console.log(`wrongAnswer found ${wrongAnswers}`);

    let wrongAnswersCount = wrongAnswers.length;
    for (var k = 0; k < wrongAnswersCount; k++) {
      let wrongAnswer = wrongAnswers[0];
      console.log(`wrongAnswer ${k} of div${i + 1} className ${wrongAnswer}`);
      wrongAnswer.classList.remove("wronganswer");

      let labels = wrongAnswer.getElementsByTagName("label");

      if (labels != null) {
        if (labels.length > 0) {
          let label = labels[0];

          let spans = label.getElementsByTagName("span");
          if (spans != null) {
            if (spans.length > 0) {
              spans[0].className = "direction ansimg fa";
            }
          }
        }
      }
    }

    if (wrongAnswers != null) {
      for (const wrongAnswer of wrongAnswers) {
        wrongAnswer.classList.remove("wronganswer");

        wrongAnswer
          .getElementsByTagName("label")[0]
          .getElementsByTagName("span")[0].className = "direction ansimg fa";
      }
    }

    let rightanswers = document
      .getElementById(`div${i + 1}`)
      .getElementsByClassName("rightanswer");

    console.log(`rightanswers found ${rightanswers.length}`);
    let rightAnswersCount = rightanswers.length;
    if (rightanswers != null) {
      for (var j = 0; j < rightAnswersCount; j++) {
        let rightanswer = rightanswers[0];
        console.log(`rightanswer ${j} of div${i + 1} className ${rightanswer}`);
        rightanswer.classList.remove("rightanswer");

        let labels = rightanswer.getElementsByTagName("label");

        if (labels != null) {
          if (labels.length > 0) {
            let label = labels[0];

            let spans = label.getElementsByTagName("span");
            if (spans != null) {
              if (spans.length > 0) {
                spans[0].className = "direction ansimg fa";
              }
            }
          }
        }
      }
    }
  }
}
