// /**
//  * js/router.js
//  */
// const Router = {
//     push: (page, params = null) => {
//         const container = document.getElementById('main-content');
//         if (!container) return;
        
//         window.scrollTo({ top: 0, behavior: 'smooth' });

//         switch(page) {
//             case 'home':
//                 container.innerHTML = UI.renderHome();
//                 break;
//             case 'folder':
//                 container.innerHTML = UI.renderFolder(params);
//                 break;
//             case 'lesson':
//                 container.innerHTML = UI.renderLesson(params.level, params.day);
//                 break;
//             case 'quiz-screen':
//                 container.innerHTML = UI.renderQuizScreen();
//                 break;
//             case 'quiz-result':
//                 container.innerHTML = UI.renderQuizResult(params);
//                 break;
//             default:
//                 container.innerHTML = UI.renderHome();
//         }
//     }
// };


/**
 * js/router.js
 * Sistem Navigasi Halaman untuk TzuJapan
 */

const Router = {
    push: (page, params = null) => {
        const container = document.getElementById('main-content');
        
        // Scroll ke atas setiap pindah halaman
        window.scrollTo(0, 0);

        if (page === 'home') {
            container.innerHTML = UI.renderHome();
        } 
        else if (page === 'folder') {
            container.innerHTML = UI.renderFolder(params); // params berisi 'N5' atau 'N4'
        } 
        else if (page === 'lesson') {
            container.innerHTML = UI.renderLesson(params.level, params.day);
        }
        else if (page === 'quiz-screen') {
            container.innerHTML = UI.renderQuizScreen();
        }
        else if (page === 'quiz-result') {
            container.innerHTML = UI.renderQuizResult(params);
        }
    }
};

// WAJIB: Daftarkan Router ke window agar bisa diakses oleh onclick di HTML
window.Router = Router;