const express = require("express")
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.json())

const mockUserData = [{
    name: "Mark"
},
{
    name: "Jill"
}]

app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'Successfully got users! Nice!!',
        users: mockUserData
    })
})

app.get('/users/:id', function (req, res) {
    console.log(req.params.id);
    res.json({
        success: true,
        message: "Got one user",
        user: req.params.id
    })
})


app.post('/login', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockusername = "billythe";
    const mockpassword = "superkeys";

    if (username == mockusername && password == mockpassword) {
        res.json({
            success: true,
            message: "password valid",
            token: "token goes here"
        })
    } else {
        res.json({
            success: false,
            message: "password and username doesnot match"
        })
    }
})


app.listen(8000, function () {
    console.log("server is running");
})