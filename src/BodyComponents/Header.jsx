import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import  'boxicons'
import ImageCarousel from "./ImageCarousel1.jsx";
import ProductCards from "./ProductCards.jsx";
import photo1 from "/src/assets/photo1.jpg";
import photo2 from "/src/assets/photo6.jpg";
import photo3 from "/src/assets/photo4.jpg";
import photo4 from "/src/assets/photo5.jpg";
import photo5 from "/src/assets/photo7.jpg";
import photo6 from "/src/assets/photo2.jpg";
import photo7 from "/src/assets/image1.png";
import productPhoto1 from "/src/assets/product1.jpg";
import productPhoto2 from "/src/assets/product2.jpg";
import productPhoto3 from "/src/assets/product3.jpg";
import productPhoto4 from "/src/assets/product4.jpg";
import productPhoto5 from "/src/assets/product5.jpg";
import productPhoto6 from "/src/assets/product6.jpg";
import productPhoto7 from "/src/assets/product1.jpeg";
import productPhoto8 from "/src/assets/product2.jpeg";
import productPhoto9 from "/src/assets/product3.jpeg";
import productPhoto10 from "/src/assets/product4.jpeg";
import productPhoto11 from "/src/assets/product5.jpeg";
import productPhoto12 from "/src/assets/product6.jpeg";
import productPhoto13 from "/src/assets/product7.png";
import productPhoto14 from "/src/assets/product8.png";
import productPhoto15 from "/src/assets/product10.jpeg";
import productPhoto16 from "/src/assets/product11.jpeg";
import productPhoto17 from "/src/assets/product12.jpeg";
import questionProduct from "/src/assets/questionProduct.jpg";


