import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer-outer">
      <div className="footer">
        <Exclusive />
        <Support />
        <Account />
        <QuickLink />
        <DownloadApp />
      </div>
      <div className="cp-rt">
        <p className="f-p">Copyright Rimel 2022 All right reserved</p>
      </div>
    </footer>
  );
};

const Exclusive = () => {
  return (
    <div className="fs">
      <p className="f-h1">Exclusive</p>
      <p className="f-h2">Subscribe</p>
      <p className="f-p">Get 10% off your first order</p>
      <div className="f-input">
        <input placeholder="Enter you email" />
        <img src="/icon-send.png" />
      </div>
    </div>
  );
};

const Support = () => {
  return (
    <div className="fs">
      <p className="f-h2">Support</p>
      <p className="f-p">
        111 Bijoy sarani, Dhaka,
        <br />
        DH 1515, Bangladesh
      </p>
      <p className="f-p">exclusive@gmail.com</p>
      <p className="f-p">+88015-88888-9999</p>
    </div>
  );
};

const Account = () => {
  return (
    <div className="fs">
      <p className="f-h2">Account</p>
      <p className="f-p">My Account</p>
      <p className="f-p">Login / Register</p>
      <p className="f-p">Cart</p>
      <p className="f-p">Wishlist</p>
      <p className="f-p">Shop</p>
    </div>
  );
};

const QuickLink = () => {
  return (
    <div className="fs">
      <p className="f-h2">Quick Link</p>
      <p className="f-p">Privacy Policy</p>
      <p className="f-p">Terms Of Use</p>
      <p className="f-p">FAQ</p>
      <p className="f-p">Contact</p>
    </div>
  );
};

const DownloadApp = () => {
  return (
    <div className="fs">
      <p className="f-h2">Download App</p>
      <p className="f-p2">Save $3 with App New User Only</p>
      <img src="/barcode.png" alt="" />
      <div className="social-icons">
        <img src="/facebook.png" alt="" />
        <img src="/instagram.png" alt="" />
        <img src="/twitter.png" alt="" />
        <img src="/linkedin.png" alt="" />
      </div>
    </div>
  );
};
export default Footer;
