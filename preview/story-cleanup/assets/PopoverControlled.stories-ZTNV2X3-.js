import{R as e,r as s}from"./index-siqcju79.js";import{B as i}from"./Button-Bm5jRD6q.js";import{P as r}from"./Popover-D1i2PgAt.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./getThemeAndDensity-CIeob-5A.js";import"./jsx-runtime-DqZpzl9T.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";const R={title:"Komponenter/Popover/PopoverControlled",component:r,parameters:{layout:"centered"},tags:["autodocs"]},l=t=>{const{open:n,...m}=t,[p,a]=s.useState(n);return s.useEffect(()=>{a(n)},[n]),e.createElement(r,{...m,open:p,onOpenChange:a},e.createElement(r.Trigger,{onClick:()=>a(!p),"aria-expanded":p,asChild:!0},e.createElement(i,{variant:"primary"},"Åpne popover")),e.createElement(r.Content,{padding:24},"Dette er innholdet i Popover"))},o={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:t=>e.createElement(l,{...t})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverControlledComponent {...args} />
}`,...o.parameters?.docs?.source}}};const S=["PopoverControlled"];export{o as PopoverControlled,S as __namedExportsOrder,R as default};
