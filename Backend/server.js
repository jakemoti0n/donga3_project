const express = require('express')
const app = express()

const indexRouter = require('./routes/index')

// nunjucks사용법
// 1. npm i nunjucks chokidar 
const nunjucks = require('nunjucks')

// 2. view엔진을 html확장자로 사용하겠다는 설정
app.set('view engine', 'html')

nunjucks.configure('views', {// 문자열과 객체형태로 입력
    express : app,
    watch : true
}) 

app.use('/', indexRouter)

app.set('port', process.env.PORT ||5173)
app.listen(app.get('port'), ()=>{
    console.log(app.get('port')+'번 포트에서 대기중')
})