"use client";

import Link from "next/link";
import Image from "next/image";
import "./footer.css";

// Demo recent posts data. Replace with real data as needed.
const recentPosts = [
  {
    id: "p1",
    title: "9 Half-up/half-down Hairstyles for Long and Medium Hair",
    category: "Fashion",
    date: "3/10/2024",
    img: "/assets/img/post-sq-1.jpg",
  },
  {
    id: "p2",
    title: "Life Insurance And Pregnancy: A Working Mom's Guide",
    category: "Household",
    date: "3/10/2024",
    img: "/assets/img/post-sq-2.jpg",
  },
  {
    id: "p3",
    title:
      "What is the son of Football Coach John Gruden, Deuce Gruden doing Now?",
    category: "Fashion",
    date: "3/10/2024",
    img: "/assets/img/post-sq-3.jpg",
  },
  {
    id: "p4",
    title: "Life Insurance And Pregnancy: A Working Mom's Guide",
    category: "Fashion",
    date: "3/10/2024",
    img: "/assets/img/post-sq-4.jpg",
  },
];

export default function Footer() {

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          {/* About */}
          <div className="footer__col">
            <h3 className="footer__title">Digital News</h3>
            <p className="footer__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab,
              perspiciatis beatae autem deleniti voluptate nulla a dolores,
              exercitationem eveniet libero laudantium recusandae officiis qui
              aliquid blanditiis omnis eaque. Explicabo?
            </p>
            <Link className="footer__learn" href="#">Learn More</Link>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <h4 className="footer__subtitle">Navigation</h4>
            <ul className="footer__links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/postitems">News</Link></li>
              <li><Link href="/createpostitems">Post</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer__col">
            <h4 className="footer__subtitle">Categories</h4>
            <ul className="footer__links">
              <li><Link href="#">Business</Link></li>
              <li><Link href="#">Culture</Link></li>
              <li><Link href="#">Sport</Link></li>
              <li><Link href="#">Food</Link></li>
              <li><Link href="#">Politics</Link></li>
              <li><Link href="#">Celebrity</Link></li>
              <li><Link href="#">Startups</Link></li>
              <li><Link href="#">Travel</Link></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="footer__col">
            <h4 className="footer__subtitle">Recent Posts</h4>
            <ul className="footer__recent">
              {recentPosts.map((p) => (
                <li key={p.id} className="footer__recent-item">
                  <div className="footer__recent-thumb">
                    <Image src={p.img} alt={p.title} width={56} height={56} />
                  </div>
                  <div className="footer__recent-meta">
                    <div className="footer__recent-top">
                      <span className="footer__recent-cat">{p.category}</span>
                      <span className="footer__recent-dot">•</span>
                      <span className="footer__recent-date">{p.date}</span>
                    </div>
                    <Link href="#" className="footer__recent-title">
                      {p.title}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p className="footer__copyright">
            © Copyright DigitalNews. All Rights Reserved
          </p>
          <p className="footer__credit">Designed by Dicode Technology</p>
          <ul className="footer__social">
            <li><a aria-label="Close" href="#">✕</a></li>
            <li><a aria-label="Twitter" href="#">𝕏</a></li>
            <li><a aria-label="Facebook" href="#">f</a></li>
            <li><a aria-label="Skype" href="#">S</a></li>
            <li><a aria-label="Dribbble" href="#">⦿</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
