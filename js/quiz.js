/**
 * js/quiz.js
 * Logika utama untuk menangani sistem kuis (Termasuk Multi-Kuis dan Review Hasil)
 */
const Quiz = {
    currentLevel: null,
    currentDay: null,
    currentType: null,

    start: (level, day, type = 'umum') => {
        Quiz.currentLevel = level;
        Quiz.currentDay = day;
        Quiz.currentType = type;
        
        // Pindah ke layar kuis menggunakan Router
        if (window.Router) {
            window.Router.push('quiz-screen');
        }
    },

    submit: () => {
        const form = document.getElementById('quiz-form');
        if (!form) return;

        const lesson = Database[Quiz.currentLevel][Quiz.currentDay];
        
        // Ambil data kuis yang sesuai dengan tipenya
        let quizData = [];
        if (Array.isArray(lesson.quizzes)) {
            quizData = lesson.quizzes; // Format lama (array tunggal)
        } else if (lesson.quizzes && lesson.quizzes[Quiz.currentType]) {
            quizData = lesson.quizzes[Quiz.currentType]; // Format baru (Multi-kuis object)
        }

        if (!quizData || quizData.length === 0) return; // Mencegah error jika kuis kosong

        let score = 0;
        let answered = 0;
        let details = []; // BARU: Array khusus untuk menyimpan detail jawaban benar/salah

        quizData.forEach((q, i) => {
            const selected = form.querySelector(`input[name="q${i}"]:checked`);
            
            // Mendukung format jawaban lama (q.c) dan baru (q.correct)
            const correctAnswer = q.correct !== undefined ? q.correct : q.c;
            
            let isCorrect = false;
            let userSelected = null;

            if (selected) {
                answered++;
                userSelected = parseInt(selected.value);
                if (userSelected === correctAnswer) {
                    score++;
                    isCorrect = true;
                }
            }

            // BARU: Simpan memori jawaban untuk ditampilkan di halaman hasil
            details.push({
                question: q.q,
                options: q.a,
                correctIndex: correctAnswer,
                selectedIndex: userSelected,
                isCorrect: isCorrect
            });
        });

        // Pindah ke halaman hasil kuis dengan membawa parameter 'details'
        if (window.Router) {
            window.Router.push('quiz-result', { 
                score: score, 
                total: quizData.length,
                details: details 
            });
        }
    }
};