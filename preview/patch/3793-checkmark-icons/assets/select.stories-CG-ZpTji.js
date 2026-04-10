import{j as e}from"./iframe-DwJJ3uPP.js";import{P as o}from"./PopupTip-X4E2YyzX.js";import{S as a}from"./Select-CyyDLObl.js";/* empty css               */import{F as s}from"./Flex-ji0fO8ZD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-8S_qN-Sd.js";import"./Icon-DQEiygQx.js";import"./TooltipTrigger-DApD8Rzg.js";import"./floating-ui.react-vc0UthUi.js";import"./index-WYIdtYLD.js";import"./index-CJuNusT6.js";import"./TooltipContent-ByYa1L9m.js";import"./useBrowserPreferences-WCeGFnAT.js";import"./useId-I1nGj9IL.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-NCNPJWhE.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-DtoPPzYy.js";import"./useListNavigation-Qsv17HN_.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Cc6CUQTn.js";import"./ArrowDownIcon-BSWnszQx.js";import"./InputGroup-JY6ONX3C.js";import"./Label-D3V-GGps.js";import"./SupportLabel-BholoxF8.js";import"./WarningIcon-DN7IjHp5.js";import"./SlotComponent-JS3oJAPf.js";import"./mergeRefs-BuztUV2p.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
