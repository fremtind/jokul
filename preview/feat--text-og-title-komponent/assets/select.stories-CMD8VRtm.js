import{j as e}from"./iframe-RiSe5yph.js";import{P as o}from"./PopupTip-BTrITczB.js";import{S as a}from"./Select-CJYMS-5p.js";/* empty css               */import{F as s}from"./Flex-ByONbHBC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DzJpiz3c.js";import"./Icon-B_ifdt1-.js";import"./TooltipTrigger-B5tYMozm.js";import"./floating-ui.react-D6A0l54j.js";import"./index-C3wvQarM.js";import"./index-1e3hUQZb.js";import"./TooltipContent-B96DB9m3.js";import"./useBrowserPreferences-B7VCD6WR.js";import"./useId-B6UCwi-r.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-B_pyCKeI.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-B4FpuSei.js";import"./useListNavigation-DBhZsKoK.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-FwTB-5TM.js";import"./ArrowDownIcon-DZCTfhlp.js";import"./InputGroup-BZ-56Of8.js";import"./Label-BFZ-L014.js";import"./SupportLabel-CZ18TbkQ.js";import"./WarningIcon-Cwhhvy9B.js";import"./SlotComponent-CPXCDk-y.js";import"./mergeRefs-qgE891mv.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
