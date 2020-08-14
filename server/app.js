const express = require("express");
const graphql = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

mongoose.connect(
  `mongodb://graphql--tutorial:12345qwer@ds353748.mlab.com:53748/heroku_qm8t8vdm`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

app.use(cors());

app.use(
  "/graphql",
  graphql.graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error: ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server started on port ${PORT}`);
});
