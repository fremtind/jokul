const makeLink = (title: string, page: string, section?: string) => ({
    title,
    page,
    section,
});

const makeDeveloperLink = (title: string, page: string) => makeLink(title, page, "developer");
const makeDesignerLink = (title: string, page: string) => makeLink(title, page, "designer");
const makeCoreLink = (title: string, page: string) => makeLink(title, page, "core");
const makeComponentLink = (title: string, page: string) => makeLink(title, page, "components");
const makeProfileLink = (title: string, page: string) => makeLink(title, page, "profile");
const makeExampleLink = (title: string, page: string) => makeLink(title, page, "patterns");

export const developerLinks = [
    makeDeveloperLink("Kom i gang", "getting-started"),
    makeDeveloperLink("Bidragsguide", "contribute"),
    makeDeveloperLink("Testguide", "test"),
    makeDeveloperLink("Portalguide", "portal"),
];

export const designerLinks = [makeDesignerLink("Kom i gang", "getting-started")];

export const coreLinks = [
    makeCoreLink("Designprinsipper", "principle"),
    makeCoreLink("Bevegelse", "motion"),
    makeCoreLink("Klarhet", "clarity"),
    makeCoreLink("Elevasjon", "elevation"),
    makeCoreLink("Mønstre", "pattern"),
];

export const componentLinks = [
    makeComponentLink("Alle komponenter", ""),
    makeComponentLink("Knapper", "button"),
    makeComponentLink("Radioknapp", "radiobutton"),
    makeComponentLink("Avmerkingsbokser", "checkbox"),
    makeComponentLink("Feltgruppering", "fieldgroup"),
    makeComponentLink("Bryter", "toggleswitch"),
    makeComponentLink("Trekkspilliste", "accordion"),
    makeComponentLink("Datovelger", "datepicker"),
    makeComponentLink("Nedtrekksliste", "select"),
    makeComponentLink("Typografi", "typography"),
    makeComponentLink("Tabell", "table"),
    makeComponentLink("Tekstfelt", "textfield"),
    makeComponentLink("Langt tekstfelt", "textarea"),
    makeComponentLink("Meldinger", "messagebox"),
    makeComponentLink("Fremdriftsindikator", "progressbar"),
    makeComponentLink("Logo", "logo"),
    makeComponentLink("Logostempel", "logostamp"),
    makeComponentLink("Lasteindikator", "loader"),
    makeComponentLink("Delelinje", "dividerline"),
    makeComponentLink("Kort", "card"),
    makeComponentLink("Liste", "list"),
    makeComponentLink("Hamburgermeny", "hamburger"),
];

export const profileLinks = [
    makeProfileLink("Farger", "colors"),
    makeProfileLink("Tilgjengelighet", "a11y"),
    makeProfileLink("Stil og tone", "tone"),
    makeProfileLink("Typografi", "typography"),
    makeProfileLink("Bildestil", "picture"),
    makeProfileLink("Ikoner", "icon"),
    makeProfileLink("Sperring", "spacing"),
    makeProfileLink("Layout", "layout"),
    makeProfileLink("Skygger", "shadow"),
    makeProfileLink("Logo", "logo"),
];

export const exampleLinks = [
    makeExampleLink("Kjøpsflyt", "purchaseFlow"),
    makeExampleLink("Footer", "footer"),
    makeExampleLink("Header", "header"),
];
