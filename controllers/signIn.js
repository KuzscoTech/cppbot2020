const User = require('../models/user');

exports.signin = (req,res) => {
    //find the user based on email
    const {email, password} = req.body
    User.findOne({email}, (err,user) => {
        if(err || !user){
            return res.status(400).json({
                error: 'User with that email does not exist. Please Sign Up'
            })
        }
        //if user is found make sure the email and password match
        console.log(password)
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: 'Email and password dont match'
            })
        }
        
        //No Idea what this does still -- 03/11/2020
        //generate a signed token with user id and secret
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
        
        //persist the token as 't' in cooke with expire date 
        //Same thing here no clue -- 03/11/2020
        res.cookie('t', token, {expire: new Date() + 9999})

        //return response with user and token to frontend client
        //I vaguely understand 03/11/2020
        const {_id, name, email, role} = user
        return res.json({token, user: {_id, email, name, role} });
    })
}