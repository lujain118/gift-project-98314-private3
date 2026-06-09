import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const CONFETTI = [ '🌸', '🎈'];
interface Piece {
  id: number;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

function usePieces(count = 28): Piece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    emoji: CONFETTI[i % CONFETTI.length],
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 9 + Math.random() * 5,
    size: 0.9 + Math.random() * 0.8,
  }));
}

export default function Confetti() {
  const pieces = usePieces(10);
  return (
    <div className="confetti-container">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}rem`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
}

interface SparkleProps { count?: number; className?: string }
export function Sparkles({ count = 6, className = '' }: SparkleProps) {
  const sparks = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${10 + Math.random() * 80}%`,
    left: `${5 + Math.random() * 90}%`,
    delay: Math.random() * 3,
    duration: 1.5 + Math.random() * 2,
    size: 8 + Math.random() * 12,
  }));

  return (
    <>
      {sparks.map((s) => (
        <div
          key={s.id}
          className={`sparkle ${className}`}
          style={{
            top: s.top,
            left: s.left,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none">
            <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="#d4a017" />
          </svg>
        </div>
      ))}
    </>
  );
}

/* ─── Candle ─── */
interface CandleProps { color?: string }
export function Candle({ color = '#e91e8c' }: CandleProps) {
  return (
    <div className="relative flex flex-col items-center" style={{ width: 16 }}>
      <div className="candle-glow" />
      <div className="flame">
        <div className="flame-inner" />
      </div>
      <div
        style={{
          width: 12,
          height: 36,
          background: `linear-gradient(to bottom, ${color}, ${color}cc)`,
          borderRadius: '2px 2px 0 0',
          position: 'relative',
          boxShadow: `0 0 8px ${color}66`,
        }}
      >

        <div style={{
          position: 'absolute', top: 4, left: 1, width: 4, height: 8,
          background: `${color}88`, borderRadius: '0 0 4px 4px',
        }} />
      </div>
    </div>
  );
}

/* ─── Birthday Cake ─── */
export function BirthdayCake() {
  const candles = [
    { color: '#fad0df', x: 30 },
    { color: '#ff6b35', x: 60 },
    { color: '#ffd700', x: 90 },

  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: 0.5 }}
      className="cake-glow relative"
      style={{ width: 200, userSelect: 'none' }}
    >
      {/* Candles row */}
      <div className="flex items-end justify-around px-3 mb-0" style={{ height: 60 }}>
        {candles.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          >
            <Candle color={c.color} />
          </motion.div>
        ))}
      </div>

      {/* Top tier */}
      <div style={{
        background: 'linear-gradient(135deg, #6d1b2e, #8b2e45, #4a1020)',
        height: 50,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: '12px 12px 4px 4px',
        position: 'relative',
        boxShadow: '0 4px 16px rgba(109,27,46,0.2)',
        border: '2px solid rgba(212,160,23,0.4)',
      }}>
   
        {/* decoration dots */}
        {[20, 45, 70].map((left, i) => (
          <div key={i} style={{
            position: 'absolute', top: '40%', left: `${left}%`,
            width: 8, height: 8, borderRadius: '50%',
            background: '#d4a017',
            boxShadow: '0 0 6px rgba(212,160,23,0.8)',
          }} />
        ))}
      </div>

      {/* Middle tier */}
      <div style={{
        background: 'linear-gradient(135deg, #7a2038, #6d1b2e, #8b2e45)',
        height: 60,
        marginLeft: 6,
        marginRight: 6,
        position: 'relative',
        boxShadow: '0 4px 16px rgba(109,27,46,0.2)',
        border: '2px solid rgba(212,160,23,0.3)',
      }}>

        {[25, 55, 80].map((left, i) => (
          <div key={i} style={{
            position: 'absolute', top: '30%', left: `${left}%`,
            color: '#c2185b', fontSize: 14, lineHeight: 1,
          }}></div>
        ))}
      </div>

      {/* Bottom tier */}
      <div style={{
      background: 'linear-gradient(135deg, #4a1020, #6d1b2e, #8b2e45)',
        height: 72,
        borderRadius: '4px 4px 16px 16px',
        position: 'relative',
        boxShadow: '0 8px 24px rgba(109,27,46,0.25), 0 0 30px rgba(245,200,66,0.15)',
        border: '2px solid rgba(212,160,23,0.35)',
      }}>
        {/* frosting top */}
  
        {/* gold stripe */}
        <div style={{
          position: 'absolute', top: '40%', left: 0, right: 0,
          height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.6), transparent)',
        }} />
        {/* rose decorations */}
        {[15, 50, 82].map((left, i) => (
          <div key={i} style={{
            position: 'absolute', top: '18%', left: `${left}%`,
            color: '#d4a017', fontSize: 18, lineHeight: 1,
          }}>♥</div>
        ))}
      </div>

      {/* Cake plate */}
      <div style={{
        height: 12,
        marginLeft: -8,
        marginRight: -8,
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(212,160,23,0.2))',
        borderRadius: '0 0 50% 50%',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }} />
    </motion.div>
  );
}
/* ─── Floating Particles ─── 
const PARTICLE_TYPES = ['💗', '💕', '✨', '🌸', '💫', '🌟', '💖'];


export function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    type: PARTICLE_TYPES[i % PARTICLE_TYPES.length],
    left: Math.random() * 100,
    delay: Math.random() * 12,
    duration: 10 + Math.random() * 10,
    size: 0.7 + Math.random() * 0.8,
  }));

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-particle"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}rem`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            zIndex: 5,
          }}
        >
          {p.type}
        </div>
      ))}
    </>
  );
}
*/

