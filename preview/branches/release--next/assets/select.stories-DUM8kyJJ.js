import{j as e}from"./iframe-C_zAoCra.js";import{P as o}from"./PopupTip-CI9MG8vz.js";import{S as a}from"./Select-Cq-sgFi5.js";/* empty css               */import{F as s}from"./Flex-w8LGCUj-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CuhKCiz_.js";import"./Icon-DIYK238P.js";import"./TooltipTrigger-BvsCtIg1.js";import"./floating-ui.react-C6octQLm.js";import"./index-ug1qBiPE.js";import"./index-DqG5tC4W.js";import"./TooltipContent-EpgAMHYA.js";import"./useBrowserPreferences-CJDvGntc.js";import"./useId-PBtl1luZ.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-C_0yhs2U.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-eqOPWJAm.js";import"./useListNavigation-0vd9-N1B.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-4S4wa08o.js";import"./ArrowDownIcon-BfeoWHLz.js";import"./InputGroup-QCmpmVII.js";import"./Label-CtB8_Bto.js";import"./SupportLabel-C7GtVCn5.js";import"./WarningIcon-BDdQoSho.js";import"./SlotComponent-Kf7Hotnw.js";import"./mergeRefs-Dc8eWnD2.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
