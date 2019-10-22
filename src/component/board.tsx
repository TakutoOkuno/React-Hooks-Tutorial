import {useState} from 'react';
import * as React from 'react';
import '../index.css';
import Square from "./square";

const Board: React.FunctionComponent = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const handleClick = (i: number) => {
        const newSquares = squares.slice();
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const renderSquare = (i: number) => {
        return <Square
            value={squares[i]}
            onClick={() => handleClick(i)}/>;
    };

    const status = 'Next player: X';
    const status = `Next player: ${xIsNext ? 'X' : 'O'}`;

    return <div>
        <div className="status">{status}</div>
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </div>;
};

export default Board;
