const { Mutation } = require("../models");
class StatsService {

    /**
     * Returns true if it finds a mutation
     * @param {*} dna 
     * @returns boolean
     */
    getStats = async () => {
        try {
            const countMutations = await Mutation.find({hasMutation: true}).count();
            const countNoMutation = await Mutation.find({hasMutation: false}).count();

            const ratio = (countMutations / countNoMutation).toFixed(2);

            return { "count_mutations": countMutations, "count_no_mutation": countNoMutation, "ratio": ratio };        

        } catch (error) {
            throw error;
        }
    }
    
}
module.exports = StatsService;