"use client";

import { useState } from 'react';
import { CountUp } from '@/components/count-up';
import Stepper from '@/components/Stepper';
import '@/components/Stepper.css';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({behavior: 'smooth'});
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-neutral-900 text-light leading-relaxed">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-neutral-900/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-xl md:text-2xl font-bold text-white hover:text-neutral-300 transition-colors"
              >
                AUTOŠKOLA BERNOLÁKOVO
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('kurzy')} className="text-neutral-200 hover:text-white transition-colors">Kurzy</button>
              <button onClick={() => scrollToSection('skupiny')} className="text-neutral-200 hover:text-white transition-colors">Skupiny</button>
              <button onClick={() => scrollToSection('recenzie')} className="text-neutral-200 hover:text-white transition-colors">Recenzie</button>
              <button onClick={() => scrollToSection('prihlaska')} className="text-neutral-200 hover:text-white transition-colors">Prihláška</button>
              <button onClick={() => scrollToSection('kontakt')} className="text-neutral-200 hover:text-white transition-colors">Kontakt</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-neutral-200 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-900/95 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('kurzy')} className="block w-full text-left px-3 py-2 text-neutral-200 hover:bg-white/10 rounded-md transition-colors">Kurzy</button>
              <button onClick={() => scrollToSection('skupiny')} className="block w-full text-left px-3 py-2 text-neutral-200 hover:bg-white/10 rounded-md transition-colors">Skupiny</button>
              <button onClick={() => scrollToSection('recenzie')} className="block w-full text-left px-3 py-2 text-neutral-200 hover:bg-white/10 rounded-md transition-colors">Recenzie</button>
              <button onClick={() => scrollToSection('prihlaska')} className="block w-full text-left px-3 py-2 text-neutral-200 hover:bg-white/10 rounded-md transition-colors">Prihláška</button>
              <button onClick={() => scrollToSection('kontakt')} className="block w-full text-left px-3 py-2 text-neutral-200 hover:bg-white/10 rounded-md transition-colors">Kontakt</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative flex flex-col justify-center items-center text-center min-h-screen pt-16 px-4 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large gradient orbs */}
          <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-neutral-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-gradient-to-l from-neutral-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-neutral-600/15 to-neutral-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neutral-300/40 rounded-full animate-float"></div>
          <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-neutral-400/30 rounded-full animate-float" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-neutral-300/50 rounded-full animate-float" style={{animationDelay: '3s', animationDuration: '5s'}}></div>
          <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-neutral-400/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 bg-neutral-300/30 rounded-full animate-float" style={{animationDelay: '4s', animationDuration: '6s'}}></div>
          
          {/* Diagonal lines */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white">
            AUTOŠKOLA BERNOLÁKOVO
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-gray-100 leading-relaxed">
            Profesionálny prístup, moderné vozidlá a kvalitná príprava na skúšky.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 w-full max-w-md sm:max-w-none mx-auto">
            <button 
              onClick={() => scrollToSection('prihlaska')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full bg-white text-neutral-900 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Prihlásiť sa teraz
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Kontaktovať nás
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mt-12 sm:mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                <CountUp end={15} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-gray-300">Rokov skúseností</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                <CountUp end={500} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-gray-300">Úspešných absolventov</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                <CountUp end={95} suffix="%" />
              </div>
              <div className="text-xs sm:text-sm text-gray-300">Úspešnosť skúšok</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                <CountUp end={4} />
              </div>
              <div className="text-xs sm:text-sm text-gray-300">Moderné vozidlá</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kurzy Section */}
      <section id="kurzy" className="py-12 sm:py-16 md:py-20 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Vodičský kurz
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto px-4">
              Ponúkame komplexné kurzy na osobný automobil a motocykel
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Moderné vozidlá", desc: "Jazdy osobným automobilom PEUGEOT 207, HYUNDAI i20, MERCEDES BENZ VITO a SUZUKI VITARA" },
              { title: "Výučba teórie", desc: "Výučba teórie v Bernolákove" },
              { title: "Individuálny prístup", desc: "Individuálny prístup pri výuke riadenia vozidla" },
              { title: "Prípadové štúdie", desc: "Riešenie prípadových štúdií" },
              { title: "Platba na splátky", desc: "Možnosť platenia na splátky" },
              { title: "Rýchlokurzy", desc: "Rýchlokurzy s konzultáciami" },
              { title: "Kondičné jazdy", desc: "Kondičné jazdy, doškoľovací kurz vodičov" },
              { title: "Prvá pomoc", desc: "Kurzy prvej pomoci" },
              { title: "Flexibilné kurzy", desc: "Možnosť výberu z intenzívneho a polointenzívneho kurzu" },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-neutral-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skupiny Section */}
      <section id="skupiny" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Skupiny vodičských oprávnení
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 px-4">
              Všetky typy vodičských oprávnení
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[
              { group: "B+E", desc: "Prívesný vozík za osobný automobil nad 750 kg", age: "" },
              { group: "AM", desc: "Do 50 cm³", age: "od 15 rokov" },
              { group: "A1", desc: "Do 125 cm³", age: "od 16 rokov" },
              { group: "A2", desc: "Do 35 kW", age: "od 18 rokov" },
              { group: "A", desc: "Bez obmedzenia", age: "od 24 rokov" },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl font-black text-white mb-3">{item.group}</div>
                <p className="text-lg text-neutral-300 mb-2">{item.desc}</p>
                {item.age && <p className="text-neutral-100 font-semibold">{item.age}</p>}
              </div>
            ))}
          </div>

          <div className="bg-secondary/10 border border-white/30 rounded-xl p-8 text-center">
            <p className="text-lg text-light">
              <strong className="text-white">Aktuálnu cenu kurzu "B" si prosím overte</strong> — kvôli cenovej nestabilite.<br />
              <span className="text-gray-400">(cena nezahŕňa správny poplatok za skúšku 33 €)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="recenzie" className="py-20 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Recenzie našich študentov
            </h2>
            <p className="text-xl text-neutral-400">
              Prečítajte si skúsenosti absolventov našej autoškoly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Peter Novák",
                rating: 5,
                date: "August 2024",
                text: "Výborná autoškola! Inštruktor bol trpezlivý a profesionálny. Skúšku som zvládol na prvýkrát. Určite odporúčam!",
                course: "Skupina B"
              },
              {
                name: "Mária Horváthová",
                rating: 5,
                date: "Júl 2024",
                text: "Moderné vozidlá a skvelý prístup. Teória bola veľmi dobre vysvetlená. Veľká vďaka za prípravu!",
                course: "Skupina B"
              },
              {
                name: "Tomáš Krajčí",
                rating: 5,
                date: "Jún 2024",
                text: "Individuálny prístup a flexibilita pri dohodách termínov. Výučba bola na vysokej úrovni.",
                course: "Skupina A2"
              },
              {
                name: "Jana Svobodová",
                rating: 5,
                date: "Máj 2024",
                text: "Profesionálny prístup od začiatku až do konca. Cítila som sa bezpečne a pripravená na skúšku.",
                course: "Skupina B"
              },
              {
                name: "Lukáš Baláž",
                rating: 5,
                date: "Apríl 2024",
                text: "Skvelá autoškola v Senci. Inštruktori sú odborníci a majú skúsenosti. Všetko prebehlo hladko.",
                course: "Skupina B"
              },
              {
                name: "Katarína Molnárová",
                rating: 5,
                date: "Marec 2024",
                text: "Odporúčam každému! Platba na splátky mi veľmi pomohla. Výborná komunikácia a prístup.",
                course: "Skupina B"
              },
            ].map((review, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{review.name}</h3>
                    <p className="text-sm text-neutral-400">{review.course}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-neutral-300 mb-4 leading-relaxed">{review.text}</p>
                <p className="text-sm text-neutral-500">{review.date}</p>
              </div>
            ))}
          </div>

          {/* Overall Rating */}
          <div className="mt-16 text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div>
                <div className="text-6xl font-black text-white mb-2">
                  <CountUp end={4.9} decimals={1} />
                </div>
                <div className="flex gap-1 text-3xl text-yellow-400 mb-2">★★★★★</div>
                <p className="text-neutral-400">Na základe 150+ recenzií</p>
              </div>
              <div className="h-20 w-px bg-white/20 hidden md:block"></div>
              <div className="text-left">
                <p className="text-xl text-neutral-200 mb-2"><strong><CountUp end={95} suffix="%" /> úspešnosť</strong> pri skúškach na prvýkrát</p>
                <p className="text-xl text-neutral-200"><strong><CountUp end={500} suffix="+" /></strong> spokojných absolventov</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizácia kurzov */}
      <section className="py-20 px-4 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Organizácia kurzov
            </h2>
            <p className="text-xl text-neutral-400">
              Ako sa prihlásiť a kedy začať
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-3">Lokality</h3>
              <p className="text-neutral-300 text-lg">Priebežne otvárame nové kurzy v Bernolákove</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-3">Termíny</h3>
              <p className="text-neutral-300 mb-2">Skupina B — hlásiť sa 3 mesiace vopred</p>
              <p className="text-neutral-300">Skupina A — hlásiť sa 2 mesiace vopred</p>
            </div>

            <div className="md:col-span-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-3">Potrebné dokumenty</h3>
              <p className="text-neutral-300 text-lg">Prineste si žiadosť/prihlášku potvrdenú lekárom + kópiu občianskeho preukazu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Užitočné odkazy a FAQ */}
      <section className="py-20 px-4 bg-gradient-to-b from-neutral-800 to-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Užitočné zdroje
            </h2>
            <p className="text-xl text-neutral-400">
              Všetko čo potrebujete vedieť
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Užitočné odkazy */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Užitočné odkazy
              </h3>
              <div className="space-y-4">
                <a 
                  href="https://youtu.be/h86oSFuZyZI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/5 backdrop-blur rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 group"
                >
                  <span className="text-lg font-semibold text-neutral-200 group-hover:text-white transition-colors">Jazda na cvičisku →</span>
                </a>
                <a 
                  href="https://testy-skvza.sk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/5 backdrop-blur rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 group"
                >
                  <span className="text-lg font-semibold text-neutral-200 group-hover:text-white transition-colors">Nové testy →</span>
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gradient-to-br from-neutral-100/10 to-neutral-700/10 border border-white/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Časté otázky
              </h3>
              <div className="space-y-3 text-left">
                <div className="text-light">• Ani sanitka vás nesmie nútiť ísť na červenú, ak je to nebezpečné</div>
                <div className="text-light">• Kto z vás si môže povedať, že je čestný vodič?</div>
                <div className="text-light">• Povinná výbava auta – najnovší sumár</div>
                <div className="text-light">• Skúšali sme zabrzdiť Toyotu s plynom na podlahe</div>
                <div className="text-light">• Smie sa v obci predchádzať sprava alebo nie?</div>
                <div className="text-light">• Všímajte si aj šípky na ceste — môžete ušetriť až 60 €</div>
              </div>
            </div>
          </div>

          {/* Ochrana osobných údajov */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Ochrana osobných údajov (IDO)
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Autoškola agenda", url: "https://drive.google.com/file/d/1-PcYTLmD3NSKtTPhsKkDP6KF8_4G-uTU/view" },
                { title: "Správa registratúry", url: "https://drive.google.com/file/d/1hzkR1hktoNLAuS-BY7CVDlVbHarjhKxw/view" },
                { title: "Účtovné doklady", url: "https://drive.google.com/file/d/1v_WIlTZa2on0D6i_senIbRBEHmNHc3Rl/view" },
                { title: "GPS monitorovanie", url: "https://drive.google.com/file/d/1pmO9IbdtWTpYrj0i_1dE6GjiEawztv4i/view" },
              ].map((doc, index) => (
                <a 
                  key={index}
                  href={doc.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/5 backdrop-blur rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 text-center group"
                >
                  <span className="text-sm text-neutral-200 group-hover:text-white transition-colors">{doc.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prihláška Section */}
      <section id="prihlaska" className="py-12 sm:py-16 md:py-20 px-4 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Prihláste sa už dnes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Ak ste sa rozhodli pre výuku v našej autoškole, postupujte podľa krokov nižšie
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-8 mb-8 min-h-[500px] sm:min-h-[600px] flex flex-col">
            <Stepper
              initialStep={1}
              backButtonText="Späť"
              nextButtonText="Ďalší krok"
              completeButtonText="Dokončiť"
              stepCircleContainerClassName="mb-6"
              contentClassName="flex-1 overflow-y-auto py-4"
              footerClassName="pt-4 mt-auto flex-shrink-0"
              backButtonProps={{
                className: "px-6 py-3 bg-white/5 backdrop-blur text-white rounded-lg hover:bg-white/10 transition-all font-semibold"
              }}
              nextButtonProps={{
                className: "px-6 py-3 bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-all font-semibold shadow-lg"
              }}
            >
              {/* Step 1: Vyzdvihnite prihlášku */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Vyzdvihnite prihlášku</h3>
                    <p className="text-neutral-300 text-lg mb-4">
                      Prihlášku si môžete vyzdvihnúť priamo u nás v autoškole alebo stiahnuť nižšie.
                    </p>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
                      <p className="text-yellow-200 text-center">
                        <strong className="text-yellow-400">Pozor!</strong> Žiadosť má 2 strany (tlačiť obojstranne A4)
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[
                        { title: "Žiadosť o udelenie VO", url: "https://drive.google.com/file/d/1IVNNk3DnY7smXGPe8Gx_4oEv6EsTykQe/view" },
                        { title: "Odôvodnenie neúčasti na skúške", url: "https://drive.google.com/file/d/17jEJJ0O0ar0AcGODGO-iuJbY6mGg2GN_/view" },
                        { title: "Čestné vyhlásenie o praxi", url: "https://drive.google.com/file/d/1R3uXFupmXEFcyUWMXAe8Y6fVQPjB95s2/view" },
                      ].map((doc, index) => (
                        <a 
                          key={index}
                          href={doc.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block p-4 bg-white/10 backdrop-blur rounded-xl text-center border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                        >
                          <span className="text-sm text-white font-semibold">{doc.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Navštívte lekára */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Navštívte lekára</h3>
                    <p className="text-neutral-300 text-lg mb-6">
                      Nechajte si potvrdiť žiadosť u všeobecného lekára. Lekár posúdi vašu zdravotnú spôsobilosť na vedenie motorového vozidla.
                    </p>
                    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Lekárska prehliadka</h4>
                          <p className="text-neutral-400">Absolvujte základnú zdravotnú prehliadku u praktického lekára</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Potvrdenie</h4>
                          <p className="text-neutral-400">Lekár potvrdí žiadosť pečiatkou a podpisom</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Platnosť</h4>
                          <p className="text-neutral-400">Lekárske potvrdenie je platné 6 mesiacov</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Pripravte dokumenty */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-full">
                    <h3 className="text-2xl font-bold text-white mb-3">Pripravte potrebné dokumenty</h3>
                    <p className="text-neutral-300 text-lg mb-4">
                      Pred návštevou našej autoškoly si pripravte nasledujúce dokumenty.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4">
                        <h4 className="text-white font-semibold text-sm mb-1">Občiansky preukaz</h4>
                        <p className="text-neutral-400 text-xs">Kópia OP (farebná fotokópia)</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4">
                        <h4 className="text-white font-semibold text-sm mb-1">Vyplnená žiadosť</h4>
                        <p className="text-neutral-400 text-xs">Žiadosť potvrdená lekárom</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4">
                        <h4 className="text-white font-semibold text-sm mb-1">Fotografie</h4>
                        <p className="text-neutral-400 text-xs">2 fotografie (3,5 x 4,5 cm)</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4">
                        <h4 className="text-white font-semibold text-sm mb-1">Poplatok</h4>
                        <p className="text-neutral-400 text-xs">Správny poplatok za VP</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Odovzdajte prihlášku */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-full">
                    <h3 className="text-2xl font-bold text-white mb-3">Odovzdajte prihlášku a začnite kurz</h3>
                    <p className="text-neutral-300 text-lg mb-4">
                      Kontaktujte nás a dohodnite si termín začiatku kurzu. Tešíme sa na vás!
                    </p>
                    <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-white mb-3">Kontaktné informácie</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          </div>
                          <div>
                            <p className="text-neutral-400 text-xs">Radovan Hanic</p>
                            <a href="tel:0905277140" className="text-white font-semibold hover:text-neutral-300 transition-colors">
                              0905 277 140
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          </div>
                          <div>
                            <p className="text-neutral-400 text-xs">Kristián Hanic</p>
                            <a href="tel:0911766322" className="text-white font-semibold hover:text-neutral-300 transition-colors">
                              0911 766 322
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          </div>
                          <div>
                            <p className="text-neutral-400 text-xs">Lokality</p>
                            <p className="text-white font-semibold text-sm">Bernolákovo</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <button
                          onClick={() => scrollToSection('kontakt')}
                          className="w-full px-4 py-2 bg-white text-neutral-900 font-semibold text-sm rounded-lg hover:bg-neutral-100 transition-all duration-300"
                        >
                          Kontaktovať autoškolu
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Stepper>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-12 sm:py-16 md:py-20 px-4 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Kontaktujte nás
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">
              Autoškola v Bernolákove. Radi zodpovieme všetky vaše otázky.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Kontakt 1 */}
            <div className="bg-gradient-to-br from-neutral-600/20 to-neutral-700/5 border border-white/30 rounded-2xl p-8 hover:border-white/50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-white to-neutral-700 rounded-full flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20"></div>
                </div>
                <h3 className="text-2xl font-bold text-light mb-2">Radovan Hanic</h3>
                <p className="text-gray-400 mb-4">Vedúci autoškoly</p>
                <div className="space-y-3 w-full">
                  <a 
                    href="tel:0905277140"
                    className="flex items-center justify-center gap-3 p-4 bg-neutral-900/50 rounded-lg border border-white/20 hover:border-white hover:bg-neutral-900/70 transition-all duration-300 group"
                  >
                    <span className="text-xl font-semibold text-light group-hover:text-white transition-colors">0905 277 140</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Kontakt 2 */}
            <div className="bg-gradient-to-br from-neutral-100/20 to-secondary/5 border border-white/30 rounded-2xl p-8 hover:border-white/50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-neutral-100 to-neutral-700 rounded-full flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20"></div>
                </div>
                <h3 className="text-2xl font-bold text-light mb-2">Kristián Hanic</h3>
                <p className="text-gray-400 mb-4">Inštruktor</p>
                <div className="space-y-3 w-full">
                  <a 
                    href="tel:0911766322"
                    className="flex items-center justify-center gap-3 p-4 bg-neutral-900/50 rounded-lg border border-white/20 hover:border-white hover:bg-neutral-900/70 transition-all duration-300 group"
                  >
                    <span className="text-xl font-semibold text-light group-hover:text-white transition-colors">0911 766 322</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-neutral-600/20 via-accent/20 to-secondary/20 border border-white/30 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-light mb-4">
              Začnite svoju cestu k vodičskému preukazu
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Telefonické prihlášky a informácie o kurzoch – voľajte kedykoľvek!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0905277140"
                className="px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-white to-[#05b388] text-dark shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Zavolať teraz
              </a>
              <button 
                onClick={() => scrollToSection('prihlaska')}
                className="px-8 py-4 text-lg font-bold rounded-full bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Stiahnuť prihlášku
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020c17] border-t border-white/20 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">AUTOŠKOLA BERNOLÁKOVO</h3>
              <p className="text-gray-400 leading-relaxed">
                Profesionálna príprava vodičov v Bernolákove. Moderné vozidlá, skúsení inštruktori a vysoká úspešnosť.
              </p>
            </div>

            {/* Rýchle odkazy */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Rýchle odkazy</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('kurzy')} className="block text-gray-400 hover:text-white transition-colors">Kurzy</button>
                <button onClick={() => scrollToSection('skupiny')} className="block text-gray-400 hover:text-white transition-colors">Skupiny</button>
                <button onClick={() => scrollToSection('recenzie')} className="block text-gray-400 hover:text-white transition-colors">Recenzie</button>
                <button onClick={() => scrollToSection('prihlaska')} className="block text-gray-400 hover:text-white transition-colors">Prihláška</button>
                <button onClick={() => scrollToSection('kontakt')} className="block text-gray-400 hover:text-white transition-colors">Kontakt</button>
              </div>
            </div>

            {/* Kontakt */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Kontakt</h3>
              <div className="space-y-2 text-gray-400">
                <p>Tel: 0905 277 140</p>
                <p>Tel: 0911 766 322</p>
                <p>Bernolákovo</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-8 text-center text-gray-500">
            <p className="mb-2">&copy; 2025 Autoškola Bernolákovo — Radovan Hanic</p>
            <p className="text-sm mb-2">Obsah stránky je duševným vlastníctvom, všetky práva vyhradené.</p>
            <p className="text-sm">
              Developed by <a href="https://ownage.tech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-300 transition-colors font-semibold">Ownage</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
