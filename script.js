var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");
var lizard = document.querySelector("#lizard");
var spock = document.querySelector("#spock");
var userChoice;
var computerChoice;

function compChoice()
    {   
        console.log("inside the computer choice fn");
        computerChoice = Math.random();

        if (computerChoice < 0.20) 
        {
            alert("computer chose rock");
            return "rock";
        } 
        else if(computerChoice <= 0.40) 
        {
            alert("computer chose paper");
            return "paper";
        } 
        else if(computerChoice <= 0.60) 
        {
            alert("computer chose scissors");
            return "scissors";
        } 
        else if(computerChoice <= 0.80) 
        {
            alert("computer chose lizard");
            return "lizard";
        } 
        else 
        {
            alert("computer chose spock");
            return "spock";
        }
    }

function usChoice() 
	{
		rock.addEventListener("click", () => {
			alert("you chose rock");
			alert(compare("rock", compChoice()));
			

    	});

	    paper.addEventListener("click", () => {
            alert("you chose paper");
		    alert(compare("paper", compChoice()));
		    
	    });

        scissors.addEventListener("click", () => {
            alert("you chose scissors");
		    alert(compare("scissors", compChoice()));
		    
	    });

        lizard.addEventListener("click", () => {
            alert("you chose lizard");
		    alert(compare("lizard", compChoice()));
		    
	    });

	    spock.addEventListener("click", () => {
            alert("you chose spock");
		    alert(compare("spock", compChoice()));
	    });
	}

function compare(choice1, choice2) 
{
    if(choice1 === choice2) 
    {
        return "The result is a tie!";
    }

    if(choice1 === "rock") 
    {
        if(choice2 === "scissors" || choice2 === "lizard")
        {
            return "you win";
        } 
        else 
        {
            return "computer wins";
        }
    }

    if(choice1 === "paper" ) 
    {
        if(choice2 === "rock" || choice2 === "spock") 
        {
            return "you win";
        } 
        else 
        {
                return "computer wins";       
        }
    }

        if(choice1 === "scissors") 
        {
            if(choice2 === "paper" || choice2 === "lizard") 
            {
                return "you win";
            } 
            else 
            {
                    return "computer wins";
            }
        }

        if(choice1 === "lizard") 
        {
            if(choice2 === "paper" || choice2 === "spock") 
            {
                return "you win";
            } 
            else 
            {
                    return "computer wins";
            }
        }

        if(choice1 === "spock") 
        {
            if(choice2 === "scissors" || choice2 === "rock") 
            {
                return "you win";
            } 
            else 
            {
                    return "computer wins";
            }
        }

};


    usChoice();
