import{j as e}from"./iframe-B7GIPB-S.js";import{P as o}from"./PopupTip-B4ufe6Ug.js";import{S as a}from"./Select-Bimmbwhz.js";/* empty css               */import{F as s}from"./Flex-Bqc2Pr5k.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Cuw4Lasa.js";import"./Icon-CbjxLrgk.js";import"./TooltipTrigger-DhOypP9N.js";import"./floating-ui.react-BxXmksg6.js";import"./index-tS-okDxY.js";import"./index-BcJrt-YS.js";import"./TooltipContent-BEFkRDhC.js";import"./useBrowserPreferences-CHUMm32o.js";import"./useId-oymTxlJc.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-Fp_jdTD0.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-D6a3jV6X.js";import"./useListNavigation-8XWT1vj5.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DNYwDw5f.js";import"./ArrowDownIcon-DJnxguTR.js";import"./InputGroup-CrDzxHy3.js";import"./Label-58AOQ-iN.js";import"./SupportLabel-mG6K6sij.js";import"./WarningIcon-CDrngDo8.js";import"./SlotComponent-D_pbcq4r.js";import"./mergeRefs-BjTv8F1i.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
