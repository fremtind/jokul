import { FloatingTreeType } from "@floating-ui/react";
import { useEffect, useState } from "react";

export const useMenuWideEvents = (
    tree: FloatingTreeType | null,
    nodeId: string,
    parentId: string | null,
): {
    allowHover: boolean;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
} => {
    const [allowHover, setAllowHover] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Event emitter allows you to communicate across tree components.
    // This effect closes all menus when an item gets clicked anywhere
    // in the tree.
    useEffect(() => {
        if (!tree) return;

        function handleTreeClick() {
            setIsOpen(false);
        }

        function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
            if (event.nodeId !== nodeId && event.parentId === parentId) {
                setIsOpen(false);
            }
        }

        tree.events.on("click", handleTreeClick);
        tree.events.on("menuopen", onSubMenuOpen);

        return () => {
            tree.events.off("click", handleTreeClick);
            tree.events.off("menuopen", onSubMenuOpen);
        };
    }, [tree, nodeId, parentId, setIsOpen]);

    useEffect(() => {
        if (isOpen && tree) {
            tree.events.emit("menuopen", { parentId, nodeId });
        }
    }, [tree, isOpen, nodeId, parentId]);

    // Determine if "hover" logic can run based on the modality of input. This
    // prevents unwanted focus synchronization as menus open and close with
    // keyboard navigation and the cursor is resting on the menu.
    useEffect(() => {
        function onPointerMove({ pointerType }: PointerEvent) {
            if (pointerType !== "touch") {
                setAllowHover(true);
            }
        }

        function onKeyDown() {
            setAllowHover(false);
        }

        window.addEventListener("pointermove", onPointerMove, {
            once: true,
            capture: true,
        });
        window.addEventListener("keydown", onKeyDown, true);
        return () => {
            window.removeEventListener("pointermove", onPointerMove, {
                capture: true,
            });
            window.removeEventListener("keydown", onKeyDown, true);
        };
    }, [allowHover]);

    return { allowHover, isOpen, setIsOpen };
};
