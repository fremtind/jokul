import{j as o,r as a}from"./iframe-KBuXSPRb.js";import{B as m}from"./Button-BaLG3bot.js";import{P as r}from"./Popover-B3ELtv9f.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-Dw2hbakb.js";import"./Loader-BishsQUv.js";import"./useDelayedRender-iXdu-Htj.js";import"./floating-ui.react-tMrtWeN5.js";import"./index-DlyXvhfT.js";import"./index-Be25RTK8.js";const B={title:"Komponenter/Popover/PopoverControlled",component:r},l=n=>{const{open:t,...i}=n,[p,s]=a.useState(t);return a.useEffect(()=>{s(t)},[t]),o.jsxs(r,{...i,open:p,onOpenChange:s,children:[o.jsx(r.Trigger,{onClick:()=>s(!p),"aria-expanded":p,asChild:!0,children:o.jsx(m,{variant:"primary",children:"Åpne popover"})}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(l,{...n})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverControlledComponent {...args} />
}`,...e.parameters?.docs?.source}}};const S=["PopoverControlled"];export{e as PopoverControlled,S as __namedExportsOrder,B as default};
