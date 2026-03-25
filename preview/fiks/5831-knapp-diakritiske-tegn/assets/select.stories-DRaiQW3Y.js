import{j as e}from"./iframe-C00D7x2n.js";import{P as o}from"./PopupTip-CFA7T1Th.js";import{S as a}from"./Select-COYsfEH3.js";/* empty css               */import{F as s}from"./Flex-D9xWdn63.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CTFA1_0K.js";import"./Icon-ChH1clju.js";import"./TooltipTrigger-CFn4SUN2.js";import"./floating-ui.react-ByKaAbqH.js";import"./index-uOxFpNIa.js";import"./index-dK5lswqV.js";import"./TooltipContent-j982WIhZ.js";import"./useBrowserPreferences-Bt3F2Bxk.js";import"./useId-Jl6tKbTB.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-CpGIvLvB.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-BCC9uXiV.js";import"./useListNavigation-P1r_NAM4.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-eSC4wm15.js";import"./ArrowDownIcon-BJEHFJd5.js";import"./InputGroup-Xsgwlq5G.js";import"./Label-YzP4DYZy.js";import"./SupportLabel-DUal16Hu.js";import"./WarningIcon-DiHbR5Nj.js";import"./SlotComponent-BHOm69sE.js";import"./mergeRefs-DZg8w7p4.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
