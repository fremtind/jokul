import{j as o,r as a}from"./iframe-CpjE09ZT.js";import{B as m}from"./Button-DoXCULlV.js";import{P as r}from"./Popover-EZKDDqmm.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-B_g86ocX.js";import"./Loader-rGq_P8Wv.js";import"./types-BlFGa32c.js";import"./useDelayedRender-EYEVPfKQ.js";import"./floating-ui.react-BxJtgVnT.js";import"./index-D-W_yWf6.js";import"./index-CjVbQgGS.js";import"./getThemeAndSize-CZAj3IXt.js";const _={title:"Komponenter/Popover/PopoverControlled",component:r},l=n=>{const{open:t,...i}=n,[p,s]=a.useState(t);return a.useEffect(()=>{s(t)},[t]),o.jsxs(r,{...i,open:p,onOpenChange:s,children:[o.jsx(r.Trigger,{onClick:()=>s(!p),"aria-expanded":p,asChild:!0,children:o.jsx(m,{variant:"primary",children:"Åpne popover"})}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(l,{...n})},k=["PopoverControlled"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverControlledComponent {...args} />
}`,...e.parameters?.docs?.source}}};export{e as PopoverControlled,k as __namedExportsOrder,_ as default};
