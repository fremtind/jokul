import{j as e}from"./iframe-BMg14vkX.js";import{P as o}from"./PopupTip-BGlQK467.js";import{S as a}from"./Select-f55T6KO4.js";/* empty css               */import{F as s}from"./Flex-8wr3Gg2_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-gZsKS5du.js";import"./Icon-B6iv-AsT.js";import"./TooltipTrigger-C8AphRXT.js";import"./floating-ui.react-eZ-QT_tC.js";import"./index-DK6RwHIA.js";import"./index-Bu_brc2q.js";import"./TooltipContent-N8DULlTV.js";import"./useBrowserPreferences-TJNbT7bv.js";import"./useId-B3IQknbz.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-CP5RssB5.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-JD4QpOjA.js";import"./useListNavigation-BHgLiXN3.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-wpjS1bDt.js";import"./ArrowDownIcon-DZTCqWXT.js";import"./InputGroup-C2xl23X-.js";import"./Label-CrkWFjkH.js";import"./SupportLabel-DTTqJ0pj.js";import"./WarningIcon-DRoSC7Os.js";import"./SlotComponent-CLwu-nUD.js";import"./mergeRefs-C-SatDeR.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
