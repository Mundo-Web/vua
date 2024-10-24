import React from "react"

const Fragrance = ({ test, setTest }) => {

  const fragrances = [
    {
      "name": "SWEET PEAR",
      "value": "sweet-pear",
      "image": "fragrance-sweet-pear"
    },
    {
      "name": "COCO TROPICAL",
      "value": "coco-tropical",
      "image": "fragrance-coco-tropical"
    },
    {
      "name": "MANZANA VERDE",
      "value": "manzana-verde",
      "image": "fragrance-manzana-verde"
    },
    {
      "name": "BRISA MARINA",
      "value": "brisa-marina",
      "image": "fragrance-brisa-marina"
    },
    {
      "name": "RASPBERRY BLISS",
      "value": "raspberry-bliss",
      "image": "fragrance-raspberry-bliss"
    },
    {
      "name": "SIN FRAGANCIA",
      "value": "sin-fragancia",
      "image": "fragrance-sin-fragancia"
    }
  ]

  const onFragranceClicked = (fragrance) => {
    setTest(old => ({ ...old, fragrance }))
  }

  return <section className="p-[5%] py-[15%] md:py-[10%] lg:py-[5%] bg-white text-center text-[#404040]">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl mb-8">Elige la <b>fragancia</b> de tu rutina</h1>
      <div className="flex flex-wrap justify-center text-sm w-full mb-4 gap-4">
        {
          fragrances.map((fragrance, index) => {
            return <button className="border border-1-[#C5B8D4] rounded-lg bg-white text-[#9577B9] font-bold w-36"
              onClick={() => onFragranceClicked(fragrance.value)}>
              <img className="aspect-[5/3] rounded w-full object-cover object-center" src={`/assets/img/test/${fragrance.image}.png`} alt="Crespo" />
              <p className="p-2 truncate">{fragrance.name}</p>
            </button>
          })
        }
      </div>
    </div>
  </section>
}

export default Fragrance