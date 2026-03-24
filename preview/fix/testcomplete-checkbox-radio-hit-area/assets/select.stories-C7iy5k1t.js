import{j as e}from"./iframe-NTeKS5bw.js";import{P as o}from"./PopupTip-ZtnucYqB.js";import{S as a}from"./Select-DpsHedHm.js";/* empty css               */import{F as s}from"./Flex-Bc6XdBpm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-C3TQZj6B.js";import"./Icon-MZT-F91u.js";import"./TooltipTrigger-CmSdVb0R.js";import"./floating-ui.react-v0nLHsf2.js";import"./index-DlCDcO8u.js";import"./index-DdMBpkJ-.js";import"./TooltipContent-Kx6aMcKW.js";import"./useBrowserPreferences-DuuYVjT9.js";import"./useId-DAzHh75P.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-CnpkPe4K.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-CM2awU38.js";import"./useListNavigation-DK5G5j4A.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BkN4ISz8.js";import"./ArrowDownIcon-DYgeMpEB.js";import"./InputGroup-Bm_ZQaf8.js";import"./Label-CjTZBTj8.js";import"./SupportLabel-CdWGtAMA.js";import"./WarningIcon-CLLrTu1B.js";import"./SlotComponent-Bw1RIH2g.js";import"./mergeRefs-glpEmFeU.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
