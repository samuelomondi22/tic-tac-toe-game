// We now have the basic building blocks for our tic-tac-toe game. To have a complete game, we now need to alternate placing “X”s and “O”s on the board, and we need a way to determine a winner.
// to check for a winner, we’ll maintain the value of each of the 9 squares in one location.
// we do this by storing the game’s state in the parent Board component instead of in each Square. The Board component can tell each Square what to display by passing a prop
// To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.

class Square extends React.Component {
    render() {
      return (
        <button
          className="square"
          onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null), // so when it would look like
  //       // [
  //   'O', null, 'X',
  //   'X', 'X', 'O',
  //   'O', null, null,
  // ]
        // correspond with 9 squares
      };
    }
  
    handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares: squares});
    }
  
    S(i) {
      return (
        <Square
          //  {this.state.squares[i]} modify the Board to instruct each individual Square about its current value // ('X', 'O', or null)
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const status = 'Next player: X';
  
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
  