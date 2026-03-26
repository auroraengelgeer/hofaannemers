import { NavLink } from "react-router-dom";
import { siteSettings } from "../../data/site";

const socialIcons = {
  Facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.6c0-.8.2-1.4 1.4-1.4H16V5.8c-.2 0-.9-.1-1.8-.1-1.8 0-3 1.1-3 3.2v2.4H9V14h2.4v7h2.1Z" fill="currentColor" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.4 1.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7.4A4.6 4.6 0 1 1 7.4 12 4.6 4.6 0 0 1 12 7.4Zm0 1.8A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Z" fill="currentColor" />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.7 3c.2 1.6 1.1 3 2.5 3.8.8.5 1.8.8 2.8.8v2.3c-1.4 0-2.8-.4-4-1.2v5.2a5 5 0 1 1-5-5c.3 0 .7 0 1 .1v2.4a2.7 2.7 0 1 0 1.7 2.5V3h2Z" fill="currentColor" />
    </svg>
  )
};

export function Footer() {
  return (
    <footer className="site-footer">
      <nav className="site-footer__nav" aria-label="Footer navigatie">
        {siteSettings.navItems.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label.toUpperCase()}
          </NavLink>
        ))}
      </nav>

      <div className="site-footer__info">
        <span>{siteSettings.phone}</span>
        <span>{siteSettings.email}</span>
        <span>{siteSettings.address}</span>
      </div>

      <div className="site-footer__socials">
        {siteSettings.socials.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
            <span className="site-footer__social-icon">{socialIcons[social.label]}</span>
            <span>{social.label}</span>
          </a>
        ))}
      </div>

      <p className="site-footer__copy">Hof Aannemers demo-opzet - 2026</p>
    </footer>
  );
}
