const questions = document.querySelectorAll(".card__fact-section");

function handleQuestionClick(e) {
  const question = e.currentTarget;
  const answer = question.nextElementSibling;
  const isActive = question.classList.contains("active");

  // remove active class from question and toggle-answer class from answer paragraph
  questions.forEach((question) => {
    question.classList.remove("active");
    question.classList.remove("expanded");
    question.nextElementSibling.classList.remove("display-answer");
  });

  // then display selected answer
  if (!isActive) {
    question.classList.add("active");
    question.classList.add("expanded");
    answer.classList.add("display-answer");
  }
}

questions.forEach((question) => question.addEventListener("click", handleQuestionClick));
