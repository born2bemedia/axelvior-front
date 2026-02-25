'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ClientsHero.module.scss';

export const ClientsHero = () => {
  const t = useTranslations('clientsHero');

  return (
    <motion.section
      className={styles.clients_hero}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container">
        <h1 className={styles.clients_hero__title}>
          {t('title', { fallback: 'Building real success together.' })}
        </h1>
        <Image src="/images/clients/hero.png" alt="Clients Hero" width={1312} height={373} />
        <div className={styles.clients_hero__row}>
          <div className={styles.clients_hero__left_column}>
            <h2 className={styles.clients_hero__row_title}>
              {t('subtitle', { fallback: 'SEE THE IMPACT' })}
            </h2>

            <div className={styles.clients_hero__row_description_wrapper}>
              <p className={styles.clients_hero__row_description}>
                {t('descriptionOnePartOne', {
                  fallback:
                    'At Axelvior, we don’t just provide services — we create meaningful, long-term partnerships with entrepreneurs who are ready to take their businesses to the next level. Our work is about making your goals more than just ideas, but',
                })}{' '}
                <strong>
                  {t('descriptionOneBold', {
                    fallback: 'tangible outcomes',
                  })}
                </strong>
              </p>

              <p className={styles.clients_hero__row_description}>
                {t('descriptionTwoPartOne', {
                  fallback:
                    'We work alongside entrepreneurs who are driven by purpose and want to build something',
                })}{' '}
                <strong>
                  {t('descriptionTwoBold', {
                    fallback: 'sustainable',
                  })}
                </strong>{' '}
                {t('descriptionTwoPartTwo', {
                  fallback:
                    '— helping them make informed decisions, gain clarity, and create systems that fuel their growth.',
                })}
              </p>

              <p className={styles.clients_hero__row_description}>
                {t('descriptionThreePartOne', {
                  fallback: 'Below are a few of the',
                })}{' '}
                <strong>
                  {t('descriptionThreeBold', {
                    fallback: 'real entrepreneurs',
                  })}
                </strong>{' '}
                {t('descriptionThreePartTwo', {
                  fallback: "we've had the privilege of working with and the",
                })}{' '}
                <strong>
                  {t('descriptionThreeBoldTwo', {
                    fallback: 'results',
                  })}
                </strong>{' '}
                {t('descriptionThreePartThree', {
                  fallback: 'they’ve achieved through our partnership.',
                })}
              </p>
            </div>
          </div>
          <div className={styles.clients_hero__right_column}>
            <div className={styles.clients_hero__right_column_image_wrapper}>
              <Image
                src="/images/clients/hero-icon.svg"
                alt="Clients Hero"
                width={132}
                height={132}
                className="adaptive-image"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
