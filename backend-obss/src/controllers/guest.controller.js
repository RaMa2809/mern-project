const catchAsync = require('../utils/catchAsync');

const loginView = catchAsync(async (req, res) =>{
    res.render('pages/login.pug',{cache : false})
})
const registerView = catchAsync(async (req, res) =>{
  res.render('pages/register.pug')
})
const notFound = catchAsync(async (req, res) =>{
  res.send(404).message('Not Found')
})


module.exports = {
  loginView,
  registerView,
  notFound
};
