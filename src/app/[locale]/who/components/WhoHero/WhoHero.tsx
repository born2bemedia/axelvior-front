'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './WhoHero.module.scss';

export const WhoHero = () => {
  const t = useTranslations('whoHero');

  return (
    <>
      <section className={styles.who_hero}>
        <div className={styles.who_hero__wrapper}>
          <div className={'container'}>
            <div className={styles.who_hero__content}>
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {t('title1', {
                  fallback: 'Who we are',
                })}
              </motion.h1>

              <div className={styles.who_hero__texts}>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  {t('title2', {
                    fallback:
                      'Axelvior exists to help independent entrepreneurs build with intention and clarity.',
                  })}
                </motion.p>
                <motion.p>
                  {t('subtitle1', {
                    fallback:
                      'We’re not a marketing agency or a typical consultancy. We’re here to bring structure to your work — to help turn effort into something sustainable and impactful.',
                  })}
                </motion.p>
                <motion.p>
                  {t('subtitle2', {
                    fallback:
                      'Our goal is to help entrepreneurs move from idea and instinct to tangible growth, without sacrificing independence.',
                  })}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <Image src="/images/home/progress.svg" alt="Progress" width={1312} height={228} />
      </section>
    </>
  );
};
