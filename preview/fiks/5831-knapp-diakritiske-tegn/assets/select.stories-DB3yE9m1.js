import{j as e}from"./iframe-B0IKRQS_.js";import{P as o}from"./PopupTip-CqTbhqh7.js";import{S as a}from"./Select-CqLsqnon.js";/* empty css               */import{F as s}from"./Flex-DUNCaDIM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-arW0OBRa.js";import"./Icon-D2o_GRc_.js";import"./TooltipTrigger-BeCHqrEL.js";import"./floating-ui.react-zH3SL9rS.js";import"./index-Do4HjpDr.js";import"./index-DKo2iTvp.js";import"./TooltipContent-_AxhmTu-.js";import"./useBrowserPreferences-BSneNAQL.js";import"./useId-CEq4xdc9.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-C3HhjLWs.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-CtcbFDZQ.js";import"./useListNavigation-DyVkT5s4.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-eRJSOavW.js";import"./ArrowDownIcon-MuLUNNdY.js";import"./InputGroup-DBl7LfwS.js";import"./Label-_RhgjGEU.js";import"./SupportLabel-BWuZrzpq.js";import"./WarningIcon-B0D-nte2.js";import"./SlotComponent-Bqdvos9v.js";import"./mergeRefs-DIGdHh8_.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
