import { getTranslations } from 'next-intl/server';

import { ThankYou } from '@/features/cart/ui/ThankYou/ThankYou';

import styles from './page.module.scss';
export default async function ThankYouPage() {
  const t = await getTranslations('thankYou');
  return (
    <>
      <section className={styles.thankYou}>
        <div className="container">
          <ThankYou />
        </div>
      </section>
    </>
  );
}
