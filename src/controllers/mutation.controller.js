class MutationController {

    constructor(mutationService) {
        this._mutationService = mutationService;
    }

    /**
     * processMutation
     * @param {*} req 
     * @param {*} res 
	 * @param {*} next
     */
    processMutation = async (req, res, next) => {
        try {
            if(req.body.dna == undefined || !Array.isArray(req.body.dna)) {
                let error = new Error("dna is required and it must be an array!");
                error.status = 400;
                throw error;
            }

            const hasMutation = await this._mutationService.processMutation(req.body.dna);

            res.status(hasMutation ? 200 : 403).json({ "has_mutation": hasMutation });      
        } catch (err) {
            next(err);
        }

    }

}

module.exports = MutationController;