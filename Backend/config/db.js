const mysql = require('mysql2')

// 3. DB 정보를 기재하기
const conn = mysql.createConnection({
    host :'localhost',
    port :3306,
    database :'NODEJS',
    password :'1234',
    user : 'root'
})

conn.connect()
console.log('DB 연결 완료')

module.exports = conn