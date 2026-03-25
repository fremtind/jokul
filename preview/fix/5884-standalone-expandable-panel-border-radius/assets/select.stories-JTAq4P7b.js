import{j as e}from"./iframe-Cxy_qrkX.js";import{P as o}from"./PopupTip-aNHc5wjV.js";import{S as a}from"./Select-Dx6Xhfar.js";/* empty css               */import{F as s}from"./Flex-BWt3gIzB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CQgVExPx.js";import"./Icon-n80kDs44.js";import"./TooltipTrigger-BlrqJQpE.js";import"./floating-ui.react-DRK1HNZ6.js";import"./index-DSTGoFpK.js";import"./index-RMY-6Kd9.js";import"./TooltipContent-Bzwk2Rn7.js";import"./useBrowserPreferences-ByRZf0kS.js";import"./useId-Cyacr2fK.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-D4RLOiG-.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-Dvo97lma.js";import"./useListNavigation-CMsWJhrj.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BKVbNcte.js";import"./ArrowDownIcon-CO49IF4P.js";import"./InputGroup-Bqa-zlly.js";import"./Label-CyTFweX4.js";import"./SupportLabel-BI-VtVy1.js";import"./WarningIcon-Cf49-C2V.js";import"./SlotComponent-o087dcLK.js";import"./mergeRefs-C6GE6PDN.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
