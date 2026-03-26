import{j as e}from"./iframe-D9A9Wc60.js";import{P as o}from"./PopupTip-e95lrTZ-.js";import{S as a}from"./Select-Lqiyic85.js";/* empty css               */import{F as s}from"./Flex-Bv27qHyv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CkS4XTYN.js";import"./Icon-1zwwOS39.js";import"./TooltipTrigger-P8N8bbvd.js";import"./floating-ui.react-Cqly0e_D.js";import"./index-Ldt-6Ow_.js";import"./index-B_P5YCCa.js";import"./TooltipContent-UliBEaRh.js";import"./useBrowserPreferences-D9KsHRAb.js";import"./useId-LWbKQQ0Y.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-B9VhCrqD.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-BaWfcOMe.js";import"./useListNavigation-C6cMODFf.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B8os6ty3.js";import"./ArrowDownIcon-DFW7cX-r.js";import"./InputGroup-WAVsR86N.js";import"./Label-D1lSPQCC.js";import"./SupportLabel-iIMrgfvz.js";import"./WarningIcon-Cn2M2uMo.js";import"./SlotComponent-IuFF51-j.js";import"./mergeRefs-BZFkQlFh.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
