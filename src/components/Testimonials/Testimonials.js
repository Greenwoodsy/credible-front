import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Testimonials.css";
import nft1 from "../../Assets/nft1.jpeg";
import nft2 from "../../Assets/nft2.jpeg";
import nft3 from "../../Assets/nft3.png";
import nft4 from "../../Assets/nft4.jpeg";
import nft5 from "../../Assets/nft5.jpeg";
import nft6 from "../../Assets/nft6.jpeg";
import nft7 from "../../Assets/nft6.png";
import nft8 from "../../Assets/nft7.jpeg";
import nft9 from "../../Assets/nft8.jpeg";
import nft01 from "../../Assets/nft9.jpeg";
import rnft01 from "../../Assets/rnft1.jpg";
import rnft02 from "../../Assets/gnft2.avif";

const testimonials = [
  {
    text: "I've been investing here for over a year now. I started small, but thanks to the consistent returns, I've expanded across multiple plans — even opened accounts for my 3 daughters.",
    name: "Fanzo 🌊",
    handle: "@iSocialFanz",
    date: "11.11.22",
    avatar: nft1,
    image: rnft01,
  },
  {
    text: "If I could give this platform a name, I'd call it 'Guardian' — it's the safest and smartest way I've found to grow my crypto portfolio.",
    name: "Petrica Butusina",
    handle: "@PetricaButusina",
    avatar: nft2,
    image: rnft02,
  },
  {
    text: "This platform feels like a financial steward — watching over my investments while I sleep. The returns are reliable and the interface is clean.",
    name: "Lkmland Crypto",
    handle: "@LkmlandCrypto",
    avatar: nft3,
    image: nft2,
  },
  {
    text: "Investing here has given me peace of mind. My funds are growing steadily, and I can focus on building my business without worrying.",
    name: "Jane Doe",
    handle: "@janedoe",
    avatar: nft4,
    image: nft2,
  },
  {
    text: "Tried a few platforms before, but this one stands out. It's secure, responsive, and actually delivers on its promises. Highly recommended.",
    name: "John Smith",
    handle: "@johnsmith",
    avatar: nft5,
    image: nft2,
  },
  {
    text: "Within just 3 months, I saw real results. The plan matched my goals perfectly, and support was there when I had questions.",
    name: "Zoe Harper",
    handle: "@zoeharper_invests",
    avatar: nft6,
    image: nft2,
  },
  {
    text: "The first investment I made here paid out exactly as promised. It built my trust, and I’ve reinvested every month since.",
    name: "Daniel Kwame",
    handle: "@danielk_crypto",
    avatar: nft7,
    image: nft2,
  },
  {
    text: "I used to be skeptical of online investment platforms, but this one changed my perspective. Transparent, secure, and rewarding.",
    name: "Sarah Miles",
    handle: "@milesandcoins",
    avatar: nft8,
    image: nft2,
  },
  {
    text: "This is now my go-to platform for diversifying my income. It’s easy to track earnings, and withdrawals are fast and smooth.",
    name: "Leo Carson",
    handle: "@leo_invests",
    avatar: nft9,
    image: nft2,
  },
  {
    text: "What I love most is the consistency. No surprises, just steady growth. I’ve already recommended it to my close friends.",
    name: "Emily Blake",
    handle: "@emblake_finance",
    avatar: nft01,
    image: nft2,
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.firstChild.offsetWidth + 24; // Card width + gap
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-header">
        <h2>Testimonials</h2>
        <div className="testimonials-buttons">
          <button onClick={() => scroll("left")}>
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll("right")}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="testimonials-cards-container" ref={scrollRef}>
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            {/* Optional Image Block */}
            {t.image && (
              <div className="testimonial-media">
                <img src={t.image} alt={`testimonial-img-${idx}`} />
              </div>
            )}

            <p className="testimonial-text">“{t.text}”</p>

            <div className="testimonial-user">
              <img src={t.avatar} alt={t.name} />
              <div className="testimonial-user-details">
                <div className="testimonial-user-name">{t.name}</div>
                <div className="testimonial-user-handle">{t.handle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
