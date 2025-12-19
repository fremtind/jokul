import{j as n}from"./iframe-D9oBkFDu.js";/* empty css               */import{b as r,a as e,T as t}from"./TooltipTrigger-ClPDCEjy.js";import{B as s}from"./Button-DF06GKKE.js";import{I as a}from"./Icon-DDKdvxRe.js";import"./preload-helper-PPVm8Dsz.js";import"./floating-ui.react-DvJTplsb.js";import"./index-CehPbylh.js";import"./index-C4suEgJ5.js";import"./clsx-B-dksMZM.js";import"./useBrowserPreferences-BsW4RqqL.js";import"./useId-BgRHuBZ0.js";import"./usePreviousValue-D1hWIRBe.js";import"./Loader-BfC39jws.js";import"./useDelayedRender-C2wwzBlT.js";const f={title:"Komponenter/Tooltip",component:t,subcomponents:{TooltipTrigger:e,TooltipContent:r},argTypes:{delay:{control:"number"},initialOpen:{control:"boolean"},placement:{control:"select",options:["top","top-start","top-end","left","right"]},triggerOn:{control:"select",options:["click","hover"]}}},i={args:{children:"Send til saksbehandler",delay:300,initialOpen:!0,placement:"top",triggerOn:"hover"},render:o=>n.jsxs(t,{...o,children:[n.jsx(e,{children:n.jsx(s,{variant:"ghost",icon:n.jsx(a,{children:"send"}),iconPosition:"right"})}),n.jsx(r,{children:o.children})]})},l={args:{children:"Send til saksbehandler",delay:300,initialOpen:!1,placement:"top",triggerOn:"hover"},parameters:{layout:"fullscreen"},render:o=>n.jsxs("menu",{style:{boxSizing:"border-box",listStyle:"none",margin:0,padding:"1ch",width:"100%",display:"flex",border:"1px solid var(--jkl-color-border-separator)",backgroundColor:"var(--jkl-color-background-container-high)"},children:[n.jsx("li",{children:n.jsxs(t,{...o,children:[n.jsx(e,{children:n.jsx(s,{variant:"ghost",icon:n.jsx(a,{children:"Person_remove"}),iconPosition:"right"})}),n.jsx(r,{children:"Gi fra deg saken"})]})}),n.jsx("li",{children:n.jsxs(t,{...o,children:[n.jsx(e,{children:n.jsx(s,{variant:"ghost",icon:n.jsx(a,{children:"add_notes"}),iconPosition:"right"})}),n.jsx(r,{children:"Legg til dokument"})]})}),n.jsx("li",{style:{marginLeft:"auto"},children:n.jsxs(t,{...o,children:[n.jsx(e,{children:n.jsx(s,{variant:"primary",icon:n.jsx(a,{children:"Send"}),iconPosition:"right"})}),n.jsx(r,{children:o.children})]})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const I=["Tooltip","TooltipInMenuBar"];export{i as Tooltip,l as TooltipInMenuBar,I as __namedExportsOrder,f as default};
