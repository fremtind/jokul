import{j as e}from"./iframe-DjRU5Cma.js";import{P as o}from"./PopupTip-BQUPmi83.js";import{S as a}from"./Select-Zn8it2cN.js";/* empty css               */import{F as s}from"./Flex-D1QA1Uzy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CfuLQ2gy.js";import"./Icon-8OAdHJPD.js";import"./TooltipTrigger-CWn-p90u.js";import"./floating-ui.react-DY6e7PnV.js";import"./index-BqeZXMWk.js";import"./index-DOHra09w.js";import"./TooltipContent-DmvQOQvk.js";import"./useBrowserPreferences--NYiPOn-.js";import"./useId-CQ07ZHXS.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-WAc-QneH.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-HAQt7d26.js";import"./useListNavigation-DJ3ZmNMz.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Bui5Z8ra.js";import"./ArrowDownIcon-DHA_6rAu.js";import"./InputGroup-wMAr9KMf.js";import"./Label-Bs7fkVod.js";import"./SupportLabel-CsWxLzVO.js";import"./WarningIcon-DfcMN1pe.js";import"./SlotComponent-nBPyP3SV.js";import"./mergeRefs-CRv-kfT-.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
