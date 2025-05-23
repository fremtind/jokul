import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react-swc";
import { Box, Text, render, useApp, useInput } from "ink";
import SelectInput from "ink-select-input";
import React, { useEffect, useMemo, useRef, useState } from "react";
import glob from "tiny-glob";
import { createServer } from "vite";
import { copyJklFonts, setupDev } from "../../utils/vite/index.mjs";

export default function App() {
    const [components, setComponents] = useState([]);
    const [filterString, setFilterString] = useState("");
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [log, setLog] = useState([]);
    const server = useRef(null);
    const app = useApp();

    const customLogger = useMemo(() => {
        return {
            info: (msg) =>
                setLog([
                    ...log,
                    <Text key={msg}>
                        [{new Date().toLocaleString()}]: {msg}
                    </Text>,
                ]),
            warn: (msg) =>
                setLog([
                    ...log,
                    <Text key={msg} color="yellow">
                        [{new Date().toLocaleString()}]: {msg}
                    </Text>,
                ]),
            warnOnce: (msg) =>
                setLog([
                    ...log,
                    <Text key={msg} color="yellow">
                        [{new Date().toLocaleString()}]: {msg}
                    </Text>,
                ]),
            error: (msg) =>
                setLog([
                    ...log,
                    <Text key={msg} color="red">
                        [{new Date().toLocaleString()}]: {msg}
                    </Text>,
                ]),
            clearScreen: () => setLog([]),
        };
    }, [log]);

    useEffect(() => {
        glob("**/development/Example.tsx").then((result) => {
            setComponents(
                result.map((file) => {
                    return {
                        label: file.split("/")[2],
                        value: resolve(
                            fileURLToPath(new URL(file, import.meta.url)),
                            "..",
                        ),
                    };
                }),
            );
        });
    }, []);

    useInput((input, key) => {
        if (input === "q") {
            if (server.current !== null) {
                server.current.close();
                server.current = null;
                setSelectedComponent(null);
                setFilterString("");
            } else {
                app.exit();
            }
        } else if (input.match(/[a-zA-Z]/)) {
            setFilterString((current) => current + input.toLowerCase());
        } else if (key.delete || key.backspace) {
            setFilterString((current) =>
                current.substring(0, current.length - 1),
            );
        }
    });

    const handleSelect = async (component) => {
        setSelectedComponent(component);

        server.current = await createServer({
            mode: "development",
            configFile: false,
            plugins: [
                react(),
                copyJklFonts(resolve(component.value, "public", "fonts")),
                setupDev(component.value),
            ],
            resolve: {
                alias: {
                    utils: resolve(
                        fileURLToPath(new URL(".", import.meta.url)),
                        "..",
                        "..",
                        "utils",
                    ),
                },
            },
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
                <Box gap={2} flexDirection="column">
                    <Text>Choose a component from the list below</Text>
                    <Text>Filter: {filterString}</Text>
                    <SelectInput
                        items={components.filter((component) =>
                            component.label.startsWith(filterString),
                        )}
                        onSelect={handleSelect}
                    />
                </Box>
            )}
            {selectedComponent !== null && (
                <Box flexDirection="column" gap={1}>
                    <Text>
                        Dev-server for component{" "}
                        <Text color="green">{selectedComponent.label}</Text>{" "}
                        started on port 3000
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
