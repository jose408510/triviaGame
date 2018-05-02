var score = 0;
var correct =  0;
var inCorrect= 0; 
var image = '../images/loading.gif'

// the first click 
$('#theClick').on("click", function(){
 alert("yo");
 $('#theClick').remove();
 $('mainOne').html(image);
})  


// function firstQuestion(){
//     $("#mainOne").html("hello" );
//     // ("<img src='../images/loading.gif' width='200px'/>");
// }


// ../images/retina_wood.png
// /assets/images/loading.gif