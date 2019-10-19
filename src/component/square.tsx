import * as React from "react";
import {useState} from "react";
import '../index.css';

interface Props {
    value: number | 'X';
}

const Square: React.FunctionComponent<Props> = (
    {
        value: initialValue
    }: Props
) => {
    const [value, setValue] = useState(initialValue);
    const handleClick = () => setValue('X');
    return <button className="square" onClick={handleClick}>
        {value}
    </button>
};

export default Square;
