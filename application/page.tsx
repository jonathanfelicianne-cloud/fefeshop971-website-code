'use client'

import React, { useState } from 'react';
import { ShoppingCart, Megaphone, Users, Truck, Shield, MessageCircle } from 'lucide-react';

export default function Home() {
  const [ads, setAds] = useState([
    {
      id: 1,
      title: "iPhone 13 Pro Max 256Go",
      price: "750€",
      description: "Excellent état, batterie 89%, avec boîte et chargeur",
      whatsapp: "59069050582",
      date: "21/09/2026"
    },
    {
      id: 2,
      title: "Canapé d'angle convertible",
      price: "400€",
      description: "Gris, très bon état, 3 places + méridienne",
      whatsapp: "59069050582",
      date: "20/09/2026"
    },
    {
      id: 3,
      title: "VTT Décathlon Rockrider ST540",
      price: "180€",
      description: "Taille L, peu servi, révisé",
      whatsapp: "59069050582",
      date: "19/09/2026"
    }
  ]);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    whatsapp: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAd = {
      id: ads.length + 1,
      ...formData,
      date: new Date().toLocaleDateString('fr-FR')
    };
    setAds([newAd, ...ads]);
    setFormData({ title: "", price: "", description: "", whatsapp: "" });
    alert("Annonce envoyée ! Elle sera publiée après validation.");
  };

  const openWhatsApp = (number: string, message: string) => {
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-black border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="text-red-600">FEFE</span>SHOP971
          </div>
          <button 
            onClick={() => openWhatsApp('59069050582', 'Bonjour FEFESHOP971')}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full flex items-center gap-2 font-semibold"
          >
            <MessageCircle size={18} />
            WhatsApp
          </button>
        </div>
      </div>

      <div className="bg-red-600 text-center py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="font-bold text-lg">Louez cet espace 50€/mois — visible par toute la Guadeloupe</p>
          <button 
            onClick={() => openWhatsApp('59069050582', 'Je veux réserver la bannière FEFESHOP971 à 50€/mois')}
            className="bg-black hover:bg-gray-900 px-6 py-2 rounded-full mt-2 font-semibold flex items-center gap-2 mx-auto"
          >
            <MessageCircle size={18} />
            Réserver
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="inline-block bg-gray-800 px-4 py-1 rounded-full text-sm mb-4">
          Guadeloupe • Mandataire d'achat
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Je trouve tout <span className="text-red-600">moins cher</span> en Guadeloupe
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Livraison rapide en 8 à 15 jours. Tu paies seulement si le prix te convient.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => openWhatsApp('59069050582', 'Bonjour, je veux commander sur FEFESHOP971')}
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 justify-center"
          >
            <ShoppingCart size={20} />
            Magasin FEFESHOP971
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 justify-center">
            <Megaphone size={20} />
            Petites annonces GP
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
          <div className="bg-gray-900 p-4 rounded-lg">
            <Users className="mx-auto mb-2 text-red-600" size={24} />
            <div className="font-bold text-xl">500+</div>
            <div className="text-gray-400 text-sm">clients satisfaits</div>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <Truck className="mx-auto mb-2 text-red-600" size={24} />
            <div className="font-bold text-xl">8-15 j</div>
            <div className="text-gray-400 text-sm">délai respecté</div>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <Shield className="mx-auto mb-2 text-red-600" size={24} />
            <div className="font-bold text-xl">100%</div>
            <div className="text-gray-400 text-sm">paiement sécurisé</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Petites annonces GP</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ads.map((ad) => (
            <div key={ad.id} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">{ad.title}</h3>
                <span className="text-red-600 font-bold text-xl">{ad.price}</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm">{ad.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-xs">{ad.date}</span>
                <button 
                  onClick={() => openWhatsApp(ad.whatsapp, `Bonjour, je suis intéressé par votre annonce: ${ad.title} à ${ad.price}`)}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1"
                >
                  <MessageCircle size={16} />
                  Contacter
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-lg p-6 max-w-2xl mx-auto border border-gray-800">
          <h3 className="text-2xl font-bold mb-6 text-center">Proposer une annonce</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Titre de l'annonce"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white"
              required
            />
            <input
              type="text"
              placeholder="Prix"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white"
              required
            />
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white h-24"
              required
            />
            <input
              type="text"
              placeholder="WhatsApp : 59069050582"
              value={formData.whatsapp}
              onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white"
              required
            />
            <button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-bold text-lg"
            >
              Envoyer l'annonce
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © 2026 FEFESHOP971 - Guadeloupe
      </div>
    </div>
  );
}
