import{j as e}from"./iframe-CDskDVd3.js";import{P as o}from"./PopupTip-bmsztKzo.js";import{S as a}from"./Select-CfUYXcS9.js";/* empty css               */import{F as s}from"./Flex-B0wHzBja.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BRj3ggmX.js";import"./Icon-DCpRypxG.js";import"./TooltipTrigger-BY8RxWxZ.js";import"./floating-ui.react-BK7vyAiI.js";import"./index-B6WGdFdV.js";import"./index-9V6ZZw8H.js";import"./TooltipContent-DdbgvLQb.js";import"./useBrowserPreferences-BroQcv49.js";import"./useId-CLp_Cuzu.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-BAIi6Atk.js";import"./tokens-CMcKomMy.js";import"./usePreviousValue-BQPQeCOM.js";import"./useListNavigation-CKjpUn96.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CWD7MYaY.js";import"./ArrowDownIcon-Bf2l2-1w.js";import"./InputGroup-8ak0LOp7.js";import"./Label-844O8U-l.js";import"./SupportLabel-Bg3BdEHf.js";import"./WarningIcon-CW7_FNmZ.js";import"./SlotComponent-H2ulQCVf.js";import"./mergeRefs-B9yvfKff.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
