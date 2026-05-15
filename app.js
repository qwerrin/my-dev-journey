const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const logList = document.getElementById('logList');

// 1. ページ読み込み時に保存されたデータを表示する
window.addEventListener('load', () => {
    const savedData = localStorage.getItem('myLogs');
    if (savedData) {
        const logs = JSON.parse(savedData);
        logs.forEach(text => addToList(text));
    }
});

// 2. リストに追加する共通の関数
function addToList(text) {
    const li = document.createElement('li');
    li.textContent = text;
    logList.appendChild(li);
}

// 3. データを保存する関数
function saveToLocal() {
    const logs = [];
    document.querySelectorAll('#logList li').forEach(li => {
        // "✅" の絵文字を除いてテキストだけ保存（CSSのbeforeで付けている場合）
        logs.push(li.textContent);
    });
    localStorage.setItem('myLogs', JSON.stringify(logs));
}

// ボタンクリック時の処理
addBtn.addEventListener('click', () => {
    const text = taskInput.value;
    if (text !== "") {
        addToList(text);
        saveToLocal(); // 保存！
        taskInput.value = "";
    }
});
