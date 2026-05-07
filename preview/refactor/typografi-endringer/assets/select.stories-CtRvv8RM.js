import{j as e}from"./iframe-BoBIgav0.js";import{P as o}from"./PopupTip-B2OHdLas.js";import{S as a}from"./Select-wmIpIo-T.js";/* empty css               */import{F as s}from"./Flex-DsC2hIxx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CB9jLM6s.js";import"./Icon-Bi0sWDEU.js";import"./TooltipTrigger-BD8k3_hA.js";import"./floating-ui.react-C_lZooQk.js";import"./index-B5wBpbDi.js";import"./index-DyRgkPUd.js";import"./TooltipContent-DCV6zXS1.js";import"./useBrowserPreferences-DyTMeUMY.js";import"./useId-V-T7z63-.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-BB52L9oz.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-CF2vPzBO.js";import"./useListNavigation-Dju7V71k.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B8vD6ooM.js";import"./ArrowDownIcon-BDq5bPlj.js";import"./InputGroup-Bpi5Iy9U.js";import"./Label-CQ1TtUu3.js";import"./SupportLabel-UzQFXXIZ.js";import"./WarningIcon-DakBnpyG.js";import"./SlotComponent-DD1WAVBj.js";import"./mergeRefs-CL58jV2k.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
