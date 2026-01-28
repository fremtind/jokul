import{j as e}from"./iframe-Da6npOLB.js";import{P as o}from"./PopupTip-rZiWZ2Fn.js";import{S as a}from"./Select-DqV13hxa.js";/* empty css               */import{F as s}from"./Flex-BhRGHW-K.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BB8ITElv.js";import"./Icon-Ck_WWbzd.js";import"./TooltipTrigger-BA4zGsWw.js";import"./floating-ui.react-BSIhALg3.js";import"./index-CRCZ4ZXj.js";import"./index-C6nFRHY8.js";import"./TooltipContent-D0iRRVa9.js";import"./useBrowserPreferences-DR7RP_E3.js";import"./useId-R9sOH0YU.js";import"./getThemeAndDensity-v_O0Epee.js";import"./useAnimatedHeight-B-i7Jyz0.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-BZ_NsKNX.js";import"./useListNavigation-PkQs_LEh.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-1Moo74pP.js";import"./ArrowDownIcon-V8gmKW9m.js";import"./InputGroup-BpULN_Rz.js";import"./Label-CuM6234y.js";import"./SupportLabel-CwsRKIfS.js";import"./WarningIcon-CSgy_3gS.js";import"./SlotComponent-BYV4Jbsv.js";import"./mergeRefs-B7dDV8CV.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
