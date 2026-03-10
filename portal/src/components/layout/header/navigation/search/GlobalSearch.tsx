"use client";

import { Results } from "@/components/layout/header/navigation/search/Results";
import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { SearchIcon } from "@fremtind/jokul/icon";
import {
    Modal,
    ModalBody,
    ModalContainer,
    ModalOverlay,
    useModal,
} from "@fremtind/jokul/modal";
import { Search } from "@fremtind/jokul/search";
import React, { useCallback, useEffect, useRef, useState } from "react";

import styles from "../navigation.module.scss";

export const GlobalSearch = () => {
    const [searchText, setSearchText] = useState("");
    const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [instance, { overlay, container, modal }] = useModal({
        title: "Søk",
    });

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            setDebouncedSearchText(searchText);
        }, 250);

        return () => window.clearTimeout(timeout);
    }, [searchText]);

    const handleOpenModal = useCallback(() => {
        if (!instance) return;
        instance.show();
        requestAnimationFrame(() => searchInputRef.current?.focus());
    }, [instance]);

    const handleCloseModal = useCallback(() => {
        if (!instance) return;
        instance.hide();
    }, [instance]);

    const handleToggleModal = useCallback(() => {
        instance?.shown ? handleCloseModal() : handleOpenModal();
    }, [instance, handleCloseModal, handleOpenModal]);

    useEffect(() => {
        const handleKeyboardShortcut = (event: KeyboardEvent) => {
            if (
                (event.metaKey || event.ctrlKey) &&
                event.key.toLowerCase() === "k"
            ) {
                event.preventDefault();
                handleToggleModal();
            }
        };
        window.addEventListener("keydown", handleKeyboardShortcut);
        return () =>
            window.removeEventListener("keydown", handleKeyboardShortcut);
    }, [handleToggleModal]);

    return (
        <>
            <Button
                variant="ghost"
                onClick={handleToggleModal}
                icon={<SearchIcon />}
                aria-label="Søk"
                className={styles.search}
            >
                Søk
            </Button>
            <ModalContainer {...container}>
                <ModalOverlay {...overlay} onClick={handleCloseModal} />
                <Modal {...modal} className={styles.modalContainer}>
                    <ModalBody>
                        <Flex direction="column">
                            <Search
                                ref={searchInputRef}
                                label="Søk i Jøkul"
                                labelProps={{ variant: "large", srOnly: true }}
                                placeholder="Søk i Jøkul"
                                autoFocus
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            <Results
                                searchString={debouncedSearchText}
                                onNavigate={handleCloseModal}
                            />
                        </Flex>
                    </ModalBody>
                </Modal>
            </ModalContainer>
        </>
    );
};
