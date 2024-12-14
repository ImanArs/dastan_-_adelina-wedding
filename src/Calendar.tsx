export const Calendar = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1); // Дни месяца
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-center mb-4">December 2024</h2>
      <div className="grid grid-cols-7 gap-2 w-[370px] m-auto text-[20px]">
        {/* Метки дней недели */}
        {weekDays.map((weekDay, index) => (
          <div key={index} className="text-center font-bold">
            {weekDay}
          </div>
        ))}
        {/* Добавляем пустые ячейки для смещения дней */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={`empty-${index}`} className=""></div>
        ))}
        {/* Дни месяца */}
        {days.map((day) => (
          <div
            key={day}
            className={`
              flex items-center justify-center w-10 h-10 rounded-full relative
              ${day === 21 ? "border border-black text-black" : ""}
              ${day === 21 ? "cursor-pointer" : ""}
            `}
          >
            {day}
            {day === 21 && (
              <span className="top-[80%] left-0 absolute w-[150px] text-center -rotate-[20deg] block px-4 py-2 bg-black text-white rounded-md text-sm">
                будем ждать
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        
      </div>
    </div>
  );
};
