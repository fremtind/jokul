import{j as e}from"./iframe-QPc0IBld.js";import{P as o}from"./PopupTip-FjYEYX9P.js";import{S as a}from"./Select-BpIhHsHC.js";/* empty css               */import{F as s}from"./Flex-0jKYiax2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DG_v5ksj.js";import"./Icon-D51viLaQ.js";import"./TooltipTrigger-3G-7r4rM.js";import"./floating-ui.react-BYIasFSG.js";import"./index-C2r5Qzd3.js";import"./index-BWs17Atw.js";import"./TooltipContent-DyhIz52y.js";import"./useBrowserPreferences-NzSRGx9D.js";import"./useId-sPtuzADl.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-De3E8nEP.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-B5-4XwbA.js";import"./useListNavigation-DuNgerp3.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DXqtwx5U.js";import"./ArrowDownIcon-BHiKnQqt.js";import"./InputGroup-CxPtFf8W.js";import"./Label-KZLiaYNT.js";import"./SupportLabel-Ba37nKSf.js";import"./WarningIcon-BJV8RI0b.js";import"./SlotComponent-Dn-awriH.js";import"./mergeRefs-DBZboEgd.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
