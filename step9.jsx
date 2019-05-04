// picking a key
//When we update a list, React needs to determine what has changed.
//React is a computer program and does not know what we intended. Because React cannot know our intentions, we need to specify a key property for each list item to differentiate each list item from its siblings
// Keys tell React about the identity of each component which allows React to maintain state between re-renders. If a component’s key changes, the component will be destroyed and re-created with a new state.
//key cannot be referenced using this.props.key\
// React automatically uses key to decide which components to update.
//If no key is specified, React will present a warning and use the array index as a key by default. Using the array index as a key is problematic when trying to re-order a list’s items or inserting/removing list items



function Square(props){
    return(
    <button className="square" onClick={props.onClick}>
        {props.value}
        </button>
    );
  }
  class Board extends React.Component {
    S(i) {
      return (
        <Square
          value={this.state.squares[i]}
        onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
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
  class Game extends React.Component {
      constructor(props){
        super(props)
        this.state = {
            history:[{
                squares: Array(9).fill(null)
            }],
//Before we implement jumpTo, we’ll add stepNumber to the Game component’s state to indicate which step we’re currently viewing.
            stepNumber: 0,
            xIsNext: true
        }
      }
      handleClick(i){
//The stepNumber state we’ve added reflects the move displayed to the user now. After we make a new move, we need to update stepNumber by adding stepNumber: history.length as part of the this.setState argument. This ensures we don’t get stuck showing the same move after a new one has been made.
//We will also replace reading this.state.history with this.state.history.slice(0, this.state.stepNumber + 1). This ensures that if we “go back in time” and then make a new move from that point, we throw away all the “future” history that would now become incorrect.          
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
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
              stepNumber: history.length,
              xIsNext:!this.state.xIsNext,
          })
      }
// define the jumpTo method in Game to update that stepNumber
      jumpTo(step)
    render() {
          const history = this.state.history;
// from always rendering the last move to rendering the currently selected move according to stepNumber:
          //const current = history[history.length - 1];
          const current = history[this.state.stepNumber];
            const winner = calculateWinner(current.square)
            const moves = history.map((step, move) => {
              const desc= move ? 
              'Go to move # ' + move :
              'Go to game start';
              return (
//The moves are never re-ordered, deleted, or inserted in the middle, so it’s safe to use the move index as a key.                  
                  <li key={move}>
                      <button onClick={() => this.jumpTo(move)}>
                          {desc}
                      </button>
                  </li>
              )
          })
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
  //If we click on any step in the game’s history, the tic-tac-toe board should immediately update to show what the board looked like after that step occurred
  
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
  
  
