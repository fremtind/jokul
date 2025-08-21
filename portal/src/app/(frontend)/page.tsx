"use client";

/*import { RedirectType, redirect } from "next/navigation";
import { useEffect } from "react";*/

export default function FrontPage() {
    /*    useEffect(() => {
        const timer = setTimeout(() => {
            redirect("/komponenter", RedirectType.push);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);*/

    return (
        <h1 className="typewriter front-page">
            <span>J</span>
            <span>ø</span>
            <span>k</span>
            <span>u</span>
            <span>l</span>
            <span className="space">&nbsp;</span>
            <span>D</span>
            <span>e</span>
            <span>s</span>
            <span>i</span>
            <span>g</span>
            <span>n</span>
            <span>s</span>
            <span>y</span>
            <span>s</span>
            <span>t</span>
            <span>e</span>
            <span>m</span>
            <span>_</span>
        </h1>
    );
}
