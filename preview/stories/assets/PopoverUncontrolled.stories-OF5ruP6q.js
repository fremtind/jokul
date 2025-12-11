import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{r as s}from"./index-Bv6P490N.js";import{P as r}from"./Popover-D3BDo8Zy.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./floating-ui.react-B0VoLFAt.js";import"./index-BPlpgERE.js";import"./index-cKcTyOJX.js";import"./clsx-B-dksMZM.js";import"./getThemeAndDensity-v_O0Epee.js";const C={title:"Komponenter/Popover/PopoverUncontrolled",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a=n=>{const[t,p]=s.useState(!1);return e.jsxs(r,{...n,open:t,onOpenChange:p,children:[e.jsx(r.Trigger,{onClick:()=>p(!t),"aria-expanded":t,asChild:!0,children:"Åpne popover"}),e.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},o={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>e.jsx(a,{...n})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverUncontrolledComponent {...args} />
}`,...o.parameters?.docs?.source}}};const f=["PopoverUncontrolled"];export{o as PopoverUncontrolled,f as __namedExportsOrder,C as default};
