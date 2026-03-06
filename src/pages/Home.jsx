import { Link } from 'react-router-dom';
import useFadeUp from '../hooks/useFadeUp';
import './Home.css';

const products = [
  { id: 1, category: 'Grains & Pulses', name: 'Lentils',         desc: 'Sun-dried, vacuum sealed, and free from any chemical treatment. Rich in protein and clean flavour.',         img: 'products/New folder/rajma.jpg' },
  { id: 2, category: 'Grains & Pulses', name: 'Whole Wheat',     desc: 'Stone-ground quality wheat with nothing removed and nothing added. The whole grain, as nature intended.',   img: 'products/New folder/wheat flour.jpg' },
  { id: 3, category: 'Grains & Pulses', name: 'Black Chickpeas', desc: 'Earthy, dense, and packed with iron. Grown slowly without forcing agents or synthetic fertilisers.',       img: 'products/New folder/kabuli channa.jpg' },
  { id: 4, category: 'Spices',          name: 'Whole Spices',    desc: 'Turmeric, coriander, cumin and more — hand-harvested and dried naturally for full aroma retention.',       img: 'products/New folder/termeric pack.jpg' },
  { id: 5, category: 'Sweetener',       name: 'Pure Jaggery',    desc: 'Traditional cane jaggery prepared without sulphur or chemical clarifiers. Sweet, pure, and traceable.',     img: 'products/New folder/jaggery.jpg' },
];

function ProductCard({ product, delay }) {
  const ref = useFadeUp();
  return (
    <div className="product-card fade-up" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="product-card-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-card-body">
        <div className="product-card-category">{product.category}</div>
        <div className="product-card-name">{product.name}</div>
        <p className="product-card-desc">{product.desc}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const heroRef    = useFadeUp();
  const productsRef = useFadeUp();

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content fade-up" ref={heroRef}>
          <p className="hero-eyebrow">Jalandhar, Punjab · Est. by Family Farmers</p>
          <h1 className="hero-headline">
            Nurturing Your Health,<br />
            <em>Directly From<br />Trusted Farmers</em>
          </h1>
          <p className="hero-sub">
            Grains, spices, and jaggery grown pesticide-free — rooted in tradition,
            sealed for freshness and delivered straight to your door.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#products">Explore Products</a>
            <Link className="btn-ghost" to="/story">Our Story</Link>
          </div>
        </div>
        <div className="hero-image-panel">
          
          <img src="/assets/hero-farmer.jpg" alt="Farmer in our fields" />
        </div>
      </section>

      {/* ── PROMISE STRIP ── */}
      <div className="promise-strip">
        {[
          { icon: '🌾', text: 'Grown, Not Sourced' },
          { icon: '🚫', text: 'Zero Pesticides' },
          { icon: '🔒', text: 'Vacuum Sealed Freshness' },
          { icon: '🚚', text: 'Direct to Your Home' },
        ].map(item => (
          <div className="promise-item" key={item.text}>
            <span>{item.icon}</span> {item.text}
          </div>
        ))}
      </div>

      {/* ── PRODUCTS ── */}
      <section className="products-section" id="products">
        <div className="products-intro fade-up" ref={productsRef}>
          <div>
            <p className="section-label">What We Grow</p>
            <h2 className="section-heading">Pure. Pesticide-Free.<br />Grown on Our Land.</h2>
          </div>
          <p className="section-sub products-intro-right">
            Every item was sown, grown, and packed by us. Nothing is sourced from outside.
          </p>
        </div>
        <div className="products-grid">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={i * 0.08} />
          ))}
          <div className="product-card product-card--muted">
            <div className="product-card-image" style={{ background: 'var(--linen)' }}>
              <span className="product-icon" style={{ fontSize: '1.4rem', color: 'var(--muted)' }}>+ More Soon</span>
            </div>
            <div className="product-card-body">
              <div className="product-card-category">Coming Soon</div>
              <div className="product-card-name">More Products</div>
              <p className="product-card-desc">We're continuously expanding. Check back for more pesticide-free produce from our fields.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <div className="cta-band">
        <h2>Want to Know Where Your Food Comes From?</h2>
        <p>Read the full journey — from the seeds we choose to the door we deliver to.</p>
        <Link className="btn-primary cta-band-btn" to="/story">Read Our Story</Link>
      </div>
    </>
  );
}