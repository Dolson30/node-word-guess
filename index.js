var Word = require('./Word.js');
var inquire = require('inquirer');
var first;
var wordArray = ["cardinals","falcons","ravens","bills","panthers","bears","bengals","browns","cowboys","broncos","lions","packers","texans","colts","jaguars","chiefs","dolphins","vikings","patriots","saints","giants","jets","raiders","eagles","steelers","rams","chargers","49ers","seahawks","buccaneers","titans","redskins"];
var guessString ='';
function startGame()
{
    guessString='';
    var random = Math.floor(Math.random() * Math.floor(32))+1;
    var choice = wordArray[random];
    first = new Word(choice);
    first.build();
    first.print()
    play();
}
function play()
{
  if(!first.win)
    {
        inquire.prompt([
            {
                type:"input",
                name:"guess",
                message:"Guess a letter!"
            }
        ]).then(function(answers){
            if(guessString.indexOf(answers.guess.charAt(0)) === -1)
            {
                guessString += answers.guess.charAt(0);
                first.guess(answers.guess.charAt(0));
                play();
            }
            else if(guessString.indexOf(answers.guess.charAt(0)) != -1)
            {
                console.log("Enter an option you havent chosen before!");
                play();
            }
        })
    }
    else
    {
        playAgain();
    }
};

startGame();


function playAgain()
{
    inquire.prompt([
        {
            type:"input",
            name:"choice",
            message:"Would you like to play again?"
        }
    ]).then(function(answers){
        if(answers.choice.toLowerCase() === "yes")
        {
            startGame();
        }
        else if(answers.choice.toLowerCase() === "no")
        {
            process.exit();
        }
        else
        {
            console.log("Enter a valid response!");
            playAgain();
        }
    });
}