'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ClientsList.module.scss';

export const ClientsList = () => {
  const t = useTranslations('clientsList');

  const clientsCases = [
    {
      id: 'client-one',
      name: t('clientOneName', {
        fallback: 'Emily Jacob',
      }),
      job: t('clientOneJob', {
        fallback: 'Reconnected Life',
      }),

      challenge: {
        description: t('clientOneChallengeDescriptionPartOne', {
          fallback:
            'Emily had a strong passion for helping individuals navigate difficult life experiences, but her brand lacked',
        }),
        description1: t('clientOneChallengeDescriptionBoldOne', {
          fallback: 'clarity',
        }),
        description2: t('clientOneChallengeDescriptionPartTwo', {
          fallback: 'and',
        }),
        description3: t('clientOneChallengeDescriptionBoldTwo', {
          fallback: 'visibility.',
        }),
        description4: t('clientOneChallengeDescriptionPartThree', {
          fallback:
            'Despite her expertise in providing personal coaching and support, she struggled with reaching the right audience, resulting in low engagement and limited growth.',
        }),
      },

      solution: {
        description: t('clientOneSolutionDescriptionPartOne', {
          fallback: 'We helped Emily refine her',
        }),
        description1: t('clientOneSolutionDescriptionBoldOne', {
          fallback: 'brand positioning',
        }),
        description2: t('clientOneSolutionDescriptionPartTwo', {
          fallback: 'by',
        }),
        description3: t('clientOneSolutionDescriptionBoldTwo', {
          fallback: 'clearly communicating her mission',
        }),
        description4: t('clientOneSolutionDescriptionPartThree', {
          fallback: "and aligning her offer with her audience's needs. We worked on improving her",
        }),
        description5: t('clientOneSolutionDescriptionBoldThree', {
          fallback: 'website design',
        }),
        description6: t('clientOneSolutionDescriptionPartFour', {
          fallback: 'to enhance the user experience and build trust. Additionally, we implemented',
        }),
        description7: t('clientOneSolutionDescriptionBoldFour', {
          fallback: 'a content strategy',
        }),
        description8: t('clientOneSolutionDescriptionPartFive', {
          fallback:
            'that allowed Emily to engage more deeply with her audience and build stronger client relationships.',
        }),
      },

      testimonial: {
        quote:
          'Within a month of launching my new brand, I was featured in the press and on TV. The clear brand direction has given me the confidence to step forward and truly impact my clients.',
        position: t('clientOnePosition', {
          fallback: 'Founder of Reconnected Life',
        }),
      },

      outcome: {
        results: [
          {
            title: t('clientOneOutcomeItemOneTitle', {
              fallback: 'Increased visibility',
            }),
            description:
              "Emily's brand became more visible across multiple platforms, including press and TV features.",
          },
          {
            title: t('clientOneOutcomeItemTwoTitle', {
              fallback: 'Improved engagement',
            }),
            description: t('clientOneOutcomeItemTwoDescriptionPartOne', {
              fallback:
                'Her message resonated more clearly with her audience, leading to higher engagement on social media and other channels',
            }),
          },
          {
            title: t('clientOneOutcomeItemThreeTitle', {
              fallback: 'Measurable growth',
            }),
            description: t('clientOneOutcomeItemThreeDescriptionPartOne', {
              fallback:
                'Emily saw an increase in client inquiries and conversions, with a more robust pipeline of potential clients who were aligned with her work',
            }),
          },
        ],
      },
    },
    {
      id: 'client-two',
      name: t('clientTwoName', {
        fallback: 'Michael Turner',
      }),
      job: t('clientTwoJob', {
        fallback: 'High-Performance Coach',
      }),

      challenge: {
        description: t('clientTwoChallengeDescriptionPartOne', {
          fallback:
            'Michael was a well-respected coach in his niche, but he had a scattered approach to attracting clients and didn’t have a coherent',
        }),
        description1: t('clientTwoChallengeDescriptionBoldOne', {
          fallback: 'growth strategy.',
        }),
        description2: t('clientTwoChallengeDescriptionPartTwo', {
          fallback: 'His business lacked',
        }),
        description3: t('clientTwoChallengeDescriptionBoldTwo', {
          fallback: 'focus,',
        }),
        description4: t('clientTwoChallengeDescriptionPartThree', {
          fallback:
            'and he struggled to find a way to make his brand stand out in a competitive market.',
        }),
      },

      solution: {
        description: t('clientTwoSolutionDescriptionPartOne', {
          fallback: 'We worked with Michael to',
        }),
        description1: t('clientTwoSolutionDescriptionBoldOne', {
          fallback: 'refine his positioning,',
        }),
        description2: t('clientTwoSolutionDescriptionPartTwo', {
          fallback: 'highlighting his',
        }),
        description3: t('clientTwoSolutionDescriptionBoldTwo', {
          fallback: 'unique coaching approach',
        }),
        description4: t('clientTwoSolutionDescriptionPartThree', {
          fallback:
            'and crafting clear messaging that resonated with his ideal clients. We also helped him set up systems for',
        }),
        description5: t('clientTwoSolutionDescriptionBoldThree', {
          fallback: 'client onboarding',
        }),
        description6: t('clientTwoSolutionDescriptionPartFour', {
          fallback: 'and',
        }),
        description7: t('clientTwoSolutionDescriptionBoldFour', {
          fallback: 'follow-up,',
        }),
        description8: t('clientTwoSolutionDescriptionPartFive', {
          fallback: 'ensuring that each client received the right experience from start to finish.',
        }),
      },

      testimonial: {
        quote:
          'Axelvior helped me focus on what mattered most. Their structured approach allowed me to refine my brand and streamline my business, which led to more clients and smoother operations.',
        position: t('clientTwoPosition', {
          fallback: 'High-Performance Coach',
        }),
      },

      outcome: {
        results: [
          {
            title: t('clientTwoOutcomeItemOneTitle', {
              fallback: 'Clear brand direction',
            }),
            description: 'Michael now stands out in his niche with a clear and consistent message',
          },
          {
            title: t('clientTwoOutcomeItemTwoTitle', {
              fallback: 'Operational efficiency',
            }),
            description: t('clientTwoOutcomeItemTwoDescriptionPartOne', {
              fallback:
                'With streamlined systems in place, he saved hours of administrative work each week',
            }),
          },
          {
            title: t('clientTwoOutcomeItemThreeTitle', {
              fallback: 'Increased client retention',
            }),
            description: t('clientTwoOutcomeItemThreeDescriptionPartOne', {
              fallback:
                'Improved client experience led to more referrals and long-term relationships',
            }),
          },
        ],
      },
    },
    {
      id: 'client-three',
      name: t('clientThreeName', {
        fallback: 'Sarah Jenkins',
      }),
      job: t('clientThreeJob', {
        fallback: 'The Plant Project',
      }),

      challenge: {
        description: t('clientThreeChallengeDescriptionPartOne', {
          fallback:
            'Sarah was passionate about sustainable plant-based living, but her online store and community lacked',
        }),
        description1: t('clientThreeChallengeDescriptionBoldOne', {
          fallback: 'structure.',
        }),
        description2: t('clientThreeChallengeDescriptionPartTwo', {
          fallback:
            'Despite having a strong product, she wasn’t reaching the right audience and was struggling with',
        }),
        description3: t('clientThreeChallengeDescriptionBoldTwo', {
          fallback: 'inconsistent marketing,',
        }),
        description4: t('clientThreeChallengeDescriptionPartThree', {
          fallback: 'and',
        }),
        description5: t('clientThreeChallengeDescriptionBoldThree', {
          fallback: 'low website conversion rates.',
        }),
      },

      solution: {
        description: t('clientThreeSolutionDescriptionPartOne', {
          fallback: 'We began by analyzing Sarah’s',
        }),
        description1: t('clientThreeSolutionDescriptionBoldOne', {
          fallback: 'target market,',
        }),
        description2: t('clientThreeSolutionDescriptionPartTwo', {
          fallback: 'helping her clarify her',
        }),
        description3: t('clientThreeSolutionDescriptionBoldTwo', {
          fallback: 'brand positioning',
        }),
        description4: t('clientThreeSolutionDescriptionPartThree', {
          fallback: 'and',
        }),
        description5: t('clientThreeSolutionDescriptionBoldThree', {
          fallback: 'customer journey.',
        }),
        description6: t('clientThreeSolutionDescriptionPartFour', {
          fallback: 'We then worked on',
        }),
        description7: t('clientThreeSolutionDescriptionBoldFour', {
          fallback: 'optimizing her website',
        }),
        description8: t('clientThreeSolutionDescriptionPartFive', {
          fallback: 'for better conversion, including',
        }),
        description9: t('clientThreeSolutionDescriptionBoldFive', {
          fallback: 'SEO',
        }),
        description10: t('clientThreeSolutionDescriptionPartSix', {
          fallback: 'strategies to attract the right customers. We also developed a',
        }),
        description11: t('clientThreeSolutionDescriptionBoldSix', {
          fallback: 'social media content calendar',
        }),
        description12: t('clientThreeSolutionDescriptionPartSeven', {
          fallback: 'to maintain high engagement.',
        }),
      },

      testimonial: {
        quote:
          'The improvements we made to my website and marketing strategy have been game-changers. I’m seeing more traffic, better engagement, and higher sales. Axelvior helped me organize and prioritize my efforts so I could move forward with confidence.',
        position: t('clientThreePosition', {
          fallback: 'Founder of The Plant Project',
        }),
      },

      outcome: {
        results: [
          {
            title: t('clientThreeOutcomeItemOneTitle', {
              fallback: 'Increased traffic',
            }),
            description:
              'Her website traffic grew by 40% within 2 months due to better SEO practices',
          },
          {
            title: t('clientThreeOutcomeItemTwoTitle', {
              fallback: 'Higher conversions',
            }),
            description: t('clientThreeOutcomeItemTwoDescriptionPartOne', {
              fallback: 'Conversion rate on product pages increased by 25%',
            }),
          },
          {
            title: t('clientThreeOutcomeItemThreeTitle', {
              fallback: 'Stronger community',
            }),
            description: t('clientThreeOutcomeItemThreeDescriptionPartOne', {
              fallback:
                'Sarah’s social media community grew, and her business now has a loyal following',
            }),
          },
        ],
      },
    },
    {
      id: 'client-four',
      name: t('clientFourName', {
        fallback: 'David Lee',
      }),
      job: t('clientFourJob', {
        fallback: 'Digital Marketing Expert',
      }),

      challenge: {
        description: t('clientFourChallengeDescriptionPartOne', {
          fallback: 'David had been freelancing for years and wanted to transition into',
        }),
        description1: t('clientFourChallengeDescriptionBoldOne', {
          fallback: 'consulting',
        }),
        description2: t('clientFourChallengeDescriptionPartTwo', {
          fallback: 'and create',
        }),
        description3: t('clientFourChallengeDescriptionBoldTwo', {
          fallback: 'a scalable business model.',
        }),
        description4: t('clientFourChallengeDescriptionPartThree', {
          fallback: 'He lacked the structure to effectively scale his services and build',
        }),
        description5: t('clientFourChallengeDescriptionBoldThree', {
          fallback: 'a strong brand presence',
        }),
        description6: t('clientFourChallengeDescriptionBoldFour', {
          fallback: 'in the market.',
        }),
      },

      solution: {
        description: t('clientFourSolutionDescriptionPartOne', {
          fallback: 'We helped David create',
        }),
        description1: t('clientFourSolutionDescriptionBoldOne', {
          fallback: 'a brand identity',
        }),
        description2: t('clientFourSolutionDescriptionPartTwo', {
          fallback: 'that reflected his expertise in digital marketing. We refined his',
        }),
        description3: t('clientFourSolutionDescriptionBoldTwo', {
          fallback: 'service offering,',
        }),
        description4: t('clientFourSolutionDescriptionPartThree', {
          fallback: 'making it clear and targeted. Axelvior also helped David build out',
        }),
        description5: t('clientFourSolutionDescriptionBoldThree', {
          fallback: 'a client acquisition strategy,',
        }),
        description6: t('clientFourSolutionDescriptionPartFour', {
          fallback: 'leveraging',
        }),
        description7: t('clientFourSolutionDescriptionBoldFour', {
          fallback: 'content marketing',
        }),
        description8: t('clientFourSolutionDescriptionPartFive', {
          fallback: 'and',
        }),
        description9: t('clientFourSolutionDescriptionBoldFive', {
          fallback: 'paid advertising',
        }),
        description10: t('clientFourSolutionDescriptionPartSix', {
          fallback: 'to attract high-value clients.',
        }),
        description11: null,
        description12: null,
      },

      testimonial: {
        quote:
          'Axelvior’s strategic guidance allowed me to step out of the freelancer mindset and build a consulting business that’s scalable. Their insights and expertise were exactly what I needed to make the transition.',
        position: t('clientFourPosition', {
          fallback: 'Digital Marketing Consultant',
        }),
      },

      outcome: {
        results: [
          {
            title: t('clientFourOutcomeItemOneTitle', {
              fallback: 'Brand positioning',
            }),
            description:
              'David successfully transitioned from freelance work to consulting, building a brand that attracted high-level clients',
          },
          {
            title: t('clientFourOutcomeItemTwoTitle', {
              fallback: 'New client acquisition',
            }),
            description: t('clientFourOutcomeItemTwoDescriptionPartOne', {
              fallback:
                'Through refined marketing efforts, David now has a predictable flow of clients',
            }),
          },
          {
            title: t('clientFourOutcomeItemThreeTitle', {
              fallback: 'Scalable growth',
            }),
            description: t('clientFourOutcomeItemThreeDescriptionPartOne', {
              fallback:
                'His new systems and services are ready to scale, setting him up for sustainable growth',
            }),
          },
        ],
      },
    },
  ];

  return (
    <motion.section
      className={styles.clients_list}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container">
        {clientsCases?.map((item) => (
          <div key={item.id} className={styles.clients_list__row}>
            <div className={styles.clients_list__row_column}>
              <h2 className={styles.clients_list__row_title}>{item.name}</h2>

              <p className={styles.clients_list__row_job}>{item.job}</p>
            </div>

            <div className={styles.clients_list__row_column_two}>
              <div className={styles.clients_list__row_column_two_item_one}>
                <h3 className={styles.clients_list__row_column_title}>
                  {t('challengeTitle', {
                    fallback: 'The challenge:',
                  })}
                </h3>

                <p className={styles.clients_list__row_column_description}>
                  {item.challenge.description}
                  {item.challenge.description1 && (
                    <strong>{item.challenge.description1}</strong>
                  )}{' '}
                  {item.challenge.description2 && item.challenge.description2}{' '}
                  {item.challenge.description3 && <strong>{item.challenge.description3}</strong>}{' '}
                  {item.challenge.description4 && item.challenge.description4}{' '}
                  {item.challenge.description5 && <strong>{item.challenge.description5}</strong>}{' '}
                  {item.challenge.description6 && item.challenge.description6}
                </p>
              </div>

              <div className={styles.clients_list__row_column_two_item_two}>
                <h3 className={styles.clients_list__row_column_title}>
                  {t('solutionTitle', {
                    fallback: 'What we did:',
                  })}
                </h3>

                <p className={styles.clients_list__row_column_description}>
                  {item.solution.description && item.solution.description}{' '}
                  {item.solution.description1 && <strong>{item.solution.description1}</strong>}{' '}
                  {item.solution.description2 && item.solution.description2}{' '}
                  {item.solution.description3 && <strong>{item.solution.description3}</strong>}{' '}
                  {item.solution.description4 && item.solution.description4}{' '}
                  {item.solution.description5 && <strong>{item.solution.description5}</strong>}{' '}
                  {item.solution.description6 && item.solution.description6}{' '}
                  {item.solution.description7 && <strong>{item.solution.description7}</strong>}{' '}
                  {item.solution.description8 && item.solution.description8}{' '}
                  {item.solution.description9 && <strong>{item.solution.description9}</strong>}{' '}
                  {item.solution.description10 && item.solution.description10}{' '}
                  {item.solution.description11 && <strong>{item.solution.description11}</strong>}{' '}
                  {item.solution.description12 && item.solution.description12}
                </p>
              </div>
            </div>

            <div className={styles.clients_list__row_column}>
              <blockquote className={styles.clients_list__row_column_quote_wrapper}>
                <p className={styles.clients_list__row_column_quote}>{item.testimonial.quote}</p>
                <cite className={styles.clients_list__row_column_autor}>
                  — {item.name}, {item.testimonial.position}
                </cite>
              </blockquote>
            </div>

            <div className={styles.clients_list__row_column_four}>
              <h3 className={styles.clients_list__row_column_title}>
                {t('outcomeTitle', {
                  fallback: 'The outcome:',
                })}
              </h3>

              <ul className={styles.clients_list__row_column_four_list}>
                {item.outcome.results.map((result, index) => (
                  <li key={index} className={styles.clients_list__row_column_description}>
                    <strong>{result.title}:</strong> {result.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
