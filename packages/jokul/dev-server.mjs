import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, Text, render, useInput, useApp } from "ink";
import SelectInput from "ink-select-input";
import glob from "tiny-glob";
import { createServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import { copyJklFonts, setupDev } from "../../utils/vite/index.mjs";

export default function App() {
    const [components, setComponents] = useState([]);
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [log, setLog] = useState([]);
    const server = useRef(null);
    const app = useApp();

    const customLogger = useMemo(() => {
        return {
            info: (msg) =>
                setLog([
                    ...log,
                    <Text>
                        [{new Date().toLocaleString()}]: {msg}
                    </Text>,
                ]),
            warn: (msg) =>
                setLog([
                    ...log,
                    <Text color="yellow">
                        [{new Date().toLocaleString()}]: {msg}
                    </Text>,
                ]),
            warnOnce: (msg) =>
                setLog([
                    ...log,
                    <Text color="yellow">
                        [{new Date().toLocaleString()}]: {msg}
                    </Text>,
                ]),
            error: (msg) =>
                setLog([
                    ...log,
                    <Text color="red">
                        [{new Date().toLocaleString()}]: {msg}
                    </Text>,
                ]),
            clearScreen: () => setLog([]),
        };
    }, [setLog, log]);

    useEffect(() => {
        glob("**/documentation/Example.tsx").then((result) =>
            setComponents(
                result.map((file) => {
                    return {
                        label: file.split("/")[2],
                        value: resolve(fileURLToPath(new URL(file, import.meta.url)), ".."),
                    };
                }),
            ),
        );
    }, []);

    useInput((input) => {
        if (input === "q") {
            if (server.current !== null) {
                server.current.close();
                server.current = null;
                setSelectedComponent(null);
            } else {
                app.exit();
            }
        }
    });

    const handleSelect = async (component) => {
        setSelectedComponent(component);

        console.log(resolve(component.value, "public", "fonts"));

        server.current = await createServer({
            mode: "development",
            plugins: [react(), copyJklFonts(resolve(component.value, "public", "fonts")), setupDev(component.value)],
            configFile: false,
            root: component.value,
            server: {
                port: 3000,
            },
            customLogger,
        });
        await server.current.listen();
    };

    return (
        <Box margin={2} flexDirection="column">
            {selectedComponent === null && (
                <>
                    <Text>Choose a component from the list below</Text>
                    <SelectInput items={components} onSelect={handleSelect} />
                </>
            )}
            {selectedComponent !== null && (
                <Box flexDirection="column" gap={1}>
                    <Text>
                        Dev-server for component <Text color="green">{selectedComponent.label}</Text> started on port
                        3000
                    </Text>
                    <Text>Use 'q' to exit to main menu</Text>
                </Box>
            )}
            {log.length > 0 && (
                <Box marginTop={4} flexDirection="column">
                    {log.map((l, index) => (
                        <Box key={index}>{l}</Box>
                    ))}
                </Box>
            )}
        </Box>
    );
}

render(<App />);
