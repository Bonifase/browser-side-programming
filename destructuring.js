
describe("destrucuring", function(){
    'use strict';

    it("destructure arrays", function() {
        let x = 3;
        let y = 4;
        [q, w] = [x, y];

        expect(q).toBe(3);
        expect(q).toBe(3);
    });
});