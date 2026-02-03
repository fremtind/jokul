import{j as e}from"./iframe-BpLpaKYU.js";import{P as o}from"./PopupTip-m1-Np-qh.js";import{S as a}from"./Select-B1KFTcs9.js";/* empty css               */import{F as s}from"./Flex-D4tVPR3S.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Bjwn_Ngn.js";import"./Icon-Do_xyU7r.js";import"./TooltipTrigger-DhWnrhOY.js";import"./floating-ui.react-Dam3kgfu.js";import"./index-C95KWWGH.js";import"./index-B_7zxw7y.js";import"./TooltipContent-BDnXp9Gj.js";import"./useBrowserPreferences-CmLffZY6.js";import"./useId-mS0zSO3h.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-DDQcxDh7.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-yJBWZKsf.js";import"./useListNavigation-R2KkZxRO.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-XaTf-NhO.js";import"./ArrowDownIcon-hqH6NA_a.js";import"./InputGroup-Cmv6I41D.js";import"./Label-BhtOo1EQ.js";import"./SupportLabel-Bi9qsOnh.js";import"./WarningIcon-qUTi4CM-.js";import"./SlotComponent-CZBuxd-x.js";import"./mergeRefs-ylfpgsrp.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
