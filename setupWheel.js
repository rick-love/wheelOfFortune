
var theWheel = new Winwheel({
	'canvasId'    : 'myCanvas',
	'numSegments' : 8,
	'pointerAngle': 0,
	'pointerGuide':
	{
		'display' : true,
		'strokeStyle': 'red',
		'lineWidth' : 3
	},
	'text alignment' : 'outer',
	'rotationAngle'   : -30,
	'segments'    :
	[
	{'fillStyle' : '#eae56f', 'text' : '100'},
	{'fillStyle' : '#89f26e', 'text' : '5000'},
	{'fillStyle' : '#7de6ef', 'text' : 'Bankrupt'},
	{'fillStyle' : '#e7706f', 'text' : '300'},
	{'fillStyle' : '#eae56f', 'text' : '500'},
	{'fillStyle' : '#89f26e', 'text' : '200'},
	{'fillStyle' : '#7de6ef', 'text' : 'Bankrupt'},
	{'fillStyle' : '#e7706f', 'text' : '200'}
	],
	'animation' : 
	{
		'type': 'spinToStop',
		'duration': 5,
		'spins': 3,
		'callbackFinished': 'getSpinValue()'
	},

	'lineWidth'   : 3
});

var wheelSpinning = false;

function resetWheel()
{
                theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
                theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
                theWheel.draw();                // Call draw to render changes to the wheel.
                wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
            }

