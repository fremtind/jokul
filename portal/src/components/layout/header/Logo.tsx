"use client";

import { clsx } from "clsx";
import styles from "../global-layout.module.scss";

export const Logo = () => {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;

    const isNewYear =
        (month === 12 && date >= 31) || (month === 1 && date <= 3);
    const isLucia = month === 12 && date === 13;
    const isChristmas = month === 12;
    const isHalloween = month === 10;
    const isOlsok = month === 7 && date === 29;
    const isPride = month === 6;
    const is17May = month === 5 && date === 17;
    const isWomensDay = month === 3 && date === 8;
    const isHoli = month === 3 && date === 4;
    const isValentinesDay = month === 2 && date === 14;

    switch (true) {
        case isNewYear:
            return (
                <>
                    <span className={clsx(styles.holiday, styles.newyear)}>
                        Godt Jøkår
                    </span>{" "}
                    🎆
                </>
            );
        case isLucia:
            return (
                <>
                    <span className={clsx(styles.holiday, styles.lucia)}>
                        Sankta Jucia
                    </span>{" "}
                    🕯️
                </>
            );
        case isChristmas:
            return (
                <>
                    <span className={clsx(styles.holiday)}>
                        God J<s>øk</s>ul
                    </span>{" "}
                    🎄
                </>
            );
        case isHalloween:
            return (
                <>
                    <span className={clsx(styles.holiday, styles.halloween)}>
                        Bøkul
                    </span>{" "}
                    👻
                </>
            );
        case isOlsok:
            return (
                <>
                    <span className={clsx(styles.holiday, styles.olsok)}>
                        Jolsok
                    </span>{" "}
                    🧌
                </>
            );
        case isPride:
            return (
                <>
                    <span className={clsx(styles.holiday, styles.pride)}>
                        Jøkul
                    </span>{" "}
                    🏳️‍🌈
                </>
            );
        case is17May:
            return (
                <>
                    <span className={clsx(styles.holiday, styles.may)}>
                        Jøkulerer
                    </span>{" "}
                    🇳🇴
                </>
            );
        case isWomensDay:
            return (
                <>
                    <span className={clsx(styles.holiday, styles.women)}>
                        Jøkhun
                    </span>{" "}
                    🦸‍♀️
                </>
            );
        case isHoli:
            return (
                <>
                    <span className={clsx(styles.holiday, styles.holi)}>
                        Holikul
                    </span>{" "}
                    🫟
                </>
            );
        case isValentinesDay:
            return (
                <>
                    <span className={clsx(styles.holiday, styles.valentines)}>
                        J
                    </span>
                    ❤️
                    <span className={clsx(styles.holiday, styles.valentines)}>
                        kul
                    </span>
                </>
            );
        default:
            return "Jøkul";
    }
};
