export const Location = () => {
  return (
    <div className="relative text-white w-full">
      {/* Фон с затемнением */}
      <div className="relative w-full h-[90vh]">
        <img
          className="w-full h-[90vh] object-cover grayscale hover:grayscale-0 transition duration-300"
          src="https://www.boyarovweddings.ru/wp-content/uploads/2022/06/01.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-[0.7]"></div> {/* Затемнение */}
      </div>

      {/* Контент поверх изображения */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-[50px] p-4">
        {/* <div className="relative text-center mt-[40px]">
          <h2 className="playfair text-[60px] tracking-[10px] !text-center">Location</h2>
          <p className="cursive-word text-[100px] tracking-[10px] absolute top-5 left-[50%] transform -translate-x-1/2">
            Location
          </p>
        </div> */}
        {/* <div className="h-[150px] w-[3px] bg-white m-auto"></div> */}
        <div className="text-center flex flex-col gap-5 justify-between h-full">
          {/* <p className=" snellBold text-[26px] tracking-[4px] leading-5 mt-[40px]">
            Место роведения нашей свадьбы просто прекрасно!
          </p> */}
          <h2 className="playfair text-[54px] mt-[40px] felidae">Ресторан "Ата"</h2>

          <div className="flex flex-col gap-5 mb-[100px]">
            <p className=" snellBold text-[22px] tracking-[4px] leading-5 mt-[140px]">
              это место для создания Незабываемого и романтического настроения
            </p>
            <div className="h-[1px] w-[150px] m-auto bg-white"></div>
            <div className="z-20">
            <a href="https://2gis.kg/bishkek/firm/70000001087638363?m=74.643567%2C42.821717%2F15.97" target="_blank" className="z-20">
              <button className="playfair uppercase bg-transparent border py-3 px-6 rounded-md font-medium transition-all max-w-[300px] w-full">Улица Мадиева 22Б</button>
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full absolute left-0 bottom-0 h-[160px] bg-gradient-to-b from-[#0000] to-[#000]"></div>

    </div>
  );
};
