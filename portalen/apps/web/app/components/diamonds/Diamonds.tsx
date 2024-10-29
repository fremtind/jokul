import cn from "classnames";
import React, { type FC } from "react";
import { useCallback, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "~/utils/useTheme";

type Coordinates = { x: number; y: number };

export interface DiamondProps {
    resolution?: Coordinates;
    className?: string;
}

export const Diamonds: FC<DiamondProps> = ({ resolution = { x: 10, y: 7 }, className }) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const prefersColorScheme = useTheme();

    const renderer = useRef<THREE.WebGLRenderer>();
    const camera = useRef<THREE.PerspectiveCamera>();
    const scene = useRef<THREE.Scene>();
    const activeTiles = useRef<Map<string, THREE.Mesh>>(new Map());

    const material = useMemo(
        () =>
            new THREE.MeshBasicMaterial({
                color: prefersColorScheme === "dark" ? 0xf9f9f9 : 0x1b1917,
                side: THREE.DoubleSide,
            }),
        [prefersColorScheme],
    );

    const getRandomCoordinates = useCallback(() => {
        const x = Math.floor(Math.random() * resolution.x);
        const y = Math.floor(Math.random() * resolution.y);

        return { x, y };
    }, [resolution]);

    const createDiamond = useCallback(
        (maxSize = 1) => {
            const coords = getRandomCoordinates();
            const size = (1 / Math.SQRT2) * maxSize; // Gjør at diamanten passer i et 1x1 kvadrat
            const geometry = new THREE.PlaneGeometry(size, size);

            const plane = new THREE.Mesh(geometry, material);

            plane.position.x = coords.x;
            plane.position.y = coords.y;
            geometry.center();
            plane.rotation.set(0, 0, THREE.MathUtils.degToRad(45));

            if (!activeTiles.current.has(`${coords.x},${coords.y}`)) {
                activeTiles.current.set(`${coords.x},${coords.y}`, plane);
                return plane;
            }

            return createDiamond(maxSize);
        },
        [getRandomCoordinates, material],
    );

    // Set opp scene, kamera og renderer
    useEffect(() => {
        const tiles = activeTiles.current;

        if (typeof document !== "undefined" && rootRef.current) {
            renderer.current = new THREE.WebGLRenderer({
                alpha: true,
                antialias: true,
            });
            camera.current = new THREE.PerspectiveCamera(50, resolution.x / resolution.y, 0.1, 1000);
            scene.current = new THREE.Scene();

            const rootEl = rootRef.current;
            renderer.current.setClearColor(0x000000, 0);
            renderer.current.setSize(rootEl.clientWidth ?? 0, rootEl.clientHeight ?? 0);
            const cameraZPos = Math.max(resolution.x, resolution.y) * 0.9;
            camera.current.position.set(resolution.x / 2 - 0.25, resolution.y / 2 - 0.25, cameraZPos);

            rootEl.innerHTML = "";
            rootEl.appendChild(renderer.current.domElement);
        }

        return () => {
            renderer.current?.dispose();
            tiles.clear();
            scene.current?.clear();
        };
    }, [prefersColorScheme, resolution]);

    // Legg til initielle diamanter
    useEffect(() => {
        while (activeTiles.current.size < resolution.x * resolution.y * 0.25) {
            const diamondSize = Math.random() * 0.8 + 0.15;
            const diamond = createDiamond(diamondSize);
            scene.current?.add(diamond);
        }
    }, [material, resolution, createDiamond]);

    // Animasjonsloop
    useEffect(() => {
        let timeout: number;

        if (typeof window !== "undefined") {
            function animate() {
                const delta = Date.now() / 1000;
                const speed = 0.7;

                timeout = window.setTimeout(() => requestAnimationFrame(animate), 1000 / 60);

                activeTiles.current.forEach((tile, coords) => {
                    const [x, y] = coords.split(",").map((c) => parseInt(c));
                    const scale = THREE.MathUtils.lerp(
                        0.1,
                        1,
                        THREE.MathUtils.smoothstep(Math.abs(Math.sin(x * y * 0.045 + delta * speed)), 0, 1),
                    );
                    tile.scale.set(scale, scale, 1);
                });

                if (renderer.current && scene.current && camera.current) {
                    renderer.current.render(scene.current, camera.current);
                }
            }

            animate();
        }

        return () => {
            if (timeout && typeof window !== "undefined") {
                window.clearTimeout(timeout);
            }
        };
    }, []);

    return (
        <div
            className={cn("diamonds", className)}
            ref={rootRef}
            style={{
                width: "80%",
                aspectRatio: `${resolution.x}/${resolution.y}`,
            }}
        />
    );
};
