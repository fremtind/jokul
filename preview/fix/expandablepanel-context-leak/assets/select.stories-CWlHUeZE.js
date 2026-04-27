import{j as e}from"./iframe-B0o1t7H3.js";import{P as o}from"./PopupTip-BSLc8fdI.js";import{S as a}from"./Select-BKJxwSar.js";/* empty css               */import{F as s}from"./Flex-MlvEasrA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DhHyYm-C.js";import"./Icon-BIq7E2gu.js";import"./TooltipTrigger-Cz8fUbKz.js";import"./floating-ui.react-rZ-fEfWU.js";import"./index-C-n-xIMQ.js";import"./index-P-FM1Sbq.js";import"./TooltipContent-BJplK_9M.js";import"./useBrowserPreferences-BvgkRyPf.js";import"./useId-CE2MbQdI.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-BWNmNxGG.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-tcFRHIrT.js";import"./useListNavigation-B2CJtVR1.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CLq5Yh9x.js";import"./ArrowDownIcon-ebFKz0rv.js";import"./InputGroup-D2I2GZHf.js";import"./Label-ihsFxgZ6.js";import"./SupportLabel-DENjuCpk.js";import"./WarningIcon-BxvlioEx.js";import"./SlotComponent-DNFOqb2v.js";import"./mergeRefs-CaYFyJfa.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
