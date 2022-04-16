const authorize = (req,res,next)=>{

    const {user} = req.query
    if(user === 'mahmoud'){
        req.user = {name : 'mahmoud' , id : 1}
        next();
    }else{
        res.status(401).send('unauthorized')
    }

}


module.exports = authorize