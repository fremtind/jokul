import{j as e}from"./jsx-runtime-BOJBhsC5.js";import"./index-Bv6P490N.js";import{C as t}from"./Checkbox-DYaADVQK.js";import{P as i}from"./PopupTip-BKHd_pR2.js";import{F as r}from"./FieldGroup-DI0jauUP.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useId-B1yQ3ow-.js";import"./QuestionIcon-gWXSAmoj.js";import"./Icon-DYEEOjBa.js";import"./TooltipTrigger-OtewlXkS.js";import"./floating-ui.react-JBEcfi09.js";import"./index-BPlpgERE.js";import"./index-cKcTyOJX.js";import"./useBrowserPreferences-1XLPz9Eq.js";import"./Label-BcS4ibrI.js";import"./SupportLabel-WsXYroYu.js";import"./WarningIcon-tCz-nOjC.js";const E={title:"Komponenter/InputGroup/FieldGroup",component:r,parameters:{layout:"centered"},args:{description:"Velg metoden som gjør det enklest for oss å få kontakt med deg i jobb-tider."},tags:["autodocs","forms"]},l=e.jsx(i,{content:"Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed."}),o={name:"Kontaktpreferanser",args:{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:"large"},supportLabelProps:{labelType:"help"},tooltip:!1},render:({tooltip:n,...a})=>e.jsxs(r,{...a,tooltip:n?l:void 0,children:[e.jsx(t,{name:"checklist",value:"phone",invalid:!1,children:"Telefon"}),e.jsx(t,{name:"checklist",value:"email",invalid:!1,children:"E-post"}),e.jsx(t,{name:"checklist",value:"snailmail",invalid:!1,children:"Brev"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const K=["FieldGroupStory"];export{o as FieldGroupStory,K as __namedExportsOrder,E as default};
