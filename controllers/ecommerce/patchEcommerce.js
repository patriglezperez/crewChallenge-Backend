const { FindEcommerce, UpdateEcommerce } = require("../../managers/EcommerceManager");

/**
 * Ecommerce all data recovery
 * @param {json} req 
 * @returns {json} res
 */
 async function patchEcommerce(req, res) {
    try {
        const ecommerce = await FindEcommerce({"uuid_ecommerce": req.user.uid});
        
        if (ecommerce) {
            /// si existe actualizamos pero, si falla ??? los manager no me dicen nada :S
            await UpdateEcommerce(req.user.uid, req.body)
            res.json();
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = patchEcommerce;