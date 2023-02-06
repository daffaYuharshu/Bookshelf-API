const addBookHandler = require("./handler/addBookHandler");

const routes = [
    {
        method: `POST`,
        path: `/books`,
        handler: addBookHandler
    }
];

module.exports = routes;