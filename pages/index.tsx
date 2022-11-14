import type { NextPage } from "next";
import { Modal, Header, Footer, Game } from "../components";
import { GameContext } from "../lib";
import { useGameContext } from "../hooks"
import type { Game } from '../types'

const GamePage: NextPage = () => {
    const gameContext = useGameContext()

    return (
        <GameContext.Provider value={gameContext}>
            <div className='container relative m-auto'>
                <Modal />
                <Header />
                <Game />
                <Footer />
            </div>
        </GameContext.Provider>
    );
};

export default GamePage;
