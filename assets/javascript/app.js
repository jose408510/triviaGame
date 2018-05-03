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
 
    var questionCounter = 0;
    var wins =0;
    var timer = 100;
    var timeCounter;
    var wrongAnswer = false ; 




function timer(){
    timer--;
    $('#timer').text("Time Remaning " + timer);
    if(timer === 0){
        clearInterval(timeCounter);
        console.log(timer)
    }

}

// the first click 
$('#theClick').on("click", function(){
 alert("Get Ready Too Play");
 $('#theClick').remove();
 $('#choices').show(); 
 $('#questions').html(myQuestion[0].question);
timeCounter = setInterval(timer, 1000);
})  

// question show
// ('#questions').
// $('#questions').show(myQuestion[0].question, function(){
//     var letsTry = myQuestion[0].question;
//     letsTry = $('#questions').text(letsTry);
//     })

// the choices for the questions
for(var i = 0 ; i < myQuestion[questionCounter].choices.length; i++){
    $("#choices").append('<button type="button" class="btn btn-primary btn-lg btn-block" value='+i+'>'+myQuestion[questionCounter].choices[i]+'</button>');
    $('.btn').on('click', function(){
        var value = $(this).attr("value");
        if(value === myQuestion[0].answer){
        wins++;
        }
        console.log(value);
    })
}
