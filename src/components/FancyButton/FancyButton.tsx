import { HTMLAttributes } from 'react';
import './FancyButton.scss';  

interface Props extends HTMLAttributes<HTMLElement> { 
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FancyButton = ({children, handleClick}: Props) => {
    return (
        <button className="button" onClick={handleClick}>
            {children}
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
        </button>
    )
}
