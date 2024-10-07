declare module "*.jsx";

declare module "*?raw" {
    const content: string;
    export default content;
}
