import{j as e}from"./iframe-BlL1f6tE.js";import{P as o}from"./PopupTip-YavEJqhF.js";import{S as a}from"./Select-BfYw9VjG.js";/* empty css               */import{F as s}from"./Flex-BM1G5u9b.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-B_jR1Hy3.js";import"./Icon-DQG0WF9n.js";import"./TooltipTrigger-Ce01szZd.js";import"./floating-ui.react-CUxkHCeH.js";import"./index-tTa7G1zm.js";import"./index-D4trGU9a.js";import"./TooltipContent-CRzW3lAG.js";import"./useBrowserPreferences-DNfg6WW7.js";import"./useId-5Z1nxQwM.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-BDajhTrb.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-VN0KBO0y.js";import"./useListNavigation-B5RMKvJV.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BeuBd0CQ.js";import"./ArrowDownIcon-Ci8auPKF.js";import"./InputGroup-lUpwyQzX.js";import"./Label-BqQWt1hc.js";import"./SupportLabel-C91qhPV0.js";import"./WarningIcon-B4o2UKJo.js";import"./SlotComponent-pbMLR2SD.js";import"./mergeRefs-DCdUDw6Z.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Hva jobber du som?",
    items: ["Frontend-utvikler", "Backend-utvikler", "Visuell designer", "Interaksjonsdesigner", "Tjenestedesigner"],
    inline: true,
    value: "Frontend-utvikler",
    description: "",
    helpLabel: ""
  },
  render: args => {
    return <Flex gap="xs" alignItems="center">
                <p>Jeg jobber som</p>
                <Select {...args} />
                <p>hos Fremtind Forsikring.</p>
            </Flex>;
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tooltip: <PopupTip content={"Er du usikker på hvilket merke du har kan du velge Annet"} />
  }
}`,...n.parameters?.docs?.source}}};const M=["SelectStory","SelectInline","SelectMedTooltip"];export{t as SelectInline,n as SelectMedTooltip,r as SelectStory,M as __namedExportsOrder,L as default};
