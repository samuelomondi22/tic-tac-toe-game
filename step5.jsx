function Square(props){
    return(
    <button className="square" onClick={() => props.onClick()}>
        {props.value}
        </button>
    )
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
      squares[i] = this.state.xIsNext ? 'X' : 'O'; //, “X”s and “O”s can take turns
      // squares[i] = 'X';
      this.setState({squares: squares,  xIsNext: !this.state.xIsNext,});//, “X”s and “O”s can take turns
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
     //  const status = 'Next player: X';
      //displays which player has the next turn:
    const status = 'Next player: ' + (this.state.xIsNext ? 'player 1' : 'player 2');
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
  
  