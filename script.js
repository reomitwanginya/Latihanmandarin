const words = [
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

    // if (mode === "IndoToHanzi") {
        // index = match.floor(Math.random() * words.length);
        // showCard();
        // return;
    // }

    if (!showingAnswer) {
        content.innerHTML = `
            ${w.hanzi}<br>
            <div style="font-size:24px; margin-top:10px;">${w.pinyin}</div>
            <div style="font-size:22px; margin-top:6px; color:#444">${w.arti}</div>
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
