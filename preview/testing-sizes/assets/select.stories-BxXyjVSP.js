import{j as e}from"./iframe-ZCfryuvU.js";import{P as o}from"./PopupTip-C5AmPnhj.js";import{S as a}from"./Select-0h-t9Ghy.js";/* empty css               */import{F as s}from"./Flex-BCr5_8qi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-D3ARDs95.js";import"./Icon-DKeeozgC.js";import"./TooltipTrigger-ndE22p0J.js";import"./floating-ui.react-CloK10j1.js";import"./index-CiCBOe3V.js";import"./index-CFCkBK26.js";import"./TooltipContent-DdG4rRHt.js";import"./useBrowserPreferences-BMEo0jnL.js";import"./useId-KUoYeKrP.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-L1S_p4hB.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-DIN7IVRH.js";import"./useListNavigation-Cv9C31Bf.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BhQ2dVQ6.js";import"./ArrowDownIcon-BoPt3w0R.js";import"./InputGroup-CpbYTpAN.js";import"./Label-D4AA58LE.js";import"./SupportLabel-C_il8401.js";import"./WarningIcon-Bse7aXsu.js";import"./SlotComponent-rrF4fppe.js";import"./mergeRefs-iJLzWOhq.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
