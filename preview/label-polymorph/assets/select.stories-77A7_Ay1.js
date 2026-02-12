import{j as e}from"./iframe-CSTzEXoh.js";import{P as o}from"./PopupTip-5voLFXMc.js";import{S as a}from"./Select-V_Y_20l_.js";/* empty css               */import{F as s}from"./Flex-ZQIWvpJ1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BzSUWbte.js";import"./Icon-Da9FFZGt.js";import"./TooltipTrigger-BUGFNRHb.js";import"./floating-ui.react-Dnpkq5wZ.js";import"./index-DHZ0Sy9l.js";import"./index-CNlMPt7t.js";import"./TooltipContent-DhEgaSsu.js";import"./useBrowserPreferences-pSYC1ENs.js";import"./useId-BxdmbWnT.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-BFOxTGRs.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-B3WJqRKy.js";import"./useListNavigation-BYix6FHK.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Buvx_m6I.js";import"./ArrowDownIcon-DglLp1Ct.js";import"./InputGroup-Bb0NlIz6.js";import"./Label-YNmO3Qbj.js";import"./SupportLabel-CCUIEp-p.js";import"./WarningIcon-aj0pRQ7F.js";import"./SlotComponent-Dv8g99YF.js";import"./mergeRefs-sYzEC9h5.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