function Header() {
  useEffect(() => {
    const pageTitle = document.querySelector(".title");
    pageTitle.addEventListener("click", () => {
      window.location.reload();
    });
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);
  const [afterClicked, setAfterClicked] = useState(false);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
    setAfterClicked(true);
  };

  useEffect(() => {
    const handleWindowClick = (event) => {
      if (!event.target.matches("#dropdownDefaultButton")) {
        setShowDropdown(false);
        setAfterClicked(false);
      }
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  const images = [photo1, photo6, photo3, photo4, photo2, photo5, photo7];

  const productImage = [
    productPhoto1,
    productPhoto2,
    productPhoto3,
    productPhoto4,
    productPhoto5,
    productPhoto6,
    productPhoto7,
    productPhoto8,
    productPhoto9,
    productPhoto10,
    productPhoto11,
    productPhoto12,
    productPhoto13,
    productPhoto14,
    productPhoto15,
    productPhoto16,
    productPhoto17,
    questionProduct
  ];

  return (
    <>
      <header>
        <nav className="navbar">
          <h2 className="title">Diana Style</h2>
          <div className="dropdown-container">
            <button
              id="dropdownDefaultButton"
              className="dropdown-button"
              type="button"
              onClick={handleButtonClick}
            >
              ☰
              <svg
                className="dropdown-icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className={`dropdown-content ${afterClicked ? "after-clicked" : ""}`}
            >
              <ul
                className="dropdown-list"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a href="#kreu" className="dropdown-item">
                    Kreu
                  </a>
                </li>
                <li>
                  <a href="#rreth-nesh" className="dropdown-item">
                    Rreth Nesh
                  </a>
                </li>
                <li>
                  <a href="#produktet-tona" className="dropdown-item">
                    Produktet
                  </a>
                </li>
                <li>
                  <a href="#na-kontakto" className="dropdown-item">
                    Na Kontakoni
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

        <section id="kreu" className="kreu-section-container">
          <div className="kreu-container">
            <div className="kreu-section-content">
              <h2 className="kreu-section-title">Diana Style | Atelie</h2>
              <div className="kreu-section-text">
                <p>
                  Mirësevini në atelien tonë të Fustaneve, një qendër kreative
                  ku çdo veshje është një shprehje unike e stilit dhe shijeve
                  tuaja personale. Ne specializohemi në krijimin e fustaneve të
                  personalizuara, duke ofruar mundësi për porosi, qera dhe
                  blerje.Ne punojmë me kujdes të veçantë për të siguruar që cdo
                  veshje të përmbushë standardet më të larta të bukurisë dhe
                  elegancës.
                </p>
              </div>
              <div className="section-image">
                <ImageCarousel />
              </div>
            </div>
          </div>
        </section>

      <br />
        <section id="rreth-nesh">
            <div className="rrethnesh-section-content">
              <h2>Rreth Nesh</h2>
              <p>
                Me një përvojë të gjatë në fushën e modës që fillon që në vitin
                1995, ne, në Diana Style, kemi kultivuar pasionin tonë për
                dizajnin dhe shkëlqimin në çdo detaj të veshjes.
                Biznesi ynë u hap zyrtarisht në vitin 2010, duke filluar një
                udhëtim të vështirë dhe mbushur me sfida, por gjithashtu me
                sukses të madh.
              </p>
              <p>
                Ne kemi angazhuar ekspertizën tonë në çdo hap të rrugës. 
                Me një kombinim të përvojës së hershme dhe
                vizionit të rinovuar, ne vazhdojmë të ofrojmë fustane të
                personalizuara, mbushur me dashuri dhe kujdes për detajet,
                për të siguruar një përvojë të jashtëzakonshme të veshjes për
                klientët tanë.
              </p>
              <p>
                Këtu në Diana Style, ne jemi të përkushtuar për të përfaqësuar
                bukurinë dhe elegancën në çdo kënd, duke i
                dhënë një shkëlqim të veçantë çdo fustani. Nëpërmjet vizionit
                tonë dhe pasionit për të krijuar veshje të mrekullueshme, ne
                synojmë të bëhemi një destinacion i preferuar për të gjithë ata
                që kërkojnë stilin dhe shkëlqimin në çdo veshje.
              </p>
            </div>
        </section>
      <br />
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
                    <div>
                      <p className="price-tag">11,990L</p>
                      <a
                        className="instagram-link"
                        href="https://www.instagram.com/diana_aliaj_style/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="instagram"
                        ></box-icon>
                      </a>
                      <br />
                      <a
                        className="facebook-link"
                        href="https://www.facebook.com/aliajdiana/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="facebook"
                        ></box-icon>
                      </a>
                    </div>
                  }
                  imageSrc={productImage[9]}
                />
                <ProductCards
                  porositTani={
                    <div>
                      <p className="price-tag">2,990L</p>
                      <a
                        className="instagram-link"
                        href="https://www.instagram.com/diana_aliaj_style/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="instagram"
                        ></box-icon>
                      </a>
                      <br />
                      <a
                        className="facebook-link"
                        href="https://www.facebook.com/aliajdiana/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="facebook"
                        ></box-icon>
                      </a>
                    </div>
                  }
                  imageSrc={productImage[14]}
                />
                <ProductCards
                  porositTani={
                    <div>
                      <p className="price-tag">8,990L</p>
                      <a
                        className="instagram-link"
                        href="https://www.instagram.com/diana_aliaj_style/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="instagram"
                        ></box-icon>
                      </a>
                      <br />
                      <a
                        className="facebook-link"
                        href="https://www.facebook.com/aliajdiana/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="facebook"
                        ></box-icon>
                      </a>
                    </div>
                  }
                  imageSrc={productImage[0]}
                />
                <ProductCards
                  porositTani={
                    <div>
                      <p className="price-tag">7,990L</p>
                      <a
                        className="instagram-link"
                        href="https://www.instagram.com/diana_aliaj_style/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="instagram"
                        ></box-icon>
                      </a>
                      <br />
                      <a
                        className="facebook-link"
                        href="https://www.facebook.com/aliajdiana/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="facebook"
                        ></box-icon>
                      </a>
                    </div>
                  }
                  imageSrc={productImage[15]}
                />
                <ProductCards
                  porositTani={
                    <div>
                      <p className="price-tag">2,990L</p>
                      <a
                        className="instagram-link"
                        href="https://www.instagram.com/diana_aliaj_style/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="instagram"
                        ></box-icon>
                      </a>
                      <br />
                      <a
                        className="facebook-link"
                        href="https://www.facebook.com/aliajdiana/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="facebook"
                        ></box-icon>
                      </a>
                    </div>
                  }
                  imageSrc={productImage[16]}
                />
                <ProductCards
                  porositTani={
                    <div>
                      <p className="price-tag">9,990L</p>
                      <a
                        className="instagram-link"
                        href="https://www.instagram.com/diana_aliaj_style/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="instagram"
                        ></box-icon>
                      </a>
                      <br />
                      <a
                        className="facebook-link"
                        href="https://www.facebook.com/aliajdiana/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="facebook"
                        ></box-icon>
                      </a>
                    </div>
                  }
                  imageSrc={productImage[12]}
                />
                <ProductCards
                  porositTani={
                    <div>
                      <p className="price-tag">9,990L</p>
                    <a
                      className="instagram-link"
                      href="https://www.instagram.com/diana_aliaj_style/"
                    >
                      Porosit tani
                      <box-icon
                        className="boxicon"
                        type="logo"
                        name="instagram"
                      ></box-icon>
                    </a>
                    <br />
                    <a
                      className="facebook-link"
                      href="https://www.facebook.com/aliajdiana/"
                    >
                      Porosit tani
                      <box-icon
                        className="boxicon"
                        type="logo"
                        name="facebook"
                      ></box-icon>
                    </a>
                  </div>
                  }
                  imageSrc={productImage[10]}
                />
                <ProductCards
                  porositTani={
                    <div>
                      <p className="price-tag">6,990L</p>
                      <a
                        className="instagram-link"
                        href="https://www.instagram.com/diana_aliaj_style/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="instagram"
                        ></box-icon>
                      </a>
                      <br />
                      <a
                        className="facebook-link"
                        href="https://www.facebook.com/aliajdiana/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="facebook"
                        ></box-icon>
                      </a>
                    </div>
                  }
                  imageSrc={productImage[1]}
                />
                <ProductCards
                  porositTani={
                    <div>
                      <p className="price-tag">8,990L</p>
                      <a
                        className="instagram-link"
                        href="https://www.instagram.com/diana_aliaj_style/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="instagram"
                        ></box-icon>
                      </a>
                      <br />
                      <a
                        className="facebook-link"
                        href="https://www.facebook.com/aliajdiana/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="facebook"
                        ></box-icon>
                      </a>
                    </div>
                  }
                  imageSrc={productImage[7]}
                />
                <ProductCards
                  porositTani={
                    <div>
                      <p className="price-tag">2,490L</p>
                      <a
                        className="instagram-link"
                        href="https://www.instagram.com/diana_aliaj_style/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="instagram"
                        ></box-icon>
                      </a>
                      <br />
                      <a
                        className="facebook-link"
                        href="https://www.facebook.com/aliajdiana/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="facebook"
                        ></box-icon>
                      </a>
                    </div>
                  }
                  imageSrc={productImage[3]}
                />
                <ProductCards
                  porositTani={
                    <div>
                      <p className="price-tag">5,990L</p>
                      <a
                        className="instagram-link"
                        href="https://www.instagram.com/diana_aliaj_style/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="instagram"
                        ></box-icon>
                      </a>
                      <br />
                      <a
                        className="facebook-link"
                        href="https://www.facebook.com/aliajdiana/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="facebook"
                        ></box-icon>
                      </a>
                    </div>
                  }
                  imageSrc={images[0]}
                />
                <ProductCards
                  porositTani={
                    <div>
                      <p className="price-tag">7,990L</p>
                      <a
                        className="instagram-link"
                        href="https://www.instagram.com/diana_aliaj_style/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="instagram"
                        ></box-icon>
                      </a>
                      <br />
                      <a
                        className="facebook-link"
                        href="https://www.facebook.com/aliajdiana/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="facebook"
                        ></box-icon>
                      </a>
                    </div>
                  }
                  imageSrc={images[2]}
                />
                <ProductCards
                  porositTani={
                    <div>
                      <p className="price-tag">8,990L</p>
                      <a
                        className="instagram-link"
                        href="https://www.instagram.com/diana_aliaj_style/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="instagram"
                        ></box-icon>
                      </a>
                      <br />
                      <a
                        className="facebook-link"
                        href="https://www.facebook.com/aliajdiana/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="facebook"
                        ></box-icon>
                      </a>
                    </div>
                  }
                  imageSrc={productImage[6]}
                />
                <ProductCards
                  porositTani={
                    <div>
                      <p className="price-tag">2,490L</p>
                    <a
                      className="instagram-link"
                      href="https://www.instagram.com/diana_aliaj_style/"
                    >
                      Porosit tani
                      <box-icon
                        className="boxicon"
                        type="logo"
                        name="instagram"
                      ></box-icon>
                    </a>
                    <br />
                    <a
                      className="facebook-link"
                      href="https://www.facebook.com/aliajdiana/"
                    >
                      Porosit tani
                      <box-icon
                        className="boxicon"
                        type="logo"
                        name="facebook"
                      ></box-icon>
                    </a>
                  </div>
                  }
                  imageSrc={productImage[4]}
                />
                <ProductCards
                  porositTani={
                    <div>
                      <p className="price-tag">5,990L</p>
                      <a
                        className="instagram-link"
                        href="https://www.instagram.com/diana_aliaj_style/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="instagram"
                        ></box-icon>
                      </a>
                      <br />
                      <a
                        className="facebook-link"
                        href="https://www.facebook.com/aliajdiana/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="facebook"
                        ></box-icon>
                      </a>
                    </div>
                  }
                  imageSrc={productImage[5]}
                />
                <ProductCards
                  porositTani={
                    <div>
                      <p className="price-tag">??</p>
                      <p>Nuk mund te zgjidhni? Atehere na kontaktoni me poshte per dicka te personalizuar! </p>
                      <a
                        className="instagram-link"
                        href="https://www.instagram.com/diana_aliaj_style/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="instagram"
                        ></box-icon>
                      </a>
                      <br />
                      <a
                        className="facebook-link"
                        href="https://www.facebook.com/aliajdiana/"
                      >
                        Porosit tani
                        <box-icon
                          className="boxicon"
                          type="logo"
                          name="facebook"
                        ></box-icon>
                      </a>
                    </div>
                  }
                  imageSrc={productImage[17]}
                />
              </div>
            </div>
          </div>
        </section>
      <br />
      <div className="na-kontakto">
        <section id="na-kontakto" className="contact-section">
          <div className="contact-container">
            <h2 className="title">Diana Style</h2>
            <div className="contact-info">
              <p>Contact Information:</p>
              <div className="contact-links">
                <a className="mail-contact" href="mailto:aliajdiana@gmail.com">Email</a>
                <a className="ig-contact" href="https://www.instagram.com/diana_aliaj_style/">
                  Instagram
                </a>
                <a className="fb-contact" href="https://www.facebook.com/aliajdiana/">Facebook</a>
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
