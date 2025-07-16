import{r as m,R as e}from"./index-siqcju79.js";import{C as a}from"./Checkbox-CwfoYjrc.js";import{c}from"./clsx-B-dksMZM.js";import{Q as d}from"./QuestionIcon-FRW8RpkI.js";import{T as u,a as v,b as k}from"./TooltipTrigger-B1RlpEAo.js";import{F as r}from"./FieldGroup-jrp1MMow.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./useId-CahK3IZ3.js";import"./Icon-mINJCSxV.js";import"./getThemeAndDensity-Dbk6h1cS.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";const l=({content:n,triggerProps:t,...p})=>{const[i,s]=m.useState(!1);return e.createElement(u,{onOpenChange:s,triggerOn:"click",...p},e.createElement(v,null,e.createElement("button",{...t,type:"button",className:c("jkl-tooltip-question-button",t?.className),"data-testid":"jkl-tooltip-question-button"},e.createElement(d,{variant:"inherit",bold:i}),e.createElement("span",{className:"jkl-sr-only"},"Vis hjelpetekst"))),e.createElement(k,{"data-ispopup":!0},e.createElement("div",{className:"jkl-popuptip__content-wrapper",tabIndex:0},n)))};l.__docgenInfo={description:"",methods:[],displayName:"PopupTip",props:{content:{required:!0,tsType:{name:"ReactNode"},description:"Innholdet i tooltipet som vises"},triggerProps:{required:!1,tsType:{name:"Omit",elements:[{name:"HTMLProps",elements:[{name:"HTMLButtonElement"}],raw:"HTMLProps<HTMLButtonElement>"},{name:"union",raw:'"children" | "type"',elements:[{name:"literal",value:'"children"'},{name:"literal",value:'"type"'}]}],raw:'Omit<HTMLProps<HTMLButtonElement>, "children" | "type">'},description:"Eventuelle props du vil sette på trigger-knappen for tooltipet"}},composes:["Omit"]};const B={title:"Komponenter/InputGroup/FieldGroup",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{tooltip:{type:"boolean"}}},f=e.createElement(l,{content:"Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed."}),o={name:"Kontaktpreferanser",args:{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:"large"},supportLabelProps:{labelType:"help"},tooltip:!1},render:({tooltip:n,...t})=>e.createElement(r,{...t,tooltip:n?f:void 0},e.createElement(a,{name:"checklist",value:"phone",invalid:!1},"Telefon"),e.createElement(a,{name:"checklist",value:"email",invalid:!1},"E-post"),e.createElement(a,{name:"checklist",value:"snailmail",invalid:!1},"Brev"))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["FieldGroupStory"];export{o as FieldGroupStory,q as __namedExportsOrder,B as default};
