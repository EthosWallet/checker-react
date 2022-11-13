import { useMemo, useState } from 'react'
import type { NextPage } from "next";
import { Modal, Header, Footer, Game } from "../components";
import { GameContext } from "../lib";

export interface Game {

}

const GamePage: NextPage = () => {
    const [game, setGame] = useState<Game>();

    const gameContext = useMemo(() => ({
        newGame: () => {}
    }), []);

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
