import React, { useState, useEffect } from 'react'
import { submitGuest } from './service/submitGuests'

export const Rsvp = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  // Загрузка данных из localStorage при первом рендере
  useEffect(() => {
    const savedData = localStorage.getItem('rsvpForm')
    if (savedData) {
      setFormData(JSON.parse(savedData))
      setFormSubmitted(true)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Data Submitted:', formData)

    // Сохранение данных в localStorage
    localStorage.setItem('rsvpForm', JSON.stringify(formData))
    setFormSubmitted(true)

    submitGuest(formData) // Вызов вашей функции для отправки данных
  }

  return (
    <div className="w-full bg-[#202020] text-white text-center py-10 px-5 playfair pb-[200px] relative">
      <h2 className="uppercase text-4xl font-bold mb-4 felidae tracking-[4px]">Registration</h2>
      <p className="mb-8 text-[22px] tracking-[1px] snellBold font-[100]">Подтвердите свое присутствие</p>

      {formSubmitted ? (
        <div className="text-xl text-green-400 snellBold">
          спасибо за подтверждение
        </div>
      ) : (
        <form className="max-w-md mx-auto flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            className="p-3 rounded-[2px] bg-[#202020] text-white placeholder-gray-400 border"
            type="text"
            id="name"
            name="name"
            placeholder="Ваше имя и фамилия"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            className="p-3 rounded-[2px] bg-[#202020] text-white placeholder-gray-400 border"
            type="number"
            id="phone_number"
            name="phone_number"
            placeholder="Ваш номер телефона"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />

          <div>
            <button
              type="submit"
              className="uppercase bg-transparent border text-[#c6c6c6] py-3 px-6 rounded-md font-medium transition-all max-w-[200px] w-full"
            >
              отправить
            </button>
          </div>
        </form>
      )}
      <h2 className="absolute bottom-[10%] z-[0] right-[-70px] text-[#fff8] rotate-[90deg] uppercase felidae text-[100px] tracking-[4px]">
        RSVP
      </h2>
    </div>
  )
}
