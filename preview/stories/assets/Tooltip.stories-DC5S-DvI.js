import{j as o}from"./jsx-runtime-BOJBhsC5.js";import"./index-Bv6P490N.js";import{a as i,T as t}from"./TooltipTrigger-N-4dN5h0.js";import{T as e}from"./TooltipContent-CsSP2k2P.js";/* empty css               */import{B as l}from"./Button-7xZWz2K4.js";import{I as a}from"./Icon-DYEEOjBa.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./floating-ui.react-B0VoLFAt.js";import"./index-BPlpgERE.js";import"./index-cKcTyOJX.js";import"./clsx-B-dksMZM.js";import"./useBrowserPreferences-1XLPz9Eq.js";import"./useId-B1yQ3ow-.js";import"./getThemeAndDensity-v_O0Epee.js";import"./usePreviousValue-CFxVqUaX.js";import"./Loader-DU6KErPQ.js";import"./useDelayedRender-CuF3W8uc.js";const S={title:"Komponenter/Tooltip",component:t,subcomponents:{TooltipTrigger:i,TooltipContent:e},args:{children:o.jsxs(o.Fragment,{children:[o.jsx(i,{children:o.jsx(l,{variant:"primary",icon:o.jsx(a,{children:"send"}),iconPosition:"right"})}),o.jsx(e,{children:"Send til saksbehandler"})]}),delay:300,initialOpen:!1,placement:"top",triggerOn:"hover"},argTypes:{placement:{control:"select",options:["top","top-start","top-end","left","right"]}},tags:["autodocs"]},n={},r={parameters:{layout:"fullscreen"},render:s=>o.jsxs("menu",{style:{boxSizing:"border-box",listStyle:"none",margin:0,padding:"1ch",width:"100%",display:"flex",border:"1px solid var(--jkl-color-border-separator)",backgroundColor:"var(--jkl-color-background-container-high)"},children:[o.jsx("li",{children:o.jsxs(t,{...s,children:[o.jsx(i,{children:o.jsx(l,{variant:"ghost",icon:o.jsx(a,{children:"Person_remove"}),iconPosition:"right"})}),o.jsx(e,{children:"Gi fra deg saken"})]})}),o.jsx("li",{children:o.jsxs(t,{...s,children:[o.jsx(i,{children:o.jsx(l,{variant:"ghost",icon:o.jsx(a,{children:"add_notes"}),iconPosition:"right"})}),o.jsx(e,{children:"Legg til dokument"})]})}),o.jsx("li",{style:{marginLeft:"auto"},children:o.jsx(t,{...s})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
                <Tooltip {...args}>
                    <TooltipTrigger>
                        <Button variant="ghost" icon={<Icon>Person_remove</Icon>} iconPosition="right" />
                    </TooltipTrigger>
                    <TooltipContent>Gi fra deg saken</TooltipContent>
                </Tooltip>
            </li>

            <li>
                <Tooltip {...args}>
                    <TooltipTrigger>
                        <Button variant="ghost" icon={<Icon>add_notes</Icon>} iconPosition="right" />
                    </TooltipTrigger>
                    <TooltipContent>Legg til dokument</TooltipContent>
                </Tooltip>
            </li>

            <li style={{
      marginLeft: "auto"
    }}>
                <Tooltip {...args} />
            </li>
        </menu>
}`,...r.parameters?.docs?.source}}};const B=["_Tooltip","TooltipMenuButtons"];export{r as TooltipMenuButtons,n as _Tooltip,B as __namedExportsOrder,S as default};
