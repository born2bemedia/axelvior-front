'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { HomeRequestForm } from '@/features/contact-form/ui/HomeRequestForm';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ConnectForm.module.scss';

export const ConnectForm = () => {
  const t = useTranslations('connectForm');

  return (
    <motion.section
      className={styles.connect_form}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container">
        <div className={styles.connect_form__row}>
          <div>
            <h2 className={styles.connect_form__title}>
              {t('title', {
                fallback: 'Map out the path ahead.',
              })}
            </h2>
            <p className={styles.connect_form__description}>
              {t('subtitle', {
                fallback:
                  'Ready to explore how we can help your business grow with clarity and purpose? Fill out the form below, and we’ll get back to you with the next steps.',
              })}
            </p>
          </div>

          <div>
            <HomeRequestForm />
          </div>

          <div className={styles.connect_form__image}>
            <Image
              src="/images/connect/form-image.png"
              alt="Image"
              width={948}
              height={1264}
              className="adaptive-image"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
