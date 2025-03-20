import { clsx } from "clsx";
import Link from "next/link";
import styles from "./navigation.module.scss";
import { NavigationMenu } from "./NavigationMenu";
import { NavigationSearch } from "./NavigationSearch";

export async function Navigation() {
    return <NavigationMenu />;
}
