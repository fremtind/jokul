import{R as n}from"./index-siqcju79.js";/* empty css               */import{b as o,a as t,T as r}from"./TooltipTrigger-PxQotK_K.js";import{B as a}from"./Button-Dng0c-UK.js";import{I as c}from"./Icon-mINJCSxV.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./getThemeAndDensity-Cbjmkdw-.js";import"./jsx-runtime-DqZpzl9T.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./clsx-B-dksMZM.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./useId-CahK3IZ3.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";const S={title:"Komponenter/Tooltip",component:r,subcomponents:{TooltipTrigger:t,TooltipContent:o},tags:["autodocs"],argTypes:{delay:{control:"number"},initialOpen:{control:"boolean"},placement:{control:"select",options:["top","top-start","top-end","left","right"]},triggerOn:{control:"select",options:["click","hover"]}}},i={args:{children:"Send til saksbehandler",delay:300,initialOpen:!0,placement:"top",triggerOn:"hover"},render:e=>n.createElement(r,{...e},n.createElement(t,null,n.createElement(a,{variant:"ghost",icon:n.createElement(c,null,"send"),iconPosition:"right"})),n.createElement(o,null,e.children))},l={args:{children:"Send til saksbehandler",delay:300,initialOpen:!1,placement:"top",triggerOn:"hover"},parameters:{layout:"fullscreen"},render:e=>n.createElement("menu",{style:{boxSizing:"border-box",listStyle:"none",margin:0,padding:"1ch",width:"100%",display:"flex",border:"1px solid var(--jkl-color-border-separator)",backgroundColor:"var(--jkl-color-background-container-high)"}},n.createElement("li",null,n.createElement(r,{...e},n.createElement(t,null,n.createElement(a,{variant:"ghost",icon:n.createElement(c,null,"Person_remove"),iconPosition:"right"})),n.createElement(o,null,"Gi fra deg saken"))),n.createElement("li",null,n.createElement(r,{...e},n.createElement(t,null,n.createElement(a,{variant:"ghost",icon:n.createElement(c,null,"add_notes"),iconPosition:"right"})),n.createElement(o,null,"Legg til dokument"))),n.createElement("li",{style:{marginLeft:"auto"}},n.createElement(r,{...e},n.createElement(t,null,n.createElement(a,{variant:"primary",icon:n.createElement(c,null,"Send"),iconPosition:"right"})),n.createElement(o,null,e.children))))};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Send til saksbehandler",
    delay: 300,
    initialOpen: true,
    placement: "top",
    triggerOn: "hover"
  },
  render: args => <TooltipComponent {...args}>
            <TooltipTrigger>
                <Button variant="ghost" icon={<Icon>send</Icon>} iconPosition="right" />
            </TooltipTrigger>
            <TooltipContent>{args.children}</TooltipContent>
        </TooltipComponent>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Send til saksbehandler",
    delay: 300,
    initialOpen: false,
    placement: "top",
    triggerOn: "hover"
  },
  parameters: {
    layout: "fullscreen"
  },
  render: args => <menu style={{
    boxSizing: "border-box",
    listStyle: "none",
    margin: 0,
    padding: "1ch",
    width: "100%",
    display: "flex",
    border: "1px solid var(--jkl-color-border-separator)",
    backgroundColor: "var(--jkl-color-background-container-high)"
  }}>
            <li>
                <TooltipComponent {...args}>
                    <TooltipTrigger>
                        <Button variant="ghost" icon={<Icon>Person_remove</Icon>} iconPosition="right" />
                    </TooltipTrigger>
                    <TooltipContent>Gi fra deg saken</TooltipContent>
                </TooltipComponent>
            </li>

            <li>
                <TooltipComponent {...args}>
                    <TooltipTrigger>
                        <Button variant="ghost" icon={<Icon>add_notes</Icon>} iconPosition="right" />
                    </TooltipTrigger>
                    <TooltipContent>Legg til dokument</TooltipContent>
                </TooltipComponent>
            </li>

            <li style={{
      marginLeft: "auto"
    }}>
                <TooltipComponent {...args}>
                    <TooltipTrigger>
                        <Button variant="primary" icon={<Icon>Send</Icon>} iconPosition="right" />
                    </TooltipTrigger>
                    <TooltipContent>{args.children}</TooltipContent>
                </TooltipComponent>
            </li>
        </menu>
}`,...l.parameters?.docs?.source}}};const O=["Tooltip","TooltipInMenuBar"];export{i as Tooltip,l as TooltipInMenuBar,O as __namedExportsOrder,S as default};
