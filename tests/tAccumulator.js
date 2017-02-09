/**
 * Created by Ivan on 2/5/2017.
 */
// sinon.stub(window, "prompt");
describe("Accumulator(1)", function() {
    var accumulator;
    before(function() {
        accumulator = new Accumulator(1);
    });

    beforeEach(function() {
        sinon.stub(window, "prompt");
    });

    afterEach(function() {
        prompt.restore();
    });

    it("starting value 1", function() {
        assert.equal(accumulator.value, 1);
    });

    it("after we insert 0 value 1", function() {
        prompt.returns("0");
        accumulator.read();
        assert.equal(accumulator.value, 1);
    });

    it("after we insert 1 value 2", function() {
        prompt.returns("1");
        accumulator.read();
        assert.equal(accumulator.value, 2);
    });

    it("after we insert 2 value 4", function() {
        prompt.returns("2");
        accumulator.read();
        assert.equal(accumulator.value, 4);
    });

});