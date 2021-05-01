const { Mutation } = require("../models");
class MutationService {

    /**
     * Returns true if it finds a mutation and saves stats
     * @param {*} dna 
     * @returns boolean
     */
    processMutation = async (dna) => {
        try {
            const searchDNA = await Mutation.findOne({dna: JSON.stringify(dna)}).exec();
            let hasMutation;
            if(searchDNA === null) {
                hasMutation = this.hasMutation(dna);
                const mutation = new Mutation({
                    dna: JSON.stringify(dna),
                    hasMutation
                });
                await mutation.save();
            } else {
                hasMutation = searchDNA;
            }
 
            return hasMutation;

        } catch (error) {
            throw error;
        }
    }

    /**
     * Returns true if it finds a mutation
     * @param {*} dna 
     * @returns boolean
     */
    hasMutation = (dna) => {
        let hasHorizontalMutation = this.hasHorizontalMutation(dna);
        let hasVerticalMutation = this.hasVerticalMutation(dna);
        let hasDiagonalMutation = this.hasDiagonalMutation(dna);
        let hasReverseDiagonalMutation = this.hasReverseDiagonalMutation(dna);
        return hasHorizontalMutation || hasVerticalMutation || hasDiagonalMutation || hasReverseDiagonalMutation;
    }

    hasHorizontalMutation = (dna) => {
        let testRegex = /AAAA|TTTT|CCCC|GGGG/;
        for (const sequence of dna) {
            if(testRegex.test(sequence)){
                return true;
            }
        }
        return false;
    }

    hasVerticalMutation = (dna) => {
        let verticalADN = [];
        for(let i = 0; i < dna[0].length; i++){
            let verticalSequence = "";
            for(let j = 0; j < dna.length; j++) {
                verticalSequence += dna[j].charAt(i);
            }        
            verticalADN.push(verticalSequence);
        }
        let testRegex = /AAAA|TTTT|CCCC|GGGG/;
        for (const sequence of verticalADN) {
            if(testRegex.test(sequence)){
                return true;
            }
        }
        return false;
    }
    
    hasDiagonalMutation = (dna) => {
        let diagonalSequence = "";
        for(let j = 0; j < dna.length; j++) {
            diagonalSequence += dna[j].charAt(j);
        }
        let testRegex = /AAAA|TTTT|CCCC|GGGG/;
        if(testRegex.test(diagonalSequence)) {
            return true;
        }
        return false;
    }    

    hasReverseDiagonalMutation = (dna) => {
        let reverseDiagonalSequence = "";
        for(let j = 0 ; j < dna.length; j++) {
            reverseDiagonalSequence += dna[j].charAt(dna.length-j-1);
        }
        let testRegex = /AAAA|TTTT|CCCC|GGGG/;
        if(testRegex.test(reverseDiagonalSequence)) {
            return true;
        }
        return false;
    }
}
module.exports = MutationService;