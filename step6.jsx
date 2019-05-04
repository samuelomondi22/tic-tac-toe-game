function Square(props){
    return(
    <button className="square" onClick={props.onClick}>
        {props.value}
        </button>
    );
  }
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
       xIsNext : true,//  set x as first move by default
      };
    }
    handleClick(i) {
      const squares = this.state.squares.slice();
      // squares[i] = this.state.xIsNext ? 'X' : 'O'; //, “X”s and “O”s can take turns
      // squares[i] = 'X';
      //this.setState({squares: squares,  xIsNext: !this.state.xIsNext,});//, “X”s and “O”s can take turns
      // const squares = this.state.squares.slice();
  
      //return early by ignoring a click if someone has won the game or if a Square is already filled:
    if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }
    S(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      // check if a player has won.
          const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'player 1' : 'player 2');
      }
     //  const status = 'Next player: X';
      //displays which player has the next turn:
    // const status = 'Next player: ' + (this.state.xIsNext ? 'player 1' : 'player 2');
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.S(0)}
            {this.S(1)}
            {this.S(2)}
          </div>
          <div className="board-row">
            {this.S(3)}
            {this.S(4)}
            {this.S(5)}
          </div>
          <div className="board-row">
            {this.S(6)}
            {this.S(7)}
            {this.S(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Game />,
    mountNode,
  );
  //Given an array of 9 squares, this function will check for a winner and return 'X', 'O', or null as appropriate.
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  