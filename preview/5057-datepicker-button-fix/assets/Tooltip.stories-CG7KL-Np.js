import{R as e}from"./index-siqcju79.js";import{b as o,a as n,T as r}from"./TooltipTrigger-B1RlpEAo.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./getThemeAndDensity-Dbk6h1cS.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./clsx-B-dksMZM.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./useId-CahK3IZ3.js";const T={title:"Komponenter/Tooltip",component:r,subcomponents:{TooltipTrigger:n,TooltipContent:o},tags:["autodocs"],argTypes:{delay:{control:"number"},initialOpen:{control:"boolean"},placement:{control:"select",options:["top","top-start","top-end","left","right"]},triggerOn:{control:"select",options:["click","hover"]}}},t={args:{children:e.createElement("p",null,"Klikk for å kopiere til utklippstavlen"),delay:2e3,initialOpen:!1,placement:"top",triggerOn:"hover"},render:l=>e.createElement("p",null,"Kontonummer:"," ",e.createElement(r,{...l},e.createElement(n,null,"1602 44 54979"),e.createElement(o,null,"Klikk for å kopiere til utklippstavlen")))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <p>Klikk for å kopiere til utklippstavlen</p>,
    delay: 2000,
    initialOpen: false,
    placement: "top",
    triggerOn: "hover"
  },
  render: args => <p>
            Kontonummer:{" "}
            <TooltipComponent {...args}>
                <TooltipTrigger>1602 44 54979</TooltipTrigger>
                <TooltipContent>
                    Klikk for å kopiere til utklippstavlen
                </TooltipContent>
            </TooltipComponent>
        </p>
}`,...t.parameters?.docs?.source}}};const d=["Tooltip"];export{t as Tooltip,d as __namedExportsOrder,T as default};
