/**
 * js/quiz.js
 */
const Quiz = {
    currentLevel: '',
    currentDay: 0,

    start: (level, day) => {
        Quiz.currentLevel = level;
        Quiz.currentDay = day;
        Router.push('quiz-screen');
    },

    submit: () => {
        const lesson = Database[Quiz.currentLevel][Quiz.currentDay];
        let score = 0;
        
        lesson.quizzes.forEach((q, i) => {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected && parseInt(selected.value) === q.c) {
                score++;
            }
        });

        Router.push('quiz-result', { score, total: lesson.quizzes.length });
    }
};