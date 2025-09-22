import{R as t}from"./index-siqcju79.js";/* empty css               */import{b as o,a as n,T as r}from"./TooltipTrigger-CBbkTK_V.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./getThemeAndDensity-CIeob-5A.js";import"./jsx-runtime-DqZpzl9T.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./clsx-B-dksMZM.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./useId-CahK3IZ3.js";const f={title:"Komponenter/Tooltip",component:r,subcomponents:{TooltipTrigger:n,TooltipContent:o},tags:["autodocs"],argTypes:{delay:{control:"number"},initialOpen:{control:"boolean"},placement:{control:"select",options:["top","top-start","top-end","left","right"]},triggerOn:{control:"select",options:["click","hover"]}}},e={args:{children:t.createElement("p",null,"Klikk for å kopiere til utklippstavlen"),delay:0,initialOpen:!1,placement:"top",triggerOn:"hover"},render:l=>t.createElement("p",null,"Kontonummer:"," ",t.createElement(r,{...l},t.createElement(n,null,"1602 44 54979"),t.createElement(o,null,"Klikk for å kopiere til utklippstavlen")))};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <p>Klikk for å kopiere til utklippstavlen</p>,
    delay: 0,
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
}`,...e.parameters?.docs?.source}}};const v=["Tooltip"];export{e as Tooltip,v as __namedExportsOrder,f as default};
