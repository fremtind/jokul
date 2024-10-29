import { NavCard } from "@fremtind/jkl-card-react";
import { useBrowserPreferences } from "@fremtind/jkl-react-hooks";
import { Link } from "@remix-run/react";
import { useInView } from "framer-motion";
import React, { type FC, useEffect, useRef } from "react";
import { getUrlFromLink } from "../../components/navigation/utils";
import { type PageSectionProps } from "./types";
import { assertSectionIs } from "./types";
import { useMainMenu } from "~/utils";

export const VideoCTABlock: FC<PageSectionProps> = ({ pageSection }) => {
    assertSectionIs("video-cta", pageSection);

    const mainMenu = useMainMenu();
    const { prefersReducedMotion } = useBrowserPreferences();
    const videoRef = useRef<HTMLVideoElement>(null);
    const isInView = useInView(videoRef, { once: true });

    useEffect(() => {
        if (isInView && !prefersReducedMotion) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
    }, [isInView, prefersReducedMotion]);

    const { video, title, link, description } = pageSection;

    const linkTo = getUrlFromLink(link, mainMenu);

    return (
        <div className="jkl-portal-video-cta" data-theme="light">
            {/* En skjult H2 lar oss vise seksjonen i innholdsfortegnelsen */}
            <h2 className="jkl-sr-only">{title}</h2>
            <div className="jkl-portal-background-video">
                <video
                    ref={videoRef}
                    className="jkl-portal-background-video__video"
                    muted
                    playsInline={true}
                    loop={video.loop}
                    tabIndex={-1}
                >
                    <source src={video.url} type="video/mp4" />
                </video>
            </div>
            <NavCard
                className="jkl-portal-video-cta__card"
                title={title}
                description={description || ""}
                component={Link}
                to={linkTo || "#"}
            />
        </div>
    );
};
