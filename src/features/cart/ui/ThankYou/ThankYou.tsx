'use client';

import { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import type { CartItem } from '@/features/cart/store/cart';

import { WEBSITE_EMAIL } from '@/shared/lib/constants/constants';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './ThankYou.module.scss';

type LastOrder = {
  orderNumber: string;
  items: CartItem[];
  total: number;
};

const formatPrice = (value: number) =>
  `€${value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export const ThankYou = () => {
  const t = useTranslations('thankYou');
  const [order, setOrder] = useState<LastOrder | null>(null);

  useEffect(() => {
    if (typeof sessionStorage === 'undefined') return;
    try {
      const raw = sessionStorage.getItem('lastOrder');
      if (raw) {
        const parsed = JSON.parse(raw) as LastOrder;
        queueMicrotask(() => setOrder(parsed));
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>
        {t('thankYou', { fallback: 'Thank you for partnering with Axelvior!' })}
      </h1>
      <div className={styles.content}>
        <p className={styles.text}>
          {t('text1', {
            fallback:
              "We're thrilled to begin this journey with you and help turn your business vision into something impactful and sustainable.",
          })}
        </p>

        {order && order.items.length > 0 && (
          <div className={styles.orderDetails}>
            <h2 className={styles.orderTitle}>
              {t('orderDetails', { fallback: 'Your Order Details:' })}
            </h2>
            <table className={styles.orderTable}>
              <thead>
                <tr>
                  <th>{t('service', { fallback: 'Service:' })}</th>
                  <th>{t('quantity', { fallback: 'Quantity:' })}</th>
                  <th>{t('orderId', { fallback: 'Order ID:' })}</th>
                  <th>{t('totalAmount', { fallback: 'Total Amount' })}</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>#{order.orderNumber}</td>
                    <td>{formatPrice(item.price * item.quantity)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className={styles.text}>
          {t('text2', {
            fallback:
              "Your order is being processed, and you'll receive the payment details via email shortly. Make sure your contact info is up to date, so we can send everything right to you.",
          })}
        </p>
        <p className={styles.text}>
          {t('text3', {
            fallback:
              'If you have any questions or just want to chat about next steps, feel free to reach out to us at',
          })}{' '}
          <a href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</a>. <br />
          {t('text4', { fallback: "We're here for you!" })}
        </p>
      </div>
      <Button type="link" variant="blue" url="/">
        {t('backToHomePage', { fallback: 'Back to Home Page' })}
      </Button>
    </div>
  );
};
