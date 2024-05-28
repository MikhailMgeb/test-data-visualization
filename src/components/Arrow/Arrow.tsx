import { FC } from 'react';
import { ReactComponent as ArrowDown } from "../../assets/image/ArrowDown.svg"
import { ReactComponent as ArrowUp } from "../../assets/image/ArrowUp.svg";
import { ReactComponent as Chevron } from "../../assets/image/Chevron.svg";
import { cnArrow } from './Arrow.classname';

type ArrowsProps = {
    left: string;
    right: string;
    diff: number;
}

const Arrow: FC<ArrowsProps> = ({ left, right, diff }) => (
    (<div className={cnArrow()}>
        <svg width={"130"} height="330">
            <line x1="0" y1="0" x2="0" y2={left} />
            <line x1="0" y1="0" x2="100%" y2="0" />
            <line x1="100%" y1="0" x2="100%" y2={right} />
        </svg>
        <span
            className={`${cnArrow('Tag')}
              ${diff > 0 && cnArrow('plus')}
              ${diff < 0 && cnArrow('minus')}`}
        >
            {diff > 0 && <ArrowUp />}
            {diff < 0 && <ArrowDown />}
            {diff > 0 ? `+${diff}` : diff}
        </span>
    </div>)
)

export { Arrow }
