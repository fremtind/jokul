import{j as e}from"./iframe-rzzW3gX2.js";import{P as o}from"./PopupTip-BZTcWFoN.js";import{S as a}from"./Select-BGXHoyP7.js";/* empty css               */import{F as s}from"./Flex-6Eu2RNVc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-eDoRjL0R.js";import"./Icon-rzk6z11L.js";import"./TooltipTrigger-D3EHpqNO.js";import"./floating-ui.react-4kUMNpMh.js";import"./index-E2wWXgdo.js";import"./index-ClL-RdFw.js";import"./TooltipContent-iy3Gc4MX.js";import"./useBrowserPreferences-DITP95xw.js";import"./useId-Dq47MGjr.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-Bd4luqlj.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-QI_mw00J.js";import"./useListNavigation-NVhlD-nk.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-SIhzi7jy.js";import"./ArrowDownIcon-C8-TTP2G.js";import"./InputGroup-DF0kfBv8.js";import"./Label-BvHD4lEe.js";import"./SupportLabel-CnmQAMKg.js";import"./WarningIcon-UTSw5B72.js";import"./SlotComponent-beXRzn8l.js";import"./mergeRefs-fSgH7kpM.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
