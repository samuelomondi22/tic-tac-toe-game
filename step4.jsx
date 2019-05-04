// We now have the basic building blocks for our tic-tac-toe game. To have a complete game, we now need to alternate placing “X”s and “O”s on the board, and we need a way to determine a winner.


class Square extends React.Component {
    render() {
      return (
        <button
          className="square"
          //tells React to set up a click event listener.
          //This event handler calls this.props.onClick() 
          
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
        squares: Array(9).fill(null),
      };
    }
  //We have not defined the handleClick() method yet, so our code crashes. If you click a square now, you should see a red error screen saying something like “this.handleClick is not a function”. 
    handleClick(i) {
      // handleClick, we call .slice() to create a copy of the squares array to modify instead of modifying the existing array
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares: squares});
    }
    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          // pass down a function from the Board to the Square, and we’ll have Square call that function when a square is clicked
          //onClick prop is a function that Square can call when clicked
          //value & onClick props passed from BOard to Square
          //Since the Board passed onClick={() => this.handleClick(i)} to Square, the Square calls this.handleClick(i) when clicked.
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
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
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
  
  //now the state is stored in the Board component instead of the individual Square components. When the Board’s state changes, the Square components re-render automatically. Keeping the state of all squares in the Board component will allow it to determine the winner in the future.
  //the Square components receive values from the Board component and inform the Board component when they’re clicked.
  

//or

function Square(props){
    return(
    <button className="square" onClick={() => props.onClick()}>
        {props.value}
        </button>
    )
  }
  // class Square extends React.Component {
  //   render() {
  //     return (
  //       <button
  //         className="square"
  //         onClick={() => this.props.onClick()}
  //       >
  //         {this.props.value}
  //       </button>
  //     );
  //   }
  // }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
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
  
  