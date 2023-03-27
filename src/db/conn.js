const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/ecommerceLoginPage", {
    // useNewUrlParser: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
    // useCreateIndex: true //these are used simply to avoid deprication warning
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => {
    console.log(`no connection`);
  });
