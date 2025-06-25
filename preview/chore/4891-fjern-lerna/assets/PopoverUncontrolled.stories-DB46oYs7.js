import{j as o}from"./jsx-runtime-BbgvZ3_S.js";import{r as m}from"./index-C67T7Eu_.js";import{P as r}from"./Popover-BjU55clW.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-gnU0ypJ3.js";import"./getThemeAndDensity-Cm6eRMnx.js";import"./index-CL8M0osq.js";import"./index-BREEWjdf.js";import"./clsx-B-dksMZM.js";const O={title:"Komponenter/Popover/PopoverUncontrolled",component:r,parameters:{layout:"centered"},tags:["autodocs"]},i=n=>{const[t,p]=m.useState(!1);return o.jsxs(r,{...n,open:t,onOpenChange:p,children:[o.jsx(r.Trigger,{onClick:()=>p(!t),"aria-expanded":t,asChild:!0,children:"Åpne popover"}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(i,{...n})};var s,a,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverUncontrolledComponent {...args} />
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const j=["PopoverUncontrolled"];export{e as PopoverUncontrolled,j as __namedExportsOrder,O as default};
