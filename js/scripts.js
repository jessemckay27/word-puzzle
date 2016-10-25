
var finishedSentence = function(sentence) {
  var letters = sentence.split("");
  var newSentence = [];

  for (var index = 0; index < letters.length; index += 1) {
    //var newSentence = sentence.replace(vowels[index], "-");
    if (letters[index] === "a" || letters[index] === "e" || letters[index] === "i" || letters[index] === "o" || letters[index] === "u") {
      newSentence.push("-");
    } else {
      newSentence.push(letters[index]);
    }
  }
  var output = newSentence.join("");
  return output;
}

$(document).ready(function(){
  $("form#puzzle").submit(function(event){
    event.preventDefault();
    var sentence = $("#sentence").val();
    var lettersJoined = finishedSentence(sentence);
    $("p").text(lettersJoined);
  });
});


// $(document).ready(function(){
//   $("form#puzzle").submit(function(event){
//     event.preventDefault();
//     // var vowels = ["a", "e", "i", "o", "u"];
//     var sentence = $("#sentence").val();
//     var letters = sentence.split("");
//     var newSentence = [];
//
//     for (var index = 0; index < letters.length; index += 1) {
//       //var newSentence = sentence.replace(vowels[index], "-");
//       if (letters[index] === "a" || letters[index] === "e" || letters[index] === "i" || letters[index] === "o" || letters[index] === "u") {
//         newSentence.push("-");
//       } else {
//         newSentence.push(letters[index]);
//       }
//     }
//     var lettersJoined = newSentence.join("");
//     // alert(lettersJoined);
//
//     $("p").text(lettersJoined);
//
//   });
// });
