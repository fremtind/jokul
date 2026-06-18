import{j as e,r as s}from"./iframe-D0NguVD0.js";import{P as r}from"./Popover-DNcrVXam.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./floating-ui.react-1Ym94UtL.js";import"./index-BS1THbn_.js";import"./index-CgwcO4d-.js";import"./clsx-B-dksMZM.js";import"./getThemeAndSize-CZAj3IXt.js";const h={title:"Komponenter/Popover/PopoverUncontrolled",component:r},a=n=>{const[t,p]=s.useState(!1);return e.jsxs(r,{...n,open:t,onOpenChange:p,children:[e.jsx(r.Trigger,{onClick:()=>p(!t),"aria-expanded":t,asChild:!0,children:"Åpne popover"}),e.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},o={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>e.jsx(a,{...n})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverUncontrolledComponent {...args} />
}`,...o.parameters?.docs?.source}}};const C=["PopoverUncontrolled"];export{o as PopoverUncontrolled,C as __namedExportsOrder,h as default};
