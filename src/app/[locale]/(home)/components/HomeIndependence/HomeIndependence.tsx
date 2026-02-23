"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./HomeIndependence.module.scss";

export const HomeIndependence = () => {
  const t = useTranslations("homeIndependence");

  return (
    <>
      <section className={styles.home_independence}>
        <Image
          src="/images/home/independence1.svg"
          alt="Independence"
          width={350}
          height={350}
        />
        <Image
          src="/images/home/independence2.svg"
          alt="Independence"
          width={350}
          height={350}
        />
        <div className={styles.home_independence__wrapper}>
          <div className={"container"}>
            <div className={styles.home_independence__content}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {t("title1", {
                  fallback: "Independence creates freedom. ",
                })}{" "}
                <br />
                <span>
                  {t("title2", {
                    fallback: "It also creates friction.",
                  })}
                </span>
              </motion.h2>
              <motion.p>
                {t("subtitle1", {
                  fallback: "Working independently allows speed and control.",
                })}{" "}
                <br />
                {t("subtitle2", {
                  fallback:
                    "It also means that every structural weakness shows up faster.",
                })}{" "}
                <br />
                {t("subtitle3", {
                  fallback:
                    "At this stage, progress doesn’t come from working harder — it comes from thinking better about what you’re building.",
                })}
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
