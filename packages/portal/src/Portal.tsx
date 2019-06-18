import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Footer } from "@fremtind/jkl-footer-react";
import Header from "./components/Header/Header";
import WindowSizeProvider from "./components/useWindowSize/useWindowSize";

const FrontPage = React.lazy(() => import("./pages/FrontPage/FrontPage"));
const ContributePage = React.lazy(() => import("./pages/Contribute/Contribute"));

const renderFrontPage = () => <FrontPage />;
const renderContributePage = () => <ContributePage />;

const App = () => (
    <BrowserRouter>
        <WindowSizeProvider>
            <Header />
            <main>
                <Suspense fallback="loading">
                    <Route exact path="/" render={renderFrontPage} />
                    <Route path="/bidra" render={renderContributePage} />
                </Suspense>
            </main>
            <Footer />
        </WindowSizeProvider>
    </BrowserRouter>
);

export default App;
