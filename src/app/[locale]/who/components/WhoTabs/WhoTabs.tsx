"use client";

import { useState } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./WhoTabs.module.scss";



const TAB_COLORS: Record<string, string> = {
  "work-with": "#09234f",
  different: "#0c4a58",
  philosophy: "#384ce3",
  offer: "#000829",
};

const TAB_ACCENT: Record<string, string> = {
  "work-with": "#09234f",
  different: "#0c4a58",
  philosophy: "#384ce3",
  offer: "#000829",
};

const imgIconLink =
  "/images/who/icon-link.svg";
const imgIconTrendUp =
  "/images/who/icon-trend-up.svg";
const imgIconHierarchy =
  "/images/who/icon-hierarchy.svg";
const imgIconGps =
  "/images/who/icon-gps.svg";
const imgIconCrop =
  "/images/who/icon-crop.svg";
const imgIconArrow =
  "/images/who/icon-arrow.svg";
const imgIconRouting =
  "/images/who/icon-routing.svg";
const imgPhilosophyBg =
  "/images/who/philosophy-bg.png";

function TabWorkWith({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <>
      <div className={styles.who_tabs__tab_content}>
        <motion.h2
          className={styles.who_tabs__tab_heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t("tab1.heading", {
            fallback: "WHO WE WORK WITH",
          })}
        </motion.h2>
        <div className={styles.who_tabs__tab_text}>
          <p>
            {t("tab1.desc1", {
              fallback:
                "We work best with those who are past the starting phase, but feel that what they are building could be clearer, more intentional, or more aligned.",
            })}
          </p>
          <p>
            {t("tab1.desc2", {
              fallback:
                "This isn't about fixing broken systems; this is about refining what already exists and making it stronger, sharper, and capable of lasting growth.",
            })}
          </p>
        </div>
      </div>
      <div className={styles.who_tabs__partners}>
        <h3 className={styles.who_tabs__partners_title}>
          {t("tab1.partnersTitle", {
            fallback: "Our ideal partners are:",
          })}
        </h3>
        <div className={styles.who_tabs__partners_grid}>
          <div className={styles.who_tabs__partner_card}>
            <img src={imgIconLink} alt="" className={styles.who_tabs__icon} />
            <p>
              {t("tab1.partner1", {
                fallback:
                  "Entrepreneurs in the middle of their journey, ready for structured growth and clarity",
              })}
            </p>
          </div>
          <div className={styles.who_tabs__partner_card}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgIconTrendUp}
              alt=""
              className={styles.who_tabs__icon}
            />
            <p>
              {t("tab1.partner2", {
                fallback:
                  "Individuals who want more than success; they want sustainability and impact",
              })}
            </p>
          </div>
          <div className={styles.who_tabs__partner_card}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgIconHierarchy}
              alt=""
              className={styles.who_tabs__icon}
            />
            <p>
              {t("tab1.partner3", {
                fallback:
                  "People who understand the importance of direction — and the role clarity plays in decision-making",
              })}
            </p>
          </div>
        </div>
      </div>
      <p className={styles.who_tabs__tab_footer}>
        {t("tab1.footer", {
          fallback:
            "We work with those who are prepared to invest in their business's longevity — because growth doesn't happen overnight, and it's not linear.",
        })}
      </p>
    </>
  );
}

