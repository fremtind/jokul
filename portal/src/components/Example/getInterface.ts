export const getInterface = (definitionFile: string) => {
    const typeArray = definitionFile.split("\n");

    let takeNext = false;

    // Rather naive .d.ts parser, will only pick out whats inside an Interface object
    const typeDef = typeArray.filter((line: string) => {
        let take = takeNext;
        if (line.match(/^(interface)/)) {
            take = true;
            takeNext = true;
        } else if (line.match(/^}/)) {
            takeNext = false;
        }
        return take;
    });
    return typeDef.join("\n");
};
