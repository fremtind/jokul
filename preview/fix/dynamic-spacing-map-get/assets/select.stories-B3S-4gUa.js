import{j as e}from"./iframe-GrF9Ha7L.js";import{P as o}from"./PopupTip-5d1mOIZE.js";import{S as a}from"./Select-CikPoFCT.js";/* empty css               */import{F as s}from"./Flex-2ue2BBrU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BxD9z9tO.js";import"./Icon-DR1_-5OE.js";import"./TooltipTrigger-D4SOCD0z.js";import"./floating-ui.react-BBwWNJNw.js";import"./index-DRF9aqXm.js";import"./index-Bt6YmT9H.js";import"./TooltipContent-BkMGgGf1.js";import"./useBrowserPreferences-CexbfWMf.js";import"./useId-D9NLSEWx.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-ZjuCojxy.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-BBhzk-m_.js";import"./useListNavigation-CYhZ2r-a.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-1vp3tOmc.js";import"./ArrowDownIcon-Dd29-1rD.js";import"./InputGroup-CRDvx34J.js";import"./Label-CZ0DM0Zp.js";import"./SupportLabel-DowCIyNS.js";import"./WarningIcon-BB3PYmoD.js";import"./SlotComponent-dEGyH1Pr.js";import"./mergeRefs-B3LHIiYV.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
