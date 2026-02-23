"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./HomeWhy.module.scss";

const imgIconLink =
  "/images/home/imgIconLink.svg";
const imgIconTrendUp =
  "/images/home/imgIconTrendUp.svg";
const imgIconHierarchy =
  "/images/home/imgIconHierarchy.svg";
const imgIconCube =
  "/images/home/imgIconCube.svg";

export const HomeWhy = () => {
  const t = useTranslations("homeWhy");

  const beliefs = [
    { icon: imgIconLink, title: t("belief1", { fallback: "Clarity is more valuable than acceleration" }) },
    { icon: imgIconTrendUp, title: t("belief2", { fallback: "Growth without intent creates fragility" }) },
    { icon: imgIconHierarchy, title: t("belief3", { fallback: "Structure should support freedom, not restrict it" }) },
    { icon: imgIconCube, title: t("belief4", { fallback: "Sustainable success is designed, not improvised" }) },
  ];

  return (
    <section className={styles.home_why}>
      <div className="container">
        <div className={styles.home_why__inner}>
          {/* Header */}
          <div className={styles.home_why__header}>
            <span className={styles.home_why__label}>{t("label", { fallback: "WHY" })}</span>
            <div className={styles.home_why__divider} />
          </div>

          {/* Main content */}
          <div className={styles.home_why__body}>
            <motion.div
              className={styles.home_why__intro}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className={styles.home_why__title}>{t("title", { fallback: "Why Axelvior exists" })}</h2>
              <p className={styles.home_why__desc}>{t("desc", { fallback: "Axelvior exists because many people build meaningful work between those assumptions — where generic guidance stops being useful, and improvisation becomes risky." })}</p>
            </motion.div>

            <motion.div
              className={styles.home_why__beliefs}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className={styles.home_why__beliefs_lead}>{t("beliefLead", { fallback: "We believe:" })}</p>
              <div className={styles.home_why__beliefs_grid}>
                {beliefs.map((belief, i) => (
                  <div key={i} className={styles.home_why__belief_item}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={belief.icon} alt="" width={24} height={24} />
                    <span className={styles.home_why__belief_title}>
                      {belief.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Blue banner */}
          <motion.div
            className={styles.home_why__banner}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className={styles.home_why__banner_content}>
              <h3 className={styles.home_why__banner_title}>{t("bannerTitle", { fallback: "Guiding your vision" })}</h3>
              <div className={styles.home_why__banner_text}>
                <p>{t("bannerText1", { fallback: "Axelvior does not exist to take control, replace judgment, or dictate direction." })}</p>
                <p>{t("bannerText2", { fallback: "We help you regain control over what you are building, by making direction visible, decisions deliberate, and progress intentional." })}</p>
              </div>
              <button className={styles.home_why__banner_btn}>
                {t("bannerBtn", { fallback: "Read the thinking behind our work" })}
              </button>
            </div>
            <div className={styles.home_why__banner_decoration} aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/home/banner_circle.svg" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
