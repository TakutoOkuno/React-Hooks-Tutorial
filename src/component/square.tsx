import * as React from "react";
import '../index.css';

interface Props {
    value: number;
}

const Square: React.FunctionComponent<Props> = (
    {
        value,
    }: Props
) =>
    <button className="square">
        {value}
    </button>;

export default Square;
