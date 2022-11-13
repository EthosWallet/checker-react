import { useCallback } from "react";
import { ethos } from 'ethos-connect'

import { useGame } from '../hooks'

const { components: { MenuButton } } = ethos;

const NewGameButton = () => {
    const { newGame } = useGame();

    const children = useCallback((hover: boolean) => (
        <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M12 9V15M15 12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                    stroke={hover ? 'white' : 'black'}
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
            New Game
        </>
    ), []);

    return (    
        <MenuButton
            className='flex item-center gap-1'
            onClick={newGame}
            hoverChildren={children(true)}
        >
            {children(false)}
        </MenuButton>
    )
}

export default NewGameButton;