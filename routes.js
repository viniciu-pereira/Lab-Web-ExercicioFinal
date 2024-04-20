const routes = [
    {
        method: "GET",
        path: "/products",
        handler: (request, h) => {
            return "API ta on!";
        }
    }
];

module.exports = routes;