'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ConnectHero.module.scss';

export const ConnectHero = () => {
  const t = useTranslations('connectHero');

  return (
    <motion.section
      className={styles.connect_hero}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container">
        <div className={styles.connect_hero__top}>
          <h1 className={styles.connect_hero__title}>
            {t('title', { fallback: "Let's start the conversation." })}
          </h1>

          <p className={styles.connect_hero__subtitle}>
            {t('subtitle', {
              fallback:
                'At Axelvior, we operate from a place of transparency and clear communication. Whether you want to visit us in person or send us a message, here’s how you can get in touch with us.',
            })}
          </p>
        </div>
        <div className={styles.connect_hero__image_desktop}>
          <Image src="/images/connect/hero.png" alt="Hero" width={1312} height={276} />
        </div>

        <div className={styles.connect_hero__image_mobile}>
          <Image src="/images/connect/hero-mobile.png" alt="Hero" width={740} height={400} />
        </div>
      </div>
    </motion.section>
  );
};
