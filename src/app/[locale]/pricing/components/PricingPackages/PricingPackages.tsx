"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { useFormsPopupStore } from "@/features/forms";
import { usePackages } from "@/features/solutions/lib/packages";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { Button } from "@/shared/ui/kit/button/Button";

import styles from "./PricingPackages.module.scss";

export const PricingPackages = () => {
  const t = useTranslations("pricingPackages");
  const packages = usePackages();
  const openRequest = useFormsPopupStore((state) => state.openRequest);

  const onClick = (name: string) => {
    openRequest(name);
  };
  return (
    <section className={styles.packages}>
      <div className={styles.packages__wrapper}>
        <div className="container">
          <motion.h2
            className={styles.packages__heading}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t("heading", { fallback: "Our Packages" })}
          </motion.h2>
          <div className={styles.packages__divider} />

          <div className={styles.packages__list}>
            {packages.map((pkg, idx) => (
              <div key={pkg.id}>
                {idx > 0 && <div className={styles.packages__divider} />}
                <div className={styles.packages__item}>
                  <motion.div
                    className={styles.packages__info}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                  >
                    <div className={styles.packages__info_text}>
                      <h3 className={styles.packages__name}>{pkg.name}</h3>
                      <div className={styles.packages__desc}>
                        <p className={styles.packages__bold_intro}>
                          {pkg.boldIntro}
                        </p>
                        <p>{pkg.description}</p>
                      </div>
                    </div>
                    <p className={styles.packages__price}>
                      {t("from", { fallback: "From" })} €
                      {pkg.price.toLocaleString("en-IE")}
                    </p>
                    <Button variant="white" type="button" onClick={() => onClick(pkg.name)}>
                      {pkg.cta}
                    </Button>
                  </motion.div>

                  <div className={styles.packages__includes}>
                    <motion.h4
                      className={styles.packages__includes_title}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                    >
                      {t("whatsIncluded", {
                        fallback: "What's included:",
                      })}
                    </motion.h4>
                    <div className={styles.packages__includes_list}>
                      {pkg.inheritsFrom && (
                        <div className={styles.packages__inherit_item}>
                          <strong>{pkg.inheritsFrom}</strong>
                        </div>
                      )}
                      {pkg.items.map((item, i) => (
                        <motion.div
                          key={i}
                          className={styles.packages__include_item}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={fadeInUp}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.icon}
                            alt=""
                            className={styles.packages__icon}
                          />
                          <div className={styles.packages__item_text}>
                            <strong>{item.title}</strong>
                            <span>{item.description}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
