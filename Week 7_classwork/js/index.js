
$(document).ready(function() 
{
    /*celsius to f*/
      $("#fButton").click(function()
        {
            
          var inputVal1 = $("#valToConvertToF");
            var outputVal1 = $("#result1");    
        // read value entered by user
        // convert it from string to number
        var initialVal1 = parseFloat(inputVal1.val());
        console.log(initialVal1);
        // bulletproof
        if(isNaN(initialVal1))
        {
            window.alert("Enter a valid number!");
            inputVal1.val("");
            outputVal1.val("");
        }
        else
        {
            // calculate it, to 2 decimal points
            var calculatedVal1 = ( (9/5) *initialVal1 + 32 ).toFixed(2); 
            // display square
            outputVal1.val(calculatedVal1);

        }

        }
        );
      });
