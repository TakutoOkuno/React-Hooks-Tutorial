import * as React from "react";
import {useState} from "react";
import '../index.css';
import Board from "./board";

const Game: React.FunctionComponent = () => {
    const [history, setHistory] = useState([{
        squares: Array(9).fill(''),
    }]);
    const [xIsNext, setXIsNext] = useState(true);

    const current = history[history.length -1];

    const handleClick = (i: number) => {
        const newHistory = history;
        const newSquares = current.squares.slice();
        if (winner || current.squares[i]) {
            return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';

        setHistory(newHistory.concat([{
            squares: newSquares,
        }]));
        setXIsNext(!xIsNext);
    };

    const calculateWinner = (/* squares */ sq: ReadonlyArray<string>) => {
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
        for (const l of lines) {
            const [a, b, c] = l;
            if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
                return sq[a];
            }
        }
        return '';
    };
    const status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    const winner = calculateWinner(current.squares);
    const winnerStatus = `Winner: ${winner}`;

    return <div className="game">
        <div className="game-board">
            <Board
                squares={current.squares}
                onClick={(i) => handleClick(i)}
                xIsNext={xIsNext}
                winner={winner}
            />
        </div>
        <div className="game-info">
            <div>{winner ? winnerStatus : status}</div>
            <ol>{/* TODO */}</ol>
        </div>
    </div>
};

export default Game;
