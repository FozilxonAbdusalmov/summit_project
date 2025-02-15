import "./Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_sup">
        <div>
          <p>Finance: </p>
          <a href="tel:+998955880002">+998 95-588-00-02</a>
        </div>
        <div>
          <p>Education: </p>
          <a href="tel:+998955880002">+998 95-588-00-02</a>
        </div>

        <div>
          <p>Technical support: </p>
          <a href="tel:+998955880002">+998 95-588-00-02</a> |
          <a href="tel:+998955880002">+998 95-588-00-02</a>
        </div>
      </div>
      <div className="footer_t">
        <span>Cookie Policy | FAQ</span>
        <p>© 2024 SUMMIT LLC. All rights reserved</p>
        <div className="social-icons">
          <a
            href="https://t.me/summit_namangan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiaTelegram />
          </a>
          <a
            href="https://www.instagram.com/summit_namangan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
