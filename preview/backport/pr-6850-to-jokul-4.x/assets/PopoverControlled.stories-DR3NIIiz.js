import{j as o,r as a}from"./iframe-C3OIBCy8.js";import{B as m}from"./Button-kYKXD4I-.js";import{P as r}from"./Popover-jqwUrYjF.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-PzxsM6Wp.js";import"./Loader-Sy20-Uti.js";import"./useDelayedRender-Dw6b0_Lf.js";import"./floating-ui.react-BxXO36Gk.js";import"./index-Ctl3w-Rb.js";import"./index-DjtQe4Rm.js";import"./getThemeAndSize-CIzqY74s.js";const S={title:"Komponenter/Popover/PopoverControlled",component:r},l=n=>{const{open:t,...i}=n,[p,s]=a.useState(t);return a.useEffect(()=>{s(t)},[t]),o.jsxs(r,{...i,open:p,onOpenChange:s,children:[o.jsx(r.Trigger,{onClick:()=>s(!p),"aria-expanded":p,asChild:!0,children:o.jsx(m,{variant:"primary",children:"Åpne popover"})}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(l,{...n})},_=["PopoverControlled"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverControlledComponent {...args} />
}`,...e.parameters?.docs?.source}}};export{e as PopoverControlled,_ as __namedExportsOrder,S as default};
