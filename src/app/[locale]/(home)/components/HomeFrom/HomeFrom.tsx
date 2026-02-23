"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./HomeFrom.module.scss";

const imgDots =
  "/images/home/imgDots.svg";

export const HomeFrom = () => {
  const t = useTranslations("homeFrom");

  return (
    <section className={styles.home_from}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imgDots} alt="" className={styles.home_from__dots} aria-hidden="true" />
      <div className="container">
        <div className={styles.home_from__inner}>
          <motion.div
            className={styles.home_from__content}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.home_from__title}>{t("title", { fallback: "From motion to momentum." })}</h2>
            <p className={styles.home_from__subtitle}>{t("subtitle", { fallback: "Activity creates motion. Structure creates momentum." })}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
