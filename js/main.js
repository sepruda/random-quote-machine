$( document ).ready(function() {
  $('#getQuoteButton').on("click", function() {
         $.get("https://random-quote-generator.herokuapp.com/api/quotes/random", function( data ) {
           var text = (data.quote + " - " + data.author)
           $( "#quote" ).html(text);
            $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + text);
           
  
  /* $("#getQuoteButton").on('click', function() {
    var result = $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/", function(a) {
      console.log(result); */
});  

  
});
                            });