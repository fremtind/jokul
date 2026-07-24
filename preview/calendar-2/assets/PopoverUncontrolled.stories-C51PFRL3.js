import{j as e,r as s}from"./iframe-DYWdyUxL.js";import{P as r}from"./Popover-OTsOd-QW.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./floating-ui.react-eplC1g-s.js";import"./index-B7YMja9t.js";import"./index-DUn7pdzH.js";import"./clsx-B-dksMZM.js";import"./getThemeAndSize-CZAj3IXt.js";const h={title:"Komponenter/Popover/PopoverUncontrolled",component:r},a=n=>{const[t,p]=s.useState(!1);return e.jsxs(r,{...n,open:t,onOpenChange:p,children:[e.jsx(r.Trigger,{onClick:()=>p(!t),"aria-expanded":t,asChild:!0,children:"Åpne popover"}),e.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},o={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>e.jsx(a,{...n})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverUncontrolledComponent {...args} />
}`,...o.parameters?.docs?.source}}};const C=["PopoverUncontrolled"];export{o as PopoverUncontrolled,C as __namedExportsOrder,h as default};