/* ─── Envelope / Letter ─── */
export function EnvelopeSection() {
  const [open, setOpen] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);

  const handleOpen = useCallback(() => {
    if (!open) {
      setOpen(true);
      setTimeout(() => setLetterVisible(true), 700);
    } else {
      setLetterVisible(false);
      setTimeout(() => setOpen(false), 400);
    }
  }, [open]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-romantic-section overflow-hidden">
      <div className="relative z-10 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-dancing text-2xl  mb-2" style={{ color: '#c2185b'}}>A message from the heart</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold" style={{ color: '#6d1b2e' }}>
            Your Birthday Letter
          </h2>
          <div className="section-divider" />
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 cursor-pointer"
        onClick={handleOpen}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Envelope body */}
        <div style={{
          width: 320,
          background: 'linear-gradient(135deg, #4a1020,  #6d1b2e, #8b2e45)',
          outline :'none',
          border:'none',
          borderRadius: 12,
          boxShadow: '0 16px 48px rgba(109,27,46,0.2), 0 0 30px rgba(245,200,66,0.15)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Envelope flap */}
          <motion.div
            animate={open ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            style={{
              height: 120,
              background: 'linear-gradient(135deg, #fce4ec, #f8bbd9, #fad0df)',
              borderRadius: '12px 12px 0 0',
              transformOrigin: 'top center',
              position: 'relative',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
             
            }}
          />

          {/* Envelope body content */}
          <div style={{ height: 120, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
              animate={{ scale: open ? 1.15 : 1 }}
              transition={{ duration: 0.4 }}
              style={{ fontSize: 48, lineHeight: 1 }}
            >
              
            </motion.div>
            <div style={{
              position: 'absolute', bottom: 12,
                color: '#d4a017', fontSize: 14,
              fontFamily: 'font-playfair',
            }}>
              {open ? 'Close letter' : 'Click to open'}
            </div>
          </div>

          {/* Bottom V fold lines */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
 border: '2px solid rgba(212,160,23,0.4)',
            opacity: 0.5,
          }} />
        </div>
      </motion.div>

      {/* Letter reveal */}
      <AnimatePresence>
        {letterVisible && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative z-20 mt-8 letter-lines"
            style={{
              width: 'min(520px, 90vw)',
              background: 'linear-gradient(160deg, #fffbf0, #fff8f0)',
              border: '1px solid rgba(212,160,23,0.35)',
              borderRadius: 16,
              padding: '2.5rem 2.5rem 2.5rem',
              boxShadow: '0 24px 64px rgba(109,27,46,0.2), 0 0 40px rgba(245,200,66,0.12)',
            }}
          >
       
            <p className="font-dancing text-3xl mb-4 text-gold-glow" style={{ color: '#d4a017', textShadow: '0 0 20px rgba(212,160,23,0.5)' }}>
              Dear [M]
            </p>
            <div className="font-cormorant space-y-4 text-xl leading-relaxed" style={{ color: '#4a1020' }}>
              <p>
               Happy Birthday to my favorite person, the man I love.
              </p>
              <p>
               My heart is happy simply because you are in my life. The sound of your laughter brightens my heart, so smile for me always, and remember that I am always here for you.
              </p>
              <p>
               I am truly grateful for your presence, and I wish you a beautiful life filled with happiness, success, and everything your heart desires.
              </p>
              <p>
            Happy Birthday, my love .♥
              </p>
            </div>
            <p className="font-dancing text-2xl mt-6 text-right" style={{ color: '#8b2e45' }}>
            With all my love, always 
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
/* ─── Gallery ───
const PHOTOS = [
  {
    url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'the best felling',
    rotate: -3,
  },
  {
    url: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Joy and laughter',
    rotate: 2,
  },
  {
    url: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'just love',
    rotate: -2,
  },
  {
    url: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'A picture full of emotion',
    rotate: 3,
  },
  {
    url: 'https://images.pexels.com/photos/1128316/pexels-photo-1128316.jpeg?auto=compress&cs=tinysrgb&w=600',
  caption: `hand and hand
      you & me
      forever`,
    rotate: -1,
  },
  {
    url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Our hearts are dancing with joy',
    rotate: 2,
  },
];

export function GallerySection() {
  return (
    <section
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #fce4ec 0%, #fad0df 50%, #f8bbd9 100%)' }}
    >


      <div className="relative z-10 text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
      

          <h2 className="font-playfair text-4xl md:text-5xl font-bold" style={{ color: '#6d1b2e' }}>
            Our Gallery of Moments
          </h2>
          <div className="section-divider" />
          <p className="font-cormorant text-2xl mt-4 italic" style={{ color: '#c2185b'}}>
            Every picture tells a story from our journey together.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={i}
            className="polaroid"
            style={{ transform: `rotate(${photo.rotate}deg)` }}
            initial={{ opacity: 0, y: 60, rotate: photo.rotate }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div style={{ width: 220, height: 180, overflow: 'hidden', position: 'relative' }}>
              <img
                src={photo.url}
                alt={photo.caption}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(245,200,66,0.1) 0%, transparent 60%)',
                pointerEvents: 'none',
              }} />
            </div>
            <p className=" font-cormorant text-center mt-2 text-lg" style={{  color: '#d4a017',
              textShadow: '0 0 30px rgba(212,160,23,0.6), 0 0 60px rgba(245,200,66,0.25)', }}>
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>

   
   
    </section>
  );
}
 */

/* ─── Footer ───  */
export function Footer() {
  return (
    <footer
      className="relative py-12 px-4 text-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #6d1b2e, #4a1020)' }}
    >
      <Sparkles count={8} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="font-dancing text-4xl mb-3" style={{ color: '#f5c842', textShadow: '0 0 20px rgba(245,200,66,0.6)' }}>
          Happy Birthday! ♥
        </p>
        <p className="font-cormorant text-xl italic" style={{ color: 'rgba(252,228,236,0.8)' }}>
         I hope your day is amazing 
        </p>
        <div className="section-divider mt-6" />
        <p className="font-lato text-sm mt-4" style={{ color: 'rgba(252,228,236,0.4)' }}>
          Made with love, just for you , lujain
          💗
        </p>
      </motion.div>
    </footer>
     
  );
}
 