import{j as e}from"./iframe-D3AKotyT.js";import{P as o}from"./PopupTip-CQHvrdVn.js";import{S as a}from"./Select-CS83wmlZ.js";/* empty css               */import{F as s}from"./Flex-CN75Q0Kt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Cv-oIhkw.js";import"./Icon-CiBUj_u7.js";import"./TooltipTrigger-DjXERqL2.js";import"./floating-ui.react-CTKLIf6H.js";import"./index-CfAoIE-2.js";import"./index-BCOmwNXF.js";import"./TooltipContent-FvT-t5d1.js";import"./useBrowserPreferences-u64qAO4A.js";import"./useId-Cle4ag8N.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-BlVkmc3M.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-4M8lJkeF.js";import"./useListNavigation-DBxhOs_g.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-wo4nB_d7.js";import"./ArrowDownIcon-DE0w-W1y.js";import"./InputGroup-DK_z0ZEE.js";import"./Label-78gtr3Fm.js";import"./SupportLabel-BSxtPowV.js";import"./WarningIcon-D2yyYTcr.js";import"./SlotComponent-CBY5f3UI.js";import"./mergeRefs-RuEKJtoT.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
