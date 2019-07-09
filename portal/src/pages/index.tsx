import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const IndexPage = () => (
    <Layout>
        <h2>Jokul - Fremtinds designsystem</h2>

        <div>
            <Link to="/components/button/">Eksempel på komponent dokumentasjon</Link>
            <Link to="/components/accordion/">Eksempel på komponent dokumentasjon</Link>
        </div>
        <Link to="/a-la-carte">Alle komponenter</Link>
    </Layout>
);

export default IndexPage;
