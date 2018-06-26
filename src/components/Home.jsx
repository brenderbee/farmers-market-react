import React from 'react';

function Home(){

  return(
    <div className="home">
      <h2 className="header">Welcome</h2>
      <div className="home-content">
        <p>Surrender consciousness downward dog cleansing, maypole macrobiotic. Sound healing trauma-based bioneers kale chips, sun salutation all-encompassing positive affirmation. Perineum divine peace astrological, tantra synchronicity dead sea minerals monogamish vitamin-rich. Personal development coconut water nonlinear aura, ecstatic dance fire tending tapping pitta imbalance. Mind-body meditation the dali lama alkaline, the wisdom of your body indigo child hemp seed. Astral plane himalayan sea salt harmful electromagnetic fields prius tripping on non-duality spinal awareness, tie-dye yoga master.</p>
      </div>
      <style>{`
        .home {
          width: 90%;
          margin: 0 auto;
        }

        .home h2 {
          text-align: center;
        }

        .home-content {
          width: 60%;
          margin: 0 auto;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;
