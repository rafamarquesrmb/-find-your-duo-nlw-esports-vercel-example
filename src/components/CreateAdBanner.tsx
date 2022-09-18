import { MagnifyingGlassPlus } from "phosphor-react";

export const CreateAdBanner = () => {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
      <div className="bg-[#2a2634] py-6 px-8 rounded-lg flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou o seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <button className="px-4 py-3 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition duration-300 flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>
      </div>
    </div>
  );
};
