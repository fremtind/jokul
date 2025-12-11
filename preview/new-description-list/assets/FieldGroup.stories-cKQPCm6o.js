import{j as e}from"./jsx-runtime-DqZpzl9T.js";import"./index-siqcju79.js";import{C as t}from"./Checkbox-CjNXUV26.js";import{P as i}from"./PopupTip-7wD1-69A.js";import{F as r}from"./FieldGroup-4QcUrmjz.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useId-CahK3IZ3.js";import"./QuestionIcon-BmFudUz-.js";import"./Icon-DnRkF4CO.js";import"./TooltipTrigger-DVRmCmNk.js";import"./floating-ui.react-DOiTYs_Q.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./Label-Ct8Bs2e9.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";const E={title:"Komponenter/InputGroup/FieldGroup",component:r,parameters:{layout:"centered"},args:{description:"Velg metoden som gjør det enklest for oss å få kontakt med deg i jobb-tider."},tags:["autodocs","forms"]},l=e.jsx(i,{content:"Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed."}),o={name:"Kontaktpreferanser",args:{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:"large"},supportLabelProps:{labelType:"help"},tooltip:!1},render:({tooltip:n,...a})=>e.jsxs(r,{...a,tooltip:n?l:void 0,children:[e.jsx(t,{name:"checklist",value:"phone",invalid:!1,children:"Telefon"}),e.jsx(t,{name:"checklist",value:"email",invalid:!1,children:"E-post"}),e.jsx(t,{name:"checklist",value:"snailmail",invalid:!1,children:"Brev"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
