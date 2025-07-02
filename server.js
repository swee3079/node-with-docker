import express from 'express';


const PORT = process.env.PORT || 8080
const app = express();

app.get("/connect",(req,resp)=>{
    resp.json({
        code: "00",
        message:"Docker Running Successfully",
        data: "null",
    })
})


app.listen(PORT, ()=>{
    console.log("Server Started Successfully on port 8080")
})