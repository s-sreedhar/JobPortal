<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 3500;

const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open', () => {
    console.log("MongoDB connection successful");
});

const userSchema = new mongoose.Schema({
    email: String,
    pass: String,
    name: String,
    dob: String,
    location:String,
    experience:Number,
    role:String
});

const Seekers = mongoose.model("seekers", userSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'user_signup.html'));
});

app.post('/post', async (req, res) => {
    const { email, pass, name , dob,location,experience,role} = req.body;
    const user = new Seekers({
        email: email,
        pass: pass,
        name: name,
        dob:dob,
        location:location,
        experience:experience,
        role:role
    }); 

    await user.save();
    console.log(user);
    res.send("<script>alert('Form Submission Successful');</script>");

});

app.listen(port, () => {
    console.log("Server Started");
});
=======
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 3500;

const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open', () => {
    console.log("MongoDB connection successful");
});

const userSchema = new mongoose.Schema({
    email: String,
    pass: String,
    name: String,
    dob: String,
    location:String,
    experience:Number,
    role:String
});

const Seekers = mongoose.model("seekers", userSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'user_signup.html'));
});

app.post('/post', async (req, res) => {
    const { email, pass, name , dob,location,experience,role} = req.body;
    const user = new Seekers({
        email: email,
        pass: pass,
        name: name,
        dob:dob,
        location:location,
        experience:experience,
        role:role
    }); 

    await user.save();
    console.log(user);
    res.send("<script>alert('Form Submission Successful');</script>");

});

app.listen(port, () => {
    console.log("Server Started");
});
>>>>>>> 731e08a7520527ef6c28fe33faf36f19c6c7564a
