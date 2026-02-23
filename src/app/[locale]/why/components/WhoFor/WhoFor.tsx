"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./WhoFor.module.scss";

const imgHero = "/images/who/for-hero.png";

export const WhoFor = () => {
  const t = useTranslations("whoFor");

  return (
    <section className={styles.who_for}>
      <div className={styles.who_for__wrapper}>
        <div className={"container"}>
          <motion.h2
            className={styles.who_for__heading}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t("heading", {
              fallback: "Axelvior is for entrepreneurs who:",
            })}
          </motion.h2>

          <div className={styles.who_for__content}>
            <div className={styles.who_for__image}>
              <img src={imgHero} alt="" />
            </div>

            <div className={styles.who_for__grid}>
              <div className={styles.who_for__row}>
                <div className={styles.who_for__card_filled}>
                  <p>
                    {t("card1", {
                      fallback:
                        "Carry full ownership of what they build — from concept to outcome",
                    })}
                  </p>
                </div>
                <div className={styles.who_for__card_bordered}>
                  <p>
                    {t("card2", {
                      fallback:
                        "Operate without committees or approval layers — making final decisions themselves",
                    })}
                  </p>
                </div>
              </div>
              <div className={styles.who_for__row}>
                <div className={styles.who_for__card_filled}>
                  <p>
                    {t("card3", {
                      fallback:
                        "Take responsibility for both results and direction, understanding that the two must align",
                    })}
                  </p>
                </div>
                <div className={styles.who_for__card_bordered}>
                  <p>
                    {t("card4", {
                      fallback:
                        "Recognize that growth brings new challenges, constraints, and risks that require new approaches",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.p
            className={styles.who_for__footer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t("footer", {
              fallback:
                "Our work isn't about titles or headcount. It's about ownership — intellectual, strategic, and personal.",
            })}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
