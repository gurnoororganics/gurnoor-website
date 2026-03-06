import useFadeUp from '../hooks/useFadeUp';
import './About.css';

const steps = [
  { n: '01', title: 'Sustainable Farming',       desc: 'Hand-sown seeds in soil kept alive through natural composting and crop rotation. No shortcuts, no chemicals.',                                             img: 'assets/step-farming.jpg' },
  { n: '02', title: 'Chemical-Free Processing',  desc: 'Cleaned on conveyor belts under hygienic conditions. No bleaching agents, no artificial brighteners, no additives.',                                     img: 'assets/step-processing.jpg' },
  { n: '03', title: 'Precision Vacuum Sealing',  desc: 'Digitally-gauged vacuum sealing locks in aroma, taste, and nutrition from the moment of packing.',                                                       img: 'assets/step-sealing.jpg' },
  { n: '04', title: 'Direct Distribution',       desc: 'Delivered by our own team — no middlemen, no cold storage delays. Farm-fresh at your doorstep.',                                                         img: 'assets/step-delivery.jpg' },
];

const promises = [
  { icon: '🌱', title: 'Grown, Not Sourced',            text: 'We own and farm every acre our produce comes from. There are no third-party suppliers, no middlemen, and no uncertainty about origin.' },
  { icon: '🧪', title: '100% Chemical-Free',             text: 'Not a single synthetic pesticide, fertiliser, or post-harvest chemical touches our crop — from field to packet.' },
  { icon: '🔒', title: 'Sealed for Maximum Freshness',   text: 'Precision vacuum packing means you receive the same aroma and nutrition as the day of harvest, not the day it sat in a warehouse.' },
  { icon: '🚚', title: 'Direct to Your Home',            text: 'We deliver ourselves. No retail markups, no cold storage loops. You get more for less — and we stay accountable to you.' },
];

const values = [
  { n: '01', title: 'Accountability',        desc: 'We put our name on every packet and we answer for every grain inside it. If it\'s from Gurnoor, we grew it.' },
  { n: '02', title: 'Transparency',          desc: 'We share our process, our land, and our methods openly. There is nothing about how we grow that we would hide.' },
  { n: '03', title: 'Respect for the Soil', desc: 'We are the first to farm this way, and we do it so the land stays healthy for whoever comes after us — not depleted by shortcuts.' },
  { n: '04', title: 'Honest Pricing',        desc: 'Cutting out the middlemen means you pay fair prices. We are not cheap — but you pay for the food, not the chain around it.' },
  { n: '05', title: 'Community First',       desc: 'Every order sustains a farming family. When you buy from us, you invest directly in the people who feed you.' },
];

export default function About() {
  const heroRef    = useFadeUp();
  const stepsRef   = useFadeUp();
  const promiseRef = useFadeUp();
  const valuesRef  = useFadeUp();

  return (
    <>
      {/* PAGE HERO */}
      <div className="about-hero">
        <div className="fade-up" ref={heroRef}>
          <p className="about-hero-tag">About Gurnoor Organics</p>
          <h1 className="about-hero-h1">How We Work.<br /><em>Why It Matters.</em></h1>
          <p className="about-hero-sub">
            From the first seed in the ground to the packet at your door — here is every step,
            every commitment, and every value that makes Gurnoor what it is.
          </p>
        </div>
      </div>

      {/* PROCESS */}
      <section className="process-section">
        <p className="section-label fade-up" ref={stepsRef}>Our Process</p>
        <h2 className="section-heading">The Complete Journey,<br />Every Step Is Pure</h2>
        <p className="section-sub">Nothing is hidden and nothing is rushed. Follow the path your food travels before it reaches you.</p>
        <div className="process-steps">
          {steps.map((s, i) => {
            const r = useFadeUp(); // eslint-disable-line react-hooks/rules-of-hooks
            return (
              <div className="process-step fade-up" ref={r} key={s.n} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="step-badge">{s.n}</div>
                <div className="step-image">
                  <img src={`/assets/${s.img.replace('assets/', '')}`} alt={s.title} />
                </div>
                <div className="step-title">{s.title}</div>
                <p className="step-desc">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="section-divider" />

      {/* PROMISE */}
      <section className="promise-section">
        <p className="section-label fade-up" ref={promiseRef}>The Gurnoor Promise</p>
        <h2 className="section-heading">Why Families Trust Us</h2>
        <p className="section-sub">Four commitments we make to every family that orders from us — and have never broken.</p>
        <div className="promise-grid">
          {promises.map((p, i) => {
            const r = useFadeUp(); // eslint-disable-line react-hooks/rules-of-hooks
            return (
              <div className="promise-card fade-up" ref={r} key={p.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="promise-icon">{p.icon}</div>
                <div>
                  <div className="promise-title">{p.title}</div>
                  <p className="promise-text">{p.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <p className="section-label fade-up" ref={valuesRef}>What We Stand For</p>
        <h2 className="section-heading">Our Core Values</h2>
        <div className="values-list">
          {values.map(v => (
            <div className="value-row" key={v.n}>
              <div className="value-number">{v.n}</div>
              <div className="value-title">{v.title}</div>
              <div className="value-desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}