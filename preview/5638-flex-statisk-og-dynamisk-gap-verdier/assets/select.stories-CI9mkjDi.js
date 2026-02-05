import{j as e}from"./iframe-CWu2Kwvd.js";import{P as o}from"./PopupTip-Dr432Es1.js";import{S as a}from"./Select-CQjHZKws.js";/* empty css               */import{F as s}from"./Flex-senEy_2m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CDqWmXIZ.js";import"./Icon-se0NPqC9.js";import"./TooltipTrigger-DU81WOKX.js";import"./floating-ui.react-DS24puLE.js";import"./index-BZdB7qbI.js";import"./index-fyMGA9iw.js";import"./TooltipContent-Bi_yyIzw.js";import"./useBrowserPreferences-CtSpRu2F.js";import"./useId-C59OS_Ef.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight--eA7ZI4O.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-B01wLBKv.js";import"./useListNavigation-Biv-HeWQ.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CYdoU57b.js";import"./ArrowDownIcon-DWWe9gah.js";import"./InputGroup-DP9jpKkc.js";import"./Label-BrAxKTUp.js";import"./SupportLabel-CmC-mqwy.js";import"./WarningIcon-B0bhMbMY.js";import"./SlotComponent-Da4_sNSd.js";import"./mergeRefs-2ASujW6F.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
