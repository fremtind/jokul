import{j as e}from"./iframe-B7gDD584.js";import{P as o}from"./PopupTip-BZy_0Hj5.js";import{S as a}from"./Select-DQmauP-J.js";/* empty css               */import{F as s}from"./Flex-B_bkG2Qe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Cs0tXyo-.js";import"./Icon-D0qktbNk.js";import"./TooltipTrigger-CkOyFQy8.js";import"./floating-ui.react-ZblTvBR9.js";import"./index-DXXqhKJW.js";import"./index-BOagmjLG.js";import"./TooltipContent-DJ2C8_an.js";import"./useBrowserPreferences-eADWvCPh.js";import"./useId-DS7nJIoh.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-NDrRJJ_3.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-B7r3MVRZ.js";import"./useListNavigation-CONhnm7t.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BZV6tFCB.js";import"./ArrowDownIcon-Bsv9d9Aa.js";import"./InputGroup-R3fhoj6c.js";import"./Label-zmrBCNkn.js";import"./SupportLabel-D4GZmilY.js";import"./WarningIcon-mlcCzeO5.js";import"./SlotComponent-ApzK60ye.js";import"./mergeRefs-6d--RonS.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
