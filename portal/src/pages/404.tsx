import React from "react";
import { Layout } from "../components";

interface Props {
    location: Location;
}

const NotFoundPage = ({ location }: Props) => (
    <Layout location={location}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
);

export default NotFoundPage;
