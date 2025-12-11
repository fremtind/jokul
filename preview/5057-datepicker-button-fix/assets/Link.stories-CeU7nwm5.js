import{R as e}from"./index-siqcju79.js";import{L as r}from"./Link-Dwdm3rDB.js";import{F as a}from"./Flex-CLtnP1gB.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./tokens-CvksrKef.js";const d={title:"Komponenter/Link",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text",defaultValue:"https://www.fremtind.no"}}},n={name:"Link",args:{children:"Lenke",external:!1,as:"a",target:"#",href:"https://www.fremtind.no"},render:t=>e.createElement(r,{style:{cursor:"pointer"},...t,as:t.as||"a"})},s={name:"Mønster: Lenke i avsnitt",args:{href:"https://www.fremtind.no"},render:t=>e.createElement("p",{style:{maxWidth:"45ch"}},"Vi bruker lenker for å lede brukeren til"," ",e.createElement(r,{...t,external:!1,style:{cursor:"pointer"}},"andre nettsider"),", eller til andre steder på samme nettside."," ",e.createElement(r,{...t,external:!0,target:"_blank",style:{cursor:"pointer"}},"Lenker til eksterne nettsider")," ","markeres med en pil opp og til høyre etter lenketeksten.")},i={name:"Mønster: Lenke i andre tekststiler",args:{children:"lenke",external:!1,as:"a",target:"#",href:"https://www.fremtind.no"},render:t=>e.createElement(a,{direction:"column",style:{gap:"1.5lh"}},e.createElement("h1",{className:"jkl-title",style:{maxWidth:"55ch"}},"Du står fritt til å bruke"," ",e.createElement(r,{...t,style:{cursor:"pointer"}})," i titler"),e.createElement("h2",{className:"jkl-title-small",style:{maxWidth:"55ch"}},"Du står fritt til å bruke"," ",e.createElement(r,{...t,style:{cursor:"pointer"}})," i små titler"),e.createElement("hr",{style:{width:"100%",opacity:"0.1"}}),e.createElement("h2",{className:"jkl-heading-1",style:{maxWidth:"55ch"}},"Du står fritt til å bruke"," ",e.createElement(r,{...t,style:{cursor:"pointer"}})," i overskrifter"),e.createElement("h2",{className:"jkl-heading-2",style:{maxWidth:"55ch"}},"Du står fritt til å bruke"," ",e.createElement(r,{...t,style:{cursor:"pointer"}})," i overskrifter"),e.createElement("h3",{className:"jkl-heading-3",style:{maxWidth:"55ch"}},"Du står fritt til å bruke"," ",e.createElement(r,{...t,style:{cursor:"pointer"}})," i overskrifter"),e.createElement("h4",{className:"jkl-heading-4",style:{maxWidth:"55ch"}},"Du står fritt til å bruke"," ",e.createElement(r,{...t,style:{cursor:"pointer"}})," i overskrifter"),e.createElement("h5",{className:"jkl-heading-5",style:{maxWidth:"55ch"}},"Du står fritt til å bruke"," ",e.createElement(r,{...t,style:{cursor:"pointer"}})," i overskrifter"),e.createElement("hr",{style:{width:"100%",opacity:"0.1"}}),e.createElement("p",{className:"jkl-body",style:{maxWidth:"55ch"}},"Du står fritt til å bruke"," ",e.createElement(r,{...t,style:{cursor:"pointer"}})," i avsnitt"),e.createElement("small",{className:"jkl-small",style:{maxWidth:"55ch"}},"Du står fritt til å bruke"," ",e.createElement(r,{...t,style:{cursor:"pointer"}})," i små avsnitt"))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Link",
  args: {
    children: "Lenke",
    external: false,
    as: "a",
    target: "#",
    href: "https://www.fremtind.no"
  },
  render: props =>
  // Setter style.cursor til pointer fordi Storybook overskriver default styles.
  <Link style={{
    cursor: "pointer"
  }} {...props} as={props.as || "a"} />
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Mønster: Lenke i avsnitt",
  args: {
    href: "https://www.fremtind.no"
  },
  render: args =>
  // Setter style.cursor til pointer fordi Storybook overskriver default styles.
  <p style={{
    maxWidth: "45ch"
  }}>
            Vi bruker lenker for å lede brukeren til{" "}
            <Link {...args} external={false} style={{
      cursor: "pointer"
    }}>
                andre nettsider
            </Link>
            , eller til andre steder på samme nettside.{" "}
            <Link {...args} external={true} target={"_blank"} style={{
      cursor: "pointer"
    }}>
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
                Du står fritt til å bruke{" "}
                <Link {...args} style={{
        cursor: "pointer"
      }} /> i titler
            </h1>

            <h2 className={"jkl-title-small"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{
        cursor: "pointer"
      }} /> i små titler
            </h2>

            <hr style={{
      width: "100%",
      opacity: "0.1"
    }} />

            <h2 className={"jkl-heading-1"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{
        cursor: "pointer"
      }} /> i overskrifter
            </h2>

            <h2 className={"jkl-heading-2"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{
        cursor: "pointer"
      }} /> i overskrifter
            </h2>

            <h3 className={"jkl-heading-3"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{
        cursor: "pointer"
      }} /> i overskrifter
            </h3>

            <h4 className={"jkl-heading-4"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{
        cursor: "pointer"
      }} /> i overskrifter
            </h4>

            <h5 className={"jkl-heading-5"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{
        cursor: "pointer"
      }} /> i overskrifter
            </h5>

            <hr style={{
      width: "100%",
      opacity: "0.1"
    }} />

            <p className={"jkl-body"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{
        cursor: "pointer"
      }} /> i avsnitt
            </p>

            <small className={"jkl-small"} style={{
      maxWidth: "55ch"
    }}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{
        cursor: "pointer"
      }} /> i små avsnitt
            </small>
        </Flex>
}`,...i.parameters?.docs?.source}}};const u=["LinkStory","LinkInParagraphStory","LinkInOtherStory"];export{i as LinkInOtherStory,s as LinkInParagraphStory,n as LinkStory,u as __namedExportsOrder,d as default};
