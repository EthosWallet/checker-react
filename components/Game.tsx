import { ethos, SignInButton } from "ethos-connect";

const Game = () => {
    const { wallet } = ethos.useWallet();

    console.log("WALLET", wallet)

    return (
        <div>
            <div>Game</div>
            <div className='p-12'>
                {wallet ? (
                    <>
                        <ethos.AddressWidget />
                        <button onClick={wallet.disconnect}>Disconnect</button>
                    </>
                ) : (
                    <SignInButton />
                )}
            </div>
        </div>
    )
}

export default Game;