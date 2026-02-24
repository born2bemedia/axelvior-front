"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { Button } from "@/shared/ui/kit/button/Button";

import styles from "./IdeasCta.module.scss";

export const IdeasCta = () => {
  const t = useTranslations("ideasCta");

  return (
    <>
      <section className={styles.ideas_cta}>
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
        <div className={styles.ideas_cta__wrapper}>
          <div className={"container"}>
            <div className={styles.ideas_cta__content}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {t("title1", {
                  fallback: "Ready to build a scalable business",
                })}{" "}
                <br />
                {t("title2", {
                  fallback: "with clarity and purpose?",
                })}
              </motion.h2>
              <motion.p>
                {t("subtitle1", {
                  fallback: "Start with a conversation today.",
                })}
              </motion.p>
              <Button variant="blue" url="#" target="_blank" type="link">
                {t("button", { fallback: "Submit a request" })}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
