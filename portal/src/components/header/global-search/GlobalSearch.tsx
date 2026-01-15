"use client";

import { Results } from "@/components/header/global-search/Results";
import { Button } from "@fremtind/jokul/button";
import { SearchIcon } from "@fremtind/jokul/icon";
import {
    Modal,
    ModalBody,
    ModalContainer,
    ModalOverlay,
    useModal,
} from "@fremtind/jokul/modal";
import { Search } from "@fremtind/jokul/search";
import React, { useEffect, useState } from "react";

import styles from "../header.module.scss";

export const GlobalSearch = () => {
    const [searchText, setSearchText] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [instance, { title, overlay, container, modal, closeButton }] =
        useModal({ title: "Søk" });

    useEffect(() => {
        if (!instance) {
            return;
        }
        instance.show();
    }, [instance]);

    return (
        <>
            <Button
                variant="ghost"
                onClick={(e) => setShowModal(!showModal)}
                icon={<SearchIcon />}
                aria-label="Søk"
                className={styles.search}
            />
            {showModal && (
                <ModalContainer {...container}>
                    <ModalOverlay {...overlay} />
                    <Modal {...modal}>
                        <ModalBody>
                            <Search
                                label="Søk i Jøkul"
                                labelProps={{ variant: "large" }}
                                placeholder=""
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            <Results searchString={searchText} />
                        </ModalBody>
                    </Modal>
                </ModalContainer>
            )}
        </>
    );
};
