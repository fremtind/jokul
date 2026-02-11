import{j as e}from"./iframe-CHh95oun.js";import{P as o}from"./PopupTip-Ba7fIYmS.js";import{S as a}from"./Select-DLWKsLo8.js";/* empty css               */import{F as s}from"./Flex-DAB8OcRs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DGCfIPil.js";import"./Icon-Bena-Sng.js";import"./TooltipTrigger-5rQxGCLh.js";import"./floating-ui.react-DV-Ye3yB.js";import"./index-BLU3-UJt.js";import"./index-DVbdpC0Y.js";import"./TooltipContent-DR6Hv9iv.js";import"./useBrowserPreferences-B3_QHkFC.js";import"./useId-B_BdXr48.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-BRqDO-0e.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-GhRcntqr.js";import"./useListNavigation-DZ-QS40L.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CBL4ckol.js";import"./ArrowDownIcon-tehvqXuc.js";import"./InputGroup-Czz5B86D.js";import"./Label-CgtD0_-d.js";import"./SupportLabel-9R-0Q8hy.js";import"./WarningIcon-i8xZvBQn.js";import"./SlotComponent-Ckkx-C6r.js";import"./mergeRefs-COJiCHBm.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
