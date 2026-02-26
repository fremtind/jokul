import{j as e,r as s}from"./iframe-BlL1f6tE.js";import{P as r}from"./Popover-kq7z1MzU.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./floating-ui.react-CUxkHCeH.js";import"./index-tTa7G1zm.js";import"./index-D4trGU9a.js";import"./clsx-B-dksMZM.js";import"./getThemeAndSize-CIzqY74s.js";const h={title:"Komponenter/Popover/PopoverUncontrolled",component:r},a=n=>{const[t,p]=s.useState(!1);return e.jsxs(r,{...n,open:t,onOpenChange:p,children:[e.jsx(r.Trigger,{onClick:()=>p(!t),"aria-expanded":t,asChild:!0,children:"Åpne popover"}),e.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},o={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>e.jsx(a,{...n})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverUncontrolledComponent {...args} />
}`,...o.parameters?.docs?.source}}};const C=["PopoverUncontrolled"];export{o as PopoverUncontrolled,C as __namedExportsOrder,h as default};
