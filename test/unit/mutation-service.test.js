const expect = require('chai').expect;
const { MutationService } = require('../../src/services');
const hasMutationTestCases = require("../mocks/has-mutation.mock");
const hasHorizontalMutationTestCases = require("../mocks/has-horizontal-mutation.mock");
const hasVerticalMutationTestCases = require("../mocks/has-vertical-mutation.mock");
const hasDiagonalMutationTestCases = require("../mocks/has-diagonal-mutation.mock");
const hasReverseDiagonalMutationTestCases = require("../mocks/has-reverse-diagonal-mutation.mock");

describe("Unit tests for Mutation Service", () => {
    let mutationService;
    before(() => {
        mutationService = new MutationService(); 
    });

    describe("hasMutation unit tests", () => {
        hasMutationTestCases.forEach(testcase => {
            it(`Test # ${testcase.num} expects ${testcase.expects}`, () => {
                const result = mutationService.hasMutation(testcase.dna);
                expect(result).to.equal(testcase.expects);
            });
        })
    })

    describe("hasHorizontalMutation unit tests", () => {
        hasHorizontalMutationTestCases.forEach(testcase => {
            it(`Test # ${testcase.num} expects ${testcase.expects}`, () => {
                const result = mutationService.hasHorizontalMutation(testcase.dna);
                expect(result).to.equal(testcase.expects);
            });
        })
    })

    describe("hasVerticalMutation unit tests", () => {
        hasVerticalMutationTestCases.forEach(testcase => {
            it(`Test # ${testcase.num} expects ${testcase.expects}`, () => {
                const result = mutationService.hasVerticalMutation(testcase.dna);
                expect(result).to.equal(testcase.expects);
            });
        })
    })

    describe("hasDiagonalMutation unit tests", () => {
        hasDiagonalMutationTestCases.forEach(testcase => {
            it(`Test # ${testcase.num} expects ${testcase.expects}`, () => {
                const result = mutationService.hasDiagonalMutation(testcase.dna);
                expect(result).to.equal(testcase.expects);
            });
        })
    })

    describe("hasReverseDiagonalMutation unit tests", () => {
        hasReverseDiagonalMutationTestCases.forEach(testcase => {
            it(`Test # ${testcase.num} expects ${testcase.expects}`, () => {
                const result = mutationService.hasReverseDiagonalMutation(testcase.dna);
                expect(result).to.equal(testcase.expects);
            });
        })
    })
})