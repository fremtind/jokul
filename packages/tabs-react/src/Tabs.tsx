import React, { useState } from "react";
import { Tab } from "./Tab";

interface Props {
    tabs: string[];
    initialSelected?: number;
}

export function Tabs(props: Props) {
    const [activeIndex, setActiveIndex] = useState(props.initialSelected);

    return (
        <div className="jkl-tabs">
            {props.tabs.map((tab, index) => (
                <span key={index} className="jkl-tabs__tab">
                    <Tab onClick={() => setActiveIndex(index)} key={index} active={index === activeIndex}>
                        {tab}
                    </Tab>
                </span>
            ))}

            <div className="jkl-tabs__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi debitis doloremque ea enim,
                error, fugiat labore maiores officia quae quo reiciendis repellat suscipit veniam voluptates.
                Consectetur dolores exercitationem tempore.
            </div>
        </div>
    );
}
