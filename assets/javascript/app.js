var myQuestion = [
    {// 1st
    question: "What year was the first iPhone released?",
    choices:["1993","Yesterday","2007","2018"],
    answer: 3
}, 
    {// 2nd question
    question: "Who is the Main character in the Dark Knight?",
    choices: ["Luke Skywalker","Batman","The Joker", "Obama"],
    answer: 2
},
    {// 3rd
    question:"Who won the NBA championship last year?",
    choices:["The Warriors","The Lakers","Barcelona","The Cavs"],
    answer: 1 
},
    {// 4th
    question:"Who is the CEO of Facebook ?",
    choices:["Jerry Brown","Mark Zuckaberg","Ironman","Oprah"],
    answer: 2
},
    {// 5th
    question:"Which of the four Cars is the fastest in the quarter mile?",
    choices:["Model S P100D","Dodge SRT 8","Prius","Rimac"],
    answer: 4
    }];
 
    var time = 120;
    var timeCounter;
    var wrongAnswer = false ; 
function timer(){
    
}

// the first click 
$('#theClick').on("click", function(){
 alert("Get Ready Too Play");
 $('#theClick').remove();
 $('#choices').show(); 
})  

// the first question
// function myQuest(firstOne){
//     var questionText = $('<p>').text(firstOne.myQuestion[0]);
//     $('#questions').append(questionText);
//     $("#questions").show('helo');
// }

$('#questions').show(myQuestion[0].question, function(){
    var letsTry = myQuestion[0].question;
    letsTry = $('#questions').text(letsTry);
    })





$('#button1').show(myQuestion[0].choices[0], function(){
var newPress = myQuestion[0].choices[0];
newPress = $('#button1').html(newPress);
console.log(newPress);
})

$('#button2').show(myQuestion[0].choices[1], function(){
var secondPress = myQuestion[0].choices[1];
secondPress = $('#button2').html(secondPress);
console.log(secondPress);
})

$('#button3').show(myQuestion[0].choices[2], function(){
var thirdPress = myQuestion[0].choices[2];
thirdPress = $('#button3').html(thirdPress);
console.log(thirdPress);
})

$('#button4').show(myQuestion[0].choices[3], function(){
    var fourthPress = myQuestion[0].choices[3];
    fourthPress = $('#button4').html(fourthPress);
    console.log(fourthPress);
})





// $("#questions").text(myQuestion.question[0]);

// for(var i = 0; i < choices.lenght; i++){
//  choices(i).html('#button1');    
// }
