import "./styles/main.css";
import LogoImg from "./assets/logo-nlw-e-sports.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";

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
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
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
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">
              Publique um Anúncio
            </Dialog.Title>
            <form className="mt-8">
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="game">
                  Qual o game?
                </label>
                <input
                  id="game"
                  placeholder="Selecione o game que deseja jogar"
                  className="bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500"
                />
              </div>
              <div>
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Como te chamam dentro do game?"
                />
              </div>
              <div>
                <div>
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <input
                    type="number"
                    id="yearsPlaying"
                    placeholder="Tudo bem ser ZERO"
                  />
                </div>
                <div>
                  <label htmlFor="discord">Qual seu Discord?</label>
                  <input type="text" id="discord" placeholder="Usuário#0000" />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                </div>
                <div>
                  <label htmlFor="">Qual horário do dia?</label>
                  <div>
                    <input type="time" id="HoursStart" placeholder="De" />
                    <input type="time" id="HourEnd" placeholder="Até" />
                  </div>
                </div>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                Costumo me conectar ao chat de voz
              </div>
              <footer>
                <button>Cancelar</button>
                <button type="submit">
                  <GameController />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
