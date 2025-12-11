import{j as a}from"./jsx-runtime-BbjHj44Y.js";import{L as s}from"./Link-BlbHBxXw.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";const d={title:"Komponenter/Link",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text",defaultValue:"https://www.fremtind.no"}}},r={name:"Link",args:{children:"Example Link",external:!1,as:"a",target:"#",href:"https://www.fremtind.no"},render:e=>a.jsx(s,{style:{cursor:"pointer"},...e,as:e.as||"a"})};var t,n,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Link",
  args: {
    children: "Example Link",
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
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const f=["LinkStory"];export{r as LinkStory,f as __namedExportsOrder,d as default};
