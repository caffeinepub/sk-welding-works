import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';
import { Heart } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';

const FooterSection = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#why-choose-us', label: 'Why Us' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Business Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/assets/generated/logo-sk-welding-works.dim_512x512.png"
                alt="SK Welding Works"
                className="h-12 w-12"
              />
              <h3 className="text-xl font-bold text-foreground">{BUSINESS_CONFIG.name}</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Professional welding and metal fabrication services for all your industrial and residential needs.
            </p>
            <div className="flex space-x-4">
              <a
                href={BUSINESS_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-orange transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-6 w-6" />
              </a>
              <a
                href={BUSINESS_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-orange transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-6 w-6" />
              </a>
              <a
                href={BUSINESS_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-orange transition-colors"
                aria-label="YouTube"
              >
                <SiYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-muted-foreground hover:text-accent-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Working Hours</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>{BUSINESS_CONFIG.workingHours.weekdays}</li>
              <li>{BUSINESS_CONFIG.workingHours.saturday}</li>
              <li>{BUSINESS_CONFIG.workingHours.sunday}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2026. Built with <Heart className="inline h-4 w-4 text-accent-orange" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-orange hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
