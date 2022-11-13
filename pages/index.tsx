import type { NextPage } from "next";
import { Modal, Header, Footer, Game } from "../components";

const GamePage: NextPage = () => {
  return (
    <div className='container relative'>
        <Modal />
        <Header />
        <Game />
        <Footer />
    </div>
  );
};

export default GamePage;
