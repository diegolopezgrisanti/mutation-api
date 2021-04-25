module.exports = [
    {
        num: 1,
        dna: ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"],
        expects: true
    },
    {
        num: 2,
        dna: ["ATG","CAG","TTA"],
        expects: false
    },
    {
        num: 3,
        dna: ["CGTA","TCAG","AACG","GTAC"],
        expects: true
    },
    {
        num: 4,
        dna: ["GTCAC","AGGCT","TAGTC","GCCAT","TTAGC"],
        expects: false
    },
];