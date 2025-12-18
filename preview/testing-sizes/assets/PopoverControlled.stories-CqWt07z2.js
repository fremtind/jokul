import{j as o,r as a}from"./iframe-DaXAj_UU.js";import{B as m}from"./Button-ByUxhsjL.js";import{P as r}from"./Popover-BUuwaA2d.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-sufxSzxG.js";import"./Loader-DnXfPfqW.js";import"./useDelayedRender-DrifGxhJ.js";import"./floating-ui.react-Cp0CuF0O.js";import"./index-D1RVvcry.js";import"./index-CHARmnAY.js";const B={title:"Komponenter/Popover/PopoverControlled",component:r},l=n=>{const{open:t,...i}=n,[p,s]=a.useState(t);return a.useEffect(()=>{s(t)},[t]),o.jsxs(r,{...i,open:p,onOpenChange:s,children:[o.jsx(r.Trigger,{onClick:()=>s(!p),"aria-expanded":p,asChild:!0,children:o.jsx(m,{variant:"primary",children:"Åpne popover"})}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(l,{...n})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverControlledComponent {...args} />
}`,...e.parameters?.docs?.source}}};const S=["PopoverControlled"];export{e as PopoverControlled,S as __namedExportsOrder,B as default};
