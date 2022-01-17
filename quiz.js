player1_name=localStorage.getItem("Playe_1_name");
player2_name=localStorage.getItem("Playe_2_name");

player1_score=0;
player2_score=0;

document.getElementById("plr1name").innerHTML=player1_name+": ";
document.getElementById("plr2name").innerHTML=player2_name+": ";

document.getElementById("valuescore1").innerHTML=player1_score;
document.getElementById("valuescore2").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - " + player2_name;

function send(){
    number1=document.getElementById("input_word1").value;
    number2=document.getElementById("input_word2").value;
    actual_answer=parseInt(number1) * parseInt(number2);
    console.log(actual_answer);
    question_number="<h4>"+number1+"X"+number2+"</h4>";
    input_box="<br> answer: <input type=text' id='guessbox'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("input_word1").value="";
    document.getElementById("input_word2").value="";

}