const { Mutation } = require("../models");
class StatsService {

    /**
     * Returns true if it finds a mutation
     * @param {*} dna 
     * @returns boolean
     */
    getStats = async () => {
        try {
            const countTotalRegisters = await Mutation.find().count();
            const countMutations = await Mutation.find({hasMutation: true}).count();

            const countNoMutation = countTotalRegisters - countMutations;
            const ratio = countMutations / countTotalRegisters;

            return { "count_mutations": countMutations, "count_no_mutation": countNoMutation, "ratio": ratio };        

        } catch (error) {
            throw error;
        }
    }
    
}
module.exports = StatsService;