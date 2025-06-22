import{j as e}from"./jsx-runtime-BbjHj44Y.js";import{r as u}from"./index-C6mWTJJr.js";import{C as a}from"./Checkbox-CCWt9Wyd.js";import{c as h}from"./clsx-B-dksMZM.js";import{Q as v}from"./QuestionIcon-D-fsWtyF.js";import{T as k,a as f,b as x}from"./TooltipTrigger-CLXQ0ehp.js";import{F as s}from"./FieldGroup-jMM48IpO.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-BosuxZz1.js";import"./useId-Cim48cX5.js";import"./Icon-CZwjvlw8.js";import"./getThemeAndDensity-BFFxI1sw.js";import"./index-zunobDwC.js";import"./useBrowserPreferences-Cx8DRHte.js";import"./Label-BPOuC4mL.js";import"./SupportLabel-uWZp44mj.js";import"./ErrorIcon-B0wgdey8.js";import"./WarningIcon-B6VvEiHT.js";const p=({content:n,triggerProps:t,...m})=>{const[c,d]=u.useState(!1);return e.jsxs(k,{onOpenChange:d,triggerOn:"click",...m,children:[e.jsx(f,{children:e.jsxs("button",{...t,type:"button",className:h("jkl-tooltip-question-button",t==null?void 0:t.className),"data-testid":"jkl-tooltip-question-button",children:[e.jsx(v,{variant:"inherit",bold:c}),e.jsx("span",{className:"jkl-sr-only",children:"Vis hjelpetekst"})]})}),e.jsx(x,{"data-ispopup":!0,children:e.jsx("div",{className:"jkl-popuptip__content-wrapper",tabIndex:0,children:n})})]})};p.__docgenInfo={description:"",methods:[],displayName:"PopupTip",props:{content:{required:!0,tsType:{name:"ReactNode"},description:"Innholdet i tooltipet som vises"},triggerProps:{required:!1,tsType:{name:"Omit",elements:[{name:"HTMLProps",elements:[{name:"HTMLButtonElement"}],raw:"HTMLProps<HTMLButtonElement>"},{name:"union",raw:'"children" | "type"',elements:[{name:"literal",value:'"children"'},{name:"literal",value:'"type"'}]}],raw:'Omit<HTMLProps<HTMLButtonElement>, "children" | "type">'},description:"Eventuelle props du vil sette på trigger-knappen for tooltipet"}},composes:["Omit"]};const S={title:"Komponenter/InputGroup/FieldGroup",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{tooltip:{type:"boolean"}}},b=e.jsx(p,{content:"Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed."}),o={name:"Kontaktpreferanser",args:{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:"large"},supportLabelProps:{labelType:"help"},tooltip:!1},render:({tooltip:n,...t})=>e.jsxs(s,{...t,tooltip:n?b:void 0,children:[e.jsx(a,{name:"checklist",value:"phone",invalid:!1,children:"Telefon"}),e.jsx(a,{name:"checklist",value:"email",invalid:!1,children:"E-post"}),e.jsx(a,{name:"checklist",value:"snailmail",invalid:!1,children:"Brev"})]})};var l,r,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Kontaktpreferanser",
  args: {
    legend: "Hvordan kan vi kontakte deg?",
    labelProps: {
      variant: "large"
    },
    supportLabelProps: {
      labelType: "help"
    },
    tooltip: false
  },
  render: ({
    tooltip,
    ...props
  }) => <FieldGroup {...props} tooltip={tooltip ? tooltipComponent : undefined}>
            <Checkbox name="checklist" value="phone" invalid={false}>
                Telefon
            </Checkbox>
            <Checkbox name="checklist" value="email" invalid={false}>
                E-post
            </Checkbox>
            <Checkbox name="checklist" value="snailmail" invalid={false}>
                Brev
            </Checkbox>
        </FieldGroup>
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const K=["FieldGroupStory"];export{o as FieldGroupStory,K as __namedExportsOrder,S as default};
