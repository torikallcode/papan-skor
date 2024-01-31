const ScoreDisplay = ({ score, onClickIncrement, onClickDecrement, classname }) => {
  return (
    <>
      <h1 onClick={onClickIncrement} className="cursor-pointer font-utama text-gray-100 text-9xl sm:text-[12rem] rotate-90 lg:rotate-0 h-32 w-36 flex items-center justify-center">
        <span className="hitungSkorSatu">{score}</span>
      </h1>
      <button onClick={onClickDecrement} className={`text-gray-100 ${classname} text-3xl bg-gray-800 p-6 sm:p-10 lg:p-6 lg:px-16 rounded-br-md flex justify-center items-center absolute top-0 left-0 lg:bottom-0 lg:top-auto lg:rounded-br-none lg:rounded-tr-md`}>
        <h1 className='font-semibold text-2xl lg:rotate-90'>|</h1>
      </button>
    </>
  );
};

export default ScoreDisplay