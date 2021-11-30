import React from "react";

import { Web3Provider, useWeb3 } from "react-web3-modal";
import styled from "styled-components";
import "./App.css";
const Button = styled.button`
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 40px;
  border: 1px solid #4287f5;
  border-radius: 8px;
  background: #4287f5;
  color: #fff;
  cursor: pointer;
  :hover {
    border-color: #2b75ed;
    background: #2b75ed;
  }
  :focus {
    outline: none;
  }
`;

const ConnectButton = () => {
  const { account, openWalletModal } = useWeb3();
  console.log(account);
  return (
    <div className="App">
      <Button onClick={openWalletModal}>Connect wallet</Button>
      <p>wallet address is {account} </p>
    </div>
  );
};

const config = {
  supportedChainIds: [1, 3, 4, 5, 42, 100],
  connectors: {
    walletconnect: {
      rpc: {
        56: `https://bsc-dataseed.binance.org/`,
        1: `https://mainnet.infura.io/v3/be46916a77964b5fb4cc36a21d014610`,
      },
      bridge: "https://bridge.walletconnect.org",
      qrcode: true,
      pollingInterval: 15000,
    },
  },
};

export default function App() {
  return (
    <Web3Provider config={config}>
      <ConnectButton />
    </Web3Provider>
  );
}
