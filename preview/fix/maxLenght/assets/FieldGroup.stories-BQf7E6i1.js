import{j as e}from"./iframe-D_KIqJpS.js";import{C as n}from"./Checkbox-NWGdyWux.js";import{P as i}from"./PopupTip-Bh-NUK9z.js";import{F as r}from"./FieldGroup-Bsqa6wZ1.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-COFLPwun.js";import"./QuestionIcon-QZVgionb.js";import"./Icon-30guoCL6.js";import"./TooltipTrigger-CbFWew_q.js";import"./floating-ui.react-BJnKxHGo.js";import"./index-DKcQwTQn.js";import"./index-Db0GF55v.js";import"./useBrowserPreferences-B1wt2LLa.js";import"./Label-DYujrYq9.js";import"./SupportLabel-CdreSeNn.js";import"./WarningIcon-Cptfvehu.js";const y={title:"Komponenter/InputGroup/FieldGroup",component:r,args:{description:"Velg metoden som gjør det enklest for oss å få kontakt med deg i jobb-tider."}},l=e.jsx(i,{content:"Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed."}),o={name:"Kontaktpreferanser",args:{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:"large"},supportLabelProps:{labelType:"help"},tooltip:!1},render:({tooltip:t,...a})=>e.jsxs(r,{...a,tooltip:t?l:void 0,children:[e.jsx(n,{name:"checklist",value:"phone",invalid:!1,children:"Telefon"}),e.jsx(n,{name:"checklist",value:"email",invalid:!1,children:"E-post"}),e.jsx(n,{name:"checklist",value:"snailmail",invalid:!1,children:"Brev"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const E=["FieldGroupStory"];export{o as FieldGroupStory,E as __namedExportsOrder,y as default};
