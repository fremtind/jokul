import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as a}from"./index-ClcD9ViR.js";import{B as c}from"./Button-2w50jndb.js";import{P as r}from"./Popover-DKeg6Jtt.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-D76q0nBx.js";import"./Loader-CKZhAlI9.js";import"./useDelayedRender-CJkH27Ob.js";import"./getThemeAndDensity-BSLHRK6G.js";import"./index-CN14f-u1.js";const _={title:"Komponenter/Popover/PopoverControlled",component:r,parameters:{layout:"centered"},tags:["autodocs"]},u=n=>{const{open:t,...d}=n,[p,s]=a.useState(t);return a.useEffect(()=>{s(t)},[t]),o.jsxs(r,{...d,open:p,onOpenChange:s,children:[o.jsx(r.Trigger,{onClick:()=>s(!p),"aria-expanded":p,asChild:!0,children:o.jsx(c,{variant:"primary",children:"Åpne popover"})}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(u,{...n})};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverControlledComponent {...args} />
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const k=["PopoverControlled"];export{e as PopoverControlled,k as __namedExportsOrder,_ as default};
