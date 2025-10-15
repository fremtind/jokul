import{j as e}from"./jsx-runtime-D9p_MChh.js";import"./index-CRL2yuNo.js";import{L as t}from"./Link-BJbN6Wxp.js";/* empty css               */import{F as p}from"./Flex-C2kqvdXP.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./tokens-NmszT_nq.js";const v={title:"Komponenter/Link",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text",defaultValue:"https://www.fremtind.no"}}},n={name:"Link",args:{children:"Lenke",external:!1,as:"a",target:"#",href:"https://www.fremtind.no"},render:r=>e.jsx(t,{style:{cursor:"pointer"},...r,as:r.as||"a"})},s={name:"Mønster: Lenke i avsnitt",args:{href:"https://www.fremtind.no"},render:r=>e.jsxs("p",{style:{maxWidth:"45ch"},children:["Vi bruker lenker for å lede brukeren til"," ",e.jsx(t,{...r,external:!1,style:{cursor:"pointer"},children:"andre nettsider"}),", eller til andre steder på samme nettside."," ",e.jsx(t,{...r,external:!0,target:"_blank",style:{cursor:"pointer"},children:"Lenker til eksterne nettsider"})," ","markeres med en pil opp og til høyre etter lenketeksten."]})},i={name:"Mønster: Lenke i andre tekststiler",args:{children:"lenke",external:!1,as:"a",target:"#",href:"https://www.fremtind.no"},render:r=>e.jsxs(p,{direction:"column",style:{gap:"1.5lh"},children:[e.jsxs("h1",{className:"jkl-title",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke"," ",e.jsx(t,{...r,style:{cursor:"pointer"}})," i titler"]}),e.jsxs("h2",{className:"jkl-title-small",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke"," ",e.jsx(t,{...r,style:{cursor:"pointer"}})," i små titler"]}),e.jsx("hr",{style:{width:"100%",opacity:"0.1"}}),e.jsxs("h2",{className:"jkl-heading-1",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke"," ",e.jsx(t,{...r,style:{cursor:"pointer"}})," i overskrifter"]}),e.jsxs("h2",{className:"jkl-heading-2",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke"," ",e.jsx(t,{...r,style:{cursor:"pointer"}})," i overskrifter"]}),e.jsxs("h3",{className:"jkl-heading-3",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke"," ",e.jsx(t,{...r,style:{cursor:"pointer"}})," i overskrifter"]}),e.jsxs("h4",{className:"jkl-heading-4",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke"," ",e.jsx(t,{...r,style:{cursor:"pointer"}})," i overskrifter"]}),e.jsxs("h5",{className:"jkl-heading-5",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke"," ",e.jsx(t,{...r,style:{cursor:"pointer"}})," i overskrifter"]}),e.jsx("hr",{style:{width:"100%",opacity:"0.1"}}),e.jsxs("p",{className:"jkl-body",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke"," ",e.jsx(t,{...r,style:{cursor:"pointer"}})," i avsnitt"]}),e.jsxs("small",{className:"jkl-small",style:{maxWidth:"55ch"},children:["Du står fritt til å bruke"," ",e.jsx(t,{...r,style:{cursor:"pointer"}})," i små avsnitt"]})]})};var l,a,o;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var h,c,d;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var k,m,u;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const W=["LinkStory","LinkInParagraphStory","LinkInOtherStory"];export{i as LinkInOtherStory,s as LinkInParagraphStory,n as LinkStory,W as __namedExportsOrder,v as default};
