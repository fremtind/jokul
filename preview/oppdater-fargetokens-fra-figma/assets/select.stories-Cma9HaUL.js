import{j as e}from"./iframe-DsvwjQJN.js";import{P as o}from"./PopupTip-CXIxO77J.js";import{S as a}from"./Select-ecYB4VI4.js";/* empty css               */import{F as s}from"./Flex-DdZNY6VW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-ciIyWg4Y.js";import"./Icon-mzilcll6.js";import"./TooltipTrigger-J3ba9GLC.js";import"./floating-ui.react-Ddv5cbob.js";import"./index-DUryHQV9.js";import"./index-DBR1efgC.js";import"./TooltipContent-B7CMQ6Fh.js";import"./useBrowserPreferences-DFta-Wd9.js";import"./useId-C7NiFP-2.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-CGK_pYTH.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-C-akFpY3.js";import"./useListNavigation-CbfGq6WN.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BWkjMhDh.js";import"./ArrowDownIcon-PJasfAJ4.js";import"./InputGroup-DXj7XWbX.js";import"./Label-CCOjRc2c.js";import"./SupportLabel-4jqiVbd5.js";import"./WarningIcon-Cu759P5v.js";import"./SlotComponent-dIc43FPr.js";import"./mergeRefs-CWExjCzz.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
