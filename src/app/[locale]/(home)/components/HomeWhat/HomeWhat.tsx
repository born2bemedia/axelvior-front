"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./HomeWhat.module.scss";

const imgBannerBg =
  "/images/home/whatBannerBg.png";

export const HomeWhat = () => {
  const t = useTranslations("homeWhat");

  const cards = [
    {
      id: "strategic",
      title: t("card1Title", { fallback: "Strategic direction" }),
      items: [
        t("card1Item1", { fallback: "Clarifying priorities when multiple paths compete" }),
        t("card1Item2", { fallback: "Defining what deserves focus now — and what does not" }),
        t("card1Item3", { fallback: "Translating ambition into actionable direction" }),
      ],
      bg: "#000000",
      textColor: "#f1f6fd",
      dividerColor: "rgba(255,255,255,0.1)",
    },
    {
      id: "offer",
      title: t("card2Title", { fallback: "Offer and value structure" }),
      items: [
        t("card2Item1", { fallback: "Refining how your work creates value" }),
        t("card2Item2", { fallback: "Aligning effort with outcomes that actually convert" }),
        t("card2Item3", { fallback: "Strengthening coherence between skills, pricing, and positioning" }),
      ],
      bg: "#1888a2",
      textColor: "#f1f6fd",
      dividerColor: "rgba(255,255,255,0.1)",
    },
    {
      id: "positioning",
      title: t("card3Title", { fallback: "Positioning and narrative" }),
      items: [
        t("card3Item1", { fallback: "Articulating what makes your work distinct without exaggeration" }),
        t("card3Item2", { fallback: "Removing noise from messaging" }),
        t("card3Item3", { fallback: "Making your direction legible — to yourself first" }),
      ],
      bg: "#67e3ff",
      textColor: "#121012",
      dividerColor: "rgba(0,0,0,0.2)",
    },
    {
      id: "operational",
      title: t("card4Title", { fallback: "Operational foundations" }),
      items: [
        t("card4Item1", { fallback: "Structuring workflows, decision logic, and responsibilities" }),
        t("card4Item2", { fallback: "Reducing hidden complexity that slows momentum" }),
        t("card4Item3", { fallback: "Preparing systems for growth without premature scaling" }),
      ],
      bg: "#c4f0ff",
      textColor: "#121012",
      dividerColor: "rgba(0,0,0,0.2)",
    },
  ];

  return (
    <section className={styles.home_what}>
      <div className="container">
        <div className={styles.home_what__inner}>
          {/* Header */}
          <div className={styles.home_what__header}>
            <div className={styles.home_what__label_row}>
              <span className={styles.home_what__label}>{t("label", { fallback: "WHAT" })}</span>
            </div>
            <div className={styles.home_what__divider} />
          </div>

          {/* Heading + description */}
          <motion.div
            className={styles.home_what__intro}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.home_what__title}>
              {t("titlePre", { fallback: "What" })}{" "}
              <strong>{t("titleBold", { fallback: "Axelvior" })}</strong>{" "}
              {t("titlePost", { fallback: "actually does" })}
            </h2>
            <p>{t("desc1", { fallback: "Axelvior provides business development solutions focused on structure, positioning, and decision-making — where clarity has the highest leverage." })}</p>
            <p>{t("desc2", { fallback: "Our work is designed to reduce friction, sharpen intent, and turn effort into something that holds under pressure." })}</p>
          </motion.div>

          {/* Solutions grid */}
          <div className={styles.home_what__solutions}>
            <p className={styles.home_what__solutions_title}>{t("solutionsTitle", { fallback: "Our solutions typically include:" })}</p>
            <div className={styles.home_what__cards}>
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={styles.home_what__card}
                  style={{ backgroundColor: card.bg }}
                >
                  <div className={styles.home_what__card_content}>
                    <span
                      className={styles.home_what__card_title}
                      style={{ color: card.textColor }}
                    >
                      {card.title}
                    </span>
                    <ul className={styles.home_what__card_list}>
                      {card.items.map((item, i) => (
                        <li key={i} className={styles.home_what__card_item}>
                          <span
                            className={styles.home_what__card_item_divider}
                            style={{ backgroundColor: card.dividerColor }}
                          />
                          <div className={styles.home_what__card_item_row}>
                            <span
                              className={styles.home_what__card_plus}
                              style={{ color: card.textColor }}
                            >
                              +
                            </span>
                            <span
                              className={styles.home_what__card_item_text}
                              style={{ color: card.textColor }}
                            >
                              {item}
                            </span>
                          </div>
                        </li>
                      ))}
                      <li>
                        <span
                          className={styles.home_what__card_item_divider}
                          style={{ backgroundColor: card.dividerColor }}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Banner */}
          <motion.div
            className={styles.home_what__banner}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgBannerBg}
              alt=""
              className={styles.home_what__banner_bg}
            />
            <div className={styles.home_what__banner_overlay} />
            <div className={styles.home_what__banner_box}>
              <p>{t("bannerText1", { fallback: "We don't introduce complexity for the sake of sophistication. We remove unnecessary complexity so progress becomes repeatable." })}</p>
              <p>{t("bannerText2", { fallback: "Every engagement starts with understanding how things actually work now — not how they are supposed to look in theory." })}</p>
              <button className={styles.home_what__banner_btn}>
                {t("bannerBtn", { fallback: "Explore our solutions" })}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
