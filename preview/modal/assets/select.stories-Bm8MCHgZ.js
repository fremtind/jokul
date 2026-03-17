import{j as e}from"./iframe-DkHf2Bdy.js";import{P as o}from"./PopupTip-DvfjrB2n.js";import{S as a}from"./Select-BM1yGRcl.js";/* empty css               */import{F as s}from"./Flex-mZ3-cInx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-KP4Tg2mh.js";import"./Icon-Cliz4a8t.js";import"./TooltipTrigger-Cw4zTNZ6.js";import"./floating-ui.react-CCGZW0vV.js";import"./index-2eHZ1d4o.js";import"./index-uF8XqFN_.js";import"./TooltipContent-CvhCjth5.js";import"./useBrowserPreferences-DPVj2irj.js";import"./useId-DJZBzhaW.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-FpbwNvc7.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-DXiY1l9S.js";import"./useListNavigation-L0ssg_al.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BBilEPek.js";import"./ArrowDownIcon-DnZ7s7I1.js";import"./InputGroup-lkncHO0J.js";import"./Label-Dr-qu9O1.js";import"./SupportLabel-B6tNcD-U.js";import"./WarningIcon-BHtnZc_0.js";import"./SlotComponent-Bh6A5HRM.js";import"./mergeRefs-yYTeu-pT.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
