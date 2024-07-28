
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const scoreEl = document.getElementById("score");

let score = 0;
let questionIndex = 0;

const quiz = [
	{
		question: "What does ICT stand for?",
		choices: ["Information and Communication Technology", "International Computer Technology", "Integrated Communication Technology", "None of the above"],
		answer: 0
	},
	{
		question: "Which of the following is a programming language?",
		choices: ["HTML", "CSS", "JavaScript", "Wordpress"],
		answer: 2
	},
	{
		question: "Which of the following is a type of database?",
		choices: ["Excel", "Word", "Access", "Powerpoint"],
		answer: 2
	},
	{
		question: "What does HTTP stand for?",
		choices: ["Hyper Text Transfer Protocol", "Hyper Transfer Text Protocol", "Hyper Text Test Protocol", "None of the above"],
		answer: 0
	},
	{
		question: "Which of the following is a type of network?",
		choices: ["Internet", "Intranet", "Extranet", "All of the above"],
		answer: 3
	}
];

function showQuestion() {
	const q = quiz[questionIndex];
	questionEl.textContent = q.question;
	choicesEl.innerHTML = "";
	for (let i = 0; i < q.choices.length; i++) {
		const li = document.createElement("li");
		li.textContent = q.choices[i];
		li.value = i;
		li.onclick = checkAnswer;
		choicesEl.appendChild(li);
	}
}

function checkAnswer(e) {
	if (e.target.value == quiz[questionIndex].answer) {
		score++;
	}
	questionIndex++;
	if (questionIndex < quiz.length) {
		showQuestion();
	} else {
		scoreEl.textContent = "Your score: " + score;
	}
}

submitBtn.onclick = function() {
	checkAnswer();
}

showQuestion();
