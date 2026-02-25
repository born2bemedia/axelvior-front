'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ConnectPrice.module.scss';

export const ConnectPrice = () => {
  const t = useTranslations('connectPrice');

  return (
    <motion.section
      className={styles.connect_price}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container">
        <h2 className={styles.connect_price__title}>
          {t('title', { fallback: 'DOWNLOAD OUR PRICING PDF' })}
        </h2>

        <p className={styles.connect_price__subtitle}>
          {t('subtitlePartOne', {
            fallback: 'We believe in',
          })}
          <strong>
            {' '}
            {t('subtitleBoldOne', {
              fallback: 'transparent pricing',
            })}{' '}
          </strong>
          {t('subtitlePartTwo', {
            fallback: 'so you can make informed decisions. Download our',
          })}{' '}
          <strong>
            {t('subtitlePartBoldTwo', {
              fallback: 'pricing guide',
            })}{' '}
          </strong>
          {t('subtitlePartThree', {
            fallback:
              'to review the full range of services and packages we offer. Whether you’re just getting started or looking to scale your business to new heights, we have a solution for you.',
          })}
        </p>

        <div className={styles.connect_price__link_wrapper}>
          <a href={'#'} className={styles.connect_price__link}>
            {t('linkTitle', {
              fallback: 'Download Pricing PDF',
            })}
          </a>
        </div>
      </div>

      <div className={styles.connect_price__image_left}>
        <Image
          src="/images/connect/connect-price-left-image.svg"
          alt="Image"
          width={389}
          height={294}
          className="adaptive-image"
        />
      </div>

      <div className={styles.connect_price__image_right}>
        <Image
          src="/images/connect/connect-price-right-image.svg"
          alt="Image"
          width={311}
          height={265}
          className="adaptive-image"
        />
      </div>
    </motion.section>
  );
};
