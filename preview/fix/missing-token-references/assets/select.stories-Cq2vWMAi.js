import{j as e}from"./iframe-o0HbI-tJ.js";import{P as o}from"./PopupTip-BnbI1rIh.js";import{S as a}from"./Select-Ur_wHSsZ.js";/* empty css               */import{F as s}from"./Flex-fF5xNdiB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BoeBwQsB.js";import"./Icon-BfofD_DC.js";import"./TooltipTrigger-Bniyh1k3.js";import"./floating-ui.react-C9wzqdNK.js";import"./index-DFSC8d8b.js";import"./index-DR-XuVr-.js";import"./TooltipContent-BIKvO5z4.js";import"./useBrowserPreferences-DI0KRSYE.js";import"./useId-_rMxyb4Z.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-tkPpImJu.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-nZg64sT_.js";import"./useListNavigation-CsZ-k1qT.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Cf5iXZwk.js";import"./ArrowDownIcon-P_JRQt-U.js";import"./InputGroup-DbP7Ledg.js";import"./Label-zUQ8J2jy.js";import"./SupportLabel-h5jJ_w4j.js";import"./WarningIcon-Dk7mGQuE.js";import"./SlotComponent-DImczOBj.js";import"./mergeRefs-NAoAEB6B.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
