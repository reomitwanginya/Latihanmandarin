const words = [
    // basic latihan
    {hanzi: "你好", pinyin: "nǐ hǎo", arti: "halo" },
    {hanzi: "谢谢", pinyin: "xièxie", arti: "terima kasih" },
    {hanzi: "请", pinyin: "qǐng", arti: "silakan" },
    {hanzi: "对不起", pinyin: "duìbuqǐ", arti: "maaf" },
    {hanzi: "再见", pinyin: "zàijiàn", arti: "sampai jumpa" },
    {hanzi: "星期一", pinyin: "xīngqī yī", arti: "Senin" },
    {hanzi: "星期二", pinyin: "xīngqī èr", arti: "Selasa" },
    {hanzi: "星期三", pinyin: "xīngqī sān", arti: "Rabu" },
    {hanzi: "星期四", pinyin: "xīngqī sì", arti: "Kamis" },
    {hanzi: "星期五", pinyin: "xīngqī wǔ", arti: "Jumat" },
    {hanzi: "明天", pinyin: "míngtiān", arti: "besok" },
    {hanzi: "昨天", pinyin: "zuótiān", arti: "kemarin" },
    {hanzi: "今天", pinyin: "jīntiān", arti: "hari ini" },
    {hanzi: "今年", pinyin: "jīnnián", arti: "tahun ini" },
    {hanzi: "去年", pinyin: "qùnián", arti: "tahun lalu" },
    {hanzi: "明年", pinyin: "míngnián", arti: "tahun depan" },
    {hanzi: "月份", pinyin: "yuèfèn", arti: "bulan (dalam tahun)" },
    {hanzi: "一月", pinyin: "yīyuè", arti: "Januari" },
    {hanzi: "二月", pinyin: "èryuè", arti: "Februari" },
    {hanzi: "下个月", pinyin: "xià gè yuè", arti: "bulan depan" },
    {hanzi: "上个月", pinyin: "shàng gè yuè", arti: "bulan lalu" },
    {hanzi: "一秒钟", pinyin: "yī miǎozhōng", arti: "satu detik" },
    {hanzi: "一分钟", pinyin: "yī fēnzhōng", arti: "satu menit" },
    {hanzi: "一小时", pinyin: "yī xiǎoshí", arti: "satu jam" },
    {hanzi: "一刻钟", pinyin: "yī kèzhōng", arti: "seperempat jam" },
    {hanzi: "三刻钟", pinyin: "sān kèzhōng", arti: "tiga perempat jam" },
    {hanzi: "点钟", pinyin: "diǎnzhōng", arti: "jam (waktu)" },
    {hanzi: "上午", pinyin: "shàngwǔ", arti: "pagi" },
    {hanzi: "中午", pinyin: "zhōngwǔ", arti: "tengah hari" },
    {hanzi: "下午", pinyin: "xiàwǔ", arti: "sore" },
    {hanzi: "晚上", pinyin: "wǎnshang", arti: "malam" },
    {hanzi: "要", pinyin: "yào", arti: "ingin/mau" },
    {hanzi: "有", pinyin: "yǒu", arti: "punya/ada" },
    {hanzi: "不", pinyin: "bù", arti: "tidak" },
    {hanzi: "没", pinyin: "méi", arti: "tidak (untuk punya)" },
    {hanzi: "跟", pinyin: "gēn", arti: "dengan" },
    {hanzi: "和", pinyin: "hé", arti: "dan" },
    {hanzi: "也", pinyin: "yě", arti: "juga" },
    {hanzi: "是", pinyin: "shì", arti: "adalah/iya" },
    {hanzi: "在", pinyin: "zài", arti: "di (lokasi)" },
    {hanzi: "很", pinyin: "hěn", arti: "sangat" },
    {hanzi: "吃饭", pinyin: "chī fàn", arti: "makan" },
    {hanzi: "喝水", pinyin: "hē shuǐ", arti: "minum air" },
    {hanzi: "睡觉", pinyin: "shuì jiào", arti: "tidur" },
    {hanzi: "起来", pinyin: "qǐ lái", arti: "bangun" },
    {hanzi: "起床", pinyin: "qǐ chuáng", arti: "bangun tidur" },
    {hanzi: "上课", pinyin: "shàng kè", arti: "masuk kelas" },
    {hanzi: "下课", pinyin: "xià kè", arti: "selesai kelas" },
    {hanzi: "叫", pinyin: "jiào", arti: "memanggil/nama" },
    {hanzi: "工作", pinyin: "gōngzuò", arti: "bekerja/pekerjaan" },
    {hanzi: "学习", pinyin: "xuéxí", arti: "belajar" },
    {hanzi: "教", pinyin: "jiāo", arti: "mengajar" },
    {hanzi: "坐", pinyin: "zuò", arti: "duduk/naik (kendaraan)" },
    {hanzi: "做", pinyin: "zuò", arti: "melakukan/membuat" },
    {hanzi: "看", pinyin: "kàn", arti: "melihat/membaca" },
    {hanzi: "听", pinyin: "tīng", arti: "mendengar" },
    {hanzi: "说话", pinyin: "shuō huà", arti: "berbicara" },
    {hanzi: "写", pinyin: "xiě", arti: "menulis" },
    {hanzi: "买", pinyin: "mǎi", arti: "membeli" },
    {hanzi: "卖", pinyin: "mài", arti: "menjual" },
    {hanzi: "开", pinyin: "kāi", arti: "mengemudi/membuka" },
    {hanzi: "走", pinyin: "zǒu", arti: "berjalan/pergi" },
    {hanzi: "喜欢", pinyin: "xǐhuan", arti: "suka" },
    {hanzi: "爱", pinyin: "ài", arti: "cinta/mencintai" },
    {hanzi: "给", pinyin: "gěi", arti: "memberi" },
    {hanzi: "出去", pinyin: "chū qù", arti: "keluar" },
    {hanzi: "进来", pinyin: "jìn lái", arti: "masuk" },

    // sekolah dan pendidikan
    {hanzi: "幼儿园", pinyin: "yòu'éryuán", arti: "taman kanak-kanak" },
    {hanzi: "小学", pinyin: "xiǎoxué", arti: "sekolah dasar" },
    {hanzi: "中学", pinyin: "zhōngxué", arti: "sekolah menengah" },
    {hanzi: "高中", pinyin: "gāozhōng", arti: "sekolah menengah atas" },
    {hanzi: "大学", pinyin: "dàxué", arti: "universitas" },
    {hanzi: "教室", pinyin: "jiàoshì", arti: "ruang kelas" },
    {hanzi: "图书馆", pinyin: "túshūguǎn", arti: "perpustakaan" },
    {hanzi: "实验室", pinyin: "shíyànshì", arti: "laboratorium" },
    {hanzi: "操场", pinyin: "cāochǎng", arti: "lapangan olahraga" },
    {hanzi: "食堂", pinyin: "shítáng", arti: "kantin" },
    {hanzi: "校长", pinyin: "xiàozhǎng", arti: "kepala sekolah/rektor" },
    {hanzi: "老师", pinyin: "lǎoshī", arti: "guru/dosen" },
    {hanzi: "学生", pinyin: "xuéshēng", arti: "murid/mahasiswa" },
    {hanzi: "同学", pinyin: "tóngxué", arti: "teman sekelas" },
    {hanzi: "本科上生", pinyin: "běnkē shēng", arti: "mahasiswa sarjana" },
    {hanzi: "研究生", pinyin: "yánjiūshēng", arti: "mahasiswa pascasarjana" },
    {hanzi: "课程", pinyin: "kèchéng", arti: "mata kuliah" },
    {hanzi: "专业", pinyin: "zhuānyè", arti: "jurusan" },
    {hanzi: "考试", pinyin: "kǎoshì", arti: "ujian" },
    {hanzi: "成绩", pinyin: "chéngjì", arti: "nilai/hasil" },

    // kata kerja tambahan
    {hanzi: "他", pinyin: "tā", arti: "dia (laki-laki)" },
    {hanzi: "她", pinyin: "tā", arti: "dia (perempuan)" },
    {hanzi: "我", pinyin: "wǒ", arti: "saya/aku" },
    {hanzi: "你们", pinyin: "nǐmen", arti: "kalian" },
    {hanzi: "他们", pinyin: "tāmen", arti: "mereka (laki-laki atau campuran)" },
    {hanzi: "她们", pinyin: "tāmen", arti: "mereka (perempuan)" },
    {hanzi: "我们", pinyin: "wǒmen", arti: "kami/kita" },
    {hanzi: "老师们", pinyin: "lǎoshīmen", arti: "para guru/dosen" },
    {hanzi: "学生们", pinyin: "xuéshēngmen", arti: "para murid/mahasiswa" },
    {hanzi: "会", pinyin: "huì", arti: "bisa/mampu (karena belajar)" },
    {hanzi: "能", pinyin: "néng", arti: "bisa/mampu (karena kemampuan)" },
    {hanzi: "应该", pinyin: "yīnggāi", arti: "seharusnya" },
    {hanzi: "必须", pinyin: "bìxū", arti: "harus" },
    {hanzi: "听", pinyin: "tīng", arti: "mendengarkan" },
    {hanzi: "说", pinyin: "shuō", arti: "mengatakan" },
    {hanzi: "读", pinyin: "dú", arti: "membaca (suara)" },
    {hanzi: "写", pinyin: "xiě", arti: "menulis" },
    {hanzi: "请进", pinyin: "qǐng jìn", arti: "silakan masuk" },
    {hanzi: "注意", pinyin: "zhùyì", arti: "perhatikan" },
    {hanzi: "里", pinyin: "lǐ", arti: "di dalam" },
    {hanzi: "外面", pinyin: "wàimiàn", arti: "di luar" },
    {hanzi: "椅子", pinyin: "yǐzi", arti: "kursi" },
    {hanzi: "桌子", pinyin: "zhuōzi", arti: "meja" },
    {hanzi: "书包", pinyin: "shūbāo", arti: "tas sekolah" },
    {hanzi: "黑板", pinyin: "hēibǎn", arti: "papan tulis" },
    {hanzi: "粉笔", pinyin: "fěnbǐ", arti: "kapur tulis" },
    {hanzi: "白板", pinyin: "báibǎn", arti: "papan putih" },
    {hanzi: "白板笔", pinyin: "báibǎnbǐ", arti: "spidol papan putih" },
    {hanzi: "考试", pinyin: "kǎoshì", arti: "ujian" },
    {hanzi: "试卷", pinyin: "shìjuàn", arti: "lembar ujian" },
    {hanzi: "成绩单", pinyin: "chéngjìdān", arti: "rapor" },
    {hanzi: "联系", pinyin: "liánxì", arti: "latihan/praktik" },
    {hanzi: "预习", pinyin: "yùxí", arti: "mempersiapkan pelajaran" },
    {hanzi: "复习", pinyin: "fùxí", arti: "mengulang pelajaran" },
    {hanzi: "作业", pinyin: "zuòyè", arti: "pekerjaan rumah" },

    //kata perangkai
    {hanzi: "因为", pinyin: "yīnwèi", arti: "karena" },
    {hanzi: "所以", pinyin: "suǒyǐ", arti: "jadi/oleh karena itu" },
    {hanzi: "但是", pinyin: "dànshì", arti: "tetapi" },
    {hanzi: "如果", pinyin: "rúguǒ", arti: "jika" },
    {hanzi: "或者", pinyin: "huòzhě", arti: "atau" },
    {hanzi: "虽然", pinyin: "suīrán", arti: "meskipun" },
    {hanzi: "但是", pinyin: "dànshì", arti: "tetapi" },
    {hanzi: "巴厘岛", pinyin: "Bālídǎo", arti: "Pulau Bali" },
    {hanzi: "帮助", pinyin: "bāngzhù", arti: "membantu" },
    {hanzi: "问题", pinyin: "wèntí", arti: "pertanyaan/masalah" },
    {hanzi: "北京", pinyin: "Běijīng", arti: "Beijing" },
    {hanzi: "上海", pinyin: "Shànghǎi", arti: "Shanghai" },
    {hanzi: "别", pinyin: "bié", arti: "jangan" },
    {hanzi: " 参加", pinyin: "cānjiā", arti: "mengikuti/ikut serta" },
    {hanzi: "次", pinyin: "cì", arti: "kali (untuk frekuensi)" },
    {hanzi: "出场", pinyin: "chūchǎng", arti: "tampil (di panggung)" },
    {hanzi: "打电话", pinyin: "dǎ diànhuà", arti: "menelpon" },
    {hanzi: "地方", pinyin: "dìfāng", arti: "tempat/lokasi" },
    {hanzi: "东西", pinyin: "dōngxī", arti: "benda/barang" },
    {hanzi: "对", pinyin: "duì", arti: "benar" },
    {hanzi: "当", pinyin: "dāng", arti: "menjadi/jadi (profesi)" },
    {hanzi: "到", pinyin: "dào", arti: "sampai/ke" },
    {hanzi: "电影", pinyin: "diànyǐng", arti: "film" },
    {hanzi: "东西", pinyin: "dōngxī", arti: "benda/barang" },
    {hanzi: "店", pinyin: "diàn", arti: "toko" },
    {hanzi: "电视", pinyin: "diànshì", arti: "televisi" },
    {hanzi: "渡轮", pinyin: "dùlún", arti: "ferri" },
    {hanzi: "飞机", pinyin: "fēijī", arti: "pesawat terbang" },
    {hanzi: "公共汽车", pinyin: "gōnggòng qìchē", arti: "bus" },
    {hanzi: "火车", pinyin: "huǒchē", arti: "kereta api" },




    // kantor dan pekerjaan
    {hanzi: "工作日", pinyin: "gōngzuòrì", arti: "hari kerja" },
    {hanzi: "周末", pinyin: "zhōumò", arti: "akhir pekan" },
    {hanzi: "办公室", pinyin: "bàngōngshì", arti: "kantor" },
    {hanzi: "公司", pinyin: "gōngsī", arti: "perusahaan" },
    {hanzi: "笔记本电脑", pinyin: "bǐjìběn diànnǎo", arti: "laptop" },
    {hanzi: "键盘", pinyin: "jiànpán", arti: "keyboard" },
    {hanzi: "鼠标", pinyin: "shǔbiāo", arti: "mouse (komputer)" },
    {hanzi: "屏幕", pinyin: "píngmù", arti: "layar" },
    {hanzi: "打印机", pinyin: "dǎyìnjī", arti: "printer" },
    {hanzi: "复印机", pinyin: "fùyìnjī", arti: "mesin fotokopi" },
    {hanzi: "扫描仪", pinyin: "sǎomiáoyí", arti: "scanner" },
    {hanzi: "文件", pinyin: "wénjiàn", arti: "dokumen" },
    {hanzi: "文件夹", pinyin: "wénjiànjiā", arti: "map" },
    {hanzi: "资料", pinyin: "zīliào", arti: "data atau berkas" },
    {hanzi: "纸", pinyin: "zhǐ", arti: "kertas" },
    {hanzi: "活页纸", pinyin: "huóyèzhǐ", arti: "binder" },
    {hanzi: "橡皮", pinyin: "xiàngpí", arti: "penghapus" },
    {hanzi: "剪刀", pinyin: "jiǎndāo", arti: "gunting" },
    {hanzi: "订书机", pinyin: "dìngshūjī", arti: "stapler" },
    {hanzi: "订书针", pinyin: "dìngshūzhēn", arti: "isi staples" },
    {hanzi: "胶水", pinyin: "jiāoshuǐ", arti: "lem" },
    {hanzi: "名片", pinyin: "míngpiàn", arti: "kartu nama" },
    {hanzi: "胶带", pinyin: "jiāodài", arti: "selotip" },
    {hanzi: "名片夹", pinyin: "míngpiànjiā", arti: "tempat kartu nama" },
    {hanzi: "日历", pinyin: "rìlì", arti: "kalender" },
    {hanzi: "时钟", pinyin: "shízhōng", arti: "jam dinding" },
    {hanzi: "电话", pinyin: "diànhuà", arti: "telepon" },
    {hanzi: "传真", pinyin: "chuánzhēn", arti: "faks" },
    {hanzi: "饮水机", pinyin: "yǐnshuǐjī", arti: "dispenser air" },
    {hanzi: "空调", pinyin: "kōngtiáo", arti: "AC" },
    {hanzi: "垃圾桶", pinyin: "lājītǒng", arti: "tempat sampah" },
    {hanzi: "钢笔", pinyin: "gāngbǐ", arti: "pulpen" },



];

