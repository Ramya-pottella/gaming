player_1_Name=localStorage.getItem("player1_Name");
player_2_Name=localStorage.getItem("player2_Name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_Name").innerHTML=player_1_Name+" : ";
document.getElementById("player2_Name").innerHTML=player_2_Name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("pq").innerHTML="Question Turn- "+player_1_Name;
document.getElementById("pa").innerHTML="Answer Turn- "+player_2_Name;
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)+parseInt(number2);
    console.log(actual_answer);
    question_number="<h4>"+number1+"+"+number2+"<h4>";
    input_box="<br>Answer:<input type='text' id='input_check_box' placeholder='Enter sum of given two numbers'>";
    check_button="<br><br><button class='btn btn-success' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("answer").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
