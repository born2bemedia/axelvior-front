'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './WhatHero.module.scss';

export const WhatHero = () => {
  const t = useTranslations('whatHero');

  return (
    <motion.section
      className={styles.what_hero}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className={'container'}>
        <div className={styles.what_hero__row}>
          <div className={styles.what_hero__row_right_column}>
            <div className={styles.what_hero__row_right_top}>
              <Image src="/images/what/hero-icon.svg" alt="Icon" width={16} height={16} />
              <span className={styles.what_hero__row_right_divider}></span>
            </div>

            <div>
              <h1 className={styles.what_hero__title}>{t('title1', { fallback: 'What We Do' })}</h1>

              <p className={styles.what_hero__subtitle}>
                <span>
                  {t('subtitle1', {
                    fallback:
                      'At Axelvior, we help independent entrepreneurs turn their vision into structured, sustainable growth.',
                  })}
                </span>
              </p>

              <p className={styles.what_hero__subtitle}>
                {t('subTitle1Pre', { fallback: 'Our work is about' })}{' '}
                <strong>{t('subTitleBold1', { fallback: 'creating clarity,' })}</strong>{' '}
                <strong>{t('subTitleBold2', { fallback: 'shaping strategy,' })}</strong>{' '}
                {t('subTitle1', { fallback: 'and' })}{' '}
                <strong>
                  {t('subTitleBold3', { fallback: 'aligning effort with outcomes.' })}
                </strong>{' '}
              </p>

              <p className={styles.what_hero__subtitle}>
                {t('subTitle2Pre', { fallback: 'We don’t just offer guidance — we build the' })}{' '}
                <strong>{t('subTitle2Bold', { fallback: 'foundational structure' })}</strong>{' '}
                {t('subTitle2', {
                  fallback:
                    'that allows your business to grow in the right direction, consistently.',
                })}
              </p>
            </div>

            <div className={styles.what_hero__row_right_bottom}>
              <span className={styles.what_hero__row_right_divider}></span>
              <Image src="/images/what/hero-icon.svg" alt="Icon" width={16} height={16} />
            </div>
          </div>
          <div className={styles.what_hero__row_left_column}>
            <Image src="/images/what/hero.png" alt="Hero" width={588} height={600} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
