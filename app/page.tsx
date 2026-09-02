import Image from "next/image";

const BUY_HREF = "#";
const CHART_HREF = "#";

const MARQUEE = [
  "$GMEINU",
  "OWN THE INU",
  "EARN $GME",
  "PAIRED WITH $GME",
  "100% FEES TO HOLDERS",
  "BACKED BY GAMESTOP",
];

export default function Home() {
  return (
    <>
      <a className="skip" href="#hero">
        Skip to content
      </a>

      <header className="nav">
        <a className="brand" href="#hero">
          <Image
            src="/art/mascot.jpg"
            alt=""
            width={44}
            height={44}
            className="brand-mark"
            priority
          />
          <span className="brand-name">
            GameStop <em>Inu</em>
          </span>
        </a>
        <span className="nav-ticker">$GMEINU</span>
        <nav className="nav-ctas" aria-label="Primary">
          <a className="btn btn-solid" href={BUY_HREF}>
            Buy
          </a>
          <a className="btn btn-ghost" href={CHART_HREF}>
            Chart
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">GameStop Inu, backed by GameStop</p>
            <h1>$GMEINU</h1>
            <p className="punch">Own the Inu. Earn $GME.</p>
            <p className="lede">
              $GMEINU is paired with $GME. 100% of fees go to holders as $GME
              rewards.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid btn-lg" href={BUY_HREF}>
                Buy $GMEINU
              </a>
              <a className="btn btn-ghost btn-lg" href={CHART_HREF}>
                Chart
              </a>
            </div>
          </div>

          <figure className="hero-shot">
            <Image
              src="/art/mascot.jpg"
              alt="GameStop Inu mascot in store, thumbs up, holding cash"
              width={1024}
              height={1024}
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </figure>
        </section>

        <figure className="banner">
          <Image
            src="/art/banner.png"
            alt="GameStop Inu"
            width={1024}
            height={341}
            priority
            sizes="100vw"
          />
        </figure>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div className="marquee-copy" key={copy}>
                {MARQUEE.map((item) => (
                  <span key={`${copy}-${item}`}>
                    {item}
                    <i />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="section how" id="how">
          <p className="eyebrow">How it works</p>
          <h2>Three things. That’s the coin.</h2>
          <ol className="facts">
            <li>
              <span>01</span>
              <h3>Paired with $GME</h3>
              <p>$GMEINU is paired with $GME. That’s the pool.</p>
            </li>
            <li>
              <span>02</span>
              <h3>100% of fees</h3>
              <p>Every trade pays holders. 100% of fees go to the pack.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Earn $GME</h3>
              <p>Rewards land as $GME. Own the Inu. Get paid in GameStop.</p>
            </li>
          </ol>
        </section>

        <section className="stats" id="stats" aria-label="Token stats">
          <dl>
            <div>
              <dt>Ticker</dt>
              <dd>$GMEINU</dd>
            </div>
            <div>
              <dt>Pair</dt>
              <dd>$GME</dd>
            </div>
            <div>
              <dt>Fees</dt>
              <dd>100%</dd>
            </div>
            <div>
              <dt>Rewards</dt>
              <dd>$GME to holders</dd>
            </div>
          </dl>
        </section>

        <section className="close">
          <div className="close-band">
            <Image
              src="/art/mascot.jpg"
              alt=""
              width={120}
              height={120}
              className="close-mark"
            />
            <h2>Own the Inu. Earn $GME.</h2>
            <p>GameStop Inu, backed by GameStop.</p>
            <div className="hero-actions">
              <a className="btn btn-white btn-lg" href={BUY_HREF}>
                Buy $GMEINU
              </a>
              <a className="btn btn-ghost-on-red btn-lg" href={CHART_HREF}>
                Chart
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <p>$GMEINU</p>
      </footer>
    </>
  );
}
