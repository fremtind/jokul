import{j as e}from"./iframe-BIT_jYWJ.js";import{P as o}from"./PopupTip-U6H2aP7U.js";import{S as a}from"./Select-B1Dbo4aR.js";/* empty css               */import{F as s}from"./Flex-B0D48_Br.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DWeI3kHj.js";import"./Icon-BG8Sybp4.js";import"./TooltipTrigger-ChH7vClf.js";import"./floating-ui.react-BqVCo8w7.js";import"./index-DHY5uJXz.js";import"./index-D2Q8hcC6.js";import"./TooltipContent-Cmc6-m-S.js";import"./useBrowserPreferences-FQYt31QW.js";import"./useId-CLBWt_sO.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-CG660H2o.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-BXkt_rae.js";import"./useListNavigation-zXn5XKQ3.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BWsUm2rz.js";import"./ArrowDownIcon-thoxNIK9.js";import"./InputGroup-CxcNtFbZ.js";import"./Label-BYfLwJAu.js";import"./SupportLabel-DA_nE9-5.js";import"./WarningIcon-BwIdCTbF.js";import"./SlotComponent-CMUvoUmn.js";import"./mergeRefs-uV0ZfdA-.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
