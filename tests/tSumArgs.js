/**
 * Created by Ivan on 1/14/2017.
 */

describe("sumArgs", function() {

    it("Function prevents NaN values and sets 0 instead of null", function () {
        assert.equal(sumArgs(null), 0);
    });

    it("Sum the numbers", function () {
        assert.strictEqual(sumArgs(3, 10, 15), 28);
    });

});
