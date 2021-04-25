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
        dna: ["CGTA","CCAG","CACG","CTAC"],
        expects: true
    },
    {
        num: 4,
        dna: ["GTCAC","AGGAT","TAGAC","GCCAT","TTAAC"],
        expects: true
    },
];