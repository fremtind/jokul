import{j as e}from"./iframe-KUO-F_B9.js";import{P as o}from"./PopupTip-CRsYzX3j.js";import{S as a}from"./Select-DQB6Eg6D.js";/* empty css               */import{F as s}from"./Flex-BRjJWy5q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Bwnwssf3.js";import"./Icon-DG6s4xDk.js";import"./TooltipTrigger-DdxP0MEG.js";import"./floating-ui.react-DZ2ynI-b.js";import"./index-C8xzwxpy.js";import"./index-B-KOsBYd.js";import"./TooltipContent-B0PEj4_8.js";import"./useBrowserPreferences-BYkMkq2g.js";import"./useId-B4V0-f1l.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-D-_ggJgO.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-1K1q1DQl.js";import"./useListNavigation-BoQ3ZagP.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CUJfc14y.js";import"./ArrowDownIcon-Bw10b7_J.js";import"./InputGroup-p-MsmKme.js";import"./Label-BQhRUifm.js";import"./SupportLabel-CYFetTZw.js";import"./WarningIcon-PMx6y0aI.js";import"./SlotComponent-6CRzcxwM.js";import"./mergeRefs-C1P-Sb2Y.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
