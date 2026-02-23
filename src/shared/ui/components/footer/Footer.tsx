'use client';

import { useTranslations } from 'next-intl';

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  X_URL,
} from '@/shared/lib/constants/constants';
import { FacebookIcon, InstagramIcon, XIcon } from '@/shared/ui/icons';

import styles from './Footer.module.scss';

import { Link } from '@/i18n/navigation';

export const Footer = () => {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  const NAV_GROUPS = [
    {
      category: t('foundation', { fallback: 'Foundation' }),
      links: [
        { text: t('footer-who', { fallback: 'Who' }), href: '/about-us' },
        { text: t('footer-what', { fallback: 'What' }), href: '/due-diligence' },
        { text: t('footer-why', { fallback: 'Why' }), href: '/market-research' },
      ],
    },
    {
      category: t('engage', { fallback: 'Engage' }),
      links: [
        { text: t('footer-clients', { fallback: 'Clients' }), href: '/portfolio-services' },
        { text: t('footer-pricing', { fallback: 'Pricing' }), href: '/lease-advisory' },
        { text: t('footer-connect', { fallback: 'Connect' }), href: '/contact' },
      ],
    },
    {
      category: t('thinking', { fallback: 'Thinking' }),
      links: [
        { text: t('footer-ideas', { fallback: 'Ideas' }), href: '/free-guides' },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>

          {/* Top section: brand left, nav right */}
          <div className={styles.footer__top}>

            {/* Brand + socials */}
            <div className={styles.footer__brand}>
              <Link href="/" className={styles.footer__logo_text}>
                Axelvior
              </Link>
              <div className={styles.footer__socials}>
                <a
                  href={FACEBOOK_URL}
                  className={styles.footer__social_icon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  className={styles.footer__social_icon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={X_URL}
                  className={styles.footer__social_icon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <XIcon />
                </a>
              </div>
            </div>

            {/* Navigation columns */}
            <nav className={styles.footer__nav}>
              {NAV_GROUPS.map((group) => (
                <div key={group.category} className={styles.footer__nav_col}>
                  <div className={styles.footer__nav_header}>
                    <span className={styles.footer__nav_plus} aria-hidden="true">+</span>
                    <span className={styles.footer__nav_cat}>{group.category}</span>
                  </div>
                  <div className={styles.footer__nav_links}>
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={styles.footer__nav_link}
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          {/* Bottom section: copyright + legal */}
          <div className={styles.footer__bottom}>
            <p className={styles.footer__copyright}>
              © {year} {t('company-name', { fallback: 'AXELVIOR' })}. {t('all-rights', { fallback: 'All materials are legally protected.' })}
            </p>
            <div className={styles.footer__legal}>
              <Link href="/legal/terms-and-conditions">
                {t('terms-of-use', { fallback: 'Terms of Use' })}
              </Link>
              <span className={styles.footer__legal_sep} aria-hidden="true" />
              <Link href="/legal/privacy-policy">
                {t('privacy-policy-full', { fallback: 'Privacy Policy' })}
              </Link>
              <span className={styles.footer__legal_sep} aria-hidden="true" />
              <Link href="/legal/cookie-policy">
                {t('cookie-policy-full', { fallback: 'Cookie Policy' })}
              </Link>
              <span className={styles.footer__legal_sep} aria-hidden="true" />
              <Link href="/legal/refund-policy">
                {t('refund-policy-full', { fallback: 'Refund Policy' })}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
