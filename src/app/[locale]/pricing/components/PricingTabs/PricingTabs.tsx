"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { useAllGrowthStrategyServices } from "@/features/solutions/lib/growth-strategy";
import { useAllOperationalFoundationsAndSystemsServices } from "@/features/solutions/lib/operational-foundations-and-systems";
import { useAllPositioningAndOfferDevelopmentServices } from "@/features/solutions/lib/positioning-and-offer-development";
import { useAllStrategicDirectionServices } from "@/features/solutions/lib/strategic-direction";
import { ServiceItem } from "@/features/solutions/ui/ServiceItem";

import styles from "./PricingTabs.module.scss";

export const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("strategic");
  const t = useTranslations("pricingTabs");

  const strategicServices = useAllStrategicDirectionServices();
  const positioningServices = useAllPositioningAndOfferDevelopmentServices();
  const operationalServices = useAllOperationalFoundationsAndSystemsServices();
  const growthServices = useAllGrowthStrategyServices();

  const serviceMap: Record<
    string,
    ReturnType<typeof useAllStrategicDirectionServices>
  > = {
    strategic: strategicServices,
    positioning: positioningServices,
    operational: operationalServices,
    growth: growthServices,
  };

  const TABS = [
    {
      id: "strategic",
      label: t("tabStrategic", { fallback: "STRATEGIC DIRECTION" }),
    },
    {
      id: "positioning",
      label: t("tabPositioning", {
        fallback: "POSITIONING & OFFER DEVELOPMENT",
      }),
    },
    {
      id: "operational",
      label: t("tabOperational", {
        fallback: "OPERATIONAL FOUNDATIONS & SYSTEMS",
      }),
    },
    { id: "growth", label: t("tabGrowth", { fallback: "GROWTH STRATEGY" }) },
  ] as const;

  const TAB_ACCENT: Record<string, string> = {
    strategic: "#09234f",
    positioning: "#09234f",
    operational: "#09234f",
    growth: "#09234f",
  };

  const TAB_META: Record<
    string,
    { number: string; titleFallback: string; descFallback: string }
  > = {
    strategic: {
      number: "01",
      titleFallback: t("titleStrategic", { fallback: "Strategic Direction" }),
      descFallback: t("descStrategic", {
        fallback:
          "Strategic direction is crucial for entrepreneurs who want to scale with purpose. We'll help you define a clear path, ensuring that every decision aligns with your long-term vision and current reality.",
      }),
    },
    positioning: {
      number: "02",
      titleFallback: t("titlePositioning", {
        fallback: "Positioning & Offer Development",
      }),
      descFallback: t("descPositioning", {
        fallback:
          "A clear offer and strong positioning are the foundation of growth. We help you refine what you sell, who you sell it to, and how it's communicated — so your business resonates and converts.",
      }),
    },
    operational: {
      number: "03",
      titleFallback: t("titleOperational", {
        fallback: "Operational Foundations & Systems",
      }),
      descFallback: t("descOperational", {
        fallback:
          "Growth without structure leads to burnout. We help you build the operational backbone your business needs — processes, tools, and frameworks that let you scale without losing control.",
      }),
    },
    growth: {
      number: "04",
      titleFallback: t("titleGrowth", { fallback: "Growth Strategy" }),
      descFallback: t("descGrowth", {
        fallback:
          "Sustainable growth requires more than ambition — it requires a plan. We help you identify the right levers for expansion and build strategies that compound over time.",
      }),
    },
  };

  const meta = TAB_META[activeTab];
  const services = serviceMap[activeTab];

  return (
    <section className={styles.pricing_tabs}>
      <div className={styles.pricing_tabs__wrapper}>
        <div className="container">
          <div className={styles.pricing_tabs__inner}>
            <nav className={styles.pricing_tabs__nav}>
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.pricing_tabs__nav_btn} ${
                    activeTab === tab.id
                      ? styles["pricing_tabs__nav_btn--active"]
                      : ""
                  }`}
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

            <div className={styles.pricing_tabs__panel}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className={styles.pricing_tabs__panel_inner}
                >
                  <div className={styles.pricing_tabs__info}>
                    <h2 className={styles.pricing_tabs__heading}>
                      {meta.number}. {meta.titleFallback}
                    </h2>
                    <p className={styles.pricing_tabs__desc}>
                      {meta.descFallback}
                    </p>
                  </div>

                  <div className={styles.pricing_tabs__services}>
                    <h3 className={styles.pricing_tabs__services_title}>
                      {t("servicesAndPricing", {
                        fallback: "Services & Pricing:",
                      })}
                    </h3>
                    <div className={styles.pricing_tabs__services_list}>
                      {services.map((service) => (
                        <ServiceItem key={service.id} service={service} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
