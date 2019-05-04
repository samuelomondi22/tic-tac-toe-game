// storing history of moves

function Square(props){
    return(
    <button className="square" onClick={props.onClick}>
        {props.value}
        </button>
    );
  }
  class Board extends React.Component {
    // delete (Since the Game component is now rendering the game’s status, we can remove the corresponding code from the Board’s render method)
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     squares: Array(9).fill(null),
    //    xIsNext : true,
    //   };
    // }
    // handleClick(i) {
    //   const squares = this.state.squares.slice();
    // if (calculateWinner(squares) || squares[i]) {
    //     return;
    //   }
    //   squares[i] = this.state.xIsNext ? 'X' : 'O';
    //   this.setState({
    //     squares: squares,
    //     xIsNext: !this.state.xIsNext,
    //   });
    // }
    S(i) {
      return (
        <Square
          value={this.state.squares[i]}
        //   onClick={() => this.handleClick(i)}
        onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
    //       const winner = calculateWinner(this.state.squares);
    //   let status;
    //   if (winner) {
    //     status = 'Winner: ' + winner;
    //   } else {
    //     status = 'Next player: ' + (this.state.xIsNext ? 'player 1' : 'player 2');
    //   }
      return (
        <div>
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
  // placing history into Game component gives the Game component full control over the Board’s data, and lets it instruct the Board to render previous turns from the history.
  class Game extends React.Component {
      constructor(props){
        super(props)
        this.state = {
            history:[{
                squares: Array(9).fill(null)
            }],
            xIsNext: true
        }
      }
//Within the Game’s handleClick method, we concatenate new history entries onto history.
      handleClick(i){
          const history = this.state.history;
          const current = history[history.length - 1];
          const squares = current.squares.slice();
          if (calculateWinner(squares) || squares[i]) {
              return;
          }
          squares[i] = this.state.xIsNext ? 
          'X':'O';
          this.setState({
              history: history.concat([{
                  squares: squares
              }]),
              xIsNext:!this.state.xIsNext,
          })
      }
    render() {
        //use the most recent history entry to determine and display the game’s status:
        const history = this.state.history;
          const current = history[history.length - 1];
          const squares = current.squares.slice();
          let status;
          if (winner) {
              status = 'winner:' + winner;
          } else {
              status = 'Next player: ' + (this.state.xIsNext ? 'X':'O')
          }
      return (
        <div className="game">
          <div className="game-board">
            <Board 
            squares ={current.squares}
            onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
     
    
    )

    }
  }
  
  ReactDOM.render(
    <Game />,
    mountNode,
  );
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
  
  