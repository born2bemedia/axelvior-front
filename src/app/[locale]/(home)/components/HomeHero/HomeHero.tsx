"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { useFormsPopup } from "@/features/forms";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { Button } from "@/shared/ui/kit/button/Button";

import styles from "./HomeHero.module.scss";

export const HomeHero = () => {
  const t = useTranslations("homeHero");
  const { openMarketResearch } = useFormsPopup();

  return (
    <>
      <section className={styles.home_hero}>
        <div className={"container"}>
          <div className={styles.home_hero__content}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("title1", {
                fallback: "Clarity changes everything.",
              })}
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("subtitle", {
                fallback: "Effort stalls when it’s spread too thin.",
              })}{" "}
              <br />
              {t("subtitle2", {
                fallback:
                  "Axelvior brings structure to ambition, turning ideas, skills, and experience into steady, focused growth.",
              })}
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.home_hero__buttons}
            >
              <Button variant="blue" type="button" onClick={openMarketResearch}>
                {t("button1", { fallback: "Submit a request" })}
              </Button>
              <Button
                variant="bordered"
                type="button"
                onClick={openMarketResearch}
              >
                {t("button2", { fallback: "See how we work" })}
              </Button>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.home_hero__image}
            >
              <Image
                src="/images/home/hero.png"
                alt="Hero"
                width={1312}
                height={500}
                className={styles.desktop_image}
              />
              <Image
                src="/images/home/heroMob.png"
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
