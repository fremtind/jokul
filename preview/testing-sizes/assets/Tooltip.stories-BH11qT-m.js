import{j as n}from"./iframe-DtrDw6re.js";/* empty css               */import{a as r,T as t}from"./TooltipTrigger-Cc0stWnD.js";import{T as e}from"./TooltipContent-Dse-ys7X.js";import{B as s}from"./Button-Ct9avhlp.js";import{I as a}from"./Icon-BqM7H6w8.js";import"./preload-helper-PPVm8Dsz.js";import"./floating-ui.react-CkO_YZfP.js";import"./index-Cn2_vnU5.js";import"./index-CQ79wjnq.js";import"./clsx-B-dksMZM.js";import"./useBrowserPreferences-_LHz4MwW.js";import"./useId-wAog_8fJ.js";import"./getThemeAndDensity-v_O0Epee.js";import"./usePreviousValue-DSr68kFE.js";import"./Loader-D7RM5uys.js";import"./useDelayedRender-CMxp3Td9.js";const S={title:"Komponenter/Tooltip",component:t,subcomponents:{TooltipTrigger:r,TooltipContent:e},argTypes:{delay:{control:"number"},initialOpen:{control:"boolean"},placement:{control:"select",options:["top","top-start","top-end","left","right"]},triggerOn:{control:"select",options:["click","hover"]}}},i={args:{children:"Send til saksbehandler",delay:300,initialOpen:!0,placement:"top",triggerOn:"hover"},render:o=>n.jsxs(t,{...o,children:[n.jsx(r,{children:n.jsx(s,{variant:"ghost",icon:n.jsx(a,{children:"send"}),iconPosition:"right"})}),n.jsx(e,{children:o.children})]})},l={args:{children:"Send til saksbehandler",delay:300,initialOpen:!1,placement:"top",triggerOn:"hover"},parameters:{layout:"fullscreen"},render:o=>n.jsxs("menu",{style:{boxSizing:"border-box",listStyle:"none",margin:0,padding:"1ch",width:"100%",display:"flex",border:"1px solid var(--jkl-color-border-separator)",backgroundColor:"var(--jkl-color-background-container-high)"},children:[n.jsx("li",{children:n.jsxs(t,{...o,children:[n.jsx(r,{children:n.jsx(s,{variant:"ghost",icon:n.jsx(a,{children:"Person_remove"}),iconPosition:"right"})}),n.jsx(e,{children:"Gi fra deg saken"})]})}),n.jsx("li",{children:n.jsxs(t,{...o,children:[n.jsx(r,{children:n.jsx(s,{variant:"ghost",icon:n.jsx(a,{children:"add_notes"}),iconPosition:"right"})}),n.jsx(e,{children:"Legg til dokument"})]})}),n.jsx("li",{style:{marginLeft:"auto"},children:n.jsxs(t,{...o,children:[n.jsx(r,{children:n.jsx(s,{variant:"primary",icon:n.jsx(a,{children:"Send"}),iconPosition:"right"})}),n.jsx(e,{children:o.children})]})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
