// run on jscomplete/playground
// The Square component renders a single <button> 
// and the Board renders 9 squares. 
// The Game component renders a board with placeholder values
//  /* {this.props.value}  empty space to store your values */

class Square extends React.Component{
    render(){
        return(
          <button className= "square">
            {this.props.value}
            </button>)
    }
}


class Board extends React.Component{
    // have to declare the value of 'i'
    S(i){
     return(
       // to take a value
       <Square value={i}/>
       )
    }
  render(){
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

ReactDOM.render(
  <Board/>,
  mountNode,
)
