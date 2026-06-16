import Image from "next/image";
import { info } from "@/data/portfolio";

export default function InfoPage() {
  return (
    <div className="info-page">
      <div className="info-page__portrait-wrap">
        <Image
          src={info.portrait}
          alt="Portrait"
          width={600}
          height={800}
          className="info-page__portrait"
          unoptimized
        />
      </div>
      {info.photoCredit && (
        <p className="info-page__credit">{info.photoCredit}</p>
      )}
      <section className="info-page__section">
        <h2 className="info-page__heading">Introduction</h2>
        {Array.isArray(info.intro)
          ? info.intro.map((paragraph, i) => (
              <p key={i} className="info-page__intro">
                {paragraph}
              </p>
            ))
          : (
              <p className="info-page__intro">{info.intro}</p>
            )}
      </section>
      <div className="info-page__contact">
        <p>{info.location}</p>
        <p>
          <a href={`mailto:${info.email}`}>{info.email}</a>
        </p>
      </div>
    </div>
  );
}
