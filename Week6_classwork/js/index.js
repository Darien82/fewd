   <form name="calculator" >
    Solution<input type="textfield" name="ans" value="">
    <br>
    <input type="button" value="1" onClick="document.calculator.ans.value+='1'">
  
    <input type="button" value="+" onClick="document.calculator.ans.value+='+'">
    <br>
   
    <input type="button" value="5" onClick="document.calculator.ans.value+='5'">
    <input type="button" value="-" onClick="document.calculator.ans.value+='-'">
    <br>
  
    <br>
    <input type="clear" value="clear">
    <input type="button" value="=" onClick="document.calculator.ans.value=eval(document.calculator.ans.value)">
    </form>