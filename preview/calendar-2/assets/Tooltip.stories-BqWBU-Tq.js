import{j as n}from"./iframe-DXmxd_y0.js";/* empty css               */import{a as r,T as e}from"./TooltipTrigger-D9TB_HZk.js";import{T as t}from"./TooltipContent-B5XWTdAg.js";import{B as s}from"./Button-Qq0cWUcS.js";import{I as a}from"./Icon-DGZU5bVl.js";import"./preload-helper-PPVm8Dsz.js";import"./floating-ui.react-DTFxok3S.js";import"./index-C-i7tAe9.js";import"./index-Cj_bB6Cz.js";import"./clsx-B-dksMZM.js";import"./useBrowserPreferences-MlbwRwl7.js";import"./useId-TdKZOOCS.js";import"./getThemeAndSize-CZAj3IXt.js";import"./usePreviousValue-DvPVIu60.js";import"./Loader-6Rc0PDVY.js";import"./useDelayedRender-DcHF7lCb.js";const S={title:"Komponenter/Tooltip",component:e,subcomponents:{TooltipTrigger:r,TooltipContent:t},argTypes:{delay:{control:"number"},initialOpen:{control:"boolean"},placement:{control:"select",options:["top","top-start","top-end","left","right"]},triggerOn:{control:"select",options:["click","hover"]}}},i={args:{children:"Send til saksbehandler",delay:300,initialOpen:!0,placement:"top",triggerOn:"hover"},render:o=>n.jsxs(e,{...o,children:[n.jsx(r,{children:n.jsx(s,{variant:"ghost",icon:n.jsx(a,{children:"send"}),iconPosition:"right"})}),n.jsx(t,{children:o.children})]})},l={args:{children:"Send til saksbehandler",delay:300,initialOpen:!1,placement:"top",triggerOn:"hover"},parameters:{layout:"fullscreen"},render:o=>n.jsxs("menu",{style:{boxSizing:"border-box",listStyle:"none",margin:0,padding:"1ch",width:"100%",display:"flex",border:"1px solid var(--jkl-color-border-subdued)",backgroundColor:"var(--jkl-color-background-container)"},children:[n.jsx("li",{children:n.jsxs(e,{...o,children:[n.jsx(r,{children:n.jsx(s,{variant:"ghost",icon:n.jsx(a,{children:"Person_remove"}),iconPosition:"right"})}),n.jsx(t,{children:"Gi fra deg saken"})]})}),n.jsx("li",{children:n.jsxs(e,{...o,children:[n.jsx(r,{children:n.jsx(s,{variant:"ghost",icon:n.jsx(a,{children:"add_notes"}),iconPosition:"right"})}),n.jsx(t,{children:"Legg til dokument"})]})}),n.jsx("li",{style:{marginLeft:"auto"},children:n.jsxs(e,{...o,children:[n.jsx(r,{children:n.jsx(s,{variant:"primary",icon:n.jsx(a,{children:"Send"}),iconPosition:"right"})}),n.jsx(t,{children:o.children})]})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    border: "1px solid var(--jkl-color-border-subdued)",
    backgroundColor: "var(--jkl-color-background-container)"
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
