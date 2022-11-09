const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.log('Error from catchAsync:' , err)
    next(err)});
};

module.exports = catchAsync;
