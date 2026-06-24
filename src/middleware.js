
const errorHandleMiddleware = (err, req, res, next) => {
   if (err?.error) {
      res.status(404).json({
         error: err.error
      });
      return;
   }

   res.status(500).json({
      error: err.message
   });
}

const userNameIsValid = (req, res, username, next) => {
   if (!username) throw {
      error: "sand a valid username",
      status: 400
   }
   next();
}

export { userNameIsValid, errorHandleMiddleware }