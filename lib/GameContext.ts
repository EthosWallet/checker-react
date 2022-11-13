import { createContext } from 'react';

const defaultContents = {
    newGame: () => {}
};

const GameContext = createContext(defaultContents);

export default GameContext;