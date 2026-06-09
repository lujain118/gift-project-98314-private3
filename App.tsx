//import { useState, useCallback } from 'react';
import { motion, } from 'framer-motion';
import Confetti, {
  BirthdayCake,
  EnvelopeSection,
  //GallerySection,
  Footer,
} from './components';
import { QRCodeSVG } from 'qrcode.react';
const BIRTHDAY_NAME = 'My Love';
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-romantic"
     
      style={{ cursor: 'default' }}
    >
      {/* Radial glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(245,200,66,0.12) 0%, transparent 70%)',
        }}
      />


      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Title above cake */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6"
        >
          <p className="font-dancing text-2xl md:text-3xl mb-1" style={{ color: '#c2185b' }}>
            ✦ A small gift for you  ✦
          </p>
          <motion.h1
            className="font-playfair font-bold leading-tight"
            style={{
              fontSize: 'clamp(2.4rem, 7vw, 5rem)',
              color: '#6d1b2e',
              textShadow: '0 2px 20px rgba(109,27,46,0.2)',
            }}
            animate={{ textShadow: ['0 2px 20px rgba(109,27,46,0.2)', '0 2px 30px rgba(212,160,23,0.35)', '0 2px 20px rgba(109,27,46,0.2)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Happy Birthday
          </motion.h1>
          <motion.h1
            className="font-dancing font-bold leading-tight"
            style={{
              fontSize: 'clamp(2.8rem, 9vw, 6rem)',
              color: '#d4a017',
              textShadow: '0 0 30px rgba(212,160,23,0.6), 0 0 60px rgba(245,200,66,0.25)',
              lineHeight: 1.1,
            }}
            animate={{ textShadow: ['0 0 30px rgba(212,160,23,0.6), 0 0 60px rgba(245,200,66,0.25)', '0 0 50px rgba(212,160,23,0.9), 0 0 80px rgba(245,200,66,0.4)', '0 0 30px rgba(212,160,23,0.6), 0 0 60px rgba(245,200,66,0.25)'] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            {BIRTHDAY_NAME}
          </motion.h1>
        </motion.div>

        {/* Cake */}
        <motion.div
          className="float-bob"
          style={{ animationDuration: '4s' }}
        >
          <BirthdayCake />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8"
        >
          <div className="section-divider" />
          <p className="font-cormorant text-xl md:text-2xl italic mt-4" style={{ color: '#8b2e45' }}>
           Can you , blow out the candle ?
          </p>
        </motion.div>
            <p
              className=" font-cormorant text-base mt-6  "
             style={{ color: '#c2185b' }}
            >
               Scroll down to continue 
            </p>
      
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="font-dancing text-sm" style={{ color: 'rgba(139,46,69,0.6)' }}></p>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c2185b" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}

function MusicQRSection() {
  return (
    <section
      className="py-20 px-4 text-center"
     style={{ background: 'linear-gradient(160deg, #fce4ec 0%, #fad0df 50%, #f8bbd9 100%)' }}
    >
      <div
        style={{
          width: 320,
          height: 320,
          margin: '0 auto',
          borderRadius: '50%',
           background: 'linear-gradient(160deg, #fffbf0, #fff8f0)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          border: '3px solid #f5c842',
          boxShadow:'0 0 20px rgba(245,200,66,0.6)' ,
        }}
      >
        <QRCodeSVG
          value="https://youtu.be/6FoLlcB0L4g?si=T9tWhH1VR0-crPfJ"
          size={210}
          fgColor=" #6d1b2e"
         bgColor=' #fffbf0'
        />
      </div>

      <h3
        className="font-playfair mt-8"
        style={{
          color: '#6d1b2e',
          fontSize: '2rem',
        }}
      >
        Scan to Listen on Mobile
      </h3>

      <p
        className="font-cormorant text-xl mt-3"
        style={{ color: '#8b2e45' }}
      >
        A special song for you 
      </p>
    </section>
  );
}

export default function App() {
  return (
    <div className="relative">
    <Confetti />
    <HeroSection />
    <EnvelopeSection />
    <MusicQRSection />
    <Footer />
    </div>
  );
}
