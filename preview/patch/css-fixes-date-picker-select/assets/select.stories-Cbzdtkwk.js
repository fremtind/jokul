import{j as e}from"./iframe-3VnfSXzb.js";import{P as o}from"./PopupTip-DtLi-TgI.js";import{S as a}from"./Select-DHtmNm9O.js";/* empty css               */import{F as s}from"./Flex-DuZ4-IEy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-B-Sdy2LD.js";import"./Icon-B9K71gEJ.js";import"./TooltipTrigger-B5jyNuA7.js";import"./floating-ui.react-B2NVMzWU.js";import"./index-Dc3bDpqk.js";import"./index-D_coIbfC.js";import"./TooltipContent-Ci-Vva3O.js";import"./useBrowserPreferences-BjIDj_Yx.js";import"./useId-hpgs-O5T.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-BHaKepaY.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-B7azj8xL.js";import"./useListNavigation-fT3wdMye.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DhShlfEO.js";import"./ArrowDownIcon-DAjvJ53l.js";import"./InputGroup-CyCmYYqv.js";import"./Label-B2F0-u7B.js";import"./SupportLabel-BhhAThff.js";import"./WarningIcon-DKEasB6R.js";import"./SlotComponent-D9jslJgm.js";import"./mergeRefs-zq3JPcMC.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
