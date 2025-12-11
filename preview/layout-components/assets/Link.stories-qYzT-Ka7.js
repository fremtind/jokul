import{R as e}from"./index-siqcju79.js";import{L as r}from"./Link-Dwdm3rDB.js";/* empty css               */import{c as i}from"./cow-CdXr5BwN.js";import{F as o}from"./Flex-CB0XPCq0.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./tokens-CmXyXTIM.js";import"./SlotComponent-CWN6EcE2.js";const g={title:"Komponenter/Link",component:r,parameters:{layout:"centered"},tags:["autodocs","links"],argTypes:{href:{control:"text"}}},n={name:"Link",args:{children:"Lenke",external:!1,as:"a",target:"#",href:"https://www.fremtind.no",download:!1},render:t=>e.createElement(r,{...t,as:t.as||"a"})},a={name:"Mønster: Lenke i avsnitt",args:{href:"https://www.fremtind.no",download:!1},render:t=>e.createElement("p",{style:{maxWidth:"45ch"}},"Vi bruker lenker for å lede brukeren til"," ",e.createElement(r,{...t,external:!1},"andre nettsider"),", eller til andre steder på samme nettside."," ",e.createElement(r,{...t,external:!0,target:"_blank"},"Lenker til eksterne nettsider")," ","markeres med en pil opp og til høyre etter lenketeksten.")},s={name:"Mønster: Lenke i andre tekststiler",args:{children:"lenke",external:!1,as:"a",target:"#",href:"https://www.fremtind.no"},render:t=>e.createElement(o,{direction:"column",style:{gap:"1.5lh"}},e.createElement("h1",{className:"jkl-title",style:{maxWidth:"55ch"}},"Du står fritt til å bruke ",e.createElement(r,{...t})," i titler"),e.createElement("h2",{className:"jkl-title-small",style:{maxWidth:"55ch"}},"Du står fritt til å bruke ",e.createElement(r,{...t})," i små titler"),e.createElement("hr",{style:{width:"100%",opacity:"0.1"}}),e.createElement("h2",{className:"jkl-heading-1",style:{maxWidth:"55ch"}},"Du står fritt til å bruke ",e.createElement(r,{...t})," i overskrifter"),e.createElement("h2",{className:"jkl-heading-2",style:{maxWidth:"55ch"}},"Du står fritt til å bruke ",e.createElement(r,{...t})," i overskrifter"),e.createElement("h3",{className:"jkl-heading-3",style:{maxWidth:"55ch"}},"Du står fritt til å bruke ",e.createElement(r,{...t})," i overskrifter"),e.createElement("h4",{className:"jkl-heading-4",style:{maxWidth:"55ch"}},"Du står fritt til å bruke ",e.createElement(r,{...t})," i overskrifter"),e.createElement("h5",{className:"jkl-heading-5",style:{maxWidth:"55ch"}},"Du står fritt til å bruke ",e.createElement(r,{...t})," i overskrifter"),e.createElement("hr",{style:{width:"100%",opacity:"0.1"}}),e.createElement("p",{className:"jkl-body",style:{maxWidth:"55ch"}},"Du står fritt til å bruke ",e.createElement(r,{...t})," i avsnitt"),e.createElement("small",{className:"jkl-small",style:{maxWidth:"55ch"}},"Du står fritt til å bruke ",e.createElement(r,{...t})," i små avsnitt"))},l={name:"Mønster: Nedlastingslenke",args:{children:"fullstendig dekningsoversikt (PDF)",href:i,filename:"IPID",download:!0},render:t=>e.createElement("p",null,"Dekningsoversikten er forenklet. Last ned en ",e.createElement(r,{...t}),".")};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Link",
  args: {
    children: "Lenke",
    external: false,
    as: "a",
    target: "#",
    href: "https://www.fremtind.no",
    download: false
  },
  render: args =>
  // Setter style.cursor til pointer fordi Storybook overskriver default styles.
  <Link {...args} as={args.as || "a"} />
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Mønster: Lenke i avsnitt",
  args: {
    href: "https://www.fremtind.no",
    download: false
  },
  render: args =>
  // Setter style.cursor til pointer fordi Storybook overskriver default styles.
  <p style={{
    maxWidth: "45ch"
  }}>
            Vi bruker lenker for å lede brukeren til{" "}
            <Link {...args} external={false}>
                andre nettsider
            </Link>
            , eller til andre steder på samme nettside.{" "}
            <Link {...args} external={true} target={"_blank"}>
                Lenker til eksterne nettsider
            </Link>{" "}
            markeres med en pil opp og til høyre etter lenketeksten.
        </p>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Mønster: Lenke i andre tekststiler",
  args: {
    children: "lenke",
    external: false,
    as: "a",
    target: "#",
    href: "https://www.fremtind.no"
  },
  render: args =>
  // Setter style.cursor til pointer fordi Storybook overskriver default styles.
  <Flex direction={"column"} style={{
    gap: "1.5lh"
  }}>
            <h1 className={"jkl-title"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke <Link {...args} /> i titler
            </h1>

            <h2 className={"jkl-title-small"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke <Link {...args} /> i små titler
            </h2>

            <hr style={{
      width: "100%",
      opacity: "0.1"
    }} />

            <h2 className={"jkl-heading-1"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke <Link {...args} /> i overskrifter
            </h2>

            <h2 className={"jkl-heading-2"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke <Link {...args} /> i overskrifter
            </h2>

            <h3 className={"jkl-heading-3"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke <Link {...args} /> i overskrifter
            </h3>

            <h4 className={"jkl-heading-4"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke <Link {...args} /> i overskrifter
            </h4>

            <h5 className={"jkl-heading-5"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke <Link {...args} /> i overskrifter
            </h5>

            <hr style={{
      width: "100%",
      opacity: "0.1"
    }} />

            <p className={"jkl-body"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke <Link {...args} /> i avsnitt
            </p>

            <small className={"jkl-small"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke <Link {...args} /> i små avsnitt
            </small>
        </Flex>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Mønster: Nedlastingslenke",
  args: {
    children: "fullstendig dekningsoversikt (PDF)",
    href: url.default,
    filename: "IPID",
    download: true
  },
  render: args =>
  // Setter style.cursor til pointer fordi Storybook overskriver default styles.
  <p>
            Dekningsoversikten er forenklet. Last ned en <Link {...args} />.
        </p>
}`,...l.parameters?.docs?.source}}};const L=["LinkStory","LinkInParagraphStory","LinkInOtherStory","DownloadStory"];export{l as DownloadStory,s as LinkInOtherStory,a as LinkInParagraphStory,n as LinkStory,L as __namedExportsOrder,g as default};
