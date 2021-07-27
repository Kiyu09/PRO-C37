class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide();
    //write code to change the background color here
background("Light Blue");
    //write code to show a heading for showing the result of Quiz
fill(0);
textSize(30);
text("Result of the quiz", 340, 65);
text("-----------------------------", 320, 65);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      debugger;
      var display_Answers= 230;
      fill("Red");
      textSize(20);
      text("*NOTE: Contestant Who Answered coreect are highlighted in green color!", 130, 230);
      
      for( var plr in allContestant){
        debugger;
        var correctAnswer = "2";
        if(correctAnswer === allContestants(plr).answer)
        fill("Green ");
        else 
        fill("red");

        display_Answers+=30;
        textSize(20);
        text(allContestantS[plr] .name + ": " + allContestants [plr].answer, 250, display_Answers_);
    }
    
  }
    
  }

}
