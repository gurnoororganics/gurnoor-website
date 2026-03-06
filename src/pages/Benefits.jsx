import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Benefits.css';

const benefits = [
  {
    cls: 'card-1',
    icon: '🌿',
    num: 'Benefit 01',
    title: 'Zero Toxins.\nTotal Peace of Mind.',
    body: [
      'Conventional crops are routinely treated with harsh pesticides that accumulate in your body over time. Our farms use absolutely no synthetic chemicals — ever. What reaches your kitchen is exactly what the earth gave us: clean, safe food with nothing to hide.',
      'Your immunity strengthens. Your energy becomes steadier. And your family eats with complete confidence, every single day.',
    ],
    tags: ['No Pesticides', 'Stronger Immunity', 'Family Safe'],
  },
  {
    cls: 'card-2',
    icon: '✨',
    num: 'Benefit 02',
    title: 'Spices & Grains That Actually Nourish',
    body: [
      'When plants grow naturally without artificial fertilisers, they draw deeper from the soil — and that effort shows up in your food. Our spices carry a bolder aroma. Our grains have a richer taste. And beneath that flavour is measurably more nutrition.',
      'Higher antioxidants, real vitamins, natural minerals — every pinch and every bowl quietly fighting inflammation and building you up from the inside.',
    ],
    tags: ['Rich Antioxidants', 'Anti-Inflammatory', 'Bold Flavour'],
  },
  {
    cls: 'card-3',
    icon: '🍯',
    num: 'Benefit 03',
    title: 'Jaggery That Heals, Not Just Sweetens',
    body: [
      'Refined sugar is stripped of everything useful in its journey to whiteness. Our jaggery takes a different path — made right on our farm from our own sugarcane, using the same slow, traditional process that preserves every healing compound inside.',
      'It is rich in iron to guard against anaemia, supports smooth digestion, and naturally helps cleanse your liver and airways. Sweet comfort that also takes care of you.',
    ],
    tags: ['Iron-Rich', 'Aids Digestion', 'Liver Support'],
  },
  {
    cls: 'card-4',
    icon: '🌾',
    num: 'Benefit 04',
    title: 'Gentle on Your Gut. Light on Your Body.',
    body: [
      'We grow traditional, non-GMO crops — the same varieties human bodies have recognised and digested comfortably for thousands of years. No genetic modifications. No engineered shortcuts. Just food that fits.',
      'The result? Less bloating. A calmer stomach. No unexplained heaviness after meals. Just the clean, light feeling of food working with you — not against you.',
    ],
    tags: ['Non-GMO', 'Gut-Friendly', 'No Bloating'],
  },
];

const moments = [
  { time: 'Morning',     icon: '☀️', title: 'You Wake Up Lighter',         desc: 'No chemical residues working against your body overnight. Your system rests, repairs, and rises ready — not sluggish from what it had to filter out.' },
  { time: 'Breakfast',   icon: '🥣', title: 'Grains That Actually Fill You', desc: 'Naturally grown grains are denser in nutrients. You feel genuinely full and energised — not just momentarily stuffed — well into mid-morning.' },
  { time: 'Cooking',     icon: '🫙', title: 'Spices with Real Aroma',        desc: 'The moment you open our spice jars, the difference is unmistakable. That depth of fragrance means genuine essential oils — real flavour and real health value in your food.' },
  { time: 'After Meals', icon: '😌', title: 'No Heaviness. No Regret.',      desc: 'Non-GMO, chemical-free food is processed smoothly by your digestive system. You feel light, comfortable, and ready to carry on — not reaching for antacids.' },
  { time: 'Tea Time',    icon: '🍵', title: 'Jaggery in Every Sip',          desc: 'Swap refined sugar for our jaggery. Your chai stays just as sweet — but now it delivers iron, supports your digestion, and doesn\'t send your blood sugar crashing.' },
  { time: 'Over Months', icon: '📈', title: 'Long-Term Change You Notice',   desc: 'Higher antioxidant intake. Steadier energy. Better gut health. Fewer unexplained illnesses. The kind of quiet, cumulative wellness that tells you the food is working.' },
];

const compareRows = [
  { label: 'Pesticide / chemical residues',  us: 'Zero — guaranteed',              them: 'Commonly present' },
  { label: 'Nutrient density',               us: 'Naturally higher',               them: 'Reduced by synthetic inputs' },
  { label: 'Jaggery quality',                us: 'Pure, unprocessed, mineral-rich', them: 'Often chemically processed' },
  { label: 'GMO status',                     us: '100% Non-GMO',                   them: 'Frequently modified' },
  { label: 'Digestive comfort',              us: 'Light, no bloating',              them: 'Often causes discomfort' },
  { label: 'Flavour & aroma',                us: 'Bold, authentic, natural',        them: 'Muted, sometimes artificial' },
  { label: 'Long-term health impact',        us: 'Builds immunity & wellness',      them: 'Potential toxin accumulation' },
];

