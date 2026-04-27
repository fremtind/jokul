import{j as e}from"./iframe-CajLcGSS.js";import{P as o}from"./PopupTip-yo_dR6uj.js";import{S as a}from"./Select-CJwlWVzB.js";/* empty css               */import{F as s}from"./Flex-De3xoB5q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Nb92H8ic.js";import"./Icon-D5GqpPAQ.js";import"./TooltipTrigger-Di_Xbm4Y.js";import"./floating-ui.react-5aZ5S1Ao.js";import"./index-CY8LHBwd.js";import"./index-CQQDHnHH.js";import"./TooltipContent-Bom14KQQ.js";import"./useBrowserPreferences-RxS0i0HH.js";import"./useId-B6XdMXoC.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-Cpznvpz1.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-D4TRPBtL.js";import"./useListNavigation-vo0O7osa.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B8K6bLyF.js";import"./ArrowDownIcon-CcgP_qzf.js";import"./InputGroup-hgaTw_00.js";import"./Label-BaDxOr6j.js";import"./SupportLabel-ChLpiwUd.js";import"./WarningIcon-BnN7-65l.js";import"./SlotComponent-B-S8TQ7K.js";import"./mergeRefs-SZnpp5Du.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
