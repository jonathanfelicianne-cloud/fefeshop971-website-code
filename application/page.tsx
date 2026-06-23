'use client'
import React, { useState } from 'react';
import { ShoppingCart, Megaphone, Users, Truck, Shield, MessageCircle } from 'lucide-react';

export default function Home() {
  const [ads, setAds] = useState([
    {
      id:1,
      title:"iPhone 13 Pro Max 256 Go",
      price:"750€",
      description:"Excellent état, batterie 89%. Facture + boîte.",
      whatsapp:"59069050582",
      date:"21/09/2026"
    },
    {
      id:2,
      title:"Canapé d'angle convertible",
      price:"280€",
      description:"Gris, 3 places, très bon état. À venir chercher à Saint-François.",
      whatsapp:"59069050582",
      date:"21/09/2026"
    },
    {
      id:3,
      title:"Vélo VTT Décathlon Rockrider",
      price:"120€",
      description:"27,5 pouces, freins disque, révisé. Parfait pour balades Guadeloupe.",
      whatsapp:"59069050582",
      date:"21/09/2026"
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newAd, setNewAd] = useState({title:'',price:'',description:'',whatsapp:''});

  const handleAddAd = (e: React.FormEvent) => {
    e.preventDefault();
    const ad = {...newAd, id: Date.now(), date: new Date().toLocaleDateString('fr-FR')};
    setAds([ad, ...ads]);
    setNewAd({title:'',price:'',description:'',whatsapp:''});
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ShoppingCart className="w-10 h-10" />
              <div>
                <h1 className="text-3xl font-bold">FEFESHOP971</h1>
                <p className="text-sm opacity-90">Le bon coin 100% Guadeloupéen</p>
              </div>
            </div>
            <button 
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-white text-orange-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition flex items-center gap-2"
            >
              <Megaphone className="w-5 h-5" />
              Déposer une annonce
            </button>
          </div>
        </div>
      </header>

      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-orange-500" />
              <span>Entre particuliers 971</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-orange-500" />
              <span>Remise en main propre</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-orange-500" />
              <span>100% Gratuit</span>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {showAddForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Déposer une annonce gratuite</h2>
            <form onSubmit={handleAddAd} className="space-y-4">
              <input
                type="text"
                placeholder="Titre de l'annonce"
                value={newAd.title}
                onChange={(e) => setNewAd({...newAd, title: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              <input
                type="text"
                placeholder="Prix en €"
                value={newAd.price}
                onChange={(e) => setNewAd({...newAd, price: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              <textarea
                placeholder="Description de votre article"
                value={newAd.description}
                onChange={(e) => setNewAd({...newAd, description: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent h-24"
                required
              />
              <input
                type="tel"
                placeholder="Numéro WhatsApp 590690xxxxx"
                value={newAd.whatsapp}
                onChange={(e) => setNewAd({...newAd, whatsapp: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition"
                >
                  Publier l'annonce
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="bg-gray-300 text-gray-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-400 transition"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Annonces récentes en Guadeloupe
          </h2>
          <p className="text-gray-600">{ads.length} annonces disponibles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ads.map((ad) => (
            <div key={ad.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center">
                <ShoppingCart className="w-16 h-16 text-white opacity-50" />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{ad.title}</h3>
                  <span className="text-2xl font-bold text-orange-500">{ad.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{ad.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>Publié le {ad.date}</span>
                  <span>Guadeloupe 971</span>
                </div>
                <a
                  href={`https://wa.me/${ad.whatsapp}?text=Bonjour, votre annonce ${ad.title} m'intéresse`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-bold hover:bg-green-600 transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contacter sur WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-bold mb-2">FEFESHOP971</p>
          <p className="text-sm text-gray-400">Le bon coin 100% Guadeloupéen - Achetez et vendez entre particuliers</p>
          <p className="text-xs text-gray-500 mt-4">© 2026 FEFESHOP971 - Fait avec ❤️ en Guadeloupe</p>
        </div>
      </footer>
    </div>
  );
}
