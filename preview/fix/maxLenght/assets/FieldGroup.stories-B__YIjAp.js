import{j as e}from"./iframe-DvP7N9Q0.js";import{C as n}from"./Checkbox-DsxBtquT.js";import{P as i}from"./PopupTip-BCrw7l-Y.js";import{F as r}from"./FieldGroup-Czooc6jh.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-lHt1Depp.js";import"./QuestionIcon-BxbvUxNb.js";import"./Icon-B4XeI8eR.js";import"./TooltipTrigger-Bog76woy.js";import"./floating-ui.react-BxHEHUMM.js";import"./index-BA2bvFDM.js";import"./index-DyT7yAgX.js";import"./useBrowserPreferences-kg80OnC7.js";import"./Label-3F0NI7P9.js";import"./SupportLabel-CorrWaHo.js";import"./WarningIcon-D6ZoqZ14.js";const y={title:"Komponenter/InputGroup/FieldGroup",component:r,args:{description:"Velg metoden som gjør det enklest for oss å få kontakt med deg i jobb-tider."}},l=e.jsx(i,{content:"Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed."}),o={name:"Kontaktpreferanser",args:{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:"large"},supportLabelProps:{labelType:"help"},tooltip:!1},render:({tooltip:t,...a})=>e.jsxs(r,{...a,tooltip:t?l:void 0,children:[e.jsx(n,{name:"checklist",value:"phone",invalid:!1,children:"Telefon"}),e.jsx(n,{name:"checklist",value:"email",invalid:!1,children:"E-post"}),e.jsx(n,{name:"checklist",value:"snailmail",invalid:!1,children:"Brev"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
