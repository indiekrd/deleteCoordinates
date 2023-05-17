const inputEl = document.getElementById('text-input');
const resultEl = document.getElementById('result');

inputEl.addEventListener('input', function() {
  let inputString = inputEl.value;
  let cropString = inputString.replace(' ', '');
  let points = cropString.split(' ');
  points.pop();
  let newString = points.join(' ');
  resultEl.textContent = `<polygon points="${newString}"></polygon>`
});

const copyText = () => {
  navigator.clipboard.writeText(resultEl.textContent)
    .then(() => {
      console.log('Текст скопирован успешно');
    })
    .catch((err) => {
      console.error('Не удалось скопировать текст: ', err);
    });
};

resultEl.addEventListener('click', copyText);