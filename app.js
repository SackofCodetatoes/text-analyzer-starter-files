// your code here!
//ignore (, ), \, ., in word count
//display word count, unique word count, and average length of word

$('.user-input-form').submit(function(event){
  event.preventDefault();
  var statistics = {
    wordCount: 0,
    uniqueWords: 0,
    avgLength: 0
  };
  
  var userText = $(event.currentTarget).find('#user-text').val();
  var wordList = userText.replace(/[^a-zA-Z ]/g, "").split(" ");
  console.log(userText);
  analyze(wordList, statistics);
  $('.js-word-count').text(statistics.wordCount);
  $('.js-unique-words').text(statistics.uniqueWords);
  $('.js-avg-word-length').text(statistics.avgLength.toFixed(2) + ' characters');
  $('.text-report').removeClass('hidden');

  
  
  
});//end o jquery



function analyze(text, statistics){
  var wordCount = text.length;
  var avgWordLength = 0; //total num of letters / wordCount
  var uniqueWords = {};
  for(i = 0; i < text.length; i++){
    avgWordLength += text[i].length;
    if(text[i] in uniqueWords){
      uniqueWords[text[i]]++;
    } // end of if
    else{
      uniqueWords[text[i]] = 1;
    } //end of else
  } // end for
  /*console.log('wordCount: ' + wordCount);
  console.log('avgWordLength: '+ (avgWordLength / wordCount));
  console.log('uniqueWords: ' + Object.keys(uniqueWords).length);
  */
  
  statistics.wordCount = wordCount;

  statistics.avgLength = (avgWordLength / wordCount)
  
  statistics.uniqueWords = Object.keys(uniqueWords).length;
} //end of function

