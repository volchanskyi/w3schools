/**
 * Created by Ivan on 1/22/2017.
 */
var buffer;

beforeEach(function() {
    buffer = makeBuffer();
});

it("returns empty string by default", function() {
    assert.strictEqual(buffer(), "");
});

it("adds arguments into buffer", function() {
    buffer('Is there');
    buffer(' Life');
    buffer(' on Earth?');
    assert.equal(buffer(), 'Is there Life on Earth?');
});

it("converts everything to string", function() {
    buffer(null);
    buffer(false);
    assert.equal(buffer(), "nullfalse");
});

it("empties buffer by using clear", function() {
    buffer("test");
    buffer.clear();
    buffer("first");
    buffer("second");
    assert.equal(buffer(), "firstsecond");
});