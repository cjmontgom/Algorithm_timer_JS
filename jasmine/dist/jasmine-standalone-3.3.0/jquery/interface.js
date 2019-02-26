$ (document).ready(function() {

    var algorithmTimer = new AlgorithmTimer();

    $('#reverse').submit(function(event) {
      event.preventDefault();
      var input = $('#input').val().split(",");
      algorithmTimer.timeReverse(input);
      $('#data').text('Call to \'reverse\' took ' + algorithmTimer.data.slice(-1) + ' milliseconds.');
      console.log(algorithmTimer.data);
    });

    function markUpTable(arrayLength, time) {
      var markup = "<tr><td>" + arrayLength + "</td><td>" + time + "</td></tr>";
      $('#rev_tbl tbody').append(markup);
    };

    $('#5000').on('click', function(event) {
      event.preventDefault();
      var array = algorithmTimer.createRandArray(5000);
      var time = algorithmTimer.timeReverse(array);
      markUpTable(5000, time)
    });

    $('#50000').on('click', function(event) {
      event.preventDefault();
      var array = algorithmTimer.createRandArray(50000);
      var time = algorithmTimer.timeReverse(array);
      markUpTable(50000, time)
    });

    $('#500000').on('click', function(event) {
      event.preventDefault();
      var array = algorithmTimer.createRandArray(500000);
      var time = algorithmTimer.timeReverse(array);
      markUpTable(500000, time)
    });

    $('#5000000').on('click', function(event) {
      event.preventDefault();
      var array = algorithmTimer.createRandArray(5000000);
      var time = algorithmTimer.timeReverse(array);
      markUpTable(5000000, time)
    });

    $('#50000000').on('click', function(event) {
      event.preventDefault();
      var array = algorithmTimer.createRandArray(50000000);
      var time = algorithmTimer.timeReverse(array);
      markUpTable(50000000, time)
    });





});
