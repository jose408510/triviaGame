var myQuestion = [
    {// 1st
    question: "What year was the first iPhone released?",
    choices:["1993","Yesterday","2007","2018"],
    answer: 2
}, 
    {// 2nd question
    question: "Who is the Main character in the Dark Knight?",
    choices: ["Luke Skywalker","Batman","The Joker", "Obama"],
    answer: 1
},
    {// 3rd
    question:"Who won the NBA championship last year?",
    choices:["The Warriors","The Lakers","Barcelona","The Cavs"],
    answer: 0
},
    {// 4th
    question:"Who is the CEO of Facebook ?",
    choices:["Jerry Brown","Mark Zuckaberg","Ironman","Oprah"],
    answer: 1
},
    {// 5th
    question:"Which of the four Cars is the fastest in the quarter mile?",
    choices:["Model S P100D","Dodge SRT 8","Prius","Rimac"],
    answer: 3
    }];
 
    losses = 0;
    var questionCounter = 0;
    var wins =0;
    var timer = 0;
    var timeCounter= [];
    var wrongAnswer = false ; 


function myFunction() {
    setInterval(function(){ 
        $('#timer').html(timer);}, 1000);
    }


// the first click 
$('#theClick').on("click", function(){
 alert("Get Ready Too Play");
 $('#theClick').remove();
 $('#choices').show(); 
 $('#questions').html(myQuestion[0].question);
 myFunction();
 for(var i = 0 ; i < myQuestion[questionCounter].choices.length; i++){
    $("#choices").append('<button type="button" class="btn btn-primary btn-lg btn-block answerButton" value='+i+'>'+myQuestion[questionCounter].choices[i]+'</button>');
}


})  

$(document).on('click', '.answerButton', function(){
    function upcoming(){
         $('#questions').html(myQuestion[questionCounter].question);
         $('#choices').empty();
         for(var i = 0 ; i < myQuestion[questionCounter].choices.length; i++){
            $("#choices").append('<button type="button" class="btn btn-primary btn-lg btn-block answerButton" value='+i+'>'+myQuestion[questionCounter].choices[i]+'</button>');
        }
        
        }
    var value = parseInt($(this).attr("value"));

    console.log(myQuestion[questionCounter].answer);
    if(value === myQuestion[questionCounter].answer){
    wins++; 
    alert("correct");
    }else{
        losses++;
        alert('Incorrect');
    }
    // console.log(value);
    if( questionCounter < myQuestion.length - 1) {
        questionCounter++;
        upcoming();
    } else {
        console.log("Wins: " + wins);
        alert("Game over\nWins:" + wins + "\nlosses: " + losses);
        // PRINT NEW SCREEN WITH SCORE
    }
})