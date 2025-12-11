import{j as o}from"./jsx-runtime-BbjHj44Y.js";import{r as m}from"./index-C6mWTJJr.js";import{B as l}from"./Button-BAfxjS2B.js";import{P as r}from"./Popover-CYLcl0tj.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-ByfnePFg.js";import"./Loader-DeP2h7x0.js";import"./useDelayedRender-B8sMdCvv.js";import"./getThemeAndDensity-DZpqJRtY.js";import"./index-zunobDwC.js";const B={title:"Komponenter/Popover/PopoverControlled",component:r,parameters:{layout:"centered"},tags:["autodocs"]},d=n=>{const[t,p]=m.useState(!1);return o.jsxs(r,{...n,open:t,onOpenChange:p,children:[o.jsx(r.Trigger,{onClick:()=>p(!t),"aria-expanded":t,asChild:!0,children:o.jsx(l,{variant:"primary",children:"Åpne popover"})}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(d,{...n})};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverControlledComponent {...args} />
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const S=["PopoverControlled"];export{e as PopoverControlled,S as __namedExportsOrder,B as default};
