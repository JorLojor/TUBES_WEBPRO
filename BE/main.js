const app = require("./app");
require("dotenv").config();
const port = process.env.local_port;

app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`);
    }
);
