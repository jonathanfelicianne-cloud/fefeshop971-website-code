'use client'

import { ShoppingCart, Megaphone, Users, Truck, Shield } from 'lucide-react'

export default function Home() {
  const whatsappNumber = '590690590582' // ← METS TON NUMÉRO ICI

  const ads = [
    {
      id: 1,
      title: 'iPhone 13 Pro 256Go',
      price: '750€',
      image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400',
      description: 'État neuf, batterie 98%. Facture et boîte.'
    },
    {
      id: 2,
      title: 'Canapé d\'angle gris',
      price: '320€',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400',
      description: 'Très bon état. À récupérer à Baie-Mahault.'
    },
    {
      id: 3,
      title: 'Vélo VTT Decathlon',
      price: '180€',
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400',
      description: '27.5 pouces. Peu servi. Révisé.'
    }
  ]

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-black text-red-600">FEFESHOP971</h1>
          <button 
            onClick={() => openWhatsApp('Bonjour FEFESHOP971, j\'ai une question')}
            className="bg-green-500 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2"
          >
            WhatsApp
          </button>
        </div>
      </header>

      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Je trouve tout <span className="text-red-600">moins cher</span> en Guadeloupe
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Livraison rapide en 8 à 15 jours. Tu paies seulement si le prix te convient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openWhatsApp('Bonjour, je veux commander sur le Magasin FEFESHOP971')}
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} /> Magasin FEFESHOP971
            </button>
            <button 
              onClick={() => openWhatsApp('Bonjour, je veux poster une annonce sur Petites annonces GP')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
            >
              <Megaphone size={20} /> Petites annonces GP
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div className="bg-white p-6 rounded-xl shadow">
            <Users className="mx-auto text-red-600 mb-2" size={32} />
            <div className="text-2xl font-black">500+</div>
            <div className="text-gray-600">clients satisfaits</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <Truck className="mx-auto text-red-600 mb-2" size={32} />
            <div className="text-2xl font-black">8-15 j</div>
            <div className="text-gray-600">délai respecté</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <Shield className="mx-auto text-red-600 mb-2" size={32} />
            <div className="text-2xl font-black">100%</div>
            <div className="text-gray-600">paiement sécurisé</div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-black text-center mb-8">Dernières annonces</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {ads.map((ad) => (
              <div key={ad.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
                <img src={ad.image} alt={ad.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">{ad.title}</h4>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold">{ad.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{ad.description}</p>
                  <button 
                    onClick={() => openWhatsApp(`Bonjour, je suis intéressé par l'annonce : ${ad.title} à ${ad.price}`)}
                    className="w-full bg-green-500 text-white py-2 rounded-lg font-bold"
                  >
                    Contacter sur WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button 
              onClick={() => openWhatsApp('Bonjour, je veux voir toutes les petites annonces GP')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold"
            >
              Voir toutes les annonces
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-black mb-2">FEFESHOP971</h3>
          <p className="text-gray-400 text-sm">CGV Mandataire • Guadeloupe • 2026</p>
        </div>
      </footer>
    </main>
  )
}
