const model = require("../model/Farmer&Customer");
const FarmerCustomerSchema = model.FarmerCustomerSchema;
const SignUp = (req, res) =>{
 const FarmerCustomerSignUpObject = {
    Fullname: req.body.fullname,
    Email: req.body.email,
    Username: req.body.username,
    Password: req.body.password,
  };

  const user = new FarmerCustomerSchema(FarmerCustomerSignUpObject);
  user
    .save()
    .then((st) => {
     res.send("Hello")
    })
    .catch((err) => {
      res.send(err);
    });
}



const Login =async (req, res) => {
 try { const doc = await FarmerCustomerSchema.findOne({ email: req.body.email });
  if (req.body.password === doc.password) {
     res.send("You are nice ")
  }
  else{
     res.send('Wrong password') ;
  }
}
catch(err){
     res.send("Please Enter the login value ");
}
}
exports.SignUp = SignUp;
exports.Login = Login;
