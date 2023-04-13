const compression = require("compression");
const express = require("express");

const app = express();

app.use(compression());
app.use(compression({ filter: shouldCompress }));

function shouldCompress(request, response) {
    if (request.headers["x-no-compression"]) {
        return false;
    }

    return compression.filter(request, response);
}
