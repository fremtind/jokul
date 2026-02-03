import{j as e}from"./iframe-65_53G2O.js";import{P as o}from"./PopupTip-DxrZWPdO.js";import{S as a}from"./Select-DXYG0Ll6.js";/* empty css               */import{F as s}from"./Flex-B6wVVllq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-5KF4PUvZ.js";import"./Icon-DB-f0CiP.js";import"./TooltipTrigger-atrNeWTh.js";import"./floating-ui.react-B1438zt-.js";import"./index-SVUOjuxJ.js";import"./index-E2gVFQrJ.js";import"./TooltipContent-xmtiaNC2.js";import"./useBrowserPreferences-Tpday_4j.js";import"./useId-Dd4IzH3r.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-BRGuo6ZR.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-SJRSiB7Q.js";import"./useListNavigation-ClYkqcq0.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B2yBWmXC.js";import"./ArrowDownIcon-vU7NQb6j.js";import"./InputGroup-D_3FAsAM.js";import"./Label-kY3ZdeLY.js";import"./SupportLabel-BraqNajC.js";import"./WarningIcon-CI4S85hX.js";import"./SlotComponent-CLSfqDpF.js";import"./mergeRefs-Cre821eN.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
