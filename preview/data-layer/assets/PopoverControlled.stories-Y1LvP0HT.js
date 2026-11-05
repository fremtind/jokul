import{j as o,r as a}from"./iframe-CCFsrwZr.js";import{B as m}from"./Button-sh8zDeO6.js";import{P as r}from"./Popover-BAuWC_3U.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-BcMNlBnL.js";import"./Loader-CPyZsk4X.js";import"./types-BlFGa32c.js";import"./useDelayedRender-D-JhZRO2.js";import"./floating-ui.react-CXiR0d21.js";import"./index-eDCFBbgs.js";import"./index-F8kemcsY.js";import"./getThemeAndSize-CZAj3IXt.js";const _={title:"Komponenter/Popover/PopoverControlled",component:r},l=n=>{const{open:t,...i}=n,[p,s]=a.useState(t);return a.useEffect(()=>{s(t)},[t]),o.jsxs(r,{...i,open:p,onOpenChange:s,children:[o.jsx(r.Trigger,{onClick:()=>s(!p),"aria-expanded":p,asChild:!0,children:o.jsx(m,{variant:"primary",children:"Åpne popover"})}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(l,{...n})},k=["PopoverControlled"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverControlledComponent {...args} />
}`,...e.parameters?.docs?.source}}};export{e as PopoverControlled,k as __namedExportsOrder,_ as default};
