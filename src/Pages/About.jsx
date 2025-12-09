import React from 'react'

const About = () => {
  return (
    <div className="px-6 py-16 relative pt-40 ">
      <img
        src="https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_1280.jpg"
        alt="Flowers"
        className="absolute top- 17 inset-0 w-full h-full object-cover -z-10 opacity-90"
      />

      {/* ABOUT SECTION */}
      <section className="max-w-3xl mx-auto text-center mb-20 text-white">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className=" leading-relaxed">
          At Secret Garden Florals, we believe every flower carries a message and every bouquet should feel personal.
          We design each arrangement based on your mood, preferences, and the story you wish to share.
        </p>
      </section>

      {/* BOUQUET TYPES */}
      <section className="max-w-4xl mx-auto mb-20 text-white">
        <h3 className="text-3xl font-semibold mb-6 text-center">Bouquet Types We Provide</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <li className="p-4 bg-pink-50 rounded-xl">💐 Mood-Based Bouquets</li>
          <li className="p-4 bg-pink-50 rounded-xl">🌸 Customized Color-Themed Bouquets</li>
          <li className="p-4 bg-pink-50 rounded-xl">🌹 Romance & Love Bouquets</li>
          <li className="p-4 bg-pink-50 rounded-xl">🎉 Celebration Bouquets</li>
          <li className="p-4 bg-pink-50 rounded-xl">💛 Comfort & Healing Bouquets</li>
          <li className="p-4 bg-pink-50 rounded-xl">🎀 Aesthetic Minimal Bouquets</li>
        </ul>
      </section>

      {/* FLOWER TYPES */}
      <section className="max-w-4xl mx-auto mb-20 text-white">
        <h3 className="text-3xl font-semibold mb-6 text-center">Flowers We Have</h3>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
          <li className="p-4 bg-green-50 rounded-xl">🌹 Roses</li>
          <li className="p-4 bg-green-50 rounded-xl">🌼 Daisies</li>
          <li className="p-4 bg-green-50 rounded-xl">🌸 Tulips</li>
          <li className="p-4 bg-green-50 rounded-xl">🌷 Orchids</li>
          <li className="p-4 bg-green-50 rounded-xl">💐 Lilies</li>
          <li className="p-4 bg-green-50 rounded-xl">🌺 Carnations</li>
        </ul>
      </section>
    </div>
  )
}

export default About
