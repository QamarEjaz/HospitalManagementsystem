const Admin = require('../models/Admin');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const { StatusCodes } = require('http-status-codes');
const { token } = require('morgan');
const Login = async (req, res) => {
  // console.log('its working')
  const { email, password, role } = req.body;  
  if (!email || !password) {
   return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: 'Please enter email and password' });
  }
  let currModel;
  if (role === 'admin') {
    currModel = Admin;
  } else if (role === 'doctor') {
    currModel = Doctor;
  } else {
    currModel = Patient;
  }
  const user = await currModel.findOne({ email: email });
  console.log(user)
  if (!user) {
   return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not found' });
  }

  const isCorrect = await user.checkPassword(password);
  

  if (isCorrect) {
    const token = user.generateAuthToken();
   return res.status(StatusCodes.OK).json({ token,user });
  } else {
   return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Incorrect password' });
  }
};
const SignUp = async (req, res) => {
  const { role, user } = req.body;
  console.log(req.body);
  let currModel;
  if (role === 'admin') {
    currModel = Admin;
  } else if (role === 'doctor') {
    currModel = Doctor;
    res.status(201).json(role)
  } else {
    currModel = Patient;
  }
  const savedUser = await currModel.create({ ...user });

  if (savedUser) {
    const token = savedUser.generateAuthToken();
    res.status(StatusCodes.OK).json({ token });
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not saved' });
  }
};

module.exports = { Login, SignUp };
