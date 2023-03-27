const express=require('express');
const app=express(); //all the things or library of express comes in this app
const port= process.env.PORT ||3000;   //it give port wherever we run or if we run locally then 3000 will be given
const path=require("path")
const hbs=require("hbs")

require("./db/conn");
const Register=require("./models/userRegistration")

const static_path=path.join(__dirname, "../public") //to define the address of page
const template_path=path.join(__dirname, "../templates/views")
const partial_path=path.join(__dirname, "../templates/partial")
// console.log(static_path) //show the path

app.use(express.static(static_path))
app.set("view engine","hbs") 
app.set("views",template_path)//by this we show do not look for views ,look for templates and in this look for views and other files
hbs.registerPartials(partial_path)
app.use(express.json());//this will give data if we use postman but we are using wesite to we have to weite a
app.use(express.urlencoded({extended:false})); //this is used to not make form data undefined
//hbs templ


app.get("/",(req,res) => {

    res.render("index")
})
app.get("/login",(req,res) => {
   
    res.render("login")
})
app.post("/login",async(req,res) => {
    // res.send("hello public")
    // res.render("login")
    try {
        // res.send(req.body.firstName)
        const password=req.body.password
        const cPassword=req.body.confirmPassword
        if(password == cPassword){
            const resgisterUser=new Register({
                firstName:req.body.firstName,
                email:req.body.email,
                password:password,
                confirmPassword:cPassword
            })
            const registered=await resgisterUser.save()
           
        
            // res.render("index")
            res.render("index.hbs").sendStatus(201);
            // res.sendStatus(201)  yh nhi ho rha can not set header
        }else{
            res.send("password not match")
        }

    }catch (error) {
        res.status(400).send(error)
        
    }
})


app.listen(port,()=>{
    console.log(`Server is running on port no ${port}`)
})