const stoneMillBenefits = [
  {
    icon: '🌾',
    title: 'Higher Nutrient & Fiber Content',
    subtitle: 'Main Reason',
    body: 'Low RPM stone grinding retains bran (chokar), natural oils (germ), and micronutrients. This makes the flour more absorbent and heavier.',
    tip: 'If you use the same water ratio as regular atta, the dough becomes slightly tight → chapati dries faster.',
  },
  {
    icon: '💧',
    title: 'Water Absorption Difference',
    body: 'Low RPM flour needs 5–10% more water and longer hydration time.',
    tip: 'If not adjusted, dough feels okay initially but loses moisture while cooking → dry chapati.',
  },
  {
    icon: '⏰',
    title: 'Dough Resting Time (Very Important)',
    body: 'With stone-milled flour, gluten develops slower due to bran interference.',
    tip: 'Rest the dough at least 15–20 mins. Otherwise chapati won\'t hold moisture and becomes dry + slightly hard.',
  },
  {
    icon: '🔥',
    title: 'Cooking Technique',
    body: 'Since low RPM flour has natural oils + fiber, it actually cooks faster.',
    tip: 'Common mistake: overcooking on tawa. Keep it shorter or moisture evaporates → dryness.',
  },
  {
    icon: '📦',
    title: 'Storage Matters',
    body: 'Stone-milled flour is more "alive" (contains oils). If stored improperly or used after long exposure, it can lose moisture balance.',
    tip: 'Store in airtight containers in a cool, dry place.',
  },
  {
    icon: '✨',
    title: 'No Additives / Improvers',
    body: 'Market atta often contains improvers and bleaching agents. Low RPM flour is natural, so no artificial softness boosters.',
    tip: 'Result depends fully on your technique.',
  },
];

// Reusable scroll-reveal hook inline
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function BenefitCard({ b, delay }) {
  const ref = useReveal();
  return (
    <article className={`b-card ${b.cls} fade-card`} ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="b-card-accent" />
      <div className="b-card-body">
        <div className="b-card-icon">{b.icon}</div>
        <div className="b-card-num">{b.num}</div>
        <h3 className="b-card-title">{b.title}</h3>
        {b.body.map((p, i) => <p className="b-card-text" key={i}>{p}</p>)}
        <div className="b-card-tags">
          {b.tags.map(t => <span className="b-tag" key={t}>{t}</span>)}
        </div>
      </div>
    </article>
  );
}

function MomentCard({ m, delay }) {
  const ref = useReveal();
  return (
    <div className="moment-card fade-card" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="moment-time">{m.time}</div>
      <div className="moment-icon">{m.icon}</div>
      <h3 className="moment-title">{m.title}</h3>
      <p className="moment-desc">{m.desc}</p>
    </div>
  );
}

function StoneMillCard({ b, delay }) {
  const ref = useReveal();
  return (
    <div className="stone-mill-card fade-card" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="stone-mill-icon">{b.icon}</div>
      <h3 className="stone-mill-title">{b.title}</h3>
      {b.subtitle && <span className="stone-mill-subtitle">{b.subtitle}</span>}
      <p className="stone-mill-body">{b.body}</p>
      <div className="stone-mill-tip">
        <strong>Tip:</strong> {b.tip}
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="ben-hero">
        <div className="ben-blob ben-blob-1" />
        <div className="ben-blob ben-blob-2" />
        <div className="ben-hero-inner">
          <span className="ben-eyebrow">Gurnoor Organics — Benefits</span>
          <h1 className="ben-title">Food That <em>Truly</em><br />Works for You</h1>
          <p className="ben-sub">
            Discover what happens when you swap chemical-laden groceries for food grown the way
            nature always intended — pure, potent, and full of life.
          </p>
          <div className="ben-scroll">
            <div className="ben-scroll-line" />
            Explore
          </div>
        </div>
      </section>

      <div className="ben-divider" />

      {/* ── BENEFIT CARDS ── */}
      <section className="ben-cards-section">
        <div className="ben-container">
          <p className="ben-section-label">Why It Matters</p>
          <h2 className="ben-section-title">Four Ways Gurnoor Organics<br />Changes Your Everyday Life</h2>
          <div className="benefits-grid">
            {benefits.map((b, i) => <BenefitCard key={b.num} b={b} delay={i * 0.12} />)}
          </div>
        </div>
      </section>

      {/* ── MOMENTS ── */}
      <section className="moments-section">
        <div className="ben-container">
          <p className="ben-section-label" style={{ color: 'var(--ben-sage)' }}>Real Life, Every Day</p>
          <h2 className="ben-section-title" style={{ color: 'var(--ben-white)' }}>Feel the Difference<br />Through Your Day</h2>
          <div className="moments-grid">
            {moments.map((m, i) => <MomentCard key={m.time} m={m} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="ben-promise">
        <blockquote>
          "We didn't start Gurnoor Organics to sell products.<br />
          We started it to give your family the food our own families deserve."
        </blockquote>
        <cite>— Yashwinder Dugg, Gurnoor Organics</cite>
      </section>

      {/* ── STONE MILL BENEFITS ── */}
      <section className="stone-mill-section">
        <div className="ben-container">
          <p className="ben-section-label">Stone Mill Flour</p>
          <h2 className="ben-section-title">Why Our Stone-Milled Flour<br />Makes Soft Chapatis</h2>
          <p className="stone-mill-intro">
            Our flour is ground using traditional low RPM stone mills that preserve nutrients.
            Follow these tips for perfectly soft, fluffy chapatis every time.
          </p>
          <div className="stone-mill-grid">
            {stoneMillBenefits.map((b, i) => <StoneMillCard key={b.title} b={b} delay={i * 0.08} />)}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="ben-compare">
        <div className="ben-container">
          <p className="ben-section-label">The Honest Comparison</p>
          <h2 className="ben-section-title">Gurnoor Organics vs<br />Conventional Groceries</h2>
          <table className="compare-table">
            <thead>
              <tr>
                <th>What to look for</th>
                <th>Gurnoor Organics ✦</th>
                <th>Conventional Store</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map(r => (
                <tr key={r.label}>
                  <td>{r.label}</td>
                  <td><span className="check">✔</span> {r.us}</td>
                  <td><span className="cross">✘</span> {r.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ben-cta">
        <div className="ben-container">
          <h2>Start Feeling the Difference Today</h2>
          <p>Your family deserves food with nothing to hide. Explore our range of pure spices, wholesome grains, and healing jaggery — all grown with love, on our own land.</p>
          <Link className="ben-btn" to="/contact">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
