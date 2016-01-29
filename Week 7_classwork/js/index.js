
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
            // display square and background color change
            outputVal1.val(calculatedVal1) < 32;
            $("body").css("background-color", "blue");
            //outputVal1.val(calculatedVal1) < 212;
            //$("body").css("background-color", "red");

        }

        }
        );
      });
