import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ImageCarousel from "./ImageCarousel1.jsx";
import ProductCards from "./ProductCards.jsx";
import photo1 from '/src/assets/photo1.jpg';
import photo2 from '/src/assets/photo6.jpg'
import photo3 from '/src/assets/photo4.jpg'
import photo4 from '/src/assets/photo5.jpg'
import photo5 from '/src/assets/photo7.jpg'
import photo6 from '/src/assets/photo2.jpg'
import productPhoto1 from '/src/assets/product1.jpg'
import productPhoto2 from '/src/assets/product2.jpg'
import productPhoto3 from '/src/assets/product3.jpg'
import productPhoto4 from '/src/assets/product4.jpg'
import productPhoto5 from '/src/assets/product5.jpg'
import productPhoto6 from '/src/assets/product6.jpg'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const pageTitle = document.querySelector(".title");
    pageTitle.addEventListener("click", () => {
      window.location.reload();
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.getElementById(targetId);

    if (targetElement.id === "kreu") {
      window.scrollTo({
        top: 3,
        behavior: "smooth",
      });
    } else if (targetElement.id === "rreth-nesh") {
      window.scrollTo({
        top: 855,
        behavior: "smooth",
      });
    } else if (targetElement.id === "produktet-tona") {
      window.scrollTo({
        top: 1455,
        behavior: "smooth",
      });
    } else if (targetElement.id === "na-kontakto") {
      window.scrollTo({
        top: 2555,
        behavior: "smooth",
      });
    }
  };

  const images = [
    photo1,
    photo6,
    photo3,
    photo4,
    photo2,
    photo5,
  ];

  const productImage = [
    productPhoto1,
    productPhoto2,
    productPhoto3,
    productPhoto4,
    productPhoto5,
    productPhoto6,
  ];

  return (
    <>
      <header>
        <nav className="navbar">
          <h2 className="title">Diana Style</h2>
          <button className="hamburger-btn" onClick={toggleMenu}>
            ☰
          </button>
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a onClick={handleClick} href="rreth-nesh">
                Rreth Nesh
              </a>
            </li>
            <li>
              <a onClick={handleClick} href="produktet-tona">
                Produktet Tona
              </a>
            </li>
            <li>
              <a onClick={handleClick} href="na-kontakto">
                Na Kontakto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="kreu-div-section">
        <section id="kreu" className="kreu-section-container">
          <div className="kreu-container">
            <div className="kreu-section-content">
              <h2 className="kreu-section-title">Diana Style | Atelie</h2>
              <div className="kreu-section-text">
                <p>
                  Mirësevini në atelien tonë të Fustaneve, një qendër kreative
                  ku çdo veshje është një shprehje unike e stilit dhe shijeve
                  tuaja personale. Ne specializohemi në krijimin e fustaneve të
                  personalizuara, duke ofruar mundësi për porosi, qira dhe
                  blerje. Me një pasion të thellë për dizajnin dhe një angazhim
                  të palëkundur ndaj cilësisë, ne punojmë me kujdes të veçantë
                  për të siguruar që secili veshje të përmbushë standardet më të
                  larta të bukurisë dhe elegancës. Në atelien tonë, ne ofrojmë
                  një gamë të gjerë të stilimeve për të përmbushur nevojat e çdo
                  klienti, duke përfshirë propozime të veçanta për femijë dhe të
                  rritur. Çdo fustan që krijohet këtu është një pjesë unike e
                  artit të veshjes, e krijuar me përkushtim dhe detaje që i
                  japin personalitet dhe shkëlqim të veçantë.
                </p>
              </div>
              <div className="section-image">
                <ImageCarousel />
              </div>
            </div>
          </div>
        </section>
      </div>

      <br />
      <div className="rreth-nesh-div-section">
        <section id="rreth-nesh">
          <div className="rrethnesh-container">
            <div className="rrethnesh-section-content">
              <h2>Rreth Nesh</h2>
              <p>
                Me një përvojë të gjatë në fushën e modës që fillon që në vitin
                1995, ne, në Diana Style, kemi kultivuar pasionin tonë për
                dizajnin dhe shkëlqimin në çdo detaj të veshjes. Me një vizion
                të qartë për të ofruar fustane unike dhe të personalizuara,
                biznesi ynë u hap zyrtarisht në vitin 2010, duke filluar një
                udhëtim të vështirë dhe mbushur me sfida, por gjithashtu me
                sukses të madh.
              </p>
              <p>
                Ne kemi angazhuar ekspertizën tonë në çdo hap të rrugës, duke
                krijuar një ambient të veçantë në të cilin klientët tanë mund të
                ndihen të mrekulluar. Me një kombinim të përvojës së hershme dhe
                vizionit të rinovuar, ne vazhdojmë të ofrojmë fustane të
                personalizuara, përmbushur me dashuri dhe kujdes për detajet,
                për të siguruar një përvojë të jashtëzakonshme të veshjes për
                klientët tanë.
              </p>
              <p>
                Këtu në Diana Style, ne jemi të përkushtuar për të përfaqësuar
                bukurinë dhe elegancën në çdo kënd të kriacioneve tona, duke u
                dhënë një shkëlqim të veçantë çdo fustani. Nëpërmjet vizionit
                tonë dhe pasionit për të krijuar veshje të mrekullueshme, ne
                synojmë të bëhemi një destinacion i preferuar për të gjithë ata
                që kërkojnë stilin dhe shkëlqimin në çdo veshje.
              </p>
            </div>
          </div>
        </section>
      </div>
      <br />
      <div className="produktet-tona-div-section">
        <section id="produktet-tona">
          <div className="produktet-tona-container">
            <div className="produktet-tona-contents">
              <h2>Produket Tona</h2>
              <p>
                Diana Style, ofron një gamë të gjerë të produkteve të
                personalizuara për të plotësuar nevojat e çdo klienti. Nga
                fustanet e bukur për femijë dhe të rritur, deri te aksesorët
                unikë. Disa nga produktet tona ndodhen më poshtë, por nuk jeni
                të kufizuar me kaq!
              </p>
              <div className="grid-images">
                <ProductCards
                  porositTani={
                    <a href="https://www.instagram.com/direct/t/115349376528036">
                      Porosit tani
                    </a>
                  }
                  imageSrc={images[1]}
                />
                <ProductCards
                  porositTani={
                    <a href="https://www.instagram.com/direct/t/115349376528036">
                      Porosit tani
                    </a>
                  }
                  imageSrc={images[2]}
                />
                <ProductCards
                  porositTani={
                    <a href="https://www.instagram.com/direct/t/115349376528036">
                      Porosit tani
                    </a>
                  }
                  imageSrc={productImage[0]}
                />
                <ProductCards
                  porositTani={
                    <a href="https://www.instagram.com/direct/t/115349376528036">
                      Porosit tani
                    </a>
                  }
                  imageSrc={productImage[1]}
                />
                <ProductCards
                  porositTani={
                    <a href="https://www.instagram.com/direct/t/115349376528036">
                      Porosit tani
                    </a>
                  }
                  imageSrc={productImage[2]}
                />
                <ProductCards
                  porositTani={
                    <a href="https://www.instagram.com/direct/t/115349376528036">
                      Porosit tani
                    </a>
                  }
                  imageSrc={productImage[3]}
                />
                <ProductCards
                  porositTani={
                    <a href="https://www.instagram.com/direct/t/115349376528036">
                      Porosit tani
                    </a>
                  }
                  imageSrc={productImage[4]}
                />
                <ProductCards
                  porositTani={
                    <a href="https://www.instagram.com/direct/t/115349376528036">
                      Porosit tani
                    </a>
                  }
                  imageSrc={productImage[5]}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <br />
      <div className="na-kontakto-div-section">
        <section id="na-kontakto" className="contact-section">
          <div className="contact-container">
            <h2>Diana Style</h2>
            <div className="contact-info">
              <p>Contact Information:</p>
              <div className="contact-links">
                <a href="mailto:aliajdiana@gmail.com">Email</a>
                <a href="https://www.instagram.com/diana_aliaj_style/">
                  Instagram
                </a>
                <a href="https://www.facebook.com/aliajdiana/">Facebook</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <br />
    </>
  );
}

export default Header;
