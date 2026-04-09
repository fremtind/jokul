import{j as e}from"./iframe-BVV4LrUq.js";import{P as o}from"./PopupTip-23OnwOAR.js";import{S as a}from"./Select-hFo7208Z.js";/* empty css               */import{F as s}from"./Flex-Dx-1cFs6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BI8FlMl3.js";import"./Icon-DMK-Z5AO.js";import"./TooltipTrigger-DFVckLm9.js";import"./floating-ui.react-CvO-ecza.js";import"./index-Cj2OEhk7.js";import"./index-DTl2-PGK.js";import"./TooltipContent-q5LZ1P8T.js";import"./useBrowserPreferences-C_5obMd1.js";import"./useId-CB5rypRD.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-3UbIhjnD.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-CNZvuzUx.js";import"./useListNavigation-DhLVZMIj.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BGGBbJ4s.js";import"./ArrowDownIcon-DbBBVwTG.js";import"./InputGroup-CL2Abz3W.js";import"./Label-BcoxwFM1.js";import"./SupportLabel-C5Ul7-7q.js";import"./WarningIcon-DMc3FsAI.js";import"./SlotComponent-CzC9-jv-.js";import"./mergeRefs-CiCqUjpU.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
