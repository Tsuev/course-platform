<template>
  <div class="editorWrapper">
    <div class="editorHeader">
      <h1>Практика HTML</h1>
      <p>Добавтье на страницу заголовки от h1 до h6</p>
      <div class="check" @click="clickMe">
        Неправильно, пробуй еще
      </div>
    </div>
    <div class="editorPlace">
      <textarea ref="textAr" id="editor">
<h1>Обана</h1>
<h2>нормальный конь</h2>
<p>зачетный</p></textarea
      >
      <div class="view"></div>
    </div>
  </div>
</template>
<script setup>
import 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.38.0/codemirror.min.js'

const textAr = ref(null)

const clickMe = () => console.log(textAr.value)

let editor = CodeMirror.fromTextArea(textAr, {
  mode: 'xml',
  theme: 'dracula',
  lineNumbers: true,
  autoCloseTags: true,
  fontSize: 10
})
emmetCodeMirror(editor)

let view = document.querySelector('.view')
let check = document.querySelector('.check')

setInterval(function () {
  let code = document.querySelectorAll('.CodeMirror-line')
  let out = ''
  // code.forEach((item) => console.log(item))
  code.forEach(item => {
    out += item.innerText
  })
  view.innerHTML = out

  if (view.querySelectorAll('h1, h2, h3, h4, h5, h6').length == 6) {
    check.innerText = 'Молодец, все правильно!'
    check.classList.add('correct')
  } else {
    check.innerText = 'Неправильно, пробуй еще'
    check.classList.remove('correct')
  }
}, 1000)
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.editorWrapper {
  font-family: sans-serif;
  overflow: hidden;
  height: 100vh;
}

.editorHeader {
  padding-left: 20px;
}
.CodeMirror {
  width: 50%;
  height: 100vh;
  font-size: 16px;
}
.editorPlace {
  display: flex;
}
.view {
  border: 1px solid #282a36;
  height: 100vh;
  width: 50%;
  padding: 0 10px 10px 10px;
}

.check {
  background-color: red;
  display: inline-block;
  padding: 10px;
  margin-bottom: 10px;
}
.correct {
  background-color: green;
}
</style>
