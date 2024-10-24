import React from "react"

const Treatment = ({ test, setTest }) => {

  const onTreatmentConfirm = (has_treatment) => {
    setTest(old => ({ ...old, has_treatment }))
  }

  return <section className="p-[5%] py-[15%] md:py-[10%] lg:py-[5%] bg-white text-center text-[#404040]">
    <div className="max-w-md mx-auto">
      <figure className="text-6xl mb-4">💁‍♀️</figure>
      <h1 className="text-2xl mb-4">¿Tu cabello ha recibido algún <br className="hidden md:block" /><b>tipo de tratamiento?</b></h1>
      <p className="text-sm mb-4">(Es decir, ¿en los últimos 3 meses, te has teñido, laceado, hecho la queratina, etc.?)</p>
      <div className="flex justify-evenly text-sm">
        <button className="w-28 py-2 rounded border border-1-[#C5B8D4] bg-[#C5B8D4] text-white font-bold" onClick={() => onTreatmentConfirm(true)}>SI</button>
        <button className="w-28 py-2 rounded border border-1-[#9577B9] text-[#9577B9] font-bold" onClick={() => onTreatmentConfirm(false)}>NO</button>
      </div>
    </div>
  </section>
}

export default Treatment