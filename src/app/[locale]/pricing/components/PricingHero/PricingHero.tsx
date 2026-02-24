"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./PricingHero.module.scss";

export const PricingHero = () => {
  const t = useTranslations("pricingHero");

  return (
    <>
      <section className={styles.pricing_hero}>
        <div className={"container"}>
          <div className={styles.pricing_hero__content}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("title1", {
                fallback: "Invest in your growth.",
              })}
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("title2", {
                fallback: "EXPLORE OUR PRICING & PLANS",
              })}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("subtitle", {
                fallback:
                  "We understand that each business has unique needs. Our pricing reflects the",
              })}{" "}
              <b>
                {t("subtitle2", {
                  fallback: "complexity",
                })}{" "}
              </b>
              {t("subtitle3", {
                fallback: "and",
              })}{" "}
              <b>
                {t("subtitle4", {
                  fallback: "customization",
                })}{" "}
              </b>
              {t("subtitle5", {
                fallback: "of our services. Below is an overview of the",
              })}{" "}
              <b>
                {t("subtitle6", {
                  fallback: "core services",
                })}{" "}
              </b>
              {t("subtitle7", {
                fallback: "we offer, including",
              })}
              <b>
                {t("subtitle8", {
                  fallback: "fixed prices",
                })}{" "}
              </b>
              {t("subtitle9", {
                fallback: "for specific solutions and",
              })}{" "}
              <b>
                {t("subtitle10", {
                  fallback: "flexible pricing",
                })}{" "}
              </b>
              {t("subtitle11", {
                fallback: "based on your unique requirements.",
              })}
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.why_hero__image}
            >
              <Image
                src="/images/why/hero.png"
                alt="Hero"
                width={1312}
                height={500}
                className={styles.desktop_image}
              />
              <Image
                src="/images/why/heroMob.png"
                alt="Hero"
                width={370}
                height={500}
                className={styles.mobile_image}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
