import { useContext } from "react";
import { GameContext } from '../lib';

const useGame = () => {
    return useContext(GameContext);
}

export default useGame;