function chooseDirection()
{
  return Math.floor (1 + (Math.random() * 4));
}
// Move the marker up one space.
function moveMarkerUp(marker)
{
  if (marker.xCord > 0) {
    marker.xCord -= 1;
    return true;
  }
  else {
    return false;
  }
}
// Move the marker down one space.
function moveMarkerDown(marker)
{
  if (marker.xCord < 9) {
    marker.xCord += 1;
    return true;
  }
  else {
    return false;
  }
}
// Move the marker left one space.
function moveMarkerLeft(marker)
{
  if (marker.yCord > 0) {
    marker.yCord -= 1;
    return true;
  }
  else {
    return false;
  }
}
// Move the marker right one space.
function moveMarkerRight(marker)
{
  if (marker.yCord < 9) {
    marker.yCord += 1;
    return true;
  }
  else {
    return false;
  }
}
/*
Find the biggest number of spaces visited.
visits is a 2d array that holds all the visits
*/
function findMaxVisits(visits)
{
  var max = 0;

  for (var i = 0; i < visits.length; i++) {
    for (var j = 0; j < visits[i].length; j++) {
      if (visits[i][j] > max) {
        max = visits[i][j];
      }
    }
  }
  return max;
}
/*
Find the smallest number of spaces visited.
Visits is a 2d array that holds all the visits.
*/
function findMinVisits(visits)
{
  var min = 0;

  for (var i = 0; i < visits.length; i++) {
    for (var j = 0; j < visits[i].length; j++) {
      if (visits[i][j] < min) {
        min = visits[i][j];
      }
    }
  }
  return min;
}
// Create an empty 2d array.
function createArray()
{
  var moves = new Array(10);

  for (var i = 0; i < moves.length; i++) {
    moves[i] = new Array(10);
  }
  moves = initalizeArray(moves);
  return moves;
}
// Populate the 2d array with 0s.
function initalizeArray(visits)
{
  for (var i = 0; i < visits.length; i++) {
    for (var j = 0; j < visits[i].length; j++) {
       visits[i][j] = 0;
    }
  }
  return visits;
}
// Display why the game terminated, how many steps were taken,
// the maximum number of steps taken, and the minimum number of steps taken.
function displayResults(reasonForTerm, stepsTaken, max, min)
{
  alert("Hello from displayResults");
  document.getElementById("results").innerHTML = "<br> Results <br>";
  document.getElementById("line").innerHTML = "==========================================================<br>";
  switch(reasonForTerm) {
    case 1:
       document.getElementById("term").innerHTML = "Upper right corner reached and maximum number of steps taken.<br>";
       document.getElementById("turns").innerHTML = "The number of steps taken: " + stepsTaken + "<br>";
       document.getElementById("max").innerHTML = "The maximum number of moves into a cell: " + max + "<br>";
       document.getElementById("min").innerHTML = "The minimum number of moves into a cell: " + min + "<br>";
       break;
    case 2:
       document.getElementById("term").innerHTML = "Too many steps taken.<br>";
       document.getElementById("turns").innerHTML = "The number of steps taken: " + stepsTaken + "<br>";
       document.getElementById("max").innerHTML = "The maximum number of moves into a cell: " + max + "<br>";
       document.getElementById("min").innerHTML = "The minimum number of moves into a cell: " + min + "<br>";
       break;
    case 3:
       document.getElementById("term").innerHTML = "Upper right corner reached.<br>";
       document.getElementById("turns").innerHTML = "The number of steps taken: " + stepsTaken + "<br>";
       document.getElementById("max").innerHTML = "The maximum number of moves into a cell: " + max + "<br>";
       document.getElementById("min").innerHTML = "The minimum number of moves into a cell: " + min + "<br>";
       break;
  }
}
