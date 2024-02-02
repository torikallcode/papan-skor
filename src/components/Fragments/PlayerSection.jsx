import ScoreDisplay from "../Elements/ScoreDisplay";

const PlayerSection = ({
  title,
  score,
  onClickIncrement,
  onClickDecrement,
  backgroundColor,
  classname,
}) => {
  return (
    <div
      className={`${backgroundColor} w-full flex lg:flex-col justify-center items-center h-1/2 lg:h-full relative sm:gap-10 lg:gap-20`}
    >
      <h1 className="text-gray-100 font-semibold text-3xl  rotate-90 lg:rotate-0 hidden lg:block lg:text-4xl text-center w-full">
        {title}
      </h1>
      <ScoreDisplay
        score={score}
        onClickIncrement={onClickIncrement}
        onClickDecrement={onClickDecrement}
        classname={classname}
      />
      <h1 className="text-gray-100 font-semibold text-3xl  rotate-90 -mr-20 lg:hidden sm:text-4xl">
        {title}
      </h1>
    </div>
  );
};

export default PlayerSection;
