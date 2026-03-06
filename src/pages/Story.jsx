import useFadeUp from '../hooks/useFadeUp';
import './Story.css';

const timeline = [
  { gen: 'The Beginning', title: 'A Decision Rooted in Values', desc: 'Yashwinder Dugg made a choice that went against the grain — literally. When chemical farming was becoming the norm across Punjab, he chose to go back to how food was always meant to be grown. No pesticides. No shortcuts. Just honest farming.' },
  { gen: 'Growing the Range', title: 'From Wheat to a Full Harvest', desc: 'What started with wheat gradually grew — lentils, chickpeas, spices, jaggery. Each crop added only when we were confident we could grow it right. The neighbours questioned the slower yields. The families who tasted the difference understood immediately.' },
  { gen: 'Gurnoor Organics', title: 'Taking It Directly to Families', desc: 'The next step was obvious — why let middlemen stand between honest food and the families who needed it? No wholesalers. No retail shelves. Vacuum sealed at source and delivered by us. Gurnoor Organics was the name we gave to that promise.' },
  { gen: 'Today',        title: 'Growing the Community',    desc: 'Families across India now receive their grains, spices, and jaggery directly from our fields. Every order is still packed by hand, every delivery still made by someone who knows the story behind what\'s inside.' },
];

const awareness = [
  { icon: '🧫', title: 'What Pesticides Leave Behind',    text: 'Most commercially grown staples carry pesticide residue that standard washing cannot remove. These accumulate in the body over time. We remove that risk entirely — at source.' },
  { icon: '🔗', title: 'The Long Supply Chain Problem',   text: 'Your average grocery store grain passes through 6–8 hands. Each stage adds storage time, handling chemicals, and uncertainty. Our chain is two: us to you.' },
  { icon: '🌍', title: 'Farming That Feeds the Soil',     text: 'Chemical farming strips soil of life over time. Our methods — crop rotation, natural composting, no-burn harvesting — put back more than they take.' },
];

const stats = [
  { number: '1st',    label: 'Generation — we started this, guided by our roots' },
  { number: '0',      label: 'Synthetic pesticides or chemicals used' },
  { number: '100%',   label: 'Traceable — we grew every grain ourselves' },
  { number: 'Direct', label: 'Farm to doorstep, no middlemen involved' },
];

export default function Story() {
  const heroRef    = useFadeUp();
  const introRef   = useFadeUp();
  const timeRef    = useFadeUp();
  const fieldsRef  = useFadeUp();
  const awarRef    = useFadeUp();

  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="fade-up" ref={heroRef}>
          <p className="page-hero-tag">Our Story</p>
          <h1 className="page-hero-h1">First Generation.<br /><em>Rooted in Tradition.</em></h1>
        </div>
      </div>

      {/* STORY INTRO */}
      <section className="story-intro">
        <div className="story-image fade-up" ref={introRef}>
          
          <img src="/assets/story-field.jpg" alt="Our fields" />
        </div>
        <div>
          <p className="section-label">Who We Are</p>
          <h2 className="section-heading">First Generation.<br />Ancient Roots.</h2>
          <blockquote className="story-pull-quote">
            "We don't just sell food. We share the harvest we would put on our own table."
          </blockquote>
          <div className="story-body">
            <p>Gurnoor Organics was born from a simple belief — that what you feed your family matters deeply, and that the people growing your food should be accountable to you directly. We are the first in our family to farm this way, but we farm the way our roots always pointed us toward.</p>
            <p>We are the first to do this — but everything we do is rooted in how food was always meant to be grown. No chemicals, no shortcuts. Just the values our roots gave us, applied to every seed we sow and every harvest we pack.</p>
            <p>We grow wheat, lentils, chickpeas, aromatic spices, and pure jaggery without synthetic pesticides or chemical shortcuts. When you choose Gurnoor, you know exactly where your food comes from — because we grew it.</p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <p className="section-label fade-up" ref={timeRef}>Our Journey</p>
        <h2 className="section-heading">How We Got Here</h2>
        <div className="timeline">
          {timeline.map((item, i) => {
            const r = useFadeUp(); // eslint-disable-line react-hooks/rules-of-hooks
            return (
              <div className="timeline-item fade-up" ref={r} key={item.gen} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="timeline-year">{item.gen}</div>
                <div className="timeline-title">{item.title}</div>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FIELDS */}
      <section className="fields-section">
        <div className="fade-up" ref={fieldsRef}>
          <p className="section-label">Our Fields</p>
          <h2 className="section-heading">The Land Behind<br />Every Packet</h2>
          <p className="section-sub">
            This is not a warehouse. It is land we walk on every morning. Land we have composted,
            rested, and cultivated without shortcuts for decades. When you hold a packet of Gurnoor
            grain, you're holding something grown here.
          </p>
          <div className="awareness-stat">
            {stats.map(s => (
              <div className="stat-box" key={s.number}>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="fields-image">
          
          <img src="/assets/fields.jpg" alt="Our fields in Punjab" />
        </div>
      </section>

      {/* AWARENESS CALLOUT */}
      <section className="awareness-section">
        <p className="section-label" style={{ color: 'var(--wheat)' }}>Why It Matters</p>
        <h2 className="section-heading" style={{ color: 'var(--cream)' }}>
          The Food You Don't<br />Think About, Should Be
        </h2>
        <div className="awareness-grid fade-up" ref={awarRef}>
          {awareness.map((a, i) => (
            <div className="callout-card" key={a.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="callout-icon">{a.icon}</div>
              <div className="callout-title">{a.title}</div>
              <p className="callout-text">{a.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}