import{j as e}from"./iframe-477QQtzG.js";import{P as o}from"./PopupTip-CwTnqkfb.js";import{S as a}from"./Select-As3-XzIK.js";/* empty css               */import{F as s}from"./Flex-Dfscr0dl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CvnqHhJc.js";import"./Icon-Bbvo1pmI.js";import"./TooltipTrigger-s5nPvA1K.js";import"./floating-ui.react-ig1Zo-xm.js";import"./index-X_5CWfC7.js";import"./index-DWtEy6tD.js";import"./useBrowserPreferences-DfpWrmaP.js";import"./useId-B7T7fP2z.js";import"./useAnimatedHeight-DEjr5N8f.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-CHDs_8Bt.js";import"./useListNavigation-foiBUY7i.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DXQ4_POC.js";import"./ArrowDownIcon-CQaVhmL0.js";import"./InputGroup-C_GclzJL.js";import"./Label-DcsQSj5V.js";import"./SupportLabel-DZNwYeVW.js";import"./WarningIcon-CA2M-1rx.js";import"./SlotComponent-D-mGC2W3.js";import"./mergeRefs-B1qEcg2_.js";const G={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
