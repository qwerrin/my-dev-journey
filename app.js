const logList = document.getElementById('logList')
// 1. ページ読み込み時に保存されたデータを表示する
window.addEventListener('load', async () => {
    const response = await fetch("./logs.json");
    if (response.ok) {
        const logs = await response.json();
        logs.forEach(text => addToList(text));
    }
});

// 2. リストに追加する共通の関数
function addToList({ date, content }) {
    const li = document.createElement('li');
    li.innerHTML = `
        <p class="date">${date}</p>
        <span>${content}</span>
    `;
    logList.appendChild(li);

}




