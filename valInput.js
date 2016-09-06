function getInput()
{
   var xDim = document.getElementById("xDim").value;
   var yDim = document.getElementById("yDim").value;
   var runs = document.getElementById("runs").value;

   document.getElementById("results").innerHTML = "The values are: " + xDim + " " + yDim + " " + runs + "<br/>");
   return true;
}
