'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import styles from './WhatHelp.module.scss';

export const WhatHelp = () => {
  const t = useTranslations('whatHelp');

  const tabs = [
    {
      id: 'tab1',
      title: t('tabOneTitle', {
        fallback: 'Strategic Direction',
      }),
      content: {
        number: '01',
        mainSubtitle: t('tabOneMainSubtitle', {
          fallback:
            'At Axelvior, we help you set a clear, achievable direction for your business — one that aligns with your long-term vision, while considering where you currently stand. We work with you to define a',
        }),
        mainSubtitleBold: t('tabOneMainSubtitleBold', {
          fallback: 'purposeful path forward.',
        }),
      },
      list: [
        {
          id: 'list-one-item-one',
          iconUrl: '/images/what/help-icon-one.svg',
          title: t('listOneItemOneTitle', {
            fallback: 'Vision Development & Refinement',
          }),
          subtitle: t('listOneItemOneSubtitle', {
            fallback:
              'Help define your overarching business vision and ensure it aligns with your core values and mission.',
          }),
        },
        {
          id: 'list-one-item-two',
          iconUrl: '/images/what/help-icon-aim.svg',
          title: t('listOneItemTwoTitle', {
            fallback: 'Strategic Goal Setting',
          }),
          subtitle: t('listOneItemTwoSubtitle', {
            fallback:
              'Set specific, measurable, and time-bound goals that guide every action you take.',
          }),
        },
        {
          id: 'list-one-item-three',
          iconUrl: '/images/what/help-icon-search-status.svg',
          title: t('listOneItemThreeTitle', {
            fallback: 'Market Research & Analysis',
          }),
          subtitle: t('listOneItemThreeSubtitle', {
            fallback:
              'Conduct deep market research to identify trends, opportunities, and areas for differentiation.',
          }),
        },
        {
          id: 'list-one-item-four',
          iconUrl: '/images/what/help-icon-mask.svg',
          title: t('listOneItemFourTitle', {
            fallback: 'SWOT Analysis',
          }),
          subtitle: t('listOneItemFourSubtitle', {
            fallback:
              "Analyze your business's Strengths, Weaknesses, Opportunities, and Threats to create a comprehensive strategic framework.",
          }),
        },
        {
          id: 'list-one-item-five',
          iconUrl: '/images/what/help-icon-ranking.svg',
          title: t('listOneItemFiveTitle', {
            fallback: 'Competitive Landscape Assessment',
          }),
          subtitle: t('listOneItemFiveSubtitle', {
            fallback:
              "Understand your competitors' strategies and positioning to identify gaps and opportunities in your market.",
          }),
        },
        {
          id: 'list-one-item-six',
          iconUrl: '/images/what/help-icon-export.svg',
          title: t('listOneItemSixTitle', {
            fallback: 'Opportunity Mapping',
          }),
          subtitle: t('listOneItemSixSubtitle', {
            fallback:
              'Identify and prioritize high-impact opportunities that align with your business goals and available resources.',
          }),
        },
        {
          id: 'list-one-item-seven',
          iconUrl: '/images/what/help-icon-export.svg',
          title: t('listOneItemSevenTitle', {
            fallback: 'Decision-Making Frameworks',
          }),
          subtitle: t('listOneItemSevenSubtitle', {
            fallback:
              'Provide tools and frameworks for making informed, data-driven decisions to keep your business on course.',
          }),
        },
        {
          id: 'list-one-item-eight',
          iconUrl: '/images/what/help-icon-export.svg',
          title: t('listOneItemEightTitle', {
            fallback: 'Strategic Roadmap Development',
          }),
          subtitle: t('listOneItemEightSubtitle', {
            fallback:
              'Build a comprehensive, actionable roadmap to guide your business from where it is now to where you want it to be, step by step.',
          }),
        },
        {
          id: 'list-one-item-nine',
          iconUrl: '/images/what/help-icon-message-tick.svg',
          title: t('listOneItemNineTitle', {
            fallback: 'Ongoing Strategic Review & Adjustments',
          }),
          subtitle: t('listOneItemNineSubtitle', {
            fallback:
              'Continuously track performance and adjust the strategy based on changes in the market, customer needs, and internal resources.',
          }),
        },
      ],
    },
    {
      id: 'tab2',
      title: t('tabTwoTitle', {
        fallback: 'Positioning & Offer Development',
      }),
      content: {
        number: '02',
        mainSubtitle: t('tabTwoMainSubtitle', {
          fallback:
            'Your business offering should clearly convey the value you provide and be positioned for maximum impact. We refine your messaging, ensure alignment with market expectations, and help craft an offer that resonates with your target audience.',
        }),
      },
      list: [
        {
          id: 'list-two-item-one',
          iconUrl: '/images/what/help-icon-receipt-discount.svg',
          title: t('listTwoItemOneTitle', {
            fallback: 'Unique Selling Proposition (USP) Development:',
          }),
          subtitle: t('listTwoItemOneSubtitle', {
            fallback:
              'Clarify what makes your offering unique and position it effectively within the market.',
          }),
        },
        {
          id: 'list-two-item-two',
          iconUrl: '/images/what/help-icon-radar-2.svg',
          title: t('listTwoItemTwoTitle', {
            fallback: 'Target Market Segmentation & Persona Development',
          }),
          subtitle: t('listTwoItemTwoSubtitle', {
            fallback:
              'Develop detailed customer personas and segment your target audience for more precise and tailored messaging.',
          }),
        },
        {
          id: 'list-two-item-three',
          iconUrl: '/images/what/help-icon-diamonds.svg',
          title: t('listTwoItemThreeTitle', {
            fallback: 'Value Proposition Refinement',
          }),
          subtitle: t('listTwoItemThreeSubtitle', {
            fallback:
              'Ensure your product or service delivers a compelling value that directly addresses customer pain points.',
          }),
        },
        {
          id: 'list-two-item-four',
          iconUrl: '/images/what/help-icon-message-time.svg',
          title: t('listTwoItemFourTitle', {
            fallback: 'Brand Messaging Strategy',
          }),
          subtitle: t('listTwoItemFourSubtitle', {
            fallback:
              "Craft a clear and persuasive message that communicates your brand's value in a way that attracts and converts your ideal customers.",
          }),
        },
        {
          id: 'list-two-item-five',
          iconUrl: '/images/what/help-icon-tag-2.svg',
          title: t('listTwoItemFiveTitle', {
            fallback: 'Pricing Strategy',
          }),
          subtitle: t('listTwoItemFiveSubtitle', {
            fallback:
              'Define pricing structures that align with your value proposition, market positioning, and customer expectations.',
          }),
        },
        {
          id: 'list-two-item-six',
          iconUrl: '/images/what/help-icon-box-tick.svg',
          title: t('listTwoItemSixTitle', {
            fallback: 'Product/Service Packaging & Positioning',
          }),
          subtitle: t('listTwoItemSixSubtitle', {
            fallback:
              'Help you package your offerings in a way that maximizes perceived value and appeals to your target market.',
          }),
        },
        {
          id: 'list-two-item-seven',
          iconUrl: '/images/what/help-icon-profile-tick.svg',
          title: t('listTwoItemSevenTitle', {
            fallback: 'Customer Experience Mapping',
          }),
          subtitle: t('listTwoItemSevenSubtitle', {
            fallback:
              "Design an optimal customer journey and experience, ensuring that every touchpoint reflects your brand's values and strengthens your position.",
          }),
        },
        {
          id: 'list-two-item-eight',
          iconUrl: '/images/what/help-icon-video-horizontal.svg',
          title: t('listTwoItemEightTitle', {
            fallback: 'Pitch Development',
          }),
          subtitle: t('listTwoItemEightSubtitle', {
            fallback:
              'Develop clear and compelling sales and investor pitches to help you attract attention and secure opportunities.',
          }),
        },
        {
          id: 'list-two-item-nine',
          iconUrl: '/images/what/help-icon-document-text.svg',
          title: t('listTwoItemNineTitle', {
            fallback: 'Content Strategy',
          }),
          subtitle: t('listTwoItemNineSubtitle', {
            fallback:
              'Create a content strategy that resonates with your audience, enhances your positioning, and drives engagement.',
          }),
        },
      ],
    },
    {
      id: 'tab3',
      title: t('tabThreeTitle', {
        fallback: 'Operational Foundations & Systems',
      }),
      content: {
        number: '03',
        mainSubtitle: t('tabThreeMainSubtitle', {
          fallback:
            'Turning ideas into action requires effective systems and processes that scale as your business grows. We help create the',
        }),
        mainSubtitleBold: t('tabThreeMainSubtitleBold', {
          fallback: 'backbone of your business',
        }),
        mainSubtitlePartTwo: t('tabThreeMainSubtitleBoldTwo', {
          fallback:
            '— strong operational systems that allow your business to function smoothly and grow',
        }),
      },
      list: [
        {
          id: 'list-three-item-one',
          iconUrl: '/images/what/help-icon-presentation-chart.svg',
          title: t('listThreeItemOneTitle', {
            fallback: 'Business Process Mapping & Optimization',
          }),
          subtitle: t('listThreeItemOneSubtitle', {
            fallback:
              'Analyze and streamline your workflows to eliminate inefficiencies, reduce costs, and enhance productivity.',
          }),
        },
        {
          id: 'list-three-item-two',
          iconUrl: '/images/what/help-icon-pen-add.svg',
          title: t('listThreeItemTwoTitle', {
            fallback: 'Standard Operating Procedures (SOPs)',
          }),
          subtitle: t('listThreeItemTwoSubtitle', {
            fallback:
              'Develop detailed, easy-to-follow SOPs to ensure consistency and quality in day-to-day operations.',
          }),
        },
        {
          id: 'list-three-item-three',
          iconUrl: '/images/what/help-icon-cpu-setting.svg',
          title: t('listThreeItemThreeTitle', {
            fallback: 'Systems Integration & Automation',
          }),
          subtitle: t('listThreeItemThreeSubtitle', {
            fallback:
              'Integrate various business systems (CRM, financial tools, project management) and automate tasks to increase efficiency and reduce manual errors.',
          }),
        },
        {
          id: 'list-three-item-four',
          iconUrl: '/images/what/help-icon-coin.svg',
          title: t('listThreeItemFourTitle', {
            fallback: 'Financial Systems & Management',
          }),
          subtitle: t('listThreeItemFourSubtitle', {
            fallback:
              'Create financial systems and reporting structures that provide clarity and allow you to make data-driven decisions.',
          }),
        },
        {
          id: 'list-three-item-five',
          iconUrl: '/images/what/help-icon-people.svg',
          title: t('listThreeItemFiveTitle', {
            fallback: 'Project Management Frameworks',
          }),
          subtitle: t('listThreeItemFiveSubtitle', {
            fallback:
              'Establish project management practices and systems that allow your team to execute efficiently, stay on track, and meet deadlines.',
          }),
        },
        {
          id: 'list-three-item-six',
          iconUrl: '/images/what/help-icon-setting.svg',
          title: t('listThreeItemSixTitle', {
            fallback: 'Team Collaboration Tools & Platforms',
          }),
          subtitle: t('listThreeItemSixSubtitle', {
            fallback:
              'Implement tools and platforms that improve team communication, collaboration, and accountability.',
          }),
        },
        {
          id: 'list-three-item-seven',
          iconUrl: '/images/what/help-icon-maximize-4.svg',
          title: t('listThreeItemSevenTitle', {
            fallback: 'Scalability Assessment',
          }),
          subtitle: t('listThreeItemSevenSubtitle', {
            fallback:
              'Evaluate your current systems to identify opportunities to scale effectively without compromising quality or customer experience.',
          }),
        },
        {
          id: 'list-three-item-eight',
          iconUrl: '/images/what/help-icon-shield-cross.svg',
          title: t('listThreeItemEightTitle', {
            fallback: 'Risk Management Systems',
          }),
          subtitle: t('listThreeItemEightSubtitle', {
            fallback:
              'Develop systems to identify, assess, and mitigate risks to your business, ensuring long-term sustainability.',
          }),
        },
        {
          id: 'list-three-item-nine',
          iconUrl: '/images/what/help-icon-okb.svg',
          title: t('listThreeItemNineTitle', {
            fallback: 'Business Continuity Planning',
          }),
          subtitle: t('listThreeItemNineSubtitle', {
            fallback:
              'Create contingency plans to ensure your business can continue operating smoothly in the face of unforeseen challenges.',
          }),
        },
      ],
    },
    {
      id: 'tab4',
      title: t('tabFourTitle', {
        fallback: 'Growth Strategy',
      }),
      content: {
        number: '04',
        mainSubtitle: t('tabFourMainSubtitle', {
          fallback: 'Scaling your business requires',
        }),
        mainSubtitleBold: t('tabFourMainSubtitleBold', {
          fallback: 'focused effort',
        }),
        mainSubtitlePartTwo: t('tabFourMainSubtitleBoldTwo', {
          fallback:
            'on the right opportunities. We help you identify high-potential areas for growth, develop targeted strategies, and manage the risks involved with scaling.',
        }),
      },
      list: [
        {
          id: 'list-four-item-one',
          iconUrl: '/images/what/help-icon-status-up.svg',
          title: t('listFourItemOneTitle', {
            fallback: 'Growth Mapping & Goal Setting',
          }),
          subtitle: t('listFourItemOneSubtitle', {
            fallback:
              'Define your long-term growth objectives and identify the key milestones to achieve them.',
          }),
        },
        {
          id: 'list-four-item-two',
          iconUrl: '/images/what/help-icon-programming-arrow.svg',
          title: t('listFourItemTwoTitle', {
            fallback: 'Scalable Process Development',
          }),
          subtitle: t('listFourItemTwoSubtitle', {
            fallback:
              'Build and refine processes that can scale with your business, enabling you to expand without sacrificing quality or service.',
          }),
        },
        {
          id: 'list-four-item-three',
          iconUrl: '/images/what/help-icon-maximize.svg',
          title: t('listFourItemThreeTitle', {
            fallback: 'Market Expansion & Diversification',
          }),
          subtitle: t('listFourItemThreeSubtitle', {
            fallback:
              'Identify new markets or verticals for expansion and help you diversify your offerings to increase revenue streams.',
          }),
        },
        {
          id: 'list-four-item-four',
          iconUrl: '/images/what/help-icon-data.svg',
          title: t('listFourItemFourTitle', {
            fallback: 'Brand Amplification Strategies',
          }),
          subtitle: t('listFourItemFourSubtitle', {
            fallback:
              'Implement strategies to increase brand visibility, drive awareness, and enhance customer engagement.',
          }),
        },
        {
          id: 'list-four-item-five',
          iconUrl: '/images/what/help-icon-user-octagon.svg',
          title: t('listFourItemFiveTitle', {
            fallback: 'Customer Acquisition Strategy',
          }),
          subtitle: t('listFourItemFiveSubtitle', {
            fallback:
              'Develop targeted strategies for acquiring new customers through digital marketing, sales, and partnerships.',
          }),
        },
        {
          id: 'list-four-item-six',
          iconUrl: '/images/what/help-icon-receipt-discount.svg',
          title: t('listFourItemSixTitle', {
            fallback: 'Sales Strategy & Funnel Optimization',
          }),
          subtitle: t('listFourItemSixSubtitle', {
            fallback:
              'Build effective sales strategies and optimize your sales funnel to convert leads into long-term clients.',
          }),
        },
        {
          id: 'list-four-item-seven',
          iconUrl: '/images/what/help-icon-share.svg',
          title: t('listFourItemSevenTitle', {
            fallback: 'Partnership Development',
          }),
          subtitle: t('listFourItemSevenSubtitle', {
            fallback:
              'Identify potential strategic partnerships and help you navigate the process of building strong, mutually beneficial relationships.',
          }),
        },
        {
          id: 'list-four-item-eight',
          iconUrl: '/images/what/help-icon-favorite-chart.svg',
          title: t('listFourItemEightTitle', {
            fallback: 'Performance Marketing Strategy',
          }),
          subtitle: t('listFourItemEightSubtitle', {
            fallback:
              'Implement a data-driven marketing strategy to maximize ROI, using channels like Google Ads, Facebook, SEO, and content marketing.',
          }),
        },
        {
          id: 'list-four-item-nine',
          iconUrl: '/images/what/help-icon-home-trend-up.svg',
          title: t('listFourItemNineTitle', {
            fallback: 'Operational Efficiency for Scaling',
          }),
          subtitle: t('listFourItemNineSubtitle', {
            fallback:
              'Identify bottlenecks in your operations and help you refine systems to scale seamlessly.',
          }),
        },
        {
          id: 'list-four-item-ten',
          iconUrl: '/images/what/help-icon-calendar-edit.svg',
          title: t('listFourItemTenTitle', {
            fallback: 'Financial Planning for Growth',
          }),
          subtitle: t('listFourItemTenSubtitle', {
            fallback:
              'Develop financial strategies that support growth, including cash flow management, budgeting, and investment planning.',
          }),
        },
        {
          id: 'list-four-item-eleven',
          iconUrl: '/images/what/help-icon-crown-2.svg',
          title: t('listFourItemElevenTitle', {
            fallback: 'Leadership Development & Team Scaling',
          }),
          subtitle: t('listFourItemElevenSubtitle', {
            fallback:
              'Prepare your leadership team and talent pool for growth by providing coaching, training, and support as you scale.',
          }),
        },
        {
          id: 'list-four-item-twelve',
          iconUrl: '/images/what/help-icon-ruler.svg',
          title: t('listFourItemTwelveTitle', {
            fallback: 'Metrics & KPIs for Growth',
          }),
          subtitle: t('listFourItemTwelveSubtitle', {
            fallback:
              'Define and track key performance indicators (KPIs) to monitor progress and adjust your growth strategy accordingly.',
          }),
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className={styles.what_help}>
      <div className={'container'}>
        <div className={styles.what_help__top}>
          <h2 className={styles.what_help__title}>
            {/*{t('title1', { fallback: 'WHAT WE HELP WITH' })}*/}
            WHAT WE HELP WITH
          </h2>

          <div className={styles.what_help__tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.what_help__tab} ${activeTab === tab.id ? styles.what_help__tab_active : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.what_help__tabs_content}>
          {tabs.map(
            (tab) =>
              tab.id === activeTab && (
                <div key={tab.id}>
                  <div className={styles.what_help__tabs_row}>
                    <div className={styles.what_help__tabs_left_column}>
                      <span className={styles.what_help__tabs_left_column_number}>
                        {tab.content.number}
                      </span>

                      <p className={styles.what_help__tabs_left_column_title}>{tab.title}</p>

                      <p className={styles.what_help__tabs_left_column_subtitle}>
                        {tab.content.mainSubtitle}{' '}
                        {tab.content.mainSubtitleBold && (
                          <>
                            <strong>{tab.content.mainSubtitleBold}</strong>{' '}
                          </>
                        )}
                        {tab.content.mainSubtitlePartTwo && <>{tab.content.mainSubtitlePartTwo}</>}
                      </p>

                      <Link href={'pricing'} className={styles.what_help__tabs_left_column_link}>
                        Order now
                      </Link>
                    </div>

                    <ul className={styles.what_help__tabs_right_column}>
                      {tab.list?.map((tabListItem) => (
                        <li
                          key={tabListItem.id}
                          className={styles.what_help__tabs_right_column_item}
                        >
                          <div className={styles.what_help__tabs_right_column_item_icon}>
                            <Image src={tabListItem.iconUrl} alt="Icon" width={24} height={24} />
                          </div>
                          <h3 className={styles.what_help__tabs_right_column_item_title}>
                            {tabListItem.title}
                          </h3>
                          <p className={styles.what_help__tabs_right_column_item_subtitle}>
                            {tabListItem.subtitle}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};
