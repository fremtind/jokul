import{R as o,r as p}from"./index-siqcju79.js";import{P as r}from"./Popover-CSZryDT8.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./getThemeAndDensity-Dbk6h1cS.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./clsx-B-dksMZM.js";const C={title:"Komponenter/Popover/PopoverUncontrolled",component:r,parameters:{layout:"centered"},tags:["autodocs"]},s=n=>{const[t,a]=p.useState(!1);return o.createElement(r,{...n,open:t,onOpenChange:a},o.createElement(r.Trigger,{onClick:()=>a(!t),"aria-expanded":t,asChild:!0},"Åpne popover"),o.createElement(r.Content,{padding:24},"Dette er innholdet i Popover"))},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.createElement(s,{...n})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverUncontrolledComponent {...args} />
}`,...e.parameters?.docs?.source}}};const O=["PopoverUncontrolled"];export{e as PopoverUncontrolled,O as __namedExportsOrder,C as default};
