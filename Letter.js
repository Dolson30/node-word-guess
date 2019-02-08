function Letter (letter)
{
    this.letter = letter,
    this.revealed = false,
    this.return = function()
    {
        if(this.revealed)
        {
            return this.letter;
        }
        else if(!this.revealed)
        {
            return "_";
        }
    },
    this.guess = function(guess)
    {
        if(guess.toLowerCase() === this.letter)
        {
            this.revealed = true;
        }
    }
};

module.exports = Letter;