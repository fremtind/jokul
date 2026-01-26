import{j as e}from"./iframe-DEZQE8n-.js";import{P as o}from"./PopupTip-D0tkgJkx.js";import{S as a}from"./Select-Dyy3kCXA.js";/* empty css               */import{F as s}from"./Flex-Jp-eYDpO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-4rwjqEpM.js";import"./Icon-CpQt9UdP.js";import"./TooltipTrigger-C5ksk1WK.js";import"./floating-ui.react-DRKucc_F.js";import"./index-cehhS4TI.js";import"./index-B1UL1cr3.js";import"./TooltipContent-DcPntsKW.js";import"./useBrowserPreferences-DY_14-MH.js";import"./useId-Dg_yHtSQ.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-C8LtzE09.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-DLjyHPg-.js";import"./useListNavigation-ChGl6Ili.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-96n1k5cn.js";import"./ArrowDownIcon-KDqJ-9-O.js";import"./InputGroup-CStzdmyR.js";import"./Label-DN-j4i4E.js";import"./SupportLabel-u95zAf0j.js";import"./WarningIcon-BnsfOap9.js";import"./SlotComponent-D8IjF5ec.js";import"./mergeRefs-BDtilvmZ.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
