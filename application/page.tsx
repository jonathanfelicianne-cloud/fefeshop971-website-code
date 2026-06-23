"use client";
import { ArrowRight, Phone, Star } from "lucide-react";

export default function Page() {
  const WA = "https://wa.me/590690000000";
  
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-red-600" />
            <span className="font-extrabold text-lg">FEFESHOP971</span>
          </div>
          <a href={WA} target="_blank" className="rounded-2xl bg-emerald-600 px-3 py-2 text-white font-semibold">
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-red-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Je trouve tout <span className="text-yellow-300">moins cher</span> en Guadeloupe
          </h1>
          <p className="mt-3 opacity-95">
            Le bon coin régulé et à 10-15 points. Tu paies seulement si le prix te convient.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA} target="_blank" className="rounded-2xl bg-black px-5 py-3 font-semibold">
              Magasin FEFESHOP971
            </a>
            <a href="#annonces" className="rounded-2xl bg-white text-red-700 px-5 py-3 font-semibold">
              Petites annonces GP
            </a>
          </div>
        </div>
      </section>

      {/* Annonces */}
      <section id="annonces" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-extrabold">Annonces récentes</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {t:"iPhone 13 128 Go", p:"590€", b:"Basse-Terre"},
            {t:"Canapé 3 places", p:"280€", b:"Pointe-à-Pitre"},
            {t:"VTT Décathlon", p:"150€", b:"Le Gosier"},
          ].map((a,i) => (
            <div key={i} className="rounded-2xl border p-4">
              <div className="font-semibold">{a.t}</div>
              <div className="text-sm text-gray-600">{a.b}</div>
              <div className="mt-2 font-extrabold">{a.p}</div>
              <a href={WA} target="_blank" className="mt-3 inline-block rounded-xl bg-red-600 px-3 py-2 text-white text-sm font-semibold">
                Contacter sur WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm">
          © {new Date().getFullYear()} FEFESHOP971 · Le bon coin 100% Guadeloupe
        </div>
      </footer>
    </main>
  );
}
