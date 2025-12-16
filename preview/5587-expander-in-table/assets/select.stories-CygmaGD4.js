import{j as e}from"./iframe-CLLyC1DJ.js";import{P as o}from"./PopupTip-jot1wtJ7.js";import{S as a}from"./Select-DquwrBTk.js";/* empty css               */import{F as s}from"./Flex-BdmphjDT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CxixBbT8.js";import"./Icon-DaVoT3Sy.js";import"./TooltipTrigger-Bw5RjKaY.js";import"./floating-ui.react-CWbiGU-6.js";import"./index-DMEQz7VD.js";import"./index-DDzgwl3i.js";import"./useBrowserPreferences-B9BBAZcg.js";import"./useId-BOSLfwTK.js";import"./useAnimatedHeight-D5hCvJYs.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-DqE0w0yZ.js";import"./useListNavigation-h-KVpD5m.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-D-EAm9wB.js";import"./ArrowDownIcon-Dlf11MbH.js";import"./InputGroup-CX8eOi12.js";import"./Label-CuQR9-Ee.js";import"./SupportLabel-DQKVf3ZM.js";import"./WarningIcon-RgYjTVXi.js";import"./SlotComponent-ptoXeY2T.js";import"./mergeRefs-CXr8B2Nh.js";const G={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
