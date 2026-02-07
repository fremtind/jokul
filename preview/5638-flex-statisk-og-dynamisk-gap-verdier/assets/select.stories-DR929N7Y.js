import{j as e}from"./iframe-C6TP-XNE.js";import{P as o}from"./PopupTip-DBkKZUKq.js";import{S as a}from"./Select-BBZbgdxl.js";/* empty css               */import{F as s}from"./Flex-CrOk65oi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-svjL8r-O.js";import"./Icon-D86L-DN7.js";import"./TooltipTrigger-D3npzIY5.js";import"./floating-ui.react-BfzCWTmY.js";import"./index-Bb5ClZlB.js";import"./index-B_SSe9Xu.js";import"./TooltipContent-BHhuPag9.js";import"./useBrowserPreferences-CUvko7xM.js";import"./useId-DL-vZhfl.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-CI1-YNAC.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-DrlWEIUW.js";import"./useListNavigation-mOTAO-fc.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BHVY1ExF.js";import"./ArrowDownIcon-BCLZ2MwL.js";import"./InputGroup-DlzU7c8Y.js";import"./Label-BLgcoFAM.js";import"./SupportLabel-D_IUbB2v.js";import"./WarningIcon-qgG-Raj1.js";import"./SlotComponent-qmJim58y.js";import"./mergeRefs-BtaFYcSK.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
