"use client";

import { HomeRequestForm } from "@/features/contact-form/ui/HomeRequestForm";

import styles from "./HomeRequest.module.scss";

const imgDots =
  "https://www.figma.com/api/mcp/asset/569db673-8871-417e-83df-2e1b57899931";

export const HomeRequest = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.decorImage}>            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgDots} alt="" aria-hidden="true" />
            <div className={styles.decorGradient} />
          </div>

          <div className={styles.inner}>
            <div className={styles.left}>
              <h2 className={styles.heading}>
                Let&apos;s define the next step.
              </h2>
              <p className={styles.description}>
                Every collaboration at Axelvior begins with understanding.
              </p>
              <p className={styles.description}>
                This form helps us see what you&apos;re building, where things
                feel unclear, and what kind of support you&apos;re considering.
              </p>
            </div>

            <div className={styles.right}>
              <HomeRequestForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
