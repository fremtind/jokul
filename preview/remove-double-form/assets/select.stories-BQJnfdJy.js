import{j as e}from"./iframe-CFM47A3t.js";import{P as o}from"./PopupTip-DuMWIKNz.js";import{S as a}from"./Select-C1RLMS-x.js";/* empty css               */import{F as s}from"./Flex-BGasP5Df.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BmP1NcZs.js";import"./Icon-D4OObDPq.js";import"./TooltipTrigger-C0eYJPYZ.js";import"./floating-ui.react-Co53Byfr.js";import"./index-BDecCbp_.js";import"./index-CoMxq16S.js";import"./TooltipContent-CS-M4CVa.js";import"./useBrowserPreferences-BxpvbHL1.js";import"./useId-CqyZTF6Z.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-4Ra2PLQG.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-DrtMfFLW.js";import"./useListNavigation-DeflCsyY.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-YGm_1lfU.js";import"./ArrowDownIcon-CHoq_K-f.js";import"./InputGroup-Bu2RiBzU.js";import"./Label-Bh2-FyOq.js";import"./SupportLabel-CNz2zx8w.js";import"./WarningIcon-xlMInnbA.js";import"./SlotComponent-BSSCBbUa.js";import"./mergeRefs-BrGXFy4h.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
