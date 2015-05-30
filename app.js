/*
* Darayavaus Grayson
* 5-29-2015
* Color Memory Game - A simple game where the player clicks different square to 
* find the matching color
*/

// color bank
var colors = ["blue", 'yellow', 'green', 'purple', 'cyan', 'pink',
              "black", 'aqua'];

// array used to track which colors have been assigned twice
var usedColors = []; 	

// array used to store the location of the assigend colors	
var assignedColors = new Array(17); 

var colorPicked = false; 
var counter = {blue:0, yellow:0, green:0, purple:0, cyan:0, pink:0, 
               black:0, aqua:0}

var class1, class2; 
var firstEle, secondEle; 
var clickedSquare = false; 
var matches = 0; 

var main = function(){
    
    assignedColors[0] = ' '; 
    assignColors(); 
    console.log(assignedColors); 
    
    
    $('.back').click(function(event){

    	var card = event.target.id;  
    	var id = parseID(card); 

        $(this).toggleClass('sq-' + assignedColors[id]); 

        if(clickedSquare == false){
    		firstEle = $(this); 
    		class1 = ('sq-' + assignedColors[id]);
    		clickedSquare = true; 
    	}
    	else{
    		secondEle = $(this);
    		class2 = ('sq-' + assignedColors[id]);
    		checkMatch();
    	}
    }); 
}

function checkMatch(){
	console.log("entered check match");
	if(class1 == class2){
		firstEle.toggleClass('matched'); 
		secondEle.toggleClass('matched');
		console.log('matched'); 
		matches++; 
	}
	else{

		// Shortly pause to allow second card color to be seen
		setTimeout(function(){
   			firstEle.toggleClass(class1); 
   			secondEle.toggleClass(class2); 
		}, 300);
		
	}
	clickedSquare = false; 
}

// parses teh ID of the clicked square and
// returns the number 
function parseID(card){
	var len = card.length; 

	if(len == 5)
	{
		var num = card[3] + card[4]; 
		//console.log(num); 
	}
	else
	{
		var num = card[3]; 
		//console.log(num);
	}

	return Number(num); 
}

// Assign 8 different colors to different array cells
// These will then be assigned to individual div elements
function assignColors(){
    for(var i = 1; i <= 16; i++){

        while(!colorPicked){
        	console.log("entered loop");
           var num =  Math.round(Math.random()*7); 
           
           var color = colors[num]; 
           console.log(usedColors.indexOf(color)); 

            if(usedColors.indexOf(color) == -1){
            	console.log("entered check");
                incrementColor(color); 
                assignedColors[i] = color;                     
                colorPicked = true; 
            }
        }
        
        colorPicked = false; 
    }
}

// Increment the color objects 
// If a color has been used twice push the color
// to teh useColors array
function incrementColor(color){
    if(color == 'blue'){
        counter.blue = counter.blue + 1; 
        if(counter.blue == 2)
             usedColors.push(color); 
    }
    else if(color == 'yellow'){
        counter.yellow = counter.yellow + 1; 
        if(counter.yellow == 2)
             usedColors.push(color); 
    }
    else if(color == 'green'){
        counter.green = counter.green + 1; 
        if(counter.green == 2)
             usedColors.push(color); 
    }
    else if (color == 'purple'){
        counter.purple = counter.purple + 1; 
        if(counter.purple == 2)
             usedColors.push(color); 
    }
    else if(color == 'cyan'){
        counter.cyan = counter.cyan + 1; 
        if(counter.cyan == 2)
             usedColors.push(color); 
    }
    else if(color == 'pink'){
        counter.pink = counter.pink + 1; 
        if(counter.pink == 2)
             usedColors.push(color); 
    }
    else if(color == 'black'){
        counter.black = counter.black + 1; 
        if(counter.black == 2)
             usedColors.push(color); 
    }
    else if(color == 'aqua'){
        counter.aqua = counter.aqua + 1; 
        if(counter.aqua == 2)
             usedColors.push(color); 
    }

    console.log(usedColors); 
    //printCounter(); 
}

// Used for debugging
function printCounter(){
	console.log("blue: " + counter.blue); 
	console.log("black: " + counter.black); 
	console.log("yellow: " + counter.yellow); 
	console.log("green: " + counter.green); 
	console.log("aqua: " + counter.aqua); 
	console.log("cyan: " + counter.cyan); 
	console.log("purple: " + counter.purple); 
	console.log("pink: " + counter.pink); 
}

$(document).ready(main); 