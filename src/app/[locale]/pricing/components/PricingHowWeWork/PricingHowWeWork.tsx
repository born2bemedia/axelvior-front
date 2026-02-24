"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./PricingHowWeWork.module.scss";

interface StepItem {
  boldLabel: string;
  text: string;
}

interface StepCardProps {
  title: string;
  boldIntro: string;
  img: string;
  description: string;
  items: StepItem[];
  variant: "dark" | "teal" | "cyan" | "azure";
}

const StepCard = ({
  title,
  boldIntro,
  img,
  description,
  items,
  variant,
}: StepCardProps) => (
  <motion.div
    className={`${styles.card} ${styles[`card--${variant}`]}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={img} alt={title} />
    <div className={styles.card__content}>
      <div className={styles.card__left}>
        <h3 className={styles.card__title}>{title}</h3>
        <div className={styles.card__desc}>
          <p className={styles.card__bold_intro}>{boldIntro}</p>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.card__right}>
        <p className={styles.card__what_next}>What happens next:</p>
        <div className={styles.card__items}>
          {items.map((item, i) => (
            <div key={i} className={styles.card__item}>
              <span className={styles.card__plus}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M6.56014 0.657132L6.1081 4.80302C6.03361 5.48464 5.48464 6.03361 4.80302 6.1081L0.657136 6.56014L0 6.63156V8.13767L0.657136 8.2091L4.80302 8.66113C5.48464 8.73562 6.03361 9.28459 6.1081 9.96622L6.56014 14.1121L6.63156 14.7692H8.13767L8.2091 14.1121L8.66113 9.96622C8.73562 9.28459 9.28459 8.73562 9.96622 8.66113L14.1121 8.2091L14.7692 8.13766V6.63156L14.1121 6.56014L9.96622 6.1081C9.28459 6.03361 8.73562 5.48464 8.66113 4.80302L8.2091 0.657132L8.13766 0H6.63156L6.56014 0.657132Z"
                    fill="#0C4A58"
                  />
                </svg>
              </span>
              <p className={styles.card__item_text}>
                <strong>{item.boldLabel}</strong> {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export const PricingHowWeWork = () => {
  const t = useTranslations("pricingHowWeWork");

  const cards: StepCardProps[] = [
    {
      title: t("card1.title", { fallback: "Get in Touch" }),
      boldIntro: t("card1.boldIntro", {
        fallback: "Let's start the conversation.",
      }),
      img: "/images/pricing/how1.svg",
      description: t("card1.desc", {
        fallback:
          "The first step in our partnership is simple: reach out to us. Whether you're ready to dive into a full strategy overhaul or just need some guidance on your next steps, we're here to listen. In this stage, we'll get to know your business, your challenges, and your goals. You'll have the opportunity to share your vision, and we'll discuss how Axelvior can help you achieve it.",
      }),
      items: [
        {
          boldLabel: t("card1.item1Label", {
            fallback: "Submit a request:",
          }),
          text: t("card1.item1Text", {
            fallback:
              "Fill out a short form or contact us directly. We'll ask you a few key questions about your business, your goals, and any pain points you're facing.",
          }),
        },
        {
          boldLabel: t("card1.item2Label", {
            fallback: "Initial discussion:",
          }),
          text: t("card1.item2Text", {
            fallback:
              "We'll set up a call or meeting to dig deeper into your needs. This is your opportunity to ask questions, share your story, and outline the areas where you need support.",
          }),
        },
      ],
      variant: "dark",
    },
    {
      title: t("card2.title", { fallback: "Customized Plan" }),
      boldIntro: t("card2.boldIntro", {
        fallback: "We'll craft a strategy tailored to your unique needs.",
      }),
      img: "/images/pricing/how2.svg",
      description: t("card2.desc", {
        fallback:
          "After understanding your goals and challenges, we move to the planning phase. At Axelvior, we believe in creating bespoke strategies — no one-size-fits-all solutions. We'll work closely with you to design a personalized plan that reflects your business's specific situation and ambitions.",
      }),
      items: [
        {
          boldLabel: t("card2.item1Label", {
            fallback: "Strategy Development:",
          }),
          text: t("card2.item1Text", {
            fallback:
              "Our team of experts (including strategists, designers, and marketers) will analyze your current position and develop a comprehensive strategy that aligns with your goals. We'll focus on what matters most to you: scalability, sustainability, and clarity.",
          }),
        },
        {
          boldLabel: t("card2.item2Label", {
            fallback: "Detailed Plan:",
          }),
          text: t("card2.item2Text", {
            fallback:
              "You'll receive a clear and actionable plan, including recommended strategies for growth, positioning, and operational improvements. This document will serve as a roadmap for your business and will be the foundation for the next steps.",
          }),
        },
        {
          boldLabel: t("card2.item3Label", {
            fallback: "Collaborative Refinement:",
          }),
          text: t("card2.item3Text", {
            fallback:
              "After you've reviewed the plan, we'll collaborate with you to refine it. We'll ensure it addresses all your needs and that we're aligned on goals and expectations before we move forward.",
          }),
        },
      ],
      variant: "teal",
    },
    {
      title: t("card3.title", {
        fallback: "Implementation & Growth",
      }),
      boldIntro: t("card3.boldIntro", {
        fallback: "Turning strategy into actionable steps.",
      }),
      img: "/images/pricing/how3.svg",
      description: t("card3.desc", {
        fallback:
          "Once the strategy is approved, we move into the implementation phase. We don't just hand you a plan and walk away. At Axelvior, we believe in hands-on involvement to ensure that your strategy is executed effectively. Our team will guide you through each phase of the plan, helping you navigate the challenges of growth while ensuring your vision remains intact.",
      }),
      items: [
        {
          boldLabel: t("card3.item1Label", {
            fallback: "Execution:",
          }),
          text: t("card3.item1Text", {
            fallback:
              "We'll work alongside your team to implement the strategy. Whether it's optimizing your systems, refining your messaging, or setting up new workflows, we'll ensure everything aligns with the roadmap we've created.",
          }),
        },
        {
          boldLabel: t("card3.item2Label", {
            fallback: "Ongoing Support:",
          }),
          text: t("card3.item2Text", {
            fallback:
              "Scaling requires continuous adaptation. As your business grows, we'll provide regular check-ins and performance assessments to ensure that the strategy is yielding the results you expect. If adjustments are needed, we're here to make data-driven changes.",
          }),
        },
        {
          boldLabel: t("card3.item3Label", {
            fallback: "Growth Management:",
          }),
          text: t("card3.item3Text", {
            fallback:
              "Our focus is not just on short-term wins but long-term growth. We will monitor key metrics, support marketing strategies, and ensure the foundations we've laid are strong enough to support continued success.",
          }),
        },
      ],
      variant: "cyan",
    },
    {
      title: t("card4.title", {
        fallback: "Continuous Improvement & Scaling",
      }),
      boldIntro: t("card4.boldIntro", {
        fallback: "Beyond the initial implementation.",
      }),
      img: "/images/pricing/how4.svg",
      description: t("card4.desc", {
        fallback:
          "At Axelvior, we don't believe in a \"one-and-done\" approach. As your business grows, new challenges and opportunities will arise. Our job is to help you adapt and scale smoothly. This ongoing relationship ensures that your business remains flexible, innovative, and prepared for what's next.",
      }),
      items: [
        {
          boldLabel: t("card4.item1Label", {
            fallback: "Regular Evaluations:",
          }),
          text: t("card4.item1Text", {
            fallback:
              "We'll assess performance at regular intervals, identifying opportunities to refine the strategy and make any necessary adjustments. We will help you pivot when needed and ensure you're always progressing toward your long-term goals.",
          }),
        },
        {
          boldLabel: t("card4.item2Label", {
            fallback: "Future Planning:",
          }),
          text: t("card4.item2Text", {
            fallback:
              "As you grow, we'll help you plan for new milestones and take on new challenges. Our strategic support ensures that your business is always ready for the next stage.",
          }),
        },
      ],
      variant: "azure",
    },
  ];

  return (
    <section className={styles.how}>
      <div className={styles.how__wrapper}>
        <div className="container">
          <motion.div
            className={styles.how__header}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.how__heading}>
              {t("heading", { fallback: "How We Work" })}
            </h2>
            <p className={styles.how__subtitle}>
              {t("subtitle", {
                fallback:
                  "Our goal is to work collaboratively with you, ensuring that every step of the process is clear, personalized, and aligned with your vision. We understand that scaling a business is a journey, and we are here to guide you through each stage. Below is our step-by-step approach to working together, ensuring that every decision is purposeful and strategic.",
              })}
            </p>
          </motion.div>

          <div className={styles.how__grid}>
            {cards.map((card) => (
              <StepCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
