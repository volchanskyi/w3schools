/**
 * Created by Ivan on 12/26/2016.
 */
describe("find", function() {

    describe("return position where the element was found", function() {
        it("in array [1,2,3] finds 1 on position 0", function() {
            assert.equal(findHero([1, 2, 3], 1), 0);
        });
        it("in array [1,2,3] finds 2 on position 1", function() {
            assert.equal(findHero([1, 2, 3], 2), 1);
        });
        it("in array [1,2,3] finds 3 on position 2", function() {
            assert.equal(findHero([1, 2, 3], 3), 2);
        });
    });

    it("if element is not found, returns -1", function() {
        assert.equal(findHero([1, 2, 3], 0), -1);
    });

    it("recognize false or null from 0 ", function() {
        assert.equal(findHero([false, true, null], 0), -1);
    });

    it("recognize 1 from  true", function() {
        assert.equal(findHero([1, 2, 3], true), -1);
    });
});