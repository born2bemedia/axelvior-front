'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import styles from './WhatHowWeWork.module.scss';

export const WhatHowWeWork = () => {
  const t = useTranslations('whatWork');

  const tabs = [
    {
      id: 'how-we-work-tab-one',
      title: t('tabOneTitle', {
        fallback: 'WHAT YOU GET FROM WORKING WITH US',
      }),
    },
    {
      id: 'how-we-work-tab-two',
      title: t('tabTwoTitle', {
        fallback: 'OUR METHODOLOGY',
      }),
    },
    {
      id: 'how-we-work-tab-three',
      title: t('tabThreeTitle', {
        fallback: 'EXPLORE OUR PRICING & PLANS',
      }),
    },
  ];

  const workingTab = [
    {
      id: 'working-tab-one',
      title: t('tabOneListItemOneTitle', {
        fallback: 'Clarity on what matters',
      }),
    },
    {
      id: 'working-tab-two',
      title: t('tabOneListItemTwoTitle', {
        fallback: 'A clear roadmap for scaling',
      }),
    },
    {
      id: 'working-tab-three',
      title: t('tabOneListItemThreeTitle', {
        fallback: 'A strategy aligned with your vision and values',
      }),
    },
    {
      id: 'working-tab-four',
      title: t('tabOneListItemFourTitle', {
        fallback: 'Practical tools to stay focused and efficient',
      }),
    },
  ];

  const methodologyTab = [
    {
      id: 'methodology-tab-one',
      iconUrl: '/images/what/icon-gps.svg',
      title: t('methodologyTabOneTitle', {
        fallback: 'Turning scattered effort into',
      }),
      titlePartBold: t('methodologyTabOneTitleBold', {
        fallback: 'repeatable action',
      }),
    },
    {
      id: 'methodology-tab-two',
      iconUrl: '/images/what/icon-crop.svg',
      title: t('methodologyTabTwoTitle', {
        fallback: 'Building',
      }),
      titlePartBold: t('methodologyTabTwoTitleBold', {
        fallback: 'sustainable momentum',
      }),
      titlePartTwo: t('methodologyTabTwoTitlePartTwo', {
        fallback: 'through clear systems',
      }),
    },
    {
      id: 'methodology-tab-three',
      iconUrl: '/images/what/icon-arrow.svg',
      title: t('methodologyTabThreeTitle', {
        fallback: 'Helping you adapt and grow',
      }),
      titlePartBold: t('methodologyTabThreeTitleBold', {
        fallback: 'without losing focus',
      }),
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className={styles.what_how_work}>
      <div className={'container'}>
        <div className={styles.what_how_work__row}>
          <div className={styles.what_how_work__tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.what_how_work__tab} ${activeTab === tab.id ? styles.what_how_work__tab_active : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.what_how_work__right_column}>
            {activeTab === 'how-we-work-tab-one' && (
              <div className={styles.what_how_work__content_one}>
                <h2 className={styles.what_how_work__content_one_title}>{activeTabData?.title}</h2>
                <ul className={styles.what_how_work__content_one_list}>
                  {workingTab.map((tab) => (
                    <li key={tab.id} className={styles.what_how_work__content_one_item}>
                      <h3 className={styles.what_how_work__content_one_item_title}>{tab.title}</h3>
                    </li>
                  ))}
                </ul>

                <p className={styles.what_how_work__content_one_subtitle}>
                  {t('tabOneContentSubTitle', {
                    fallback:
                      'Our work is about making sure that your next step isn’t just a guess — it’s a move based on clear insights, structured decisions, and long-term vision.',
                  })}
                </p>
                <div className={styles.what_how_work__content_one_link_wrapper}>
                  <Link href={'why'} className={styles.what_how_work__content_one_link}>
                    {t('tabOneContentLinkTitle', {
                      fallback: 'Learn more about how we work',
                    })}
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'how-we-work-tab-two' && (
              <div className={styles.what_how_work__content_two}>
                <div className={styles.what_how_work__content_two_top}>
                  <h2 className={styles.what_how_work__content_two_title}>
                    {activeTabData?.title}
                  </h2>
                  <p className={styles.what_how_work__content_two_subtitle}>
                    {t('tabTwoContentSubTitle1', {
                      fallback: 'We believe that',
                    })}{' '}
                    <strong>
                      {t('tabTwoContentSubTitle2', {
                        fallback: 'momentum',
                      })}
                    </strong>{' '}
                    {t('tabTwoContentSubTitle3', {
                      fallback: 'starts with',
                    })}{' '}
                    <strong>
                      {t('tabTwoContentSubTitle4', {
                        fallback: 'structure.',
                      })}
                    </strong>{' '}
                    {t('tabTwoContentSubTitle5', {
                      fallback:
                        'Without it, every bit of progress can feel like a reset. That’s why we focus on:',
                    })}
                  </p>
                </div>
                <ul className={styles.what_how_work__content_two_list}>
                  {methodologyTab.map((tab) => (
                    <li key={tab.id} className={styles.what_how_work__content_two_item}>
                      <div className={styles.what_how_work__content_two_item_icon}>
                        <Image src={tab.iconUrl} width={24} height={24} alt="Icon" />
                      </div>
                      <h3 className={styles.what_how_work__content_two_item_title}>
                        {tab.title}{' '}
                        {tab.titlePartBold && (
                          <>
                            <strong>{tab.titlePartBold}</strong>{' '}
                          </>
                        )}
                        {tab.titlePartTwo && <>{tab.titlePartTwo}</>}
                      </h3>
                    </li>
                  ))}
                </ul>
                <p
                  className={`${styles.what_how_work__content_two_caption} ${styles.what_how_work__content_two_caption_first}`}
                >
                  {t('tabTwoContentCaptionOne', {
                    fallback: 'Every engagement at Axelvior is centered around this:',
                  })}
                </p>

                <p className={styles.what_how_work__content_two_caption}>
                  <strong>
                    {t('tabTwoContentCaptionTwo', {
                      fallback: 'Clarity, structure, and growth — without the noise.',
                    })}
                  </strong>
                </p>
              </div>
            )}

            {activeTab === 'how-we-work-tab-three' && (
              <div className={styles.what_how_work__content_three}>
                <div
                  className={`${styles.what_how_work__content_three_image} ${styles.what_how_work__content_three_image_desktop}`}
                >
                  <Image
                    src={'/images/what/work-background-image.png'}
                    width={1022}
                    height={398}
                    alt={'Image'}
                  />
                </div>
                <div
                  className={`${styles.what_how_work__content_three_image} ${styles.what_how_work__content_three_image_mobile}`}
                >
                  <Image
                    src={'/images/what/work-background-image-mobile.png'}
                    width={370}
                    height={398}
                    alt={'Image'}
                  />
                </div>
                <h2 className={styles.what_how_work__content_three_title}>
                  {t('tabThreeContentTitle', {
                    fallback: '  EXPLORE OUR PRICING & PLANS',
                  })}
                </h2>

                <div className={styles.what_how_work__content_three_subtitle_wrapper}>
                  <p className={styles.what_how_work__content_three_subtitle}>
                    {t('tabThreeSubTitleOne', {
                      fallback: 'At Axelvior, we believe in',
                    })}{' '}
                    <strong>
                      {t('tabThreeSubTitleOneBold', {
                        fallback: 'transparent pricing',
                      })}
                    </strong>{' '}
                    {t('tabThreeSubTitleOnePartTwo', {
                      fallback: 'that reflects the value and impact we provide.',
                    })}
                  </p>

                  <p className={styles.what_how_work__content_three_subtitle}>
                    {t('tabThreeSubTitleTwo', {
                      fallback: 'Our services are',
                    })}{' '}
                    <strong>
                      {t('tabThreeSubTitleTwoBoldOne', {
                        fallback: 'designed to match your needs,',
                      })}
                    </strong>{' '}
                    {t('tabThreeSubTitleTwoPartTwo', {
                      fallback: "whether you're looking to",
                    })}{' '}
                    <strong>
                      {t('tabThreeSubTitleTwoBoldTwo', {
                        fallback: 'go deeper',
                      })}
                    </strong>{' '}
                    {t('tabThreeSubTitleTwoPartThree', {
                      fallback: 'with hands-on support or',
                    })}{' '}
                    <strong>
                      {t('tabThreeSubTitleTwoBoldThree', {
                        fallback: 'kickstart your growth',
                      })}
                    </strong>{' '}
                    {t('tabThreeSubTitleTwoPartFour', {
                      fallback: 'independently.',
                    })}
                  </p>

                  <p className={styles.what_how_work__content_three_subtitle}>
                    {t('tabThreeSubTitleThree', {
                      fallback: 'We offer a range of',
                    })}{' '}
                    <strong>
                      {t('tabThreeSubTitleThreeBoldOne', {
                        fallback: 'tailored plans',
                      })}
                    </strong>{' '}
                    {t('tabThreeSubTitleThreePartTwo', {
                      fallback: 'to suit your',
                    })}{' '}
                    <strong>
                      {t('tabThreeSubTitleThreeBoldTwo', {
                        fallback: 'business development',
                      })}
                    </strong>{' '}
                    {t('tabThreeSubTitleThreePartThree', {
                      fallback: 'goals, and our pricing is built around your unique needs,',
                    })}{' '}
                    <strong>
                      {t('tabThreeSubTitleThreeBoldThree', {
                        fallback: 'without hidden costs.',
                      })}
                    </strong>
                  </p>
                </div>

                <Link href={'pricing'} className={styles.what_how_work__content_three_link}>
                  {t('tabThreeContentLinkTitle', {
                    fallback: 'View detailed pricing',
                  })}{' '}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
