var Letter = require('./Letter.js');

function Word(choice)
{   
    this.win = false,
    this.choice = choice,
    this.letterArray = [],
    this.print = function()
    {
        var tempString = "";
        for(let a of this.letterArray)
        {
            tempString += a.return() + " ";
        }
        console.log(tempString);
        if(tempString.indexOf("_") === -1)
        {
            console.log("You Win!");
            this.win = true;
        }
    },
    this.guess = function(guesser)
    {
        for(let a of this.letterArray)
        {
            a.guess(guesser);
        }
        this.print();
    },
    this.build = function()
    {
        for (var i =0; i<this.choice.length;i++)
        {   
            var lett = choice.charAt(i);
            var temp = new Letter(lett);
            this.letterArray.push(temp);
        }

    }
};


module.exports = Word;