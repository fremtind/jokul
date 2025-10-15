import{R as o,r as a}from"./index-siqcju79.js";import{P as r}from"./Popover-D5d05pSL.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./floating-ui.react-DOiTYs_Q.js";import"./jsx-runtime-DqZpzl9T.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./clsx-B-dksMZM.js";const O={title:"Komponenter/Popover/PopoverUncontrolled",component:r,parameters:{layout:"centered"},tags:["autodocs"]},s=n=>{const[t,p]=a.useState(!1);return o.createElement(r,{...n,open:t,onOpenChange:p},o.createElement(r.Trigger,{onClick:()=>p(!t),"aria-expanded":t,asChild:!0},"Åpne popover"),o.createElement(r.Content,{padding:24},"Dette er innholdet i Popover"))},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.createElement(s,{...n})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverUncontrolledComponent {...args} />
}`,...e.parameters?.docs?.source}}};const f=["PopoverUncontrolled"];export{e as PopoverUncontrolled,f as __namedExportsOrder,O as default};
