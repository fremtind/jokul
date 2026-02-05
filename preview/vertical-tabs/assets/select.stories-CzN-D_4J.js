import{j as e}from"./iframe-Z7U5_4Wx.js";import{P as o}from"./PopupTip-BDnsROaH.js";import{S as a}from"./Select-CRXU_i8q.js";/* empty css               */import{F as s}from"./Flex-O1r64FGr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CUNFvvgx.js";import"./Icon-BR1N4Lbi.js";import"./TooltipTrigger-BUHSpTpa.js";import"./floating-ui.react-D-rIfi7e.js";import"./index-l-b4ZHtM.js";import"./index-DvY2A2aA.js";import"./TooltipContent-B61rFQOM.js";import"./useBrowserPreferences-C6mMvl2j.js";import"./useId-DS_XmcWE.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-BDWqUc1w.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-Ds28owsK.js";import"./useListNavigation-7yXbndDr.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CjOS8rlY.js";import"./ArrowDownIcon-CqovlNQT.js";import"./InputGroup-C9tnyjxU.js";import"./Label-D8cVr8IA.js";import"./SupportLabel-Co1SijlC.js";import"./WarningIcon-Ce9lP_OC.js";import"./SlotComponent-CN3UfqTS.js";import"./mergeRefs-D7R1pY2V.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
