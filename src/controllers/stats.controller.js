const { StatsService } = require('../services');

class StatsController {

    constructor(){
        this._statsService = new StatsService();
    }

    /**
     * Get mutation stats 
     * @param {*} req 
     * @param {*} res 
	 * @param {*} next
     */    
     getStats = async (req, res, next) => {
        try {
            const stats = await this._statsService.getStats();
            
            res.status(201).json(stats);  
        } catch (err) {
            next(err)
        }
    }

}
module.exports = StatsController;