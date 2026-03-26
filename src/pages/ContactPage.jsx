import { PageHero } from "../components/content/PageHero";
import { ContactForm } from "../components/forms/ContactForm";
import { Section } from "../components/ui/Section";
import { siteSettings } from "../data/site";
import "../styles/pages/contact.css";

export function ContactPage() {
  return (
    <div className="page-stack">
      <PageHero
        eyebrow="Contact"
        title="Contact"
        copy="U kunt gratis en vrijblijvend uw vraag stellen of uw project opsturen. Wij nemen binnen 24 uur contact met u op en geven u gratis en vrijblijvend aan wat wij voor u kunnen doen en welke kosten daaraan verbonden zijn."
      />

      <Section eyebrow="Contact" title="Direct bereikbaar en eenvoudig aanvragen" className="contact-section">
        <div className="contact-layout">
          <div className="contact-details">
            <p>
              <strong>Telefoon:</strong> {siteSettings.phone}
            </p>
            <p>
              <strong>E-mail:</strong> {siteSettings.email}
            </p>
            <p>
              <strong>Werkgebied:</strong> {siteSettings.address}
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>
    </div>
  );
}
