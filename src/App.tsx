import "./styles/main.css";
import LogoImg from "./assets/logo-nlw-e-sports.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import CreateAdModal from "./components/CreateAdModal";
import axios from "axios";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}
function App() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    // axios("http://localhost:3333/games").then((response) =>
    //   setGames(response.data)
    // );
    setGames([
      {
        id: "d36e8baf-bf4c-4ecd-ab9e-9691db2460ad",
        title: "League of Legends",
        bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
        _count: { ads: 0 },
      },
      {
        id: "aae6412f-9191-41ad-ad23-e6800be9048a",
        title: "Apex Legends",
        bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/511224-188x250.jpg",
        _count: { ads: 1 },
      },
      {
        id: "6a6f8513-f1a2-41c0-a314-6d46a7e5c2a2",
        title: "Fortnite",
        bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg",
        _count: { ads: 0 },
      },
      {
        id: "c6037329-c644-42e0-9d61-4da5bc2643b2",
        title: "Valorant",
        bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
        _count: { ads: 0 },
      },
      {
        id: "d65a2e74-696d-4b88-b962-362b158d9d37",
        title: "CS:GO",
        bannerUrl:
          "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg",
        _count: { ads: 1 },
      },
      {
        id: "d427e0a9-47fc-4940-9456-78828afd8a92",
        title: "Dota 2",
        bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg",
        _count: { ads: 0 },
      },
    ]);
  }, []);
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20 p-4">
      <img src={LogoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
      <div className="text-center">
        <p className=" text-zinc-300 font-normal mt-20">
          Disponível no{" "}
          <a
            href="https://github.com/rafamarquesrmb/find-your-duo-nlw-esports"
            className="hover:text-white"
          >
            {" "}
            Github - Find Your Duo
          </a>
          <br />
          Projeto de{" "}
          <a
            href="https://github.com/rafamarquesrmb/"
            className="hover:text-white"
          >
            {" "}
            Rafael Marques - @rafamarquesrmb
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
