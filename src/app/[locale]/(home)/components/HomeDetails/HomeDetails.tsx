'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './HomeDetails.module.scss';

const imgIcon = '/images/home/imgIcon.svg';

export const HomeDetails = () => {
  const t = useTranslations('homeDetails');

  const scrollToHomeForm = () => {
    const element = document.getElementById('home-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.home_details}>
      <div className="container">
        <div className={styles.home_details__inner}>
          {/* ── CLIENT JOURNEYS ─────────────────────────────────────────── */}
          <motion.div
            className={styles.home_details__section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className={styles.home_details__text_col}>
              <span className={styles.home_details__category}>
                {t('journeysLabel', { fallback: 'CLIENT JOURNEYS' })}
              </span>
              <h2 className={styles.home_details__heading}>
                {t('journeysTitle', {
                  fallback: 'What our work looks like in practice.',
                })}
              </h2>
              <p className={styles.home_details__desc}>
                {t('journeysDesc', {
                  fallback:
                    'Client work is rarely linear. Progress usually comes through a series of corrections, refinements, and better decisions.',
                })}
              </p>
              <Link href="/clients" className={styles.home_details__btn}>
                {t('journeysBtn', { fallback: 'View client work' })}
              </Link>
            </div>

            <div className={styles.home_details__diagram_col}>
              <p className={styles.home_details__diagram_label}>
                {t('journeysFocus', { fallback: 'Our client cases focus on:' })}
              </p>
              <div className={styles.home_details__diagram}>
                <div className={styles.home_details__diagram_line} />

                {/* Top right */}
                <div
                  className={`${styles.home_details__diagram_node} ${styles.home_details__diagram_node_top}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgIcon}
                    alt=""
                    width={16}
                    height={16}
                    className={styles.home_details__diagram_icon}
                  />
                  <div className={styles.home_details__diagram_tag}>
                    {t('journeysTag1', { fallback: 'Situations, not slogans' })}
                  </div>
                </div>

                {/* Middle left */}
                <div
                  className={`${styles.home_details__diagram_node} ${styles.home_details__diagram_node_mid}`}
                >
                  <div
                    className={`${styles.home_details__diagram_tag} ${styles.home_details__diagram_tag_left}`}
                  >
                    {t('journeysTag2', { fallback: 'Decisions, not promises' })}
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgIcon}
                    alt=""
                    width={16}
                    height={16}
                    className={styles.home_details__diagram_icon}
                  />
                </div>

                {/* Bottom right */}
                <div
                  className={`${styles.home_details__diagram_node} ${styles.home_details__diagram_node_bot}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgIcon}
                    alt=""
                    width={16}
                    height={16}
                    className={styles.home_details__diagram_icon}
                  />
                  <div className={styles.home_details__diagram_tag}>
                    {t('journeysTag3', { fallback: 'Outcomes, not hype' })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className={styles.home_details__hr} />

          {/* ── PRICING WITH CLARITY ────────────────────────────────────── */}
          <motion.div
            className={`${styles.home_details__section} ${styles.home_details__section_reverse}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className={styles.home_details__boxes_col}>
              <p className={styles.home_details__boxes_intro}>
                {t('pricingDesc', {
                  fallback:
                    'Pricing reflects the level of involvement, complexity, and responsibility.',
                })}
                <br />
                <br />
                {t('pricingDesc2', {
                  fallback: 'You will always know:',
                })}
              </p>
              <div className={styles.home_details__boxes_grid}>
                <div className={styles.home_details__box_row}>
                  <div className={styles.home_details__box}>
                    {t('pricingBox1', { fallback: 'What is included' })}
                  </div>
                  <div className={styles.home_details__box}>
                    {t('pricingBox2', { fallback: 'What is not' })}
                  </div>
                </div>
                <div className={styles.home_details__box}>
                  {t('pricingBox3', {
                    fallback: 'What the collaboration is designed to achieve',
                  })}
                </div>
              </div>
            </div>

            <div className={styles.home_details__text_col}>
              <span className={styles.home_details__category}>
                {t('pricingLabel', { fallback: 'PRICING WITH CLARITY' })}
              </span>
              <h2 className={styles.home_details__heading}>
                {t('pricingTitle', {
                  fallback: 'Clear scope. Clear expectations.',
                })}
              </h2>
              <p className={styles.home_details__desc}>
                {t('visionNote', {
                  fallback: 'No ambiguity disguised as flexibility.',
                })}
              </p>
              <Link href="/pricing" className={styles.home_details__btn}>
                {t('pricingBtn', { fallback: 'View pricing' })}
              </Link>
            </div>
          </motion.div>

          <div className={styles.home_details__hr} />

          {/* ── TELL US YOUR VISION ─────────────────────────────────────── */}
          <motion.div
            className={styles.home_details__section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className={styles.home_details__text_col}>
              <span className={styles.home_details__category}>
                {t('visionLabel', { fallback: 'TELL US YOUR VISION' })}
              </span>
              <h2 className={styles.home_details__heading}>
                {t('visionTitle', {
                  fallback: 'Every collaboration starts with context.',
                })}
              </h2>
              <p className={styles.home_details__desc}>
                {t('visionDesc', {
                  fallback: 'Before tools, pricing, or proposals, there is understanding.',
                })}
              </p>
              <button className={styles.home_details__btn} onClick={scrollToHomeForm}>
                {t('visionBtn', { fallback: 'Submit a request' })}
              </button>
            </div>

            <div className={styles.home_details__boxes_col}>
              <p className={styles.home_details__boxes_intro}>
                {t('visionBoxesIntro', {
                  fallback: 'The request form allows you to:',
                })}
              </p>
              <div className={styles.home_details__boxes_row}>
                <div className={styles.home_details__box}>
                  {t('visionBox1', {
                    fallback: "Describe what you're building",
                  })}
                </div>
                <div className={styles.home_details__box}>
                  {t('visionBox2', {
                    fallback: 'Explain where things feel unclear',
                  })}
                </div>
                <div className={styles.home_details__box}>
                  {t('visionBox3', {
                    fallback: "Outline what kind of support you're considering",
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
