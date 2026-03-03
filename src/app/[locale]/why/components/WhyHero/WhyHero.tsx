'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './WhyHero.module.scss';

export const WhyHero = () => {
  const t = useTranslations('whyHero');

  return (
    <>
      <section className={styles.why_hero}>
        <div className={'container'}>
          <div className={styles.why_hero__content}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('title1', {
                fallback: 'Why We Exist',
              })}
            </motion.h1>
            <div className={styles.why_hero__content_text}>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {t('subtitle', {
                  fallback: 'Many business solutions are focused on',
                })}{' '}
                <b>
                  {t('subtitle2', {
                    fallback: 'quick wins, growth hacks, or one-size-fits-all frameworks.',
                  })}{' '}
                </b>
                {t('subtitle3', {
                  fallback:
                    'While these approaches can deliver results, they often lack the depth and foundation needed for',
                })}{' '}
                <b>
                  {t('subtitle4', {
                    fallback: 'long-term sustainability.',
                  })}{' '}
                </b>
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {t('subtitle5', {
                  fallback: 'We exist because',
                })}{' '}
                <b>
                  {t('subtitle6', {
                    fallback: 'sustainable success is designed,',
                  })}{' '}
                </b>
                {t('subtitle7', {
                  fallback:
                    'not improvised. We understand that real progress doesn’t come from rushing toward growth, but from building the right foundation and setting a clear path forward.',
                })}
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {t('subtitle8', {
                  fallback: 'Our role isn’t to dictate your direction — it’s to help you',
                })}{' '}
                <b>
                  {t('subtitle9', {
                    fallback: 'regain control',
                  })}{' '}
                </b>
                {t('subtitle10', {
                  fallback: 'of your business and ensure the journey is',
                })}{' '}
                <b>
                  {t('subtitle11', {
                    fallback: 'deliberate,',
                  })}{' '}
                </b>
                {t('subtitle12', {
                  fallback: 'not reactive.',
                })}
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.why_hero__image}
            >
              <Image
                src="/images/why/hero.png"
                alt="Hero"
                width={1312}
                height={500}
                className={styles.desktop_image}
              />
              <Image
                src="/images/why/heroMob.png"
                alt="Hero"
                width={370}
                height={500}
                className={styles.mobile_image}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
