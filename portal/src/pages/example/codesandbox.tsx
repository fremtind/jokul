import React from "react";
import { Layout } from "../../components";

const example = () => {
    return (
        <Layout isComponentPage>
            <iframe
                src="https://codesandbox.io/embed/intelligent-lederberg-ihlzd?fontsize=14"
                title="jokul-demo"
                allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media"
                style={{
                    width: "100%",
                    height: "calc(100vh - 175px)",
                    border: "0",
                    borderRadius: "4px",
                    overflow: "hidden",
                }}
                sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            ></iframe>
        </Layout>
    );
};

export default example;
