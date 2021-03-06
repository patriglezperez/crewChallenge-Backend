let router = require("express").Router();

/* TEST */
router.post("/business", require("../controllers/business/postBusiness.js"));
router.get("/load", require("../csv/read"));
router.use("/test", require("../controllers/prueba"));

router.get("/", require("../controllers/user"));
router.use("/store", require("./store"));
router.use("/client", require("./client"));
router.use("/assessment", require("./assessment"));
router.use("/ecommerce", require("./ecommerce"));
router.use("/orders", require("./orders"));

module.exports = router;
