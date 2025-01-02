import { Box, Text, render, useApp, useInput } from "ink";
import SelectInput from "ink-select-input";
import React, { useEffect, useMemo, useRef, useState } from "react";
import glob from "tiny-glob";
import { createViteServer } from "./create-vite-server.mjs";

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
        glob("**/documentation/Example.tsx").then((result) => {
            setComponents(result.map((file) => file.split("/")[2]));
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
        setSelectedComponent(component.label);

        server.current = await createViteServer(component.label, customLogger);
        await server.current.listen();
    };

    return (
        <Box margin={2} flexDirection="column">
            {selectedComponent === null && (
                <Box gap={2} flexDirection="column">
                    <Text>Choose a component from the list below</Text>
                    <Text>Filter: {filterString}</Text>
                    <SelectInput
                        items={components
                            .filter((component) =>
                                component.startsWith(filterString),
                            )
                            .map((component) => ({
                                label: component,
                            }))}
                        onSelect={handleSelect}
                    />
                </Box>
            )}
            {selectedComponent !== null && (
                <Box flexDirection="column" gap={1}>
                    <Text>
                        Dev-server for component{" "}
                        <Text color="green">{selectedComponent}</Text> started
                        on port 3000
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
