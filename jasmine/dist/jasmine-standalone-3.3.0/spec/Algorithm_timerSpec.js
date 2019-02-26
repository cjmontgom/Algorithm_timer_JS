describe ("AlgorithmTimer", function() {
    var algorithmTimer;
    beforeEach(function() {
        algorithmTimer = new AlgorithmTimer()
    });

    it ('stores data to plot a graph', function() {
      expect(algorithmTimer.reverseData).toEqual([]);
      expect(algorithmTimer.sortData).toEqual([]);
    });

    describe ('createRandArray', function() {
      it('creates an array of random integers', function() {
        expect(algorithmTimer.createRandArray(50).length).toEqual(50);
      });
    });

    describe ('average', function() {
      it('calculates the average from an array of data', function() {
        expect(algorithmTimer.average([2,3,4,5,6])).toEqual(4);
      });
    });

    describe ('timeReverse', function() {
      it('calculates the time taken to execute the reverse function', function() {
        expect(algorithmTimer.timeReverse([2,5,3,6,8,4,3,9])).toEqual(jasmine.any(Number));
      });
    });

    describe ('timeSort', function() {
      it('calculates the time taken to execute the sort function', function() {
        expect(algorithmTimer.timeSort([2,5,3,6,8,4,3,9])).toEqual(jasmine.any(Number));
      });
    });

    describe ('dealWithData', function() {
      it('logs the time taken to run a function to the console', function() {
        console.log = jasmine.createSpy("log");
        algorithmTimer.dealWithData('reverseData', 400);
        expect(console.log).toHaveBeenCalledWith(400);
      });
      it('adds the time taken to the data storage', function() {
        algorithmTimer.dealWithData('reverseData', 400);
        expect(algorithmTimer.reverseData).toContain(400);
      });
    });

});
