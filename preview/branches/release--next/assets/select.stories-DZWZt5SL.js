import{j as e}from"./iframe-BMIei6zj.js";import{P as o}from"./PopupTip-DuQtRtHT.js";import{S as a}from"./Select-Duye_L0X.js";/* empty css               */import{F as s}from"./Flex-Cfuo7GDR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DXPyqMD2.js";import"./Icon-DZBiKneE.js";import"./TooltipTrigger-yE2i4uEl.js";import"./floating-ui.react-C_q1GMCq.js";import"./index-ERou-oSz.js";import"./index-BXWjyJ6I.js";import"./TooltipContent-C8-XR9_5.js";import"./useBrowserPreferences-BUhnUviA.js";import"./useId-Cjq-DDnD.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-B_dmaCW3.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-BxKGeY2i.js";import"./useListNavigation-DvgaXh_N.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DwVNZfDf.js";import"./ArrowDownIcon-D87oPSmS.js";import"./InputGroup-soJy5Lmx.js";import"./Label-C3sSGtT0.js";import"./SupportLabel-B_02ieQD.js";import"./WarningIcon-D9fZVouT.js";import"./SlotComponent-BGqEN7cn.js";import"./mergeRefs-DE5gAkyb.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
