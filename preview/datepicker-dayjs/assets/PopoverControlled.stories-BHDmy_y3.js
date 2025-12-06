import{j as o,r as a}from"./iframe-s-7ILYx9.js";import{B as m}from"./Button-CwWO_8QQ.js";import{P as r}from"./Popover-DfZOGrUZ.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-Fp5c39wE.js";import"./Loader-B2fug2BN.js";import"./useDelayedRender-CVV9hUGd.js";import"./floating-ui.react-CxutYVjI.js";import"./index-BUU5m9UT.js";import"./index-jmIy06zR.js";const B={title:"Komponenter/Popover/PopoverControlled",component:r},l=n=>{const{open:t,...i}=n,[p,s]=a.useState(t);return a.useEffect(()=>{s(t)},[t]),o.jsxs(r,{...i,open:p,onOpenChange:s,children:[o.jsx(r.Trigger,{onClick:()=>s(!p),"aria-expanded":p,asChild:!0,children:o.jsx(m,{variant:"primary",children:"Åpne popover"})}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(l,{...n})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverControlledComponent {...args} />
}`,...e.parameters?.docs?.source}}};const S=["PopoverControlled"];export{e as PopoverControlled,S as __namedExportsOrder,B as default};
