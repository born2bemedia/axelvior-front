"use client";

import { useState } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./WhyTabs.module.scss";

const TABS = [
  { id: "clarity", label: "WHY CLARITY MATTERS" },
  { id: "structure", label: "WHY STRUCTURE IS KEY" },
  { id: "growth", label: "WHY FOCUS ON INTENTIONAL GROWTH" },
  { id: "commitment", label: "THE AXELVIOR COMMITMENT" },
  { id: "philosophy", label: "WHY THIS PHILOSOPHY WORKS" },
] as const;

const TAB_COLORS: Record<string, string> = {
  clarity: "#09234f",
  structure: "#0c4a58",
  growth: "#000829",
  commitment: "#384ce3",
  philosophy: "#09234f",
};

const TAB_ACCENT: Record<string, string> = {
  clarity: "#09234f",
  structure: "#0c4a58",
  growth: "#000829",
  commitment: "#384ce3",
  philosophy: "#09234f",
};

const imgIconGps = "/images/why/icon-gps.svg";
const imgIconCrop = "/images/why/icon-crop.svg";
const imgIconArrow = "/images/why/icon-arrow.svg";
const imgTabClarityBg = "/images/why/tab-clarity-bg.png";
const imgTabStructureBg = "/images/why/tab-structure-bg.png";
const imgTabCommitmentBg = "/images/why/tab-commitment-bg.png";
const imgTabPhilosophyBg = "/images/why/tab-philosophy-bg.png";

function TabClarity({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className={styles.why_tabs__tab_content}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imgTabClarityBg} alt="" className={styles.why_tabs__tab_bg} />
      <motion.h2
        className={styles.why_tabs__tab_heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {t("tab1.heading", {
          fallback: "WHY CLARITY MATTERS",
        })}
      </motion.h2>
      <div className={styles.why_tabs__tab_text}>
        <p>
          {t("tab1.desc1", {
            fallback:
              "As an entrepreneur, you likely face daily decisions with competing priorities, changing circumstances, and limited resources. It's easy for your work to become scattered or fragmented, with progress feeling like it's constantly restarting.",
          })}
        </p>
        <p>
          {t("tab1.desc2", {
            fallback:
              "Clarity is not about having all the answers upfront — it's about knowing what matters most and making decisions from a place of purpose, not urgency.",
          })}
        </p>
        <p>
          {t("tab1.desc3", {
            fallback:
              "We help you define that clarity so every action you take builds toward a future you can visualize.",
          })}
        </p>
      </div>
    </div>
  );
}

function TabStructure({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className={styles.why_tabs__tab_content}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imgTabStructureBg} alt="" className={styles.why_tabs__tab_bg} />
      <motion.h2
        className={styles.why_tabs__tab_heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {t("tab2.heading", {
          fallback: "WHY STRUCTURE IS KEY",
        })}
      </motion.h2>
      <div className={styles.why_tabs__tab_text}>
        <p>
          {t("tab2.desc1", {
            fallback:
              "Business growth often brings new complexity. While freedom and flexibility are crucial to entrepreneurship, structure is what supports that freedom, allowing you to make consistent progress without losing sight of the bigger picture.",
          })}
        </p>
        <p>
          {t("tab2.desc2", {
            fallback:
              "Without clear frameworks and processes, even the most motivated entrepreneurs can feel overwhelmed and burned out.",
          })}
        </p>
        <p>
          {t("tab2.desc3", {
            fallback:
              "That's why we focus on building scalable systems and decision frameworks that give you the tools to make confident decisions, without feeling stuck or constantly reinventing the wheel.",
          })}
        </p>
      </div>
    </div>
  );
}

