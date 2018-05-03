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
function timer(){

}

// the first click 
$('#theClick').on("click", function(){
 alert("Get Ready Too Play");
 $('#theClick').remove();
 $('#choices').show();   
})  

// the first question
function myQuest(myQuestion){
    var questionText = $('<p>').text(myQuestion.question);
    append(questionText);
    questionText.show();
}









// for(var i = 0; i < time.lenght; i++){
//  time(i).html('questions');    
// }

// make a true or false for start game 
// add css to div choices 
