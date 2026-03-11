'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WEBSITE_EMAIL,
  WEBSITE_OFFICE_ADDRESS,
  WEBSITE_OFFICE_ADDRESS_MAP,
  WEBSITE_PHONE,
  WEBSITE_REGISTERED_ADDRESS,
  WEBSITE_REGISTERED_ADDRESS_MAP,
  X_URL,
} from '@/shared/lib/constants/constants';
import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ConnectContact.module.scss';

export const ConnectContact = () => {
  const t = useTranslations('connectContact');

  const social = [
    {
      id: 'facebook-social',
      title: 'Facebook',
      link: `${FACEBOOK_URL}`,
    },
    {
      id: 'instagram-social',
      title: 'Instagram',
      link: `${INSTAGRAM_URL}`,
    },
    {
      id: 'twitter-social',
      title: 'Twitter',
      link: `${X_URL}`,
    },
  ];

  return (
    <motion.div
      className={styles.connect_contact}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container">
        <div className={styles.connect_contact__row}>
          <div className={styles.connect_contact__item}>
            <div className={styles.connect_contact__item_image}>
              <Image
                src="/images/connect/icon-sms.svg"
                alt="Icon"
                width={32}
                height={32}
                className="adaptive-image"
              />
            </div>
            <div>
              <p className={styles.connect_contact__item_title}>
                {t('contactItemOneTitle', {
                  fallback: 'EMAIL US',
                })}
              </p>
              <a href={`mailto:${WEBSITE_EMAIL}`} className={styles.connect_contact__item_link}>
                {WEBSITE_EMAIL}
              </a>
            </div>
          </div>

          <div className={styles.connect_contact__item}>
            <div className={styles.connect_contact__item_image}>
              <Image
                src="/images/connect/icon-call.svg"
                alt="Icon"
                width={32}
                height={32}
                className="adaptive-image"
              />
            </div>
            <div>
              <p className={styles.connect_contact__item_title}>
                {t('contactItemTwoTitle', {
                  fallback: 'SPEAK WITH US',
                })}
              </p>
              <a href={`tel:${WEBSITE_PHONE}`} className={styles.connect_contact__item_link}>
                {WEBSITE_PHONE}
              </a>
            </div>
          </div>

          <div className={styles.connect_contact__item}>
            <div className={styles.connect_contact__item_image}>
              <Image
                src="/images/connect/icon-map.svg"
                alt="Icon"
                width={32}
                height={32}
                className="adaptive-image"
              />
            </div>
            <div className={styles.connect_contact__item_details}>
              <p className={styles.connect_contact__item_title}>
                {t('contactItemThreeTitle', {
                  fallback: 'LEGAL CORRESPONDENCE',
                })}
              </p>
              <p className={styles.connect_contact__item_link}>{WEBSITE_REGISTERED_ADDRESS}</p>
            </div>
            <div className={styles.connect_contact__item_image_main}>
              <div dangerouslySetInnerHTML={{ __html: WEBSITE_REGISTERED_ADDRESS_MAP }} />
            </div>
          </div>

          <div className={styles.connect_contact__item}>
            <div className={styles.connect_contact__item_image}>
              <Image
                src="/images/connect/icon-map.svg"
                alt="Icon"
                width={32}
                height={32}
                className="adaptive-image"
              />
            </div>
            <div className={styles.connect_contact__item_details}>
              <p className={styles.connect_contact__item_title}>
                {t('contactItemFourTitle', {
                  fallback: 'OUR LOCATION',
                })}
              </p>
              <p className={styles.connect_contact__item_link}>{WEBSITE_OFFICE_ADDRESS}</p>
            </div>
            <div className={styles.connect_contact__item_image_main}>
              <div dangerouslySetInnerHTML={{ __html: WEBSITE_OFFICE_ADDRESS_MAP }} />
            </div>
          </div>
        </div>

        <div className={styles.connect_contact__social}>
          <div className={styles.connect_contact__social_inner}>
            <h2 className={styles.connect_contact__social_title}>
              {t('contactSocialTitle', {
                fallback: 'Follow us on social media',
              })}
            </h2>
            <p className={styles.connect_contact__social_description}>
              {t('contactSocialDescription', {
                fallback:
                  'Stay connected and keep up with the latest updates, tips, and insights on entrepreneurship, business development, and more. Follow us on the platforms below for    valuable content that aligns with your growth journey.',
              })}
            </p>
            <ul className={styles.connect_contact__social_list}>
              {social?.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.link}
                    className={styles.connect_contact__social_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.connect_contact__social_image}>
            <Image
              src="/images/connect/social-section-image.png"
              alt="Image"
              width={509}
              height={310}
              className="adaptive-image"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
