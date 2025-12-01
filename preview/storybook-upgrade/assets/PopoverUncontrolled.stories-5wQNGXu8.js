import{j as o,r as s}from"./iframe-BK3BmULa.js";import{P as r}from"./Popover-_ejp3cA3.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./floating-ui.react-BLZh1wTI.js";import"./index-BEbXM0-J.js";import"./index-DSTBtrW4.js";import"./clsx-B-dksMZM.js";const P={title:"Komponenter/Popover/PopoverUncontrolled",component:r},a=n=>{const[t,p]=s.useState(!1);return o.jsxs(r,{...n,open:t,onOpenChange:p,children:[o.jsx(r.Trigger,{onClick:()=>p(!t),"aria-expanded":t,asChild:!0,children:"Åpne popover"}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(a,{...n})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverUncontrolledComponent {...args} />
}`,...e.parameters?.docs?.source}}};const h=["PopoverUncontrolled"];export{e as PopoverUncontrolled,h as __namedExportsOrder,P as default};
