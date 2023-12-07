const jwt = require("jsonwebtoken");

module.exports = {
    auth: async (req, res, next) => {
        if (req.headers["authorization"]) {
            try {
                let authorization = req.headers["authorization"].split(" ");
                if (authorization[0] !== "Bearer") {
                    return res.status(401).send("Invalid Request");
                } else {
                    const decodedToken = jwt.verify(
                        authorization[1],
                        "sjdhkasjfhkashfkasfnjas8fJAdaksjfakUbdjasdkaBHsdb12"
                    );
                    console.log("Decoded Token: ", decodedToken);
                    return next();
                }
            } catch (err) {
                return res.status(403).send("Invalid Token");
            }
        } else {
            return res.status(401).send("Invalid Request");
        }
    }
}
