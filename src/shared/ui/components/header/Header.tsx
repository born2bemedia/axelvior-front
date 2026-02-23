"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useTranslations } from "next-intl";

import { useAuthStore } from "@/features/account";
import { useCartStore } from "@/features/cart";

import { WEBSITE_EMAIL, WEBSITE_PHONE } from "@/shared/lib/constants/constants";
import { FacebookIcon, InstagramIcon, XIcon } from "@/shared/ui/icons";

import { LangSelector } from "../language-switcher/LangSelector";
import styles from "./Header.module.scss";

import { Link } from "@/i18n/navigation";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);
  const isInitialized = useAuthStore((s) => s.isInitialized);
  const fetchUser = useAuthStore((s) => s.fetchUser);
  const totalItems = useCartStore((state) => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  });

  const t = useTranslations("header");

  const NAV_ITEMS = [
    { text: t("home", { fallback: "Home" }), href: "/" },
    { text: t("who", { fallback: "Who" }), href: "/who" },
    { text: t("what", { fallback: "What" }), href: "/due-diligence" },
    { text: t("why", { fallback: "Why" }), href: "/market-research" },
    {
      text: t("clients", { fallback: "Clients" }),
      href: "/portfolio-services",
    },
    { text: t("pricing", { fallback: "Pricing" }), href: "/lease-advisory" },
    { text: t("ideas", { fallback: "Ideas" }), href: "/free-guides" },
    { text: t("connect", { fallback: "Connect" }), href: "/contact" },
  ] as const;

  useEffect(() => {
    if (!isInitialized) {
      fetchUser();
    }
  }, [isInitialized, fetchUser]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isMobileMenuOpen ? styles.open : ""} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.header__topbar}>
        <div className="container">
          <div className={styles.header__topbar__inner}>
            <div className={styles.header__topbar__contacts}>
              <Link href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</Link>
              {WEBSITE_PHONE && (
                <Link href={`tel:${WEBSITE_PHONE}`}>{WEBSITE_PHONE}</Link>
              )}
            </div>
            <div className={styles.header__topbar__socials}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <XIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.header__main}>
        <div className="container">
          <div className={styles.header__main__inner}>
            <div className={styles.header__left}>
              <Link href="/" className={styles.header__logo}>
                <Image
                  src="/images/logo.svg"
                  alt="axelvior"
                  width={87}
                  height={20}
                />
              </Link>

              <nav className={styles.header__nav}>
                {NAV_ITEMS.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={pathname === item.href ? styles.active : ""}
                  >
                    {item.text}
                  </Link>
                ))}
              </nav>
            </div>

            <div className={styles.header__actions}>
              {user ? (
                <Link href="/account" className={styles.header__btn_login}>
                  {t("account", { fallback: "Account" })}
                </Link>
              ) : (
                <>
                  <Link href="/sign-up" className={styles.header__btn_signin}>
                    {t("sign-up", { fallback: "Sign up" })}
                  </Link>
                  <Link href="/log-in" className={styles.header__btn_login}>
                    {t("login", { fallback: "Login" })}
                  </Link>
                </>
              )}

              <Link href="/checkout" className={styles.header__btn_cart}>
                {t("cart", { fallback: "Cart" })}
                {totalItems > 0 && (
                  <span className={styles.header__cart_badge}>
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>

            <div className={styles.header__mobile_controls}>
              <LangSelector />
              <button
                className={`${styles.header__burger} ${
                  isMobileMenuOpen ? styles.open : ""
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {t("menu", { fallback: "Menu" })}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.header__mobile_menu} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <nav>
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={pathname === item.href ? styles.active : ""}
            >
              {item.text}
            </Link>
          ))}
        </nav>
        <div className={styles.header__mobile_actions}>
          {user ? (
            <Link href="/account" className={styles.header__btn_login}>
              {t("account", { fallback: "Account" })}
            </Link>
          ) : (
            <>
              <Link href="/sign-up" className={styles.header__btn_signin}>
                {t("sign-up", { fallback: "Sign up" })}
              </Link>
              <Link href="/log-in" className={styles.header__btn_login}>
                {t("login", { fallback: "Login" })}
              </Link>
            </>
          )}
          <Link href="/checkout" className={styles.header__btn_cart}>
            {t("cart", { fallback: "Cart" })}
            {totalItems > 0 && (
              <span className={styles.header__cart_badge}>{totalItems}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};
