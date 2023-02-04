// 원형 텍스트 만들기
const circleStr = document.querySelector('.text');
circleStr.innerHTML = circleStr.innerText.split('').map(
    (char, i) => `<span class='textSplit' style='transform:rotate(${i * 8.4}deg)'>${char}</span>`
).join('');
