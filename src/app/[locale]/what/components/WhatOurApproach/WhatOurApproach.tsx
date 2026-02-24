'use client';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

import styles from './WhatOurApproach.module.scss';

export const WhatOurApproach = () => {
  const t = useTranslations('whatApproach');

  const list = [
    {
      id: '01',
      iconUrl: '/images/what/approach-icon-one.svg',
      title: t('listItem1Title', { fallback: 'Strategic alignment' }),
      subTitle: t('listItem1SubTitle', {
        fallback:
          'We help you define and align your business goals with your unique market opportunities.',
      }),
    },
    {
      id: '02',
      iconUrl: '/images/what/approach-icon-two.svg',
      title: t('listItem2Title', { fallback: 'Personalized frameworks' }),
      subTitle: t('listItem2SubTitle', {
        fallback:
          'Every entrepreneur needs a different approach — we tailor our methods to fit your needs.',
      }),
    },
    {
      id: '03',
      iconUrl: '/images/what/approach-icon-three.svg',
      title: t('listItem3Title', { fallback: 'Sustainability over speed' }),
      subTitle: t('listItem3SubTitle', {
        fallback:
          'Quick wins are important, but long-term success requires consistency and clarity, which we build together.',
      }),
    },
  ];
  return (
    <section className={styles.what_approach}>
      <div className={'container'}>
        <div className={styles.what_approach__row}>
          <div className={styles.what_approach__row_left_column}>
            <Image src="/images/what/approach.jpg" alt="Approach" width={636} height={763} />
          </div>

          <div className={styles.what_approach__row_right_column}>
            <div className={styles.what_approach__row_right_column_top}>
              <h2 className={styles.what_approach__title}>
                {t('title1', { fallback: 'OUR APPROACH' })}
              </h2>

              <p className={styles.what_approach__subtitle}>
                {t('subTitlePre', { fallback: 'Axelvior focuses on' })}{' '}
                <strong>
                  {t('subTitleBold', { fallback: 'business development for entrepreneurs,' })}
                </strong>{' '}
                {t('subTitle', {
                  fallback:
                    'providing you with the structure and direction you need to achieve your goals without unnecessary complexity.',
                })}{' '}
              </p>
            </div>

            <div className={styles.what_approach__list_title_wrapper}>
              <p className={styles.what_approach__list_title}>
                {t('listTitle', { fallback: 'Our approach is grounded in:' })}
              </p>
            </div>

            <ul className={styles.what_approach__list}>
              {list.map((item) => (
                <li className={styles.what_approach__list_item} key={item.id}>
                  <div className={styles.what_approach__list_item_inner}>
                    <div>
                      <div className={styles.what_approach__list_item_icon}>
                        <Image src={item.iconUrl} alt="Approach" width={32} height={32} />
                      </div>
                      <p className={styles.what_approach__list_item_title}>{item.title}</p>
                      <p className={styles.what_approach__list_item_subtitle}>{item.subTitle}</p>
                    </div>

                    <span className={styles.what_approach__list_item_number}>{item.id}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
