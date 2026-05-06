/**
 * js/database.js
 * Data Materi untuk TzuJapan (N5 & N4)
 */
const Database = {
    // DATA KOTOWAZA (MOTIVASI HARIAN)
    kotowazaList: [
        {
            jp: "継続は力なり",
            roma: "Keizoku wa chikara nari",
            id: "Konsistensi adalah kekuatan. Sedikit demi sedikit setiap hari, kamu pasti bisa menaklukkan bahasa Jepang!"
        },
        {
            jp: "七転び八起き",
            roma: "Nana korobi ya oki",
            id: "Jatuh tujuh kali, bangun delapan kali. Jangan menyerah meskipun materi terasa sulit hari ini!"
        },
        {
            jp: "一期一会",
            roma: "Ichi go ichi e",
            id: "Satu pertemuan, satu kesempatan. Hargai setiap detik waktu belajarmu karena momen ini takkan terulang."
        },
        {
            jp: "猿も木から落ちる",
            roma: "Saru mo ki kara ochiru",
            id: "Bahkan monyet pun bisa jatuh dari pohon. Tak apa melakukan kesalahan saat belajar, itu hal yang manusiawi!"
        },
        {
            jp: "塵も積もれば山となる",
            roma: "Chiri mo tsumoreba yama to naru",
            id: "Debu yang terkumpul pun akan menjadi gunung. Kosakata yang kamu hafal hari ini akan menjadi ilmu besar nantinya."
        },
        {
            jp: "案ずるより産むが易し",
            roma: "Anzuru yori umu ga yasushi",
            id: "Melakukan sesuatu lebih mudah daripada mencemaskannya. Jangan takut mulai belajar, ternyata tidak sesulit itu kok!"
        },
        {
            jp: "明日は明日の風が吹く",
            roma: "Ashita wa ashita no kaze ga fuku",
            id: "Besok angin besok yang akan bertiup. Jika hari ini sulit, istirahatlah. Besok adalah kesempatan baru!"
        }
    ],
    // ================= LEVEL N5 (1 - 25) =================
    N5: {
        1: {
            title: "Hari 1: Pengenalan Kana & Aturan Pelafalan",
            description: "Mempelajari seluruh huruf Jepang (Hiragana & Katakana). Klik pada setiap baris kosakata di bawah ini untuk melihat daftar lengkap hurufnya!",
            kotoba: [
                // Huruf Dasar (Seion)
                { kanji: 'あ - お', kana: 'a - o', romaji: 'A, I, U, E, O', arti: 'Huruf Vokal', hiraganaList: 'あ い う え お', katakanaList: 'ア イ ウ エ オ' },
                { kanji: 'か - こ', kana: 'ka - ko', romaji: 'Ka, Ki, Ku, Ke, Ko', arti: 'Baris K', hiraganaList: 'か き く け こ', katakanaList: 'カ キ ク ケ コ' },
                { kanji: 'さ - そ', kana: 'sa - so', romaji: 'Sa, Shi, Su, Se, So', arti: 'Baris S', hiraganaList: 'さ し す せ そ', katakanaList: 'サ シ ス セ ソ' },
                { kanji: 'た - と', kana: 'ta - to', romaji: 'Ta, Chi, Tsu, Te, To', arti: 'Baris T', hiraganaList: 'た ち つ て と', katakanaList: 'タ チ ツ テ ト' },
                { kanji: 'な - の', kana: 'na - no', romaji: 'Na, Ni, Nu, Ne, No', arti: 'Baris N', hiraganaList: 'な に ぬ ね の', katakanaList: 'ナ ニ ヌ ネ ノ' },
                { kanji: 'は - ほ', kana: 'ha - ho', romaji: 'Ha, Hi, Fu, He, Ho', arti: 'Baris H', hiraganaList: 'は ひ ふ へ ほ', katakanaList: 'ハ ヒ フ ヘ ホ' },
                { kanji: 'ま - も', kana: 'ma - mo', romaji: 'Ma, Mi, Mu, Me, Mo', arti: 'Baris M', hiraganaList: 'ま み む め も', katakanaList: 'マ ミ ム メ モ' },
                { kanji: 'や - よ', kana: 'ya - yo', romaji: 'Ya, Yu, Yo', arti: 'Baris Y', hiraganaList: 'や ゆ よ', katakanaList: 'ヤ ユ ヨ' },
                { kanji: 'ら - ろ', kana: 'ra - ro', romaji: 'Ra, Ri, Ru, Re, Ro', arti: 'Baris R', hiraganaList: 'ら り る れ ろ', katakanaList: 'ラ リ ル レ ロ' },
                { kanji: 'わ・を・ん', kana: 'wa, wo, n', romaji: 'Wa, Wo, N', arti: 'Baris W & N Mati', hiraganaList: 'わ を ん', katakanaList: 'ワ ヲ ン' },

                // Huruf Teng-teng & Maru (Dakuon & Handakuon)
                { kanji: 'が - ご', kana: 'ga - go', romaji: 'Ga, Gi, Gu, Ge, Go', arti: 'Baris G', hiraganaList: 'が ぎ ぐ げ ご', katakanaList: 'ガ ギ グ ゲ ゴ' },
                { kanji: 'ざ - ぞ', kana: 'za - zo', romaji: 'Za, Ji, Zu, Ze, Zo', arti: 'Baris Z', hiraganaList: 'ざ じ ず ぜ ぞ', katakanaList: 'ザ ジ ズ ゼ ゾ' },
                { kanji: 'だ - ど', kana: 'da - do', romaji: 'Da, Ji, Zu, De, Do', arti: 'Baris D', hiraganaList: 'だ ぢ づ で ど', katakanaList: 'ダ ヂ ヅ デ ド' },
                { kanji: 'ば - ぼ', kana: 'ba - bo', romaji: 'Ba, Bi, Bu, Be, Bo', arti: 'Baris B', hiraganaList: 'ば び ぶ べ ぼ', katakanaList: 'バ ビ ブ ベ ボ' },
                { kanji: 'ぱ - ぽ', kana: 'pa - po', romaji: 'Pa, Pi, Pu, Pe, Po', arti: 'Baris P', hiraganaList: 'ぱ ぴ ぷ ぺ ぽ', katakanaList: 'パ ピ プ ペ ポ' },

                // Huruf Gabungan (Yoon)
                { kanji: 'きゃ・きゅ・きょ', kana: 'kya, kyu, kyo', romaji: 'Kya, Kyu, Kyo', arti: 'Gabungan K + Y', hiraganaList: 'きゃ きゅ きょ', katakanaList: 'キャ キュ キョ' },
                { kanji: 'しゃ・しゅ・しょ', kana: 'sha, shu, sho', romaji: 'Sha, Shu, Sho', arti: 'Gabungan S + Y', hiraganaList: 'しゃ しゅ しょ', katakanaList: 'シャ シュ ショ' },
                { kanji: 'ちゃ・ちゅ・ちょ', kana: 'cha, chu, cho', romaji: 'Cha, Chu, Cho', arti: 'Gabungan T + Y', hiraganaList: 'ちゃ ちゅ ちょ', katakanaList: 'チャ チュ チョ' },
                { kanji: 'にゃ・にゅ・にょ', kana: 'nya, nyu, nyo', romaji: 'Nya, Nyu, Nyo', arti: 'Gabungan N + Y', hiraganaList: 'にゃ にゅ にょ', katakanaList: 'ニャ ニュ ニョ' },
                { kanji: 'ひゃ・ひゅ・ひょ', kana: 'hya, hyu, hyo', romaji: 'Hya, Hyu, Hyo', arti: 'Gabungan H + Y', hiraganaList: 'ひゃ ひゅ ひょ', katakanaList: 'ヒャ ヒュ ヒョ' },
                { kanji: 'みゃ・みゅ・みょ', kana: 'mya, myu, myo', romaji: 'Mya, Myu, Myo', arti: 'Gabungan M + Y', hiraganaList: 'みゃ みゅ みょ', katakanaList: 'ミャ ミュ ミョ' },
                { kanji: 'りゃ・りゅ・りょ', kana: 'rya, ryu, ryo', romaji: 'Rya, Ryu, Ryo', arti: 'Gabungan R + Y', hiraganaList: 'りゃ りゅ りょ', katakanaList: 'リャ リュ リョ' },
                { kanji: 'ぎゃ・ぎゅ・ぎょ', kana: 'gya, gyu, gyo', romaji: 'Gya, Gyu, Gyo', arti: 'Gabungan G + Y', hiraganaList: 'ぎゃ ぎゅ ぎょ', katakanaList: 'ギャ ギュ ギョ' },
                { kanji: 'じゃ・じゅ・じょ', kana: 'ja, ju, jo', romaji: 'Ja, Ju, Jo', arti: 'Gabungan Z + Y', hiraganaList: 'じゃ じゅ じょ', katakanaList: 'ジャ ジュ ジョ' },
                { kanji: 'びゃ・びゅ・びょ', kana: 'bya, byu, byo', romaji: 'Bya, Byu, Byo', arti: 'Gabungan B + Y', hiraganaList: 'びゃ びゅ びょ', katakanaList: 'ビャ ビュ ビョ' },
                { kanji: 'ぴゃ・ぴゅ・ぴょ', kana: 'pya, pyu, pyo', romaji: 'Pya, Pyu, Pyo', arti: 'Gabungan P + Y', hiraganaList: 'ぴゃ ぴゅ ぴょ', katakanaList: 'ピャ ピュ ピョ' }
            ],
            // (Bunpou & Quizzes tetap sama seperti yang kita buat barusan),
            bunpou: [
                {
                    title: "1. Vokal Panjang (Chouon)",
                    explanation: "Dalam bahasa Jepang, panjang pendeknya sebuah nada sangatlah penting karena bisa mengubah arti! Untuk memanjangkan huruf Hiragana, kita menambahkan vokal pembantunya (a, i, u, e, o). Sedangkan pada Katakana, kita cukup menggunakan tanda strip (ー).",
                    formula: "Contoh: おばさん (Bibi) vs おばあさん (Nenek)",
                    examples: [
                        { jp: "おじいさん", id: "Ojiisan (Kakek) -> Panjang di huruf 'i'" },
                        { jp: "スーパー", id: "Suupaa (Supermarket) -> Panjang memakai tanda (ー) di Katakana" }
                    ]
                },
                {
                    title: "2. Rahasia Huruf 'N' Mati (ん / ン)",
                    explanation: "Huruf 'n' (ん) tidak pernah bisa berdiri di awal kata. Uniknya, pelafalannya bisa berubah menyesuaikan huruf di belakangnya agar lidah lebih mudah mengucapkannya: \n1) Dibaca /m/ jika bertemu baris P, B, M.\n2) Dibaca /ng/ jika bertemu baris K, G.\n3) Dibaca /n/ secara normal untuk sisanya.",
                    formula: "ん + [P/B/M] = 'M' | ん + [K/G] = 'NG'",
                    examples: [
                        { jp: "えんぴつ", id: "E-m-pitsu (Pensil) -> Bertemu P" },
                        { jp: "てんき", id: "Te-ng-ki (Cuaca) -> Bertemu K" },
                        { jp: "しんぶん", id: "Shi-m-bu-n (Koran) -> Bertemu B" }
                    ]
                },
                {
                    title: "3. Konsonan Ganda / 'Tsu' Kecil (っ / ッ)",
                    explanation: "Jika kamu melihat huruf 'tsu' yang ditulis lebih kecil dari huruf lainnya (っ), itu BUKAN dibaca 'tsu'. Fungsinya adalah untuk menggandakan huruf konsonan yang ada di depannya. Kamu seolah-olah menahan napas satu ketukan sebelum menyebut huruf berikutnya.",
                    formula: "っ + [Konsonan] = Dobel Konsonan",
                    examples: [
                        { jp: "きって", id: "Kitte (Perangko)" },
                        { jp: "ざっし", id: "Zasshi (Majalah)" },
                        { jp: "コップ", id: "Koppu (Gelas)" }
                    ]
                },
                {
                    title: "4. Huruf Gabungan / Yoon (ゃ, ゅ, ょ Kecil)",
                    explanation: "Huruf baris 'i' (seperti ki, shi, chi, dll) bisa digabungkan dengan huruf ya (や), yu (ゆ), atau yo (よ) yang ditulis KECIL. Meskipun terdiri dari dua huruf, mereka melebur dan dibaca sebagai SATU ketukan (mora) saja.",
                    formula: "き + ゃ = きゃ (Kya)",
                    examples: [
                        { jp: "ひゃく", id: "Hyaku (Seratus) -> Dibaca dua ketukan: Hya - ku" },
                        { jp: "じゅう", id: "Juu (Sepuluh) -> Beda dengan じゆう (Jiyuu = Bebas)" }
                    ]
                },
                {
                    title: "5. Pelesapan Bunyi Vokal",
                    explanation: "Agar terdengar natural seperti orang Jepang asli (Native), bunyi vokal 'i' atau 'u' kadang dibaca sangat samar. Yang paling sering terjadi adalah akhiran kalimat ~です (desu) dan ~ます (masu) yang biasanya hanya diucapkan 'des' dan 'mas'.",
                    formula: "〜です (Desu) -> Diucap 'Des'",
                    examples: [
                        { jp: "すきです", id: "Suki desu -> Diucapkan 'S'ki des'" },
                        { jp: "いきます", id: "Ikimasu -> Diucapkan 'Ikimas'" }
                    ]
                }
            ],
            quizzes: {
                bunpou: [
                    { q: "Huruf apa yang digunakan untuk menulis kosakata asli bahasa Jepang?", a: ["Katakana", "Kanji", "Hiragana", "Romaji"], correct: 2 },
                    { q: "Huruf apa yang khusus digunakan untuk menulis kata serapan dari bahasa asing?", a: ["Hiragana", "Katakana", "Kanji", "Romaji"], correct: 1 },
                    { q: "Kata 「わたし」 (Watashi) sebaiknya ditulis menggunakan huruf...", a: ["Hiragana", "Katakana", "Kanji", "Romaji"], correct: 0 },
                    { q: "Kata 「カメラ」 (Kamera) harus ditulis menggunakan huruf...", a: ["Hiragana", "Katakana", "Kanji", "Romaji"], correct: 1 },
                    { q: "Ada berapa jenis huruf utama yang digunakan dalam bahasa Jepang?", a: ["1 jenis", "2 jenis", "3 jenis", "4 jenis"], correct: 2 }
                ],
                kotoba: [
                    { q: "Mana yang merupakan huruf Hiragana 'A'?", a: ["ア", "あ", "い", "イ"], correct: 1 },
                    { q: "Mana yang merupakan huruf Katakana 'I'?", a: ["あ", "い", "ア", "イ"], correct: 3 },
                    { q: "Huruf う (U) termasuk dalam jenis huruf apa?", a: ["Katakana", "Kanji", "Hiragana", "Romaji"], correct: 2 },
                    { q: "Mana pasangan huruf Hiragana dan Katakana yang tepat untuk 'O'?", a: ["あ/ア", "お/オ", "え/エ", "う/ウ"], correct: 1 },
                    { q: "Huruf apakah ini: 「か」?", a: ["Ka", "Ki", "Ku", "Ke"], correct: 0 },
                    { q: "Huruf apakah ini: 「シ」?", a: ["Sa", "Shi", "Su", "Se"], correct: 1 },
                    { q: "Mana yang merupakan huruf Hiragana 'Te'?", a: ["た", "ち", "つ", "て"], correct: 3 },
                    { q: "Huruf apakah ini: 「ノ」?", a: ["Na", "Ni", "Nu", "No"], correct: 3 },
                    { q: "Mana yang merupakan huruf Katakana 'Ha'?", a: ["ハ", "ヒ", "フ", "ヘ"], correct: 0 },
                    { q: "Huruf apakah ini: 「み」?", a: ["Ma", "Mi", "Mu", "Me"], correct: 1 },
                    { q: "Mana yang merupakan huruf Hiragana 'Yu'?", a: ["や", "ゆ", "よ", "わ"], correct: 1 },
                    { q: "Huruf apakah ini: 「レ」?", a: ["Ra", "Ri", "Ru", "Re"], correct: 3 },
                    { q: "Mana yang merupakan huruf Katakana 'Wa'?", a: ["ワ", "ヲ", "ン", "ア"], correct: 0 },
                    { q: "Huruf apakah ini: 「ん」?", a: ["N mati", "Wa", "Wo", "O"], correct: 0 },
                    { q: "Mana yang merupakan huruf Hiragana 'Ga'?", a: ["か", "が", "き", "ぎ"], correct: 1 },
                    { q: "Huruf apakah ini: 「ズ」?", a: ["Za", "Ji", "Zu", "Ze"], correct: 2 },
                    { q: "Mana yang merupakan huruf Katakana 'De'?", a: ["ダ", "ヂ", "ヅ", "デ"], correct: 3 },
                    { q: "Huruf apakah ini: 「ボ」?", a: ["Ba", "Bi", "Bu", "Bo"], correct: 3 },
                    { q: "Mana yang merupakan huruf Hiragana 'Pi'?", a: ["ぱ", "ぴ", "ぷ", "ぺ"], correct: 1 },
                    { q: "Huruf apakah ini: 「ヲ」?", a: ["Wa", "Wo", "N", "O"], correct: 1 }
                ],
            },
            // choukai: {
            //     title: "Latihan Mendengar Percakapan",
            //     youtubeId: "dQw4w9WgXcQ", // Masukkan ID YouTube di sini
            //     text: "Simak baik-baik percakapan dalam video di atas.",
            //     translation: "..."
            // },
            // kanji: {
            //     title: "Kanji Dasar 1",
            //     list: [
            //         { karakter: '一', kunyomi: 'ひと(つ)', onyomi: 'イチ', arti: 'Satu' },
            //         { karakter: '二', kunyomi: 'ふた(つ)', onyomi: 'ニ', arti: 'Dua' }
            //     ]
            // }
        },
        2: {
            title: "Hari 2: Perkenalan Diri (Jikoshoukai)",
            description: "Belajar dasar menyapa, menyebutkan status, dan mengenalkan identitas diri.",
            kotoba: [
                { kanji: '私', kana: 'わたし', romaji: 'Watashi', arti: 'Saya' },
                { kanji: '学生', kana: 'がくせい', romaji: 'Gakusei', arti: 'Pelajar' },
                { kanji: '先生', kana: 'せんせい', romaji: 'Sensei', arti: 'Guru' },
                { kanji: '会社員', kana: 'かいしゃいん', romaji: 'Kaishain', arti: 'Pegawai Perusahaan' },
                { kanji: '初めまして', kana: 'はじめまして', romaji: 'Hajimemashite', arti: 'Perkenalkan (Salam Kenal)' },
                { kanji: '宜しくお願いします', kana: 'よろしく おねがいします', romaji: 'Yoroshiku onegaishimasu', arti: 'Mohon bimbingannya' }
            ],
            bunpou: [
                {
                    title: "1. Pola Kalimat Positif (~wa ~desu)",
                    explanation: "Digunakan untuk menyatakan 'A adalah B'. Partikel 'Wa' (ditulis dengan huruf Ha は) berfungsi sebagai penanda subjek/topik pembicaraan.",
                    formula: "[Subjek] は [Kata Benda] です",
                    examples: [
                        { jp: "わたしは がくせいです。", id: "Saya adalah pelajar." },
                        { jp: "わたしは インドネシアじんです。", id: "Saya adalah orang Indonesia." }
                    ]
                },
                {
                    title: "2. Pola Kalimat Negatif (~wa ~ja arimasen)",
                    explanation: "Digunakan untuk menyangkal sesuatu ('A BUKAN B'). Kamu bisa menggunakan 'ja arimasen' (kasual sopan) atau 'dewa arimasen' (sangat formal).",
                    formula: "[Subjek] は [Kata Benda] じゃありません",
                    examples: [
                        { jp: "わたしは せんせい じゃありません。", id: "Saya bukan seorang guru." },
                        { jp: "サントスさんは がくせい じゃありません。", id: "Saudara Santos bukan seorang pelajar." }
                    ]
                },
                {
                    title: "3. Pola Kalimat Tanya (~desu ka)",
                    explanation: "Untuk membuat kalimat tanya, cukup tambahkan partikel 'ka' (か) di akhir kalimat dasar. Tidak perlu mengubah susunan kata.",
                    formula: "[Kalimat Positif] + か",
                    examples: [
                        { jp: "あなたは がくせい ですか。", id: "Apakah kamu seorang pelajar?" },
                        { jp: "はい、わたしは がくせい です。", id: "Ya, saya adalah pelajar." }
                    ]
                }
            ],
            dokkai: {
                title: "はじめまして (Salam Kenal)",
                text: "やまだ： はじめまして。<ruby>私<rt>わたし</rt></ruby>は <ruby>山田<rt>やまだ</rt></ruby>です。<ruby>日本人<rt>にほんじん</rt></ruby>です。\nマリア： はじめまして。マリアです。インドネシア<ruby>人<rt>じん</rt></ruby>です。\nやまだ： マリアさんは <ruby>学生<rt>がくせい</rt></ruby>ですか。\nマリア： いいえ、<ruby>学生<rt>がくせい</rt></ruby>じゃありません。<ruby>会社員<rt>かいしゃいん</rt></ruby>です。やまださんは？\nやまだ： <ruby>私<rt>わたし</rt></ruby>は <ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。<ruby>先生<rt>せんせい</rt></ruby>です。よろしく お<ruby>願<rt>ねが</rt></ruby>いします。\nマリア： よろしく お<ruby>願<rt>ねが</rt></ruby>いします。",
                translation: "Yamada: Salam kenal. Saya adalah Yamada. (Saya) orang Jepang.\nMaria: Salam kenal. Saya Maria. (Saya) orang Indonesia.\nYamada: Apakah Saudari Maria seorang pelajar?\nMaria: Bukan, (saya) bukan pelajar. (Saya) pegawai perusahaan. Kalau Saudara Yamada?\nYamada: Saya bukan pegawai perusahaan. (Saya) seorang guru. Senang berkenalan dengan Anda (Mohon bimbingannya).\nMaria: Senang berkenalan dengan Anda juga."
            },
            // ... (kode quizzes hari ke 2) ...
            quizzes: {
                bunpou: [
                    { q: "Untuk menyatakan 'A adalah B', partikel apa yang diletakkan setelah Subjek?", a: ["か (ka)", "は (wa)", "の (no)", "に (ni)"], correct: 1 },
                    { q: "Bagaimana cara mengubah kalimat afirmatif (positif) menjadi kalimat tanya?", a: ["Menambahkan 'ja arimasen'", "Menambahkan 'desu'", "Menambahkan partikel 'ka' di akhir kalimat", "Menghapus partikel 'wa'"], correct: 2 },
                    { q: "Bentuk negatif (penyangkalan) dari kata '~desu' adalah...", a: ["~masu", "~ja arimasen", "~deshita", "~arimasu"], correct: 1 },
                    { q: "Kalimat yang benar untuk 'Saya adalah seorang guru' adalah...", a: ["わたしは せんせい です", "わたしは がくせい じゃありません", "せんせいは わたし ですか", "わたしは せんせい じゃありません"], correct: 0 },
                    { q: "Kalimat 'Apakah kamu pelajar?' dalam bahasa Jepang adalah...", a: ["わたしは がくせい です", "あなたは がくせい ですか", "あなたは せんせい じゃありません", "がくせい は あなた ですか"], correct: 1 },
                    { q: "Lengkapi kalimat ini: マリアさん (...) がくせい じゃありません。", a: ["か", "も", "は", "の"], correct: 2 },
                    { q: "Lengkapi kalimat ini: わたしは にほんじん (...)", a: ["です", "ですか", "は", "か"], correct: 0 },
                    { q: "Terjemahan dari 'いいえ、がくせい じゃありません' adalah...", a: ["Ya, saya pelajar", "Bukan, saya bukan pelajar", "Apakah kamu pelajar?", "Saya adalah pegawai"], correct: 1 },
                    { q: "Jika ditanya 'やまださんは 先生ですか' dan jawabannya YA, maka kalimat yang benar adalah...", a: ["はい、先生 です。", "いいえ、先生 じゃありません。", "はい、学生 です。", "いいえ、先生 です。"], correct: 0 },
                    { q: "Pola kalimat '~wa ~ja arimasen' digunakan untuk...", a: ["Menyetujui sesuatu", "Menanyakan sesuatu", "Menyangkal (Bukan)", "Menyatakan kepemilikan"], correct: 2 },
                    { q: "Partikel 'wa' (sebagai penanda topik) dalam bahasa Jepang harus ditulis menggunakan huruf Hiragana...", a: ["わ", "は", "を", "ん"], correct: 1 },
                    { q: "Terjemahkan ke bahasa Jepang: 'Saya BUKAN orang Jepang.'", a: ["わたしは にほんじん です", "わたしは にほんじん じゃありません", "わたしは かいしゃいん じゃありません", "あなたは にほんじん ですか"], correct: 1 },
                    { q: "Kalimat 'やまださんは かいしゃいん ですか' berarti...", a: ["Yamada adalah pegawai", "Apakah Yamada seorang guru?", "Yamada bukan pegawai", "Apakah Tuan Yamada seorang pegawai perusahaan?"], correct: 3 },
                    { q: "Untuk menjawab pertanyaan bahasa Jepang dengan arti 'Bukan/Tidak', kita menggunakan awalan...", a: ["はい (Hai)", "いいえ (Iie)", "あの (Ano)", "そう (Sou)"], correct: 1 },
                    { q: "Gabungan pola untuk bertanya kepada orang lain mengenai statusnya adalah...", a: ["[Subjek] は [Kata Benda] じゃありません", "[Subjek] は [Kata Benda] です", "[Subjek] は [Kata Benda] ですか", "[Subjek] も [Kata Benda] です"], correct: 2 }
                ],
                kotoba: [
                    { q: "Apa bahasa Jepangnya 'Saya'?", a: ["あなた", "せんせい", "わたし", "がくせい"], correct: 2 },
                    { q: "Mana kata yang berarti 'Pegawai Perusahaan'?", a: ["がくせい", "かいしゃいん", "せんせい", "にほんじん"], correct: 1 },
                    { q: "Ungkapan 'Hajimemashite' diucapkan saat...", a: ["Berpisah", "Pertama kali berkenalan", "Meminta maaf", "Berterima kasih"], correct: 1 },
                    { q: "Apa arti dari kata 「せんせい」?", a: ["Pelajar", "Dokter", "Guru", "Saya"], correct: 2 },
                    { q: "Ungkapan untuk menutup perkenalan ('Mohon bimbingannya') adalah...", a: ["よろしく おねがいします", "はじめまして", "ありがとう ございます", "すみません"], correct: 0 }
                ],
                dokkai: [
                    { q: "Berdasarkan cerita, siapakah yang berasal dari Jepang?", a: ["Maria", "Yamada", "Keduanya", "Tidak ada"], correct: 1 },
                    { q: "Apa pekerjaan Maria?", a: ["Pelajar (Gakusei)", "Guru (Sensei)", "Pegawai Perusahaan (Kaishain)", "Dokter"], correct: 2 },
                    { q: "Apakah Maria seorang pelajar?", a: ["Ya, dia pelajar", "Bukan, dia pegawai perusahaan", "Bukan, dia guru", "Ya, dia mahasiswa"], correct: 1 },
                    { q: "Siapakah yang bekerja sebagai guru?", a: ["Maria", "Yamada", "Keduanya", "Tidak disebutkan"], correct: 1 },
                    { q: "Dari mana asal Maria?", a: ["Jepang", "Malaysia", "Singapura", "Indonesia"], correct: 3 }
                ]
            }
        },
        3: {
            title: "Hari 3: Kosakata Lengkap Bab 1 & Partikel Mo/No",
            description: "Melengkapi semua kosakata perkenalan diri, nama negara, profesi, serta memahami partikel kepemilikan.",
            kotoba: [
                { kanji: 'あなた', kana: 'あなた', romaji: 'Anata', arti: 'Anda' },
                { kanji: 'あの人・あの方', kana: 'あのひと・あのかた', romaji: 'Ano hito / Ano kata', arti: 'Orang itu / Beliau (Sopan)' },
                { kanji: '～さん', kana: '～さん', romaji: '~san', arti: 'Sdr/Bapak/Ibu ~' },
                { kanji: '～ちゃん', kana: '～ちゃん', romaji: '~chan', arti: 'Akhiran untuk anak-anak' },
                { kanji: '～人', kana: '～じん', romaji: '~jin', arti: 'Orang (Warga negara)' },
                { kanji: '教師', kana: 'きょうし', romaji: 'Kyoushi', arti: 'Guru / Dosen' },
                { kanji: '社員', kana: 'しゃいん', romaji: 'Shain', arti: 'Karyawan perusahaan (beserta nama perusahaannya)' },
                { kanji: '銀行員', kana: 'ぎんこういん', romaji: 'Ginkouin', arti: 'Pegawai bank' },
                { kanji: '医者', kana: 'いしゃ', romaji: 'Isha', arti: 'Dokter' },
                { kanji: '研究者', kana: 'けんきゅうしゃ', romaji: 'Kenkyuusha', arti: 'Peneliti' },
                { kanji: '大学', kana: 'だいがく', romaji: 'Daigaku', arti: 'Universitas' },
                { kanji: '病院', kana: 'びょういん', romaji: 'Byouin', arti: 'Rumah sakit' },
                { kanji: 'だれ・どなた', kana: 'だれ・どなた', romaji: 'Dare / Donata', arti: 'Siapa / Siapa (Sopan)' },
                { kanji: '～歳', kana: '～さい', romaji: '~sai', arti: '~ tahun (Umur)' },
                { kanji: '何歳・おいくつ', kana: 'なんさい・おいくつ', romaji: 'Nansai / Oikutsu', arti: 'Umur berapa?' },
                { kanji: 'はい・いいえ', kana: 'はい・いいえ', romaji: 'Hai / Iie', arti: 'Ya / Tidak, bukan' },
                { kanji: '失礼ですが', kana: 'しつれいですが', romaji: 'Shitsurei desu ga', arti: 'Permisi, maaf...' },
                { kanji: 'お名前は？', kana: 'おなまえは？', romaji: 'O-namae wa?', arti: 'Siapa namanya?' },
                { kanji: 'こちらは～さんです', kana: 'こちらは～さんです', romaji: 'Kochira wa ~san desu', arti: 'Ini adalah Bapak/Ibu/Sdr ~' },
                { kanji: '～から来ました', kana: '～からきました', romaji: '~kara kimashita', arti: 'Datang/berasal dari ~' },
                { kanji: 'アメリカ', kana: 'あめりか', romaji: 'Amerika', arti: 'Amerika Serikat' },
                { kanji: 'イギリス', kana: 'いぎりす', romaji: 'Igirisu', arti: 'Inggris' },
                { kanji: 'インドネシア', kana: 'いんどねしあ', romaji: 'Indoneshia', arti: 'Indonesia' },
                { kanji: '日本', kana: 'にほん', romaji: 'Nihon', arti: 'Jepang' }
            ],
            bunpou: [
                {
                    title: "1. Partikel も (Mo) - Menyatakan 'Juga'",
                    explanation: "Jika kamu ingin mengatakan 'juga' (situasinya sama dengan kalimat sebelumnya), kamu bisa mengganti partikel 'Wa' dengan 'Mo'.",
                    formula: "[Subjek] も [Kata Benda] です",
                    examples: [
                        { jp: "やまださんは 先生です。たなかさんも 先生です。", id: "Yamada adalah guru. Tanaka JUGA adalah guru." },
                        { jp: "わたしも インドネシアじんです。", id: "Saya JUGA orang Indonesia." }
                    ]
                },
                {
                    title: "2. Partikel の (No) - Kepemilikan & Keterangan",
                    explanation: "Partikel ini mengikat dua kata benda. Kata benda pertama menjelaskan kata benda kedua. Sering kali diartikan sebagai 'milik/dari', tapi terkadang tidak perlu diterjemahkan dalam bahasa Indonesia.",
                    formula: "[KB 1] の [KB 2]",
                    examples: [
                        { jp: "わたしは さくら大学の 学生です。", id: "Saya adalah mahasiswa (dari) Universitas Sakura." },
                        { jp: "やまださんは トヨタの 社員です。", id: "Yamada adalah karyawan (perusahaan) Toyota." }
                    ]
                },
                {
                    title: "3. Bertanya 'Siapa' dan 'Umur Berapa'",
                    explanation: "Gunakan kata tanya だれ (Dare) untuk bertanya 'Siapa'. Jika ingin lebih sopan, gunakan どなた (Donata). Untuk menanyakan umur, gunakan 何歳 (Nansai) atau bentuk sopannya おいくつ (Oikutsu).",
                    formula: "あの人は だれですか / あの方は どなたですか",
                    examples: [
                        { jp: "あの人は だれですか。", id: "Orang itu siapa?" },
                        { jp: "あの方は どなたですか。", id: "Beliau itu siapa? (Lebih sopan)" },
                        { jp: "たろうくんは なんさいですか。", id: "Taro umurnya berapa?" }
                    ]
                }
            ],
            dokkai: {
                title: "これは なんですか (Ini apa?)",
                text: "マリア： やまださん、それは なんですか。\nやまだ： これは <ruby>辞書<rt>じしょ</rt></ruby>です。\nマリア： やまださんの <ruby>辞書<rt>じしょ</rt></ruby> ですか。\nやまだ： いいえ、<ruby>私<rt>わたし</rt></ruby>の じゃありません。たなか<ruby>先生<rt>せんせい</rt></ruby>の です。\nマリア： そうですか。あれは やまださんの <ruby>鞄<rt>かばん</rt></ruby> ですか。\nやまだ： はい、あれは <ruby>私<rt>わたし</rt></ruby>の です。",
                translation: "Maria: Yamada, itu (di dekatmu) apa?\nYamada: Ini adalah kamus.\nMaria: Apakah kamus milik Yamada?\nYamada: Bukan, bukan milik saya. Milik Pak Tanaka.\nMaria: Begitu ya. Apakah itu (di sana) tas milik Yamada?\nYamada: Ya, itu milik saya."
            },
            quizzes: {
                bunpou: [
                    { q: "Pola kalimat yang tepat untuk menyatakan 'Ini adalah buku' adalah...", a: ["これは ほん です", "それは ほん です", "あれは ほん です", "ほんは これ です"], correct: 0 },
                    { q: "Jika sebuah benda berada di dekat teman bicaramu, kamu menunjuknya menggunakan kata...", a: ["これ (Kore)", "それ (Sore)", "あれ (Are)", "わたし (Watashi)"], correct: 1 },
                    { q: "Kata tunjuk untuk benda yang jaraknya jauh dari kamu DAN temanmu adalah...", a: ["これ", "それ", "あれ", "どれ"], correct: 2 },
                    { q: "Untuk menanyakan 'Ini apa?', kalimat bahasa Jepang yang benar adalah...", a: ["これは だれですか", "これは なんですか", "これは ほんですか", "なんは これですか"], correct: 1 },
                    { q: "Terjemahan yang tepat untuk 'Apakah ini kamus atau buku?' adalah...", a: ["これは じしょですか、ほんですか", "これは じしょ、ほんですか", "これ じしょですか ほんですか", "これは じしょですか、ほんです"], correct: 0 },
                    { q: "Lengkapi kalimat berikut: あれ (...) とけい です。", a: ["は", "か", "も", "の"], correct: 0 },
                    { q: "Bagaimana cara bertanya 'Apakah itu (jauh di sana) adalah payung?'", a: ["あれは かさです", "これは かさですか", "それは かさですか", "あれは かさですか"], correct: 3 },
                    { q: "Lengkapi kalimat tanya berikut: それは かばん (...)。", a: ["です", "ですか", "は", "も"], correct: 1 },
                    { q: "Jika seseorang memegang payung dan bertanya padamu 'Kore wa nan desu ka?', kamu akan menjawab dengan awalan...", a: ["これは...", "それは...", "あれは...", "わたしは..."], correct: 1 },
                    { q: "Jika benda ada di tanganmu dan temanmu bertanya 'Sore wa nan desu ka?', kamu membalas dengan awalan...", a: ["これは...", "それは...", "あれは...", "あなたは..."], correct: 0 }
                ],
                kotoba: [
                    { q: "Bahasa Jepang dari kata 'Buku' adalah...", a: ["ほん", "じしょ", "かさ", "かばん"], correct: 0 },
                    { q: "Bahasa Jepang dari kata 'Kamus' adalah...", a: ["ざっし", "じしょ", "しんぶん", "のーと"], correct: 1 },
                    { q: "Bahasa Jepang dari kata 'Payung' adalah...", a: ["かばん", "つくえ", "かさ", "いす"], correct: 2 },
                    { q: "Bahasa Jepang dari kata 'Meja' adalah...", a: ["いす", "ほん", "とけい", "つくえ"], correct: 3 },
                    { q: "Bahasa Jepang dari kata 'Kursi' adalah...", a: ["かばん", "かさ", "いす", "つくえ"], correct: 2 },
                    { q: "Bahasa Jepang dari kata 'Jam' adalah...", a: ["とけい", "のーと", "ほん", "じしょ"], correct: 0 },
                    { q: "Bahasa Jepang dari kata 'Tas' adalah...", a: ["かさ", "かばん", "いす", "つくえ"], correct: 1 },
                    { q: "Bahasa Jepang dari kata 'Majalah' adalah...", a: ["しんぶん", "じしょ", "ほん", "ざっし"], correct: 3 },
                    { q: "Bahasa Jepang dari kata 'Koran' adalah...", a: ["てちょう", "のーと", "しんぶん", "ざっし"], correct: 2 },
                    { q: "Bahasa Jepang dari kata tanya 'Apa' adalah...", a: ["だれ", "なん", "どこ", "いつ"], correct: 1 },
                    { q: "Kata tunjuk untuk benda yang DEKAT dengan pembicara (Ini) adalah...", a: ["それ", "あれ", "どれ", "これ"], correct: 3 },
                    { q: "Kata 'Pensil' dalam bahasa Jepang adalah...", a: ["とけい", "えんぴつ", "ぼーるぺん", "かばん"], correct: 1 },
                    { q: "Kata 'Pulpen' dalam bahasa Jepang adalah...", a: ["ぼーるぺん", "えんぴつ", "のーと", "てちょう"], correct: 0 },
                    { q: "Bahasa Jepang dari 'Buku Catatan' adalah...", a: ["てちょう", "ほん", "ざっし", "ノート"], correct: 3 },
                    { q: "Bahasa Jepang dari 'Buku Saku / Agenda' adalah...", a: ["てちょう", "ノート", "しんぶん", "じしょ"], correct: 0 }
                ],
                dokkai: [
                    { q: "Benda apa yang ditanyakan oleh Maria di awal percakapan?", a: ["Tas", "Kamus", "Jam", "Buku"], correct: 1 },
                    { q: "Milik siapakah kamus tersebut?", a: ["Milik Maria", "Milik Sekolah", "Milik Tanaka-sensei", "Milik Yamada"], correct: 2 },
                    { q: "Kalimat apa yang Maria gunakan saat menunjuk kamus yang dipegang Yamada?", a: ["それは なんですか", "これは なんですか", "あれは なんですか", "どれは なんですか"], correct: 0 },
                    { q: "Benda apa yang posisinya jauh dari Maria maupun Yamada?", a: ["Payung", "Meja", "Kamus", "Tas"], correct: 3 },
                    { q: "Milik siapakah tas yang ada di sana?", a: ["Milik Yamada", "Milik Maria", "Milik Tanaka-sensei", "Tidak ada pemiliknya"], correct: 0 }
                ]
            }
        },
        4: {
            title: "Hari 4: Menunjuk Benda (Kore/Sore/Are)",
            description: "Mempelajari cara menunjuk benda, mengkonfirmasi jawaban, memberikan pilihan, serta fungsi lanjutan dari partikel 'No'.",
            kotoba: [
                { kanji: 'これ', kana: 'これ', romaji: 'Kore', arti: 'Ini (benda di dekat pembicara)' },
                { kanji: 'それ', kana: 'それ', romaji: 'Sore', arti: 'Itu (benda di dekat lawan bicara)' },
                { kanji: 'あれ', kana: 'あれ', romaji: 'Are', arti: 'Itu (benda jauh dari keduanya)' },
                { kanji: 'この～', kana: 'この～', romaji: 'Kono~', arti: '~ini (menerangkan benda)' },
                { kanji: 'その～', kana: 'その～', romaji: 'Sono~', arti: '~itu (menerangkan benda)' },
                { kanji: 'あの～', kana: 'あの～', romaji: 'Ano~', arti: '~itu jauh (menerangkan benda)' },
                { kanji: '本', kana: 'ほん', romaji: 'Hon', arti: 'Buku' },
                { kanji: '辞書', kana: 'じしょ', romaji: 'Jisho', arti: 'Kamus' },
                { kanji: '雑誌', kana: 'ざっし', romaji: 'Zasshi', arti: 'Majalah' },
                { kanji: '新聞', kana: 'しんぶん', romaji: 'Shinbun', arti: 'Koran' },
                { kanji: 'ノート', kana: 'のーと', romaji: 'Nooto', arti: 'Buku tulis' },
                { kanji: '手帳', kana: 'てちょう', romaji: 'Techou', arti: 'Buku agenda' },
                { kanji: '名刺', kana: 'めいし', romaji: 'Meishi', arti: 'Kartu nama' },
                { kanji: 'カード', kana: 'かーど', romaji: 'Kaado', arti: 'Kartu' },
                { kanji: '鉛筆', kana: 'えんぴつ', romaji: 'Enpitsu', arti: 'Pensil' },
                { kanji: 'ボールペン', kana: 'ぼーるぺん', romaji: 'Boorupen', arti: 'Bolpoin' },
                { kanji: 'シャープペンシル', kana: 'しゃーぷぺんしる', romaji: 'Shaapupenshiru', arti: 'Pensil mekanik' },
                { kanji: 'かぎ', kana: 'かぎ', romaji: 'Kagi', arti: 'Kunci' },
                { kanji: '時計', kana: 'とけい', romaji: 'Tokei', arti: 'Jam, arloji' },
                { kanji: '傘', kana: 'かさ', romaji: 'Kasa', arti: 'Payung' },
                { kanji: 'かばん', kana: 'かばん', romaji: 'Kaban', arti: 'Tas' },
                { kanji: 'CD', kana: 'しーでぃー', romaji: 'CD', arti: 'CD' },
                { kanji: 'テレビ', kana: 'てれび', romaji: 'Terebi', arti: 'Televisi' },
                { kanji: 'ラジオ', kana: 'らじお', romaji: 'Rajio', arti: 'Radio' },
                { kanji: 'カメラ', kana: 'かめら', romaji: 'Kamera', arti: 'Kamera' },
                { kanji: 'コンピューター', kana: 'こんぴゅーたー', romaji: 'Konpyuutaa', arti: 'Komputer' },
                { kanji: '車', kana: 'くるま', romaji: 'Kuruma', arti: 'Mobil' },
                { kanji: '机', kana: 'つくえ', romaji: 'Tsukue', arti: 'Meja' },
                { kanji: 'いす', kana: 'いす', romaji: 'Isu', arti: 'Kursi' },
                { kanji: 'チョコレート', kana: 'ちょこれーと', romaji: 'Chokoreeto', arti: 'Coklat' },
                { kanji: 'コーヒー', kana: 'こーひー', romaji: 'Koohii', arti: 'Kopi' },
                { kanji: 'お土産', kana: 'おみやげ', romaji: 'Omiyage', arti: 'Oleh-oleh' },
                { kanji: '英語', kana: 'えいご', romaji: 'Eigo', arti: 'Bahasa Inggris' },
                { kanji: '日本語', kana: 'にほんご', romaji: 'Nihongo', arti: 'Bahasa Jepang' },
                { kanji: '何', kana: 'なん', romaji: 'Nan', arti: 'Apa' },
                { kanji: '違います', kana: 'ちがいます', romaji: 'Chigaimasu', arti: 'Bukan / Salah' },
                { kanji: 'ありがとう', kana: 'ありがとう', romaji: 'Arigatou', arti: 'Terima kasih' },
                { kanji: 'そうです', kana: 'そうです', romaji: 'Sou desu', arti: 'Benar / Ya, betul' }
            ],
            bunpou: [
                {
                    title: "1. Kata Tunjuk Benda (Kore / Sore / Are)",
                    explanation: "Digunakan sebagai pengganti kata benda. 'Kore' (Ini) untuk menunjuk benda di dekatmu. 'Sore' (Itu) untuk benda di dekat lawan bicara. 'Are' (Itu Jauh) untuk benda yang jauh dari kalian berdua.",
                    formula: "これ / それ / あれ は [Kata Benda] です",
                    examples: [
                        { jp: "それは じしょですか。", id: "Apakah itu kamus?" },
                        { jp: "これは だれの かさですか。", id: "Ini payung siapa?" }
                    ]
                },
                {
                    title: "2. Menempelkan Kata Tunjuk (Kono / Sono / Ano)",
                    explanation: "Berbeda dengan Kore/Sore/Are, kata Kono/Sono/Ano TIDAK BISA berdiri sendiri. Mereka harus selalu menempel dan diikuti langsung oleh kata benda untuk menerangkan benda tersebut secara spesifik (misal: Buku ini, Tas itu).",
                    formula: "この / その / あの [Kata Benda] は [Keterangan] です",
                    examples: [
                        { jp: "この ほんは わたしのです。", id: "Buku ini adalah milik saya." },
                        { jp: "あの かたは どなたですか。", id: "Beliau itu siapa?" }
                    ]
                },
                {
                    title: "3. Mengonfirmasi Kebenaran (Sou desu / Chigaimasu)",
                    explanation: "Saat seseorang bertanya apakah sebuah benda adalah 'A', kamu bisa membenarkannya dengan menjawab 'Hai, Sou desu' (Ya, betul). Jika tebakannya salah, jangan gunakan bentuk negatif yang panjang, cukup ucapkan 'Iie, Chigaimasu' (Bukan / Salah).",
                    formula: "はい、そうです。 / いいえ、ちがいます。",
                    examples: [
                        { jp: "それは じしょですか。…はい、そうです。", id: "Apakah itu kamus? ...Ya, betul." },
                        { jp: "それは ミラーさんのですか。…いいえ、ちがいます。", id: "Apakah itu milik Tuan Miller? ...Bukan." }
                    ]
                },
                {
                    title: "4. Memberikan Pilihan (～か、～か)",
                    explanation: "Jika kamu ingin bertanya 'A atau B?', cukup gunakan partikel 'Ka' (か) di belakang setiap pilihan. Saat menjawab, tidak perlu mengucapkan Hai/Iie, langsung saja sebutkan jawaban yang benar.",
                    formula: "[Pilihan 1] ですか、[Pilihan 2] ですか。",
                    examples: [
                        { jp: "これは 「９」ですか、「７」ですか。…「９」です。", id: "Apakah ini '9' atau '7'? ...Ini '9'." }
                    ]
                },
                {
                    title: "5. Partikel 'No' (の) Tingkat Lanjut",
                    explanation: "Selain menunjukkan kepemilikan, partikel の (No) punya dua fungsi ajaib lainnya: 1. Menjelaskan isi benda (contoh: Buku (tentang) Komputer). 2. Berfungsi sebagai kata 'Milik' agar kamu tidak perlu mengulang kata benda yang sama berkali-kali.",
                    formula: "これ は コンピューター の ほんです / これは わたし の です",
                    examples: [
                        { jp: "これは コンピューターの ほんです。", id: "Ini adalah buku komputer." },
                        { jp: "あれは だれの かばんですか。…さとうさんのです。", id: "Tas itu punya siapa? ...Punya Sato. (Tidak perlu mengulang kata 'Kaban')" },
                        { jp: "この かばんは あなたのですか。…いいえ、わたしの じゃありません。", id: "Apakah tas ini milik Anda? ...Bukan, bukan milik saya." }
                    ]
                },
                {
                    title: "6. Ekspresi 'Sou desu ka' & Awalan Sopan 'O'",
                    explanation: "Jika kamu baru saja menerima informasi baru dan ingin merespons 'Oh, begitu', gunakan kalimat 'Sou desu ka' dengan intonasi menurun di akhir. Selain itu, kamu bisa menambahkan huruf 'O' (お) di depan beberapa benda untuk membuatnya terdengar lebih sopan.",
                    formula: "そうですか。(Intonasi turun) / お + [Kata Benda]",
                    examples: [
                        { jp: "この かさは あなたのですか。…いいえ、シュミットさんのです。…そうですか。", id: "Payung ini punya Anda? ...Bukan, punya Schmidt. ...Oh, begitu." },
                        { jp: "おみやげ", id: "Oleh-oleh (Bentuk sopan)" }
                    ]
                }
            ],
            dokkai: {
                title: "ここは どこですか (Di mana ini?)",
                text: "マリア： やまださん、ここは どこですか。\nやまだ： ここは <ruby>受付<rt>うけつけ</rt></ruby>です。\nマリア： そうですか。<ruby>事務所<rt>じむしょ</rt></ruby>は どこですか。\nやまだ： <ruby>事務所<rt>じむしょ</rt></ruby>は あそこです。\nマリア： <ruby>食堂<rt>しょくどう</rt></ruby>も あそこですか。\nやまだ： いいえ、<ruby>食堂<rt>しょくどう</rt></ruby>は そこです。\nマリア： トイレは どこですか。\nやまだ： トイレは あそこです。",
                translation: "Maria: Yamada, di sini (tempat ini) di mana?\nYamada: Di sini adalah resepsionis.\nMaria: Begitu ya. Kantor ada di mana?\nYamada: Kantor ada di sana.\nMaria: Apakah kantin juga ada di sana?\nYamada: Bukan, kantin ada di situ.\nMaria: Toilet ada di mana?\nYamada: Toilet ada di sana."
            },
            quizzes: {
                bunpou: [
                    { q: "Apa kata tunjuk untuk tempat di mana pembicara berdiri?", a: ["そこ", "どこ", "ここ", "あそこ"], correct: 2 },
                    { q: "Bahasa Jepang dari 'Di sini adalah kantor'?", a: ["じむしょは ここです", "ここは じむしょです", "ここは じむしょですか", "そこは じむしょです"], correct: 1 },
                    { q: "Cara menanyakan 'Toilet ada di mana?'", a: ["トイレは どこですか", "トイレは あそこですか", "どこは トイレですか", "ここは トイレですか"], correct: 0 },
                    { q: "Lengkapi: しょくどう (...) あそこです。", a: ["の", "か", "も", "は"], correct: 3 },
                    { q: "Arti 'エレベーターは そこです'?", a: ["Lift di mana?", "Lift di sana", "Lift di sini", "Lift di situ"], correct: 3 },
                    { q: "Kata tunjuk tempat yang jauh dari keduanya?", a: ["どこ", "そこ", "ここ", "あそこ"], correct: 3 },
                    { q: "Kalimat 'Guru ada di kelas'?", a: ["せんせいは きょうしつです", "せんせいは どこですか", "きょうしつは せんせいです", "ここは きょうしつです"], correct: 0 },
                    { q: "Lengkapi: かいぎしつは (...) ですか。", a: ["ここ", "どこ", "だれ", "なん"], correct: 1 },
                    { q: "Terjemahan 'あそこは ロビーです'?", a: ["Di situ lobi", "Lobi di sana", "Di sana lobi", "Di mana lobi?"], correct: 2 },
                    { q: "Jawaban tepat untuk '事務所は どこですか'?", a: ["はい、じむしょです", "じむしょは あそこです", "じむしょは なんですか", "いいえ、じむしょじゃありません"], correct: 1 }
                ],
                kotoba: [
                    { q: "Bahasa Jepang 'Ruang Kelas'?", a: ["じむしょ", "しょくどう", "きょうしつ", "へya"], correct: 2 },
                    { q: "Bahasa Jepang 'Kantin'?", a: ["しょくどう", "かいぎしつ", "うけつけ", "といれ"], correct: 0 },
                    { q: "Bahasa Jepang 'Kantor'?", a: ["きょうしつ", "へや", "くに", "じむしょ"], correct: 3 },
                    { q: "Bahasa Jepang 'Ruang Rapat'?", a: ["しょくどう", "かいぎしつ", "かいだん", "ろびー"], correct: 1 },
                    { q: "Bahasa Jepang 'Toilet'?", a: ["へや", "といれ", "エレベーター", "うけつけ"], correct: 1 },
                    { q: "Bahasa Jepang 'Kamar'?", a: ["くに", "へya", "じむしょ", "きょうしつ"], correct: 1 },
                    { q: "Bahasa Jepang 'Resepsionis'?", a: ["うけつけ", "かいだん", "しょくどう", "といれ"], correct: 0 },
                    { q: "Bahasa Jepang 'Tangga'?", a: ["エレベーター", "かいだん", "へや", "ろびー"], correct: 1 },
                    { q: "Bahasa Jepang 'Lift'?", a: ["エレベーター", "ロビー", "トイレ", "ドア"], correct: 0 },
                    { q: "Bahasa Jepang 'Lobi'?", a: ["トイレ", "ロビー", "エレベーター", "エアコン"], correct: 1 },
                    { q: "Bahasa Jepang 'Negara'?", a: ["くに", "へや", "まち", "やま"], correct: 0 },
                    { q: "Kata tanya 'Di mana'?", a: ["なん", "だれ", "どこ", "いつ"], correct: 2 },
                    { q: "Kata tunjuk 'Di sini'?", a: ["そこ", "ここ", "あそこ", "どこ"], correct: 1 },
                    { q: "Kata tunjuk 'Di sana (Jauh)'?", a: ["ここ", "そこ", "あそこ", "どこ"], correct: 2 },
                    { q: "Kata tunjuk 'Di situ'?", a: ["そこ", "ここ", "あそこ", "どこ"], correct: 0 }
                ],
                dokkai: [
                    { q: "Di mana Maria dan Yamada berada?", a: ["Kantor", "Resepsionis", "Kantin", "Toilet"], correct: 1 },
                    { q: "Apa yang ditanya Maria pertama kali?", a: ["Kelas", "Toilet", "Kantor", "Kantin"], correct: 2 },
                    { q: "Di mana letak Kantor (Jimusho)?", a: ["Koko", "Soko", "Asoko", "Lantai 2"], correct: 2 },
                    { q: "Apakah Kantin juga ada di Asoko?", a: ["Ya", "Bukan, di Soko", "Bukan, di Koko", "Tutup"], correct: 1 },
                    { q: "Di mana letak Toilet?", a: ["Koko", "Soko", "Asoko", "Dalam kantor"], correct: 2 }
                ]
            }
        },
        5: {
            title: "Hari 5: Tempat & Arah (Koko/Soko/Asoko)",
            description: "Memperkaya kosakata tentang nama-nama ruangan, tempat umum, angka/harga, serta tata bahasa untuk menanyakan dan menunjukkan lokasi.",
            kotoba: [
                { kanji: 'ここ', kana: 'ここ', romaji: 'Koko', arti: 'Sini' },
                { kanji: 'そこ', kana: 'そこ', romaji: 'Soko', arti: 'Situ' },
                { kanji: 'あそこ', kana: 'あそこ', romaji: 'Asoko', arti: 'Sana' },
                { kanji: 'どこ', kana: 'どこ', romaji: 'Doko', arti: '(Di) mana' },
                { kanji: 'こちら', kana: 'こちら', romaji: 'Kochira', arti: 'Sini / Sebelah sini (Bentuk sopan)' },
                { kanji: 'そちら', kana: 'そちら', romaji: 'Sochira', arti: 'Situ / Sebelah situ (Bentuk sopan)' },
                { kanji: 'あちら', kana: 'あちら', romaji: 'Achira', arti: 'Sana / Sebelah sana (Bentuk sopan)' },
                { kanji: 'どちら', kana: 'どちら', romaji: 'Dochira', arti: 'Mana / Sebelah mana (Bentuk sopan)' },
                { kanji: '教室', kana: 'きょうしつ', romaji: 'Kyoushitsu', arti: 'Ruang kelas' },
                { kanji: '食堂', kana: 'しょくどう', romaji: 'Shokudou', arti: 'Ruang makan, kantin' },
                { kanji: '事務所', kana: 'じむしょ', romaji: 'Jimusho', arti: 'Kantor' },
                { kanji: '会議室', kana: 'かいぎしつ', romaji: 'Kaigishitsu', arti: 'Ruang rapat' },
                { kanji: '受付', kana: 'うけつけ', romaji: 'Uketsuke', arti: 'Meja informasi, resepsionis' },
                { kanji: 'ロビー', kana: 'ろびー', romaji: 'Robii', arti: 'Ruang tunggu, lobi' },
                { kanji: '部屋', kana: 'へや', romaji: 'Heya', arti: 'Kamar, ruangan' },
                { kanji: 'トイレ（お手洗い）', kana: 'といれ（おてあらい）', romaji: 'Toire (Otearai)', arti: 'Toilet, kamar kecil' },
                { kanji: '階段', kana: 'かいだん', romaji: 'Kaidan', arti: 'Tangga' },
                { kanji: 'エレベーター', kana: 'えれべーたー', romaji: 'Erebeetaa', arti: 'Lift' },
                { kanji: 'エスカレーター', kana: 'えすかれーたー', romaji: 'Esukareetaa', arti: 'Eskalator' },
                { kanji: '自動販売機', kana: 'じどうはんばいき', romaji: 'Jidouhanbaiki', arti: 'Mesin jual otomatis' },
                { kanji: '電話', kana: 'でんわ', romaji: 'Denwa', arti: 'Telepon' },
                { kanji: '[お]国', kana: '[お]くに', romaji: '[O]Kuni', arti: 'Negara, negeri' },
                { kanji: '会社', kana: 'かいしゃ', romaji: 'Kaisha', arti: 'Perusahaan' },
                { kanji: 'うち', kana: 'うち', romaji: 'Uchi', arti: 'Rumah' },
                { kanji: '靴', kana: 'くつ', romaji: 'Kutsu', arti: 'Sepatu' },
                { kanji: 'ネクタイ', kana: 'ねくたい', romaji: 'Nekutai', arti: 'Dasi' },
                { kanji: 'ワイン', kana: 'わいん', romaji: 'Wain', arti: 'Anggur (Wine)' },
                { kanji: '売り場', kana: 'うりば', romaji: 'Uriba', arti: 'Tempat penjualan, konter' },
                { kanji: '地下', kana: 'ちか', romaji: 'Chika', arti: 'Bawah tanah, basement' },
                { kanji: 'ー階', kana: 'ーかい（ーがい）', romaji: '-kai / -gai', arti: 'Lantai -, tingkat -' },
                { kanji: '何階', kana: 'なんがい', romaji: 'Nangai', arti: 'Lantai berapa?' },
                { kanji: 'ー円', kana: 'ーえん', romaji: '-en', arti: '- Yen' },
                { kanji: 'いくら', kana: 'いくら', romaji: 'Ikura', arti: 'Berapa (Harga)' },
                { kanji: '百', kana: 'ひゃく', romaji: 'Hyaku', arti: 'Ratus' },
                { kanji: '千', kana: 'せん', romaji: 'Sen', arti: 'Ribu' },
                { kanji: '万', kana: 'まん', romaji: 'Man', arti: 'Puluh ribu' },
                { kanji: 'すみません', kana: 'すみません', romaji: 'Sumimasen', arti: 'Maaf / Permisi' },
                { kanji: 'どうも', kana: 'どうも', romaji: 'Doumo', arti: 'Terima kasih' },
                { kanji: 'いらっしゃいませ', kana: 'いらっしゃいませ', romaji: 'Irasshaimase', arti: 'Selamat datang / Bisa saya bantu?' },
                { kanji: '[〜を]見せてください', kana: '[〜を]みせてください', romaji: '[~o] Misete kudasai', arti: 'Tolong perlihatkan [~]' },
                { kanji: 'じゃ', kana: 'じゃ', romaji: 'Ja', arti: 'Baiklah, kalau begitu' },
                { kanji: '[〜を]ください', kana: '[〜を]ください', romaji: '[~o] Kudasai', arti: 'Minta [~] / Tolong berikan [~]' }
            ],
            bunpou: [
                {
                    title: "1. Kata Tunjuk Tempat (Koko / Soko / Asoko)",
                    explanation: "'Koko' (Sini) digunakan untuk tempat di mana pembicara berada. 'Soko' (Situ) untuk tempat lawan bicara berada. 'Asoko' (Sana) untuk tempat yang jauh dari keduanya. Jika pembicara dan lawan bicara berada di area yang sama, 'Koko' adalah tempat mereka berdiri, 'Soko' sedikit agak jauh, dan 'Asoko' adalah tempat yang paling jauh.",
                    formula: "ここ / そこ / あそこ は [Tempat] です",
                    examples: [
                        { jp: "ここは しょくどうです。", id: "Di sini adalah kantin." },
                        { jp: "トイレは あそこです。", id: "Toilet ada di sebelah sana." }
                    ]
                },
                {
                    title: "2. Menyatakan Keberadaan (Benda / Orang / Tempat)",
                    explanation: "Pola kalimat '~wa ~desu' juga bisa digunakan untuk menunjukkan lokasi keberadaan suatu benda, tempat, atau orang.",
                    formula: "[Benda / Orang] は [Tempat] です",
                    examples: [
                        { jp: "じどうはんばいきは ２かいです。", id: "Mesin minuman ada di lantai dua." },
                        { jp: "たなかさんは かいぎしつです。", id: "Tuan Tanaka ada di ruang rapat." }
                    ]
                },
                {
                    title: "3. Bertanya Letak (Doko / Dochira)",
                    explanation: "Gunakan 'Doko' untuk menanyakan tempat ('Di mana?'). Jika ingin bertanya arah atau dalam situasi yang menuntut kesopanan tinggi, gunakan 'Dochira' ('Sebelah mana?').",
                    formula: "[Benda / Orang] は どこ/どちら ですか",
                    examples: [
                        { jp: "うけつけは どこですか。…あそこです。", id: "Meja informasi di mana? ...Di sana." },
                        { jp: "エレベーターは どちらですか。…あちらです。", id: "Lift ada di sebelah mana? ...Di sebelah sana." }
                    ]
                },
                {
                    title: "4. Bertanya Asal Institusi / Negara",
                    explanation: "Saat menanyakan nama negara, sekolah, atau perusahaan asal, jangan gunakan 'Nan' (Apa), melainkan gunakan 'Doko' atau 'Dochira'.",
                    formula: "[Institusi / Negara] は どこ/どちら ですか",
                    examples: [
                        { jp: "だいがくは どちらですか。", id: "Universitas Anda di mana? (Lulusan mana?)" },
                        { jp: "かいしゃは どちらですか。", id: "Perusahaan Anda di mana? (Bekerja di mana?)" }
                    ]
                },
                {
                    title: "5. Partikel 'No' (の) untuk Menyatakan Buatan / Asal Produk",
                    explanation: "Jika sebelum partikel の adalah nama negara atau perusahaan, dan setelahnya adalah nama produk, maka partikel の berfungsi menjelaskan asal buatan barang tersebut. Kamu bisa bertanya menggunakan kata 'Doko' (Buatan mana).",
                    formula: "[Negara/Perusahaan] の [Produk] です",
                    examples: [
                        { jp: "これは どこの くるまですか。…にほんの くるまです。", id: "Ini mobil buatan mana? ...Mobil buatan Jepang." },
                        { jp: "それは ソニーの テレビです。", id: "Itu adalah TV buatan Sony." }
                    ]
                },
                {
                    title: "6. Awalan Sopan (O ~)",
                    explanation: "Sama seperti yang dipelajari sebelumnya, kita bisa menambahkan awalan 'O' (お) di depan beberapa kata benda yang berhubungan dengan lawan bicara atau orang ketiga untuk menunjukkan rasa hormat.",
                    formula: "お + [Kata Benda]",
                    examples: [
                        { jp: "おくに は どちらですか。", id: "Negara asal Anda dari mana?" }
                    ]
                }
            ],dokkai: {
                title: "いくらですか (Harganya Berapa?)",
                text: "マリア： すみません、ネクタイの <ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>は どちらですか。\n<ruby>店員<rt>てんいん</rt></ruby>： ３<ruby>階<rt>かい</rt></ruby>です。\n\n（３<ruby>階<rt>かい</rt></ruby>で）\nマリア： すみません、その ネクタイを <ruby>見<rt>み</rt></ruby>せて ください。\n<ruby>店員<rt>てんいん</rt></ruby>： はい、どうぞ。\nマリア： これは イタリアの ネクタイですか。\n<ruby>店員<rt>てんいん</rt></ruby>： いいえ、フランスの です。\nマリア： いくらですか。\n<ruby>店員<rt>てんいん</rt></ruby>： ７３００<ruby>円<rt>えん</rt></ruby>です。\nマリア： じゃ、これを ください。",
                translation: "Maria: Permisi, konter penjualan dasi ada di sebelah mana?\nPelayan Toko: Ada di lantai 3.\n\n(Di lantai 3)\nMaria: Permisi, tolong perlihatkan dasi yang itu.\nPelayan Toko: Baik, silakan.\nMaria: Apakah ini dasi buatan Italia?\nPelayan Toko: Bukan, (ini) buatan Prancis.\nMaria: Berapa harganya?\nPelayan Toko: 7.300 Yen.\nMaria: Kalau begitu, saya minta (beli) yang ini."
            },
            quizzes: {
                bunpou: [
                    { q: "Bentuk sopan dari 'ここ' (Koko) adalah...", a: ["そちら", "どちら", "こちら", "あちら"], correct: 2 },
                    { q: "Bentuk sopan dari 'どこ' (Doko) yang digunakan untuk menanyakan arah adalah...", a: ["あちら", "こちら", "どちら", "そちら"], correct: 2 },
                    { q: "Kalimat yang paling sopan untuk menunjuk 'Toilet ada di sebelah sana' adalah...", a: ["トイレは あそこです", "トイレは あちらです", "トイレは そちらです", "トイレは どちらですか"], correct: 1 },
                    { q: "Untuk menanyakan harga barang, kata tanya yang digunakan adalah...", a: ["なん", "だれ", "どこ", "いくら"], correct: 3 },
                    { q: "Terjemahan dari 'この くつは いくらですか' adalah...", a: ["Sepatu ini buatan mana?", "Sepatu ini milik siapa?", "Sepatu ini harganya berapa?", "Sepatu ini ada di mana?"], correct: 2 },
                    { q: "Lengkapi: マリアさんの おくには (...) ですか。", a: ["こちら", "どちら", "なん", "いくら"], correct: 1 },
                    { q: "Bagaimana cara memperkenalkan temanmu secara sopan? '(Di sebelah sini) adalah Tuan Yamada.'", a: ["ここは やまださんです", "こちらは やまださんです", "あちらは やまださんです", "やまださんは こちらですか"], correct: 1 },
                    { q: "Lengkapi kalimat: それは ３０００ (...) です。", a: ["かい", "えん", "ちか", "ひゃく"], correct: 1 },
                    { q: "Kalimat 'ワインの うりばは どちらですか' berarti...", a: ["Berapa harga wine?", "Anggur ini buatan mana?", "Siapa yang minum wine?", "Tempat penjualan wine ada di sebelah mana?"], correct: 3 },
                    { q: "Jika pelayan toko menunjuk ke arahmu (sebelah situ), dia akan menggunakan kata...", a: ["こちら", "あちら", "そちら", "どちら"], correct: 2 }
                ],
                kotoba: [
                    { q: "Bahasa Jepang dari 'Sebelah sini' (sopan) adalah...", a: ["そちら", "あちら", "どちら", "こちら"], correct: 3 },
                    { q: "Bahasa Jepang dari 'Sebelah situ' (sopan) adalah...", a: ["そちら", "あちら", "どちら", "こちら"], correct: 0 },
                    { q: "Bahasa Jepang dari 'Sebelah sana' (sopan) adalah...", a: ["こちら", "そちら", "あちら", "どちら"], correct: 2 },
                    { q: "Bahasa Jepang dari 'Berapa harganya' adalah...", a: ["どちら", "いくら", "なん", "どこ"], correct: 1 },
                    { q: "Bahasa Jepang dari 'Sepatu' adalah...", a: ["くつ", "えん", "ちか", "かい"], correct: 0 },
                    { q: "Bahasa Jepang dari 'Dasi' adalah...", a: ["ワイン", "ネクタイ", "うりば", "くつ"], correct: 1 },
                    { q: "Bahasa Jepang dari 'Tempat Penjualan / Konter' adalah...", a: ["ちか", "かい", "うりば", "ワイン"], correct: 2 },
                    { q: "Bahasa Jepang dari 'Bawah tanah / Basement' adalah...", a: ["ちか", "かい", "くつ", "えん"], correct: 0 },
                    { q: "Bahasa Jepang dari 'Lantai' adalah...", a: ["えん", "かい", "ちか", "まん"], correct: 1 },
                    { q: "Angka 'Ratus' dalam bahasa Jepang adalah...", a: ["ひゃく", "せん", "まん", "えん"], correct: 0 },
                    { q: "Angka 'Ribu' dalam bahasa Jepang adalah...", a: ["まん", "ひゃく", "せん", "かい"], correct: 2 },
                    { q: "Angka 'Puluh Ribu' dalam bahasa Jepang adalah...", a: ["せん", "ひゃく", "まん", "えん"], correct: 2 },
                    { q: "Mata uang Jepang 'Yen' dibaca...", a: ["えん", "いん", "おん", "あん"], correct: 0 },
                    { q: "Bahasa Jepang dari 'Wine / Anggur' adalah...", a: ["くつ", "ネクタイ", "ワイン", "うりば"], correct: 2 },
                    { q: "Kata tanya 'Sebelah mana' (sopan) adalah...", a: ["こちら", "そちら", "あちら", "どちら"], correct: 3 }
                ],
                dokkai: [
                    { q: "Di lantai berapakah letak tempat penjualan dasi?", a: ["Lantai 1", "Lantai 2", "Lantai 3", "Bawah Tanah (Basement)"], correct: 2 },
                    { q: "Dasi buatan negara manakah yang dibeli Maria?", a: ["Jepang", "Italia", "Prancis", "Indonesia"], correct: 2 },
                    { q: "Berapa harga dasi yang dibeli oleh Maria?", a: ["3.000 Yen", "7.000 Yen", "7.300 Yen", "3.700 Yen"], correct: 2 },
                    { q: "Barang apa yang sedang dicari oleh Maria di cerita tersebut?", a: ["Kutsu (Sepatu)", "Nekutai (Dasi)", "Wain (Wine)", "Tokei (Jam)"], correct: 1 },
                    { q: "Apa yang Maria katakan saat memutuskan untuk membeli barang tersebut?", a: ["いくらですか (Berapa harganya?)", "みせてください (Tolong perlihatkan)", "これを ください (Saya minta ini)", "ありがとう (Terima kasih)"], correct: 2 }
                ]
            }
        },
        6: {
            title: "Hari 6: Waktu, Hari & Kata Kerja Dasar",
            description: "Belajar menyebutkan jam, nama-nama hari, serta mulai menggunakan kata kerja dasar dalam bentuk sekarang dan lampau.",
            kotoba: [
                { kanji: '起きます', kana: 'おきます', romaji: 'Okimasu', arti: 'Bangun' },
                { kanji: '寝ます', kana: 'ねます', romaji: 'Nemasu', arti: 'Tidur' },
                { kanji: '働きます', kana: 'はたらきます', romaji: 'Hatarakimasu', arti: 'Bekerja' },
                { kanji: '休みます', kana: 'やすみます', romaji: 'Yasumimasu', arti: 'Beristirahat, libur' },
                { kanji: '勉強します', kana: 'べんきょうします', romaji: 'Benkyoushimasu', arti: 'Belajar' },
                { kanji: '終わります', kana: 'おわります', romaji: 'Owarimasu', arti: 'Selesai' },
                { kanji: 'デパート', kana: 'でぱーと', romaji: 'Depaato', arti: 'Toserba (Department store)' },
                { kanji: '銀行', kana: 'ぎんこう', romaji: 'Ginkou', arti: 'Bank' },
                { kanji: '郵便局', kana: 'ゆうびんきょく', romaji: 'Yuubinkyoku', arti: 'Kantor pos' },
                { kanji: '図書館', kana: 'としょかん', romaji: 'Toshokan', arti: 'Perpustakaan' },
                { kanji: '美術館', kana: 'びじゅつかん', romaji: 'Bijutsukan', arti: 'Gedung kesenian / Museum seni' },
                { kanji: '今', kana: 'いま', romaji: 'Ima', arti: 'Sekarang' },
                { kanji: '～時', kana: '～じ', romaji: '~ji', arti: 'Jam ~, pukul ~' },
                { kanji: '～分', kana: '～ふん / ぷん', romaji: '~fun / ~pun', arti: '~ menit' },
                { kanji: '半', kana: 'はん', romaji: 'Han', arti: 'Setengah (30 menit)' },
                { kanji: '何時', kana: 'なんじ', romaji: 'Nanji', arti: 'Jam berapa' },
                { kanji: '何分', kana: 'なんぷん', romaji: 'Nanpun', arti: 'Berapa menit' },
                { kanji: '午前', kana: 'ごぜん', romaji: 'Gozen', arti: 'a.m. (Pagi / Sebelum jam 12 siang)' },
                { kanji: '午後', kana: 'ごご', romaji: 'Gogo', arti: 'p.m. (Sore / Setelah jam 12 siang)' },
                { kanji: '朝', kana: 'あさ', romaji: 'Asa', arti: 'Pagi' },
                { kanji: '昼', kana: 'ひる', romaji: 'Hiru', arti: 'Siang' },
                { kanji: '晩（夜）', kana: 'ばん（よる）', romaji: 'Ban (Yoru)', arti: 'Malam' },
                { kanji: 'おととい', kana: 'おととい', romaji: 'Ototoi', arti: 'Dua hari yang lalu' },
                { kanji: 'きのう', kana: 'きのう', romaji: 'Kinou', arti: 'Kemarin' },
                { kanji: 'きょう', kana: 'きょう', romaji: 'Kyou', arti: 'Hari ini' },
                { kanji: 'あした', kana: 'あした', romaji: 'Ashita', arti: 'Besok' },
                { kanji: 'あさって', kana: 'あさって', romaji: 'Asatte', arti: 'Lusa' },
                { kanji: 'けさ', kana: 'けさ', romaji: 'Kesa', arti: 'Pagi ini' },
                { kanji: '今晩', kana: 'こんばん', romaji: 'Konban', arti: 'Malam ini' },
                { kanji: '休み', kana: 'やすみ', romaji: 'Yasumi', arti: 'Istirahat, cuti, hari libur' },
                { kanji: '昼休み', kana: 'ひるやすみ', romaji: 'Hiruyasumi', arti: 'Istirahat siang' },
                { kanji: '試験', kana: 'しけん', romaji: 'Shiken', arti: 'Ujian' },
                { kanji: '会議', kana: 'かいぎ', romaji: 'Kaigi', arti: 'Rapat' },
                { kanji: '映画', kana: 'えいが', romaji: 'Eiga', arti: 'Film' },
                { kanji: '毎朝', kana: 'まいあさ', romaji: 'Maiasa', arti: 'Setiap pagi' },
                { kanji: '毎晩', kana: 'まいばん', romaji: 'Maiban', arti: 'Setiap malam' },
                { kanji: '毎日', kana: 'まいにち', romaji: 'Mainichi', arti: 'Setiap hari' },
                { kanji: '月曜日', kana: 'げつようび', romaji: 'Getsuyoubi', arti: 'Hari Senin' },
                { kanji: '火曜日', kana: 'かようび', romaji: 'Kayoubi', arti: 'Hari Selasa' },
                { kanji: '水曜日', kana: 'すいようび', romaji: 'Suiyoubi', arti: 'Hari Rabu' },
                { kanji: '木曜日', kana: 'もくようび', romaji: 'Mokuyoubi', arti: 'Hari Kamis' },
                { kanji: '金曜日', kana: 'きんようび', romaji: 'Kinyoubi', arti: 'Hari Jumat' },
                { kanji: '土曜日', kana: 'どようび', romaji: 'Doyoubi', arti: 'Hari Sabtu' },
                { kanji: '日曜日', kana: 'にちようび', romaji: 'Nichiyoubi', arti: 'Hari Minggu' },
                { kanji: '何曜日', kana: 'なんようび', romaji: 'Nanyoubi', arti: 'Hari apa' },
                { kanji: '～から', kana: '～から', romaji: '~Kara', arti: 'Dari ~' },
                { kanji: '～まで', kana: '～まで', romaji: '~Made', arti: 'Sampai ~' },
                { kanji: '～と～', kana: '～と～', romaji: '~To~', arti: '~ dan ~' },
                { kanji: '大変ですね', kana: 'たいへんですね', romaji: 'Taihen desu ne', arti: 'Wah, berat ya / Repot ya (Simpati)' }
            ],
            bunpou: [
                {
                    title: "1. Menyatakan Waktu (Jam dan Menit)",
                    explanation: "Untuk menyebutkan waktu, gunakan angka diikuti ~じ (Jam) dan ~ふん/ぷん (Menit). Jika tepat lewat 30 menit, kamu bisa menggunakan kata はん (Setengah). Tanya waktu dengan 'Nanji' (Jam berapa).",
                    formula: "今 [Angka]時 [Angka]分 です",
                    examples: [
                        { jp: "いま ９じです。", id: "Sekarang jam 9." },
                        { jp: "いま なんじですか。…７じはん です。", id: "Sekarang jam berapa? ...Jam setengah 8 (7:30)." }
                    ]
                },
                {
                    title: "2. Perubahan Bentuk Kata Kerja (~masu)",
                    explanation: "Kata kerja bahasa Jepang berubah bentuk tergantung WAKTU (sekarang/rutin vs lampau) dan STATUS (positif vs negatif). \n• Positif sekarang: ~ます (~masu)\n• Negatif sekarang: ~ません (~masen)\n• Positif lampau: ~ました (~mashita)\n• Negatif lampau: ~ませんでした (~masen deshita)",
                    formula: "Kata Kerja + ます / ません / ました / ませんでした",
                    examples: [
                        { jp: "わたしは まいにち べんきょうします。", id: "Saya belajar setiap hari. (Rutin)" },
                        { jp: "きのう はたらきました。", id: "Saya bekerja kemarin. (Lampau)" },
                        { jp: "けさ ねませんでした。", id: "Tadi pagi saya tidak tidur. (Negatif Lampau)" }
                    ]
                },
                {
                    title: "3. Partikel 'Ni' (に) untuk Titik Waktu",
                    explanation: "Saat kamu melakukan suatu tindakan pada waktu yang spesifik (jam, tanggal, hari), gunakan partikel に setelah kata waktu tersebut. PERHATIAN: Jangan gunakan partikel に untuk kata waktu relatif seperti besok (ashita), hari ini (kyou), atau kemarin (kinou).",
                    formula: "[Waktu Spesifik] に [Kata Kerja]",
                    examples: [
                        { jp: "わたしは ６じに おきます。", id: "Saya bangun pada jam 6." },
                        { jp: "あした べんきょうします。", id: "Besok saya belajar. (TIDAK pakai 'ni')" }
                    ]
                },
                {
                    title: "4. Batas Awal dan Akhir (Kara & Made)",
                    explanation: "Partikel から (Kara) berarti 'Dari', menunjukkan titik awal. Partikel まで (Made) berarti 'Sampai', menunjukkan titik akhir. Bisa digunakan untuk waktu maupun tempat.",
                    formula: "[Waktu/Tempat 1] から [Waktu/Tempat 2] まで [Kata Kerja/Predikat]",
                    examples: [
                        { jp: "ぎんこうは ９じから ３じまで です。", id: "Bank (buka) dari jam 9 sampai jam 3." },
                        { jp: "げつようびから きんようびまで はたらきます。", id: "Saya bekerja dari hari Senin sampai Jumat." }
                    ]
                },
                {
                    title: "5. Partikel 'To' (と) sebagai 'Dan'",
                    explanation: "Digunakan khusus untuk menyambungkan dua atau lebih kata benda secara setara. Mirip dengan kata 'dan' dalam bahasa Indonesia.",
                    formula: "[Kata Benda 1] と [Kata Benda 2]",
                    examples: [
                        { jp: "ぎんこうの やすみは どようびと にちようびです。", id: "Hari libur bank adalah hari Sabtu dan Minggu." }
                    ]
                },
                {
                    title: "6. Partikel 'Ne' (ね) untuk Persetujuan / Simpati",
                    explanation: "Diletakkan di akhir kalimat untuk mencari persetujuan dari lawan bicara (seperti kata 'kan' atau 'ya' di Indonesia), atau untuk menunjukkan rasa simpati/empati.",
                    formula: "[Kalimat] + ね",
                    examples: [
                        { jp: "まいにち １０じまで べんきょうします。…たいへんですね。", id: "Saya belajar setiap hari sampai jam 10. ...Wah, berat ya (Simpati)." }
                    ]
                }
            ],
           dokkai: {
                title: "やまださんの まいにち (Hari-hari Yamada)",
                text: "やまださんは まいにち ６じに おきます。\n９じから ５じまで じむしょで はたらきます。\nひるやすみは １２じから １じまで です。\nばん、７じから ９じまで べんきょうします。\n１１じに ねます。\nどようびと にちようびは やすみます。",
                translation: "Yamada bangun jam 6 setiap hari.\nBekerja di kantor dari jam 9 sampai jam 5.\nIstirahat siang dari jam 12 sampai jam 1.\nMalam hari, belajar dari jam 7 sampai jam 9.\nTidur jam 11.\nHari Sabtu dan Minggu libur."
            },
            quizzes: {
                bunpou: [
                    { q: "Untuk menyatakan 'Sekarang jam 4', kalimat yang benar adalah...", a: ["いま よじ です", "いま しじ です", "いま よんじ です", "いま じよん です"], correct: 0 },
                    { q: "Partikel yang digunakan untuk menyatakan jam kegiatan dilakukan (contoh: bangun PADA jam 6) adalah...", a: ["は (wa)", "に (ni)", "を (wo)", "が (ga)"], correct: 1 },
                    { q: "Lengkapi: ９じ (...) ５じ (...) はたらきます。", a: ["から - まで", "まで - から", "に - まで", "から - に"], correct: 0 },
                    { q: "Bagaimana cara bertanya 'Jam berapa sekarang?'", a: ["いま なんぷんですか", "いま なんじですか", "どこですか", "いくらですか"], correct: 1 },
                    { q: "Arti dari 'ぎんこうは ３じまで です' adalah...", a: ["Bank buka jam 3", "Bank tutup jam 3", "Bank sampai jam 3", "Bank dari jam 3"], correct: 2 },
                    { q: "Bentuk negatif (tidak melakukan) dari 'べんきょうします' adalah...", a: ["べんきょうしました", "べんきょうしません", "べんきょうして", "べんきょう"], correct: 1 },
                    { q: "Lengkapi: わたしは まいにち １１じ (...) ねます。", a: ["に", "を", "へ", "は"], correct: 0 },
                    { q: "Jam 8:30 dalam bahasa Jepang disebut...", a: ["はちじ はん", "はちじ さんじゅうじ", "はちじ ふん", "はちじ ご"], correct: 0 },
                    { q: "Pola untuk menyatakan 'Selesai' dalam kegiatan adalah...", a: ["おわります", "おきます", "ねます", "はたらきます"], correct: 0 },
                    { q: "Lengkapi: じゅぎょうは なんじ (...) おわりますか。", a: ["から", "まで", "に", "を"], correct: 2 }
                ],
                kotoba: [
                    { q: "Bahasa Jepang dari 'Sekarang' adalah...", a: ["いま", "あした", "きのう", "きょう"], correct: 0 },
                    { q: "Bahasa Jepang dari 'Bekerja' adalah...", a: ["ねます", "おきます", "はたらきます", "やすみます"], correct: 2 },
                    { q: "Huruf Katakana yang benar untuk 'Department Store' adalah...", a: ["アパート", "デパート", "レポート", "エレベーター"], correct: 1 },
                    { q: "Bahasa Jepang dari 'Tidur' adalah...", a: ["おきます", "ねます", "たべます", "のみます"], correct: 1 },
                    { q: "Bahasa Jepang dari 'Belajar' adalah...", a: ["べんきょうします", "べんきょうしません", "おわります", "いきます"], correct: 0 },
                    { q: "Satuan untuk jam adalah...", a: ["じ", "ふん", "えん", "かい"], correct: 0 },
                    { q: "Satuan untuk menit adalah...", a: ["じ", "ふん", "さい", "にん"], correct: 1 },
                    { q: "Bahasa Jepang dari 'Pagi' (AM) adalah...", a: ["ごご", "ごぜん", "あさ", "ばん"], correct: 1 },
                    { q: "Bahasa Jepang dari 'Siang/Malam' (PM) adalah...", a: ["ごぜん", "ごご", "ひる", "よる"], correct: 1 },
                    { q: "Bahasa Jepang dari 'Istirahat / Libur' adalah...", a: ["はたらきます", "やすみます", "おわります", "ねます"], correct: 1 },
                    { q: "Bahasa Jepang dari 'Selesai' adalah...", a: ["おわります", "はじまります", "いきます", "きます"], correct: 0 },
                    { q: "Bahasa Jepang dari 'Bank' adalah...", a: ["ぎんこう", "がっこう", "じむしょ", "うけつけ"], correct: 0 },
                    { q: "Jam 9 dalam bahasa Jepang dibaca...", a: ["きゅうじ", "くじ", "こじ", "じゅうじ"], correct: 1 },
                    { q: "Jam 7 dalam bahasa Jepang dibaca...", a: ["ななじ", "しちじ", "しじ", "なな"], correct: 1 },
                    { q: "Jam 12:30 (Setengah satu) disebut...", a: ["じゅうにじ はん", "じゅうにじ さんじゅうぷん", "Kedua jawaban benar", "Salah semua"], correct: 2 }
                ],
                dokkai: [
                    { q: "Jam berapakah Yamada-san bangun tidur setiap hari?", a: ["Jam 5", "Jam 6", "Jam 7", "Jam 9"], correct: 1 },
                    { q: "Dari jam berapakah Yamada-san mulai bekerja?", a: ["Jam 6", "Jam 12", "Jam 9", "Jam 5"], correct: 2 },
                    { q: "Berapa lama durasi istirahat siang (hiruyasumi) Yamada-san?", a: ["30 menit", "1 jam", "2 jam", "Tidak ada istirahat"], correct: 1 },
                    { q: "Apa yang dilakukan Yamada-san pada jam 8 malam?", a: ["Bekerja", "Tidur", "Belajar", "Istirahat"], correct: 2 },
                    { q: "Kapan Yamada-san beristirahat (libur) dari pekerjaannya?", a: ["Minggu saja", "Sabtu saja", "Senin sampai Jumat", "Sabtu dan Minggu"], correct: 3 }
                ]
            }
        },
        7: {
            title: "Hari 7: Pergi, Datang, Pulang & Tanggal",
            description: "Mempelajari kata kerja perpindahan, transportasi, kalender (tanggal & bulan), dan partikel arah.",
            kotoba: [
                { kanji: '行きます', kana: 'いきます', romaji: 'Ikimasu', arti: 'Pergi' },
                { kanji: '来ます', kana: 'きます', romaji: 'Kimasu', arti: 'Datang' },
                { kanji: '帰ります', kana: 'かえります', romaji: 'Kaerimasu', arti: 'Pulang' },
                { kanji: '学校', kana: 'がっこう', romaji: 'Gakkou', arti: 'Sekolah' },
                { kanji: 'スーパー', kana: 'すーぱー', romaji: 'Suupaa', arti: 'Pasar swalayan / Supermarket' },
                { kanji: '駅', kana: 'えき', romaji: 'Eki', arti: 'Stasiun' },
                { kanji: '飛行機', kana: 'ひこうき', romaji: 'Hikouki', arti: 'Pesawat terbang' },
                { kanji: '船', kana: 'ふね', romaji: 'Fune', arti: 'Kapal laut' },
                { kanji: '電車', kana: 'でんしゃ', romaji: 'Densha', arti: 'Kereta listrik (KRL)' },
                { kanji: '地下鉄', kana: 'ちかてつ', romaji: 'Chikatetsu', arti: 'Kereta bawah tanah' },
                { kanji: '新幹線', kana: 'しんかんせん', romaji: 'Shinkansen', arti: 'Kereta peluru (Shinkansen)' },
                { kanji: 'バス', kana: 'ばす', romaji: 'Basu', arti: 'Bus' },
                { kanji: 'タクシー', kana: 'たくしー', romaji: 'Takushii', arti: 'Taksi' },
                { kanji: '自転車', kana: 'じてんしゃ', romaji: 'Jitensha', arti: 'Sepeda' },
                { kanji: '歩いて', kana: 'あるいて', romaji: 'Aruite', arti: 'Dengan berjalan kaki' },
                { kanji: '人', kana: 'ひと', romaji: 'Hito', arti: 'Orang' },
                { kanji: '友達', kana: 'ともだち', romaji: 'Tomodachi', arti: 'Teman' },
                { kanji: '彼', kana: 'かれ', romaji: 'Kare', arti: 'Dia (Laki-laki) / Pacar laki-laki' },
                { kanji: '彼女', kana: 'かのじょ', romaji: 'Kanojo', arti: 'Dia (Perempuan) / Pacar perempuan' },
                { kanji: '家族', kana: 'かぞく', romaji: 'Kazoku', arti: 'Keluarga' },
                { kanji: '一人で', kana: 'ひとりで', romaji: 'Hitori de', arti: 'Sendirian' },
                { kanji: '先週', kana: 'せんしゅう', romaji: 'Senshuu', arti: 'Minggu lalu' },
                { kanji: '今週', kana: 'こんしゅう', romaji: 'Konshuu', arti: 'Minggu ini' },
                { kanji: '来週', kana: 'らいしゅう', romaji: 'Raishuu', arti: 'Minggu depan' },
                { kanji: '先月', kana: 'せんげつ', romaji: 'Sengetsu', arti: 'Bulan lalu' },
                { kanji: '今月', kana: 'こんげつ', romaji: 'Kongetsu', arti: 'Bulan ini' },
                { kanji: '来月', kana: 'らいげつ', romaji: 'Raigetsu', arti: 'Bulan depan' },
                { kanji: '去年', kana: 'きょねん', romaji: 'Kyonen', arti: 'Tahun lalu' },
                { kanji: '今年', kana: 'ことし', romaji: 'Kotoshi', arti: 'Tahun ini' },
                { kanji: '来年', kana: 'らいねん', romaji: 'Rainen', arti: 'Tahun depan' },
                { kanji: '～月', kana: '～がつ', romaji: '~gatsu', arti: 'Bulan ~ (Januari = Ichi-gatsu)' },
                { kanji: '何月', kana: 'なんがつ', romaji: 'Nangatsu', arti: 'Bulan apa' },
                { kanji: '１日', kana: 'ついたち', romaji: 'Tsuitachi', arti: 'Tanggal 1' },
                { kanji: '２日', kana: 'ふつか', romaji: 'Futsuka', arti: 'Tanggal 2 / 2 hari' },
                { kanji: '３日', kana: 'みっか', romaji: 'Mikka', arti: 'Tanggal 3 / 3 hari' },
                { kanji: '４日', kana: 'よっか', romaji: 'Yokka', arti: 'Tanggal 4 / 4 hari' },
                { kanji: '５日', kana: 'いつか', romaji: 'Itsuka', arti: 'Tanggal 5 / 5 hari' },
                { kanji: '６日', kana: 'むいか', romaji: 'Muika', arti: 'Tanggal 6 / 6 hari' },
                { kanji: '７日', kana: 'なのか', romaji: 'Nanoka', arti: 'Tanggal 7 / 7 hari' },
                { kanji: '８日', kana: 'ようか', romaji: 'Youka', arti: 'Tanggal 8 / 8 hari' },
                { kanji: '９日', kana: 'ここのか', romaji: 'Kokonoka', arti: 'Tanggal 9 / 9 hari' },
                { kanji: '１０日', kana: 'とおか', romaji: 'Tooka', arti: 'Tanggal 10 / 10 hari' },
                { kanji: '１４日', kana: 'じゅうよっか', romaji: 'Juuyokka', arti: 'Tanggal 14' },
                { kanji: '２０日', kana: 'はつか', romaji: 'Hatsuka', arti: 'Tanggal 20' },
                { kanji: '２４日', kana: 'にじゅうよっか', romaji: 'Nijuuyokka', arti: 'Tanggal 24' },
                { kanji: '何日', kana: 'なんにち', romaji: 'Nannichi', arti: 'Tanggal berapa / Berapa hari' },
                { kanji: 'いつ', kana: 'いつ', romaji: 'Itsu', arti: 'Kapan' },
                { kanji: '誕生日', kana: 'たんじょうび', romaji: 'Tanjoubi', arti: 'Hari ulang tahun' },
                { kanji: 'そうですね', kana: 'そうですね', romaji: 'Sou desu ne', arti: 'Ya, betul / Ya, begitulah (Setuju)' },
                { kanji: 'どういたしまして', kana: 'どういたしまして', romaji: 'Douitashimashite', arti: 'Sama-sama' }
            ],
            bunpou: [
                {
                    title: "1. Arah Tujuan (Partikel へ)",
                    explanation: "Saat menggunakan kata kerja perpindahan seperti Ikimasu (Pergi), Kimasu (Datang), dan Kaerimasu (Pulang), kita harus menggunakan partikel へ untuk menunjukkan arah/tujuan. PENTING: Meskipun ditulis dengan huruf 'He' (へ), partikel ini dibaca 'e'.",
                    formula: "[Tempat] へ 行きます / 来ます / 帰ります",
                    examples: [
                        { jp: "きょうとへ いきます。", id: "Pergi ke Kyoto." },
                        { jp: "うちへ かえります。", id: "Pulang ke rumah." }
                    ]
                },
                {
                    title: "2. Penyangkalan Total (Tidak ke mana-mana)",
                    explanation: "Jika kamu ingin mengatakan 'tidak ke mana-mana', kamu bisa menggunakan kata tanya Doko (Mana) ditambah partikel Mo (Pun/Juga), dan diikuti kata kerja bentuk negatif (Ikimasen).",
                    formula: "どこ[へ]も 行きません / 行きませんでした",
                    examples: [
                        { jp: "どこへも いきません。", id: "Tidak pergi ke mana-mana." },
                        { jp: "だれも きませんでした。", id: "Tidak ada siapa-siapa yang datang." }
                    ]
                },
                {
                    title: "3. Alat Transportasi (Partikel で)",
                    explanation: "Gunakan partikel で (De) untuk menyatakan alat atau cara yang digunakan (misal: dengan kereta, dengan bus). Pengecualian: Jika kamu 'berjalan kaki' (歩いて - Aruite), kamu TIDAK PERLU menambahkan partikel で lagi.",
                    formula: "[Kendaraan] で 行きます / 来ます / 帰ります",
                    examples: [
                        { jp: "でんしゃで いきます。", id: "Pergi dengan kereta." },
                        { jp: "えきから あるいて かえります。", id: "Pulang dengan berjalan kaki dari stasiun." }
                    ]
                },
                {
                    title: "4. Pergi Bersama (Partikel と)",
                    explanation: "Jika kamu melakukan perjalanan bersama orang lain atau hewan, gunakan partikel と (To) yang berarti 'Bersama / Dan'. Jika kamu pergi sendirian, gunakan kata 一人で (Hitori de) tanpa partikel と.",
                    formula: "[Orang/Hewan] と [Kata Kerja]",
                    examples: [
                        { jp: "かぞくと にほんへ きました。", id: "Datang ke Jepang bersama keluarga." },
                        { jp: "ひとりで とうきょうへ いきます。", id: "Pergi ke Tokyo sendirian." }
                    ]
                },
                {
                    title: "5. Bertanya Waktu (いつ - Itsu)",
                    explanation: "Selain Nanji (Jam berapa) atau Nangatsu (Bulan apa), kamu bisa menggunakan いつ (Kapan) untuk menanyakan waktu secara umum. Kata 'Itsu' TIDAK boleh diikuti oleh partikel に (Ni).",
                    formula: "いつ [Kata Kerja] か",
                    examples: [
                        { jp: "いつ にほんへ きましたか。", id: "Kapan datang ke Jepang?" },
                        { jp: "…３がつ ２５にちに きました。", id: "...Datang pada tanggal 25 Maret." }
                    ]
                },
                {
                    title: "6. Partikel Penegas (よ - Yo) & Persetujuan (そうですね)",
                    explanation: "Partikel よ (Yo) di akhir kalimat berfungsi memberi tahu informasi baru yang belum diketahui lawan bicara (seperti 'Lho' / 'Tahu nggak' dalam bahasa Indonesia). Sedangkan そうですね (Sou desu ne) digunakan saat kamu sependapat dengan lawan bicara.",
                    formula: "[Kalimat] よ / そうですね",
                    examples: [
                        { jp: "この アイスクリーム、おいしいですよ。", id: "Es krim ini enak, lho. (Memberi tahu)" },
                        { jp: "あしたは にちようびですね。…あ、そうですね。", id: "Besok hari Minggu ya. ...Ah, iya betul. (Setuju)" }
                    ]
                }
            ],
            quizzes: [
                { q: "Partikel apa yang digunakan untuk menunjukkan arah (Ke) dengan kata kerja Ikimasu?", a: ["Ni (に)", "De (で)", "E (へ)", "To (と)"], c: 2 },
                { q: "Bagaimana cara membaca tanggal 20 dalam bahasa Jepang?", a: ["Nijuunichi", "Hatsuka", "Futsuka", "Tooka"], c: 1 },
                { q: "Terjemahkan: 'Pergi dengan bus.'", a: ["Basu de ikimasu", "Basu e ikimasu", "Basu to ikimasu", "Basu aruite ikimasu"], c: 0 },
                { q: "Jika kamu pulang dengan 'Berjalan kaki', partikel apa yang dipakai setelah kata Aruite?", a: ["De", "Ni", "E", "Tidak pakai partikel"], c: 3 },
                { q: "Bagaimana cara bilang 'Tidak pergi ke mana-mana' (Lampau)?", a: ["Doko mo ikimasen", "Doko e mo ikimasen deshita", "Doko mo ikimashita", "Nani mo ikimasen deshita"], c: 1 },
                { q: "Apa bahasa Jepangnya 'Pacar perempuan / Dia perempuan'?", a: ["Kare", "Hito", "Tomodachi", "Kanojo"], c: 3 },
                { q: "Apa fungsi partikel 'To' (と) pada kalimat 'Tomodachi to ikimasu'?", a: ["Kendaraan", "Tujuan", "Bersama (dengan)", "Waktu"], c: 2 },
                { q: "Kata tanya apa yang berarti 'Kapan' dan TIDAK perlu memakai partikel Ni?", a: ["Nanji", "Itsu", "Doko", "Nannichi"], c: 1 },
                { q: "Lawan bicara berkata 'Hari ini panas ya', dan kamu setuju. Apa balasan yang tepat?", a: ["Sou desu ka", "Chigaimasu", "Sou desu ne", "Douitashimashite"], c: 2 },
                { q: "Tanggal 1 bahasa Jepangnya adalah...", a: ["Ichi nichi", "Tsuitachi", "Mikka", "Nanoka"], c: 1 }
            ]
        },
        8: {
            title: "Hari 8: Aktivitas & Mengajak (Kata Kerja Transitif)",
            description: "Mempelajari kata kerja sehari-hari, makanan/minuman, dan cara mengajak teman untuk melakukan sesuatu bersama-sama.",
            kotoba: [
                { kanji: '食べます', kana: 'たべます', romaji: 'Tabemasu', arti: 'Makan' },
                { kanji: '飲みます', kana: 'のみます', romaji: 'Nomimasu', arti: 'Minum' },
                { kanji: '吸います', kana: 'すいます', romaji: 'Suimasu', arti: 'Mengisap [Rokok]' },
                { kanji: '見ます', kana: 'みます', romaji: 'Mimasu', arti: 'Melihat, menonton' },
                { kanji: '聞きます', kana: 'ききます', romaji: 'Kikimasu', arti: 'Mendengar' },
                { kanji: '読みます', kana: 'よみます', romaji: 'Yomimasu', arti: 'Membaca' },
                { kanji: '書きます', kana: 'かきます', romaji: 'Kakimasu', arti: 'Menulis, menggambar' },
                { kanji: '買います', kana: 'かいます', romaji: 'Kaimasu', arti: 'Membeli' },
                { kanji: '撮ります', kana: 'とります', romaji: 'Torimasu', arti: 'Mengambil [Foto]' },
                { kanji: 'します', kana: 'します', romaji: 'Shimasu', arti: 'Mengerjakan, melakukan' },
                { kanji: '会います', kana: 'あいます', romaji: 'Aimasu', arti: 'Bertemu [Teman]' },
                { kanji: 'ごはん', kana: 'ごはん', romaji: 'Gohan', arti: 'Nasi / Makan' },
                { kanji: '朝ごはん', kana: 'あさごはん', romaji: 'Asagohan', arti: 'Sarapan' },
                { kanji: '昼ごはん', kana: 'ひるごはん', romaji: 'Hirugohan', arti: 'Makan siang' },
                { kanji: '晩ごはん', kana: 'ばんごはん', romaji: 'Bangohan', arti: 'Makan malam' },
                { kanji: 'パン', kana: 'ぱん', romaji: 'Pan', arti: 'Roti' },
                { kanji: '卵', kana: 'たまご', romaji: 'Tamago', arti: 'Telur' },
                { kanji: '肉', kana: 'にく', romaji: 'Niku', arti: 'Daging' },
                { kanji: '魚', kana: 'さかな', romaji: 'Sakana', arti: 'Ikan' },
                { kanji: '野菜', kana: 'やさい', romaji: 'Yasai', arti: 'Sayur' },
                { kanji: '果物', kana: 'くだもの', romaji: 'Kudamono', arti: 'Buah-buahan' },
                { kanji: '水', kana: 'みず', romaji: 'Mizu', arti: 'Air' },
                { kanji: 'お茶', kana: 'おちゃ', romaji: 'Ocha', arti: 'Teh Jepang (Teh hijau)' },
                { kanji: '紅茶', kana: 'こうちゃ', romaji: 'Koucha', arti: 'Teh hitam' },
                { kanji: '牛乳（ミルク）', kana: 'ぎゅうにゅう', romaji: 'Gyuunyuu (Miruku)', arti: 'Susu' },
                { kanji: 'ジュース', kana: 'じゅーす', romaji: 'Juusu', arti: 'Jus' },
                { kanji: 'ビール', kana: 'びーる', romaji: 'Biiru', arti: 'Bir' },
                { kanji: '[お]酒', kana: '[お]さけ', romaji: '[O]Sake', arti: 'Minuman keras / Sake' },
                { kanji: 'たばこ', kana: 'たばこ', romaji: 'Tabako', arti: 'Rokok' },
                { kanji: '手紙', kana: 'てがみ', romaji: 'Tegami', arti: 'Surat' },
                { kanji: 'レポート', kana: 'れぽーと', romaji: 'Repooto', arti: 'Laporan' },
                { kanji: '写真', kana: 'しゃしん', romaji: 'Shashin', arti: 'Foto' },
                { kanji: 'ビデオ', kana: 'びでお', romaji: 'Bideo', arti: 'Video' },
                { kanji: '店', kana: 'みせ', romaji: 'Mise', arti: 'Toko' },
                { kanji: '庭', kana: 'にわ', romaji: 'Niwa', arti: 'Halaman' },
                { kanji: '宿題', kana: 'しゅくだい', romaji: 'Shukudai', arti: 'Pekerjaan Rumah (PR)' },
                { kanji: 'テニス', kana: 'てにす', romaji: 'Tenisu', arti: 'Tenis' },
                { kanji: 'サッカー', kana: 'さっかー', romaji: 'Sakkaa', arti: 'Sepak bola' },
                { kanji: '[お]花見', kana: '[お]はなみ', romaji: '[O]Hanami', arti: 'Menikmati bunga sakura' },
                { kanji: '何', kana: 'なに', romaji: 'Nani / Nan', arti: 'Apa' },
                { kanji: '一緒に', kana: 'いっしょに', romaji: 'Issho ni', arti: 'Bersama-sama' },
                { kanji: 'ちょっと', kana: 'ちょっと', romaji: 'Chotto', arti: 'Sebentar, sedikit' },
                { kanji: 'いつも', kana: 'いつも', romaji: 'Itsumo', arti: 'Selalu' },
                { kanji: '時々', kana: 'ときどき', romaji: 'Tokidoki', arti: 'Kadang-kadang' },
                { kanji: 'それから', kana: 'それから', romaji: 'Sorekara', arti: 'Setelah itu, kemudian' },
                { kanji: 'ええ', kana: 'ええ', romaji: 'Ee', arti: 'Ya' },
                { kanji: 'いいですね', kana: 'いいですね', romaji: 'Ii desu ne', arti: 'Bagus ya / Ide yang bagus' },
                { kanji: 'わかりました', kana: 'わかりました', romaji: 'Wakarimashita', arti: 'Mengerti / Baik' }
            ],
            bunpou: [
                {
                    title: "1. Penanda Objek (Partikel を)",
                    explanation: "Dalam bahasa Jepang, objek yang dikenai suatu tindakan (Kata Kerja Transitif) ditandai dengan partikel を. Partikel ini ditulis dengan huruf 'wo' namun dibaca 'o'.",
                    formula: "[Kata Benda/Objek] を [Kata Kerja]",
                    examples: [
                        { jp: "わたしは くだものを たべます。", id: "Saya makan buah-buahan." },
                        { jp: "まいにち しんぶんを よみます。", id: "Saya membaca koran setiap hari." }
                    ]
                },
                {
                    title: "2. Melakukan Sesuatu (～を します)",
                    explanation: "Kata kerja 'Shimasu' (Melakukan) sangat fleksibel. Kata ini bisa digabungkan dengan kata benda untuk membentuk arti baru, seperti berolahraga, mengadakan acara, atau mengerjakan tugas.",
                    formula: "[Kegiatan / Benda] を します",
                    examples: [
                        { jp: "あした サッカーを します。", id: "Besok saya bermain sepak bola." },
                        { jp: "こんばん しゅくだいを します。", id: "Malam ini saya mengerjakan PR." }
                    ]
                },
                {
                    title: "3. Bertanya Aktivitas (何を しますか)",
                    explanation: "Jika kamu ingin bertanya 'Sedang/akan melakukan apa?', gunakan kalimat tanya 'Nani o shimasu ka'.",
                    formula: "何を しますか (Nani o shimasu ka)",
                    examples: [
                        { jp: "きのう なにを しましたか。… ともだちに あいました。", id: "Kemarin melakukan apa? ...Bertemu teman." }
                    ]
                },
                {
                    title: "4. Perbedaan なん (Nan) dan なに (Nani)",
                    explanation: "Meski sama-sama berarti 'Apa', penggunaannya berbeda. Gunakan 'Nan' jika kata setelahnya diawali bunyi D, T, atau N (seperti Desu, To, No), atau saat diikuti kata bantu bilangan. Selain itu, gunakan 'Nani'.",
                    formula: "なん + (d, t, n / bilangan) VS なに + (partikel を, が, dll)",
                    examples: [
                        { jp: "それは なんですか。", id: "Itu apa? (Memakai Nan karena bertemu Desu)" },
                        { jp: "なにを のみますか。", id: "Minum apa? (Memakai Nani karena bertemu O)" }
                    ]
                },
                {
                    title: "5. Tempat Terjadinya Aktivitas (Partikel で)",
                    explanation: "Jika pada bab sebelumnya partikel で (De) berarti 'Dengan/Menggunakan kendaraan', kali ini で dipakai di belakang nama tempat untuk menunjukkan 'Di mana' aktivitas itu berlangsung.",
                    formula: "[Tempat] で [Kata Kerja]",
                    examples: [
                        { jp: "としょかんで ほんを よみます。", id: "Membaca buku di perpustakaan." },
                        { jp: "どこで くつを かいましたか。", id: "Di mana (kamu) membeli sepatu?" }
                    ]
                },
                {
                    title: "6. Mengajak dengan Sopan (～ませんか)",
                    explanation: "Bentuk negatif tanya '~masen ka' dipakai untuk mengajak seseorang dengan sangat sopan. Artinya mirip dengan 'Bagaimana kalau kita...?' atau 'Maukah kamu...?'. Ini menunjukkan rasa hormat karena memberikan opsi kepada lawan bicara untuk menolak.",
                    formula: "[Kata Kerja Bentuk Masen] + か",
                    examples: [
                        { jp: "いっしょに こうちゃを のみませんか。… ええ、いいですね。", id: "Bagaimana kalau kita minum teh hitam bersama? ...Ya, ide yang bagus." }
                    ]
                },
                {
                    title: "7. Merespons Ajakan secara Aktif (～ましょう)",
                    explanation: "Bentuk '~mashou' berarti 'Ayo...' atau 'Mari...'. Kata ini dipakai untuk mengajak secara aktif atau untuk menyetujui ajakan seseorang (sebagai respons positif dari ~masen ka).",
                    formula: "[Kata Kerja Hilangkan Masu] + ましょう",
                    examples: [
                        { jp: "ちょっと やすみましょう。", id: "Mari istirahat sebentar." },
                        { jp: "えいがを みませんか。… ええ、みましょう。", id: "Bagaimana kalau kita nonton film? ...Ya, mari kita nonton." }
                    ]
                }
            ],
            quizzes: [
                { q: "Partikel apa yang digunakan sebagai penanda objek (misal: sebelum kata makan/minum)?", a: ["Ni (に)", "De (で)", "Wa (は)", "O (を)"], c: 3 },
                { q: "Apa bahasa Jepangnya 'Mengerjakan PR'?", a: ["Shukudai o mimasu", "Shukudai o shimasu", "Shukudai o kaimasu", "Shukudai o kakimasu"], c: 1 },
                { q: "Manakah kalimat tanya yang benar untuk 'Makan apa?'", a: ["Nan o tabemasu ka", "Nani o tabemasu ka", "Doko o tabemasu ka", "Dare o tabemasu ka"], c: 1 },
                { q: "Lengkapi kalimat ini: 'Resutoran ___ bangohan o tabemasu.' (Makan malam DI restoran)", a: ["Ni", "De", "E", "O"], c: 1 },
                { q: "Apa arti dari ungkapan ajakan 'Issho ni ikimasen ka'?", a: ["Saya tidak akan pergi.", "Kenapa kamu tidak pergi?", "Maukah kamu pergi bersama-sama?", "Jangan pergi bersamaku."], c: 2 },
                { q: "Jika seseorang mengajak 'Yasumimasen ka?' (Bagaimana kalau kita istirahat?), dan kamu setuju, kamu harus membalas dengan:", a: ["Yasumimasen", "Yasumimashita", "Yasumimasu ka", "Yasumimashou"], c: 3 },
                { q: "Mengapa 'Itu apa?' ditulis dengan 'Sore wa NAN desu ka', bukan NANI?", a: ["Karena Nani hanya untuk manusia", "Karena huruf setelahnya adalah 'Desu' (diawali bunyi D)", "Karena Nan lebih sopan dari Nani", "Karena itu adalah aturan baku untuk kata benda"], c: 1 },
                { q: "Apa bahasa Jepangnya 'Mengambil foto'?", a: ["Shashin o mimasu", "Shashin o kakimasu", "Shashin o torimasu", "Shashin o shimasu"], c: 2 },
                { q: "Kata 'Tokidoki' memiliki arti:", a: ["Selalu", "Kadang-kadang", "Setelah itu", "Bersama-sama"], c: 1 },
                { q: "Terjemahkan kalimat berikut: 'Toshokan de hon o yomimasu.'", a: ["Membeli buku di perpustakaan.", "Membaca buku di perpustakaan.", "Meminjam buku dari perpustakaan.", "Menulis buku di perpustakaan."], c: 1 }
            ]
        },
        9: {
            title: "Hari 9: Alat, Bahasa, dan Memberi-Menerima",
            description: "Belajar menyatakan alat yang digunakan, bertanya arti kata dalam bahasa lain, serta pola kalimat memberi dan menerima barang/informasi.",
            kotoba: [
                { kanji: '切ります', kana: 'きります', romaji: 'Kirimasu', arti: 'Memotong, menggunting' },
                { kanji: '送ります', kana: 'おくります', romaji: 'Okurimasu', arti: 'Mengirim' },
                { kanji: 'あげます', kana: 'あげます', romaji: 'Agemasu', arti: 'Memberikan' },
                { kanji: 'もらいます', kana: 'もらいます', romaji: 'Moraimasu', arti: 'Mendapatkan, menerima' },
                { kanji: '貸します', kana: 'かします', romaji: 'Kashimasu', arti: 'Meminjamkan' },
                { kanji: '借ります', kana: 'かりまう', romaji: 'Karimasu', arti: 'Meminjam' },
                { kanji: '教えます', kana: 'おしえます', romaji: 'Oshiemasu', arti: 'Mengajar' },
                { kanji: '習います', kana: 'ならいます', romaji: 'Naraimasu', arti: 'Belajar (dari seseorang)' },
                { kanji: 'かけます', kana: 'かけます', romaji: 'Kakemasu', arti: 'Menelepon' },
                { kanji: '手', kana: 'て', romaji: 'Te', arti: 'Tangan' },
                { kanji: 'はし', kana: 'はし', romaji: 'Hashi', arti: 'Sumpit' },
                { kanji: 'スプーン', kana: 'すぷーん', romaji: 'Supuun', arti: 'Sendok' },
                { kanji: 'ナイフ', kana: 'ないふ', romaji: 'Naifu', arti: 'Pisau' },
                { kanji: 'フォーク', kana: 'ふぉーく', romaji: 'Fooku', arti: 'Garpu' },
                { kanji: 'はさみ', kana: 'はさみ', romaji: 'Hasami', arti: 'Gunting' },
                { kanji: 'パソコン', kana: 'ぱそこん', romaji: 'Pasokon', arti: 'Laptop / PC' },
                { kanji: 'ケータイ', kana: 'けーたい', romaji: 'Keetai', arti: 'HP / Telepon Genggam' },
                { kanji: 'メール', kana: 'めーる', romaji: 'Meeru', arti: 'E-mail' },
                { kanji: '年賀状', kana: 'ねんがじょう', romaji: 'Nengajou', arti: 'Kartu tahun baru' },
                { kanji: 'パン치', kana: 'ぱんち', romaji: 'Panchi', arti: 'Pelubang kertas' },
                { kanji: 'ホッチキス', kana: 'ほっちきす', romaji: 'Hotchikisu', arti: 'Stapler' },
                { kanji: 'セロテープ', kana: 'せろてーぷ', romaji: 'Seroteepu', arti: 'Selotip' },
                { kanji: '消しゴム', kana: 'けしごむ', romaji: 'Keshigomu', arti: 'Penghapus' },
                { kanji: '紙', kana: 'かみ', romaji: 'Kami', arti: 'Kertas' },
                { kanji: '花', kana: 'はな', romaji: 'Hana', arti: 'Bunga' },
                { kanji: 'シャツ', kana: 'しゃつ', romaji: 'Shatsu', arti: 'Kemeja' },
                { kanji: 'プレゼント', kana: 'ぷれぜんと', romaji: 'Purezento', arti: 'Kado, hadiah' },
                { kanji: '荷物', kana: 'にもつ', romaji: 'Nimotsu', arti: 'Barang, paket' },
                { kanji: 'お金', kana: 'おかね', romaji: 'Okane', arti: 'Uang' },
                { kanji: '切符', kana: 'きっぷ', romaji: 'Kippu', arti: 'Karcis, tiket' },
                { kanji: 'クリスマス', kana: 'くりすます', romaji: 'Kurisumasu', arti: 'Natal' },
                { kanji: '父', kana: 'ちち', romaji: 'Chichi', arti: 'Ayah (sendiri)' },
                { kanji: '母', kana: 'はは', romaji: 'Haha', arti: 'Ibu (sendiri)' },
                { kanji: 'お父さん', kana: 'おとうさん', romaji: 'Otousan', arti: 'Ayah (orang lain)' },
                { kanji: 'お母さん', kana: 'おかあさん', romaji: 'Okaasan', arti: 'Ibu (orang lain)' },
                { kanji: 'もう', kana: 'もう', romaji: 'Mou', arti: 'Sudah' },
                { kanji: 'まだ', kana: 'まだ', romaji: 'Mada', arti: 'Belum' },
                { kanji: 'これから', kana: 'これから', romaji: 'Korekara', arti: 'Mulai sekarang' }
            ],
            bunpou: [
                {
                    title: "1. Partikel 'De' (で) untuk Alat dan Sarana",
                    explanation: "Gunakan partikel で untuk menunjukkan alat, sarana, atau cara yang digunakan untuk melakukan suatu tindakan.",
                    formula: "[Alat / Sarana] で [Kata Kerja]",
                    examples: [
                        { jp: "スプーンで ナシゴレンを たべます。", id: "Makan nasi goreng dengan sendok." },
                        { jp: "パソコンで レポートを かきます。", id: "Menulis laporan dengan laptop." }
                    ]
                },
                {
                    title: "2. Bertanya Arti / Terjemahan Bahasa",
                    explanation: "Pola ini digunakan untuk menanyakan bagaimana cara menyebutkan suatu kata atau kalimat dalam bahasa lain.",
                    formula: "「Kata/Kalimat」は [Bahasa] で なんですか。",
                    examples: [
                        { jp: "「Selamat pagi」は にほんごで なんですか。…「おはようございます」です。", id: "Apa bahasa Jepangnya 'Selamat pagi'? ...'Ohayou gozaimasu'." },
                        { jp: "「Arigatou」は えいごで なんですか。…「Thank you」です。", id: "Apa bahasa Inggrisnya 'Arigatou'? ...'Thank you'." }
                    ]
                },
                {
                    title: "3. Memberikan Barang / Informasi (Agemasu)",
                    explanation: "Gunakan partikel に (Ni) untuk menunjukkan orang yang menerima barang atau informasi dari kita. Selain Agemasu, pola ini berlaku untuk Kashimasu (Meminjamkan) dan Oshiemasu (Mengajar).",
                    formula: "[Pemberi] は [Penerima] に [Benda] を あげます",
                    examples: [
                        { jp: "わたしは ともだちに チョコレートを あげました。", id: "Saya memberikan cokelat kepada teman." },
                        { jp: "さくらさんに にほんごを おしえます。", id: "Mengajarkan bahasa Jepang kepada Sakura." }
                    ]
                },
                {
                    title: "4. Menerima Barang / Informasi (Moraimasu)",
                    explanation: "Gunakan partikel に (Ni) atau から (Kara) untuk menunjukkan orang dari siapa kita menerima sesuatu. Jika sumbernya adalah institusi (seperti bank atau sekolah), gunakan から.",
                    formula: "[Penerima] は [Pemberi] に/から [Benda] を もらいます",
                    examples: [
                        { jp: "わたしは ははに プレゼントを もらいました。", id: "Saya menerima kado dari ibu." },
                        { jp: "ぎんこうから おかねを かりました。", id: "Meminjam uang dari bank." }
                    ]
                },
                {
                    title: "5. Sudah Dilakukan (Mou ~mashita)",
                    explanation: "Kata 'Mou' berarti sudah. Digunakan dengan kata kerja bentuk lampau (~mashita) untuk menyatakan aktivitas yang telah selesai. Jika ditanya dan belum dilakukan, jawabannya adalah 'Iie, mada desu'.",
                    formula: "もう [Kata Kerja Bentuk Lampau] か",
                    examples: [
                        { jp: "もう ひるごはんを たべましたか。…はい、もう たべました。", id: "Apakah sudah makan siang? ...Ya, sudah makan." },
                        { jp: "もう レポートを おくりましたか。…いいえ、まだです。", id: "Apakah sudah mengirim laporan? ...Belum (belum dikirim)." }
                    ]
                }
            ],
            quizzes: [
                { q: "Apa bahasa Jepangnya 'Menelepon'?", a: ["Kakemasu", "Oshiemasu", "Ochimasu", "Kikimasu"], c: 0 },
                { q: "Lengkapi kalimat: 'Hashi ___ sakana o tabemasu.' (Makan ikan dengan sumpit)", a: ["O", "De", "Ni", "E"], c: 1 },
                { q: "Bagaimana cara bertanya 'Apa bahasa Inggrisnya Arigatou'?", a: ["'Arigatou' wa eigo de nan desu ka", "'Arigatou' ni eigo de nan desu ka", "Eigo de 'Arigatou' wa dare desu ka", "'Arigatou' wa nan no eigo desu ka"], c: 0 },
                { q: "Partikel apa yang digunakan sebelum kata 'Agemasu' untuk menandai orang yang menerima kado?", a: ["O", "De", "Ni", "To"], c: 2 },
                { q: "Apa arti dari 'Haha ni purezento o moraimashita'?", a: ["Saya memberi kado ke ibu", "Ibu memberi kado ke saya", "Saya menerima kado dari ibu", "Ibu menerima kado dari saya"], c: 2 },
                { q: "Jika ditanya 'Mou tabemashita ka?' dan kamu BELUM makan, apa jawaban yang tepat?", a: ["Iie, tabemasen deshita", "Iie, mada desu", "Iie, mada tabemasu", "Hai, tabemashita"], c: 1 },
                { q: "Apa bahasa Jepangnya 'Penghapus'?", a: ["Kami", "Panchi", "Hasami", "Keshigomu"], c: 3 },
                { q: "Terjemahkan: 'Tomodachi ni CD o kashimashita.'", a: ["Meminjam CD dari teman", "Meminjamkan CD kepada teman", "Membeli CD teman", "Menghilangkan CD teman"], c: 1 },
                { q: "Apa arti dari 'Mou'?", a: ["Lagi", "Belum", "Sudah", "Akan"], c: 2 },
                { q: "Sebutan 'Chichi' digunakan untuk memanggil ayah siapa?", a: ["Ayah orang lain", "Ayah kandung (saat memanggil)", "Ayah sendiri (saat diceritakan ke orang lain)", "Kakek"], c: 2 }
            ]
        },
        10: {
            title: "Hari 10: Sifat & Keadaan (Kata Sifat Na & I)",
            description: "Mempelajari dua jenis kata sifat dalam bahasa Jepang untuk mendeskripsikan benda, tempat, atau orang, serta cara mengubahnya ke bentuk negatif.",
            kotoba: [
                // Kata Sifat-na
                { kanji: 'ハンサム[な]', kana: 'はんさむ', romaji: 'Hansamu', arti: 'Tampan' },
                { kanji: 'きれい[な]', kana: 'きれい', romaji: 'Kirei', arti: 'Cantik, bersih' },
                { kanji: '静か[な]', kana: 'しずか', romaji: 'Shizuka', arti: 'Sunyi, tenang' },
                { kanji: 'にぎやか[な]', kana: 'にぎやか', romaji: 'Nigiyaka', arti: 'Ramai' },
                { kanji: '有名[な]', kana: 'ゆうめい', romaji: 'Yuumei', arti: 'Terkenal' },
                { kanji: '親切[な]', kana: 'しんせつ', romaji: 'Shinsetsu', arti: 'Baik hati' },
                { kanji: '元気[な]', kana: 'げんき', romaji: 'Genki', arti: 'Sehat, bersemangat' },
                { kanji: '暇[な]', kana: 'ひま', romaji: 'Hima', arti: 'Senggang, luang' },
                { kanji: '便利[な]', kana: 'べんり', romaji: 'Benri', arti: 'Praktis' },
                { kanji: '素敵[な]', kana: 'すてき', romaji: 'Suteki', arti: 'Bagus, indah, menawan' },
                // Kata Sifat-i
                { kanji: '大きい', kana: 'おおきい', romaji: 'Ookii', arti: 'Besar' },
                { kanji: '小さい', kana: 'ちいさい', romaji: 'Chiisai', arti: 'Kecil' },
                { kanji: '新しい', kana: 'あたらしい', romaji: 'Atarashii', arti: 'Baru' },
                { kanji: '古い', kana: 'ふるい', romaji: 'Furui', arti: 'Lama, tua (benda)' },
                { kanji: 'いい（よい）', kana: 'いい', romaji: 'Ii', arti: 'Baik, bagus' },
                { kanji: '悪い', kana: 'わるい', romaji: 'Warui', arti: 'Buruk, jelek' },
                { kanji: '暑い', kana: 'あつい', romaji: 'Atsui', arti: 'Panas (suhu udara)' },
                { kanji: '寒い', kana: 'さむい', romaji: 'Samui', arti: 'Dingin (suhu udara)' },
                { kanji: '冷たい', kana: 'つめたい', romaji: 'Tsumetai', arti: 'Dingin (sentuhan/benda)' },
                { kanji: '難しい', kana: 'むずかしい', romaji: 'Muzukashii', arti: 'Sulit, susah' },
                { kanji: '易しい', kana: 'やさしい', romaji: 'Yasashii', arti: 'Mudah, gampang' },
                { kanji: '高い', kana: 'たかい', romaji: 'Takai', arti: 'Mahal, tinggi' },
                { kanji: '安い', kana: 'やすい', romaji: 'Yasui', arti: 'Murah' },
                { kanji: '低い', kana: 'ひくい', romaji: 'Hikui', arti: 'Rendah' },
                { kanji: 'おもしろい', kana: 'おもしろい', romaji: 'Omoshiroi', arti: 'Menarik, lucu' },
                { kanji: 'おいしい', kana: 'おいしい', romaji: 'Oishii', arti: 'Enak, lezat' },
                { kanji: '忙しい', kana: 'いそがしい', romaji: 'Isogashii', arti: 'Sibuk' },
                { kanji: '楽しい', kana: 'たのしい', romaji: 'Tanoshii', arti: 'Senang, menyenangkan' },
                { kanji: '白い', kana: 'しろい', romaji: 'Shiroi', arti: 'Putih' },
                { kanji: '黒い', kana: 'くろい', romaji: 'Kuroi', arti: 'Hitam' },
                { kanji: '赤い', kana: 'あかい', romaji: 'Akai', arti: 'Merah' },
                { kanji: '青い', kana: 'あおい', romaji: 'Aoi', arti: 'Biru' },
                // Kata Benda & Keterangan
                { kanji: '桜', kana: 'さくら', romaji: 'Sakura', arti: 'Sakura' },
                { kanji: '山', kana: 'やま', romaji: 'Yama', arti: 'Gunung' },
                { kanji: '町', kana: 'まち', romaji: 'Machi', arti: 'Kota' },
                { kanji: '食べ物', kana: 'たべもの', romaji: 'Tabemono', arti: 'Makanan' },
                { kanji: '所', kana: 'ところ', romaji: 'Tokoro', arti: 'Tempat' },
                { kanji: '寮', kana: 'りょう', romaji: 'Ryou', arti: 'Asrama' },
                { kanji: 'レストラン', kana: 'れすとらん', romaji: 'Resutoran', arti: 'Restoran' },
                { kanji: '生活', kana: 'せいかつ', romaji: 'Seikatsu', arti: 'Kehidupan' },
                { kanji: 'お仕事', kana: 'おしごと', romaji: 'Oshigoto', arti: 'Pekerjaan' },
                { kanji: 'どう', kana: 'どう', romaji: 'Dou', arti: 'Bagaimana' },
                { kanji: 'どんな～', kana: 'どんな', romaji: 'Donna', arti: 'Yang bagaimana, macam apa' },
                { kanji: 'とても', kana: 'とても', romaji: 'Totemo', arti: 'Sangat' },
                { kanji: 'あまり', kana: 'あまり', romaji: 'Amari', arti: 'Tidak begitu (diikuti negatif)' },
                { kanji: 'そして', kana: 'そして', romaji: 'Soshite', arti: 'Kemudian, dan (menyambung kalimat)' },
                { kanji: '～が、～', kana: '～が', romaji: '~ga', arti: '~, tetapi ~' }
            ],
            bunpou: [
                {
                    title: "1. Kalimat Kata Sifat Positif",
                    explanation: "Untuk menyatakan sifat suatu benda, gunakan pola 'KB wa KS desu'. Perhatikan bahwa Kata Sifat-na tidak menggunakan 'na' jika berada di akhir kalimat.",
                    formula: "[Kata Benda] は [Kata Sifat] です",
                    examples: [
                        { jp: "ジャカルタは にぎやかです。", id: "Jakarta ramai." },
                        { jp: "この すしは おいしいです。", id: "Sushi ini enak." }
                    ]
                },
                {
                    title: "2. Kata Sifat Bentuk Negatif",
                    explanation: "Cara mengubah ke bentuk negatif berbeda antara KS-na dan KS-i. \n• KS-na: tambahkan 'ja arimasen'. \n• KS-i: buang akhiran 'i', ganti dengan 'kunai desu'.",
                    formula: "KS-na + じゃありません | KS-i (-i) + くないです",
                    examples: [
                        { jp: "この としょかんは しずかじゃありません。", id: "Perpustakaan ini tidak tenang/sepi." },
                        { jp: "きょうは さむくないです。", id: "Hari ini tidak dingin." }
                    ]
                },
                {
                    title: "3. Menerangkan Kata Benda dengan Kata Sifat",
                    explanation: "Kata Sifat diletakkan di depan Kata Benda. \n• KS-na: harus menambahkan 'na' di antara kata sifat dan kata benda. \n• KS-i: langsung disambung tanpa perubahan.",
                    formula: "[KS-na] な [KB] | [KS-i] [KB]",
                    examples: [
                        { jp: "きれいな はなを かいました。", id: "(Saya) membeli bunga yang cantik." },
                        { jp: "これは あたarashii パソコンです。", id: "Ini adalah laptop baru." }
                    ]
                },
                {
                    title: "4. Penggunaan 'Totemo' dan 'Amari'",
                    explanation: "Totemo (Sangat) digunakan pada kalimat positif. Amari (Tidak begitu) digunakan pada kalimat negatif.",
                    formula: "とても + KS Positif | あまり + KS Negatif",
                    examples: [
                        { jp: "にほんごは とても おもしろいです。", id: "Bahasa Jepang sangat menarik." },
                        { jp: "しゅくだいは あまり むずかしくないです。", id: "PR-nya tidak begitu sulit." }
                    ]
                },
                {
                    title: "5. Kata Tanya 'Dou' dan 'Donna'",
                    explanation: "Dou digunakan untuk menanyakan kesan/pendapat secara umum. Donna digunakan untuk menanyakan sifat spesifik dari suatu benda atau orang.",
                    formula: "[KB] は どうですか | [KB1] は どんな [KB2] ですか",
                    examples: [
                        { jp: "にほんの せいかつは どうですか。", id: "Bagaimana kehidupan di Jepang?" },
                        { jp: "スラバヤは どんな まちですか。…ふるい まちです。", id: "Surabaya kota yang bagaimana? ...Kota yang tua/lama." }
                    ]
                },
                {
                    title: "6. Kata Sambung '~ga' (Tetapi)",
                    explanation: "Digunakan untuk menyambungkan dua kalimat yang berlawanan.",
                    formula: "[Kalimat 1] が、[Kalimat 2]",
                    examples: [
                        { jp: "にほんの たべものは おいしいですが、たかいです。", id: "Makanan Jepang enak, tetapi mahal." }
                    ]
                }
            ],
            quizzes: [
                { q: "Apa bentuk negatif dari 'Shizuka desu'?", a: ["Shizukakunai desu", "Shizuka ja arimasen", "Shizuka deshita", "Shizuka kirei"], c: 1 },
                { q: "Apa bentuk negatif dari 'Oishii desu'?", a: ["Oishii ja arimasen", "Oishikunai desu", "Oishikatta", "Oishiinai"], c: 1 },
                { q: "Lengkapi: 'Kirei ___ hana desu.'", a: ["i", "ni", "na", "no"], c: 2 },
                { q: "Manakah yang berarti 'Tidak begitu mahal'?", a: ["Totemo takai desu", "Amari takai desu", "Amari takakunai desu", "Totemo takakunai desu"], c: 2 },
                { q: "Apa arti dari 'Donna machi desu ka'?", a: ["Kota di mana?", "Kota yang bagaimana?", "Kota siapa?", "Bagaimana kotanya?"], c: 1 },
                { q: "Bentuk negatif dari 'Ii desu' adalah...", a: ["Iikunai desu", "Iija arimasen", "Yokunai desu", "Yoku arimasen"], c: 2 },
                { q: "Terjemahkan: 'Kamar saya kecil tapi bersih.'", a: ["Watashi no heya wa chiisai desu ga, kirei desu.", "Watashi no heya wa ookii desu soshite kirei desu.", "Watashi no heya wa chiisai na kirei desu.", "Watashi no heya wa ookii desu ga, kirei ja arimasen."], c: 0 },
                { q: "Apa bahasa Jepangnya 'Pekerjaan'?", a: ["Seikatsu", "Machi", "Oshigoto", "Tabemono"], c: 2 },
                { q: "Kata sifat 'Benri' termasuk golongan kata sifat apa?", a: ["KS-i", "KS-na", "KS-u", "KS-o"], c: 1 },
                { q: "Apa arti dari 'Tsumetai mizu'?", a: ["Air panas", "Air murni", "Air tawar", "Air dingin"], c: 3 }
            ]
        },
        11: {
            title: "Hari 11: Kemampuan & Alasan (Suka, Pandai, Punya)",
            description: "Belajar menyatakan kesukaan, kemahiran dalam suatu bidang, kepemilikan benda, serta cara menjelaskan alasan menggunakan 'Kara'.",
            kotoba: [
                { kanji: 'わかります', kana: 'わかります', romaji: 'Wakarimasu', arti: 'Mengerti, paham' },
                { kanji: 'あります', kana: 'あります', romaji: 'Arimasu', arti: 'Ada, punya (benda mati)' },
                { kanji: '好き[な]', kana: 'すき', romaji: 'Suki', arti: 'Suka, gemar' },
                { kanji: '嫌い[な]', kana: 'きらい', romaji: 'Kirai', arti: 'Tidak suka, benci' },
                { kanji: '上手[な]', kana: 'じょうず', romaji: 'Jouzu', arti: 'Pandai, mahir' },
                { kanji: '下手[な]', kana: 'へた', romaji: 'Heta', arti: 'Tidak pandai, payah' },
                { kanji: '飲み物', kana: 'のみもの', romaji: 'Nomimono', arti: 'Minuman' },
                { kanji: '料理', kana: 'りょうり', romaji: 'Ryouri', arti: 'Masakan, masakan' },
                { kanji: 'スポーツ', kana: 'すぽーつ', romaji: 'Supootsu', arti: 'Olahraga' },
                { kanji: '野球', kana: 'やきゅう', romaji: 'Yakyuu', arti: 'Bisbol' },
                { kanji: 'ダンス', kana: 'だんす', romaji: 'Dansu', arti: 'Dansa / Menari' },
                { kanji: '旅行', kana: 'りょこう', romaji: 'Ryokou', arti: 'Piknik, wisata' },
                { kanji: '音楽', kana: 'おんがく', romaji: 'Ongaku', arti: 'Musik' },
                { kanji: '歌', kana: 'うた', romaji: 'Uta', arti: 'Lagu' },
                { kanji: 'クラシック', kana: 'くらしっく', romaji: 'Kurashikku', arti: 'Klasik' },
                { kanji: 'ジャズ', kana: 'じゃず', romaji: 'Jazu', arti: 'Jazz' },
                { kanji: 'コンサート', kana: 'こんさーと', romaji: 'Konsaato', arti: 'Konser' },
                { kanji: 'カラオケ', kana: 'からおけ', romaji: 'Karaoke', arti: 'Karaoke' },
                { kanji: '歌舞伎', kana: 'かぶき', romaji: 'Kabuki', arti: 'Kabuki (drama tradisional)' },
                { kanji: '絵', kana: 'え', romaji: 'E', arti: 'Gambar, lukisan' },
                { kanji: '字', kana: 'じ', romaji: 'Ji', arti: 'Huruf, karakter' },
                { kanji: '漢字', kana: 'かんじ', romaji: 'Kanji', arti: 'Kanji' },
                { kanji: 'ひらがな', kana: 'ひらがな', romaji: 'Hiragana', arti: 'Hiragana' },
                { kanji: 'かたかな', kana: 'かたかな', romaji: 'Katakana', arti: 'Katakana' },
                { kanji: 'ローマ字', kana: 'ろーまじ', romaji: 'Roomaji', arti: 'Huruf latin' },
                { kanji: '細かい おかね', kana: 'こまかい おかね', romaji: 'Komakai okane', arti: 'Uang receh, uang kecil' },
                { kanji: 'チケット', kana: 'ちけっと', romaji: 'Chiketto', arti: 'Tiket' },
                { kanji: '時間', kana: 'じかん', romaji: 'Jikan', arti: 'Waktu' },
                { kanji: '用事', kana: 'ようじ', romaji: 'Youji', arti: 'Urusan' },
                { kanji: '約束', kana: 'やくそく', romaji: 'Yakusoku', arti: 'Janji' },
                { kanji: 'アルバイト', kana: 'あるばいと', romaji: 'Arubaito', arti: 'Kerja paruh waktu' },
                { kanji: 'ご主人', kana: 'ごしゅじん', romaji: 'Goshujin', arti: 'Suami (orang lain)' },
                { kanji: '夫 / 主人', kana: 'おっと / しゅじん', romaji: 'Otto / Shujin', arti: 'Suami (sendiri)' },
                { kanji: '奥さん', kana: 'おくさん', romaji: 'Okusan', arti: 'Istri (orang lain)' },
                { kanji: '妻 / 家内', kana: 'つま / かない', romaji: 'Tsuma / Kanai', arti: 'Istri (sendiri)' },
                { kanji: '子ども', kana: 'こども', romaji: 'Kodomo', arti: 'Anak' },
                { kanji: 'よく', kana: 'よく', romaji: 'Yoku', arti: 'Dengan baik, sering' },
                { kanji: 'だいたい', kana: 'だいたい', romaji: 'Kira-kira, sebagian besar', arti: 'Kira-kira, sebagian besar' },
                { kanji: 'たくさん', kana: 'たくさん', romaji: 'Banyak', arti: 'Banyak' },
                { kanji: '少し', kana: 'すこし', romaji: 'Sedikit', arti: 'Sedikit' },
                { kanji: '全然', kana: 'ぜんぜん', romaji: 'Sama sekali tidak (diikuti negatif)', arti: 'Sama sekali tidak (diikuti negatif)' },
                { kanji: '早く / 速く', kana: 'はやく', romaji: 'Cepat / Pagi-pagi', arti: 'Cepat' },
                { kanji: '～から', kana: '～から', romaji: '~kara', arti: 'Karena ~, sebab ~' },
                { kanji: 'どうして', kana: 'どうして', romaji: 'Kenapa', arti: 'Kenapa' }
            ],
            bunpou: [
                {
                    title: "1. Objek dengan Partikel 'Ga' (が)",
                    explanation: "Untuk kata kerja/sifat tertentu seperti Arimasu (Punya), Wakarimasu (Mengerti), Suki (Suka), dan Jouzu (Pandai), objeknya tidak menggunakan partikel 'O' (を), melainkan partikel 'Ga' (が).",
                    formula: "[Objek] が あります / わかります / 好きです / 上手です",
                    examples: [
                        { jp: "わたしは じかんが あります。", id: "Saya punya waktu." },
                        { jp: "たなかさんは かんじが わかります。", id: "Tuan Tanaka mengerti Kanji." },
                        { jp: "あねは りょうりが じょうずです。", id: "Kakak perempuan saya pandai memasak." }
                    ]
                },
                {
                    title: "2. Menanyakan Jenis / Macam (Donna ~)",
                    explanation: "Gunakan 'Donna' sebelum kata benda untuk menanyakan 'Macam apa' atau 'Yang bagaimana' secara lebih spesifik.",
                    formula: "どんな [Kata Benda] が 好きですか",
                    examples: [
                        { jp: "どんな スポーツが すきですか。…サッカーが すきです。", id: "Suka olahraga macam apa? ...Suka sepak bola." }
                    ]
                },
                {
                    title: "3. Kata Keterangan Tingkat & Kuantitas",
                    explanation: "Kata-kata ini diletakkan di depan kata kerja untuk menjelaskan seberapa jauh kita mengerti atau seberapa banyak kita memiliki sesuatu.",
                    formula: "[Keterangan] わかります / あります",
                    examples: [
                        { jp: "えいごが よく わかります。", id: "Mengerti bahasa Inggris dengan baik." },
                        { jp: "おかねが ぜんぜん ありません。", id: "Sama sekali tidak punya uang." },
                        { jp: "にほんごが すこし わかります。", id: "Mengerti sedikit bahasa Jepang." }
                    ]
                },
                {
                    title: "4. Menyatakan Alasan (Kara)",
                    explanation: "Gunakan 'Kara' di akhir kalimat untuk menyatakan alasan. Kalimat alasan diletakkan di depan, baru diikuti oleh kalimat akibat/pernyataan utamanya.",
                    formula: "[Alasan] から、[Pernyataan]",
                    examples: [
                        { jp: "ようじが ありますから、はやく かえります。", id: "Karena ada urusan, (saya) pulang cepat." },
                        { jp: "じかんが ありませんから、しんぶんを よみません。", id: "Karena tidak ada waktu, (saya) tidak membaca koran." }
                    ]
                },
                {
                    title: "5. Bertanya Alasan (Doushite)",
                    explanation: "Gunakan 'Doushite' untuk menanyakan 'Kenapa'. Untuk menjawabnya, akhiri kalimat jawabanmu dengan 'Kara' (Sebab/Karena).",
                    formula: "どうして [Kalimat] か。…[Alasan] からです。",
                    examples: [
                        { jp: "どうして あした やすみますか。…やくそくが ありますから。", id: "Kenapa besok libur? ...Karena ada janji." }
                    ]
                }
            ],
            quizzes: [
                { q: "Partikel apa yang digunakan sebelum kata 'Suki' (Suka)?", a: ["O (を)", "Ni (に)", "Ga (が)", "De (で)"], c: 2 },
                { q: "Apa arti dari 'Ryouri ga jouzu desu'?", a: ["Suka memasak", "Pandai memasak", "Tidak pandai memasak", "Ingin memasak"], c: 1 },
                { q: "Manakah kata keterangan yang digunakan pada kalimat NEGATIF (Sama sekali tidak)?", a: ["Yoku", "Takusan", "Daitai", "Zenzen"], c: 3 },
                { q: "Terjemahkan: 'Karena tidak ada uang.'", a: ["Okane ga arimasen kara", "Okane ga arimasu kara", "Doushite okane ga arimasen", "Okane ga arimasen deshita"], c: 0 },
                { q: "Apa bahasa Jepangnya 'Uang receh'?", a: ["Okane", "Komakai okane", "Sukoshi okane", "Takusan okane"], c: 1 },
                { q: "Kata tanya untuk menanyakan 'Kenapa' adalah...", a: ["Donna", "Doko", "Doushite", "Itsu"], c: 2 },
                { q: "Lengkapi: 'Suami saya' (untuk diceritakan ke orang lain) disebut?", a: ["Goshujin", "Okusan", "Otto / Shujin", "Kodomo"], c: 2 },
                { q: "Apa arti dari 'Nihongo ga daitai wakarimasu'?", a: ["Mengerti bahasa Jepang dengan baik", "Mengerti sebagian besar bahasa Jepang", "Sama sekali tidak mengerti", "Hanya mengerti sedikit"], c: 1 },
                { q: "Jika ingin bertanya 'Suka musik macam apa?', kalimat yang benar adalah:", a: ["Nan no ongaku ga suki desu ka", "Doushite ongaku ga suki desu ka", "Donna ongaku ga suki desu ka", "Dore no ongaku ga suki desu ka"], c: 2 },
                { q: "Apa arti dari kata 'Yakusoku'?", a: ["Urusan", "Kerja paruh waktu", "Waktu", "Janji"], c: 3 }
            ]
        },
        12: {
            title: "Hari 12: Keberadaan & Posisi (Arimasu & Imasu)",
            description: "Belajar membedakan kata kerja keberadaan untuk benda mati dan makhluk hidup, serta menyebutkan posisi letak benda secara detail.",
            kotoba: [
                { kanji: 'あります', kana: 'あります', romaji: 'Arimasu', arti: 'Ada, punya (benda mati/tanaman)' },
                { kanji: 'います', kana: 'います', romaji: 'Imasu', arti: 'Ada, punya (makhluk hidup/hewan/manusia)' },
                { kanji: '色々[な]', kana: 'いろいろ', romaji: 'Iroiro', arti: 'Bermacam-macam, berbagai' },
                { kanji: '男の人', kana: 'おとこのひと', romaji: 'Otoko no hito', arti: 'Laki-laki (dewasa)' },
                { kanji: '女の人', kana: 'おんなのひと', romaji: 'Onna no hito', arti: 'Perempuan (dewasa)' },
                { kanji: '男の子', kana: 'おとこのこ', romaji: 'Otoko no ko', arti: 'Anak laki-laki' },
                { kanji: '女の子', kana: 'おんなのこ', romaji: 'Onna no ko', arti: 'Anak perempuan' },
                { kanji: '犬', kana: 'いぬ', romaji: 'Inu', arti: 'Anjing' },
                { kanji: '猫', kana: 'ねこ', romaji: 'Neko', arti: 'Kucing' },
                { kanji: '木', kana: 'き', romaji: 'Ki', arti: 'Pohon' },
                { kanji: '物', kana: 'もの', romaji: 'Mono', arti: 'Barang, benda' },
                { kanji: '電池', kana: 'でんち', romaji: 'Denchi', arti: 'Baterai' },
                { kanji: '箱', kana: 'はこ', romaji: 'Hako', arti: 'Kotak' },
                { kanji: '冷蔵庫', kana: 'れいぞうこ', romaji: 'Reizouko', arti: 'Kulkas, lemari es' },
                { kanji: 'テーブル', kana: 'てーぶる', romaji: 'Teeburu', arti: 'Meja makan' },
                { kanji: '棚', kana: 'たな', romaji: 'Tana', arti: 'Lemari, rak' },
                { kanji: 'ドア', kana: 'どあ', romaji: 'Doa', arti: 'Pintu' },
                { kanji: '窓', kana: 'まど', romaji: 'Mado', arti: 'Jendela' },
                { kanji: 'ポスト', kana: 'ぽすと', romaji: 'Posuto', arti: 'Kotak surat' },
                { kanji: 'ビル', kana: 'びる', romaji: 'Biru', arti: 'Gedung' },
                { kanji: '公園', kana: 'こうえん', romaji: 'Kouen', arti: 'Taman' },
                { kanji: '喫茶店', kana: 'きっさてん', romaji: 'Kissaten', arti: 'Kafe, kedai kopi' },
                { kanji: '乗り場', kana: 'のりば', romaji: 'Noriba', arti: 'Tempat naik kendaraan' },
                { kanji: '上', kana: 'うえ', romaji: 'Ue', arti: 'Atas' },
                { kanji: '下', kana: 'した', romaji: 'Shita', arti: 'Bawah' },
                { kanji: '前', kana: 'まえ', romaji: 'Mae', arti: 'Depan' },
                { kanji: '後ろ', kana: 'うしろ', romaji: 'Ushiro', arti: 'Belakang' },
                { kanji: '右', kana: 'みぎ', romaji: 'Migi', arti: 'Kanan' },
                { kanji: '左', kana: 'ひだり', romaji: 'Hidari', arti: 'Kiri' },
                { kanji: '中', kana: 'なか', romaji: 'Naka', arti: 'Dalam' },
                { kanji: '外', kana: 'そと', romaji: 'Soto', arti: 'Luar' },
                { kanji: '隣', kana: 'となり', romaji: 'Tonari', arti: 'Sebelah, tetangga' },
                { kanji: '近く', kana: 'ちかく', romaji: 'Chikaku', arti: 'Dekat' },
                { kanji: '間', kana: 'あいだ', romaji: 'Aida', arti: 'Antara' }
            ],
            bunpou: [
                {
                    title: "1. Ada Benda vs Ada Makhluk Hidup",
                    explanation: "Dalam bahasa Jepang, kata 'ada' dibedakan menjadi dua: \n1) あります (Arimasu) untuk benda mati, tanaman, atau kejadian. \n2) います (Imasu) untuk orang dan hewan.",
                    formula: "[Subjek] が あります / います",
                    examples: [
                        { jp: "あそこに コンビニが あります。", id: "Di sana ada minimarket." },
                        { jp: "にわに いぬが います。", id: "Di halaman ada anjing." }
                    ]
                },
                {
                    title: "2. Menunjuk Lokasi Keberadaan (Tempat ni ~)",
                    explanation: "Gunakan partikel に (Ni) untuk menunjukkan lokasi tempat suatu benda/makhluk hidup berada.",
                    formula: "[Tempat] に [Benda/Orang] が あります/います",
                    examples: [
                        { jp: "れいぞうこに ビールが あります。", id: "Di dalam kulkas ada bir." },
                        { jp: "じむしょに さとうさんが います。", id: "Di kantor ada Tuan Sato." }
                    ]
                },
                {
                    title: "3. Bertanya 'Apa' atau 'Siapa' yang Ada",
                    explanation: "Untuk bertanya benda apa yang ada, gunakan なに (Nani). Untuk bertanya siapa yang ada, gunakan だれ (Dare).",
                    formula: "[Tempat] に なに / だれ が いますか/ありますか",
                    examples: [
                        { jp: "かばんの なかに なにが ありますか。", id: "Di dalam tas ada apa?" },
                        { jp: "ロビーに だれが いますか。", id: "Di lobi ada siapa?" }
                    ]
                },
                {
                    title: "4. Kata Keterangan Posisi (Ue, Shita, Naka, dll)",
                    explanation: "Untuk menyebutkan posisi spesifik, gunakan pola [Kata Benda] + の + [Posisi]. Posisi ini dianggap sebagai kata benda.",
                    formula: "KB + の + [上 / 下 / 前 / 後ろ / 中 / 外 / 隣 / 近く / 間]",
                    examples: [
                        { jp: "つくえの うえに しゃしんが あります。", id: "Di atas meja ada foto." },
                        { jp: "ベッドの したに ねこが います。", id: "Di bawah tempat tidur ada kucing." }
                    ]
                },
                {
                    title: "5. Partikel 'Ya' (や) dan 'Nado' (など)",
                    explanation: "Jika partikel と (To) digunakan untuk menyebutkan SEMUA benda, partikel や (Ya) digunakan untuk menyebutkan beberapa contoh saja (dan masih ada benda lain). Seringkali diakhiri dengan 'Nado' di akhir daftar.",
                    formula: "KB 1 や KB 2 (など)",
                    examples: [
                        { jp: "はこの なかに てがみや しゃしんが あります。", id: "Di dalam kotak ada surat, foto, dan lain-lain." }
                    ]
                }
            ],
            quizzes: [
                { q: "Manakah yang benar untuk mengatakan 'Ada kucing'?", a: ["Neko ga arimasu", "Neko ga imasu", "Neko wa arimasu", "Neko ni imasu"], c: 1 },
                { q: "Apa bahasa Jepangnya 'Di bawah meja'?", a: ["Tsukue no ue", "Tsukue no naka", "Tsukue no shita", "Tsukue no mae"], c: 2 },
                { q: "Lengkapi: 'Reizouko ___ mizu ga arimasu.' (Di dalam kulkas ada air)", a: ["O", "De", "Ni", "E"], c: 2 },
                { q: "Apa arti dari 'Hidari'?", a: ["Kanan", "Kiri", "Atas", "Bawah"], c: 1 },
                { q: "Jika ingin bertanya 'Ada siapa di sana?', kalimat yang benar adalah:", a: ["Asoko ni nani ga imasu ka", "Asoko ni dare ga arimasu ka", "Asoko ni dare ga imasu ka", "Asoko ni dare ga desu ka"], c: 2 },
                { q: "Kata 'Arimasu' digunakan untuk benda berikut, KECUALI:", a: ["Pohon", "Komputer", "Anjing", "Mobil"], c: 2 },
                { q: "Terjemahkan: 'Gedung ada di depan taman.'", a: ["Biru wa kouen no mae ni arimasu", "Biru wa kouen no ushiro ni arimasu", "Kouen wa biru no mae ni arimasu", "Biru wa kouen no naka ni arimasu"], c: 0 },
                { q: "Apa perbedaan partikel 'To' dan 'Ya'?", a: ["To untuk manusia, Ya untuk benda", "To menyebutkan semua, Ya hanya beberapa contoh", "Tidak ada perbedaan", "Ya lebih sopan dari To"], c: 1 },
                { q: "Apa arti dari 'Tonari'?", a: ["Dekat", "Dalam", "Antara", "Sebelah/Samping"], c: 3 },
                { q: "Bagaimana cara bilang 'Di antara bank dan perpustakaan'?", a: ["Ginkou no naka toshokan", "Ginkou to toshokan no aida", "Ginkou no chikaku toshokan", "Ginkou no tonari toshokan"], c: 1 }
            ]
        },
        13: {
            title: "Hari 13: Menghitung Barang, Orang & Durasi Waktu",
            description: "Belajar cara menghitung berbagai jenis benda (kertas, mesin, barang umum), jumlah orang, frekuensi aktivitas, serta menyatakan durasi waktu.",
            kotoba: [
                { kanji: 'います', kana: 'います', romaji: 'Imasu', arti: 'Ada, mempunyai [anak]' },
                { kanji: 'かかります', kana: 'かかります', romaji: 'Kakarimasu', arti: 'Memakan, memerlukan [waktu/uang]' },
                { kanji: '休みます', kana: 'やすみます', romaji: 'Yasumimasu', arti: 'Tidak masuk [kerja/sekolah]' },
                { kanji: '１つ', kana: 'ひとつ', romaji: 'Hitotsu', arti: 'Satu buah (barang umum)' },
                { kanji: '２つ', kana: 'ふたつ', romaji: 'Futatsu', arti: 'Dua buah' },
                { kanji: '３つ', kana: 'みっつ', romaji: 'Mittsu', arti: 'Tiga buah' },
                { kanji: '４つ', kana: 'よっつ', romaji: 'Yottsu', arti: 'Empat buah' },
                { kanji: '５つ', kana: 'いつつ', romaji: 'Itsutsu', arti: 'Lima buah' },
                { kanji: '６つ', kana: 'むっつ', romaji: 'Muttsu', arti: 'Enam buah' },
                { kanji: '７つ', kana: 'ななつ', romaji: 'Nanatsu', arti: 'Tujuh buah' },
                { kanji: '８つ', kana: 'やっつ', romaji: 'Yattsu', arti: 'Delapan buah' },
                { kanji: '９つ', kana: 'ここのつ', romaji: 'Kokonotsu', arti: 'Sembilan buah' },
                { kanji: '１０', kana: 'とお', romaji: 'Too', arti: 'Sepuluh buah' },
                { kanji: 'いくつ', kana: 'いくつ', romaji: 'Ikutsu', arti: 'Berapa buah?' },
                { kanji: '１人', kana: 'ひとり', romaji: 'Hitori', arti: 'Satu orang' },
                { kanji: '２人', kana: 'ふたり', romaji: 'Futari', arti: 'Dua orang' },
                { kanji: '～人', kana: '～にん', romaji: '~nin', arti: '~ orang (3 ke atas)' },
                { kanji: '～台', kana: '～だい', romaji: '~dai', arti: '~ buah (untuk mesin/kendaraan)' },
                { kanji: '～枚', kana: '～まい', romaji: '~mai', arti: '~ lembar (kertas/baju/CD)' },
                { kanji: '～回', kana: '～かい', romaji: '~kai', arti: '~ kali (frekuensi)' },
                { kanji: 'りんご', kana: 'りんご', romaji: 'Ringo', arti: 'Apel' },
                { kanji: 'みかん', kana: 'みかん', romaji: 'Mikan', arti: 'Jeruk' },
                { kanji: 'サンドイッチ', kana: 'さんどいっち', romaji: 'Sandoitchi', arti: 'Sandwich' },
                { kanji: 'カレー[ライス]', kana: 'かれー', romaji: 'Karee', arti: 'Nasi Kari' },
                { kanji: 'アイスクリーム', kana: 'あいすくりーむ', romaji: 'Aisukuriimu', arti: 'Es krim' },
                { kanji: '切手', kana: 'きって', romaji: 'Kitte', arti: 'Perangko' },
                { kanji: 'はがき', kana: 'はがき', romaji: 'Hagaki', arti: 'Kartu pos' },
                { kanji: '封筒', kana: 'ふうとう', romaji: 'Fuutou', arti: 'Amplop' },
                { kanji: '両親', kana: 'りょうしん', romaji: 'Ryoushin', arti: 'Orang tua' },
                { kanji: '兄弟', kana: 'きょうだい', romaji: 'Kyoudai', arti: 'Saudara (kandung)' },
                { kanji: '兄 / お兄さん', kana: 'あに / おにいさん', romaji: 'Ani / Oniisan', arti: 'Kakak laki-laki (Sendiri / Orang lain)' },
                { kanji: '姉 / お姉さん', kana: 'あね / おねえさん', romaji: 'Ane / Oneesan', arti: 'Kakak perempuan (Sendiri / Orang lain)' },
                { kanji: '弟 / 弟さん', kana: 'おとうと / おとうとさん', romaji: 'Otouto / Otoutosan', arti: 'Adik laki-laki (Sendiri / Orang lain)' },
                { kanji: '妹 / 妹さん', kana: 'いもうと / いもうとさん', romaji: 'Imouto / Imoutosan', arti: 'Adik perempuan (Sendiri / Orang lain)' },
                { kanji: '外国', kana: 'がいこく', romaji: 'Gaikoku', arti: 'Luar negeri' },
                { kanji: '留学生', kana: 'りゅうがくせい', romaji: 'Ryuugakusei', arti: 'Pelajar asing' },
                { kanji: 'クラス', kana: 'くらす', romaji: 'Kurasu', arti: 'Kelas' },
                { kanji: '～時間', kana: '～じかん', romaji: '~jikan', arti: '~ jam (durasi)' },
                { kanji: '～週間', kana: '～しゅうかん', romaji: '~shuukan', arti: '~ minggu (durasi)' },
                { kanji: '～か月', kana: '～かげつ', romaji: '~kagetsu', arti: '~ bulan (durasi)' },
                { kanji: '～年', kana: '～ねん', romaji: '~nen', arti: '~ tahun (durasi)' },
                { kanji: '～ぐらい', kana: '～ぐらい', romaji: '~gurai', arti: 'Kira-kira ~' },
                { kanji: 'どのくらい', kana: 'どのくらい', romaji: 'Dono kurai', arti: 'Berapa lama?' },
                { kanji: '全部で', kana: 'ぜんぶで', romaji: 'Zenbu de', arti: 'Semuanya (total)' },
                { kanji: 'みんな', kana: 'みんな', romaji: 'Minna', arti: 'Semua (orang)' },
                { kanji: '～だけ', kana: '～だけ', romaji: '~dake', arti: 'Hanya ~' }
            ],
            bunpou: [
                {
                    title: "1. Kata Bantu Bilangan & Posisinya",
                    explanation: "Dalam bahasa Jepang, kata bantu bilangan diletakkan LANGSUNG di belakang kata benda dan partikelnya (sebelum kata kerja). Ingat: benda elektronik/kendaraan pakai '-dai', benda tipis pakai '-mai', dan benda umum pakai 'Hitotsu, Futatsu, dst'.",
                    formula: "[Kata Benda] [Partikel] [Kata Bilangan] [Kata Kerja]",
                    examples: [
                        { jp: "みかんを ５つ かいました。", id: "Membeli 5 buah jeruk." },
                        { jp: "シャツを ３まい あらいました。", id: "Mencuci 3 lembar kemeja." },
                        { jp: "ガレージに くるまが ２だい あります。", id: "Di garasi ada 2 buah mobil." }
                    ]
                },
                {
                    title: "2. Menghitung Orang",
                    explanation: "Untuk menghitung orang, tambahkan '-nin' (人). Pengecualian khusus untuk 1 orang (Hitori) dan 2 orang (Futari).",
                    formula: "1人 (Hitori), 2人 (Futari), 3人 (San-nin), 4人 (Yo-nin)...",
                    examples: [
                        { jp: "きょうしつに がくせいが ４にん います。", id: "Di ruang kelas ada 4 orang siswa." },
                        { jp: "わたしは きょうだいが ひとり います。", id: "Saya punya 1 orang saudara kandung." }
                    ]
                },
                {
                    title: "3. Bertanya Kuantitas (Ikutsu & Nan-)",
                    explanation: "Gunakan 'Ikutsu' untuk menanyakan jumlah barang umum. Jika barangnya spesifik, gunakan 'Nan' + kata bantu (Nan-mai, Nan-dai, Nan-nin).",
                    formula: "いくつ / なに＋[bantu bilangan] [Kata Kerja] か",
                    examples: [
                        { jp: "パンを いくつ たべましたか。", id: "Makan berapa buah roti?" },
                        { jp: "きのう しゃしんを なんまい とりましたか。", id: "Kemarin mengambil foto berapa lembar?" }
                    ]
                },
                {
                    title: "4. Menyatakan Durasi Waktu (Dono kurai & ~gurai)",
                    explanation: "Untuk menyatakan lamanya waktu (durasi), kita TIDAK menggunakan partikel 'Ni'. Tambahkan '~gurai' jika ingin mengatakan 'kira-kira'. Bertanyalah dengan 'Dono kurai' (Berapa lama).",
                    formula: "[Durasi] (ぐらい) [Kata Kerja]",
                    examples: [
                        { jp: "にほんごを ２ねん べんきょうしました。", id: "Belajar bahasa Jepang selama 2 tahun." },
                        { jp: "ジャカルタから バリまで どのくらい かかりますか。…ひこうきで ２じかんぐらい かかります。", id: "Dari Jakarta ke Bali butuh waktu berapa lama? ...Dengan pesawat butuh waktu kira-kira 2 jam." }
                    ]
                },
                {
                    title: "5. Frekuensi dalam Jangka Waktu",
                    explanation: "Untuk menyatakan seberapa sering kamu melakukan sesuatu, gunakan pola 'Jangka Waktu + ni + Frekuensi (-kai)'.",
                    formula: "[Jangka Waktu] に [~回 / Frekuensi] [Kata Kerja]",
                    examples: [
                        { jp: "１しゅうかんに ３かい テニスを します。", id: "Bermain tenis 3 kali dalam seminggu." }
                    ]
                },
                {
                    title: "6. Pembatasan (~dake / Hanya)",
                    explanation: "Partikel 'Dake' berarti 'Hanya / Cuma'. Diletakkan di belakang kata benda atau kata keterangan bilangan untuk menunjukkan pembatasan.",
                    formula: "[Kata Benda / Bilangan] だけ",
                    examples: [
                        { jp: "わたしの やすみは にちようびだけ です。", id: "Libur saya hanya hari Minggu." },
                        { jp: "くるまが １だいだけ あります。", id: "Hanya punya 1 buah mobil." }
                    ]
                }
            ],
            quizzes: [
                { q: "Apa kata bantu bilangan yang digunakan untuk menghitung jumlah kertas, kemeja, atau CD?", a: ["-dai", "-nin", "-mai", "-kai"], c: 2 },
                { q: "Bagaimana cara membaca 1 orang dan 2 orang dalam bahasa Jepang?", a: ["Ichi-nin, Ni-nin", "Hitori, Futari", "Hitotsu, Futatsu", "Ichi-mei, Ni-mai"], c: 1 },
                { q: "Posisi yang TEPAT untuk meletakkan kata keterangan bilangan adalah...", a: ["Sebelum kata benda", "Di awal kalimat", "Setelah kata benda dan partikelnya", "Setelah kata kerja"], c: 2 },
                { q: "Terjemahkan: 'Membeli tiga buah apel.'", a: ["Ringo o mittsu kaimashita", "Mittsu ringo o kaimashita", "Ringo mittsu o kaimashita", "Ringo o mitsu kaimashita"], c: 0 },
                { q: "Apa arti dari 'Dono kurai'?", a: ["Di mana", "Berapa harganya", "Berapa lama", "Berapa jumlahnya"], c: 2 },
                { q: "Lengkapi kalimat frekuensi ini: 'Ikkagetsu ___ ni-kai eiga o mimasu.' (Sebulan dua kali nonton film)", a: ["De", "Ni", "Wa", "O"], c: 1 },
                { q: "Untuk menyatakan durasi waktu (misal: selama 2 tahun), partikel apa yang TIDAK BOLEH ditambahkan?", a: ["Ni", "De", "O", "Wa"], c: 0 },
                { q: "Jika kamu ingin menyebut 'Kakak perempuan' orang lain dengan sopan, kamu menggunakan kata:", a: ["Ane", "Oneesan", "Imouto", "Oniisan"], c: 1 },
                { q: "Apa arti dari partikel '~dake' pada kalimat 'Kitte ga ichi-mai dake arimasu'?", a: ["Lebih dari", "Kira-kira", "Semuanya", "Hanya / Cuma"], c: 3 },
                { q: "Bagaimana cara menanyakan jumlah komputer/mesin (dengan kata bantu bilangannya)?", a: ["Ikutsu", "Nan-nin", "Nan-dai", "Nan-mai"], c: 2 }
            ]
        },
        14: {
            title: "Hari 14: Perbandingan & Bentuk Lampau Kata Sifat",
            description: "Belajar membandingkan dua benda atau lebih (lebih besar, paling enak), menyebutkan musim dan cuaca, serta mengubah kata sifat ke bentuk lampau.",
            kotoba: [
                { kanji: '簡単[な]', kana: 'かんたん', romaji: 'Kantan', arti: 'Mudah, gampang' },
                { kanji: '近い', kana: 'ちかい', romaji: 'Chikai', arti: 'Dekat' },
                { kanji: '遠い', kana: 'とおい', romaji: 'Tooi', arti: 'Jauh' },
                { kanji: '速い / 早い', kana: 'はやい', romaji: 'Hayai', arti: 'Cepat (waktu / kecepatan)' },
                { kanji: '遅い', kana: 'おそい', romaji: 'Osoi', arti: 'Lambat, lamban' },
                { kanji: '多い[人が～]', kana: 'おおい', romaji: 'Ooi', arti: 'Banyak [orang]' },
                { kanji: '少ない[人が～]', kana: 'すくない', romaji: 'Sukunai', arti: 'Sedikit [orang]' },
                { kanji: '暖かい / 温かい', kana: 'あたたかい', romaji: 'Atatakai', arti: 'Hangat' },
                { kanji: '涼しい', kana: 'すずしい', romaji: 'Suzushii', arti: 'Sejuk' },
                { kanji: '甘い', kana: 'あまい', romaji: 'Amai', arti: 'Manis' },
                { kanji: '辛い', kana: 'からい', romaji: 'Karai', arti: 'Pedas' },
                { kanji: '重い', kana: 'おもい', romaji: 'Omoi', arti: 'Berat' },
                { kanji: '軽い', kana: 'かるい', romaji: 'Karui', arti: 'Ringan' },
                { kanji: 'いい[コーヒーが～]', kana: 'いい', romaji: 'Ii', arti: 'Lebih baik [kopi]' },
                { kanji: '季節', kana: 'きせつ', romaji: 'Kisetsu', arti: 'Musim' },
                { kanji: '春', kana: 'はる', romaji: 'Haru', arti: 'Musim semi' },
                { kanji: '夏', kana: 'なつ', romaji: 'Natsu', arti: 'Musim panas' },
                { kanji: '秋', kana: 'あき', romaji: 'Aki', arti: 'Musim gugur' },
                { kanji: '冬', kana: 'ふゆ', romaji: 'Fuyu', arti: 'Musim dingin' },
                { kanji: '天気', kana: 'てんき', romaji: 'Tenki', arti: 'Cuaca' },
                { kanji: '雨', kana: 'あめ', romaji: 'Ame', arti: 'Hujan' },
                { kanji: '雪', kana: 'ゆき', romaji: 'Yuki', arti: 'Salju' },
                { kanji: '曇り', kana: 'くもり', romaji: 'Kumori', arti: 'Mendung' },
                { kanji: 'ホテル', kana: 'ほてる', romaji: 'Hoteru', arti: 'Hotel' },
                { kanji: '空港', kana: 'くうこう', romaji: 'Kuukou', arti: 'Bandara' },
                { kanji: '海', kana: 'うみ', romaji: 'Umi', arti: 'Laut' },
                { kanji: '世界', kana: 'せかい', romaji: 'Sekai', arti: 'Dunia' },
                { kanji: 'パーティー', kana: 'ぱーてぃー', romaji: 'Paatii', arti: 'Pesta' },
                { kanji: '[お]祭り', kana: '[お]まつり', romaji: '[O]matsuri', arti: 'Perayaan, festival' },
                { kanji: 'すき焼き', kana: 'すきやき', romaji: 'Sukiyaki', arti: 'Sukiyaki (daging rebus)' },
                { kanji: '刺身', kana: 'さしみ', romaji: 'Sashimi', arti: 'Sashimi (ikan mentah)' },
                { kanji: '[お]すし', kana: '[お]すし', romaji: '[O]sushi', arti: 'Sushi' },
                { kanji: 'てんぷら', kana: 'てんぷら', romaji: 'Tenpura', arti: 'Tempura (gorengan jepang)' },
                { kanji: '豚肉', kana: 'ぶたにく', romaji: 'Butaniku', arti: 'Daging babi' },
                { kanji: '鶏肉', kana: 'とりにく', romaji: 'Toriniku', arti: 'Daging ayam' },
                { kanji: '牛肉', kana: 'ぎゅうにく', romaji: 'Gyuuniku', arti: 'Daging sapi' },
                { kanji: 'レモン', kana: 'れもん', romaji: 'Remon', arti: 'Lemon' },
                { kanji: '生け花', kana: 'いけばな', romaji: 'Ikebana', arti: 'Seni merangkai bunga' },
                { kanji: '紅葉', kana: 'もみじ', romaji: 'Momiji', arti: 'Maple (daun merah)' },
                { kanji: 'どちら', kana: 'どちら', romaji: 'Dochira', arti: 'Yang mana (dari 2 pilihan)' },
                { kanji: 'どちらも', kana: 'どちらも', romaji: 'Dochiramo', arti: 'Dua-duanya' },
                { kanji: 'いちばん', kana: 'いちばん', romaji: 'Ichiban', arti: 'Paling' },
                { kanji: 'ずっと', kana: 'ずっと', romaji: 'Zutto', arti: 'Jauh lebih' },
                { kanji: '初めて', kana: 'はじめて', romaji: 'Hajimete', arti: 'Untuk pertama kali' },
                { kanji: 'ただいま', kana: 'ただいま', romaji: 'Tadaima', arti: 'Saya kembali (pulang)' },
                { kanji: 'お帰りなさい', kana: 'おかえりなさい', romaji: 'Okaerinasai', arti: 'Selamat datang kembali' },
                { kanji: '疲れました', kana: 'つかれました', romaji: 'Tsukaremashita', arti: 'Lelah / Capek' }
            ],
            bunpou: [
                {
                    title: "1. Kata Sifat Bentuk Lampau (Positif & Negatif)",
                    explanation: "Jika membicarakan sifat benda/cuaca di masa lalu (misal: kemarin panas), kita harus mengubah kata sifatnya ke bentuk lampau.\n• Kata Sifat-na & Benda: +でした (deshita) / じゃありませんでした (ja arimasen deshita)\n• Kata Sifat-i: 'i' dibuang, +かったです (katta desu) / +くなかったです (kunakatta desu).",
                    formula: "KS-na + でした | KS-i + かったです",
                    examples: [
                        { jp: "きのうは あめでした。", id: "Kemarin hujan." },
                        { jp: "しけんは かんたんじゃありませんでした。", id: "Ujiannya (waktu itu) tidak mudah." },
                        { jp: "きのうの カレーは からかったです。", id: "Kari kemarin pedas." },
                        { jp: "おとといは さむくなかったです。", id: "Dua hari yang lalu tidak dingin." }
                    ]
                },
                {
                    title: "2. Perbandingan Dua Hal (A Lebih ~ dari B)",
                    explanation: "Untuk membandingkan dua benda, gunakan partikel より (yori) yang berarti 'daripada'. Subjek utama diletakkan di depan dengan partikel は (wa).",
                    formula: "[A] は [B] より [Kata Sifat] です",
                    examples: [
                        { jp: "でんしゃは バスより はやいです。", id: "Kereta lebih cepat daripada bus." },
                        { jp: "ぎゅうにくは とりにくより たかいです。", id: "Daging sapi lebih mahal daripada daging ayam." }
                    ]
                },
                {
                    title: "3. Bertanya 'Yang Mana yang Lebih ~ ?'",
                    explanation: "Saat meminta lawan bicara memilih mana yang sifatnya lebih dominan dari dua pilihan, gunakan どちら (Dochira). Untuk menjawabnya, gunakan の ほう (no hou).",
                    formula: "[A] と [B] と どちらが [KS] ですか。…[A] のほうが [KS] です。",
                    examples: [
                        { jp: "コーヒーと こうちやと どちらが すきですか。…コーヒーの ほうが すきです。", id: "Kopi dan teh, mana yang lebih kamu suka? ...Lebih suka kopi." },
                        { jp: "どちらも すきです。", id: "Suka dua-duanya." }
                    ]
                },
                {
                    title: "4. Paling / Superlatif (Dari 3 Pilihan atau Lebih)",
                    explanation: "Jika ingin bertanya atau menyatakan sesuatu yang 'Paling' (Ichiban) di antara suatu kelompok, tempat, atau waktu, gunakan partikel で (de) untuk membatasi kelompok tersebut.",
                    formula: "[Kelompok] で [Tanya] が いちばん [KS] ですか",
                    examples: [
                        { jp: "インドネシアで どこが いちばん あついですか。…スラバヤが いちばん あついです。", id: "Di Indonesia, mana yang paling panas? ...Surabaya yang paling panas." },
                        { jp: "くだものの なかで なにが いちばん あまいですか。", id: "Di antara buah-buahan, apa yang paling manis?" }
                    ]
                }
            ],
            quizzes: [
                { q: "Apa bentuk lampau dari kata sifat 'Samui' (dingin)?", a: ["Samuideshita", "Samukatta desu", "Samukunai desu", "Samui deshita"], c: 1 },
                { q: "Apa bentuk lampau negatif dari kata sifat 'Kantan' (mudah)?", a: ["Kantan ja arimasen deshita", "Kantan kunakatta desu", "Kantankatta desu", "Kantan ja arimasen"], c: 0 },
                { q: "Kata apa yang berarti 'daripada' dalam kalimat perbandingan?", a: ["De", "Hou", "Yori", "To"], c: 2 },
                { q: "Terjemahkan: 'Kopi lebih enak daripada teh hitam.'", a: ["Koohii wa koucha yori oishii desu", "Koucha wa koohii yori oishii desu", "Koohii wa koucha no hou ga oishii desu", "Koohii to koucha to oishii desu"], c: 0 },
                { q: "Jika seseorang bertanya 'A to B to dochira ga suki desu ka?' dan kamu menyukai KEDUANYA, kamu menjawab:", a: ["Dochira suki desu", "Dochiramo suki desu", "A no hou ga suki desu", "Ichiban suki desu"], c: 1 },
                { q: "Kata 'Ichiban' berarti:", a: ["Nomor satu / Paling", "Jauh lebih", "Dua-duanya", "Lebih baik"], c: 0 },
                { q: "Lengkapi kalimat: 'Kudamono no naka ___ nani ga ichiban amai desu ka.'", a: ["Wa", "Ni", "De", "O"], c: 2 },
                { q: "Apa bentuk lampau dari kata sifat 'Ii' (bagus/baik)?", a: ["Iikatta desu", "Yokatta desu", "Ii deshita", "Yokunai desu"], c: 1 },
                { q: "Apa bahasa Jepangnya 'Musim Gugur'?", a: ["Fuyu", "Haru", "Natsu", "Aki"], c: 3 },
                { q: "Apa ucapan balasan ketika ada anggota keluarga yang baru masuk ke dalam rumah dan berkata 'Tadaima'?", a: ["Okaerinasai", "Ittekimasu", "Otsukaresama", "Tadaima"], c: 0 }
            ]
        },
        15: {
            title: "Hari 15: Keinginan & Tujuan (Hoshii & ~Tai)",
            description: "Belajar menyatakan benda yang diinginkan, aktivitas yang ingin dilakukan, serta menjelaskan tujuan saat pergi ke suatu tempat.",
            kotoba: [
                { kanji: '遊びます', kana: 'あそびます', romaji: 'Asobimasu', arti: 'Bermain' },
                { kanji: '泳ぎます', kana: 'およぎます', romaji: 'Oyogimasu', arti: 'Berenang' },
                { kanji: '迎えます', kana: 'むかえます', romaji: 'Mukaemasu', arti: 'Menjemput' },
                { kanji: '疲れます', kana: 'つかれます', romaji: 'Tsukaremasu', arti: 'Lelah / Menjadi lelah' },
                { kanji: '結婚します', kana: 'けっこんします', romaji: 'Kekkon shimasu', arti: 'Menikah' },
                { kanji: '買い物します', kana: 'かいものします', romaji: 'Kaimono shimasu', arti: 'Berbelanja' },
                { kanji: '食事します', kana: 'しょくじします', romaji: 'Shokuji shimasu', arti: 'Makan bareng / Makan besar' },
                { kanji: '散歩します', kana: 'さんぽします', romaji: 'Sanpo shimasu', arti: 'Berjalan-jalan (di taman)' },
                { kanji: '大変[な]', kana: 'たいへん', romaji: 'Taihen', arti: 'Berat, susah' },
                { kanji: '欲しい', kana: 'ほしい', romaji: 'Hoshii', arti: 'Ingin (memiliki)' },
                { kanji: '広い', kana: 'ひろい', romaji: 'Hiroi', arti: 'Luas' },
                { kanji: '狭い', kana: 'せまい', romaji: 'Semai', arti: 'Sempit' },
                { kanji: 'プール', kana: 'ぷーる', romaji: 'Puuru', arti: 'Kolam renang' },
                { kanji: '川', kana: 'かわ', romaji: 'Kawa', arti: 'Sungai' },
                { kanji: '美術', kana: 'びじゅつ', romaji: 'Bijutsu', arti: 'Seni' },
                { kanji: '釣り', kana: 'つり', romaji: 'Tsuri', arti: 'Memancing (tsuri o shimasu)' },
                { kanji: 'スキー', kana: 'すきー', romaji: 'Sukii', arti: 'Ski (sukii o shimasu)' },
                { kanji: '週末', kana: 'しゅうまつ', romaji: 'Shuumatsu', arti: 'Akhir pekan' },
                { kanji: '[お]正月', kana: '[お]しょうがつ', romaji: '[O]shougatsu', arti: 'Tahun baru' },
                { kanji: '～ごろ', kana: '～ごろ', romaji: '~goro', arti: 'Sekitar ~ (waktu)' },
                { kanji: '何か', kana: 'なにか', romaji: 'Nanika', arti: 'Sesuatu' },
                { kanji: 'どこか', kana: 'どこか', romaji: 'Dokoka', arti: 'Suatu tempat' },
                { kanji: 'のどが かわきます', kana: 'のどが かわきます', romaji: 'Nodo ga kawakimasu', arti: 'Haus (tenggorokan kering)' },
                { kanji: 'おなかが すきます', kana: 'おなかが すきます', romaji: 'Onaka ga sukimasu', arti: 'Lapar (perut kosong)' },
                { kanji: 'そう しましょう', kana: 'そう しましょう', romaji: 'Sou shimashou', arti: 'Ya, mari (Setuju dengan ajakan)' },
                { kanji: 'ご注文は？', kana: 'ごちゅうもんは？', romaji: 'Gochuumon wa?', arti: 'Mau pesan apa?' },
                { kanji: '定食', kana: 'ていしょく', romaji: 'Teishoku', arti: 'Menu paket' },
                { kanji: '牛どん', kana: 'ぎゅうどん', romaji: 'Gyuudon', arti: 'Gyudon (Nasi mangkuk sapi)' },
                { kanji: '少々 お待ちください', kana: 'しょうしょう おまちください', romaji: 'Shoushou omachi kudasai', arti: 'Tolong tunggu sebentar' },
                { kanji: '～で ございます', kana: '～で ございます', romaji: '~de gozaimasu', arti: 'Adalah (Bentuk sangat sopan dari desu)' },
                { kanji: '別々に', kana: 'べつべつに', romaji: 'Betsubetsu ni', arti: 'Sendiri-sendiri / Pisah bayar' }
            ],
            bunpou: [
                {
                    title: "1. Keinginan Memiliki Benda (Hoshii desu)",
                    explanation: "Untuk menyatakan keinginan *punya* suatu benda, gunakan kata 'Hoshii'. Objeknya harus ditandai dengan partikel が (ga). Ingat, 'Hoshii' berfungsi sebagai Kata Sifat-i, jadi bentuk negatifnya adalah 'Hoshikunai desu'.",
                    formula: "[Kata Benda] が ほしいです",
                    examples: [
                        { jp: "わたしは あたらしい パソコンが ほしいです。", id: "Saya ingin komputer baru." },
                        { jp: "いま なにも ほしくないです。", id: "Sekarang (saya) tidak ingin apa-apa." }
                    ]
                },
                {
                    title: "2. Keinginan Melakukan Sesuatu (~Tai desu)",
                    explanation: "Jika kamu ingin *melakukan* suatu aktivitas, hilangkan akhiran 'masu' pada kata kerja, lalu ganti dengan 'tai desu'. Partikel objek を (o) boleh diganti dengan が (ga) jika memakai pola ini.",
                    formula: "Kata Kerja (coret masu) + たいです",
                    examples: [
                        { jp: "にほんへ いきたいです。", id: "Ingin pergi ke Jepang." },
                        { jp: "おなかが いたいですから、なにも たべたくないです。", id: "Karena perut sakit, tidak ingin makan apa-apa." }
                    ]
                },
                {
                    title: "3. Tujuan Bepergian (~ni ikimasu)",
                    explanation: "Saat pergi ke suatu tempat, kita bisa menyebutkan *tujuan* pergi tersebut menggunakan partikel に (ni). Tujuannya bisa berupa Kata Kerja (tanpa 'masu') atau Kata Benda khusus kegiatan.",
                    formula: "[Tempat] へ [Kegiatan / KK tanpa masu] に 行きます",
                    examples: [
                        { jp: "バリへ あそびに 行きます。", id: "Pergi ke Bali untuk bermain/liburan." },
                        { jp: "デパートへ かいものに 行きます。", id: "Pergi ke toserba untuk berbelanja." }
                    ]
                },
                {
                    title: "4. Nanika (Sesuatu) & Dokoka (Suatu Tempat)",
                    explanation: "Kata ini sering dipakai tanpa memerlukan partikel tambahan (seperti 'o' atau 'e').",
                    formula: "何か (Sesuatu) / どこか (Suatu Tempat)",
                    examples: [
                        { jp: "のどが かわきましたから、なにか のみたいです。", id: "Karena haus, ingin minum sesuatu." },
                        { jp: "しゅうまつ どこか 行きましたか。…いいえ、どこも 行きませんでした。", id: "Akhir pekan pergi ke suatu tempat? ...Tidak, tidak pergi ke mana-mana." }
                    ]
                }
            ],
            quizzes: [
                { q: "Apa bahasa Jepangnya 'Saya ingin mobil'?", a: ["Kuruma o hoshii desu", "Kuruma ga hoshii desu", "Kuruma ga kaitai desu", "Kuruma ga suki desu"], c: 1 },
                { q: "Bentuk '~tai' dari kata kerja 'Nomimasu' (Minum) adalah...", a: ["Nomimasutai", "Nomitai", "Nomitai desu", "Nondetai desu"], c: 2 },
                { q: "Lengkapi kalimat: 'Resutoran e bangohan o _____ ni ikimasu.' (Pergi ke restoran untuk MAKAN malam)", a: ["Tabemasu", "Tabe", "Tabetai", "Tabete"], c: 1 },
                { q: "Apa arti dari 'Nodo ga kawakimasu'?", a: ["Perut lapar", "Tenggorokan kering / Haus", "Ingin makan", "Kelelahan"], c: 1 },
                { q: "Bagaimana cara bilang 'Tidak ingin pergi ke mana-mana'?", a: ["Dokoka ikitai desu", "Doko e mo ikitakunai desu", "Doko mo ikimasen", "Doko e ikitai desu ka"], c: 1 },
                { q: "Jika pelayan restoran berkata 'Gochuumon wa?', dia sedang menanyakan apa?", a: ["Mau duduk di mana?", "Uangnya mana?", "Mau pesan apa?", "Atas nama siapa?"], c: 2 },
                { q: "Kata 'Betsubetsu ni' biasanya digunakan di restoran untuk...", a: ["Meminta menu tambahan", "Memisahkan pembayaran masing-masing", "Membungkus makanan", "Memesan menu paket"], c: 1 },
                { q: "Apa arti dari 'Kaimono ni ikimasu'?", a: ["Pergi untuk berenang", "Pergi untuk belajar", "Pergi untuk bermain", "Pergi untuk berbelanja"], c: 3 },
                { q: "Kata 'Dokoka' artinya adalah...", a: ["Di mana", "Suatu tempat", "Sesuatu", "Kapan saja"], c: 1 },
                { q: "Bentuk negatif dari 'Hoshii desu' adalah...", a: ["Hoshiikunai desu", "Hoshikatta desu", "Hoshikunai desu", "Hoshii ja arimasen"], c: 2 }
            ]
        },
        16: {
            title: "Hari 16: Golongan Kata Kerja & Bentuk ~Te",
            description: "Mempelajari 3 golongan kata kerja, aturan merubah ke bentuk 'Te', serta cara menggunakannya untuk meminta tolong dan menawarkan bantuan.",
            kotoba: [
                { kanji: 'つけます', kana: 'つけます', romaji: 'Tsukemasu', arti: 'Menyalakan (lampu, TV)' },
                { kanji: '消します', kana: 'けします', romaji: 'Keshimasu', arti: 'Mematikan, memadamkan' },
                { kanji: '開けます', kana: 'あけます', romaji: 'Akemasu', arti: 'Membuka (pintu, jendela)' },
                { kanji: '閉めます', kana: 'しめます', romaji: 'Shimemasu', arti: 'Menutup (pintu, jendela)' },
                { kanji: '急ぎます', kana: 'いそぎます', romaji: 'Isogimasu', arti: 'Buru-buru, bergegas' },
                { kanji: '待ちます', kana: 'まちます', romaji: 'Machimasu', arti: 'Menunggu' },
                { kanji: '持ちます', kana: 'もちます', romaji: 'Mochimasu', arti: 'Membawa, memegang' },
                { kanji: '取ります', kana: 'とります', romaji: 'Torimasu', arti: 'Mengambil' },
                { kanji: '手伝います', kana: 'てつだいます', romaji: 'Tetsudaimasu', arti: 'Membantu' },
                { kanji: '呼びます', kana: 'よびます', romaji: 'Yobimasu', arti: 'Memanggil' },
                { kanji: '話します', kana: 'はなします', romaji: 'Hanashimasu', arti: 'Berbicara' },
                { kanji: '使います', kana: 'つかいます', romaji: 'Tsukaimasu', arti: 'Memakai, menggunakan' },
                { kanji: '止めます', kana: 'とめます', romaji: 'Tomemasu', arti: 'Menghentikan, memarkir' },
                { kanji: '見せます', kana: 'みせます', romaji: 'Misemasu', arti: 'Memperlihatkan' },
                { kanji: '教えます', kana: 'おしえます', romaji: 'Oshiemasu', arti: 'Memberitahukan (alamat), mengajar' },
                { kanji: '座ります', kana: 'すわります', romaji: 'Suwarimasu', arti: 'Duduk' },
                { kanji: '立ちます', kana: 'たちます', romaji: 'Tachimasu', arti: 'Berdiri' },
                { kanji: '入ります', kana: 'はいります', romaji: 'Hairimasu', arti: 'Masuk (ke ruangan/kedai)' },
                { kanji: '出ます', kana: 'でます', romaji: 'Demasu', arti: 'Keluar (dari ruangan/kedai)' },
                { kanji: '降ります', kana: 'ふります', romaji: 'Furimasu', arti: 'Turun (hujan/salju)' },
                { kanji: 'コピーします', kana: 'こぴーします', romaji: 'Kopii shimasu', arti: 'Memfotokopi' },
                { kanji: '電気', kana: 'でんき', romaji: 'Denki', arti: 'Listrik, lampu' },
                { kanji: 'エアコン', kana: 'えあこん', romaji: 'Eakon', arti: 'AC (Pendingin ruangan)' },
                { kanji: 'パスポート', kana: 'ぱすぽーと', romaji: 'Pasupooto', arti: 'Paspor' },
                { kanji: '名前', kana: 'なまえ', romaji: 'Namae', arti: 'Nama' },
                { kanji: '住所', kana: 'じゅうしょ', romaji: 'Juusho', arti: 'Alamat' },
                { kanji: '地図', kana: 'ちず', romaji: 'Chizu', arti: 'Peta' },
                { kanji: '塩', kana: 'しお', romaji: 'Shio', arti: 'Garam' },
                { kanji: '砂糖', kana: 'さとう', romaji: 'Satou', arti: 'Gula' },
                { kanji: '問題', kana: 'もんだい', romaji: 'Mondai', arti: 'Masalah, soal' },
                { kanji: '答え', kana: 'こたえ', romaji: 'Kotae', arti: 'Jawaban' },
                { kanji: '読み方', kana: 'よみかた', romaji: 'Yomikata', arti: 'Cara membaca' },
                { kanji: '～方', kana: '～かた', romaji: '~kata', arti: 'Cara ~ (melakukan sesuatu)' },
                { kanji: 'まっすぐ', kana: 'まっすぐ', romaji: 'Massugu', arti: 'Lurus' },
                { kanji: 'ゆっくり', kana: 'ゆっくり', romaji: 'Yukkuri', arti: 'Pelan-pelan' },
                { kanji: 'すぐ', kana: 'すぐ', romaji: 'Sugu', arti: 'Segera, langsung' },
                { kanji: 'また', kana: 'また', romaji: 'Mata', arti: 'Lagi' },
                { kanji: 'あとで', kana: 'あとで', romaji: 'Atode', arti: 'Nanti' },
                { kanji: 'もう少し', kana: 'もうすこし', romaji: 'Mou sukoshi', arti: 'Sedikit lagi' },
                { kanji: 'さあ', kana: 'さあ', romaji: 'Saa', arti: 'Mari (mengajak/menyuruh)' },
                { kanji: 'お釣り', kana: 'おつり', romaji: 'Otsuri', arti: 'Uang kembalian' }
            ],
            bunpou: [
                {
                    title: "1. Tiga Kelompok Kata Kerja (Golongan 1, 2, 3)",
                    explanation: "Dalam bahasa Jepang, kata kerja (~masu) dibagi menjadi 3 Golongan untuk menentukan cara perubahannya: \n• Gol 1: Sebelum 'masu' adalah bunyi deret 'i' (ki, shi, chi, ni, mi, ri, dll). Contoh: Nomimasu, Kakimasu. \n• Gol 2: Sebelum 'masu' adalah bunyi deret 'e' (ke, se, te, ne, me, dll), dan beberapa deret 'i' spesial. Contoh: Tabemasu, Mimasu. \n• Gol 3: Hanya ada dua kata: Shimasu (Melakukan) dan Kimasu (Datang).",
                    formula: "Gol 1 (Bunyi I), Gol 2 (Bunyi E), Gol 3 (Shimasu / Kimasu)",
                    examples: [
                        { jp: "はなします (Golongan 1)", id: "Hanashi-masu (Sebelum masu ada 'shi')" },
                        { jp: "あけます (Golongan 2)", id: "Ake-masu (Sebelum masu ada 'ke')" },
                        { jp: "べんきょうします (Golongan 3)", id: "Benkyou-shimasu (Berakhiran shimasu)" }
                    ]
                },
                {
                    title: "2. Aturan Perubahan Bentuk ~Te (Bentuk Sambung)",
                    explanation: "Bentuk Te sangat sering dipakai. Cara merubahnya dari bentuk ~masu: \n• Gol 1: (i, chi, ri -> tte) | (mi, ni, bi -> nde) | (ki -> ite) | (gi -> ide) | (shi -> shite). Pengecualian: Ikimasu -> Itte. \n• Gol 2: Coret 'masu', ganti jadi 'te'. (Tabemasu -> Tabete). \n• Gol 3: Shimasu -> Shite | Kimasu -> Kite.",
                    formula: "Lihat akhiran sebelum ~masu dan ganti sesuai rumusnya!",
                    examples: [
                        { jp: "まちます ➔ まって (Matte)", id: "Menunggu (chi -> tte)" },
                        { jp: "のみます ➔ のんで (Nonde)", id: "Minum (mi -> nde)" },
                        { jp: "あけます ➔ あけて (Akete)", id: "Membuka (Gol 2: cukup tambah te)" }
                    ]
                },
                {
                    title: "3. Meminta Tolong (~Te kudasai)",
                    explanation: "Gunakan kata kerja Bentuk 'Te' diikuti dengan 'kudasai' untuk meminta tolong, menyuruh, atau mempersilakan seseorang melakukan sesuatu dengan sopan.",
                    formula: "Kata Kerja (Bentuk Te) + ください",
                    examples: [
                        { jp: "あついですね。まどを あけてください。", id: "Panas ya. Tolong buka jendelanya." },
                        { jp: "ゆっくり はなしてください。", id: "Tolong bicara pelan-pelan." }
                    ]
                },
                {
                    title: "4. Sedang Berlangsung (~Te imasu)",
                    explanation: "Untuk menyatakan kejadian yang SEDANG berlangsung saat ini (Present Continuous), gunakan Bentuk 'Te' + 'imasu'.",
                    formula: "Kata Kerja (Bentuk Te) + います",
                    examples: [
                        { jp: "わたしは いま ほんを よんでいます。", id: "Saya sekarang sedang membaca buku." },
                        { jp: "さくらさんは パソコンを つかっています。", id: "Sakura sedang menggunakan komputer." }
                    ]
                },
                {
                    title: "5. Menawarkan Bantuan (~Mashou ka)",
                    explanation: "Bentuk 'mashou' artinya 'mari/ayo'. Jika ditambah partikel tanya 'ka' (~mashou ka), artinya menjadi 'Bagaimana kalau saya...' yang digunakan untuk MENAWARKAN bantuan kepada lawan bicara.",
                    formula: "Kata Kerja (Bentuk masu dicoret) + ましょうか",
                    examples: [
                        { jp: "にもつが おもいですね。もちましょうか。", id: "Barangnya berat ya. Mau saya bawakan?" },
                        { jp: "タクシーを よびましょうか。…はい、おねがいします。", id: "Mau saya panggilkan taksi? ...Ya, tolong." }
                    ]
                },
                {
                    title: "6. Fenomena Alam & Partikel 'Ga'",
                    explanation: "Ketika kita mendeskripsikan kejadian alam atau situasi yang sedang terjadi tepat di depan mata secara objektif, subjeknya ditandai dengan partikel 'Ga' (が), bukan 'Wa' (は).",
                    formula: "[Kejadian Alam/Situasi] が [Bentuk Te] います",
                    examples: [
                        { jp: "あ、あめが ふっています。", id: "Ah, sedang turun hujan." },
                        { jp: "でんきが ついています。", id: "Lampunya (sedang) menyala." }
                    ]
                }
            ],
            quizzes: [
                { q: "Kata kerja 'Nomimasu' (Minum) termasuk ke dalam golongan berapa?", a: ["Golongan 1", "Golongan 2", "Golongan 3", "Golongan 4"], c: 0 },
                { q: "Apa bentuk '~Te' dari kata kerja 'Yobimasu' (Memanggil)?", a: ["Yobite", "Yonde", "Yotte", "Yobinde"], c: 1 },
                { q: "Bagaimana bentuk '~Te' dari 'Kikimasu' (Mendengar)?", a: ["Kitte", "Kikite", "Kiite", "Kinde"], c: 2 },
                { q: "Terjemahkan kalimat ini: 'Sumimasen, shio o totte kudasai.'", a: ["Maaf, tolong ambilkan gula.", "Maaf, tolong ambilkan garam.", "Maaf, tolong beli garam.", "Maaf, saya tidak suka garam."], c: 1 },
                { q: "Jika kamu melihat ibu kerepotan membawa belanjaan, kalimat tawaran apa yang tepat digunakan?", a: ["Mochimashita ka?", "Mochimasen ka?", "Mochite kudasai.", "Mochimashou ka?"], c: 3 },
                { q: "Apa bentuk '~Te' dari 'Shimasu' (Melakukan)?", a: ["Shite", "Shinde", "Shitte", "Shimatte"], c: 0 },
                { q: "Lengkapi kalimat: 'Ima, ame ___ futte imasu.' (Sekarang sedang hujan)", a: ["Wa", "Ni", "Ga", "O"], c: 2 },
                { q: "Pengecualian khusus: Bentuk '~Te' dari kata kerja 'Ikimasu' (Pergi) adalah...", a: ["Iite", "Ikite", "Itte", "Inde"], c: 2 },
                { q: "Kata 'Mondai' memiliki arti...", a: ["Pertanyaan", "Cara baca", "Masalah / Soal", "Jawaban"], c: 2 },
                { q: "Apa arti dari 'Sugu kimasu'?", a: ["Datang nanti", "Datang pelan-pelan", "Langsung / Segera datang", "Datang lagi"], c: 2 }
            ]
        },
        17: {
            title: "Hari 17: Izin, Larangan & Keadaan (Bentuk ~Te)",
            description: "Belajar cara meminta izin, memberikan larangan, serta menyatakan status, tempat tinggal, dan kebiasaan menggunakan kata kerja bentuk ~Te.",
            kotoba: [
                { kanji: '置きます', kana: 'おきます', romaji: 'Okimasu', arti: 'Meletakkan, menaruh' },
                { kanji: '作ります', kana: 'つくります', romaji: 'Tsukurimasu', arti: 'Membuat, memproduksi' },
                { kanji: '売ります', kana: 'うります', romaji: 'Urimasu', arti: 'Menjual' },
                { kanji: '知ります', kana: 'しります', romaji: 'Shirimasu', arti: 'Mengetahui, mengenal' },
                { kanji: '住みます', kana: 'すみます', romaji: 'Sumimasu', arti: 'Tinggal, menetap' },
                { kanji: '研究します', kana: 'けんきゅうします', romaji: 'Kenkyuu shimasu', arti: 'Meneliti' },
                { kanji: '資料', kana: 'しりょう', romaji: 'Shiryou', arti: 'Data, bahan, dokumen' },
                { kanji: 'カタログ', kana: 'かたろぐ', romaji: 'Katarogu', arti: 'Katalog' },
                { kanji: '時刻表', kana: 'じこくひょう', romaji: 'Jikokuhyou', arti: 'Jadwal (kereta/bus)' },
                { kanji: '服', kana: 'ふく', romaji: 'Fuku', arti: 'Baju, pakaian' },
                { kanji: '製品', kana: 'せいひん', romaji: 'Seihin', arti: 'Produk, barang jadi' },
                { kanji: 'ソフト', kana: 'そふと', romaji: 'Sofuto', arti: 'Perangkat lunak (Software)' },
                { kanji: '電子辞書', kana: 'でんしじしょ', romaji: 'Denshi jisho', arti: 'Kamus elektronik' },
                { kanji: '経済', kana: 'けいざい', romaji: 'Keizai', arti: 'Ekonomi' },
                { kanji: '市役所', kana: 'しやくしょ', romaji: 'Shiyakusho', arti: 'Kantor balai kota' },
                { kanji: '高校', kana: 'こうこう', romaji: 'Koukou', arti: 'SMA' },
                { kanji: '歯医者', kana: 'はいしゃ', romaji: 'Haisha', arti: 'Dokter gigi' },
                { kanji: '独身', kana: 'どくしん', romaji: 'Dokushin', arti: 'Bujangan, belum menikah' },
                { kanji: '皆さん', kana: 'みなさん', romaji: 'Minasan', arti: 'Semuanya, bapak-bapak/ibu-ibu' },
                { kanji: '思い出します', kana: 'おもいだします', romaji: 'Omoidashimasu', arti: 'Teringat, mengenang' },
                { kanji: 'いらっしゃいます', kana: 'いらっしゃいます', romaji: 'Irasshaimasu', arti: 'Ada (Bentuk hormat dari Imasu)' }
            ],
            bunpou: [
                {
                    title: "1. Meminta Izin (~te mo ii desu ka)",
                    explanation: "Untuk meminta izin melakukan sesuatu, ubah kata kerja ke Bentuk-Te lalu tambahkan 'mo ii desu ka'. Artinya 'Bolehkah saya...?'.",
                    formula: "Kata Kerja (Bentuk て) + も いいですか",
                    examples: [
                        { jp: "ここで しゃしんを とっても いいですか。", id: "Bolehkah mengambil foto di sini?" },
                        { jp: "この カタログを もらっても いいですか。…ええ、いいですよ。", id: "Bolehkah saya meminta katalog ini? ...Ya, boleh." }
                    ]
                },
                {
                    title: "2. Menyatakan Larangan (~te wa ikemasen)",
                    explanation: "Untuk melarang seseorang melakukan sesuatu, gunakan Bentuk-Te ditambah 'wa ikemasen'. Artinya 'Tidak boleh...'.",
                    formula: "Kata Kerja (Bentuk て) + は いけません",
                    examples: [
                        { jp: "びょういんで たばこを すっては いけません。", id: "Tidak boleh merokok di rumah sakit." },
                        { jp: "ここに くるまを とめては いけません。", id: "Tidak boleh memarkirkan mobil di sini." }
                    ]
                },
                {
                    title: "3. Menyatakan Keadaan & Status (~te imasu)",
                    explanation: "Pola '~te imasu' tidak hanya berarti 'sedang melakukan', tapi juga menunjukkan keadaan yang terus berlanjut dari masa lalu hingga sekarang (contoh: sudah menikah, tempat tinggal, mengenal seseorang).",
                    formula: "Kata Kerja (Bentuk て) + います",
                    examples: [
                        { jp: "わたしは バンドンに すんでいます。", id: "Saya tinggal di Bandung." },
                        { jp: "あねは もう けっこんして います。", id: "Kakak perempuan saya sudah menikah." }
                    ]
                },
                {
                    title: "4. Pengecualian: Shirimasen (Tidak Kenal/Tahu)",
                    explanation: "Jika kamu KENAL atau TAHU, gunakan 'Shitte imasu'. TETAPI, jika TIDAK TAHU, jangan gunakan 'Shitte imasen', melainkan harus menggunakan 'Shirimasen'.",
                    formula: "知っています (Tahu) VS 知りません (Tidak Tahu)",
                    examples: [
                        { jp: "やまださんの でんわばんごうを しっていますか。…いいえ、しりません。", id: "Apakah kamu tahu nomor telepon Tuan Yamada? ...Tidak, saya tidak tahu." }
                    ]
                },
                {
                    title: "5. Partikel 'Ni' untuk Titik Akhir Aksi",
                    explanation: "Berbeda dengan partikel 'De' yang menunjukkan tempat kejadian, partikel 'Ni' di sini menunjukkan tempat di mana sebuah benda akhirnya berada setelah aksi dilakukan (seperti duduk DI kursi, menaruh DI meja).",
                    formula: "[Tempat/Benda] に [Kata Kerja]",
                    examples: [
                        { jp: "この いすに すわっても いいですか。", id: "Bolehkah duduk di kursi ini?" },
                        { jp: "そこへ にもつを おいて ください。", id: "Tolong letakkan barangnya di situ." }
                    ]
                }
            ],
            quizzes: [
                { q: "Apa bahasa Jepangnya 'Bolehkah saya merokok di sini?'", a: ["Koko de tabako o sutte mo ii desu ka", "Koko de tabako o sutte wa ikemasen", "Koko de tabako o suimasu", "Koko de tabako o sutte imasu"], c: 0 },
                { q: "Bagaimana cara menyatakan 'Tidak boleh mengambil foto'?", a: ["Shashin o totte mo ii desu", "Shashin o totte wa ikemasen", "Shashin o torimasen", "Shashin o totte imasen"], c: 1 },
                { q: "Jika seseorang bertanya 'Tanaka-san o shitte imasu ka?' dan kamu TIDAK kenal, jawabannya adalah:", a: ["Iie, shitte imasen", "Iie, shirimasen", "Iie, shiranai desu", "Iie, shitte wa ikemasen"], c: 1 },
                { q: "Apa arti dari kalimat 'Watashi wa Jakarta ni sunde imasu'?", a: ["Saya akan pergi ke Jakarta", "Saya bekerja di Jakarta", "Saya tinggal di Jakarta", "Saya sedang berada di Jakarta"], c: 2 },
                { q: "Lengkapi kalimat: 'Kono isu ___ suwatte mo ii desu ka.' (Bolehkah duduk DI kursi ini?)", a: ["De", "Wa", "O", "Ni"], c: 3 },
                { q: "Apa bahasa Jepangnya 'Kamus elektronik'?", a: ["Sofuto", "Katarogu", "Denshi jisho", "Shiryou"], c: 2 },
                { q: "Kata 'Dokushin' memiliki arti...", a: ["Menikah", "Dokter gigi", "Bujangan / Belum menikah", "Keluarga"], c: 2 },
                { q: "Bentuk ~te dari kata 'Okimasu' (meletakkan) adalah...", a: ["Oite", "Okite", "Oshite", "Onde"], c: 0 },
                { q: "Pola '~te imasu' pada kata 'Kekkon shite imasu' berfungsi untuk menunjukkan:", a: ["Aktivitas yang sedang dilakukan sekarang", "Status atau keadaan yang berlanjut", "Larangan", "Masa lalu"], c: 1 },
                { q: "Terjemahkan: 'Tolong letakkan tas di sini.'", a: ["Koko de kaban o oite kudasai", "Koko ni kaban o oite kudasai", "Koko ni kaban o totte kudasai", "Koko wa kaban o oite kudasai"], c: 1 }
            ]
        },
        18: {
            title: "Hari 18: Menyambung Kalimat & Ciri Fisik",
            description: "Belajar cara menyambungkan beberapa aktivitas secara berurutan, menyambungkan kata sifat/benda, dan mendeskripsikan ciri fisik seseorang.",
            kotoba: [
                { kanji: '乗ります', kana: 'のります', romaji: 'Norimasu', arti: 'Naik [kendaraan]' },
                { kanji: '降ります', kana: 'おります', romaji: 'Orimasu', arti: 'Turun [dari kendaraan]' },
                { kanji: '乗り換えます', kana: 'のりかえます', romaji: 'Norikaemasu', arti: 'Ganti kendaraan / Transit' },
                { kanji: '浴びます', kana: 'あびます', romaji: 'Abimasu', arti: 'Mandi [dengan shower]' },
                { kanji: '入れます', kana: 'いれます', romaji: 'Iremasu', arti: 'Memasukkan' },
                { kanji: '出します', kana: 'だします', romaji: 'Dashimasu', arti: 'Mengeluarkan, menyerahkan (tugas)' },
                { kanji: '下ろします', kana: 'おろします', romaji: 'Oroshimasu', arti: 'Mengambil, menarik [uang]' },
                { kanji: '入ります', kana: 'はいります', romaji: 'Hairimasu', arti: 'Masuk [ke universitas/ruangan]' },
                { kanji: '出ます', kana: 'でます', romaji: 'Demasu', arti: 'Keluar, tamat [dari universitas]' },
                { kanji: '押します', kana: 'おします', romaji: 'Oshimasu', arti: 'Menekan, mendorong' },
                { kanji: '始めます', kana: 'はじめます', romaji: 'Hajimemasu', arti: 'Mulai' },
                { kanji: '見学します', kana: 'けんがくします', romaji: 'Kengaku shimasu', arti: 'Mengunjungi (untuk belajar/meninjau)' },
                { kanji: '電話します', kana: 'でんわします', romaji: 'Denwa shimasu', arti: 'Menelepon' },
                { kanji: '若い', kana: 'わかい', romaji: 'Wakai', arti: 'Muda' },
                { kanji: '長い', kana: 'ながい', romaji: 'Nagai', arti: 'Panjang' },
                { kanji: '短い', kana: 'みじかい', romaji: 'Mijikai', arti: 'Pendek' },
                { kanji: '明るい', kana: 'あかるい', romaji: 'Akarui', arti: 'Terang' },
                { kanji: '暗い', kana: 'くらい', romaji: 'Kurai', arti: 'Gelap' },
                { kanji: '体', kana: 'からだ', romaji: 'Karada', arti: 'Badan, tubuh' },
                { kanji: '頭', kana: 'あたま', romaji: 'Atama', arti: 'Kepala' },
                { kanji: '髪', kana: 'かみ', romaji: 'Kami', arti: 'Rambut' },
                { kanji: '顔', kana: 'かお', romaji: 'Kao', arti: 'Muka, wajah' },
                { kanji: '目', kana: 'め', romaji: 'Me', arti: 'Mata' },
                { kanji: '耳', kana: 'みみ', romaji: 'Mimi', arti: 'Telinga' },
                { kanji: '鼻', kana: 'はな', romaji: 'Hana', arti: 'Hidung' },
                { kanji: '口', kana: 'くち', romaji: 'Kuchi', arti: 'Mulut' },
                { kanji: '歯', kana: 'は', romaji: 'Ha', arti: 'Gigi' },
                { kanji: 'おなか', kana: 'おなか', romaji: 'Onaka', arti: 'Perut' },
                { kanji: '足', kana: 'あし', romaji: 'Ashi', arti: 'Kaki' },
                { kanji: '背', kana: 'せ', romaji: 'Se', arti: 'Punggung / Tinggi badan' },
                { kanji: 'サービス', kana: 'さーびす', romaji: 'Saabisu', arti: 'Pelayanan (Service)' },
                { kanji: 'ジョギング', kana: 'じょぎんぐ', romaji: 'Jogingu', arti: 'Joging' },
                { kanji: 'シャワー', kana: 'しゃわー', romaji: 'Shawaa', arti: 'Shower' },
                { kanji: '緑', kana: 'みどり', romaji: 'Midori', arti: 'Hijau, tumbuhan hijau' },
                { kanji: '[お]寺', kana: '[お]てら', romaji: '[O]tera', arti: 'Wihara (Kuil Buddha)' },
                { kanji: '神社', kana: 'じんじゃ', romaji: 'Jinja', arti: 'Kuil Shinto' },
                { kanji: 'どうやって', kana: 'どうやって', romaji: 'Dou yatte', arti: 'Dengan cara bagaimana' },
                { kanji: 'どの～', kana: 'どの～', romaji: 'Dono~', arti: '~ yang mana (dari 3 pilihan/lebih)' },
                { kanji: 'どれ', kana: 'どれ', romaji: 'Dore', arti: 'Yang mana (dari 3 pilihan/lebih)' },
                { kanji: 'まず', kana: 'まず', romaji: 'Mazu', arti: 'Pertama-tama' },
                { kanji: '次に', kana: 'つぎに', romaji: 'Tsugi ni', arti: 'Kemudian, selanjutnya' },
                { kanji: '暗証番号', kana: 'あんしょうばんごう', romaji: 'Anshou bangou', arti: 'PIN / Nomor sandi' },
                { kanji: '確認', kana: 'かくにん', romaji: 'Kakunin', arti: 'Konfirmasi, mengecek' }
            ],
            bunpou: [
                {
                    title: "1. Menyambung Aktivitas Berurutan (~Te, ~Te, ~Masu)",
                    explanation: "Untuk menyebutkan beberapa kegiatan yang dilakukan secara berurutan, gunakan Kata Kerja Bentuk-Te. Waktu (lampau atau sekarang) ditentukan oleh kata kerja yang paling akhir.",
                    formula: "KK1 (Bentuk て)、 KK2 (Bentuk て)、 KK3 (Bentuk ます/ました)",
                    examples: [
                        { jp: "あさ おきて、コーヒーを のんで、かいしゃへ いきます。", id: "Pagi hari (saya) bangun, minum kopi, lalu pergi ke kantor." },
                        { jp: "きのう しんぶんを よんで、てがみを かきました。", id: "Kemarin (saya) membaca koran, lalu menulis surat." }
                    ]
                },
                {
                    title: "2. Menyambung Kata Sifat & Kata Benda",
                    explanation: "Tidak hanya kata kerja, kata sifat dan kata benda juga bisa disambung menjadi satu kalimat (misal: 'Murah dan enak').\n• KS-i : huruf 'i' terakhir diganti くて (~kute). *Pengecualian: いい (ii) menjadi よくて (yokute).\n• KS-na & KB : tambahkan で (de).",
                    formula: "KS-i (-i) + くて | KS-na / KB + で",
                    examples: [
                        { jp: "この ケーキは やすくて、おいしいです。", id: "Kue ini murah dan enak." },
                        { jp: "サントスさんは ハンサムで、しんせつな ひとです。", id: "Tuan Santos adalah orang yang tampan dan baik hati." },
                        { jp: "アニサさんは インドネシアじんで、りゅうがくせいです。", id: "Anisa adalah orang Indonesia dan seorang pelajar asing." }
                    ]
                },
                {
                    title: "3. Setelah Melakukan Sesuatu (~Te kara)",
                    explanation: "Pola ini digunakan untuk menegaskan bahwa aksi kedua HANYA dilakukan *setelah* aksi pertama selesai.",
                    formula: "Kata Kerja1 (Bentuk て) + から、 Kata Kerja2",
                    examples: [
                        { jp: "しごとが おわってから、えいがを みます。", id: "Setelah pekerjaan selesai, saya akan menonton film." },
                        { jp: "てを あらってから、ごはんを たべます。", id: "Setelah mencuci tangan, (saya) makan." }
                    ]
                },
                {
                    title: "4. Mendeskripsikan Ciri Khas (Wa ~ Ga ~ Desu)",
                    explanation: "Saat ingin menjelaskan bagian atau ciri spesifik dari suatu topik utama (seperti anggota tubuh manusia atau ciri khas suatu kota), gunakan pola ini. Topik utama ditandai 'Wa', sedangkan ciri khususnya ditandai 'Ga'.",
                    formula: "[Topik/Orang] は [Ciri/Anggota Tubuh] が [Kata Sifat] です",
                    examples: [
                        { jp: "あには かみが ながいです。", id: "Kakak laki-laki (saya) rambutnya panjang." },
                        { jp: "バンドンは たべものが おいしいです。", id: "Bandung makanannya enak." }
                    ]
                },
                {
                    title: "5. Keluar / Turun (Partikel を)",
                    explanation: "Biasanya partikel 'O' (を) digunakan untuk objek. Namun, untuk kata kerja keluar (出ます - demasu) atau turun (降ります - orimasu), partikel 'O' digunakan untuk menandai TEMPAT atau TITIK AWAL dari mana kita keluar/turun.",
                    formula: "[Tempat Keluar/Turun] を 出ます / 降ります",
                    examples: [
                        { jp: "７じに うちを でます。", id: "Keluar rumah jam 7." },
                        { jp: "つぎの えきで バスを おります。", id: "Turun dari bus di stasiun berikutnya." }
                    ]
                },
                {
                    title: "6. Bertanya Cara (Dou yatte)",
                    explanation: "Kata tanya 'Dou yatte' digunakan untuk menanyakan bagaimana cara atau rute menuju ke suatu tempat / melakukan sesuatu.",
                    formula: "どうやって [Kata Kerja] か",
                    examples: [
                        { jp: "だいがくまで どうやって いきますか。", id: "Bagaimana caranya pergi ke universitas?" },
                        { jp: "…バスに のって、つぎの えきで おります。", id: "...Naik bus, lalu turun di stasiun berikutnya." }
                    ]
                }
            ],
            quizzes: [
                { q: "Bagaimana cara menyambungkan dua Kata Sifat-i, misalnya 'Murah' (Yasui) dan 'Enak' (Oishii)?", a: ["Yasui de, oishii desu", "Yasukute, oishii desu", "Yasui kute, oishii desu", "Yasuku, oishii desu"], c: 1 },
                { q: "Apa bentuk sambung dari kata sifat 'Ii' (Bagus/Baik)?", a: ["Iikute", "Iide", "Yokute", "Yokatta"], c: 2 },
                { q: "Terjemahkan kalimat ini: 'Setelah makan malam, saya minum kopi.'", a: ["Bangohan o tabete kara, koohii o nomimasu", "Bangohan o tabete, koohii o nomimasu", "Bangohan o tabeta kara, koohii o nomimasu", "Bangohan o tabemasu kara, koohii o nomimasu"], c: 0 },
                { q: "Partikel apa yang digunakan sebelum kata kerja 'Orimasu' (Turun dari kereta)?", a: ["Ni (に)", "De (で)", "O (を)", "Wa (は)"], c: 2 },
                { q: "Lengkapi kalimat berikut: 'Karina-san wa me ___ ookii desu.' (Saudari Karina matanya besar)", a: ["Wa", "Ga", "O", "Ni"], c: 1 },
                { q: "Jika seseorang bertanya 'Dou yatte ikimasu ka?', apa yang dia tanyakan?", a: ["Kapan kamu pergi?", "Bagaimana cara (rute) perginya?", "Dengan siapa kamu pergi?", "Berapa lama perginya?"], c: 1 },
                { q: "Apa bahasa Jepangnya 'Telinga'?", a: ["Kuchi", "Hana", "Me", "Mimi"], c: 3 },
                { q: "Kata kerja 'Norimasu' (Naik kendaraan) selalu berpasangan dengan partikel apa?", a: ["Ni (に)", "O (を)", "De (で)", "E (へ)"], c: 0 },
                { q: "Apa arti dari kata 'Anshou bangou'?", a: ["Konfirmasi", "Tombol", "Nomor PIN / Sandi", "Kartu ATM"], c: 2 },
                { q: "Bagaimana cara mengatakan 'Saya orang Indonesia dan seorang mahasiswa'?", a: ["Watashi wa Indoneshiajin de, gakusei desu", "Watashi wa Indoneshiajin kute, gakusei desu", "Watashi wa Indoneshiajin desu, gakusei desu", "Watashi wa Indoneshiajin soshite gakusei desu"], c: 0 }
            ]
        },
        19: {
            title: "Hari 19: Keharusan & Larangan Sopan (Bentuk ~Nai)",
            description: "Belajar cara menukar kata kerja ke bentuk ~Nai, menyatakan keharusan (mesti), larangan (tolong jangan), dan tindakan yang tidak perlu dilakukan.",
            kotoba: [
                { kanji: '覚えます', kana: 'おぼえます', romaji: 'Oboemasu', arti: 'Mengingat, menghafal' },
                { kanji: '忘れます', kana: 'わすれます', romaji: 'Wasuremasu', arti: 'Lupa' },
                { kanji: 'なくします', kana: 'なくします', romaji: 'Nakushimasu', arti: 'Kehilangan' },
                { kanji: '払います', kana: 'はらいます', romaji: 'Haraimasu', arti: 'Membayar' },
                { kanji: '返します', kana: 'かえします', romaji: 'Kaeshimasu', arti: 'Memulangkan, mengembalikan' },
                { kanji: '出かけます', kana: 'でかけます', romaji: 'Dekakemasu', arti: 'Keluar rumah, bertolak' },
                { kanji: '脱ぎます', kana: 'ぬぎます', romaji: 'Nugimasu', arti: 'Membuka (baju, kasut, dll.)' },
                { kanji: '持って 行きます', kana: 'もって いきます', romaji: 'Motte ikimasu', arti: 'Membawa pergi' },
                { kanji: '持って 来ます', kana: 'もって きます', romaji: 'Motte kimasu', arti: 'Membawa datang' },
                { kanji: '心配します', kana: 'しんぱいします', romaji: 'Shinpai shimasu', arti: 'Bimbang, risau' },
                { kanji: '残業します', kana: 'ざんぎょうします', romaji: 'Zangyou shimasu', arti: 'Bekerja lebih masa (lembur)' },
                { kanji: '出張します', kana: 'しゅっちょうします', romaji: 'Shucchou shimasu', arti: 'Bekerja di luar kawasan (dinas)' },
                { kanji: '飲みます [薬を～]', kana: 'のみます', romaji: 'Nomimasu [kusuri o]', arti: 'Minum [ubat]' },
                { kanji: '入ります [おふろに～]', kana: 'はいります', romaji: 'Hairimasu [ofuro ni]', arti: 'Masuk [mandi di tab mandi]' },
                { kanji: '大切[な]', kana: 'たいせつ', romaji: 'Taisetsu', arti: 'Penting, berharga' },
                { kanji: '大丈夫[な]', kana: 'だいじょうぶ', romaji: 'Daijoubu', arti: 'Tidak apa-apa, selamat' },
                { kanji: '危ない', kana: 'あぶない', romaji: 'Abunai', arti: 'Bahaya' },
                { kanji: '禁煙', kana: 'きんえん', romaji: 'Kin\'en', arti: 'Dilarang merokok' },
                { kanji: '[健康]保険証', kana: 'ほけんしょう', romaji: 'Hokenshou', arti: 'Kad insurans [kesihatan]' },
                { kanji: '熱', kana: 'ねつ', romaji: 'Netsu', arti: 'Demam' },
                { kanji: '病気', kana: 'びょうき', romaji: 'Byouki', arti: 'Sakit, penyakit' },
                { kanji: '薬', kana: 'くすり', romaji: 'Kusuri', arti: 'Ubat' },
                { kanji: '[お]ふろ', kana: '[お]ふろ', romaji: '[O]furo', arti: 'Bilik mandi / Tab mandi' },
                { kanji: '上着', kana: 'うわぎ', romaji: 'Uwagi', arti: 'Baju luar, jaket' },
                { kanji: '下着', kana: 'したぎ', romaji: 'Shitagi', arti: 'Pakaian dalam' },
                { kanji: '２、３日', kana: 'に、さんにち', romaji: 'Ni, san nichi', arti: 'Dua atau tiga hari' },
                { kanji: '～までに', kana: '～までに', romaji: '~made ni', arti: 'Menjelang / Paling lambat' },
                { kanji: 'ですから', kana: 'ですから', romaji: 'Desukara', arti: 'Oleh kerana itu' },
                { kanji: 'どう しましたか', kana: 'どう しましたか', romaji: 'Dou shimashita ka', arti: 'Kenapa? / Ada masalah apa?' },
                { kanji: 'のど', kana: 'のど', romaji: 'Nodo', arti: 'Tekak, kerongkong' },
                { kanji: '[～が] 痛いです', kana: 'いたいです', romaji: 'Itai desu', arti: '[～] sakit' },
                { kanji: 'かぜ', kana: 'かぜ', romaji: 'Kaze', arti: 'Selesema, masuk angin' },
                { kanji: 'それから', kana: 'それから', romaji: 'Sorekara', arti: 'Dan, kemudian' },
                { kanji: 'お大事に', kana: 'おだいじに', romaji: 'Odaiji ni', arti: 'Semoga cepat sembuh' }
            ],
            bunpou: [
                {
                    title: "1. Kata Kerja Bentuk Nai (~ない)",
                    explanation: "Bentuk Nai adalah bentuk biasa (kasual) untuk kalimat negatif 'Tidak'. \n• Kumpulan I: Tukar vokal 'i' sebelum 'masu' menjadi 'a' + nai (contoh: kakimasu -> kakanai). Jika vokalnya 'i', ia menjadi 'wa' (suimasu -> suwanai). \n• Kumpulan II: Gugurkan 'masu' + nai (tabemasu -> tabenai). \n• Kumpulan III: shimasu -> shinai, kimasu -> konai.",
                    formula: "Kata Kerja + ない",
                    examples: [
                        { jp: "のまない (Nomanai)", id: "Tidak minum (dari Nomimasu)" },
                        { jp: "みない (Minai)", id: "Tidak melihat (dari Mimasu)" },
                        { jp: "こない (Konai)", id: "Tidak datang (dari Kimasu)" }
                    ]
                },
                {
                    title: "2. Larangan Sopan (~nai de kudasai)",
                    explanation: "Gunakan pola ini apabila awak mahu meminta seseorang untuk TIDAK melakukan sesuatu dengan cara yang lembut. Ia bermaksud 'Tolong jangan...'.",
                    formula: "Kata Kerja (Bentuk Nai) + ないで ください",
                    examples: [
                        { jp: "ここに くるまを とめないで ください。", id: "Tolong jangan letak kereta di sini." },
                        { jp: "わたしは げんきですから、しんぱいしないで ください。", id: "Oleh sebab saya sihat, tolong jangan risau." }
                    ]
                },
                {
                    title: "3. Menyatakan Keharusan (~nakereba narimasen)",
                    explanation: "Pola ini digunakan untuk menyatakan sesuatu yang WAJIB atau MESTI dilakukan, tidak kira sama ada awak suka atau tidak.",
                    formula: "Kata Kerja (Bentuk Nai tanpa 'i') + なければ なりません",
                    examples: [
                        { jp: "あした テストが ありますから、べんきょうしなければ なりません。", id: "Oleh sebab esok ada ujian, (saya) mesti belajar." },
                        { jp: "まいにち くすりを のまなければ なりません。", id: "Setiap hari mesti makan ubat." }
                    ]
                },
                {
                    title: "4. Ketiadaan Keperluan (~nakute mo ii desu)",
                    explanation: "Pola ini digunakan untuk menyatakan bahawa suatu tindakan itu TIDAK PERLU dilakukan. Ia bermaksud 'Tidak perlu...' atau 'Tidak apa-apa jika tidak...'.",
                    formula: "Kata Kerja (Bentuk Nai tanpa 'i') + なくても いいです",
                    examples: [
                        { jp: "きょうは やすみですから、はやく おきなくても いいです。", id: "Oleh sebab hari ini cuti, tidak perlu bangun awal." },
                        { jp: "くつを ぬがなくても いいですか。", id: "Bolehkah saya tidak membuka kasut?" }
                    ]
                },
                {
                    title: "5. Batas Waktu (~made ni)",
                    explanation: "Berbeza dengan '~made' (sehingga), partikel '~made ni' menunjukkan had masa terakhir. Tindakan tersebut mesti diselesaikan SEBELUM atau MENJELANG masa yang dinyatakan.",
                    formula: "[Waktu] までに + [Kata Kerja]",
                    examples: [
                        { jp: "きんようびまでに ほんを かえして ください。", id: "Sila pulangkan buku menjelang (paling lewat) hari Jumaat." },
                        { jp: "よる １０じまでに うちへ かえらなければ なりません。", id: "Mesti pulang ke rumah sebelum pukul 10 malam." }
                    ]
                }
            ],
            quizzes: [
                { q: "Apakah Bentuk Nai bagi kata kerja 'Kakimasu' (menulis)?", a: ["Kakimasanai", "Kakinai", "Kakanai", "Kakunai"], c: 2 },
                { q: "Apakah Bentuk Nai bagi kata kerja 'Kimasu' (datang)?", a: ["Kimanai", "Kikanai", "Konai", "Kuru nai"], c: 2 },
                { q: "Bagaimana cara mengatakan 'Tolong jangan lupa'?", a: ["Wasurenakute mo ii desu", "Wasurete wa ikemasen", "Wasurenaide kudasai", "Wasurenakereba narimasen"], c: 2 },
                { q: "Apakah maksud pola tatabahasa '~nakereba narimasen'?", a: ["Boleh dilakukan", "Mesti / Harus dilakukan", "Tidak perlu dilakukan", "Tolong jangan lakukan"], c: 1 },
                { q: "Terjemahkan ayat ini: 'Ashita konakute mo ii desu.'", a: ["Esok tolong jangan datang.", "Esok mesti datang.", "Esok tidak perlu datang.", "Bolehkah esok datang?"], c: 2 },
                { q: "Perkataan manakah yang bermaksud 'Sakit' (untuk badan yang berasa sakit)?", a: ["Kaze", "Byouki", "Netsu", "Itai"], c: 3 },
                { q: "Apakah yang biasa diucapkan kepada rakan yang sedang sakit di Jepun?", a: ["Okaerinasai", "Odaiji ni", "Tadaima", "Shitsurei shimasu"], c: 1 },
                { q: "Apakah beza antara '~made' dan '~made ni'?", a: ["~made ni adalah untuk tempat, ~made untuk waktu", "~made ni menunjukkan batas waktu terakhir (paling lambat)", "Tiada perbezaan langsung", "~made ni hanya digunakan untuk masa lampau"], c: 1 },
                { q: "Terjemahkan: 'Kusuri o nomimasu'.", a: ["Membeli ubat", "Mencari ubat", "Minum/Makan ubat", "Membuang ubat"], c: 2 },
                { q: "Apakah maksud perkataan 'Zangyou shimasu'?", a: ["Bekerja lebih masa (lembur)", "Bekerja di luar kawasan (dinas)", "Mencari pekerjaan", "Cuti sakit"], c: 0 }
            ]
        },
        20: {
            title: "Hari 20: Bentuk Kamus, Kemampuan & Hobi",
            description: "Belajar merubah kata kerja ke Bentuk Kamus (Jisho-kei), menyatakan apa yang bisa dilakukan, mendeskripsikan hobi, dan menggunakan kata 'Sebelum' (~mae ni).",
            kotoba: [
                { kanji: 'できます', kana: 'できます', romaji: 'Dekimasu', arti: 'Dapat, bisa, mampu' },
                { kanji: '洗います', kana: 'あらいます', romaji: 'Araimasu', arti: 'Mencuci' },
                { kanji: '弾きます', kana: 'ひきます', romaji: 'Hikimasu', arti: 'Bermain (alat musik senar/piano)' },
                { kanji: '歌います', kana: 'うたいます', romaji: 'Utaimasu', arti: 'Bernyanyi, menyanyi' },
                { kanji: '集めます', kana: 'あつめます', romaji: 'Atsumemasu', arti: 'Mengumpulkan' },
                { kanji: '捨てます', kana: 'すてます', romaji: 'Sutemasu', arti: 'Membuang' },
                { kanji: '換えます', kana: 'かえます', romaji: 'Kaemasu', arti: 'Mengganti, menukar' },
                { kanji: '運転します', kana: 'うんてんします', romaji: 'Unten shimasu', arti: 'Menyetir, mengendarai' },
                { kanji: '予約します', kana: 'よやくします', romaji: 'Yoyaku shimasu', arti: 'Memesan, melakukan reservasi' },
                { kanji: 'ピアノ', kana: 'ぴあの', romaji: 'Piano', arti: 'Piano' },
                { kanji: '～メートル', kana: '～めーとる', romaji: '~meetoru', arti: '~ meter' },
                { kanji: '現金', kana: 'げんきん', romaji: 'Genkin', arti: 'Uang tunai' },
                { kanji: '趣味', kana: 'しゅみ', romaji: 'Shumi', arti: 'Hobi, kegemaran' },
                { kanji: '日記', kana: 'にっき', romaji: 'Nikki', arti: 'Catatan harian, buku harian' },
                { kanji: 'お祈り', kana: 'おいのり', romaji: 'Oinori', arti: 'Doa (~o shimasu: berdoa)' },
                { kanji: '課長', kana: 'かちょう', romaji: 'Kachou', arti: 'Kepala seksi' },
                { kanji: '部長', kana: 'ぶちょう', romaji: 'Buchou', arti: 'Kepala bagian / Manajer' },
                { kanji: '社長', kana: 'しゃちょう', romaji: 'Shachou', arti: 'Direktur utama' },
                { kanji: '動物', kana: 'どうぶつ', romaji: 'Doubutsu', arti: 'Hewan, binatang' },
                { kanji: '馬', kana: 'うま', romaji: 'Uma', arti: 'Kuda' },
                { kanji: 'インターネット', kana: 'いんたーねっと', romaji: 'Intaanetto', arti: 'Internet' },
                { kanji: '特に', kana: 'とくに', romaji: 'Tokuni', arti: 'Terutama, khususnya' },
                { kanji: 'へえ', kana: 'へえ', romaji: 'Hee', arti: 'Betul ya? / Masa! (Terkejut/Kagum)' },
                { kanji: 'それは おもしろいですね', kana: 'それは おもしろいですね', romaji: 'Sore wa omoshiroi desu ne', arti: 'Itu menarik ya.' },
                { kanji: 'なかなか', kana: 'なかなか', romaji: 'Nakanaka', arti: 'Jarang, tidak mudah (diikuti bentuk negatif)' },
                { kanji: 'ほんとうですか', kana: 'ほんとうですか', romaji: 'Hontou desu ka', arti: 'Betul? / Benarkah?' },
                { kanji: 'ぜひ', kana: 'ぜひ', romaji: 'Zehi', arti: 'Benar-benar, pasti, mesti' }
            ],
            bunpou: [
                {
                    title: "1. Kata Kerja Bentuk Kamus (Jisho-kei)",
                    explanation: "Bentuk Kamus adalah bentuk dasar dari sebuah kata kerja (seperti yang tertulis di kamus asli Jepang).\n• Kelompok I: Ubah bunyi akhiran baris 'i' menjadi baris 'u' (Contoh: かき[ます] -> かく, のみ[ます] -> のむ).\n• Kelompok II: Hilangkan 'masu', ganti dengan 'ru' (Contoh: たべ[ます] -> たべる).\n• Kelompok III: します -> する, きます -> くる.",
                    formula: "Akhiran 'i' -> 'u' | Hilangkan masu -> 'ru' | shimasu->suru, kimasu->kuru",
                    examples: [
                        { jp: "かう (Kau)", id: "Membeli (dari Kaimasu)" },
                        { jp: "みる (Miru)", id: "Melihat (dari Mimasu)" },
                        { jp: "くる (Kuru)", id: "Datang (dari Kimasu)" }
                    ]
                },
                {
                    title: "2. Menyatakan Kemampuan (~koto ga dekimasu)",
                    explanation: "Untuk menyatakan 'bisa' atau 'mampu' melakukan sesuatu. Jika menggunakan kata benda yang berakhiran ~shimasu (seperti unten, ryouri), langsung gunakan partikel 'ga'. Jika menggunakan kata kerja lain, ubah dulu ke Bentuk Kamus lalu tambahkan 'koto ga dekimasu'.",
                    formula: "[KB] が できます | [KK Bentuk Kamus] ことが できます",
                    examples: [
                        { jp: "アグスさんは うんてんが できます。", id: "Agus bisa menyetir." },
                        { jp: "わたしは にほんごを はなす ことが できます。", id: "Saya bisa berbicara bahasa Jepang." }
                    ]
                },
                {
                    title: "3. Mendeskripsikan Hobi (Shumi wa ~ koto desu)",
                    explanation: "Untuk menceritakan hobi secara lebih spesifik, ubah aktivitas (kata kerja) menjadi kata benda dengan mengubahnya ke Bentuk Kamus dan menambahkan kata 'koto'.",
                    formula: "わたしの しゅみは [KK Bentuk Kamus] こと です",
                    examples: [
                        { jp: "わたしの しゅみは アニメを みる ことです。", id: "Hobi saya adalah menonton anime." },
                        { jp: "わたしの しゅみは えを かく ことです。", id: "Hobi saya adalah menggambar lukisan." }
                    ]
                },
                {
                    title: "4. Menyatakan Waktu 'Sebelum' (~mae ni)",
                    explanation: "Digunakan untuk menyatakan aktivitas yang dilakukan sebelum aktivitas utama. \n1. Jika didahului Kata Kerja: Harus Bentuk Kamus.\n2. Jika didahului Kata Benda: Harus memakai partikel 'no'.\n3. Jika didahului Angka/Waktu: Langsung digabung tanpa 'no'.",
                    formula: "[KK Kamus] まえに / [KB] の まえに / [Waktu] まえに、～",
                    examples: [
                        { jp: "ねる まえに、はを みがきます。", id: "Sebelum tidur, (saya) menyikat gigi." },
                        { jp: "しごとの まえに、コーヒーを のみます。", id: "Sebelum bekerja, (saya) minum kopi." },
                        { jp: "５ねん まえに、ジャカルタへ きました。", id: "Saya datang ke Jakarta 5 tahun yang lalu." }
                    ]
                },
                {
                    title: "5. Nakanaka (Tidak mudah) & Zehi (Pasti)",
                    explanation: "• Nakanaka (なかなか): Digunakan dengan kalimat NEGATIF untuk menunjukkan sesuatu yang jarang terjadi atau susah dilakukan.\n• Zehi (ぜひ): Digunakan untuk sangat menekankan harapan atau ajakan ('Benar-benar / Pasti').",
                    formula: "なかなか + [Kalimat Negatif] | ぜひ + [Harapan/Ajakan]",
                    examples: [
                        { jp: "ジャカルタで なかなか ゆきを みる ことが できません。", id: "Di Jakarta tidak mudah (susah/jarang) untuk bisa melihat salju." },
                        { jp: "ぜひ バリへ あそびに きて ください。", id: "Pasti/Benar-benar datanglah bermain ke Bali ya." }
                    ]
                }
            ],
            quizzes: [
                { q: "Apa bentuk kamus dari kata kerja 'Yomimasu' (Membaca)?", a: ["Yomu", "Yomeru", "Yomiru", "Yomau"], c: 0 },
                { q: "Apa bentuk kamus dari kata kerja kelompok III 'Kimasu' (Datang)?", a: ["Kiru", "Kimu", "Suru", "Kuru"], c: 3 },
                { q: "Bagaimana cara menyatakan 'Saya bisa berenang'?", a: ["Oyogu koto ga dekimasu", "Oyogi koto ga dekimasu", "Oyogimasu koto ga dekimasu", "Oyogu ga dekimasu"], c: 0 },
                { q: "Lengkapi kalimat berikut: 'Watashi no shumi wa shashin o toru _____ desu.'", a: ["Mono", "Koto", "Hito", "Tokoro"], c: 1 },
                { q: "Terjemahkan kalimat ini: 'Sebelum makan, saya mencuci tangan.'", a: ["Taberu mae ni, te o araimasu", "Tabemasu mae ni, te o araimasu", "Tabete mae ni, te o araimasu", "Shokuji mae ni, te o araimasu"], c: 0 },
                { q: "Jika menggunakan Kata Benda sebelum kata 'mae ni', partikel apa yang wajib disisipkan?", a: ["Ga", "O", "No", "Wa"], c: 2 },
                { q: "Kata keterangan 'Nakanaka' (Jarang/Tidak mudah) harus selalu diikuti oleh kalimat bentuk apa?", a: ["Positif", "Negatif", "Lampau", "Tanya"], c: 1 },
                { q: "Apa arti dari kalimat 'Zehi kite kudasai'?", a: ["Jangan datang", "Mungkin datang", "Tolong benar-benar datang ya", "Tidak bisa datang"], c: 2 },
                { q: "Bentuk kamus dari 'Tabemasu' (Makan) adalah...", a: ["Taberu", "Tabeu", "Tabesu", "Tabemu"], c: 0 },
                { q: "Apa bahasa Jepangnya 'Kepala Bagian' (Manajer)?", a: ["Shachou", "Kachou", "Buchou", "Senpai"], c: 2 }
            ]
        },
        21: {
            title: "Hari 21: Pengalaman, Contoh Aktivitas & Perubahan",
            description: "Belajar menggunakan Kata Kerja Bentuk Ta untuk menyatakan pengalaman masa lalu, menyebutkan daftar beberapa kegiatan, dan menyatakan perubahan kondisi.",
            kotoba: [
                { kanji: '登ります / 上ります', kana: 'のぼります', romaji: 'Noborimasu', arti: 'Naik, mendaki [gunung]' },
                { kanji: '泊まります', kana: 'とまります', romaji: 'Tomarimasu', arti: 'Menginap [di hotel]' },
                { kanji: '掃除します', kana: 'そうじします', romaji: 'Souji shimasu', arti: 'Membersihkan [kamar/rumah]' },
                { kanji: '洗濯します', kana: 'せんたくします', romaji: 'Sentaku shimasu', arti: 'Mencuci pakaian' },
                { kanji: 'なります', kana: 'なります', romaji: 'Narimasu', arti: 'Menjadi' },
                { kanji: '眠い', kana: 'ねむい', romaji: 'Nemui', arti: 'Mengantuk' },
                { kanji: '強い', kana: 'つよい', romaji: 'Tsuyoi', arti: 'Kuat' },
                { kanji: '弱い', kana: 'よわい', romaji: 'Yowai', arti: 'Lemah' },
                { kanji: '練習', kana: 'れんしゅう', romaji: 'Renshuu', arti: 'Latihan (~o shimasu: berlatih)' },
                { kanji: 'ゴルフ', kana: 'ごるふ', romaji: 'Gorufu', arti: 'Golf' },
                { kanji: '相撲', kana: 'すもう', romaji: 'Sumou', arti: 'Gulat Sumo' },
                { kanji: 'お茶', kana: 'おちゃ', romaji: 'Ocha', arti: 'Teh / Upacara minum teh' },
                { kanji: '日', kana: 'ひ', romaji: 'Hi', arti: 'Hari' },
                { kanji: '調子', kana: 'ちょうし', romaji: 'Choushi', arti: 'Kondisi, keadaan (kesehatan/mesin)' },
                { kanji: '一度', kana: 'いちど', romaji: 'Ichido', arti: 'Sekali' },
                { kanji: '一度も', kana: 'いちども', romaji: 'Ichidomo', arti: 'Belum pernah sekali pun (diikuti negatif)' },
                { kanji: 'だんだん', kana: 'だんだん', romaji: 'Dandan', arti: 'Berangsur-angsur, sedikit demi sedikit' },
                { kanji: 'もうすぐ', kana: 'もうすぐ', romaji: 'Mousugu', arti: 'Tidak lama lagi, sebentar lagi' },
                { kanji: 'おかげさまで', kana: 'おかげさまで', romaji: 'Okagesamade', arti: 'Berkat doa/bantuan Anda (Bersyukur)' },
                { kanji: 'でも', kana: 'でも', romaji: 'Demo', arti: 'Tetapi' },
                { kanji: '乾杯', kana: 'かんぱい', romaji: 'Kanpai', arti: 'Bersulang! (Toast)' },
                { kanji: 'ダイエット', kana: 'だいえっと', romaji: 'Daietto', arti: 'Diet (~o shimasu: berdiet)' },
                { kanji: '無理[な]', kana: 'むり', romaji: 'Muri', arti: 'Mustahil, paksa, berlebihan' },
                { kanji: '体にいい', kana: 'からだにいい', romaji: 'Karada ni ii', arti: 'Baik untuk tubuh/kesehatan' }
            ],
            bunpou: [
                {
                    title: "1. Kata Kerja Bentuk Ta (た)",
                    explanation: "Bentuk Ta adalah bentuk lampau biasa. Cara mengubahnya sama persis dengan Kata Kerja Bentuk Te, hanya saja akhiran 'te/de' diganti menjadi 'ta/da'.",
                    formula: "Bentuk て -> Ubah menjadi た/だ",
                    examples: [
                        { jp: "のんで (Nonde) -> のんだ (Nonda)", id: "Minum -> Minum (Lampau)" },
                        { jp: "たべて (Tabete) -> たべた (Tabeta)", id: "Makan -> Makan (Lampau)" },
                        { jp: "して (Shite) -> した (Shita)", id: "Melakukan -> Melakukan (Lampau)" }
                    ]
                },
                {
                    title: "2. Pengalaman Masa Lalu (~ta koto ga arimasu)",
                    explanation: "Digunakan untuk menceritakan pengalaman yang 'pernah' dilakukan di masa lalu. Harus selalu diawali dengan Kata Kerja Bentuk Ta.",
                    formula: "Kata Kerja (Bentuk た) + ことが あります",
                    examples: [
                        { jp: "わたしは たこやきを たべた ことが あります。", id: "Saya pernah makan takoyaki." },
                        { jp: "バリへ いった ことが ありますか。…いいえ、いちども ありません。", id: "Apakah kamu pernah pergi ke Bali? ...Tidak, belum pernah sekali pun." }
                    ]
                },
                {
                    title: "3. Menyebutkan Beberapa Aktivitas (~tari, ~tari shimasu)",
                    explanation: "Saat ingin menyebutkan 2 atau 3 aktivitas sebagai perwakilan dari banyak hal yang kamu lakukan (misal di akhir pekan), gunakan pola ini. Waktu kejadian (sekarang/lampau) ditentukan oleh kata 'shimasu/shimashita' di akhir kalimat.",
                    formula: "KK1 (Bentuk た) り、KK2 (Bentuk た) り します",
                    examples: [
                        { jp: "しゅうまつは かいものを したり、えいがを みたり します。", id: "Akhir pekan saya berbelanja, menonton film, dan lain-lain." },
                        { jp: "きのうは ほんを よんだり、おんがくを きいたり しました。", id: "Kemarin saya membaca buku, mendengarkan musik, dan sebagainya." }
                    ]
                },
                {
                    title: "4. Menyatakan Perubahan (~ni / ~ku narimasu)",
                    explanation: "Kata kerja 'Narimasu' berarti 'Menjadi'. Aturan penggabungannya:\n• Kata Sifat-i: huruf 'i' terakhir diganti 'ku' (contoh: atsui -> atsuku).\n• Kata Sifat-na & Kata Benda: tambahkan partikel 'ni' (contoh: genki -> genki ni).",
                    formula: "KS-i (-i -> く) / KS-na (-na -> に) / KB (+ に) + なります",
                    examples: [
                        { jp: "だんだん さむく なりました。", id: "Berangsur-angsur menjadi dingin." },
                        { jp: "へやが きれいに なりました。", id: "Kamar menjadi bersih." },
                        { jp: "らいねん ２０さいに なります。", id: "Tahun depan saya (menjadi) berumur 20 tahun." }
                    ]
                }
            ],
            quizzes: [
                { q: "Apa Bentuk Ta dari kata kerja 'Nomimasu' (Minum)?", a: ["Nomita", "Nonda", "Nonta", "Notta"], c: 1 },
                { q: "Pola kalimat apa yang digunakan untuk menyatakan 'Pernah melakukan sesuatu'?", a: ["~te koto ga arimasu", "~ta koto ga arimasu", "~nai koto ga arimasu", "~ru koto ga arimasu"], c: 1 },
                { q: "Apa arti 'Ichidomo' jika diikuti kalimat negatif (Ichidomo arimasen)?", a: ["Sering sekali", "Hanya satu kali", "Belum pernah sekali pun", "Kira-kira satu kali"], c: 2 },
                { q: "Terjemahkan: 'Saya pernah mendaki gunung Fuji.'", a: ["Fuji-san ni nobotta koto ga arimasu", "Fuji-san ni noborimasu koto ga arimasu", "Fuji-san o nobotta koto ga arimasu", "Fuji-san e noboru koto ga arimasu"], c: 0 },
                { q: "Bagaimana cara menggabungkan kata sifat 'Atsui' (Panas) dengan kata 'Narimasu' (Menjadi)?", a: ["Atsui ni narimasu", "Atsu narimasu", "Atsuku narimasu", "Atsui ku narimasu"], c: 2 },
                { q: "Apa arti dari kalimat 'Paan o tabetari, koohii o nondari shimasu'?", a: ["Saya hanya makan roti dan minum kopi.", "Saya makan roti, lalu minum kopi.", "Saya makan roti, minum kopi, dan lain-lain.", "Saya makan roti sambil minum kopi."], c: 2 },
                { q: "Perubahan yang benar untuk kata 'Genki' (sehat/KS-na) ditambah 'Narimasu' adalah...", a: ["Genkiku narimasu", "Genki ni narimasu", "Genkina narimasu", "Genki narimasu"], c: 1 },
                { q: "Kata 'Mousugu' memiliki arti...", a: ["Berangsur-angsur", "Sebentar lagi / Tidak lama lagi", "Lama sekali", "Sedikit demi sedikit"], c: 1 },
                { q: "Jika ada yang memuji atau bertanya kabar dan kamu ingin membalas dengan rasa syukur (berkat bantuan/doa), kamu mengucapkan...", a: ["Tadaima", "Okagesamade", "Odaijini", "Kanpai"], c: 1 },
                { q: "Terjemahkan: 'Tahun ini menjadi umur 25 tahun.'", a: ["Kotoshi 25-sai ni narimasu", "Kotoshi 25-sai ku narimasu", "Kotoshi 25-sai narimasu", "Kotoshi 25-sai o narimasu"], c: 0 }
            ]
        },
        22: {
            title: "Hari 22: Bentuk Biasa (Percakapan Kasual & Akrab)",
            description: "Belajar menggunakan Bentuk Biasa (Futsuukei) untuk berbicara santai dengan teman, keluarga, atau bawahan, tanpa menggunakan desu/masu.",
            kotoba: [
                { kanji: '要ります', kana: 'いります', romaji: 'Irimasu', arti: 'Memerlukan, butuh [VISA]' },
                { kanji: '調べます', kana: 'しらべます', romaji: 'Shirabemasu', arti: 'Memeriksa, mencari tahu' },
                { kanji: '修理します', kana: 'しゅうりします', romaji: 'Shuuri shimasu', arti: 'Memperbaiki, mereparasi' },
                { kanji: '僕', kana: 'ぼく', romaji: 'Boku', arti: 'Aku (Kata ganti informal laki-laki)' },
                { kanji: '君', kana: 'きみ', romaji: 'Kimi', arti: 'Kamu (Informal, setara/bawahan)' },
                { kanji: '～君', kana: '～くん', romaji: '~kun', arti: 'Sdr. ~ (Panggilan informal laki-laki)' },
                { kanji: 'うん', kana: 'うん', romaji: 'Un', arti: 'Ya (Informal dari Hai)' },
                { kanji: 'ううん', kana: 'ううん', romaji: 'Uun', arti: 'Tidak (Informal dari Iie)' },
                { kanji: '言葉', kana: 'ことば', romaji: 'Kotoba', arti: 'Kata, bahasa' },
                { kanji: '着物', kana: 'きもの', romaji: 'Kimono', arti: 'Kimono (Pakaian tradisional)' },
                { kanji: 'ビザ', kana: 'びざ', romaji: 'Biza', arti: 'Visa' },
                { kanji: '初め', kana: 'はじめ', romaji: 'Hajime', arti: 'Awal, mula-mula' },
                { kanji: '終わり', kana: 'おわり', romaji: 'Owari', arti: 'Akhir' },
                { kanji: 'こっち', kana: 'こっち', romaji: 'Kocchi', arti: 'Sini (Informal dari Kochira)' },
                { kanji: 'そっち', kana: 'そっち', romaji: 'Socchi', arti: 'Situ (Informal dari Sochira)' },
                { kanji: 'あっち', kana: 'あっち', romaji: 'Acchi', arti: 'Sana (Informal dari Achira)' },
                { kanji: 'どっち', kana: 'どっち', romaji: 'Docchi', arti: 'Mana (Informal dari Dochira)' },
                { kanji: 'みんなで', kana: 'みんなで', romaji: 'Minna de', arti: 'Kita semua, sama-sama' },
                { kanji: '～けど', kana: '～けど', romaji: '~kedo', arti: 'Tetapi (Informal dari ~ga)' },
                { kanji: 'おなかがいっぱいです', kana: 'おなかがいっぱいです', romaji: 'Onaka ga ippai desu', arti: 'Sudah kenyang' },
                { kanji: 'よかったら', kana: 'よかったら', romaji: 'Yokattara', arti: 'Kalau mau, kalau suka' },
                { kanji: 'いろいろ', kana: 'いろいろ', romaji: 'Iroiro', arti: 'Macam-macam' },
                { kanji: 'お勧め', kana: 'おすすめ', romaji: 'Osusume', arti: 'Rekomendasi, saran' },
                { kanji: '厳しい', kana: 'きびしい', romaji: 'Kibishii', arti: 'Tegas, disiplin, ketat' }
            ],
            bunpou: [
                {
                    title: "1. Bentuk Sopan (Teinei) vs Bentuk Biasa (Futsuukei)",
                    explanation: "Bentuk Sopan (~desu / ~masu) dipakai untuk orang yang baru dikenal atau atasan. Bentuk Biasa dipakai untuk teman akrab, keluarga, atau orang yang lebih muda. \nDalam Bentuk Biasa, kamu harus menggunakan:\n1. Kata Kerja -> Bentuk Kamus/Nai/Ta/Nakatta\n2. Kata Sifat-i -> Buang 'desu'\n3. Kata Sifat-na & Benda -> Ganti 'desu' menjadi 'da'.",
                    formula: "Masu -> Kamus | Masen -> Nai | Desu -> Da / Hilang",
                    examples: [
                        { jp: "あした バリへ いく。(Biasa)", id: "Besok pergi ke Bali. (Sopan: ikimasu)" },
                        { jp: "きょうは いそがしい。(Biasa)", id: "Hari ini sibuk. (Sopan: isogashii desu)" },
                        { jp: "アグスさんは がくせいだ。(Biasa)", id: "Agus adalah murid. (Sopan: gakusei desu)" }
                    ]
                },
                {
                    title: "2. Bertanya dengan Nada Naik (Tanpa 'Ka')",
                    explanation: "Dalam percakapan biasa, partikel tanya 'ka' (か) dihilangkan. Sebagai gantinya, ucapkan kata terakhir dengan nada naik (seperti bertanya dalam bahasa Indonesia). Untuk jawaban positif 'Ya' gunakan 'Un', dan negatif 'Tidak' gunakan 'Uun'.",
                    formula: "[Kalimat] ? (Nada Naik)",
                    examples: [
                        { jp: "コーヒー、のむ？ …うん、のむ。", id: "Mau minum kopi? ...Ya, mau minum." },
                        { jp: "きのう えいがを みた？ …ううん、みなかった。", id: "Kemarin nonton film? ...Nggak, nggak nonton." }
                    ]
                },
                {
                    title: "3. Membuang Kata 'Da' Saat Bertanya",
                    explanation: "Khusus untuk Kata Benda dan Kata Sifat-na, jika kamu bertanya, kata 'da' HARUS dihilangkan agar tidak terdengar kasar.",
                    formula: "Tanya: [KB/KS-na]? | Jawab: うん、[KB/KS-na] だ",
                    examples: [
                        { jp: "あした ひま？ …うん、ひまだよ。", id: "Besok luang? ...Ya, luang kok. (TIDAK BOLEH: hima da?)" },
                        { jp: "ううん、ひまじゃない。", id: "Nggak, nggak luang." }
                    ]
                },
                {
                    title: "4. Menghilangkan Partikel & Huruf 'i'",
                    explanation: "Dalam percakapan kasual yang cepat, partikel seperti wa (は), o (を), dan e (へ) sering dibuang jika konteksnya sudah jelas. Selain itu, pada pola '~te iru' (sedang/keadaan), huruf 'i' sering dibuang menjadi '~te ru'.",
                    formula: "ごはん [を] たべる？ | もって [い] る？",
                    examples: [
                        { jp: "かさ、もってる？ …うん、もってる。", id: "Bawa payung? ...Ya, bawa." },
                        { jp: "どこ いくの？ …コンビニ。", id: "Mau pergi ke mana? ...Minimarket." }
                    ]
                },
                {
                    title: "5. Menggunakan 'Kedo' (Tetapi)",
                    explanation: "Kata 'kedo' (けど) adalah bentuk santai dari partikel 'ga' (が) yang berarti 'tetapi'.",
                    formula: "[Kalimat 1] けど、[Kalimat 2]",
                    examples: [
                        { jp: "この ラーメンは からいけど、おいしい。", id: "Ramen ini pedas sih, tapi enak." }
                    ]
                }
            ],
            quizzes: [
                { q: "Apa bahasa Jepangnya 'Ya' dan 'Tidak' dalam percakapan informal (santai)?", a: ["Hai / Iie", "Un / Uun", "Sou / Chigau", "Boku / Kimi"], c: 1 },
                { q: "Apa bentuk biasa (casual) dari 'Ikimasu ka' (Apakah kamu akan pergi)?", a: ["Iku ka?", "Iku?", "Ikanai?", "Itta?"], c: 1 },
                { q: "Bentuk biasa dari 'Gakusei desu' (Adalah murid) adalah...", a: ["Gakusei", "Gakusei da", "Gakusei na", "Gakusei no"], c: 1 },
                { q: "Jika ingin bertanya 'Apakah kamu senggang/luang?' kepada teman akrab, kalimat yang benar adalah:", a: ["Hima da?", "Hima desu?", "Hima?", "Hima na?"], c: 2 },
                { q: "Bentuk biasa (casual) negatif dari 'Kirei desu' (Cantik/Bersih) adalah...", a: ["Kireikunai", "Kirei ja arimasen", "Kirei ja nai", "Kirei nai"], c: 2 },
                { q: "Partikel apa yang paling sering 'dihilangkan' dalam percakapan cepat bahasa Jepang?", a: ["De (で)", "To (と)", "O (を)", "Kara (から)"], c: 2 },
                { q: "Apa arti dari 'Kimi' (君)?", a: ["Aku", "Kamu (informal)", "Dia laki-laki", "Sdr. (formal)"], c: 1 },
                { q: "Kata 'Kedo' dalam kalimat informal memiliki fungsi yang sama dengan partikel apa pada bentuk formal?", a: ["Wa (は)", "Ni (に)", "Ga (が)", "De (で)"], c: 2 },
                { q: "Apa bentuk singkat (informal) dari kalimat 'Jisho o motte imasu ka' (Apakah kamu bawa kamus)?", a: ["Jisho motte ru?", "Jisho motsu?", "Jisho motta?", "Jisho motte iru ka?"], c: 0 },
                { q: "Terjemahkan kalimat santai ini: 'Onaka ga ippai da.'", a: ["Saya lapar.", "Sudah kenyang.", "Perut saya sakit.", "Sedang makan siang."], c: 1 }
            ]
        },
        23: {
            title: "Hari 23: Opini, Kutipan & Persetujuan (~to Omoimasu)",
            description: "Belajar menyatakan pendapat ('Saya pikir...'), mengutip perkataan orang lain ('Dia berkata bahwa...'), dan meminta persetujuan ('...kan?').",
            kotoba: [
                { kanji: '思います', kana: 'おもいます', romaji: 'Omoimasu', arti: 'Mengira, berpikir, berpendapat' },
                { kanji: '言います', kana: 'いいます', romaji: 'Iimasu', arti: 'Mengatakan, berkata' },
                { kanji: '勝ちます', kana: 'かちます', romaji: 'Kachimasu', arti: 'Menang' },
                { kanji: '負けます', kana: 'まけます', romaji: 'Makemasu', arti: 'Kalah' },
                { kanji: 'あります', kana: 'あります', romaji: 'Arimasu', arti: 'Ada, diadakan [Pesta/Perayaan]' },
                { kanji: '役に 立ちます', kana: 'やくに たちます', romaji: 'Yaku ni tachimasu', arti: 'Berguna, bermanfaat' },
                { kanji: '動きます', kana: 'うごきます', romaji: 'Ugokimasu', arti: 'Pindah, bergerak' },
                { kanji: 'やめます', kana: 'やめます', romaji: 'Yamemasu', arti: 'Berhenti [Kerja / dari perusahaan]' },
                { kanji: '気を つけます', kana: 'きを つけます', romaji: 'Ki o tsukemasu', arti: 'Berwaspada, berhati-hati' },
                { kanji: '留学します', kana: 'りゅうがくします', romaji: 'Ryuugaku shimasu', arti: 'Studi di luar negeri' },
                { kanji: 'むだ[な]', kana: 'むだ', romaji: 'Muda', arti: 'Sia-sia, tidak berguna' },
                { kanji: '不便[な]', kana: 'ふべん', romaji: 'Fuben', arti: 'Tidak praktis, tidak praktis' },
                { kanji: 'すごい', kana: 'すごい', romaji: 'Sugoi', arti: 'Hebat, luar biasa' },
                { kanji: 'ほんとう', kana: 'ほんとう', romaji: 'Hontou', arti: 'Betul, benar' },
                { kanji: 'うそ', kana: 'うそ', romaji: 'Uso', arti: 'Bohong' },
                { kanji: '自動車', kana: 'じどうしゃ', romaji: 'Jidousha', arti: 'Mobil' },
                { kanji: '交通', kana: 'こうつう', romaji: 'Koutsuu', arti: 'Lalu lintas' },
                { kanji: '物価', kana: 'ぶっか', romaji: 'Bukka', arti: 'Harga barang' },
                { kanji: '放送', kana: 'ほうそう', romaji: 'Housou', arti: 'Siaran, pengumuman' },
                { kanji: 'ニュース', kana: 'にゅーす', romaji: 'Nyuusu', arti: 'Berita' },
                { kanji: 'アニメ', kana: 'あにめ', romaji: 'Anime', arti: 'Animasi' },
                { kanji: 'マンガ', kana: 'まんが', romaji: 'Manga', arti: 'Manga, komik' },
                { kanji: 'デザイン', kana: 'でざいん', romaji: 'Dezain', arti: 'Desain, model' },
                { kanji: '夢', kana: 'ゆめ', romaji: 'Yume', arti: 'Mimpi' },
                { kanji: '天才', kana: 'てんさい', romaji: 'Tensai', arti: 'Jenius' },
                { kanji: '試合', kana: 'しあい', romaji: 'Shiai', arti: 'Pertandingan' },
                { kanji: '意見', kana: 'いけん', romaji: 'Iken', arti: 'Pendapat' },
                { kanji: '話', kana: 'はなし', romaji: 'Hanashi', arti: 'Cerita (~o shimasu: bercerita)' },
                { kanji: '地球', kana: 'ちきゅう', romaji: 'Chikyuu', arti: 'Bumi' },
                { kanji: '月', kana: 'つき', romaji: 'Tsuki', arti: 'Bulan' },
                { kanji: '最近', kana: 'さいきん', romaji: 'Saikin', arti: 'Akhir-akhir ini' },
                { kanji: 'たぶん', kana: 'たぶん', romaji: 'Tabun', arti: 'Mungkin, barangkali' },
                { kanji: 'きっと', kana: 'きっと', romaji: 'Kitto', arti: 'Pasti' },
                { kanji: 'ほんとうに', kana: 'ほんとうに', romaji: 'Hontou ni', arti: 'Betul-betul' },
                { kanji: 'そんなに', kana: 'そんなに', romaji: 'Sonna ni', arti: 'Tidak begitu (Diikuti bentuk negatif)' },
                { kanji: '～に ついて', kana: '～に ついて', romaji: '~ni tsuite', arti: 'Tentang ~, mengenai ~' },
                { kanji: '久しぶりですね', kana: 'ひさしぶりですね', romaji: 'Hisashiburi desu ne', arti: 'Sudah lama tidak bertemu ya' },
                { kanji: '～でも 飲みませんか', kana: '～でも のみませんか', romaji: '~demo nomimasen ka', arti: 'Bagaimana kalau kita minum ~ atau apa saja?' },
                { kanji: 'もう 帰らないと', kana: 'もう かえらないと', romaji: 'Mou kaeranaito', arti: 'Saya harus pulang...' }
            ],
            bunpou: [
                {
                    title: "1. Menyatakan Opini & Dugaan (~to omoimasu)",
                    explanation: "Gunakan pola ini untuk menyatakan 'Saya pikir / Menurut saya'. Kalimat sebelum partikel と (to) HARUS berbentuk biasa (Futsuukei). Jika isi dugaan negatif, kalimat yang dinegatifkan adalah bagian depannya, bukan kata 'omoimasu'-nya.",
                    formula: "[Kalimat Bentuk Biasa] と 思います",
                    examples: [
                        { jp: "あしたは あめが ふると おもいます。", id: "Saya kira besok akan turun hujan." },
                        { jp: "にほんごは おもしろいと おもいます。", id: "Menurut saya bahasa Jepang itu menarik." },
                        { jp: "アグスさんは こないと おもいます。", id: "Saya rasa Agus tidak akan datang. (Bukan: kuru to omoimasen)" }
                    ]
                },
                {
                    title: "2. Bertanya Pendapat (~ni tsuite dou omoimasu ka)",
                    explanation: "Untuk menanyakan pendapat seseorang mengenai suatu topik/hal, gunakan pola '~ni tsuite' yang artinya 'mengenai/tentang'.",
                    formula: "[Topik] に ついて どう 思いますか",
                    examples: [
                        { jp: "にほんの アニメに ついて どう おもいますか。", id: "Bagaimana pendapatmu tentang anime Jepang?" },
                        { jp: "…すばらしいと おもいます。", id: "...Menurut saya (anime Jepang) luar biasa." }
                    ]
                },
                {
                    title: "3. Mengutip Perkataan (~to iimasu)",
                    explanation: "Digunakan untuk menyampaikan apa yang dikatakan oleh orang lain. \n• Kutipan Langsung: Gunakan tanda kutip 「」 sama persis seperti yang diucapkan.\n• Kutipan Tidak Langsung: Ubah kalimat yang diucapkan menjadi Bentuk Biasa.",
                    formula: "Kutipan Langsung: 「～」と 言います / Kutipan Tdk Langsung: [Bentuk Biasa] と 言います",
                    examples: [
                        { jp: "ねる まえに、「おやすみなさい」と いいます。", id: "Sebelum tidur, kita mengucapkan 'Oyasuminasai'." },
                        { jp: "さくらさんは らいげつ けっこんすると いいました。", id: "Sakura berkata bahwa dia akan menikah bulan depan." }
                    ]
                },
                {
                    title: "4. Meminta Persetujuan (~deshou?)",
                    explanation: "Diucapkan dengan nada naik di akhir kalimat. Fungsinya mirip dengan kata '...kan?' atau '...bukan?' dalam bahasa Indonesia. \n*Catatan: Jika memakai KB atau KS-na, hilangkan 'da' sebelum 'deshou'.",
                    formula: "[Bentuk Biasa tanpa 'da'] でしょう？ (Nada Naik)",
                    examples: [
                        { jp: "この ケーキ、おいしいでしょう？", id: "Kue ini, enak kan?" },
                        { jp: "きのうの パーティーは にぎやかだったでしょう？", id: "Pesta kemarin ramai kan?" }
                    ]
                },
                {
                    title: "5. Acara/Peristiwa Diadakan (Partikel で)",
                    explanation: "Kata 'arimasu' biasanya memakai partikel 'ni' untuk tempat. TETAPI, jika 'arimasu' berarti 'diadakan' (seperti pesta, festival, pertandingan), tempatnya HARUS ditandai dengan partikel 'de'.",
                    formula: "[Tempat] で [Acara/Peristiwa] が あります",
                    examples: [
                        { jp: "あした ジャカルタで サッカーの しあいが あります。", id: "Besok ada pertandingan sepak bola di Jakarta." }
                    ]
                },
                {
                    title: "6. Ajakan Kasual (~demo / ~naito)",
                    explanation: "• ～でも (~demo): Menawarkan sesuatu tanpa membatasi (contoh: Kopi atau semacamnya). \n• ～ないと (~naito): Bentuk kasual dari '~nakereba narimasen' (Harus...).",
                    formula: "[Kata Benda] でも / [Kata Kerja Nai] と",
                    examples: [
                        { jp: "おちゃでも のみませんか。", id: "Bagaimana kalau kita minum teh atau semacamnya?" },
                        { jp: "あ、もう １０じです。かえらないと…。", id: "Ah, sudah jam 10. Saya harus pulang..." }
                    ]
                }
            ],
            quizzes: [
                { q: "Apa arti dari 'Omoimasu'?", a: ["Berkata", "Mengira / Berpendapat", "Memikirkan masa lalu", "Menang"], c: 1 },
                { q: "Kalimat sebelum kata '~to omoimasu' HARUS menggunakan bentuk apa?", a: ["Bentuk Masu", "Bentuk Biasa (Futsuukei)", "Bentuk Te", "Bentuk Sopan"], c: 1 },
                { q: "Terjemahkan: 'Menurut saya, besok akan hujan.'", a: ["Ashita wa ame ga furu to omoimasu", "Ashita wa ame ga furimasu to omoimasu", "Ashita wa ame da to omoimasu", "Ashita wa ame ga futta to omoimasu"], c: 0 },
                { q: "Bagaimana cara menanyakan 'Bagaimana pendapatmu tentang...?'", a: ["~ni tsuite nani o omoimasu ka", "~ni tsuite dou omoimasu ka", "~ni tsuite doko omoimasu ka", "~ni tsuite itsu omoimasu ka"], c: 1 },
                { q: "Kata apa yang digunakan untuk mengutip perkataan orang lain ('Dia berkata bahwa...')?", a: ["Omoimasu", "Arimasu", "Iimasu", "Kachimasu"], c: 2 },
                { q: "Lengkapi kalimat ini: 'Sore wa hontou _____ deshou?' (Itu benar, kan?)", a: ["Da", "Na", "Desu", "(Tidak perlu tambahan)"], c: 3 },
                { q: "Jika 'arimasu' berarti 'DIADAKAN' (misalnya untuk konser atau festival), partikel penanda tempatnya adalah...", a: ["Ni (に)", "E (へ)", "De (で)", "O (を)"], c: 2 },
                { q: "Apa bahasa Jepangnya 'Lalu lintas'?", a: ["Bukka", "Koutsuu", "Jidousha", "Housou"], c: 1 },
                { q: "Apa arti ungkapan 'Mou kaeranaito...'?", a: ["Saya belum mau pulang.", "Saya tidak boleh pulang.", "Saya harus pulang.", "Silakan pulang."], c: 2 },
                { q: "Kata ganti penawaran kasual pada kalimat 'Koohii _____ nomimasen ka' (Bagaimana kalau minum kopi atau semacamnya?) adalah...", a: ["To", "Mo", "Demo", "Kara"], c: 2 }
            ]
        },
        24: {
            title: "Hari 24: Anak Kalimat & Kata Kerja Memakai",
            description: "Belajar cara menerangkan kata benda dengan kalimat (Relative Clause), berbagai jenis kata kerja untuk 'memakai' pakaian, dan menyatakan janji/waktu.",
            kotoba: [
                { kanji: '着ます', kana: 'きます', romaji: 'Kimasu', arti: 'Memakai (Kemeja, jaket, pakaian atas)' },
                { kanji: 'はきます', kana: 'はきます', romaji: 'Hakimasu', arti: 'Memakai (Sepatu, celana, pakaian bawah)' },
                { kanji: 'かぶります', kana: 'かぶります', romaji: 'Kaburimasu', arti: 'Memakai (Topi, penutup kepala)' },
                { kanji: 'かけます', kana: 'かけます', romaji: 'Kakemasu', arti: 'Memakai [Kacamata] (megane o~)' },
                { kanji: 'します', kana: 'します', romaji: 'Shimasu', arti: 'Memakai [Dasi, aksesoris] (nekutai o~)' },
                { kanji: '生まれます', kana: 'うまれます', romaji: 'Umaremasu', arti: 'Lahir' },
                { kanji: '私たち', kana: 'わたしたち', romaji: 'Watashitachi', arti: 'Kami, kita' },
                { kanji: 'コート', kana: 'こーと', romaji: 'Kooto', arti: 'Mantel' },
                { kanji: 'セーター', kana: 'せーたー', romaji: 'Seetaa', arti: 'Sweater, baju hangat' },
                { kanji: 'スーツ', kana: 'すーつ', romaji: 'Suutsu', arti: 'Pakaian setelan / Jas' },
                { kanji: '帽子', kana: 'ぼうし', romaji: 'Boushi', arti: 'Topi' },
                { kanji: '眼鏡', kana: 'めがね', romaji: 'Megane', arti: 'Kacamata' },
                { kanji: 'ケーキ', kana: 'けーき', romaji: 'Keeki', arti: 'Kue' },
                { kanji: '[お]弁当', kana: '[お]べんとう', romaji: '[O]bentou', arti: 'Bekal makanan' },
                { kanji: 'ロボット', kana: 'ろぼっと', romaji: 'Robotto', arti: 'Robot' },
                { kanji: 'ユーモア', kana: 'ゆーもあ', romaji: 'Yuumoa', arti: 'Humor' },
                { kanji: '都合', kana: 'つごう', romaji: 'Tsugou', arti: 'Kondisi, keadaan (jadwal/waktu)' },
                { kanji: 'よく', kana: 'よく', romaji: 'Yoku', arti: 'Sering kali, dengan baik' },
                { kanji: 'えーと', kana: 'えーと', romaji: 'Eeto', arti: 'Itu... / Anu... (Gumam saat berpikir)' },
                { kanji: 'おめでとう', kana: 'おめでとう', romaji: 'Omedetou', arti: 'Selamat! (Ulang tahun, pernikahan)' },
                { kanji: 'お探しですか', kana: 'おさがしですか', romaji: 'Osagashi desu ka', arti: 'Sedang mencari apa?' },
                { kanji: 'では', kana: 'では', romaji: 'Dewa', arti: 'Kalau begitu' },
                { kanji: 'こちら', kana: 'こちら', romaji: 'Kochira', arti: 'Ini (Ungkapan sopan dari kore/kocchi)' },
                { kanji: '家賃', kana: 'やちん', romaji: 'Yachin', arti: 'Biaya sewa rumah' },
                { kanji: 'ダイニングキッチン', kana: 'だいにんぐきっちん', romaji: 'Dainingu kicchin', arti: 'Ruang makan dengan dapur' },
                { kanji: '和室', kana: 'わしつ', romaji: 'Washitsu', arti: 'Kamar ala Jepang' },
                { kanji: '押し入れ', kana: 'おしいれ', romaji: 'Oshiire', arti: 'Lemari dinding ala Jepang' },
                { kanji: '布団', kana: 'ふとん', romaji: 'Futon', arti: 'Selimut dan kasur lantai ala Jepang' }
            ],
            bunpou: [
                {
                    title: "1. Menerangkan Kata Benda (Anak Kalimat)",
                    explanation: "Dalam bahasa Jepang, kalimat yang menerangkan suatu benda Diletakkan DI DEPAN benda tersebut. Kalimat penerang ini HARUS dalam Bentuk Biasa (Futsuukei).\n• Jika yang menerangkan adalah KS-na, tambahkan 'na'. Jika Kata Benda, tambahkan 'no'.",
                    formula: "[Anak Kalimat Bentuk Biasa] + Kata Benda",
                    examples: [
                        { jp: "これは わたしが つくった ケーキです。", id: "Ini adalah kue yang saya buat." },
                        { jp: "きのう かった パソコンは とても たかいです。", id: "Laptop yang (saya) beli kemarin sangat mahal." }
                    ]
                },
                {
                    title: "2. Partikel Subjek dalam Anak Kalimat (が)",
                    explanation: "Dalam anak kalimat yang menerangkan kata benda, subjek tidak lagi menggunakan partikel 'wa' (は), melainkan HARUS diganti dengan partikel 'ga' (が).",
                    formula: "[Subjek] が [Kata Kerja Biasa] + Kata Benda",
                    examples: [
                        { jp: "ははが つくった おべんとうを たべました。", id: "Saya makan bekal yang dibuat oleh ibu." },
                        { jp: "わたしが すんでいる まちは バンドンです。", id: "Kota tempat saya tinggal adalah Bandung." }
                    ]
                },
                {
                    title: "3. Macam-macam Kata Kerja 'Memakai'",
                    explanation: "Bahasa Jepang memiliki banyak kata kerja untuk 'memakai' tergantung bagian tubuhnya:\n1. 着ます (Kimasu): Pakaian atas (Kemeja, kaos, jaket).\n2. はきます (Hakimasu): Pakaian bawah/kaki (Celana, rok, sepatu).\n3. かぶります (Kaburimasu): Penutup kepala (Topi).\n4. かけます (Kakemasu): Di telinga/mata (Kacamata).\n5. します (Shimasu): Aksesoris (Dasi, jam tangan, kalung).",
                    formula: "[Benda] を [Kimasu/Hakimasu/Kaburimasu/dll]",
                    examples: [
                        { jp: "あおい シャツを きた ひとが さくらさんです。", id: "Orang yang memakai kemeja biru adalah Sakura." },
                        { jp: "くろい くつを はいて います。", id: "Sedang memakai sepatu hitam." }
                    ]
                },
                {
                    title: "4. Menyatakan Waktu (jikan), Janji (yakusoku), Urusan (youji)",
                    explanation: "Untuk menyatakan tujuan dari waktu, janji, atau urusan yang kamu miliki, letakkan Kata Kerja Bentuk Kamus di depannya.",
                    formula: "Kata Kerja (Bentuk Kamus) + 時間 / 約束 / 用事 が あります",
                    examples: [
                        { jp: "きょうは ほんを よむ じかんが ありません。", id: "Hari ini tidak ada waktu untuk membaca buku." },
                        { jp: "ともだちと えいがを みる やくそくが あります。", id: "Saya punya janji menonton film bersama teman." },
                        { jp: "しやくしょへ いく ようじが あります。", id: "Saya ada urusan pergi ke balai kota." }
                    ]
                }
            ],
            quizzes: [
                { q: "Kata kerja apa yang digunakan untuk 'memakai celana' atau 'memakai sepatu'?", a: ["Kimasu", "Hakimasu", "Kakemasu", "Kaburimasu"], c: 1 },
                { q: "Kata kerja apa yang digunakan untuk 'memakai topi'?", a: ["Shimasu", "Kimasu", "Kakemasu", "Kaburimasu"], c: 3 },
                { q: "Dalam Anak Kalimat (Relative Clause), partikel penanda subjek (seperti 'Watashi') berubah dari 'Wa' menjadi...", a: ["O (を)", "De (で)", "Ni (に)", "Ga (が)"], c: 3 },
                { q: "Terjemahkan ke dalam bahasa Jepang: 'Kue yang dibuat oleh Tanaka.'", a: ["Tanaka-san ga tsukutta keeki", "Tanaka-san tsukutta keeki", "Keeki ga tsukutta Tanaka-san", "Keeki wa Tanaka-san ga tsukutta"], c: 0 },
                { q: "Apa bahasa Jepangnya 'Orang yang tidak pergi'?", a: ["Iku hito", "Ikanai hito", "Itte hito", "Ikanakatta hito"], c: 1 },
                { q: "Bagaimana cara menyusun 'Tidak ada waktu untuk sarapan'?", a: ["Asagohan o taberu jikan ga arimasen", "Asagohan o tabeta jikan ga arimasen", "Asagohan o tabete jikan ga arimasen", "Jikan ga asagohan o taberu arimasen"], c: 0 },
                { q: "Apa arti kata 'Umaremasu'?", a: ["Bekerja", "Menikah", "Lahir", "Memakai"], c: 2 },
                { q: "Apa bahasa Jepangnya 'Kamar ala Jepang'?", a: ["Dainingu kicchin", "Washitsu", "Oshiire", "Futon"], c: 1 },
                { q: "Terjemahkan: 'Tomodachi to asobu yakusoku ga arimasu.'", a: ["Ada urusan pergi dengan teman.", "Ada janji bermain dengan teman.", "Tidak ada waktu bermain dengan teman.", "Ada teman yang bermain."], c: 1 },
                { q: "Jika mendeskripsikan 'Buku yang dibeli kemarin', bentuk kata kerja yang digunakan adalah...", a: ["Kau", "Katta", "Kawanai", "Katte"], c: 1 }
            ]
        },
        25: {
            title: "Hari 25: Menyatakan Waktu (Ketika) & Syarat (Kalau)",
            description: "Belajar cara menyatakan 'Ketika/Saat' (~toki) dalam berbagai kondisi, 'Kalau/Jika' (~to) untuk kepastian/petunjuk arah, dan partikel untuk area yang dilewati.",
            kotoba: [
                { kanji: '聞きます', kana: 'ききます', romaji: 'Kikimasu', arti: 'Bertanya [kepada guru: sensei ni~]' },
                { kanji: '回します', kana: 'まわします', romaji: 'Mawashimasu', arti: 'Memutar' },
                { kanji: '引きます', kana: 'ひきます', romaji: 'Hikimasu', arti: 'Menarik' },
                { kanji: '変えます', kana: 'かえます', romaji: 'Kaemasu', arti: 'Mengubah' },
                { kanji: '触ります', kana: 'さわります', romaji: 'Sawarimasu', arti: 'Memegang, menyentuh [pintu: doa ni~]' },
                { kanji: '出ます', kana: 'でます', romaji: 'Demasu', arti: 'Keluar [uang kembalian: otsuri ga~]' },
                { kanji: '歩きます', kana: 'あるきます', romaji: 'Arukimasu', arti: 'Berjalan kaki' },
                { kanji: '渡ります', kana: 'わたります', romaji: 'Watarimasu', arti: 'Menyeberang [jembatan: hashi o~]' },
                { kanji: '曲がります', kana: 'まがります', romaji: 'Magarimasu', arti: 'Belok [ke kanan: migi e~]' },
                { kanji: '引っ越します', kana: 'ひっこしします', romaji: 'Hikkoshi shimasu', arti: 'Pindah rumah' },
                { kanji: '寂しい', kana: 'さびしい', romaji: 'Sabishii', arti: 'Sepi, kesepian' },
                { kanji: '[お]湯', kana: '[お]ゆ', romaji: '[O]yu', arti: 'Air panas' },
                { kanji: '音', kana: 'おと', romaji: 'Oto', arti: 'Bunyi, suara' },
                { kanji: 'サイズ', kana: 'さいず', romaji: 'Saizu', arti: 'Ukuran' },
                { kanji: '故障', kana: 'こしょう', romaji: 'Koshou', arti: 'Kerusakan (~shimasu: rusak)' },
                { kanji: '道', kana: 'みち', romaji: 'Michi', arti: 'Jalan' },
                { kanji: '交差点', kana: 'こうさてん', romaji: 'Kousaten', arti: 'Perempatan' },
                { kanji: '信号', kana: 'しんごう', romaji: 'Shingou', arti: 'Lampu lalu lintas / Tanda' },
                { kanji: '角', kana: 'かど', romaji: 'Kado', arti: 'Sudut, belokan' },
                { kanji: '橋', kana: 'はし', romaji: 'Hashi', arti: 'Jembatan' },
                { kanji: '駐車場', kana: 'ちゅうしゃじょう', romaji: 'Chuushajou', arti: 'Tempat parkir' },
                { kanji: '建物', kana: 'たてもの', romaji: 'Tatemono', arti: 'Gedung, bangunan' },
                { kanji: '何回も', kana: 'なんかいも', romaji: 'Nankaimo', arti: 'Berkali-kali' },
                { kanji: '～目', kana: '～め', romaji: '~me', arti: 'Yang ke - (menunjukkan urutan)' }
            ],
            bunpou: [
                {
                    title: "1. Menyatakan 'Ketika' atau 'Saat' (~Toki)",
                    explanation: "Gunakan kata とき (toki) untuk menyambung dua kalimat yang menunjukkan waktu suatu keadaan/aksi terjadi. Aturan penggabungannya:\n• Kata Kerja: Gunakan Bentuk Biasa (Kamus / Nai / Ta) + とき\n• Kata Sifat-i: + とき (contoh: samui toki)\n• Kata Sifat-na: + な とき (contoh: hima na toki)\n• Kata Benda: + の とき (contoh: kodomo no toki)",
                    formula: "[KK Biasa / KS-i / KS-na + な / KB + の] + とき、～",
                    examples: [
                        { jp: "ほんを よむ とき、めがねを かけます。", id: "Ketika membaca buku, (saya) memakai kacamata." },
                        { jp: "つかれた とき、はやく ねます。", id: "Saat lelah, (saya) tidur cepat." },
                        { jp: "ひまな とき、ゲームを します。", id: "Saat senggang, (saya) bermain game." },
                        { jp: "こどもの とき、よく かわで およぎました。", id: "Ketika anak-anak, (saya) sering berenang di sungai." }
                    ]
                },
                {
                    title: "2. Menunjukkan Syarat Pasti / 'Kalau' (~To)",
                    explanation: "Partikel と (to) di sini berbeda dengan 'dan' atau 'bersama'. Jika diletakkan SETELAH Kata Kerja Bentuk Kamus, artinya menjadi 'Kalau' atau 'Jika'. Pola ini digunakan untuk hal yang PASTI TERJADI jika syaratnya dipenuhi, seperti cara kerja mesin, fenomena alam, atau petunjuk jalan.",
                    formula: "Kata Kerja (Bentuk Kamus) + と、～",
                    examples: [
                        { jp: "この ボタンを おすと、おつりが でます。", id: "Kalau menekan tombol ini, uang kembalian akan keluar." },
                        { jp: "まっすぐ いくと、みぎに ぎんこうが あります。", id: "Kalau pergi lurus, di sebelah kanan ada bank." }
                    ]
                },
                {
                    title: "3. Partikel 'O' (を) untuk Ruang/Area yang Dilewati",
                    explanation: "Biasanya partikel 'O' menandakan objek. Namun, untuk kata kerja yang menunjukkan pergerakan (seperti berjalan, menyeberang, terbang), partikel 'O' digunakan untuk menandai TEMPAT atau AREA yang dilewati.",
                    formula: "[Tempat/Area] を [Kata Kerja Berpindah]",
                    examples: [
                        { jp: "まいあさ こうえんを さんぽします。", id: "Setiap pagi berjalan-jalan di taman." },
                        { jp: "あの はしを わたって ください。", id: "Tolong seberangi jembatan itu." },
                        { jp: "こうさてんを みぎへ まがります。", id: "Belok ke kanan di perempatan." }
                    ]
                }
            ],
            quizzes: [
                { q: "Apa bahasa Jepangnya 'Ketika sakit' (Sakit: Byouki/Kata Benda)?", a: ["Byouki toki", "Byouki na toki", "Byouki no toki", "Byouki ni toki"], c: 2 },
                { q: "Lengkapi kalimat: 'Wakaranai ____, sensei ni kikimasu.' (Ketika tidak mengerti, bertanya pada guru.)", a: ["To", "Toki", "Koto", "Mae ni"], c: 1 },
                { q: "Jika menggabungkan Kata Sifat-na (contoh: Hima) dengan 'Toki', apa yang harus disisipkan?", a: ["No", "Da", "Na", "(Tidak ada)"], c: 2 },
                { q: "Pola 'Kata Kerja Kamus + と (To)' digunakan untuk menyatakan:", a: ["Keinginan", "Kalau / Jika (Hal yang pasti terjadi)", "Bersama-sama", "Setelah melakukan"], c: 1 },
                { q: "Terjemahkan: 'Kalau memutar ini, suaranya akan membesar.'", a: ["Kore o mawasu to, oto ga ookiku narimasu", "Kore o mawashite, oto ga ookiku narimasu", "Kore o mawasu toki, oto ga ookiku narimasu", "Kore o mawashita to, oto ga ookiku narimasu"], c: 0 },
                { q: "Partikel apa yang digunakan untuk menandai area yang diseberangi pada kalimat 'Hashi ___ watarimasu' (Menyeberang jembatan)?", a: ["Ni (に)", "De (で)", "E (へ)", "O (を)"], c: 3 },
                { q: "Apa bahasa Jepangnya 'Perempatan'?", a: ["Kousaten", "Shingou", "Kado", "Michi"], c: 0 },
                { q: "Apa arti dari 'Sawarimasu'?", a: ["Berjalan", "Menyentuh / Memegang", "Menarik", "Memutar"], c: 1 },
                { q: "Apa arti kosakata 'Hikkoshi shimasu'?", a: ["Menyeberang jalan", "Memperbaiki barang", "Pindah rumah", "Berhenti kerja"], c: 2 },
                { q: "Terjemahkan instruksi jalan ini: 'Kousaten o migi e magarimasu.'", a: ["Lurus di perempatan", "Belok ke kanan di perempatan", "Menyeberang di perempatan", "Belok ke kiri di perempatan"], c: 1 }
            ]
        },
        26: {
            title: "Hari 26: Menerima & Memberi Bantuan (~Te Agemasu, Moraimasu, Kuremasu)",
            description: "Belajar mengungkapkan aksi saling membantu. Menyatakan rasa terima kasih atas bantuan orang lain, dan kata 'Kuremasu' yang khusus digunakan jika SAYA adalah penerimanya.",
            kotoba: [
                { kanji: 'くれます', kana: 'くれます', romaji: 'Kuremasu', arti: 'Diberikan (kepada SAYA)' },
                { kanji: '直します', kana: 'なおします', romaji: 'Naoshimasu', arti: 'Memperbaiki, mengoreksi' },
                { kanji: '連れて 行きます', kana: 'つれて いきます', romaji: 'Tsurete ikimasu', arti: 'Membawa pergi, mengajak pergi [orang]' },
                { kanji: '連れて 来ます', kana: 'つれて きます', romaji: 'Tsurete kimasu', arti: 'Membawa datang, mengajak datang [orang]' },
                { kanji: '送ります', kana: 'おくります', romaji: 'Okurimasu', arti: 'Mengantar [orang]' },
                { kanji: '紹介します', kana: 'しょうかいします', romaji: 'Shoukai shimasu', arti: 'Memperkenalkan' },
                { kanji: '案内します', kana: 'あんないします', romaji: 'Annai shimasu', arti: 'Memandu, mengantarkan (ke suatu tempat)' },
                { kanji: '説明します', kana: 'せつめいします', romaji: 'Setsumei shimasu', arti: 'Menjelaskan, menerangkan' },
                { kanji: 'おじいさん / おじいちゃん', kana: 'おじいさん / おじいちゃん', romaji: 'Ojiisan / Ojiichan', arti: 'Kakek' },
                { kanji: 'おばあさん / おばあちゃん', kana: 'おばあさん / おばあちゃん', romaji: 'Obaasan / Obaachan', arti: 'Nenek' },
                { kanji: '準備', kana: 'じゅんび', romaji: 'Junbi', arti: 'Persiapan (~o shimasu: mempersiapkan)' },
                { kanji: '引っ越し', kana: 'ひっこし', romaji: 'Hikkoshi', arti: 'Pindah rumah (~o shimasu: pindah)' },
                { kanji: '[お]菓子', kana: '[お]かし', romaji: '[O]kashi', arti: 'Kue / Makanan ringan' },
                { kanji: 'ホームステイ', kana: 'ほーむすてい', romaji: 'Hoomusutei', arti: 'Homestay' },
                { kanji: '全部', kana: 'ぜんぶ', romaji: 'Zenbu', arti: 'Semua' },
                { kanji: '自分で', kana: 'じぶんで', romaji: 'Jibun de', arti: 'Dengan (melakukan) sendiri' },
                { kanji: '彼氏 / 恋人', kana: 'かれし / こいびと', romaji: 'Kareshi / Koibito', arti: 'Pacar (Laki-laki) / Kekasih' },
                { kanji: 'ほかに', kana: 'ほかに', romaji: 'Hoka ni', arti: 'Selain, yang lain' },
                { kanji: '母の日', kana: 'ははのひ', romaji: 'Haha no hi', arti: 'Hari Ibu' }
            ],
            bunpou: [
                {
                    title: "1. Kata Kerja Kuremasu (Memberikan ke SAYA)",
                    explanation: "Kata 'Kuremasu' sama artinya dengan 'Agemasu' (Memberi). TETAPI, 'Kuremasu' HANYA boleh digunakan jika si penerima benda tersebut adalah SAYA atau keluarga SAYA. Karena penerimanya pasti SAYA, partikel 'Watashi ni' sering dihilangkan.",
                    formula: "[Orang Lain] は (わたしに) [Benda] を くれます",
                    examples: [
                        { jp: "さくらさんは（わたしに）チョコレートを くれました。", id: "Sakura memberikan (saya) cokelat." },
                        { jp: "ちちは（わたしに）とけいを くれました。", id: "Ayah memberikan (saya) jam tangan." }
                    ]
                },
                {
                    title: "2. Melakukan Bantuan untuk Orang Lain (~te agemasu)",
                    explanation: "Digunakan ketika kita (atau seseorang) melakukan suatu kebaikan/bantuan untuk orang lain. \n*Catatan: Sebaiknya hindari menggunakan pola ini langsung kepada atasan, karena bisa terkesan sombong (lebih baik tawarkan bantuan dengan ~mashou ka).",
                    formula: "[Pelaku] は [Penerima Bantuan] に [KK Bentuk て] あげます",
                    examples: [
                        { jp: "わたしは アグスさんに かさを かして あげました。", id: "Saya meminjamkan payung kepada Agus (sebagai bantuan)." },
                        { jp: "わたしは こどもの しゅくだいを てつだって あげます。", id: "Saya membantu (mengerjakan) PR anak." }
                    ]
                },
                {
                    title: "3. Menerima Kebaikan dari Orang Lain (~te moraimasu)",
                    explanation: "Pola ini digunakan dari sudut pandang si PENERIMA bantuan. Menunjukkan rasa syukur karena orang lain telah melakukan sesuatu untuk kita. Partikel penanda si penolong adalah に (ni).",
                    formula: "[Penerima] は [Penolong] に [KK Bentuk て] もらいます",
                    examples: [
                        { jp: "わたしは 先生に にほんごを おしえて もらいました。", id: "Saya diajarkan bahasa Jepang oleh Guru (Saya menerima kebaikan guru yang mengajar)." },
                        { jp: "わたしは 友だちに えきまで おくって もらいました。", id: "Saya diantar sampai stasiun oleh teman." }
                    ]
                },
                {
                    title: "4. Orang Lain Menolong SAYA (~te kuremasu)",
                    explanation: "Sama maknanya dengan pola '~te moraimasu', namun di sini yang menjadi SUBJEK (は) adalah si PENOLONG. Sekali lagi, penerima bantuannya PASTI SAYA, jadi 'watashi ni' bisa dibuang.",
                    formula: "[Penolong] は (わたしに) [KK Bentuk て] くれます",
                    examples: [
                        { jp: "先生は（わたしに）にほんごを おしえて くれました。", id: "Guru mengajarkan bahasa Jepang (kepada saya)." },
                        { jp: "母は（わたしに）セーターを おくって くれました。", id: "Ibu mengirimkan sweater (kepada saya)." }
                    ]
                }
            ],
            quizzes: [
                { q: "Apa perbedaan 'Agemasu' dan 'Kuremasu'?", a: ["Kuremasu untuk benda mahal", "Agemasu hanya untuk benda, Kuremasu untuk jasa", "Kuremasu KHUSUS dipakai jika penerimanya adalah SAYA", "Agemasu KHUSUS dipakai jika penerimanya adalah SAYA"], c: 2 },
                { q: "Terjemahkan: 'Tanaka memberikan saya kado.'", a: ["Tanaka-san wa purezento o agemashita", "Tanaka-san wa purezento o kuremashita", "Tanaka-san wa purezento o moraimashita", "Watashi wa Tanaka-san ni purezento o kuremashita"], c: 1 },
                { q: "Dalam pola kalimat '~te moraimasu' (menerima bantuan), orang yang menolong ditandai dengan partikel apa?", a: ["O (を)", "Wa (は)", "Ni (に) / Kara (から)", "Ga (が)"], c: 2 },
                { q: "Mengapa kita harus berhati-hati menggunakan pola '~te agemasu' kepada atasan?", a: ["Karena bahasanya terlalu kasar", "Karena bisa terkesan sombong (seolah memamerkan kebaikan)", "Karena artinya 'meminta bantuan'", "Karena atasan tidak boleh ditolong"], c: 1 },
                { q: "Apa arti dari 'Annai shimasu'?", a: ["Memperkenalkan orang", "Menjelaskan pelajaran", "Mengantarkan/memandu ke suatu tempat", "Membawa barang"], c: 2 },
                { q: "Terjemahkan kalimat ini: 'Pacar (laki-laki) membawakan tas saya.'", a: ["Kareshi wa kaban o motte kuremashita", "Kareshi wa kaban o motte moraimashita", "Kareshi wa kaban o motte agemashita", "Kareshi ni kaban o motte kuremashita"], c: 0 },
                { q: "Apa bahasa Jepangnya 'Mengerjakan sendiri / Dengan sendiri'?", a: ["Zenbu", "Jibun de", "Hoka ni", "Junbi"], c: 1 },
                { q: "Perbedaan 'Tsurete ikimasu' dan 'Motte ikimasu' adalah...", a: ["Tsurete ikimasu untuk orang/hewan, Motte ikimasu untuk benda mati", "Tidak ada bedanya", "Tsurete ikimasu untuk membawa datang, Motte ikimasu membawa pergi", "Tsurete ikimasu lebih sopan"], c: 0 },
                { q: "Lengkapi: 'Watashi wa tomodachi ___ pashokon o naoshite moraimashita.' (Saya dibantu perbaiki laptop oleh teman)", a: ["Wa", "Ga", "O", "Ni"], c: 3 },
                { q: "Apa arti kosakata 'Okashi'?", a: ["Kakek", "Makanan ringan / Kue", "Pindah rumah", "Menjelaskan"], c: 1 }
            ]
        },
        27: {
            title: "Hari 27: Pengandaian & Paradoks (~Tara & ~Te mo)",
            description: "Bab Penutup N5! Belajar menyatakan pengandaian 'Kalau/Jika' menggunakan bentuk ~Tara, menyatakan aksi 'Kalau sudah...', dan menyatakan 'Walaupun' dengan bentuk ~Te mo.",
            kotoba: [
                { kanji: '考えます', kana: 'かんがえます', romaji: 'Kangaemasu', arti: 'Berpikir, memikirkan' },
                { kanji: '着きます', kana: 'つきます', romaji: 'Tsukimasu', arti: 'Tiba, sampai' },
                { kanji: '取ります', kana: 'とります', romaji: 'Torimasu', arti: 'Berumur, bertambah usia [toshi o~]' },
                { kanji: '足ります', kana: 'たります', romaji: 'Tarimasu', arti: 'Cukup' },
                { kanji: '田舎 / 村', kana: 'いなか / むら', romaji: 'Inaka / Mura', arti: 'Desa, kampung halaman' },
                { kanji: 'チャンス / 機会', kana: 'ちゃんす / きかい', romaji: 'Chansu / Kikai', arti: 'Kesempatan' },
                { kanji: '億', kana: 'おく', romaji: 'Oku', arti: 'Ratus juta' },
                { kanji: 'もし [～たら]', kana: 'もし', romaji: 'Moshi', arti: 'Kalau, seandainya' },
                { kanji: '意味', kana: 'いみ', romaji: 'Imi', arti: 'Arti, makna' },
                { kanji: 'ずっと', kana: 'ずっと', romaji: 'Zutto', arti: 'Selamanya / Jauh lebih' },
                { kanji: '田んぼ', kana: 'たんぼ', romaji: 'Tanbo', arti: 'Sawah' },
                { kanji: '自信', kana: 'じしん', romaji: 'Jishin', arti: 'Percaya diri' },
                { kanji: '今回', kana: 'こんかい', romaji: 'Konkai', arti: 'Kali ini' },
                { kanji: '今度', kana: 'こんど', romaji: 'Kondo', arti: 'Lain kali' },
                { kanji: 'もしもし', kana: 'もしもし', romaji: 'Moshi moshi', arti: 'Halo (digunakan ketika menelepon)' },
                { kanji: '転勤', kana: 'てんきん', romaji: 'Tenkin', arti: 'Pindah kantor / jabatan (~shimasu)' },
                { kanji: 'こと', kana: 'こと', romaji: 'Koto', arti: 'Hal (~no koto: hal tentang ~)' },
                { kanji: 'お世話に なりました', kana: 'おせわに なりました', romaji: 'Osewa ni narimashita', arti: 'Terima kasih atas bantuan Anda selama ini' },
                { kanji: '頑張ります', kana: 'がんばります', romaji: 'Ganbarimasu', arti: 'Berusaha, bekerja keras' },
                { kanji: 'どうぞ お元気で', kana: 'どうぞ おげんきで', romaji: 'Douzo ogenki de', arti: 'Semoga sehat-sehat selalu (Ucapan perpisahan)' }
            ],
            bunpou: [
                {
                    title: "1. Menyatakan Pengandaian 'Kalau / Jika' (~Tara)",
                    explanation: "Digunakan untuk mengandaikan suatu syarat. Berbeda dengan partikel 'to' (yang hanya untuk hal pasti), pola '~tara' BISA diikuti oleh keinginan, ajakan, atau perintah. Cara mengubahnya: gunakan Bentuk Ta/Da (Lampau Biasa) lalu tambahkan 'ra'.\n• KK: ~tara / KS-i: ~kattara / KS-na & KB: ~dattara.",
                    formula: "Bentuk Lampau Biasa (た / だ) + ら、～",
                    examples: [
                        { jp: "あした はれたら、うみへ いきましょう。", id: "Kalau besok cerah, mari kita pergi ke laut." },
                        { jp: "やすかったら、この パソコンを かいたいです。", id: "Kalau murah, (saya) ingin membeli laptop ini." },
                        { jp: "ひまだったら、てつだって ください。", id: "Kalau sedang luang, tolong bantu saya." }
                    ]
                },
                {
                    title: "2. Aksi Berurutan 'Kalau sudah / Setelah' (~Tara)",
                    explanation: "Pola '~tara' pada kata kerja juga bisa berarti 'Kalau sudah...' atau 'Setelah...'. Ini menunjukkan bahwa aksi kedua akan dilakukan tepat setelah aksi pertama benar-benar selesai.",
                    formula: "Kata Kerja (Bentuk たら)、～",
                    examples: [
                        { jp: "えきに ついたら、でんわして ください。", id: "Kalau sudah tiba di stasiun, tolong telepon." },
                        { jp: "しごとが おわったら、すぐ かえります。", id: "Kalau pekerjaan sudah selesai, (saya) akan langsung pulang." }
                    ]
                },
                {
                    title: "3. Menyatakan Paradoks 'Walaupun' (~Te mo)",
                    explanation: "Ini adalah kebalikan dari '~tara'. Digunakan untuk menyatakan kondisi di mana hasilnya berlawanan dengan dugaan. Cara mengubahnya sama dengan bentuk '~te'.\n• KK: ~te mo / KS-i: ~kute mo / KS-na & KB: ~de mo.",
                    formula: "Bentuk て / くて / でも + も、～",
                    examples: [
                        { jp: "あめが ふっても、サッカーを します。", id: "Walaupun hujan turun, (kami) akan bermain sepak bola." },
                        { jp: "たかくても、この スマホを かいます。", id: "Walaupun mahal, (saya) akan membeli HP ini." },
                        { jp: "にちようびでも、はたらきます。", id: "Walaupun hari Minggu, (saya) bekerja." }
                    ]
                },
                {
                    title: "4. Penekanan Asumsi dengan 'Moshi' (Seandainya)",
                    explanation: "Kata 'moshi' (もし) sering diletakkan di awal kalimat bersyarat (~tara) untuk menekankan perasaan 'seandainya' dari si pembicara.",
                    formula: "もし + [Syarat ~たら]、～",
                    examples: [
                        { jp: "もし おかねが たくさん あったら、なにを したいですか。", id: "Seandainya kalau punya banyak uang, ingin melakukan apa?" }
                    ]
                }
            ],
            quizzes: [
                { q: "Apa bentuk pengandaian (~tara) dari kata sifat 'Yasui' (Murah)?", a: ["Yasuikattara", "Yasukattara", "Yasuidattara", "Yasuikute"], c: 1 },
                { q: "Apa bentuk pengandaian (~tara) dari kata benda 'Ame' (Hujan)?", a: ["Amedattara", "Amekattara", "Ametara", "Amenidattara"], c: 0 },
                { q: "Terjemahkan: 'Kalau sudah sampai di rumah, tolong telepon.'", a: ["Uchi e kaereba, denwashite kudasai", "Uchi e kaeru to, denwashite kudasai", "Uchi e kaettara, denwashite kudasai", "Uchi e kaettemo, denwashite kudasai"], c: 2 },
                { q: "Pola apa yang digunakan untuk menyatakan 'Walaupun / Meskipun'?", a: ["~tara", "~to", "~te mo / ~de mo", "~nakereba"], c: 2 },
                { q: "Lengkapi kalimat: 'Ikanakute ____, ii desu.' (Walaupun tidak pergi, tidak apa-apa/boleh).", a: ["Wa", "Mo", "To", "Ga"], c: 1 },
                { q: "Apa kata yang sering ditambahkan di awal kalimat untuk menegaskan arti 'Seandainya...'?", a: ["Zutto", "Kitto", "Tabun", "Moshi"], c: 3 },
                { q: "Apa arti dari 'Douzo ogenki de'?", a: ["Terima kasih atas bantuannya", "Semoga sehat-sehat selalu (Perpisahan panjang)", "Mari kita berusaha", "Halo (di telepon)"], c: 1 },
                { q: "Terjemahkan: 'Walaupun tidak suka, harus makan.'", a: ["Kiraidattara, tabenakereba narimasen", "Kiraidemo, tabenakereba narimasen", "Kiraikutemo, tabenakereba narimasen", "Kirainademo, tabenakereba narimasen"], c: 1 },
                { q: "Apa arti kosakata 'Mura' atau 'Inaka'?", a: ["Kesempatan", "Sawah", "Desa / Kampung halaman", "Pindah kantor"], c: 2 },
                { q: "Pola '~tara' lebih fleksibel dari partikel '~to' (Pelajaran 23) karena '~tara' BISA diikuti oleh...", a: ["Kalimat negatif", "Ajakan, keinginan, dan perintah", "Kata sifat", "Kata benda"], c: 1 }
            ]
        }
    },

    // ================= LEVEL N4 (26 - 50) =================
    N4: {
        26: {
            title: "Hari 26: Memberi Saran (Ta-hou ga ii)",
            description: "Cara memberikan nasihat atau saran yang kuat kepada orang lain.",
            kotoba: [
                { kanji: '病院', kana: 'びょういん', romaji: 'Byouin', arti: 'Rumah Sakit' },
                { kanji: '行く', kana: 'いく', romaji: 'Iku', arti: 'Pergi' },
                { kanji: '薬', kana: 'くすり', romaji: 'Kusuri', arti: 'Obat' }
            ],
            bunpou: [
                {
                    title: "Pola ~ta hou ga ii desu",
                    explanation: "Memberikan saran 'Sebaiknya melakukan...'. Harus menggunakan kata kerja bentuk Ta (Lampau).",
                    formula: "[KK Bentuk Ta] ほうがいいです",
                    examples: [
                        { jp: "びょういんへ いった ほうがいいです。", id: "Sebaiknya pergi ke rumah sakit." },
                        { jp: "くすりを のんだ ほうがいいです。", id: "Sebaiknya minum obat." }
                    ]
                }
            ],
            quizzes: Array(10).fill({ q: "Pola untuk memberi saran adalah?", a: ["~te kudasai", "~ta hou ga ii", "~nai de", "~ba ii"], c: 1 })
        }
    }
};