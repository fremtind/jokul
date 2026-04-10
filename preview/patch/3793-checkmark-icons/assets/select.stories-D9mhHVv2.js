import{j as e}from"./iframe-BTBw0YwL.js";import{P as o}from"./PopupTip-CM9Eoaf-.js";import{S as a}from"./Select-DMlKySkK.js";/* empty css               */import{F as s}from"./Flex-C4Vd2IR9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BrdD34N_.js";import"./Icon-DeV5lXGY.js";import"./TooltipTrigger-DIjD68XU.js";import"./floating-ui.react-U1g1cAAy.js";import"./index-DioJVJtT.js";import"./index-CzY6Sz8C.js";import"./TooltipContent-BaEIllpu.js";import"./useBrowserPreferences-DWfr2wT-.js";import"./useId-B1bsGWyL.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-Cz6PXiAf.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-Cam-XJIL.js";import"./useListNavigation-DrXn280Y.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DhkGOUW2.js";import"./ArrowDownIcon-D-hsUGmk.js";import"./InputGroup-kPaPN50G.js";import"./Label-Cd1PvbDk.js";import"./SupportLabel-CDPiV-7u.js";import"./WarningIcon-Bw8tRguA.js";import"./SlotComponent-BoqFG7Z7.js";import"./mergeRefs-DuD8LVIV.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
