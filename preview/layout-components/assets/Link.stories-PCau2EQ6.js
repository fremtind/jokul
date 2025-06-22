import{j as n}from"./jsx-runtime-BbjHj44Y.js";import{R as x,r as h}from"./index-C6mWTJJr.js";import{c as y}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";const s=x.forwardRef(function(c,m){const{external:t=!1,className:d="",children:f,as:k="a",...a}=c,u=k,o=h.useId();return n.jsxs(u,{ref:m,className:y("jkl-link",d,{"jkl-link--external":t}),"aria-describedby":t?o:void 0,...a,children:[n.jsx("span",{className:"jkl-link__content",children:f}),(t||a.target==="_blank")&&n.jsx("span",{hidden:!0,id:o,children:"Ekstern lenke"})]})});s.__docgenInfo={description:"",methods:[],displayName:"Link",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]'},description:""}}};const E={title:"Komponenter/Link",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text",defaultValue:"https://www.fremtind.no"}}},e={name:"Link",args:{children:"Example Link",external:!1,as:"a",target:"#",href:"https://www.fremtind.no"},render:r=>n.jsx(s,{style:{cursor:"pointer"},...r,as:r.as||"a"})};var i,l,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const R=["LinkStory"];export{e as LinkStory,R as __namedExportsOrder,E as default};
