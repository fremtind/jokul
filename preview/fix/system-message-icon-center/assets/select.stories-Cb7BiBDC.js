import{j as e}from"./iframe-q41Z3BPG.js";import{P as o}from"./PopupTip-DP5ZfKWu.js";import{S as a}from"./Select-C4iRy6XO.js";/* empty css               */import{F as s}from"./Flex-DD0RKPF0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BGo-ZSR-.js";import"./Icon-BmG3ozP5.js";import"./TooltipTrigger-CttUEkJm.js";import"./floating-ui.react-DabdftK4.js";import"./index-CBZAj7Ro.js";import"./index-DcxoYV9O.js";import"./TooltipContent-Dw4t3GO7.js";import"./useBrowserPreferences-8fHB4Fe2.js";import"./useId-CZG946Nl.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-Bng0a-4I.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue--6uTwkOW.js";import"./useListNavigation-ChXTTk_j.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BSV_tFJt.js";import"./ArrowDownIcon-DxRkrpYb.js";import"./InputGroup-B_xhOokT.js";import"./Label-BF6tg-rQ.js";import"./SupportLabel-B8K6zOQw.js";import"./WarningIcon-BRF-5bkL.js";import"./SlotComponent-TJfGIC5O.js";import"./mergeRefs-p92n8ure.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
