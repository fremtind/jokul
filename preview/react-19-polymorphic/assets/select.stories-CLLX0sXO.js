import{j as e}from"./iframe-BNGPyR0S.js";import{P as o}from"./PopupTip-Dw1Uc6GI.js";import{S as a}from"./Select-DSaytxNy.js";/* empty css               */import{F as s}from"./Flex-RY5qXO8p.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DufFClKl.js";import"./Icon-DoNTGUB_.js";import"./TooltipTrigger-CR6kRWKx.js";import"./floating-ui.react-CVavL0LW.js";import"./index-BghXReKr.js";import"./index-BchYoWBV.js";import"./TooltipContent-CXs8jc5C.js";import"./useBrowserPreferences-Ct39F0r2.js";import"./useId-BeH8YWlo.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-DSga-Apf.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-DxgdEAgc.js";import"./useListNavigation-BqUwU5KG.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-NuVpec2b.js";import"./ArrowDownIcon-Dv591qIG.js";import"./InputGroup-Bk3Lcc48.js";import"./Label-BBeGRsP1.js";import"./SupportLabel-BHds-SFS.js";import"./WarningIcon-D6h-mfp6.js";import"./SlotComponent-CIOp99YX.js";import"./mergeRefs-_qfB1D_6.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
