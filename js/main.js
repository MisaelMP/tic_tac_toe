$(document).ready(function() {

  const x = "x";
  const o = "o";
  let turns = 0;
  const tile1 = $("#tile1");
  const tile2 = $("#tile2");
  const tile3 = $("#tile3");
  const tile4 = $("#tile4");
  const tile5 = $("#tile5");
  const tile6 = $("#tile6");
  const tile7 = $("#tile7");
  const tile8 = $("#tile8");
  const tile9 = $("#tile9");
  // find a winner with the different possibilities //
  const checkForWinner = function() {
    debugger;
    if (tile1.hasClass("o") && tile2.hasClass("o") && tile3.hasClass("o") ||
      tile4.hasClass("o") && tile5.hasClass("o") && tile6.hasClass("o") ||
      tile7.hasClass("o") && tile8.hasClass("o") && tile9.hasClass("o") ||
      tile1.hasClass("o") && tile4.hasClass("o") && tile7.hasClass("o") ||
      tile2.hasClass("o") && tile5.hasClass("o") && tile8.hasClass("o") ||
      tile3.hasClass("o") && tile6.hasClass("o") && tile9.hasClass("o") ||
      tile1.hasClass("o") && tile5.hasClass("o") && tile9.hasClass("o") ||
      tile3.hasClass("o") && tile5.hasClass("o") && tile7.hasClass("o")
    ) {
      alert("Winner is : O");
      $("#ticTacToe td").text("+").addClass('mas');
      $("#ticTacToe td").removeClass("disabled");
      $("#ticTacToe td").removeClass("disabled x o");
      turns = 0;

    } else if (tile1.hasClass("x") && tile2.hasClass("x") && tile3.hasClass("x") ||
      tile4.hasClass("x") && tile5.hasClass("x") && tile6.hasClass("x") ||
      tile7.hasClass("x") && tile8.hasClass("x") && tile9.hasClass("x") ||
      tile1.hasClass("x") && tile4.hasClass("x") && tile7.hasClass("x") ||
      tile2.hasClass("x") && tile5.hasClass("x") && tile8.hasClass("x") ||
      tile3.hasClass("x") && tile6.hasClass("x") && tile9.hasClass("x") ||
      tile1.hasClass("x") && tile5.hasClass("x") && tile9.hasClass("x") ||
      tile3.hasClass("x") && tile5.hasClass("x") && tile7.hasClass("x")
    ) {
      alert("Winner is : X");
      $("#ticTacToe td").text("+").addClass('mas');
      $("#ticTacToe td").removeClass("disabled");
      $("#ticTacToe td").removeClass("disabled x o");
      turns = 0;
    } else if (turns >= 9) {
      alert("Its a draw!");
      $("#ticTacToe td").text("+").addClass('mas');
      $("#ticTacToe td").removeClass("disabled");
      $("#ticTacToe td").removeClass("disabled x o");
      turns = 0;
    }
  };

  $("#ticTacToe td").on("click", function() {
    if ($(this).hasClass("disabled")) {

      alert("Choose another spot!");
    } else if (turns % 2 === 0) {
      turns++;
      $(this).text(o);
      $(this).addClass("disabled o");
      // if (tile1.hasClass("o") && tile2.hasClass("o") && tile3.hasClass("o") ||
      //   tile4.hasClass("o") && tile5.hasClass("o") && tile6.hasClass("o") ||
      //   tile7.hasClass("o") && tile8.hasClass("o") && tile9.hasClass("o") ||
      //   tile1.hasClass("o") && tile4.hasClass("o") && tile7.hasClass("o") ||
      //   tile2.hasClass("o") && tile5.hasClass("o") && tile8.hasClass("o") ||
      //   tile3.hasClass("o") && tile6.hasClass("o") && tile9.hasClass("o") ||
      //   tile1.hasClass("o") && tile5.hasClass("o") && tile9.hasClass("o") ||
      //   tile3.hasClass("o") && tile5.hasClass("o") && tile7.hasClass("o")
      // ) {
      //   alert("Winner is : O");
      //   turns = 0;
      // }
    } else {

      turns++;
      $(this).text(x);
      $(this).addClass("disabled x");
      // if (tile1.hasClass("x") && tile2.hasClass("x") && tile3.hasClass("x") ||
      //   tile4.hasClass("x") && tile5.hasClass("x") && tile6.hasClass("x") ||
      //   tile7.hasClass("x") && tile8.hasClass("x") && tile9.hasClass("x") ||
      //   tile1.hasClass("x") && tile4.hasClass("x") && tile7.hasClass("x") ||
      //   tile2.hasClass("x") && tile5.hasClass("x") && tile8.hasClass("x") ||
      //   tile3.hasClass("x") && tile6.hasClass("x") && tile9.hasClass("x") ||
      //   tile1.hasClass("x") && tile5.hasClass("x") && tile9.hasClass("x") ||
      //   tile3.hasClass("x") && tile5.hasClass("x") && tile7.hasClass("x")
      // ) {
      //   alert("Winner is : X");
      //   turns = 0;
      // }
    };
    checkForWinner();
  });

  // reset handler

  $("#reset").on("click", function() {
    $("#ticTacToe td").text("+").addClass('mas');
    $("#ticTacToe td").removeClass("disabled x o");
    turns = 0;
  });

}); /// end xf (document).ready tag ///
