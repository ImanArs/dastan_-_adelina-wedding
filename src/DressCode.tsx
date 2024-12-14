export const DressCode = () => {
  return (
    <div className="relative w-full">
      <div className="relative">
        <img
          src="https://i.pinimg.com/736x/fb/ef/56/fbef563a978f6e88a42fb8712f4cdbc6.jpg"
          alt="Elegant outfit"
          className="w-full h-[500px] object-cover grayscale"
        />
        <div className="absolute z-10 inset-0 py-[26px] flex flex-col justify-between items-center bg-black/50 text-white">
          <h2 className="text-[44px] uppercase tracking-widest felidae font-bold">Dress Code</h2>
          <p className="mt-4 text-[28px] text-center w-[350px] snellBold">Отличное настроение! А лучшее украшение вечера — ваша улыбка</p>
        </div>
      </div>

      <div className="w-full absolute left-0 bottom-0 h-[160px] bg-gradient-to-b from-[#0000] to-[#000]"></div>
    </div>
  );
};