let index = 0;
let showingAnswer = false;

function resetCard() {
    showingAnswer = false;
    document.getElementById("dictionaryList").style.display = "none";
    showCard();
}

function showCard() {
    const mode = document.getElementById("mode").value;
    const card = document.getElementById("card");
    const content = document.getElementById("cardContent");

    if (mode === "dictionary") {
        card.style.display = "none";
        showDictionary();
        return;
    }

    card.style.display = "flex";
    const w = words[index];

    if (mode === "hanziToIndo") content.innerHTML = w.hanzi;
    if (mode === "indoToHanzi") content.innerHTML = w.arti;
    if (mode === "hanziOnlyPresent") {
        content.innerHTML = w.hanzi;
        return;
    }
}

function flipCard() {
    const mode = document.getElementById("mode").value;
    const content = document.getElementById("cardContent");
    const w = words[index];

    if (mode === "dictionary") return;

    
    if (mode === "hanziOnlyPresent") {
        index = (index + 1) % words.length;
        showCard();
        return;
    }

     if (mode === "IndoToHanzi") {
        index = match.floor(Math.random() * words.length);
         showCard();
         return;
     }

    if (!showingAnswer) {
        content.innerHTML = `
            ${w.hanzi}<br>
            <div style="font-size:30px; margin-top:10px;">${w.pinyin}</div>
            <div style="font-size:30px; margin-top:6px; color:#444">${w.arti}</div>
        `;
        showingAnswer = true;
    } else {
        index = (index + 1) % words.length;
        showingAnswer = false;
        showCard();
    }
}

function showDictionary() {
    const list = document.getElementById("dictionaryList");
    list.style.display = "block";

    let html = "";
    words.forEach(w => {
        html += `
            <div class="wordRow">
                <b>${w.hanzi}</b> (${w.pinyin}) — ${w.arti}
            </div>
        `;
    });

    list.innerHTML = html;
}
resetCard();
