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
        {/* row 1 that is flex */}
        <div className="board-row d-flex gap-1 mt-2 justify-content-center">
          <Square value={this.props.squares[0]} onClick={() => this.props.onClick(0)} />
          <Square value={this.props.squares[1]} onClick={() => this.props.onClick(1)} />
          <Square value={this.props.squares[2]} onClick={() => this.props.onClick(2)} />
        </div>
        {/* row 2 that is flex */}
        <div className="board-row d-flex gap-1 mt-2 justify-content-center">
          <Square value={this.props.squares[3]} onClick={() => this.props.onClick(3)} />
          <Square value={this.props.squares[4]} onClick={() => this.props.onClick(4)} />
          <Square value={this.props.squares[5]} onClick={() => this.props.onClick(5)} />
        </div>
        {/* row 3 that is flex */}
        <div className="board-row d-flex gap-1 mt-2 justify-content-center">
          <Square value={this.props.squares[6]} onClick={() => this.props.onClick(6)} />
          <Square value={this.props.squares[7]} onClick={() => this.props.onClick(7)} />
          <Square value={this.props.squares[8]} onClick={() => this.props.onClick(8)} />
        </div>
      </div>
    );
  }
}

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
    this.reset=this.reset.bind(this);
    this.handleClick=this.handleClick.bind(this);
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
    const fill_null=["","","","","","","","",""];
    this.setState({
      squares: fill_null,
      xIsNext: true
    });
  }

  handleClick(i: number) {
    const squares = this.state.squares.slice();
    if (Game.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
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
      <div className="game container-fluid mx-3 my-3">
        
        <div className="game-board container ">
          <Board
            squares={this.state.squares}
            onClick={(i: number) => this.handleClick(i)}
          />
        </div>
        
        <div className="result text-center">
          {status}
        </div>

        <div className="container text-center mt-2">
          <div className="btn btn-warning" onClick={this.reset}>
            Reset
          </div>
        </div>
          
      </div>
    );

  }
}

export default Game;