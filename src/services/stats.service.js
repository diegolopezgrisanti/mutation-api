
class StatsService {

    /**
     * Returns true if it finds a mutation
     * @param {*} dna 
     * @returns boolean
     */
    getStats = async () => {
        try {
            //TODO logic to get stats from db
            
            return { "count_mutations":40, "count_no_mutation": 100, "ratio": 0.4 };        

        } catch (error) {
            throw error;
        }
    }
    
}
module.exports = StatsService;