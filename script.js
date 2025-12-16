const words = [
    1. { hanzi: "人事处", pinyin: "rénshì chù", arti: "departemen personalia" },
2. { hanzi: "联系", pinyin: "liánxì", arti: "menghubungi" },
3. { hanzi: "财务", pinyin: "cáiwù", arti: "keuangan" },
4. { hanzi: "成交交易", pinyin: "chéngjiāo jiāoyì", arti: "transaksi terlaksana" },
5. { hanzi: "投资", pinyin: "tóuzī", arti: "investasi" },
6. { hanzi: "电邮", pinyin: "diànyóu", arti: "email" },
7. { hanzi: "名片", pinyin: "míngpiàn", arti: "kartu nama" },
8. { hanzi: "处理问题", pinyin: "chǔlǐ wèntí", arti: "menyelesaikan masalah" },
9. { hanzi: "合适", pinyin: "héshì", arti: "cocok / sesuai" },
10. { hanzi: "信息", pinyin: "xìnxī", arti: "informasi" },

11. { hanzi: "管理", pinyin: "guǎnlǐ", arti: "manajemen" },
12. { hanzi: "总公司", pinyin: "zǒng gōngsī", arti: "kantor pusat" },
13. { hanzi: "会计", pinyin: "kuàijì", arti: "akuntan" },
14. { hanzi: "合作", pinyin: "hézuò", arti: "kerja sama" },
15. { hanzi: "分公司", pinyin: "fēn gōngsī", arti: "kantor cabang" },
16. { hanzi: "市场", pinyin: "shìchǎng", arti: "pasar" },
17. { hanzi: "营销", pinyin: "yíngxiāo", arti: "pemasaran" },
18. { hanzi: "公司", pinyin: "gōngsī", arti: "perusahaan" },
19. { hanzi: "优先事项", pinyin: "yōuxiān shìxiàng", arti: "prioritas" },
20. { hanzi: "出差", pinyin: "chūchāi", arti: "perjalanan dinas" },

21. { hanzi: "谈生意", pinyin: "tán shēngyì", arti: "negosiasi bisnis" },
22. { hanzi: "国际", pinyin: "guójì", arti: "internasional" },
23. { hanzi: "客户", pinyin: "kèhù", arti: "klien / pelanggan" },
24. { hanzi: "发", pinyin: "fā", arti: "mengirim / mengeluarkan" },
25. { hanzi: "产品", pinyin: "chǎnpǐn", arti: "produk" },
26. { hanzi: "目标", pinyin: "mùbiāo", arti: "target / tujuan" },
27. { hanzi: "预算", pinyin: "yùsuàn", arti: "anggaran" },
28. { hanzi: "项目", pinyin: "xiàngmù", arti: "proyek" },
29. { hanzi: "练习", pinyin: "liànxí", arti: "latihan / praktik" },
30. { hanzi: "销售", pinyin: "xiāoshòu", arti: "penjualan" }



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
