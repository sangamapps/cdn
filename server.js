const express = require("express");
const app = express();

if (process.env.NODE_ENV != "production") {
    const morgan = require('morgan');
    app.use(morgan("dev"));
}

const { PORT, PATHS } = require("./config");

PATHS.forEach(path => {
    app.use("/" + path, express.static(path));
});

app.listen(process.env.PORT || PORT, (err) => {
    if (err) throw err;
    console.log("Serving on http://localhost:" + PORT);
});