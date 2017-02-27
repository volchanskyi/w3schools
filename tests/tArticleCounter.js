/**
 * Created by Ivan on 2/13/2017.
 */
describe("Article.showStats", function() {
    before(function() {
        sinon.stub(window, "alert");
        this.clock = sinon.useFakeTimers();

    });

    after(function() {
        window.alert.restore();
        this.clock.restore();
    });

    Article.count = 0;

    it("Shows amount of articles and date of the last created article", function() {

        new Article();
        this.clock.tick(100);
        new Article();
        Article.showStats();

        assert(alert.calledWith("Total: 2, last one: " + new Date()));
    });

    it("one more article...", function() {

        this.clock.tick(100);
        new Article();
        Article.showStats();

        assert(alert.calledWith("Total: 3, last one: " + new Date()));
    });
});