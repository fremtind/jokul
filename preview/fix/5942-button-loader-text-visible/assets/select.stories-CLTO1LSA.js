import{j as e}from"./iframe-DoW2Y4x0.js";import{P as o}from"./PopupTip-Dl41Jjo4.js";import{S as a}from"./Select-DCTQYvDK.js";/* empty css               */import{F as s}from"./Flex-B54Se3Rw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DQo-l5Dh.js";import"./Icon-DyUNnyvc.js";import"./TooltipTrigger-DYMr2R4V.js";import"./floating-ui.react-CzhPkNqd.js";import"./index-CiPElLKh.js";import"./index-DbN8-s-J.js";import"./TooltipContent-HLMmJ6Av.js";import"./useBrowserPreferences-CZoWxQ8e.js";import"./useId-CXL5FoLy.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-Bb7YGPk7.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-D_46oJHV.js";import"./useListNavigation-BbmHCaRg.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-C6ZwGwzZ.js";import"./ArrowDownIcon-SBSvQYaE.js";import"./InputGroup-BthYwq-G.js";import"./Label-BBJ_Od9Y.js";import"./SupportLabel-B1tRAVQd.js";import"./WarningIcon-Bp4rAufJ.js";import"./SlotComponent-C-sb5sun.js";import"./mergeRefs-CU3X3qkX.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
