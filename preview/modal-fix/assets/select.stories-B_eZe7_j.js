import{j as e}from"./iframe-C4Nkq-VY.js";import{P as o}from"./PopupTip-B0jkgZRK.js";import{S as a}from"./Select-CfESk9BU.js";/* empty css               */import{F as s}from"./Flex-DBNCPFI9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Ba_wEN49.js";import"./Icon-D-2N4vyt.js";import"./TooltipTrigger-BXx5tV-z.js";import"./floating-ui.react-zrDHufY9.js";import"./index-C57IZAN9.js";import"./index-Bot7GsnA.js";import"./TooltipContent-DZJ8uaq7.js";import"./useBrowserPreferences-CPDBwGyK.js";import"./useId-Js1rDQKY.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-C2TUCImb.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-BkoMmspO.js";import"./useListNavigation-1qbWpdhK.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-5nQSUlQL.js";import"./ArrowDownIcon-9l6L5YlB.js";import"./InputGroup-xwsVCq4T.js";import"./Label-CrNNcbW6.js";import"./SupportLabel-jgimv0Ej.js";import"./WarningIcon-Du00iMuZ.js";import"./SlotComponent-CBCL0Yaj.js";import"./mergeRefs-BY_P9p2r.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
