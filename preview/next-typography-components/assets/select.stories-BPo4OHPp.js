import{j as e}from"./iframe-Bytarb_x.js";import{P as o}from"./PopupTip-CtKO2Y2I.js";import{S as a}from"./Select-BDRG5dDM.js";/* empty css               */import{F as s}from"./Flex-C3GwwikO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BqfmMdZX.js";import"./Icon-CHBlijIw.js";import"./TooltipTrigger-D-laXh1r.js";import"./floating-ui.react-CmhHAQc_.js";import"./index-C92enVue.js";import"./index-BXj6my6g.js";import"./TooltipContent-BSeovsAv.js";import"./useBrowserPreferences-BIBp4T-f.js";import"./useId-ed5AFp6u.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-pgpjzIwQ.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-BFHoD71S.js";import"./useListNavigation-BHTe3mKX.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DsIjC3Fd.js";import"./ArrowDownIcon-cs_86PPP.js";import"./InputGroup-BWZmPIdG.js";import"./Label-C544P062.js";import"./SupportLabel-HEIgEDCv.js";import"./WarningIcon-B1jomRO8.js";import"./SlotComponent-D0GI_nSj.js";import"./mergeRefs-DhZToldK.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
