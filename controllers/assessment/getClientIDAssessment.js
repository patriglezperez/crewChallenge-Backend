const { FindByParams } = require("../../managers/AssessmentManager");
const processAssessment = require("../../utils/processAssessment")

/**
 * Recovery of all Assessment associated with a client,
 * @param {json} req -- req.user.uid = uuid_client
 * @returns {json} res
 */
 async function getClientIDAssessment(req, res) {
    try {
        /// tendria q venir ordenado por fecha como coño se lo digo al equallizer
        const assessment = await FindByParams({"uuid_client": req.user.uid});
        const recoveryAssessment = assessment ? processAssessment(assessment) : null
        if (assessment) {
            res.json({"assessment": recoveryAssessment});
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = getClientIDAssessment;