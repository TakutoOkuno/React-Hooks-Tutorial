import * as React from 'react';
import '../index.css';
import Square from "./square";

interface Props {
    squares: ReadonlyArray<string>;
    onClick: (i: number) => void;
    xIsNext: boolean;
    winner: string;
}

const Board: React.FunctionComponent<Props> = (p: Props) => {
    const renderSquare = (i: number) => {
        return <Square
            value={p.squares[i]}
            onClick={() => p.onClick(i)}/>;
    };

    return <div>
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
