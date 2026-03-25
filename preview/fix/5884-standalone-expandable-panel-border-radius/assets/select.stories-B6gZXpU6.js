import{j as e}from"./iframe-De4vF1LA.js";import{P as o}from"./PopupTip-CYK7xRKf.js";import{S as a}from"./Select-Axxd9EKB.js";/* empty css               */import{F as s}from"./Flex-BppH0Bih.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BAOwf7JX.js";import"./Icon-C4bUq0xM.js";import"./TooltipTrigger-BW88xxJq.js";import"./floating-ui.react-N4kPLagE.js";import"./index-YjyteNaJ.js";import"./index-N--1xJ81.js";import"./TooltipContent-DXWfOUI-.js";import"./useBrowserPreferences-CTnT6pL7.js";import"./useId-9Q_cVvqt.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-DtJHCF4Q.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-D5bBTTme.js";import"./useListNavigation-t1otQlnT.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-6IBeJMoa.js";import"./ArrowDownIcon-CxI_UP83.js";import"./InputGroup-HieG53SI.js";import"./Label-hRS-j18J.js";import"./SupportLabel-qhfXD0pa.js";import"./WarningIcon-D64MJOlw.js";import"./SlotComponent-Cf8x_zQm.js";import"./mergeRefs-CTonvMlG.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
