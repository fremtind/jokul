import{j as o,r as a}from"./iframe-Dj_0KXfL.js";import{B as m}from"./Button-DV1CoMY_.js";import{P as r}from"./Popover-CMX39Upn.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-Bqh6uB5l.js";import"./Loader-DX-kpcKZ.js";import"./useDelayedRender-Cve8I8gR.js";import"./floating-ui.react-DO0xnAKn.js";import"./index-C0RX7T4f.js";import"./index-mZKTmXK-.js";import"./getThemeAndSize-CZAj3IXt.js";const S={title:"Komponenter/Popover/PopoverControlled",component:r},l=n=>{const{open:t,...i}=n,[p,s]=a.useState(t);return a.useEffect(()=>{s(t)},[t]),o.jsxs(r,{...i,open:p,onOpenChange:s,children:[o.jsx(r.Trigger,{onClick:()=>s(!p),"aria-expanded":p,asChild:!0,children:o.jsx(m,{variant:"primary",children:"Åpne popover"})}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(l,{...n})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverControlledComponent {...args} />
}`,...e.parameters?.docs?.source}}};const _=["PopoverControlled"];export{e as PopoverControlled,_ as __namedExportsOrder,S as default};
