
var primary = '#5992b2';
var primaryLight = '#b0cbda';
var primaryDark = '#345b71';

var screens = 3;
var barWidth = 200;
var barHeight = 30;

function init() 
{

	var stage = new createjs.Stage("activity8");

	stage.enableMouseOver(); //Enable MouseOver events

	var barcommands = [];

 	var tray = new createjs.Shape();
    tray.graphics.setStrokeStyle(5,"square");
    tray.graphics.beginStroke(primaryLight);
    tray.graphics.beginFill(primary);
    tray.graphics.drawRoundRect(10,10,930,600,10);
    
    var star = new createjs.Shape();
    star.graphics.setStrokeStyle(2,"square").beginStroke(primaryLight);
    var starcommand = star.graphics.beginFill(primary).command;
    star.graphics.drawPolyStar( (barWidth * screens)-15, 15, 40, 5, .5);
	
	barcommands.push(starcommand);

	var statusbar = new createjs.Container();
 
	

	for(var i=0; i<screens;i++)
	{	
		var barX = barWidth * i;
		var barY = 0;
		var bar = new createjs.Shape();
		bar.graphics.setStrokeStyle(2,"square").beginStroke(primaryLight);
   		
   		var fillcommand = bar.graphics.beginFill(primary).command;
   		
   		barcommands.push(fillcommand);

   		if(i==0)
   		{
			bar.graphics.drawRoundRectComplex(barX,barY,barWidth,barHeight,barHeight/2,0,0,barHeight/2).endFill();
   		} else if (i==screens-1)
   		{
			bar.graphics.drawRoundRectComplex(barX,barY,barWidth,barHeight,0,barHeight/2,barHeight/2,0).endFill();
   		} else {
   			bar.graphics.drawRect(barX,barY,barWidth,barHeight).endFill();	
   		}
	    
	    statusbar.addChild(bar);
	}



	statusbar.addChild(star);

	statusbar.y = 50;
	statusbar.x = 50;
    
    statusbar.on('mouseover', function(evt) { //Change colour on mouseOver

barcommands[0].style = "#ff0000";
barcommands[1].style = "#ff0000";
 	barcommands[2].style = "#ff0000";
barcommands[3].style = "#ff0000";
        stage.update(evt);
    });


statusbar.on('mouseout', function(evt) { //Change colour on mouseOver

barcommands[0].style = primary;
barcommands[1].style = primary;
 	barcommands[2].style = primary;
barcommands[3].style = primary;
        stage.update(evt);
    });



    stage.addChild(tray);
	stage.addChild(statusbar);

 	stage.update();



	

}