interface GameBannerProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
}

export const GameBanner = (props: GameBannerProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} alt={props.title} />
      <div className="w-full bg-game-gradient pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block ">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {props.adsCount} anúncio{props.adsCount != 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
};
