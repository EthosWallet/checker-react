import { useCallback, useEffect, useMemo, useState } from 'react'
import { ethos } from 'ethos-connect';

import { constants } from '../lib';

import type { Game } from '../types'

const useGameContext = () => {
    const { wallet } = ethos.useWallet();
    const [games, setGames] = useState<Game[]>();
    const [activeGame, setActiveGame] = useState<Game>();

    const newGame = useCallback(() => {
        wallet?.signAndExecuteTransaction({
            kind: "moveCall",
            data: {
                packageObjectId: constants.contract,
                module: 'checkers',
                function: 'create_game',
                typeArguments: [],
                arguments: [player2],
                gasBudget: 5000
            }
        })
    }, [])

    useEffect(() => {
        const games = nfts.filter(
            (nft) => 
        )
    },  [nfts])

    const gameContext = useMemo(() => ({
        newGame,
        activeGame, 
        games
    }), [newGame, activeGame, games]);

    return gameContext;
}

export default useGameContext;