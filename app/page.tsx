"use client";

import { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import RPC from "./web3RPC";
import CategoriesIcons, { Icon } from "@/components/ui/categories-icons";
import Container from "@/components/ui/container";
import Image from "next/image";
import image from "public/latina.png";
import { useChat } from "ai/react";
import GenerateQRCode from "./utilities/generateQRCode";
import Wallet from "../components/svg/wallet";
require("dotenv").config();

const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_ClIENT_ID
  ? process.env.NEXT_PUBLIC_WEB3AUTH_ClIENT_ID
  : "";

export default function Page() {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );
  // const [userInfo, setUserInfo] = useState(undefined);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  useEffect(() => {
    const init = async () => {
      try {
        console.log("CLIENT_ID: ", clientId);
        const web3auth = new Web3Auth({
          clientId,
          web3AuthNetwork: "testnet", // mainnet, aqua, celeste, cyan or testnet
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x13881",
            rpcTarget:
              " https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78", // This is the public RPC we have added, please pass on your own endpoint while creating an app
          },
        });

        setWeb3auth(web3auth);

        await web3auth.initModal();

        if (web3auth.provider) {
          setProvider(web3auth.provider);
        }
      } catch (error) {
        console.error(error);
      }

      // const getUserInfo = async () => {
      //   if (!web3auth) {
      //     uiConsole("web3auth not initialized yet");
      //     return;
      //   }
      //   const user: Partial<OpenloginUserInfo> = await web3auth.getUserInfo();
      //   setUserInfo(user);
      // };
      // setTimeout(() => {
      //   getUserInfo();
      // }, 5000);
    };

    init();
  }, []);

  console.log(provider);

  const login = async () => {
    if (!web3auth) {
      uiConsole("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
  };

  const authenticateUser = async () => {
    if (!web3auth) {
      uiConsole("web3auth not initialized yet");
      return;
    }
    const idToken = await web3auth.authenticateUser();
    uiConsole(idToken);
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      uiConsole("web3auth not initialized yet");
      return;
    }
    const user = await web3auth.getUserInfo();
    uiConsole(user);
  };

  const logout = async () => {
    if (!web3auth) {
      uiConsole("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
  };

  const getChainId = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const chainId = await rpc.getChainId();
    uiConsole(chainId);
  };

  const getAccounts = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    uiConsole(address);
  };

  const getBalance = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    uiConsole(balance);
  };

  const sendTransaction = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendTransaction();
    uiConsole(receipt);
  };

  const signMessage = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const signedMessage = await rpc.signMessage();
    uiConsole(signedMessage);
  };

  const getPrivateKey = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    uiConsole(privateKey);
  };

  function uiConsole(...args: any[]): void {
    const el = document.querySelector("#console>p");
    if (el) {
      el.innerHTML = JSON.stringify(args || {}, null, 2);
    }
  }

  const loggedInView = (
    <>
      <div className="">
        <div>
          <button onClick={getUserInfo} className="text-gray-700">
            Get User Info
          </button>
        </div>
        <div>
          <button onClick={authenticateUser} className="text-gray-700">
            Get ID Token
          </button>
        </div>
        <div>
          <button onClick={getChainId} className="text-gray-700">
            Get Chain ID
          </button>
        </div>
        <div>
          <button onClick={getAccounts} className="text-gray-700">
            Get Accounts
          </button>
        </div>
        <div>
          <button onClick={getBalance} className="text-gray-700">
            Get Balance
          </button>
        </div>
        <div>
          <button onClick={signMessage} className="text-gray-700">
            Sign Message
          </button>
        </div>
        <div>
          <button onClick={sendTransaction} className="text-gray-700">
            Send Transaction
          </button>
        </div>
        <div>
          <button onClick={getPrivateKey} className="text-gray-700">
            Get Private Key
          </button>
        </div>
        <div>
          <button onClick={logout} className="text-gray-700">
            Log Out
          </button>
        </div>
      </div>

      <div id="console" style={{ whiteSpace: "pre-line" }}>
        <p style={{ whiteSpace: "pre-line" }}>Logged in Successfully!</p>
      </div>
    </>
  );

  // console.log(JSON.stringify(userInfo));

  //   {
  //     "sub": "32916209",
  //     "email": "peggy.sue@onelogin.com",
  //     "preferred_username": "peggy.sue",
  //     "name": "Peggy Sue",
  //     "updated_at": 1590019767000,
  //     "given_name": "Peggy",
  //     "family_name": "Sue",
  //     "groups": [
  //       "Admin Role",
  //       "User Role",
  //       "Custom Roll"
  //     ]
  // }

  return (
    <main title="App" className="">
      <div className="h-full">
        <div className="relative w-full mx-auto pt-6">
          <span className="absolute bg-cyan-100 rounded-bl-full w-full h-[100px] -z-10 inset-0" />
        </div>
        <div
          onClick={login}
          className="w-full flex items-center justify-end px-6"
        >
          <Icon title={""} href={""}>
            <Wallet width={28} height={28} stroke={1.3} />
          </Icon>
        </div>
        <div className="relative flex items-center justify-center h-36 w-36 shrink-0 rounded-full mx-auto -mt-6 overflow-visible">
          <Image
            src={image}
            width={500}
            height={500}
            className="z-20 rounded-full"
            alt="Picture of the author"
          />
        </div>
      </div>
      <Container>
        <div className="w-full">
          <div className="flex flex-col items-center justify-center space-y-7">
            <div className="flex">
              {/* <div className="pr-2">
                <img
                  src="https://hatscripts.github.io/circle-flags/flags/za.svg"
                  width="40"
                ></img>
              </div> */}
              <div className="flex flex-col items-center justify-center">
                <p className="text-2xl text-start w-full leading-widest font-semibold">
                  Triana Sofía González
                </p>
                <p className="font-serif text-slate-500 text-sm text-start w-full">
                  0xa0b668fbeC004c410987687B53Bd6Bb7809E4Bb4
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <CategoriesIcons />
          </div>
        </div>
      </Container>
      <div>{loggedInView}</div>
      {/* <div>{userInfo?.email}</div> */}
      <Container>
        <div>
          {messages.map((m) => (
            <div key={m.id}>
              {m.role}: {m.content}
            </div>
          ))}

          <form onSubmit={handleSubmit}>
            <input
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
            />
          </form>
        </div>
      </Container>
    </main>
  );
}
