import React from "react";
import "./Game.css";


//class square that with cell value and onclick properties
class Square extends React.Component<{value:string,onClick:()=>void}> {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>{this.props.value}</button>
    );
  }
}

//Board Properties
interface BoardProps {
  squares: string[]; //values at each of the squares are passed via a string
  onClick: (index: number) => void; //onClick function for that square index
}

class Board extends React.Component<BoardProps> {
  //rendering a grid of 9 squares
  render() {
    //renders 
    return (
      <div>
        {/* row 1 */}
        <div className="board-row d-flex gap-1 mt-2 justify-content-center">
          <Square value={this.props.squares[0]} onClick={() => this.props.onClick(0)} />
          <Square value={this.props.squares[1]} onClick={() => this.props.onClick(1)} />
          <Square value={this.props.squares[2]} onClick={() => this.props.onClick(2)} />
        </div>
        {/* row 2 */}
        <div className="board-row d-flex gap-1 mt-2 justify-content-center">
          <Square value={this.props.squares[3]} onClick={() => this.props.onClick(3)} />
          <Square value={this.props.squares[4]} onClick={() => this.props.onClick(4)} />
          <Square value={this.props.squares[5]} onClick={() => this.props.onClick(5)} />
        </div>
        {/* row 3 */}
        <div className="board-row d-flex gap-1 mt-2 justify-content-center">
          <Square value={this.props.squares[6]} onClick={() => this.props.onClick(6)} />
          <Square value={this.props.squares[7]} onClick={() => this.props.onClick(7)} />
          <Square value={this.props.squares[8]} onClick={() => this.props.onClick(8)} />
        </div>
      </div>
    );
  }
}

//defining GameState
interface GameState {
  squares: string[];
  xIsNext: boolean;
}

class Game extends React.Component<{},GameState> {
  //we create a constructor that initializes an empty array
  constructor(props: {}) {
    super(props);
    this.state = {
      squares: Array(9).fill(""),
      xIsNext: true
    };

    //binding the reset and the handleClick methods
    // this.reset=this.reset.bind(this);
    // this.handleClick=this.handleClick.bind(this);
  }

  //function that calculates the winner
  static calculateWinner(squares: string[]): string | null {
    //combination of indices for all possible wins
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
        //if the values at any combination of indices is same, return the value i.e. the winner
        return squares[a];
      }
    }
    return null;
  }

  //resets the board to null
  reset(){
    const fill_null=Array(9).fill("");
    this.setState({
      squares: fill_null,
      xIsNext: true
    });
  }

  handleClick(i: number) {
    //made a copy of the squares string[]
    const squares = this.state.squares.slice();

    //if the game has already been won we need to stop printing X or O
    if (Game.calculateWinner(squares) || squares[i]) {
      return;
    }

    //else
    //we set what must be printed on pressing the button
    squares[i] = this.state.xIsNext ? "X" : "O";
    //and update the state of Game
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const winner = Game.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else if (this.state.squares.every((square) => square !== "")) {
      status = "It's a draw!";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game container-fluid my-3">
        
        {/* Game board */}
        <div className="game-board container ">
          <Board
            squares={this.state.squares}
            onClick={(i: number) => this.handleClick(i)}
          />
        </div>

        {/* displays result */}
        <div className="result text-center">
            {status}
        </div>

        {/* reset button */}
        <div className="container text-center mt-2">
            <div className="btn btn-warning fw-bold" onClick={()=>this.reset()}>
              Reset
            </div>
        </div> 
          
      </div>
    );

  }
}

export default Game;