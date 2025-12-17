import{j as e}from"./iframe-DVuwCucA.js";import{P as o}from"./PopupTip-JleEFDHp.js";import{S as a}from"./Select-DE7c5kny.js";/* empty css               */import{F as s}from"./Flex-BxxaizJs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CkV1deZY.js";import"./Icon-BvCYJseA.js";import"./TooltipTrigger-DcqeZOXD.js";import"./floating-ui.react-BxuqmyJG.js";import"./index-BFQYHkDd.js";import"./index-n9OKmq2f.js";import"./useBrowserPreferences-C1CxG1J6.js";import"./useId-x7qrK8aY.js";import"./useAnimatedHeight-CmqJkaey.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-B-gSGwjc.js";import"./useListNavigation-DKgec-XY.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BWPnfxJ1.js";import"./ArrowDownIcon-fu6qQCEM.js";import"./InputGroup-Dqr-u7Od.js";import"./Label-DvCgVV4-.js";import"./SupportLabel-Rzski8XH.js";import"./WarningIcon-CajCtnwA.js";import"./SlotComponent-CS1dbB1w.js";import"./mergeRefs-CWvskeAi.js";const G={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const J=["SelectStory","SelectInline","SelectMedTooltip"];export{t as SelectInline,n as SelectMedTooltip,r as SelectStory,J as __namedExportsOrder,G as default};
