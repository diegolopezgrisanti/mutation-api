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
            for(let i = 0; i < (req.body.dna).length; i++) {
                if((req.body.dna).length != (req.body.dna)[i].length) {
                    let error = new Error("Wrong array dna (NxN)");
                    error.status = 400;
                    throw error;
                }
            }
            for(let i = 0; i < (req.body.dna).length; i++) {
                for(let j = 0; j < (req.body.dna)[i].length ; j++) {
                    if((req.body.dna)[i][j] != "A" && (req.body.dna)[i][j] != "C" 
                    && (req.body.dna)[i][j] != "G" && (req.body.dna)[i][j] != "T") {
                        let error = new Error("The nitrogenous base of DNA is invalid");
                        error.status = 400;
                        throw error;
                    }    
                }
            }

            const hasMutation = await this._mutationService.processMutation(req.body.dna);

            res.status(hasMutation ? 200 : 403).json({ "has_mutation": hasMutation });      
        } catch (err) {
            next(err);
        }

    }

}

module.exports = MutationController;