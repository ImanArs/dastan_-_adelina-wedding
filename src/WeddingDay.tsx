export const WeddingDay = () => {
  return (
    <div className='w-full py-5 flex flex-col gap-5 text-center text-lg relative mt-[40px]'>
      
      
      <p className='cursive absolute top-[160px] right-[-80px] leading-[0] z-[-1] text-[80px] rotate-[90deg] greatVibes text-yellow-100'>Wedding day</p>
      <div className='flex flex-col gap-1 playfair text-[24px]'>
        <h2 className='relative flex flex-col gap-[60px] tracking-[3px] text-[60px] font-[100] mb-[40px]'>
          <div className='w-[120px] h-1px bg-[#000] absolute top-0 left-0 tracking-[4px]' />
            <span className="gamelon font-[500] text-[78px]">Wedding day</span>
          <div className='w-[120px] h-1px bg-[#000] absolute top-0 right-0' />
        </h2>
        <p>09/01/2025</p>
        <p>17:00</p>
      </div>
      {/* <p>Если Вы получили эту ссылку, значит мы от чистого сердца и с большой любовью приглашаем Вас на самое важное событие для нашей семьи - День свадьбы, которое пройдет в ресторане «Ата» 24 сентября 2023 года.</p> */}
      <p className="playfair text-[18px] w-[80%] m-auto">Если Вы получили эту ссылку, значит мы от чистого сердца и с большой любовью приглашаем Вас на самое важное событие для нашей семьи - День свадьбы, которое пройдет в Ресторан «АТА» 9 января 2025 года</p>
      {/* <h2 className="alistair text-[100px] font-[100] tracking-[6px]" >21 декабря 2024 года</h2> */}
      {/* <p className="playfair">Мы будем счастливы видеть вас в числе наших гостей</p> */}
      <div className="relative">
        <img src="https://cil.in.ua/wp-content/uploads/2024/03/erke-rysdauletov-QDr0_GRJ4Wc-unsplash-800x400.jpg" alt="" />
        <div className="w-full absolute left-0 top-[0px] h-[60px] bg-gradient-to-b from-[#fff] to-[#0000]"></div>
      </div>
      
      <div className="w-full absolute left-0 bottom-[20px] h-[60px] bg-gradient-to-b from-[#0000] to-white"></div>
    </div>
  )
}
