'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ClientsWhyChoose.module.scss';

export const ClientsWhyChoose = () => {
  const t = useTranslations('clientsWhyChoose');

  const studies = [
    {
      id: 'study-one',
      title: t('studyItemOneTitle', {
        fallback: 'Clarity',
      }),
      description: t('studyItemOneDescription', {
        fallback: 'on direction and goals',
      }),
      icon: '/images/clients/icon-link.svg',
    },
    {
      id: 'study-two',
      title: t('studyItemTwoTitle', {
        fallback: 'Operational efficiency',
      }),
      description: t('studyItemTwoDescription', {
        fallback: 'through systems and structures',
      }),
      icon: '/images/clients/icon-trend-up.svg',
    },
    {
      id: 'study-three',
      title: t('studyItemThreeTitle', {
        fallback: 'Long-term growth',
      }),
      description: t('studyItemThreeDescription', {
        fallback: 'with strategic guidance',
      }),
      icon: '/images/clients/icon-hierarchy.svg',
    },
  ];

  return (
    <motion.section
      className={styles.clients_choose}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container">
        <div className={styles.clients_choose__left_column}>
          <h2 className={styles.clients_choose__title}>
            {t('title', { fallback: 'WHY OUR CLIENTS CHOOSE AXELVIOR' })}
          </h2>
          <p className={styles.clients_choose__description}>
            {t('descriptionPartOne', {
              fallback:
                'Our clients come to us because they are looking for more than just a service provider — they want a',
            })}{' '}
            <strong>{t('descriptionBoldOne', { fallback: 'a strategic partner' })}</strong>
            {t('descriptionPartTwo', {
              fallback:
                'who understands the unique challenges of growing a business independently. At Axelvior, we believe that',
            })}{' '}
            <strong>
              {t('descriptionBoldTwo', {
                fallback: 'sustainability',
              })}
            </strong>{' '}
            {t('descriptionPartThree', {
              fallback: 'and',
            })}{' '}
            <strong>
              {t('descriptionBoldThree', {
                fallback: 'clarity',
              })}
            </strong>{' '}
            {t('descriptionPartFour', {
              fallback:
                'are the cornerstones of success. We don’t simply solve problems; we help our clients build long-term,',
            })}{' '}
            <strong>
              {t('descriptionBoldFour', {
                fallback: 'scalable solutions.',
              })}
            </strong>
          </p>
          <Link href={'#'} className={styles.clients_choose__link}>
            {t('linkTitle', {
              fallback: 'Submit a request',
            })}
          </Link>
        </div>
        <div className={styles.clients_choose__image_wrapper}>
          <Image
            src="/images/clients/choose-image.svg"
            alt="Clients Hero"
            width={763}
            height={360}
            className="adaptive-image"
          />
        </div>
      </div>

      <h3 className={styles.clients_choose__bottom_title}>
        {t('studiesTitlePart', {
          fallback: 'Each of these case studies represents',
        })}{' '}
        <strong>
          {t('studiesTitleBold', {
            fallback: 'a real transformation:',
          })}
        </strong>
      </h3>

      <ul className={styles.clients_choose__bottom_list}>
        {studies.map((study) => (
          <li key={study.id} className={styles.clients_choose__bottom_item}>
            <div className={styles.clients_choose__bottom_item_image_wrapper}>
              <Image
                src={study.icon}
                alt={study.title}
                width={24}
                height={24}
                className="adaptive-image"
              />
            </div>
            <h4 className={styles.clients_choose__bottom__item_title}>
              {study.title} <strong>{study.description}</strong>
            </h4>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};
