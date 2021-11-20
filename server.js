// express
const express = require('express')
const session = require('express-session')
const app = express()
const port = process.env.PORT || 5000;

// cors
const cors = require('cors')

// passport
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

// app use
app.use(session({
    secret:'keyboard cat',
    resave:true,
    saveUninitialized:false
}))

app.use(express.json())
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())

// model
const UserModel = require('./model/UserModel')
const ClassesModel = require('./model/ClassesModel')

// path

app.get('/showclass/:id',(req,res,next)=>{
    ClassesModel.findById(req.params.id,(err,classes)=>{
        res.send(classes)
    })
})

app.get('/getclass',(req,res,next)=>{
    ClassesModel.find((err,classes)=>{
        res.send(classes)
    })
})

app.post('/addclass',(req,res,next)=>{
    UserModel.findById(req.body.user_id,(err,user)=>{
        let classRoomLength = user['classroom'].length
        if(classRoomLength === 0){
            UserModel.findByIdAndUpdate(req.body.user_id,{$push:{classroom:req.body.classData}},(err,user)=>{
                UserModel.findById(req.body.user_id,(err,user)=>{
                    res.send(user)
                })
            })
        }else{
            let isRepeat = user.classroom.some(item=>item.title === req.body.classData.title)
            if(!isRepeat){
                UserModel.findByIdAndUpdate(req.body.user_id,{$push:{classroom:req.body.classData}},(err,user)=>{
                    UserModel.findById(req.body.user_id,(err,user)=>{
                        res.send(user)
                    })
                })
            }else{
                next();
            }
        }
    })
})

app.post('/register',(req,res,next)=>{
    let newUser = new UserModel(req.body)
    newUser.save()
})

app.post('/login',passport.authenticate('local'),(req,res,next)=>{res.send(req.user)})

passport.serializeUser((user,done)=>done(null,user.id))
passport.deserializeUser((id,done)=>UserModel.findById(id,(err,user)=>done(err,user)))

passport.use(new LocalStrategy((username,password,done)=>{
    UserModel.findOne({username:username},(err,user)=>{
        if(err) return done(err);
        if(!user) return done(null,false);
        if(user.password !== password) return done(null,false)
        return done(null,user)
    })
}))

const path = require('path')
if((process.env.NODE_ENV = "production")){
    app.use(express.static("client/build"));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    });
}

app.listen(port,()=>console.log(`app is running on port ${port}`))