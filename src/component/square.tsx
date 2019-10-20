import * as React from "react";
import '../index.css';

interface Props {
    value: number | 'X';
    onClick: () => void;
}

const Square: React.FunctionComponent<Props> = (
    {
        value,
        onClick
    }: Props
) => {

    return <button className="square" onClick={onClick}>
        {value}
    </button>
};

export default Square;
