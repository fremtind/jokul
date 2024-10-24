import { type WithChildren } from '@fremtind/jkl-core';
import type { Media } from '@org/cms';
import React, { type FC, useState } from 'react';
import { Image, MediaViewer } from '../media';
import { VimeoPlayer } from '../vimeo-player/VimeoPlayer';

export interface ShowcaseProps extends WithChildren {
    title: string;
    from: string;
    source?: string | null;
    example?: string | Media | null;
}

export const Showcase: FC<ShowcaseProps> = ({
    title,
    from,
    source,
    children,
    example,
}) => {
    const [play, setPlay] = useState(false);

    const onEnter = () => {
        setPlay(true);
    };

    const onExit = () => {
        setPlay(false);
    };

    return (
        <div className="showcase" onMouseEnter={onEnter} onMouseLeave={onExit}>
            <div className="showcase__description">
                <p className="showcase__title">{title}</p>
                <div>
                    <p className="showcase__from">Fra {from}</p>
                    {children}
                </div>
            </div>
            <div className="showcase__media">
                {source && (
                    <VimeoPlayer
                        title={title}
                        source={source}
                        play={play}
                        isActive={play}
                    />
                )}
                {example && typeof example !== 'string' && (
                    <MediaViewer withLightBox src={example} />
                )}
                {example && typeof example === 'string' && (
                    <Image src={example} width="100%" />
                )}
            </div>
        </div>
    );
};
