/**
 * Created by Ivan on 1/11/2017.
 */

describe("mapArray", function() {

        it("Converts the string 'bla bl b' to array and finds 3 on position 0, 2 on position 1 and 1 on position 2", function () {
            assert.deepEqual(mapArray("bla bl b"), [3, 2, 1]);
        });

        it("Converts the string 'wright something' to array and finds 6 on position 0 and 9 on position 1", function () {
        assert.deepEqual(mapArray("wright something"), [6, 9]);
        });

});

