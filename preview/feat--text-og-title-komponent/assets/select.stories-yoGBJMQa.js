import{j as e}from"./iframe-CO8GEMMq.js";import{P as o}from"./PopupTip-CGHD_eCS.js";import{S as a}from"./Select-0hWV-scS.js";/* empty css               */import{F as s}from"./Flex-CpX1dYfL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-IWTtof1j.js";import"./Icon-OacAcm1H.js";import"./TooltipTrigger-DU9ZTne5.js";import"./floating-ui.react-CIxGcOT2.js";import"./index-DUkT4OBi.js";import"./index-CXC267Hi.js";import"./TooltipContent-BgWjTqLb.js";import"./useBrowserPreferences-D3-klE4v.js";import"./useId-B03I_Ixj.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-Dmdsm_5M.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-rafly5u2.js";import"./useListNavigation-3x1vR08i.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DDKoENnZ.js";import"./ArrowDownIcon-IrSLm77X.js";import"./InputGroup-r_UdXAYR.js";import"./Label-BmxcqqV_.js";import"./SupportLabel-DvSm5NLB.js";import"./WarningIcon-BZTWEgmU.js";import"./SlotComponent-BHpZVklu.js";import"./mergeRefs-CygAQkyw.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
