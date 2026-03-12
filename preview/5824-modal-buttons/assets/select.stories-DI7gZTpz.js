import{j as e}from"./iframe-BRQ1N0J2.js";import{P as o}from"./PopupTip-2BxlCBZC.js";import{S as a}from"./Select-wkHVeWXX.js";/* empty css               */import{F as s}from"./Flex-CDHaMuNT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BSrpxfFs.js";import"./Icon-BE0_XbeF.js";import"./TooltipTrigger-4qv_yX0-.js";import"./floating-ui.react-v6nGTQAw.js";import"./index-Cy_4Kh-O.js";import"./index-B4iGw4vZ.js";import"./TooltipContent-CuD5FNd3.js";import"./useBrowserPreferences-nhoCj6zq.js";import"./useId-B7EFyzwZ.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-B4_3lDuk.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-C9h1KbP0.js";import"./useListNavigation-BJhFTKW7.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CbEhvq3X.js";import"./ArrowDownIcon-CHlH6FTZ.js";import"./InputGroup-BwH6dBRC.js";import"./Label-Bc0oeFVY.js";import"./SupportLabel-C1Jykn3n.js";import"./WarningIcon-DyEsKJnd.js";import"./SlotComponent-DS2UJLfJ.js";import"./mergeRefs-DaMFPXbR.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
