const app = require('./app')
const db = require('./config/db')
const UserModel = require('./model/user.model')

const port =8000;

app.get('/',(req,res)=>{
    res.send("Hello SawSaw")
})

app.listen(port,()=>{
    console.log(`server listening on Port http://127.0.0.1:${port}`);
})