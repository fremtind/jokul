import{j as e}from"./iframe-B14fq7Ce.js";import{P as o}from"./PopupTip-j61ioxgz.js";import{S as a}from"./Select-4Gy2VyOk.js";/* empty css               */import{F as s}from"./Flex-D2H9XLBF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CKJe64jH.js";import"./Icon-Cmy_zgVx.js";import"./TooltipTrigger-DWROhnZ1.js";import"./floating-ui.react-BN0ZfnAo.js";import"./index-DhnX0AKD.js";import"./index-M4WgDj9Y.js";import"./TooltipContent-DpaukYb7.js";import"./useBrowserPreferences-DkYm2gaG.js";import"./useId-Dr1SQTfn.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-Bz4Tdi3-.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-CwZGLl7Q.js";import"./useListNavigation-rOim1MNh.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-oQDfV8ii.js";import"./ArrowDownIcon-DTvs9EOI.js";import"./InputGroup-DW3L4veR.js";import"./Label-DHSwOFOI.js";import"./SupportLabel-35Gr9ZBx.js";import"./WarningIcon-DGOpWOsc.js";import"./SlotComponent-KwNjH84L.js";import"./mergeRefs-CQKUd0yN.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
