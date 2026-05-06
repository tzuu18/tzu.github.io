/**
 * js/ui.js
 * Mengatur tampilan antarmuka (UI) website TzuJapan
 * Fitur: Responsif HP, Warna Tematik (Ungu, Emerald, Biru, Amber, Teal), 5 Tab Interaktif, Multi-Kuis, dan Review Kuis.
 */

const UI = {
    // 1. TAMPILAN HALAMAN BERANDA (HOME)
    renderHome: () => {
        return `
            <div class="text-center animate-fade-in py-6 md:py-10">
                <h1 class="text-3xl md:text-5xl font-extrabold text-[#E60012] mb-4 md:mb-6 tracking-tighter">Selamat Datang di TzuJapan!</h1>
                <p class="text-base md:text-lg text-stone-600 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
                    Platform belajar bahasa Jepang mandiri yang interaktif. Pilih level materi yang ingin kamu pelajari hari ini dan mulailah petualanganmu!
                </p>
                
                <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-4 md:mt-8">
                    <div onclick="if(window.Router) window.Router.push('folder', 'N5')" class="bg-white p-6 md:p-8 rounded-3xl shadow-md border border-stone-100 cursor-pointer transform md:hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group w-full md:w-1/3">
                        <div class="bg-red-50 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E60012] transition-colors">
                            <span class="text-2xl md:text-3xl font-black text-[#E60012] group-hover:text-white transition-colors">N5</span>
                        </div>
                        <h2 class="text-xl md:text-2xl font-black text-stone-800 mb-1 md:mb-2">Level N5</h2>
                        <p class="text-sm md:text-base text-stone-500">Materi Dasar & Pemula (Hari 1 - 25)</p>
                    </div>

                    <div onclick="if(window.Router) window.Router.push('folder', 'N4')" class="bg-white p-6 md:p-8 rounded-3xl shadow-md border border-stone-100 cursor-pointer transform md:hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group w-full md:w-1/3">
                        <div class="bg-blue-50 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                            <span class="text-2xl md:text-3xl font-black text-blue-600 group-hover:text-white transition-colors">N4</span>
                        </div>
                        <h2 class="text-xl md:text-2xl font-black text-stone-800 mb-1 md:mb-2">Level N4</h2>
                        <p class="text-sm md:text-base text-stone-500">Materi Menengah Bawah (Hari 26 - 50)</p>
                    </div>
                </div>
            </div>
        `;
    },

    // 2. TAMPILAN FOLDER (DAFTAR HARI)
    renderFolder: (level) => {
        const start = level === 'N5' ? 1 : 26;
        const days = Array.from({length: 25}, (_, i) => i + start);
        const accentText = level === 'N5' ? 'text-[#E60012]' : 'text-blue-600';
        const badgeBg = level === 'N5' ? 'bg-[#E60012]' : 'bg-blue-600';
        
        return `
            <div class="animate-fade-in space-y-6 md:space-y-8 text-left">
                <div class="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-200 pb-4 gap-4">
                    <div>
                        <h2 class="text-2xl md:text-3xl font-black text-stone-900 tracking-tight">Folder <span class="${accentText}">Level ${level}</span></h2>
                        <p class="text-sm md:text-base text-stone-500 font-medium mt-1">Pilih hari untuk mulai belajar.</p>
                    </div>
                    <button onclick="Router.push('home')" class="w-full md:w-auto px-5 py-3 md:py-2.5 bg-white border-2 border-stone-200 text-stone-600 rounded-xl hover:bg-stone-50 hover:text-stone-900 transition-colors font-bold text-sm md:text-base">
                        ← Kembali
                    </button>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                    ${days.map(d => {
                        const hasData = Database[level] && Database[level][d];
                        const borderHover = level === 'N5' ? 'hover:border-[#E60012]' : 'hover:border-blue-600';
                        
                        if (hasData) {
                            return `
                            <div onclick="Router.push('lesson', {level:'${level}', day:${d}})" 
                                 class="bg-white border-2 border-stone-100 ${borderHover} p-5 md:p-6 rounded-3xl shadow-sm hover:shadow-xl cursor-pointer transform md:hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                                <div class="flex justify-between items-center mb-4">
                                    <span class="${badgeBg} text-white text-[10px] md:text-xs font-black px-3 py-1 rounded-lg uppercase tracking-widest shadow-sm">
                                        Hari ${d}
                                    </span>
                                    <span class="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 group-hover:${accentText} transition-colors">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                    </span>
                                </div>
                                <h3 class="font-black text-stone-800 text-lg md:text-xl leading-snug mb-2 group-hover:${accentText} transition-colors line-clamp-2">
                                    ${hasData.title.includes(':') ? hasData.title.split(': ')[1] : hasData.title}
                                </h3>
                                <p class="text-stone-500 text-xs md:text-sm leading-relaxed line-clamp-2 mt-auto">
                                    ${hasData.description}
                                </p>
                            </div>`;
                        } else {
                            return `
                            <div class="bg-stone-50 border-2 border-dashed border-stone-200 p-5 md:p-6 rounded-3xl flex flex-col h-full cursor-not-allowed opacity-60">
                                <div class="flex justify-between items-center mb-4">
                                    <span class="bg-stone-200 text-stone-500 text-[10px] md:text-xs font-black px-3 py-1 rounded-lg uppercase tracking-widest">
                                        Hari ${d}
                                    </span>
                                    <span class="text-[9px] font-black text-stone-400 bg-white border border-stone-200 px-2 py-0.5 rounded-md uppercase">
                                        Terkunci
                                    </span>
                                </div>
                                <h3 class="font-bold text-stone-400 text-lg md:text-xl leading-snug mb-2">
                                    Materi Belum Tersedia
                                </h3>
                                <p class="text-stone-400 text-xs md:text-sm leading-relaxed mt-auto">
                                    Materi untuk hari ini masih dalam tahap penyusunan.
                                </p>
                            </div>`;
                        }
                    }).join('')}
                </div>
            </div>`;
    },

    // 3. TAMPILAN MATERI (RESPONSIF HP + BERWARNA)
    renderLesson: (level, day) => {
        const lesson = Database[level][day];
        if (!lesson) return `<div class="text-center py-10 font-bold text-red-500">Materi tidak ditemukan.</div>`;

        const accentColor = level === 'N5' ? 'text-[#E60012]' : 'text-blue-600';
        const borderAccent = level === 'N5' ? 'border-[#E60012]' : 'border-blue-600';

        // --- HTML UNTUK KOTOBA (EMERALD) ---
        let kotobaContent = '';
        if (level === 'N5' && day === 1) {
            kotobaContent = `
                <div class="space-y-3 md:space-y-4">
                    <p class="text-[10px] md:text-xs font-black text-emerald-600 uppercase tracking-widest mb-2 md:mb-4">Klik Baris untuk Mempelajari Huruf:</p>
                    ${lesson.kotoba.map((group, idx) => {
                        const hiras = group.hiraganaList ? group.hiraganaList.split(' ') : [];
                        const katas = group.katakanaList ? group.katakanaList.split(' ') : [];
                        const romas = group.romaji ? group.romaji.split(', ') : [];
                        
                        return `
                            <div class="bg-white rounded-2xl md:rounded-3xl border border-emerald-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                                <button onclick="UI.toggleDay1Accordion('line-${idx}')" class="w-full flex items-center justify-between p-4 md:p-6 hover:bg-emerald-50/50 transition-all text-left">
                                    <div class="flex items-center gap-3 md:gap-4">
                                        <div class="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 text-emerald-600 rounded-xl md:rounded-2xl flex items-center justify-center font-black text-base md:text-lg">
                                            ${group.arti.includes('Baris') ? group.arti.split(' ')[1][0] : group.arti[0]}
                                        </div>
                                        <div>
                                            <h4 class="font-black text-stone-800 uppercase tracking-tight text-sm md:text-base">${group.arti}</h4>
                                            <p class="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">${group.kanji}</p>
                                        </div>
                                    </div>
                                    <span id="icon-line-${idx}" class="text-emerald-400 transform transition-transform duration-300">▼</span>
                                </button>
                                
                                <div id="line-${idx}" class="hidden p-4 md:p-8 bg-emerald-50/30 border-t border-emerald-50 animate-fade-in overflow-x-auto">
                                    <div class="grid grid-cols-3 sm:grid-cols-5 gap-2 md:gap-4 min-w-[260px]">
                                        ${hiras.map((h, i) => `
                                            <div class="group flex flex-col items-center justify-center p-3 md:p-4 bg-white rounded-xl md:rounded-2xl border-2 border-emerald-50 hover:border-emerald-200 transition-all shadow-sm">
                                                <div class="flex items-center gap-2 mb-1">
                                                    <span class="text-2xl md:text-3xl font-black text-stone-800 group-hover:text-emerald-600">${h}</span>
                                                    <div class="w-[1px] h-3 md:h-4 bg-emerald-100"></div>
                                                    <span class="text-2xl md:text-3xl font-black text-stone-300 group-hover:text-emerald-500">${katas[i] || ''}</span>
                                                </div>
                                                <span class="text-[10px] md:text-xs font-black text-emerald-600 uppercase tracking-widest">${romas[i] || ''}</span>
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
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    ${lesson.kotoba.map(k => `
                        <div class="flex flex-col border border-emerald-50 p-4 md:p-5 rounded-2xl bg-emerald-50/30 hover:bg-emerald-50 transition-all group">
                            <div class="flex justify-between items-center mb-2 gap-2">
                                <span class="text-2xl md:text-3xl font-black font-jp text-emerald-600 group-hover:text-emerald-700">${k.kanji}</span>
                                <span class="font-bold text-stone-700 text-right text-sm md:text-base leading-tight">${k.arti}</span>
                            </div>
                            <p class="text-[10px] md:text-xs text-emerald-500 font-bold uppercase tracking-widest">${k.kana} • ${k.romaji}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // --- HTML UNTUK DOKKAI (BIRU) ---
        let dokkaiHtml = '';
        if (lesson.dokkai) {
            dokkaiHtml = `
                <div class="bg-white p-5 md:p-8 rounded-3xl border border-blue-100 shadow-sm">
                    <div class="text-center mb-6">
                        <span class="text-4xl block mb-2 opacity-80">📖</span>
                        <h3 class="text-xl md:text-2xl font-black font-jp text-blue-900">${lesson.dokkai.title}</h3>
                    </div>
                    <div class="bg-blue-50/50 p-5 md:p-8 rounded-2xl border border-blue-200 mb-6 overflow-x-auto">
                        <p class="text-lg md:text-xl leading-loose md:leading-[2.5] font-bold font-jp text-blue-900 whitespace-pre-line min-w-[250px]">${lesson.dokkai.text}</p>
                    </div>
                    <div class="bg-blue-50/30 p-5 md:p-6 rounded-2xl border border-blue-100">
                        <span class="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-100 px-2 py-1 rounded-md mb-3 inline-block">Terjemahan</span>
                        <p class="text-sm md:text-base text-stone-600 leading-relaxed whitespace-pre-line">${lesson.dokkai.translation}</p>
                    </div>
                </div>`;
        } else {
            dokkaiHtml = `
                <div class="bg-blue-50/50 border-2 border-dashed border-blue-200 p-8 md:p-12 rounded-3xl text-center flex flex-col items-center justify-center">
                    <span class="text-5xl md:text-6xl mb-4 block opacity-30 grayscale">📚</span>
                    <h4 class="text-xl md:text-2xl font-black text-blue-400 mb-2">Cerita Belum Tersedia</h4>
                    <p class="text-sm md:text-base text-blue-400 max-w-sm">Materi Dokkai untuk pelajaran hari ini belum disiapkan.</p>
                </div>`;
        }

        // --- HTML UNTUK CHOUKAI (AMBER) ---
        let choukaiHtml = '';
        if (lesson.choukai) {
            let choukaiMediaHtml = '';
            
            // JIKA ADA ID YOUTUBE, RENDER IFRAME YOUTUBE
            if (lesson.choukai.youtubeId) {
                choukaiMediaHtml = `
                    <div class="w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-md border-2 border-amber-200 bg-black mx-auto">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${lesson.choukai.youtubeId}?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                `;
            } 
            // JIKA ADA FILE AUDIO, RENDER AUDIO PLAYER NATIVE
            else if (lesson.choukai.audioSrc) {
                choukaiMediaHtml = `
                    <audio controls class="w-full max-w-md rounded-lg shadow-sm">
                        <source src="${lesson.choukai.audioSrc}" type="audio/mpeg">
                        Browser Anda tidak mendukung elemen audio.
                    </audio>
                `;
            } 
            // JIKA TIDAK ADA KEDUANYA, RENDER DUMMY PLAYER
            else {
                choukaiMediaHtml = `
                    <div class="w-full max-w-md bg-white p-4 rounded-xl border border-amber-200 shadow-sm flex items-center gap-4">
                        <button class="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors shadow-md">
                            <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"></path></svg>
                        </button>
                        <div class="flex-1 h-2 bg-amber-100 rounded-full overflow-hidden">
                            <div class="w-0 h-full bg-amber-500 rounded-full"></div>
                        </div>
                        <span class="text-xs font-bold text-amber-600">0:00 / 0:00</span>
                    </div>
                `;
            }

            choukaiHtml = `
                <div class="bg-white p-5 md:p-8 rounded-3xl border border-amber-100 shadow-sm">
                    <div class="text-center mb-6">
                        <span class="text-4xl block mb-2 opacity-80">🎧</span>
                        <h3 class="text-xl md:text-2xl font-black font-jp text-amber-900">${lesson.choukai.title}</h3>
                    </div>
                    <div class="bg-amber-50/50 p-5 md:p-8 rounded-2xl border border-amber-200 mb-6 flex flex-col items-center gap-4 text-center">
                        ${choukaiMediaHtml}
                        ${lesson.choukai.text ? `<p class="text-lg md:text-xl leading-loose md:leading-[2.5] font-bold font-jp text-amber-900 whitespace-pre-line mt-4">${lesson.choukai.text}</p>` : ''}
                    </div>
                    <div class="bg-amber-50/30 p-5 md:p-6 rounded-2xl border border-amber-100">
                        <span class="text-[10px] font-black text-amber-600 uppercase tracking-widest bg-amber-100 px-2 py-1 rounded-md mb-3 inline-block">Transkrip / Terjemahan</span>
                        <p class="text-sm md:text-base text-stone-600 leading-relaxed whitespace-pre-line">${lesson.choukai.translation}</p>
                    </div>
                </div>`;
        } else {
            choukaiHtml = `
                <div class="bg-amber-50/50 border-2 border-dashed border-amber-200 p-8 md:p-12 rounded-3xl text-center flex flex-col items-center justify-center">
                    <span class="text-5xl md:text-6xl mb-4 block opacity-30 grayscale">🎧</span>
                    <h4 class="text-xl md:text-2xl font-black text-amber-400 mb-2">Audio Belum Tersedia</h4>
                    <p class="text-sm md:text-base text-amber-400 max-w-sm">Materi Choukai untuk pelajaran hari ini belum disiapkan.</p>
                </div>`;
        }

        // --- HTML UNTUK KANJI (TEAL) ---
        let kanjiHtml = '';
        if (lesson.kanji) {
            kanjiHtml = `
                <div class="bg-white p-5 md:p-8 rounded-3xl border border-teal-100 shadow-sm">
                    <div class="text-center mb-6">
                        <span class="text-4xl block mb-2 opacity-80">✍️</span>
                        <h3 class="text-xl md:text-2xl font-black font-jp text-teal-900">${lesson.kanji.title || 'Belajar Kanji'}</h3>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        ${lesson.kanji.list.map(k => `
                            <div class="bg-teal-50/50 p-5 rounded-2xl border border-teal-100 flex flex-col items-center justify-center group hover:bg-teal-50 transition-colors">
                                <span class="text-5xl font-black font-jp text-teal-600 mb-3 group-hover:text-teal-700 transition-colors">${k.karakter}</span>
                                <div class="text-center space-y-1">
                                    <p class="text-xs font-bold text-teal-500 uppercase tracking-widest">Kunyomi</p>
                                    <p class="text-sm text-stone-700">${k.kunyomi || '-'}</p>
                                    <p class="text-xs font-bold text-teal-500 uppercase tracking-widest mt-2">Onyomi</p>
                                    <p class="text-sm text-stone-700">${k.onyomi || '-'}</p>
                                    <p class="text-sm font-bold text-stone-900 mt-2 bg-white px-3 py-1 rounded-lg border border-teal-100">${k.arti}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>`;
        } else {
            kanjiHtml = `
                <div class="bg-teal-50/50 border-2 border-dashed border-teal-200 p-8 md:p-12 rounded-3xl text-center flex flex-col items-center justify-center">
                    <span class="text-5xl md:text-6xl mb-4 block opacity-30 grayscale">✍️</span>
                    <h4 class="text-xl md:text-2xl font-black text-teal-400 mb-2">Kanji Belum Tersedia</h4>
                    <p class="text-sm md:text-base text-teal-400 max-w-sm">Materi Kanji untuk pelajaran hari ini belum disiapkan.</p>
                </div>`;
        }

        return `
            <div class="fade-in space-y-6 md:space-y-8 max-w-4xl mx-auto text-left pb-10">
                
                <!-- HEADER MATERI -->
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 md:p-6 rounded-[2rem] border border-stone-100 shadow-sm gap-4 md:gap-6">
                    <div class="w-full">
                        <button onclick="Router.push('folder', '${level}')" class="text-stone-400 hover:text-stone-900 font-bold mb-3 flex items-center gap-2 transition-colors text-xs md:text-sm uppercase tracking-widest">
                            ← Kembali
                        </button>
                        <h2 class="text-2xl md:text-3xl font-black text-stone-900 leading-tight">${lesson.title}</h2>
                        <p class="text-stone-500 mt-2 text-sm md:text-base leading-relaxed">${lesson.description}</p>
                    </div>
                </div>

                <!-- NAVIGASI TAB (DESAIN PILL, SEKARANG 5 TAB) -->
                <div class="flex flex-wrap bg-stone-100 p-1.5 rounded-[1.25rem] w-full gap-1 shadow-inner">
                    <button onclick="UI.switchTab('bunpou', '${level}')" id="tab-bunpou" class="flex-1 min-w-[65px] text-[10px] md:text-sm py-3 md:py-2.5 rounded-xl font-black bg-white shadow-sm text-stone-800 transition-all">
                        文法 Bunpou
                    </button>
                    <button onclick="UI.switchTab('kotoba', '${level}')" id="tab-kotoba" class="flex-1 min-w-[65px] text-[10px] md:text-sm py-3 md:py-2.5 rounded-xl font-black text-stone-400 hover:text-stone-600 transition-all">
                        言葉 Kotoba
                    </button>
                    <button onclick="UI.switchTab('dokkai', '${level}')" id="tab-dokkai" class="flex-1 min-w-[65px] text-[10px] md:text-sm py-3 md:py-2.5 rounded-xl font-black text-stone-400 hover:text-stone-600 transition-all">
                        読解 Dokkai
                    </button>
                    <button onclick="UI.switchTab('choukai', '${level}')" id="tab-choukai" class="flex-1 min-w-[65px] text-[10px] md:text-sm py-3 md:py-2.5 rounded-xl font-black text-stone-400 hover:text-stone-600 transition-all">
                        聴解 Choukai
                    </button>
                    <button onclick="UI.switchTab('kanji', '${level}')" id="tab-kanji" class="flex-1 min-w-[65px] text-[10px] md:text-sm py-3 md:py-2.5 rounded-xl font-black text-stone-400 hover:text-stone-600 transition-all">
                        漢字 Kanji
                    </button>
                </div>

                <!-- KONTEN: BUNPOU (UNGU) -->
                <div id="content-bunpou" class="block fade-in space-y-6">
                    <h3 class="text-xl md:text-2xl font-black text-stone-800 mb-4 md:mb-6 flex items-center">
                        <span class="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg mr-3 text-xs uppercase tracking-tighter">Bagian 1</span> 
                        Tata Bahasa (Bunpou)
                    </h3>
                    ${lesson.bunpou.map(b => `
                        <div class="bg-white p-5 md:p-8 rounded-3xl border border-stone-100 shadow-sm border-l-[6px] border-l-purple-500">
                            <h4 class="text-lg md:text-xl font-bold mb-2 text-stone-800">${b.title}</h4>
                            <p class="text-sm md:text-base text-stone-600 mb-5 md:mb-6 leading-relaxed">${b.explanation}</p>
                            
                            ${b.formula ? `
                            <div class="bg-stone-900 text-purple-400 p-4 md:p-5 rounded-2xl font-mono text-center mb-6 text-xs md:text-sm border-b-4 border-stone-800 shadow-inner overflow-x-auto whitespace-nowrap">
                                ${b.formula}
                            </div>` : ''}
                            
                            <div class="space-y-3">
                                ${b.examples.map(ex => `
                                    <div class="p-4 bg-purple-50/50 rounded-2xl border-l-4 border-purple-300">
                                        <p class="text-lg md:text-xl font-bold font-jp text-stone-800">${ex.jp}</p>
                                        <p class="text-purple-600 text-xs md:text-sm mt-1 italic">"${ex.id}"</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                    
                    <!-- TOMBOL KUIS BUNPOU -->
                    <div class="text-center pt-6 md:pt-8 mt-6 border-t-2 border-dashed border-stone-200">
                        <button onclick="if(window.Quiz) Quiz.start('${level}', ${day}, 'bunpou')" class="w-full md:w-auto bg-purple-600 text-white px-8 py-4 rounded-2xl md:rounded-[2rem] font-black text-base md:text-lg shadow-lg shadow-purple-200 hover:bg-purple-700 hover:-translate-y-1 transition-all">
                            📝 Uji Tata Bahasa
                        </button>
                    </div>
                </div>

                <!-- KONTEN: KOTOBA (EMERALD) -->
                <div id="content-kotoba" class="hidden fade-in space-y-6">
                    <div class="bg-white p-5 md:p-8 rounded-3xl border border-stone-100 shadow-sm">
                        <h3 class="text-xl md:text-2xl font-black text-stone-800 mb-4 md:mb-6 flex items-center">
                            <span class="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-lg mr-3 text-xs uppercase tracking-tighter">Bagian 2</span> 
                            Kosakata Baru (Kotoba)
                        </h3>
                        ${kotobaContent}
                    </div>
                    
                    <!-- TOMBOL KUIS KOTOBA -->
                    <div class="text-center pt-6 md:pt-8 mt-6 md:mt-8 border-t-2 border-dashed border-stone-200">
                        <button onclick="if(window.Quiz) Quiz.start('${level}', ${day}, 'kotoba')" class="w-full md:w-auto bg-emerald-600 text-white px-8 py-4 rounded-2xl md:rounded-[2rem] font-black text-base md:text-lg shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:-translate-y-1 transition-all">
                            📝 Uji Kosakata
                        </button>
                    </div>
                </div>

                <!-- KONTEN: DOKKAI (BIRU) -->
                <div id="content-dokkai" class="hidden fade-in space-y-6">
                    <h3 class="text-xl md:text-2xl font-black text-stone-800 mb-4 md:mb-6 flex items-center">
                        <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg mr-3 text-xs uppercase tracking-tighter">Bagian 3</span> 
                        Membaca Cerita (Dokkai)
                    </h3>
                    ${dokkaiHtml}
                    
                    <!-- TOMBOL KUIS DOKKAI -->
                    <div class="text-center pt-6 md:pt-8 mt-4 border-t-2 border-dashed border-stone-200">
                        <button onclick="if(window.Quiz) Quiz.start('${level}', ${day}, 'dokkai')" class="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl md:rounded-[2rem] font-black text-base md:text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all">
                            📝 Uji Pemahaman Cerita
                        </button>
                    </div>
                </div>

                <!-- KONTEN: CHOUKAI (AMBER) -->
                <div id="content-choukai" class="hidden fade-in space-y-6">
                    <h3 class="text-xl md:text-2xl font-black text-stone-800 mb-4 md:mb-6 flex items-center">
                        <span class="bg-amber-100 text-amber-600 px-3 py-1 rounded-lg mr-3 text-xs uppercase tracking-tighter">Bagian 4</span> 
                        Mendengar (Choukai)
                    </h3>
                    ${choukaiHtml}
                    
                    <!-- TOMBOL KUIS CHOUKAI -->
                    <div class="text-center pt-6 md:pt-8 mt-4 border-t-2 border-dashed border-stone-200">
                        <button onclick="if(window.Quiz) Quiz.start('${level}', ${day}, 'choukai')" class="w-full md:w-auto bg-amber-500 text-white px-8 py-4 rounded-2xl md:rounded-[2rem] font-black text-base md:text-lg shadow-lg shadow-amber-200 hover:bg-amber-600 hover:-translate-y-1 transition-all">
                            📝 Uji Pendengaran
                        </button>
                    </div>
                </div>

                <!-- KONTEN: KANJI (TEAL) -->
                <div id="content-kanji" class="hidden fade-in space-y-6">
                    <h3 class="text-xl md:text-2xl font-black text-stone-800 mb-4 md:mb-6 flex items-center">
                        <span class="bg-teal-100 text-teal-600 px-3 py-1 rounded-lg mr-3 text-xs uppercase tracking-tighter">Bagian 5</span> 
                        Menulis Kanji (Kanji)
                    </h3>
                    ${kanjiHtml}
                    
                    <!-- TOMBOL KUIS KANJI -->
                    <div class="text-center pt-6 md:pt-8 mt-4 border-t-2 border-dashed border-stone-200">
                        <button onclick="if(window.Quiz) Quiz.start('${level}', ${day}, 'kanji')" class="w-full md:w-auto bg-teal-500 text-white px-8 py-4 rounded-2xl md:rounded-[2rem] font-black text-base md:text-lg shadow-lg shadow-teal-200 hover:bg-teal-600 hover:-translate-y-1 transition-all">
                            📝 Uji Kanji
                        </button>
                    </div>
                </div>

            </div>`;
    },

    // 4. LOGIKA PERPINDAHAN TAB (SEKARANG 5 TAB)
    switchTab: (tabName, level) => {
        const tabs = ['bunpou', 'kotoba', 'dokkai', 'choukai', 'kanji'];
        
        tabs.forEach(t => {
            const btn = document.getElementById(`tab-${t}`);
            const content = document.getElementById(`content-${t}`);
            if (!btn || !content) return;

            if (t === tabName) {
                content.classList.remove('hidden');
                btn.className = "flex-1 min-w-[65px] text-[10px] md:text-sm py-3 md:py-2.5 rounded-xl font-black bg-white shadow-sm text-stone-800 transition-all";
            } else {
                content.classList.add('hidden');
                btn.className = "flex-1 min-w-[65px] text-[10px] md:text-sm py-3 md:py-2.5 rounded-xl font-black text-stone-400 hover:text-stone-600 transition-all";
            }
        });
    },

    // 5. TAMPILAN LAYAR KUIS (RESPONSIF HP)
    renderQuizScreen: () => {
        const lesson = Database[Quiz.currentLevel][Quiz.currentDay];
        if (!lesson) return `<div class="text-center py-20 font-bold text-red-500">Gagal memuat kuis.</div>`;

        const quizType = Quiz.currentType || 'umum';
        let quizData = [];
        let typeLabel = "Uji Pemahaman";
        let typeColor = "bg-[#E60012]";
        let typeBorder = "border-[#E60012]";
        let typeShadow = "shadow-red-200";

        if (Array.isArray(lesson.quizzes)) {
            quizData = lesson.quizzes;
        } else if (lesson.quizzes && lesson.quizzes[quizType]) {
            quizData = lesson.quizzes[quizType];
            if (quizType === 'bunpou') { typeLabel = "Kuis Tata Bahasa"; typeColor = "bg-purple-600"; typeBorder = "peer-checked:border-purple-600 peer-checked:bg-purple-50 peer-checked:text-purple-700"; typeShadow = "shadow-purple-200 hover:bg-purple-700"; }
            if (quizType === 'kotoba') { typeLabel = "Kuis Kosakata"; typeColor = "bg-emerald-600"; typeBorder = "peer-checked:border-emerald-600 peer-checked:bg-emerald-50 peer-checked:text-emerald-700"; typeShadow = "shadow-emerald-200 hover:bg-emerald-700"; }
            if (quizType === 'dokkai') { typeLabel = "Kuis Cerita"; typeColor = "bg-blue-600"; typeBorder = "peer-checked:border-blue-600 peer-checked:bg-blue-50 peer-checked:text-blue-700"; typeShadow = "shadow-blue-200 hover:bg-blue-700"; }
            if (quizType === 'choukai') { typeLabel = "Kuis Pendengaran"; typeColor = "bg-amber-500"; typeBorder = "peer-checked:border-amber-500 peer-checked:bg-amber-50 peer-checked:text-amber-700"; typeShadow = "shadow-amber-200 hover:bg-amber-600"; }
            if (quizType === 'kanji') { typeLabel = "Kuis Kanji"; typeColor = "bg-teal-500"; typeBorder = "peer-checked:border-teal-500 peer-checked:bg-teal-50 peer-checked:text-teal-700"; typeShadow = "shadow-teal-200 hover:bg-teal-600"; }
        }

        if (!quizData || quizData.length === 0) {
            return `
                <div class="max-w-3xl mx-auto text-center py-20 animate-fade-in">
                    <div class="text-6xl mb-6 grayscale opacity-50">🚧</div>
                    <h2 class="text-3xl font-black text-stone-800 mb-4">Kuis Belum Tersedia</h2>
                    <p class="text-stone-500 mb-8">Sensei masih meracik soal untuk bagian ini. Silakan kembali belajar materinya.</p>
                    <button onclick="if(window.Router) window.Router.push('lesson', {level: '${Quiz.currentLevel}', day: ${Quiz.currentDay}})" class="px-8 py-3 bg-stone-200 text-stone-700 rounded-xl font-bold hover:bg-stone-300">Kembali ke Materi</button>
                </div>
            `;
        }

        return `
            <div class="fade-in max-w-2xl mx-auto bg-white p-6 md:p-10 rounded-[2rem] md:rounded-3xl border border-stone-100 shadow-sm text-left">
                <div class="mb-6 md:mb-8 pb-4 border-b border-stone-100 flex items-center gap-4">
                    <div class="w-12 h-12 md:w-16 md:h-16 ${typeColor} text-white rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-md shrink-0">📝</div>
                    <div>
                        <h2 class="text-xl md:text-2xl font-black text-stone-900 leading-tight">${typeLabel}</h2>
                        <p class="text-stone-500 font-medium tracking-wide text-xs md:text-sm mt-1">Materi: ${lesson.title}</p>
                    </div>
                </div>
                
                <form id="quiz-form">
                    ${quizData.map((q, i) => `
                        <div class="mb-8 md:mb-10 bg-stone-50 p-5 md:p-6 rounded-3xl border border-stone-100">
                            <div class="flex gap-3 items-start mb-5">
                                <span class="bg-stone-900 text-white w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">${i+1}</span>
                                <p class="font-bold text-base md:text-lg text-stone-800 leading-snug">${q.q}</p>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                ${q.a.map((opt, idx) => `
                                    <div class="relative">
                                        <input type="radio" id="q${i}o${idx}" name="q${i}" value="${idx}" class="hidden peer" required>
                                        <label for="q${i}o${idx}" class="block p-4 border-2 border-stone-200 bg-white rounded-2xl cursor-pointer hover:border-stone-300 transition-all font-medium text-sm md:text-base text-stone-600 ${typeBorder}">
                                            ${opt}
                                        </label>
                                    </div>`).join('')}
                            </div>
                        </div>`).join('')}
                    
                    <div class="flex flex-col-reverse md:flex-row gap-3 md:gap-4 mt-8 md:mt-10">
                        <button type="button" onclick="Router.push('lesson', {level: '${Quiz.currentLevel}', day: ${Quiz.currentDay}})" class="w-full md:flex-1 py-4 font-bold text-stone-500 hover:bg-stone-100 rounded-2xl transition-all text-sm md:text-base">Batalkan Kuis</button>
                        <button type="button" onclick="Quiz.submit()" class="w-full md:flex-[2] ${typeColor} text-white py-4 rounded-2xl font-black shadow-lg ${typeShadow} transition-all text-base md:text-lg">Selesaikan Kuis</button>
                    </div>
                </form>
            </div>`;
    },

    // 6. TAMPILAN HASIL KUIS & REVIEW (RESPONSIF HP)
    renderQuizResult: (p) => {
        const scorePercent = (p.score / p.total) * 100;
        let message = scorePercent >= 70 ? "Hebat! Kamu Menguasai Materi Ini! 🌸" : "Jangan Menyerah! Terus Belajar Ya! 💪";
        
        let reviewHtml = '';
        if (p.details && p.details.length > 0) {
            reviewHtml = `
                <div class="mt-12 md:mt-16 w-full text-left space-y-4 md:space-y-6 border-t border-stone-100 pt-8">
                    <h3 class="text-xl md:text-2xl font-black text-stone-800 mb-4 md:mb-6 flex items-center gap-2">
                        <span class="text-2xl">🔍</span> Review Jawaban
                    </h3>
                    
                    ${p.details.map((item, index) => `
                        <div class="p-5 md:p-6 rounded-3xl border-2 ${item.isCorrect ? 'border-emerald-100 bg-emerald-50/50' : 'border-red-100 bg-red-50/50'}">
                            <p class="font-bold text-base md:text-lg text-stone-800 mb-4">${index + 1}. ${item.question}</p>
                            <div class="space-y-2 md:space-y-3">
                                ${item.options.map((opt, optIndex) => {
                                    let styleClass = "bg-white border-stone-200 text-stone-400 opacity-60";
                                    let iconHtml = "";

                                    // Warna hijau untuk review kita ganti jadi emerald juga biar serasi
                                    if (optIndex === item.correctIndex) {
                                        styleClass = "bg-emerald-100 border-emerald-400 text-emerald-800 font-bold shadow-sm";
                                        iconHtml = '<span class="bg-emerald-500 text-white text-[9px] md:text-[10px] px-2 py-1 rounded w-fit uppercase tracking-widest mt-1 md:mt-0 md:ml-2">Benar</span>';
                                    } else if (optIndex === item.selectedIndex && !item.isCorrect) {
                                        styleClass = "bg-red-100 border-red-400 text-red-800 font-bold shadow-sm line-through opacity-80";
                                        iconHtml = '<span class="bg-red-500 text-white text-[9px] md:text-[10px] px-2 py-1 rounded w-fit uppercase tracking-widest mt-1 md:mt-0 md:ml-2">Pilihanmu</span>';
                                    }

                                    return `
                                        <div class="p-3 md:p-4 rounded-xl md:rounded-2xl border-2 flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-2 ${styleClass}">
                                            <span class="text-sm md:text-base">${opt}</span>
                                            ${iconHtml}
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
            <div class="fade-in bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-stone-100 shadow-xl max-w-2xl mx-auto mt-6 md:mt-10 text-center">
                <div class="w-20 h-20 md:w-24 md:h-24 bg-stone-900 rounded-2xl md:rounded-3xl flex items-center justify-center text-white text-3xl md:text-4xl mx-auto mb-4 md:mb-6 shadow-inner">🎯</div>
                
                <p class="text-stone-400 font-bold text-xs md:text-sm uppercase tracking-widest mb-1">Skor Evaluasi Kamu</p>
                <h2 class="text-6xl md:text-7xl font-black text-[#E60012] mb-3 md:mb-4">${p.score}<span class="text-2xl md:text-3xl text-stone-300"> / ${p.total}</span></h2>
                
                <p class="text-stone-600 font-bold text-sm md:text-lg mb-8">${message}</p>
                
                <div class="w-full max-w-sm mx-auto bg-stone-100 h-3 rounded-full overflow-hidden mb-10 shadow-inner">
                    <div class="bg-[#E60012] h-full transition-all duration-1000" style="width: ${scorePercent}%"></div>
                </div>

                <div class="flex flex-col sm:flex-row gap-3">
                    <button onclick="Router.push('lesson', {level: '${Quiz.currentLevel}', day: ${Quiz.currentDay}})" class="w-full bg-stone-900 text-white py-4 md:py-5 rounded-2xl font-bold shadow-md hover:bg-stone-800 transition-all text-sm md:text-base">Kembali ke Materi</button>
                    <button onclick="Quiz.start('${Quiz.currentLevel}', ${Quiz.currentDay}, '${Quiz.currentType}')" class="w-full bg-stone-100 text-stone-600 font-bold py-4 md:py-5 hover:bg-stone-200 rounded-2xl transition-all text-sm md:text-base">Coba Ulang Kuis</button>
                </div>

                ${reviewHtml}
            </div>`;
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