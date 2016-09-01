  function drawTable()
  {
    //alert("Hello");
    var myCanvas = document.getElementById("boardCanvas");
    var ctx = myCanvas.getContext("2d");
    ctx.strokeStyle = 'black';

    for (var row = 0; row < 10; row++) {
      for (var col = 0; col < 10; col++) {
        var x = col * 50;
        var y = row * 50;

        if (row == 9 && col == 0) {
          ctx.fillStyle = "white";
          //ctx.style.border = "thick solid #000000";
        }
        else {
          ctx.fillStyle = "blue";
        }
        ctx.strokeRect(x, y, 50, 50);
        ctx.fillRect(x, y, 50, 50);
      }
    }

    // document.write("Marker x: " + marker.xCord + " y: " + marker.yCord + "<br>");
    //document.getElementById("results").innerHTML = "Marker x: " + marker.xCord + " y: " + marker.yCord + "b<br>";
    //ctx.fillRect(0,0,400,400);
  }
  function redrawTable(marker, xVal, yVal)
  {

    var myCanvas = document.getElementById("boardCanvas");
    var ctx = myCanvas.getContext("2d");
    ctx.strokeStyle = 'black';

    //alert("Hello from redrawTable");
    for (var row = 0; row < 10; row++) {
      for (var col = 0; col < 10; col++) {
        var x = col * 50;
        var y = row * 50;

        if (row == marker.xCord && col == marker.yCord) {
          ctx.fillStyle = "white";
          //ctx.style.border = "thick solid #000000";
        }
        else if (row == xVal && col == yVal) {
          ctx.fillStyle = "blue";
        }
        else {
          ctx.fillStyle = "blue";
        }
        ctx.strokeRect(x, y, 50, 50);
        ctx.fillRect(x, y, 50, 50);
      }
    }

  }
  function callRedraw() {

  }
