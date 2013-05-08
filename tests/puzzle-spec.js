define(function(require) {

    var puzzle = require('../src/puzzle');
    var expect = require('expect');

    describe('puzzle', function() {

        it('puzzle is existed', function() {
            expect(puzzle).to.be.ok();
            expect(puzzle.init).to.be.ok();
            expect(puzzle.push).to.be.ok();
            expect(puzzle.notExistedFunction).to.not.be.ok();
        });
    });

});

