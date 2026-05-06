/**
 * js/ui.js
 * Mengatur tampilan antarmuka (UI) website TzuJapan
 * Fitur: Tab Interaktif, Multi-Kuis per Tab, Accordion, dan Review Kuis.
 */

const UI = {
    // 1. TAMPILAN HALAMAN BERANDA (HOME)
    renderHome: () => {
        return `
            <div class="text-center animate-fade-in py-10">
                <h1 class="text-4xl md:text-5xl font-extrabold text-[#E60012] mb-6 tracking-tighter">Selamat Datang di TzuJapan!</h1>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Platform belajar bahasa Jepang mandiri yang interaktif. Pilih level materi yang ingin kamu pelajari hari ini dan mulailah petualanganmu!
                </p>
                
                <div class="flex flex-col md:flex-row justify-center gap-6 mt-8">
                    <div onclick="if(window.Router) window.Router.push('folder', 'N5')" class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group w-full md:w-1/3">
                        <div class="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E60012] transition-colors">
                            <span class="text-3xl font-bold text-[#E60012] group-hover:text-white">N5</span>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800 mb-2">Level N5</h2>
                        <p class="text-gray-500">Materi Dasar & Pemula (Hari 1 - 27)</p>
                    </div>

                    <div onclick="if(window.Router) window.Router.push('folder', 'N4')" class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group w-full md:w-1/3">
                        <div class="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                            <span class="text-3xl font-bold text-blue-600 group-hover:text-white">N4</span>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800 mb-2">Level N4</h2>
                        <p class="text-gray-500">Materi Menengah Bawah (Hari 1 - 25)</p>
                    </div>
                </div>
            </div>
        `;
    },

    // 2. TAMPILAN FOLDER (DAFTAR HARI DENGAN DESKRIPSI)
    renderFolder: (level) => {
        let totalDays = level === 'N5' ? 27 : 25;
        
        const themeBorder = level === 'N5' ? 'hover:border-[#E60012]' : 'hover:border-blue-600';
        const themeBadgeBg = level === 'N5' ? 'bg-[#E60012]' : 'bg-blue-600';
        const themeText = level === 'N5' ? 'text-[#E60012]' : 'text-blue-600';

        let html = `
            <div class="animate-fade-in">
                <div class="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
                    <div>
                        <h2 class="text-3xl font-black text-gray-900 tracking-tight">Folder Materi: <span class="${themeText}">Level ${level}</span></h2>
                        <p class="text-stone-500 font-medium mt-1">Pilih hari untuk melihat detail materi, kosakata, dan cerita.</p>
                    </div>
                    <button onclick="if(window.Router) window.Router.push('home')" class="px-5 py-2.5 bg-white border-2 border-stone-200 text-stone-600 rounded-xl hover:bg-stone-50 hover:text-stone-900 transition-all font-bold shadow-sm">
                        ← Kembali
                    </button>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 text-left">
        `;

        for (let i = 1; i <= totalDays; i++) {
            const lessonData = Database[level] && Database[level][i];
            
            if (lessonData) {
                let cleanTitle = lessonData.title.includes(':') ? lessonData.title.split(':')[1].trim() : lessonData.title;

                html += `
                    <div onclick="if(window.Router) window.Router.push('lesson', { level: '${level}', day: ${i} })" 
                         class="bg-white border-2 border-stone-100 ${themeBorder} p-6 rounded-3xl shadow-sm hover:shadow-xl cursor-pointer transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                        
                        <div class="flex justify-between items-center mb-4">
                            <span class="${themeBadgeBg} text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest shadow-sm">
                                Hari ${i}
                            </span>
                            <span class="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 group-hover:${themeText} transition-colors">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            </span>
                        </div>
                        <h3 class="font-black text-gray-800 text-lg leading-snug mb-2 group-hover:${themeText} transition-colors line-clamp-2">
                            ${cleanTitle}
                        </h3>
                        <p class="text-stone-500 text-xs leading-relaxed line-clamp-3 mt-auto">
                            ${lessonData.description}
                        </p>
                    </div>
                `;
            } else {
                html += `
                    <div class="bg-stone-50 border-2 border-dashed border-stone-200 p-6 rounded-3xl flex flex-col h-full cursor-not-allowed opacity-60">
                        <div class="flex justify-between items-center mb-4">
                            <span class="bg-stone-200 text-stone-500 text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest">
                                Hari ${i}
                            </span>
                            <span class="text-[9px] font-black text-stone-400 bg-white border border-stone-200 px-2 py-0.5 rounded-md uppercase">
                                Terkunci
                            </span>
                        </div>
                        <h3 class="font-bold text-stone-400 text-lg leading-snug mb-2">
                            Materi Belum Tersedia
                        </h3>
                        <p class="text-stone-400 text-xs leading-relaxed mt-auto">
                            Materi untuk hari ini masih dalam tahap penyusunan.
                        </p>
                    </div>
                `;
            }
        }

        html += `</div></div>`;
        return html;
    },

    // 3. TAMPILAN MATERI (DENGAN 3 TAB & TOMBOL KUIS SPESIFIK)
    renderLesson: (level, day) => {
        const data = Database[level][day];
        if (!data) return `<div class="text-center text-red-500 py-10 font-bold">Materi tidak ditemukan.</div>`;

        const accentColor = level === 'N5' ? '#E60012' : '#2563eb';

        // --- TAB 2: LOGIKA KOTOBA ---
        let kotobaContent = '';
        if (level === 'N5' && day === 1) {
            kotobaContent = `
                <div class="space-y-4">
                    <p class="text-xs font-black text-stone-400 uppercase tracking-widest mb-4">Klik Baris untuk Mempelajari Huruf:</p>
                    ${data.kotoba.map((group, idx) => {
                        const hiras = group.hiraganaList ? group.hiraganaList.split(' ') : [];
                        const katas = group.katakanaList ? group.katakanaList.split(' ') : [];
                        const romas = group.romaji ? group.romaji.split(', ') : [];
                        
                        return `
                            <div class="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden transition-all duration-300">
                                <button onclick="UI.toggleDay1Accordion('line-${idx}')" class="w-full flex items-center justify-between p-6 hover:bg-stone-50 transition-all text-left">
                                    <div class="flex items-center gap-4">
                                        <div class="w-12 h-12 bg-red-100 text-[#E60012] rounded-2xl flex items-center justify-center font-black text-lg">
                                            ${group.arti.includes('Baris') ? group.arti.split(' ')[1][0] : group.arti[0]}
                                        </div>
                                        <div>
                                            <h4 class="font-black text-gray-800 uppercase tracking-tight">${group.arti}</h4>
                                            <p class="text-[10px] text-stone-400 font-bold uppercase tracking-widest">${group.kanji}</p>
                                        </div>
                                    </div>
                                    <span id="icon-line-${idx}" class="text-stone-300 transform transition-transform duration-300">▼</span>
                                </button>
                                
                                <div id="line-${idx}" class="hidden p-6 md:p-8 bg-stone-50/30 border-t border-stone-100 animate-fade-in overflow-x-auto">
                                    <div class="grid grid-cols-3 sm:grid-cols-5 gap-3 md:gap-4 min-w-[300px]">
                                        ${hiras.map((h, i) => `
                                            <div class="group flex flex-col items-center justify-center p-4 bg-white rounded-2xl border-2 border-stone-100 hover:border-red-200 transition-all shadow-sm">
                                                <div class="flex items-center gap-2 mb-1">
                                                    <span class="text-3xl font-black text-gray-800 group-hover:text-[#E60012]">${h}</span>
                                                    <div class="w-[1px] h-4 bg-stone-200"></div>
                                                    <span class="text-3xl font-black text-stone-300 group-hover:text-blue-500">${katas[i] || ''}</span>
                                                </div>
                                                <span class="text-xs font-black text-red-500 uppercase tracking-widest">${romas[i] || ''}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        } else {
            kotobaContent = `
                <div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-gray-50 text-gray-400 text-[10px] uppercase font-black tracking-widest border-b border-gray-200">
                                    <th class="p-5">Kanji</th>
                                    <th class="p-5">Hiragana/Kana</th>
                                    <th class="p-5">Romaji</th>
                                    <th class="p-5">Arti</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data.kotoba.map((k, idx) => `
                                    <tr class="border-b border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'} hover:bg-blue-50/30 transition-colors">
                                        <td class="p-5 font-bold text-2xl text-gray-800 font-jp">${k.kanji}</td>
                                        <td class="p-5 text-blue-600 font-bold">${k.kana}</td>
                                        <td class="p-5 text-gray-400 text-xs font-bold">${k.romaji}</td>
                                        <td class="p-5 text-gray-700 font-black">${k.arti}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        // --- TAB 3: LOGIKA DOKKAI ---
        let dokkaiContent = '';
        if (data.dokkai) {
            dokkaiContent = `
                <div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8">
                    <div class="p-6 md:p-8 border-b border-gray-100 bg-gray-50/50 flex flex-col items-center justify-center text-center">
                        <span class="text-4xl mb-3">📖</span>
                        <h4 class="text-2xl font-black text-gray-800 font-jp">${data.dokkai.title}</h4>
                    </div>
                    <div class="p-6 md:p-10 space-y-8">
                        <div class="bg-blue-50/40 p-6 md:p-8 rounded-3xl border border-blue-100">
                            <p class="text-xl md:text-2xl leading-loose md:leading-[2.5] font-bold text-gray-800 font-jp whitespace-pre-line tracking-wide">${data.dokkai.text}</p>
                        </div>
                        <div class="bg-stone-50 p-6 md:p-8 rounded-3xl border border-stone-200">
                            <div class="flex items-center gap-2 mb-4">
                                <span class="bg-stone-200 text-stone-500 px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest">Terjemahan</span>
                            </div>
                            <p class="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-line">${data.dokkai.translation}</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            dokkaiContent = `
                <div class="bg-stone-50 border-2 border-dashed border-stone-200 p-10 md:p-16 rounded-3xl text-center flex flex-col items-center justify-center mb-8">
                    <span class="text-6xl mb-6 block opacity-50 grayscale">📚</span>
                    <h4 class="text-2xl font-black text-stone-400 mb-3">Cerita Belum Tersedia</h4>
                    <p class="text-stone-400 max-w-md font-medium leading-relaxed">Materi Dokkai untuk pelajaran hari ini sedang dalam tahap penyusunan oleh Sensei.</p>
                </div>
            `;
        }

        return `
            <div class="max-w-5xl mx-auto animate-fade-in text-left pb-20">
                <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <span class="text-xs font-black text-gray-300 uppercase tracking-widest">Level ${level} • Hari ${day}</span>
                        <h2 class="text-2xl font-black text-gray-800 mt-1">${data.title}</h2>
                    </div>
                    <div class="w-full md:w-auto">
                        <button onclick="if(window.Router) window.Router.push('folder', '${level}')" class="w-full md:w-auto px-6 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors font-bold">
                            ← Kembali ke List
                        </button>
                    </div>
                </div>

                <div class="flex flex-wrap bg-gray-100 p-1.5 rounded-2xl mb-8 w-full md:w-fit gap-1">
                    <button onclick="UI.switchTab('bunpou')" id="btn-tab-bunpou" class="flex-1 md:flex-none px-6 md:px-8 py-3 rounded-xl font-black transition-all bg-white shadow-sm text-gray-800 text-sm md:text-base">
                        Tata Bahasa
                    </button>
                    <button onclick="UI.switchTab('kotoba')" id="btn-tab-kotoba" class="flex-1 md:flex-none px-6 md:px-8 py-3 rounded-xl font-black transition-all text-gray-400 hover:text-gray-600 text-sm md:text-base">
                        Kosakata
                    </button>
                    <button onclick="UI.switchTab('dokkai')" id="btn-tab-dokkai" class="flex-1 md:flex-none px-6 md:px-8 py-3 rounded-xl font-black transition-all text-gray-400 hover:text-gray-600 text-sm md:text-base">
                        Cerita
                    </button>
                </div>

                <div id="tab-container">
                    <div id="pane-bunpou" class="animate-fade-in block">
                        <h3 class="text-xl font-black text-gray-800 mb-6 flex items-center">
                            <span class="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg mr-3 text-xs uppercase tracking-tighter">Bagian 1</span> 
                            Tata Bahasa (Bunpou)
                        </h3>
                        <div class="grid grid-cols-1 gap-6 mb-8">
                            ${data.bunpou.map(item => `
                                <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 border-l-[6px]" style="border-left-color: ${accentColor}">
                                    <h4 class="text-lg font-black text-gray-800 mb-2">${item.title}</h4>
                                    <p class="text-gray-500 mb-5 text-sm leading-relaxed font-medium">${item.explanation}</p>
                                    <div class="bg-gray-900 text-white p-4 rounded-xl mb-6 font-mono text-center shadow-inner border-b-4 border-gray-800">
                                        <span class="text-green-400 font-bold text-sm">${item.formula}</span>
                                    </div>
                                    <div class="space-y-3">
                                        <p class="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Contoh Kalimat:</p>
                                        ${item.examples.map(ex => `
                                            <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:bg-white transition-colors">
                                                <p class="font-bold text-gray-800 text-lg mb-1 font-jp">${ex.jp}</p>
                                                <p class="text-gray-400 text-sm italic">"${ex.id}"</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="text-center pt-6 border-t-2 border-dashed border-gray-200">
                            <button onclick="if(window.Quiz) Quiz.start('${level}', ${day}, 'bunpou')" class="bg-purple-600 text-white px-8 py-4 rounded-[2rem] font-black text-lg shadow-lg hover:bg-purple-700 hover:-translate-y-1 transition-all">
                                📝 Uji Tata Bahasa
                            </button>
                        </div>
                    </div>

                    <div id="pane-kotoba" class="animate-fade-in hidden">
                        <h3 class="text-xl font-black text-gray-800 mb-6 flex items-center">
                            <span class="bg-green-100 text-green-600 px-3 py-1 rounded-lg mr-3 text-xs uppercase tracking-tighter">Bagian 2</span> 
                            Kosakata Baru (Kotoba)
                        </h3>
                        <div class="mb-8">${kotobaContent}</div>
                        <div class="text-center pt-6 border-t-2 border-dashed border-gray-200">
                            <button onclick="if(window.Quiz) Quiz.start('${level}', ${day}, 'kotoba')" class="bg-green-600 text-white px-8 py-4 rounded-[2rem] font-black text-lg shadow-lg hover:bg-green-700 hover:-translate-y-1 transition-all">
                                📝 Uji Kosakata
                            </button>
                        </div>
                    </div>

                    <div id="pane-dokkai" class="animate-fade-in hidden">
                        <h3 class="text-xl font-black text-gray-800 mb-6 flex items-center">
                            <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg mr-3 text-xs uppercase tracking-tighter">Bagian 3</span> 
                            Membaca Cerita (Dokkai)
                        </h3>
                        ${dokkaiContent}
                        <div class="text-center pt-6 border-t-2 border-dashed border-gray-200">
                            <button onclick="if(window.Quiz) Quiz.start('${level}', ${day}, 'dokkai')" class="bg-blue-600 text-white px-8 py-4 rounded-[2rem] font-black text-lg shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all">
                                📝 Uji Pemahaman Cerita
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // 4. TAMPILAN LAYAR KUIS
    renderQuizScreen: () => {
        const lesson = Database[Quiz.currentLevel][Quiz.currentDay];
        if (!lesson) return `<div class="text-center py-20 font-bold">Gagal memuat kuis.</div>`;

        const quizType = Quiz.currentType || 'umum';
        let quizData = [];
        let typeLabel = "Uji Pemahaman";
        let typeColor = "bg-[#E60012]";

        if (Array.isArray(lesson.quizzes)) {
            quizData = lesson.quizzes;
        } else if (lesson.quizzes && lesson.quizzes[quizType]) {
            quizData = lesson.quizzes[quizType];
            if (quizType === 'bunpou') { typeLabel = "Kuis Tata Bahasa"; typeColor = "bg-purple-600"; }
            if (quizType === 'kotoba') { typeLabel = "Kuis Kosakata"; typeColor = "bg-green-600"; }
            if (quizType === 'dokkai') { typeLabel = "Kuis Cerita"; typeColor = "bg-blue-600"; }
        }

        if (!quizData || quizData.length === 0) {
            return `
                <div class="max-w-3xl mx-auto text-center py-20 animate-fade-in">
                    <div class="text-6xl mb-6 grayscale opacity-50">🚧</div>
                    <h2 class="text-3xl font-black text-gray-800 mb-4">Kuis Belum Tersedia</h2>
                    <p class="text-gray-500 mb-8">Sensei masih meracik soal untuk bagian ini. Silakan kembali belajar materinya.</p>
                    <button onclick="if(window.Router) window.Router.push('lesson', {level: '${Quiz.currentLevel}', day: ${Quiz.currentDay}})" class="px-8 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300">Kembali ke Materi</button>
                </div>
            `;
        }

        return `
            <div class="max-w-3xl mx-auto animate-fade-in text-left">
                <div class="bg-white p-8 rounded-3xl shadow-xl border border-stone-100 mb-10 flex items-center gap-6">
                    <div class="w-16 h-16 ${typeColor} text-white rounded-2xl flex items-center justify-center text-3xl shadow-md">📝</div>
                    <div>
                        <h2 class="text-3xl font-black text-gray-900 mb-1">${typeLabel}</h2>
                        <p class="text-gray-500 font-medium tracking-wide">Materi: ${lesson.title}</p>
                    </div>
                </div>

                <form id="quiz-form" class="space-y-8">
                    ${quizData.map((q, i) => `
                        <div class="bg-white p-8 rounded-3xl shadow-md border border-stone-50">
                            <div class="flex items-center gap-3 mb-6">
                                <span class="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center font-black text-sm">${i + 1}</span>
                                <p class="text-lg font-bold text-gray-800">${q.q}</p>
                            </div>
                            <div class="grid grid-cols-1 gap-3">
                                ${q.a.map((opt, idx) => `
                                    <div class="relative">
                                        <input type="radio" id="q${i}o${idx}" name="q${i}" value="${idx}" class="sr-only peer" required>
                                        <label for="q${i}o${idx}" class="block p-5 rounded-2xl border-2 border-stone-100 cursor-pointer hover:bg-stone-50 transition-all font-bold text-gray-600 peer-checked:border-[#E60012] peer-checked:bg-red-50 peer-checked:text-[#E60012]">
                                            ${opt}
                                        </label>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}

                    <div class="flex gap-4 pt-10 pb-20">
                        <button type="button" onclick="if(window.Router) window.Router.push('lesson', {level: '${Quiz.currentLevel}', day: ${Quiz.currentDay}})" class="flex-1 py-5 font-black text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">
                            Batalkan
                        </button>
                        <button type="button" onclick="if(window.Quiz) Quiz.submit()" class="flex-[2] ${typeColor} text-white py-5 rounded-[2rem] font-black text-xl shadow-xl transform hover:-translate-y-1 transition-all">
                            Selesaikan Kuis
                        </button>
                    </div>
                </form>
            </div>
        `;
    },

    // 5. TAMPILAN HASIL KUIS (DENGAN REVIEW JAWABAN)
    renderQuizResult: (params) => {
        const scorePercent = Math.round((params.score / params.total) * 100);
        let message = scorePercent >= 70 ? "Sugoi! Kamu menguasai bagian ini! 🌸" : "Pantang menyerah, coba lagi ya! 💪";
        
        let reviewHtml = '';
        if (params.details && params.details.length > 0) {
            reviewHtml = `
                <div class="mt-16 w-full text-left space-y-6">
                    <h3 class="text-2xl font-black text-gray-800 mb-6 flex items-center gap-3">
                        <span>🔍</span> Review Jawaban
                    </h3>
                    
                    ${params.details.map((item, index) => `
                        <div class="p-6 md:p-8 rounded-3xl border-2 shadow-sm ${item.isCorrect ? 'border-green-100 bg-green-50/50' : 'border-red-100 bg-red-50/50'}">
                            <p class="font-bold text-lg text-gray-800 mb-4">${index + 1}. ${item.question}</p>
                            <div class="space-y-3">
                                ${item.options.map((opt, optIndex) => {
                                    let styleClass = "bg-white border-gray-200 text-gray-500 opacity-70";
                                    let iconHtml = "";

                                    if (optIndex === item.correctIndex) {
                                        styleClass = "bg-green-100 border-green-500 text-green-800 font-bold shadow-md";
                                        iconHtml = '<span class="bg-green-500 text-white text-[10px] px-2 py-1 rounded-md uppercase tracking-widest ml-2">✅ Jawaban Benar</span>';
                                    } else if (optIndex === item.selectedIndex && !item.isCorrect) {
                                        styleClass = "bg-red-100 border-red-500 text-red-800 font-bold shadow-md line-through";
                                        iconHtml = '<span class="bg-red-500 text-white text-[10px] px-2 py-1 rounded-md uppercase tracking-widest ml-2">❌ Pilihan Kamu</span>';
                                    }

                                    return `
                                        <div class="p-4 rounded-2xl border-2 flex flex-col md:flex-row md:items-center justify-between gap-2 ${styleClass}">
                                            <span>${opt}</span>
                                            <div>${iconHtml}</div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="max-w-4xl mx-auto animate-fade-in py-10">
                <div class="bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-stone-100 text-center flex flex-col items-center">
                    <div class="w-24 h-24 bg-stone-900 rounded-3xl flex items-center justify-center text-5xl mb-8 shadow-inner">🎯</div>
                    <h2 class="text-4xl font-black text-gray-900 mb-2">Skor Kamu</h2>
                    <p class="text-gray-400 font-bold mb-10 uppercase tracking-widest text-xs">${message}</p>
                    
                    <div class="text-8xl font-black text-[#E60012] mb-4">${params.score}<span class="text-3xl text-stone-200 font-light"> / ${params.total}</span></div>
                    
                    <div class="w-full max-w-md bg-stone-100 h-4 rounded-full overflow-hidden mb-12 border shadow-inner">
                        <div class="bg-[#E60012] h-full transition-all duration-1000" style="width: ${scorePercent}%"></div>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4 w-full max-w-lg mb-8 border-b-2 border-dashed border-gray-200 pb-16">
                        <button onclick="if(window.Router) window.Router.push('lesson', {level: '${Quiz.currentLevel}', day: ${Quiz.currentDay}})" class="flex-1 bg-stone-900 text-white py-5 rounded-2xl font-black text-lg hover:shadow-lg hover:-translate-y-1 transition-all">
                            Kembali Ke Materi
                        </button>
                        <button onclick="if(window.Quiz) Quiz.start('${Quiz.currentLevel}', ${Quiz.currentDay}, '${Quiz.currentType}')" class="flex-1 bg-gray-100 text-gray-600 font-bold py-5 rounded-2xl hover:bg-gray-200 hover:-translate-y-1 transition-all">
                            Ulangi Kuis
                        </button>
                    </div>

                    <!-- AREA REVIEW JAWABAN -->
                    ${reviewHtml}
                    
                </div>
            </div>
        `;
    },

    // 6. LOGIKA PERPINDAHAN 3 TAB
    switchTab: (tabName) => {
        const panes = {
            bunpou: document.getElementById('pane-bunpou'),
            kotoba: document.getElementById('pane-kotoba'),
            dokkai: document.getElementById('pane-dokkai')
        };
        const btns = {
            bunpou: document.getElementById('btn-tab-bunpou'),
            kotoba: document.getElementById('btn-tab-kotoba'),
            dokkai: document.getElementById('btn-tab-dokkai')
        };

        if (!panes.bunpou || !panes.kotoba || !panes.dokkai) return;

        Object.keys(panes).forEach(key => {
            panes[key].classList.replace('block', 'hidden');
            btns[key].className = "flex-1 md:flex-none px-6 md:px-8 py-3 rounded-xl font-black transition-all text-gray-400 hover:text-gray-600 text-sm md:text-base";
        });

        panes[tabName].classList.replace('hidden', 'block');
        btns[tabName].className = "flex-1 md:flex-none px-6 md:px-8 py-3 rounded-xl font-black transition-all bg-white shadow-sm text-gray-800 text-sm md:text-base";
    },

    // 7. LOGIKA KHUSUS HARI 1: TOGGLE ACCORDION
    toggleDay1Accordion: (elementId) => {
        const element = document.getElementById(elementId);
        const icon = document.getElementById('icon-' + elementId);
        
        if (!element || !icon) return;

        if (element.classList.contains('hidden')) {
            element.classList.replace('hidden', 'block');
            icon.style.transform = 'rotate(180deg)';
        } else {
            element.classList.replace('block', 'hidden');
            icon.style.transform = 'rotate(0deg)';
        }
    }
};