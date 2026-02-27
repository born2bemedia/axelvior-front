'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './HomeWho.module.scss';

// Figma asset URLs — replace with permanent local assets when ready
const imgBusinessVerification = '/images/home/imgBusinessVerification.svg';
const imgKybRating = '/images/home/imgKybRating.svg';
const imgIndustryPrediction = '/images/home/imgIndustryPrediction.svg';
const imgConsumerSolutions = '/images/home/imgConsumerSolutions.svg';
const imgBannerBg = '/images/home/imgBannerBg.png';

export const HomeWho = () => {
  const t = useTranslations('homeWho');

  const approachItems = [
    {
      icon: imgBusinessVerification,
      number: '01',
      title: t('item1Title', { fallback: 'Responsibility for appearance' }),
    },
    {
      icon: imgKybRating,
      number: '02',
      title: t('item2Title', {
        fallback: 'Structure that supports freedom, not constraint',
      }),
    },
    {
      icon: imgIndustryPrediction,
      number: '03',
      title: t('item3Title', { fallback: 'Clarity over acceleration' }),
    },
    {
      icon: imgConsumerSolutions,
      number: '04',
      title: t('item4Title', {
        fallback: 'Decisions grounded in context, not templates',
      }),
    },
  ];

  return (
    <section className={styles.home_who}>
      <div className="container">
        <div className={styles.home_who__inner}>
          {/* WHO label + divider */}
          <div className={styles.home_who__header}>
            <span className={styles.home_who__label}>{t('label', { fallback: 'WHO' })}</span>
            <div className={styles.home_who__divider} />
          </div>

          {/* Two-column layout */}
          <div className={styles.home_who__columns}>
            <motion.div
              className={styles.home_who__text}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2>{t('title', { fallback: 'Who we are' })}</h2>
              <p>
                {t('desc1', {
                  fallback:
                    'Axelvior is a business development practice built around clarity, structure, and deliberate decision-making.',
                })}
              </p>
              <p>
                {t('desc2', {
                  fallback:
                    'We work at the point where independent work becomes complex — where intuition alone is no longer enough, and where direction matters as much as execution.',
                })}
              </p>
              <p>
                {t('desc3', {
                  fallback:
                    'Our role is not to impose frameworks or replace judgment. It is to help make direction visible, choices deliberate, and progress sustainable.',
                })}
              </p>
            </motion.div>

            <motion.div
              className={styles.home_who__approach}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className={styles.home_who__approach_intro}>
                {t('approachLabel', {
                  fallback: 'What defines our approach:',
                })}
              </p>
              {approachItems.map((item) => (
                <div key={item.number} className={styles.home_who__approach_item}>
                  <div className={styles.home_who__approach_item_left}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.icon} alt="" width={32} height={32} />
                    <span>{item.title}</span>
                  </div>
                  <span className={styles.home_who__approach_number}>{item.number}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dark banner */}
          <motion.div
            className={styles.home_who__banner}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className={styles.home_who__banner_image}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgBannerBg} alt="" />
            </div>
            <div className={styles.home_who__banner_content}>
              <div className={styles.home_who__banner_text}>
                <p>
                  {t('bannerText1', {
                    fallback:
                      'We are most effective when work has moved beyond experimentation, yet still holds unanswered questions about focus, positioning, or next steps.',
                  })}
                </p>
                <p>
                  {t('bannerText2', {
                    fallback:
                      'Not because something is broken, but as growth changes the rules, and instinct alone stops being reliable.',
                  })}
                </p>
              </div>
              <Button variant="white" type="link" url="/who">
                {t('bannerBtn', { fallback: 'More about our perspective' })}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
