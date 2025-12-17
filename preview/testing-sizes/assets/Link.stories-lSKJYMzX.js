import{j as e}from"./iframe-W-C0B6po.js";import{L as t}from"./Link-BK5LbbQr.js";/* empty css               */import{c as l}from"./cow-CdXr5BwN.js";import{F as o}from"./Flex-Cc6fYPOS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-DPzCkfeb.js";import"./mergeRefs-DYeATpDE.js";const g={title:"Komponenter/Link",component:t,argTypes:{href:{control:"text"}}},n={name:"Link",args:{children:"Lenke",external:!1,as:"a",target:"#",href:"https://www.fremtind.no",download:!1},render:r=>e.jsx(t,{...r,as:r.as||"a"})},s={name:"Mønster: Lenke i avsnitt",args:{href:"https://www.fremtind.no",download:!1},render:r=>e.jsxs("p",{style:{maxWidth:"45ch"},children:["Vi bruker lenker for å lede brukeren til"," ",e.jsx(t,{...r,external:!1,children:"andre nettsider"}),", eller til andre steder på samme nettside."," ",e.jsx(t,{...r,external:!0,target:"_blank",children:"Lenker til eksterne nettsider"})," ","markeres med en pil opp og til høyre etter lenketeksten."]})},i={name:"Mønster: Lenke i andre tekststiler",args:{children:"lenke",external:!1,as:"a",target:"#",href:"https://www.fremtind.no"},render:r=>e.jsxs(o,{direction:"column",style:{gap:"1.5lh"},children:[e.jsxs("h1",{className:"jkl-title",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke ",e.jsx(t,{...r})," i titler"]}),e.jsxs("h2",{className:"jkl-title-small",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke ",e.jsx(t,{...r})," i små titler"]}),e.jsx("hr",{style:{width:"100%",opacity:"0.1"}}),e.jsxs("h2",{className:"jkl-heading-1",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke ",e.jsx(t,{...r})," i overskrifter"]}),e.jsxs("h2",{className:"jkl-heading-2",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke ",e.jsx(t,{...r})," i overskrifter"]}),e.jsxs("h3",{className:"jkl-heading-3",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke ",e.jsx(t,{...r})," i overskrifter"]}),e.jsxs("h4",{className:"jkl-heading-4",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke ",e.jsx(t,{...r})," i overskrifter"]}),e.jsxs("h5",{className:"jkl-heading-5",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke ",e.jsx(t,{...r})," i overskrifter"]}),e.jsx("hr",{style:{width:"100%",opacity:"0.1"}}),e.jsxs("p",{className:"jkl-body",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke ",e.jsx(t,{...r})," i avsnitt"]}),e.jsxs("small",{className:"jkl-small",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke ",e.jsx(t,{...r})," i små avsnitt"]})]})},a={name:"Mønster: Nedlastingslenke",args:{children:"fullstendig dekningsoversikt (PDF)",href:l,filename:"IPID",download:!0},render:r=>e.jsxs("p",{children:["Dekningsoversikten er forenklet. Last ned en ",e.jsx(t,{...r}),"."]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const j=["LinkStory","LinkInParagraphStory","LinkInOtherStory","DownloadStory"];export{a as DownloadStory,i as LinkInOtherStory,s as LinkInParagraphStory,n as LinkStory,j as __namedExportsOrder,g as default};
