import{j as o}from"./jsx-runtime-DqZpzl9T.js";import{r as s}from"./index-siqcju79.js";import{P as r}from"./Popover-ChW598Yk.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./getThemeAndDensity-CJSyFDcr.js";import"./index-BAyipmUG.js";import"./index-DpflvY8d.js";import"./clsx-B-dksMZM.js";const h={title:"Komponenter/Popover/PopoverUncontrolled",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a=n=>{const[t,p]=s.useState(!1);return o.jsxs(r,{...n,open:t,onOpenChange:p,children:[o.jsx(r.Trigger,{onClick:()=>p(!t),"aria-expanded":t,asChild:!0,children:"Åpne popover"}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(a,{...n})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverUncontrolledComponent {...args} />
}`,...e.parameters?.docs?.source}}};const C=["PopoverUncontrolled"];export{e as PopoverUncontrolled,C as __namedExportsOrder,h as default};
