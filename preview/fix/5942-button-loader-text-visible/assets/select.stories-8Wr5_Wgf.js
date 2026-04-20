import{j as e}from"./iframe-D8Fni3Ee.js";import{P as o}from"./PopupTip-COt3ci4q.js";import{S as a}from"./Select-lk8zUMj8.js";/* empty css               */import{F as s}from"./Flex-D6KOjtA-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-2U3Kg4X6.js";import"./Icon-4o4BJfM9.js";import"./TooltipTrigger-okMQtt-X.js";import"./floating-ui.react-DNoKygre.js";import"./index-TiRZaoC4.js";import"./index-DY4dLmlF.js";import"./TooltipContent-BTf1IYbQ.js";import"./useBrowserPreferences-C8ImtFsE.js";import"./useId-BINUQVK3.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-BcJUyf45.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-e1OVwpT1.js";import"./useListNavigation-BSGFCMtP.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CubsLJYn.js";import"./ArrowDownIcon-D9vshna4.js";import"./InputGroup-DspvpIQ7.js";import"./Label-BLA9cqMd.js";import"./SupportLabel-Da0VD3H6.js";import"./WarningIcon-BRwWCumv.js";import"./SlotComponent-BCmRbNCD.js";import"./mergeRefs-BAU7qon2.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
