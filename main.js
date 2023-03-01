const questions = document.querySelectorAll(".card__fact-section");
const answers = document.querySelectorAll(".card__fact-answer");

function closeAllAnswers() {
  answers.forEach((answer) => {
    answer.style.maxHeight = null;
    answer.style.transition = "max-height 0.2s ease";
    answer.style.marginTop = null;
    answer.style.opacity = 0;
  });
  questions.forEach((question) => question.setAttribute("aria-expanded", false));
}

function handleQuestionClick(e) {
  const question = e.currentTarget;
  const answer = question.nextElementSibling;
  const expanded = question.getAttribute("aria-expanded") === "true";

  if (!expanded) {
    closeAllAnswers();
  }

  question.setAttribute("aria-expanded", !expanded);
  if (expanded) {
    // If section was expanded, collapse it
    answer.style.maxHeight = null;
    answer.style.transition = "max-height 0.2s ease";
    answer.style.marginTop = null;
    answer.style.opacity = 0;
  } else {
    // If section was collapsed, expand it
    answer.style.maxHeight = answer.scrollHeight + "rem";
    answer.style.transition = "max-height 0.2s ease 0.2s";
    answer.style.marginTop = ".8rem";
    answer.style.opacity = 1;
  }
}

questions.forEach((question) => question.addEventListener("click", handleQuestionClick));
