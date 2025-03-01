
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  
  function superbowlWin(array) {
    const winner = array.find(game => game.result === 'W');
    if (winner) {
        return winner.year;
    } else {
        return undefined;
    }
  }
  
  superbowlWin(record)