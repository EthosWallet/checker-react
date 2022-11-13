import { EthosConnectProvider } from "ethos-connect";
import ExampleIcon from "../icons/ExampleIcon";

import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const ethosConfiguration = {
    apiKey: "sui-checkers",
  };

  return (
    <EthosConnectProvider
      ethosConfiguration={ethosConfiguration}
      dappName="Sui Checkers"
      dappIcon={<ExampleIcon />}
      connectMessage="Connect to Sui Checkers!"
    >
      <Component {...pageProps} />
    </EthosConnectProvider>
  );
}

export default MyApp;
