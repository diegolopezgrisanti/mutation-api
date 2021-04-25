const Server = require("./src/server");
const server = new Server();
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

mongoose
    .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
    })
    .then(() => server.start())
    .catch(console.log);