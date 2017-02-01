/**
 * Created by Ivan on 1/31/2017.
 */
sinon.stub(window, "prompt");

prompt.onCall(0).returns("2");
prompt.onCall(1).returns("3");

describe("calculator", function() {
    before(function() {
        calculator.read();
    });

    it("When put 2 and 3 equal 5", function() {
        assert.equal(calculator.sum(), 5);
    });

    it("When put 2 and 3 equal 6", function() {
        assert.equal(calculator.mul(), 6);
    });
});

after(function() {
    prompt.restore();
});