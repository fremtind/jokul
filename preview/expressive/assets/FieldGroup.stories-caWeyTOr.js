import{R as e}from"./index-siqcju79.js";import{C as t}from"./Checkbox-CwfoYjrc.js";import{P as l}from"./PopupTip-CTc2k1KN.js";import{F as r}from"./FieldGroup-jrp1MMow.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useId-CahK3IZ3.js";import"./QuestionIcon-FRW8RpkI.js";import"./Icon-mINJCSxV.js";import"./TooltipTrigger-CBbkTK_V.js";import"./getThemeAndDensity-CIeob-5A.js";import"./jsx-runtime-DqZpzl9T.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";const S={title:"Komponenter/InputGroup/FieldGroup",component:r,parameters:{layout:"centered"},tags:["autodocs","forms"],argTypes:{tooltip:{type:"boolean"}}},p=e.createElement(l,{content:"Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed."}),o={name:"Kontaktpreferanser",args:{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:"large"},supportLabelProps:{labelType:"help"},tooltip:!1},render:({tooltip:n,...a})=>e.createElement(r,{...a,tooltip:n?p:void 0},e.createElement(t,{name:"checklist",value:"phone",invalid:!1},"Telefon"),e.createElement(t,{name:"checklist",value:"email",invalid:!1},"E-post"),e.createElement(t,{name:"checklist",value:"snailmail",invalid:!1},"Brev"))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const B=["FieldGroupStory"];export{o as FieldGroupStory,B as __namedExportsOrder,S as default};
