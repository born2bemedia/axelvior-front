'use client';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WEBSITE_EMAIL,
  WEBSITE_OFFICE_ADDRESS,
  WEBSITE_REGISTERED_ADDRESS,
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
        { text: t('footer-who', { fallback: 'Who' }), href: '/who' },
        { text: t('footer-what', { fallback: 'What' }), href: '/what' },
        { text: t('footer-why', { fallback: 'Why' }), href: '/why' },
      ],
    },
    {
      category: t('engage', { fallback: 'Engage' }),
      links: [
        {
          text: t('footer-clients', { fallback: 'Clients' }),
          href: '/clients',
        },
        {
          text: t('footer-pricing', { fallback: 'Pricing' }),
          href: '/pricing',
        },
        {
          text: t('footer-connect', { fallback: 'Connect' }),
          href: '/connect',
        },
      ],
    },
    {
      category: t('thinking', { fallback: 'Thinking' }),
      links: [{ text: t('footer-ideas', { fallback: 'Ideas' }), href: '/ideas' }],
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
                <Image src="/images/logo.svg" alt="axelvior" width={265} height={60} />
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
                    <span className={styles.footer__nav_plus} aria-hidden="true">
                      +
                    </span>
                    <span className={styles.footer__nav_cat}>{group.category}</span>
                  </div>
                  <div className={styles.footer__nav_links}>
                    {group.links.map((link) => (
                      <Link key={link.href} href={link.href} className={styles.footer__nav_link}>
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          <div className={styles.footer__details}>
            <div className={styles.footer__details_row}>
              <div className={styles.footer__details_item}>
                <span>{t('footer-email', { fallback: 'Email' })}:</span>
                <Link href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</Link>
              </div>
              <div className={styles.footer__details_item}>
                <span>
                  {t('footer-registered-address', {
                    fallback: 'Registered address',
                  })}
                  :
                </span>
                <p>{WEBSITE_REGISTERED_ADDRESS}</p>
                <br />
                <span>
                  {t('footer-office-address', {
                    fallback: 'Office address',
                  })}
                  :
                </span>
                <p>{WEBSITE_OFFICE_ADDRESS}</p>
              </div>
            </div>
          </div>

          {/* Bottom section: copyright + legal */}
          <div className={styles.footer__bottom}>
            <p className={styles.footer__copyright}>
              © {year} Expandro EOOD.{' '}
              {t('all-rights', {
                fallback: 'All materials are legally protected.',
              })}
            </p>
            <div className={styles.footer__legal}>
              <Link href="/legal/terms-of-use">
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
