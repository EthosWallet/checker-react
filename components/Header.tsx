import { ethos } from "ethos-connect";
import NewGameButton from './NewGameButtons';

const Header = () => {
    return (
        <div className='flex justify-between items-center py-3'>
            <div className='text-xl flex-1' style={{ fontVariant: 'small-caps' }}>
                Sui Checkers
            </div>
            <div className='text-center text-sm flex-1 flex justify-center'>
                Sui Checkers is a completely on-chain version of Checkers
                <br/>
                built on the Sui blockchain by Ethos.
            </div>
            <div className='flex-1 flex justify-end'>
                <ethos.components.AddressWidget
                    extraButtons={[
                        <NewGameButton key='new-game-button' />
                    ]}
                />
            </div>
        </div>
    )
}

export default Header;