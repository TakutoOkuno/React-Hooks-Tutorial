import * as React from "react";
import '../index.css';
import Board from "./board";

const Game: React.FunctionComponent = () =>
    <div className="game">
        <div className="game-board">
            <Board />
        </div>
        <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
        </div>
    </div>;

export default Game;