function TabDifferent({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) {
  const items = [
    {
      icon: imgIconGps,
      key: "item1",
      fallback: 'Focused guidance, not "strategic noise"',
    },
    {
      icon: imgIconCrop,
      key: "item2",
      fallback: "Personalized frameworks, not templated solutions",
    },
    {
      icon: imgIconArrow,
      key: "item3",
      fallback:
        "Sustainable direction, not rapid growth at the cost of long-term stability",
    },
    {
      icon: imgIconRouting,
      key: "item4",
      fallback: "Structured decisions, not scattered action",
    },
  ];

  return (
    <>
      <div className={styles.who_tabs__tab_content}>
        <motion.h2
          className={styles.who_tabs__tab_heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t("tab2.heading", {
            fallback: "WHAT MAKES US DIFFERENT",
          })}
        </motion.h2>
        <div className={styles.who_tabs__tab_text}>
          <p>
            {t("tab2.desc1", {
              fallback:
                "At Axelvior, we don't take a one-size-fits-all approach.",
            })}
          </p>
          <p>
            {t("tab2.desc2", {
              fallback:
                "We understand that each entrepreneur's journey is different, and we treat each one with the customized attention it deserves.",
            })}
          </p>
        </div>
      </div>
      <div className={styles.who_tabs__list}>
        <h3 className={styles.who_tabs__list_title}>
          {t("tab2.listTitle", {
            fallback: "What sets us apart:",
          })}
        </h3>
        <div className={styles.who_tabs__list_items}>
          {items.map((item) => (
            <div key={item.key} className={styles.who_tabs__list_item}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.icon} alt="" className={styles.who_tabs__icon} />
              <p>
                {t(`tab2.${item.key}`, {
                  fallback: item.fallback,
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className={styles.who_tabs__tab_footer}>
        {t("tab2.footer", {
          fallback:
            "Our team is made up of strategists, designers, copywriters, and developers — all working in harmony to help you move forward with intention, not just speed.",
        })}
      </p>
    </>
  );
}

function TabPhilosophy({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className={styles.who_tabs__philosophy}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgPhilosophyBg}
        alt=""
        className={styles.who_tabs__philosophy_bg}
      />
      <div className={styles.who_tabs__philosophy_gradient} />
      <div className={styles.who_tabs__tab_content}>
        <motion.h2
          className={styles.who_tabs__tab_heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t("tab3.heading", {
            fallback: "OUR PHILOSOPHY",
          })}
        </motion.h2>
        <div className={styles.who_tabs__tab_text}>
          <p>
            {t("tab3.desc1", {
              fallback:
                "We believe that business development starts with clarity. Without it, momentum can quickly lose shape, and the progress you've worked so hard for can become scattered or misdirected.",
            })}
          </p>
          <p>
            {t("tab3.desc2", {
              fallback:
                "Axelvior exists to help you restore clarity in your growth process so that you can move forward with confidence and purpose.",
            })}
          </p>
          <p>
            {t("tab3.desc3", {
              fallback:
                "We are here to help you regain control over your direction — whether that means refining your offer, optimizing your workflows, or preparing for the next phase of growth.",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

function TabOffer({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) {
  const offers = [
    {
      key: "offer1",
      titleFallback: "Strategic Direction",
      descFallback:
        "Helping you articulate and refine your business vision.",
      bg: "#09234f",
      img: "/images/who/offer1.svg",
    },
    {
      key: "offer2",
      titleFallback: "Strategic Advice",
      descFallback:
        "Providing actionable guidance based on real-world insights.",
      bg: "#384ce3",
      img: "/images/who/offer2.svg",
    },
    {
      key: "offer3",
      titleFallback: "Business Structure & Systems",
      descFallback:
        "Building frameworks to scale your operations without losing sight of the mission.",
      bg: "#6b7ceb",
      img: "/images/who/offer3.svg",
    },
    {
      key: "offer4",
      titleFallback: "Positioning & Offer Development",
      descFallback:
        "Clarifying what you offer, and making sure it's aligned with your business direction.",
      bg: "#c5d0f9",
      dark: true,
      img: "/images/who/offer4.svg",
    },
  ];

  return (
    <>
      <div className={styles.who_tabs__tab_content}>
        <motion.h2
          className={styles.who_tabs__tab_heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t("tab4.heading", {
            fallback: "WHAT WE OFFER",
          })}
        </motion.h2>
      </div>
      <div className={styles.who_tabs__offer_grid}>
        {offers.map((offer) => (
          <div
            key={offer.key}
            className={`${styles.who_tabs__offer_card} ${offer.dark ? styles["who_tabs__offer_card--dark"] : ""}`}
            style={{ backgroundColor: offer.bg }}
          >
            <h4 className={styles.who_tabs__offer_title}>
              {t(`tab4.${offer.key}Title`, {
                fallback: offer.titleFallback,
              })}
            </h4>
            <p className={styles.who_tabs__offer_desc}>
              {t(`tab4.${offer.key}Desc`, {
                fallback: offer.descFallback,
              })}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={offer.img} alt="" className={styles.who_tabs__offer_img} />
          </div>
        ))}
      </div>
      <div className={styles.who_tabs__offer_cta}>
        <Link href="/contact" className={styles.who_tabs__offer_btn}>
          {t("tab4.cta", {
            fallback: "Start a conversation with Axelvior",
          })}
        </Link>
      </div>
    </>
  );
}

export const WhoTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("work-with");
  const t = useTranslations("whoTabs");

  const TABS = [
    { id: "work-with", label: t("heading1", { fallback: "WHO WE WORK WITH" }) },
    { id: "different", label: t("heading2", { fallback: "WHAT MAKES US DIFFERENT" }) },
    { id: "philosophy", label: t("heading3", { fallback: "OUR PHILOSOPHY" }) },
    { id: "offer", label: t("heading4", { fallback: "WHAT WE OFFER" }) },
  ] as const;

  return (
    <section className={styles.who_tabs}>
      <div className={styles.who_tabs__wrapper}>
        <div className={"container"}>
          <div className={styles.who_tabs__inner}>
            <nav className={styles.who_tabs__nav}>
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.who_tabs__nav_btn} ${activeTab === tab.id ? styles["who_tabs__nav_btn--active"] : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                  style={
                    activeTab === tab.id
                      ? { borderTopColor: TAB_ACCENT[tab.id] }
                      : undefined
                  }
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            <div
              className={styles.who_tabs__panel}
              style={{ backgroundColor: TAB_COLORS[activeTab] }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className={styles.who_tabs__panel_inner}
                >
                  {activeTab === "work-with" && <TabWorkWith t={t} />}
                  {activeTab === "different" && <TabDifferent t={t} />}
                  {activeTab === "philosophy" && <TabPhilosophy t={t} />}
                  {activeTab === "offer" && <TabOffer t={t} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
