import{j as e}from"./iframe-CrJ0lt5j.js";import{P as o}from"./PopupTip-BbtOQJQp.js";import{S as a}from"./Select-SRv_1aMg.js";/* empty css               */import{F as s}from"./Flex-BADJG5cU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-U63T9I0x.js";import"./Icon-DGmVWH6s.js";import"./TooltipTrigger-HpHH2IO6.js";import"./floating-ui.react-Dthd5uDm.js";import"./index-CxbIjaM6.js";import"./index-b4W607Pr.js";import"./TooltipContent-B2NT1qjg.js";import"./useBrowserPreferences-BLI8U_gS.js";import"./useId-CsNjwyA-.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-DEQR8wZy.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-CoL3tw97.js";import"./useListNavigation-B11g-0ZQ.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DngXLdZD.js";import"./ArrowDownIcon-Cu3kZx0D.js";import"./InputGroup-DSFBvGGy.js";import"./Label-DqvLFkh5.js";import"./SupportLabel-CnciDgrG.js";import"./WarningIcon-CiCSqK69.js";import"./SlotComponent-BD53yDg5.js";import"./mergeRefs-Ct7_tIOG.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
