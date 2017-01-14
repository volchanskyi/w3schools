/**
 * Created by Ivan on 1/14/2017.
 */

describe("sumArgs", function() {

    it("Function prevents null values and sets 0 instead of null", function () {
        assert.equal(sumArgs(null), 0);
    });

    it("Function prevents undefined values and sets 0 instead of undefined", function () {
        assert.equal(sumArgs(undefined), 0);
    });

    it("Sums the numbers", function () {
        assert.strictEqual(sumArgs(3, 10, 15), 28);
    });

    it("Function prevents NaN values and sets 0 instead of NaN", function () {
        assert.isNotNaN(sumArgs(NaN, NaN, NaN), 0);
    });

});