function TabGrowth({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) {
  const items = [
    {
      icon: imgIconGps,
      key: "item1",
      titleFallback: "Setting the right goals",
      descFallback: "that matter, not what sounds good",
    },
    {
      icon: imgIconCrop,
      key: "item2",
      titleFallback: "Investing in systems",
      descFallback:
        "that make it easier to scale, not just increasing capacity",
    },
    {
      icon: imgIconArrow,
      key: "item3",
      titleFallback: "Focusing on sustainable, long-term success",
      descFallback: "rather than temporary results",
    },
  ];

  return (
    <>
      <div className={styles.why_tabs__tab_content}>
        <motion.h2
          className={styles.why_tabs__tab_heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t("tab3.heading", {
            fallback: "WHY FOCUS ON INTENTIONAL GROWTH",
          })}
        </motion.h2>
        <div className={styles.why_tabs__tab_text}>
          <p>
            {t("tab3.desc1", {
              fallback:
                "We don't believe in growth for growth's sake.",
            })}
          </p>
          <p>
            {t("tab3.desc2", {
              fallback:
                "We believe in intentional growth — where every step forward is purposeful, thoughtful, and aligned with your business values and vision.",
            })}
          </p>
        </div>
      </div>
      <div className={styles.why_tabs__list}>
        <h3 className={styles.why_tabs__list_title}>
          {t("tab3.listTitle", {
            fallback: "This means:",
          })}
        </h3>
        <div className={styles.why_tabs__list_items}>
          {items.map((item) => (
            <div key={item.key} className={styles.why_tabs__list_item}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.icon} alt="" className={styles.why_tabs__icon} />
              <div className={styles.why_tabs__list_item_text}>
                <strong>
                  {t(`tab3.${item.key}Title`, {
                    fallback: item.titleFallback,
                  })}
                </strong>
                <span>
                  {t(`tab3.${item.key}Desc`, {
                    fallback: item.descFallback,
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className={styles.why_tabs__tab_footer}>
        {t("tab3.footer", {
          fallback:
            "Intentional growth is about doing things with purpose, not just doing more.",
        })}
      </p>
    </>
  );
}

function TabCommitment({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className={styles.why_tabs__tab_content}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imgTabCommitmentBg} alt="" className={styles.why_tabs__tab_bg} />
      <motion.h2
        className={styles.why_tabs__tab_heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {t("tab4.heading", {
          fallback: "THE AXELVIOR COMMITMENT",
        })}
      </motion.h2>
      <div className={styles.why_tabs__tab_text}>
        <p>
          {t("tab4.desc1", {
            fallback:
              "We're here to help you gain control over the direction of your business — to provide the clarity you need, so you can make decisions that lead to a sustainable, thriving business.",
          })}
        </p>
        <p>
          {t("tab4.desc2", {
            fallback:
              "By working with us, you're not just getting business development advice — you're gaining a partner who listens, understands, and helps you turn your vision into reality.",
          })}
        </p>
      </div>
    </div>
  );
}

function TabPhilosophy({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className={styles.why_tabs__tab_content}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imgTabPhilosophyBg} alt="" className={styles.why_tabs__tab_bg} />
      <motion.h2
        className={styles.why_tabs__tab_heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {t("tab5.heading", {
          fallback: "WHY THIS PHILOSOPHY WORKS",
        })}
      </motion.h2>
      <div className={styles.why_tabs__tab_text}>
        <p>
          {t("tab5.desc1", {
            fallback:
              "In today's fast-paced world, it's easy to chase the next big thing or get distracted by quick fixes. But true success is rooted in purpose, strategy, and clarity.",
          })}
        </p>
        <p>
          {t("tab5.desc2", {
            fallback:
              "At Axelvior, we help you slow down enough to make decisions with intention, create long-term systems that can grow with you, and empower you to move forward with confidence in the direction you've chosen.",
          })}
        </p>
        <p>
          {t("tab5.desc3", {
            fallback:
              "You're building something that matters. Our job is to help make sure it has the foundation to last.",
          })}
        </p>
        <p className={styles.why_tabs__bold_text}>
          {t("tab5.desc4", {
            fallback: "Start with clarity. Start with Axelvior.",
          })}
        </p>
      </div>
      <Link href="/contact" className={styles.why_tabs__cta_btn}>
        {t("tab5.cta", {
          fallback: "Start a conversation today",
        })}
      </Link>
    </div>
  );
}

export const WhyTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("clarity");
  const t = useTranslations("whyTabs");

  return (
    <section className={styles.why_tabs}>
      <div className={styles.why_tabs__wrapper}>
        <div className={"container"}>
          <div className={styles.why_tabs__inner}>
            <nav className={styles.why_tabs__nav}>
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.why_tabs__nav_btn} ${activeTab === tab.id ? styles["why_tabs__nav_btn--active"] : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                  style={
                    activeTab === tab.id
                      ? { borderTopColor: TAB_ACCENT[tab.id] }
                      : undefined
                  }
                >
                  {t(`tabs.${tab.id}`, {
                    fallback: tab.label,
                  })}
                </button>
              ))}
            </nav>

            <div
              className={styles.why_tabs__panel}
              style={{ backgroundColor: TAB_COLORS[activeTab] }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className={styles.why_tabs__panel_inner}
                >
                  {activeTab === "clarity" && <TabClarity t={t} />}
                  {activeTab === "structure" && <TabStructure t={t} />}
                  {activeTab === "growth" && <TabGrowth t={t} />}
                  {activeTab === "commitment" && <TabCommitment t={t} />}
                  {activeTab === "philosophy" && <TabPhilosophy t={t} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
