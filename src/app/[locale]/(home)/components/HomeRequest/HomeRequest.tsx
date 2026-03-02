'use client';

import { useTranslations } from 'next-intl';

import { HomeRequestForm } from '@/features/contact-form/ui/HomeRequestForm';

import styles from './HomeRequest.module.scss';

const imgDots = 'https://www.figma.com/api/mcp/asset/569db673-8871-417e-83df-2e1b57899931';

export const HomeRequest = () => {
  const t = useTranslations('HomeRequest');

  return (
    <section className={styles.section} id="home-form">
      <div className="container">
        <div className={styles.container}>
          <div className={styles.decorImage}>
            {' '}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgDots} alt="" aria-hidden="true" />
            <div className={styles.decorGradient} />
          </div>

          <div className={styles.inner}>
            <div className={styles.left}>
              <h2 className={styles.heading}>
                {t('title1', { fallback: 'Let’s define the next step' })}
              </h2>
              <p className={styles.description}>
                {t('description1', {
                  fallback: 'Every collaboration at Axelvior begins with understanding.',
                })}
              </p>
              <p className={styles.description}>
                {t('description2', {
                  fallback:
                    'This form helps us see what you’re building, where things feel unclear, and what kind of support you’re considering.\n',
                })}
              </p>
            </div>

            <div className={styles.right}>
              <HomeRequestForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
