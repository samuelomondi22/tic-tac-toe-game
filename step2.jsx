class Square extends React.Component{
    constructor(props){
       super(props)
       this.state={
         value: null
       }
     }
     // By calling this.setState from an onClick handler in the Square’s render method, we tell React to re-render that Square whenever its <button> is clicked
     // After the update, the Square’s this.state.value will be 'X', so we’ll see the X on the game board. If you click on any Square, an X should show up.
     render(){
       return(
       <button className='square' onClick = {()=>this.setState({value: 'X'})}>
          {this.state.value}
           </button>
       )
     }
   }
   // Let’s fill the Square component with an “X” when we click it
   class Board extends React.Component{
     S(i)
     {
       return(
         <Square value='i'/> // renders all values as X
       )
     }
     render(){
       return(
           //  play around adding and taking em out and see what happens . 
       <div>
       <div className='board-row'>
         {this.S(0)}
         {this.S(1)}
         {this.S(2)}
         </div>
       <div className='board-row'>
         {this.S(3)}
         {this.S(4)}
         {this.S(5)}
         </div>
       <div className='board-row'>
         {this.S(6)}
         {this.S(7)}
         {this.S(8)}
         </div>
         </div>
         )
     }
   }
   
   ReactDOM.render(
     <Board/>,
     mountNode,
   )