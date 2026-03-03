'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './PricingDownload.module.scss';

export const PricingDownload = () => {
  const t = useTranslations('pricingDownload');

  return (
    <>
      <section className={styles.pricing_download}>
        <Image src="/images/home/independence1.svg" alt="Independence" width={350} height={350} />
        <Image src="/images/home/independence2.svg" alt="Independence" width={350} height={350} />
        <div className={styles.pricing_download__wrapper}>
          <div className={'container'}>
            <div className={styles.pricing_download__content}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {t('title1', {
                  fallback: 'DOWNLOAD OUR PRICING PDF',
                })}
              </motion.h2>
              <motion.p>
                {t('subtitle1', {
                  fallback: 'We believe in',
                })}{' '}
                <b>
                  {t('subtitle2', {
                    fallback: 'transparent pricing',
                  })}{' '}
                </b>
                {t('subtitle3', {
                  fallback: 'so you can make informed decisions. Download our',
                })}{' '}
                <b>
                  {t('subtitle4', {
                    fallback: 'pricing guide',
                  })}{' '}
                </b>
                {t('subtitle5', {
                  fallback:
                    'to review the full range of services and packages we offer. Whether you’re just getting started or looking to scale your business to new heights, we have a solution for you.',
                })}
              </motion.p>
              <Button variant="blue" url="/pricing_axelvior.pdf" target="_blank" type="link">
                {t('button', { fallback: 'Download Pricing PDF' })}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
