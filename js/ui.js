/**
 * js/ui.js
 * Mengatur tampilan antarmuka (UI) website TzuJapan
 * Fitur: Tab Interaktif, Transisi Halus, Navigasi Dinamis N5(27) & N4(25), Full Quiz Support, 
 * Khusus: Tabel Referensi Huruf Dasar bergaya Accordion untuk Hari 1.
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
                    <!-- Kartu Level N5 -->
                    <div onclick="if(window.Router) window.Router.push('folder', 'N5')" class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group w-full md:w-1/3">
                        <div class="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E60012] transition-colors">
                            <span class="text-3xl font-bold text-[#E60012] group-hover:text-white">N5</span>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800 mb-2">Level N5</h2>
                        <p class="text-gray-500">Materi Dasar & Pemula (Hari 1 - 27)</p>
                    </div>

                    <!-- Kartu Level N4 -->
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

    // 2. TAMPILAN FOLDER (DAFTAR HARI)
    renderFolder: (level) => {
        let totalDays = level === 'N5' ? 27 : 25;
        let colorClass = level === 'N5' ? 'bg-[#E60012]' : 'bg-blue-600';

        let html = `
            <div class="animate-fade-in">
                <div class="flex items-center justify-between mb-8 pb-4 border-b">
                    <h2 class="text-3xl font-bold text-gray-800">Daftar Materi: <span class="${level === 'N5' ? 'text-[#E60012]' : 'text-blue-600'}">Level ${level}</span></h2>
                    <button onclick="if(window.Router) window.Router.push('home')" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                        ← Kembali
                    </button>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        `;

        for (let i = 1; i <= totalDays; i++) {
            const isAvailable = Database[level] && Database[level][i];
            
            if (isAvailable) {
                html += `
                    <div onclick="if(window.Router) window.Router.push('lesson', { level: '${level}', day: ${i} })" 
                         class="${colorClass} p-6 rounded-xl shadow-md text-white cursor-pointer transform hover:scale-105 transition-all text-center flex flex-col items-center justify-center min-h-[120px]">
                        <span class="text-lg font-bold opacity-80">Hari</span>
                        <span class="text-3xl font-black">${i}</span>
                    </div>
                `;
            } else {
                html += `
                    <div class="bg-gray-100 border-2 border-dashed border-gray-200 text-gray-300 p-6 rounded-xl text-center flex flex-col items-center justify-center min-h-[120px] cursor-not-allowed">
                        <span class="text-lg font-bold opacity-50">Hari</span>
                        <span class="text-3xl font-black">${i}</span>
                        <span class="text-[10px] mt-1 font-bold">Belum Tersedia</span>
                    </div>
                `;
            }
        }

        html += `</div></div>`;
        return html;
    },

    // 3. TAMPILAN MATERI (DENGAN TAB)
    renderLesson: (level, day) => {
        const data = Database[level][day];
        if (!data) return `<div class="text-center text-red-500 py-10 font-bold">Materi tidak ditemukan.</div>`;

        const accentColor = level === 'N5' ? '#E60012' : '#2563eb';
        const bgAccent = level === 'N5' ? 'bg-[#E60012]' : 'bg-blue-600';

        // --- LOGIKA TAB KOTOBA: KHUSUS HARI 1 (STYLE ACCORDION BERDASARKAN SCREENSHOT) ---
        let kotobaContent = '';
        if (level === 'N5' && day === 1) {
            kotobaContent = `
                <div class="space-y-4">
                    <p class="text-xs font-black text-stone-400 uppercase tracking-widest mb-4">Klik Baris untuk Mempelajari Huruf:</p>
                    ${data.kotoba.map((group, idx) => {
                        // Memisahkan list huruf dan romaji dari database
                        const hiras = group.hiraganaList ? group.hiraganaList.split(' ') : [];
                        const katas = group.katakanaList ? group.katakanaList.split(' ') : [];
                        const romas = group.romaji ? group.romaji.split(', ') : [];
                        
                        return `
                            <div class="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden transition-all duration-300">
                                <!-- Tombol Accordion (Dropdown Header) -->
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
                                
                                <!-- Area Konten Huruf (Grid A-I-U-E-O) -->
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
            // Tampilan Standar untuk hari lainnya
            kotobaContent = `
                <div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-gray-50 text-gray-400 text-[10px] uppercase font-black tracking-widest border-b border-gray-200">
                                    <th class="p-5">Kanji</th>
                                    <th class="p-5">Hiragana/Kana</th>
                                    
                                    <th class="p-5">Arti</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data.kotoba.map((k, idx) => `
                                    <tr class="border-b border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'} hover:bg-blue-50/30 transition-colors">
                                        <td class="p-5 font-bold text-2xl text-gray-800 font-jp">${k.kanji}</td>
                                        <td class="p-5 text-blue-600 font-bold">${k.kana}</td>
                                       
                                        <td class="p-5 text-gray-700 font-black">${k.arti}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        return `
            <div class="max-w-5xl mx-auto animate-fade-in text-left pb-20">
                <!-- Header Card -->
                <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <span class="text-xs font-black text-gray-300 uppercase tracking-widest">Level ${level} • Hari ${day}</span>
                        <h2 class="text-2xl font-black text-gray-800 mt-1">${data.title}</h2>
                    </div>
                    <div class="flex gap-2 w-full md:w-auto">
                        <button onclick="if(window.Router) window.Router.push('folder', '${level}')" class="flex-1 md:flex-none px-4 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors font-bold">
                            ← List
                        </button>
                        <button onclick="Quiz.start('${level}', ${day})" class="${bgAccent} flex-1 md:flex-none px-6 py-2 text-white font-black rounded-xl shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2">
                            Mulai Kuis
                        </button>
                    </div>
                </div>

                <!-- Tab Navigation -->
                <div class="flex bg-gray-100 p-1.5 rounded-2xl mb-8 w-full md:w-fit">
                    <button onclick="UI.switchTab('bunpou')" id="btn-tab-bunpou" class="flex-1 md:flex-none px-8 py-3 rounded-xl font-black transition-all bg-white shadow-sm text-gray-800">
                        Tata Bahasa
                    </button>
                    <button onclick="UI.switchTab('kotoba')" id="btn-tab-kotoba" class="flex-1 md:flex-none px-8 py-3 rounded-xl font-black transition-all text-gray-400 hover:text-gray-600">
                        Kosakata
                    </button>
                </div>

                <div id="tab-container">
                    <!-- TAB 1: BUNPOU -->
                    <div id="pane-bunpou" class="animate-fade-in block">
                        <h3 class="text-xl font-black text-gray-800 mb-6 flex items-center">
                            <span class="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg mr-3 text-xs uppercase tracking-tighter">Bagian 1</span> 
                            Tata Bahasa (Bunpou)
                        </h3>
                        <div class="grid grid-cols-1 gap-6">
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
                                            <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                <p class="font-bold text-gray-800 text-lg mb-1 font-jp">${ex.jp}</p>
                                                <p class="text-gray-400 text-sm italic">"${ex.id}"</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- TAB 2: KOTOBA -->
                    <div id="pane-kotoba" class="animate-fade-in hidden">
                        <h3 class="text-xl font-black text-gray-800 mb-6 flex items-center">
                            <span class="bg-green-100 text-green-600 px-3 py-1 rounded-lg mr-3 text-xs uppercase tracking-tighter">Bagian 2</span> 
                            Kosakata Baru (Kotoba)
                        </h3>
                        ${kotobaContent}
                    </div>
                </div>
            </div>
        `;
    },

    // 4. TAMPILAN LAYAR KUIS
    renderQuizScreen: () => {
        const lesson = Database[Quiz.currentLevel][Quiz.currentDay];
        if (!lesson) return `<div class="text-center py-20 font-bold">Gagal memuat kuis.</div>`;

        return `
            <div class="max-w-3xl mx-auto animate-fade-in text-left">
                <div class="bg-white p-8 rounded-3xl shadow-xl border border-stone-100 mb-10">
                    <h2 class="text-3xl font-black text-gray-900 mb-2">Uji Pemahaman</h2>
                    <p class="text-gray-500 font-medium">Materi: ${lesson.title}</p>
                </div>

                <form id="quiz-form" class="space-y-8">
                    ${lesson.quizzes.map((q, i) => `
                        <div class="bg-white p-8 rounded-3xl shadow-md border border-stone-50">
                            <div class="flex items-center gap-3 mb-6">
                                <span class="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center font-black text-sm">${i + 1}</span>
                                <p class="text-lg font-bold text-gray-800">${q.q}</p>
                            </div>
                            <div class="grid grid-cols-1 gap-3">
                                ${q.a.map((opt, idx) => `
                                    <div class="relative">
                                        <input type="radio" id="q${i}o${idx}" name="q${i}" value="${idx}" class="sr-only peer" required>
                                        <label for="q${i}o${idx}" class="block p-5 rounded-2xl border-2 border-stone-100 cursor-pointer hover:bg-stone-50 transition-all font-bold text-gray-600 peer-checked:border-[#E60012] peer-checked:bg-red-50 peer-checked:text-[#E60012] peer-checked:ring-1 peer-checked:ring-[#E60012]">
                                            ${opt}
                                        </label>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}

                    <div class="flex gap-4 pt-10 pb-20">
                        <button type="button" onclick="window.Router.push('lesson', {level: '${Quiz.currentLevel}', day: ${Quiz.currentDay}})" class="flex-1 py-5 font-black text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">
                            Batalkan
                        </button>
                        <button type="button" onclick="Quiz.submit()" class="flex-[2] bg-[#E60012] text-white py-5 rounded-[2rem] font-black text-xl shadow-xl shadow-red-200 transform hover:-translate-y-1 transition-all">
                            Selesaikan Kuis
                        </button>
                    </div>
                </form>
            </div>
        `;
    },

    // 5. TAMPILAN HASIL KUIS
    renderQuizResult: (params) => {
        const scorePercent = Math.round((params.score / params.total) * 100);
        let message = scorePercent >= 70 ? "Sugoi! Kamu menguasai hari ini! 🌸" : "Pantang menyerah, coba lagi ya! 💪";
        
        return `
            <div class="max-w-xl mx-auto animate-fade-in py-10">
                <div class="bg-white p-12 rounded-[3rem] shadow-2xl border border-stone-100 text-center">
                    <div class="w-24 h-24 bg-stone-900 rounded-3xl flex items-center justify-center text-5xl mx-auto mb-8 shadow-inner">🎯</div>
                    <h2 class="text-4xl font-black text-gray-900 mb-2">Skor Kamu</h2>
                    <p class="text-gray-400 font-bold mb-10 uppercase tracking-widest text-xs">${message}</p>
                    
                    <div class="text-8xl font-black text-[#E60012] mb-4">${params.score}<span class="text-3xl text-stone-200 font-light"> / ${params.total}</span></div>
                    
                    <div class="w-full bg-stone-100 h-4 rounded-full overflow-hidden mb-12 border shadow-inner">
                        <div class="bg-[#E60012] h-full transition-all duration-1000" style="width: ${scorePercent}%"></div>
                    </div>

                    <div class="flex flex-col gap-4">
                        <button onclick="window.Router.push('lesson', {level: '${Quiz.currentLevel}', day: ${Quiz.currentDay}})" class="w-full bg-stone-900 text-white py-5 rounded-2xl font-black text-lg hover:shadow-lg transition-all">
                            Kembali Ke Materi
                        </button>
                        <button onclick="Quiz.start('${Quiz.currentLevel}', ${Quiz.currentDay})" class="w-full text-stone-400 font-bold py-2 hover:text-gray-900">
                            Ulangi Kuis
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    // 6. LOGIKA PERPINDAHAN TAB
    switchTab: (tabName) => {
        const paneBunpou = document.getElementById('pane-bunpou');
        const paneKotoba = document.getElementById('pane-kotoba');
        const btnBunpou = document.getElementById('btn-tab-bunpou');
        const btnKotoba = document.getElementById('btn-tab-kotoba');

        if (!paneBunpou || !paneKotoba) return;

        if (tabName === 'bunpou') {
            paneBunpou.classList.replace('hidden', 'block');
            paneKotoba.classList.replace('block', 'hidden');
            btnBunpou.className = "flex-1 md:flex-none px-8 py-3 rounded-xl font-black transition-all bg-white shadow-sm text-gray-800";
            btnKotoba.className = "flex-1 md:flex-none px-8 py-3 rounded-xl font-black transition-all text-gray-400 hover:text-gray-600";
        } else {
            paneBunpou.classList.remove('block');
            paneBunpou.classList.add('hidden');
            paneKotoba.classList.remove('hidden');
            paneKotoba.classList.add('block');

            btnKotoba.className = "flex-1 md:flex-none px-8 py-3 rounded-xl font-black transition-all bg-white shadow-sm text-gray-800";
            btnBunpou.className = "flex-1 md:flex-none px-8 py-3 rounded-xl font-black transition-all text-gray-400 hover:text-gray-600";
        }
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