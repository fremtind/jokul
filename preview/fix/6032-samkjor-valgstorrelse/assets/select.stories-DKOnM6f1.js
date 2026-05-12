import{j as e}from"./iframe-BiB0C2kl.js";import{P as o}from"./PopupTip-DMioa7bA.js";import{S as a}from"./Select-BoYSKNM7.js";/* empty css               */import{F as s}from"./Flex-BZzroIiR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Loni7tX5.js";import"./Icon-nEIjeFpR.js";import"./TooltipTrigger-DoAgV6Bk.js";import"./floating-ui.react-OfqWTqBw.js";import"./index-CuuoscJM.js";import"./index-B24S-40S.js";import"./TooltipContent-z_7PeSNx.js";import"./useBrowserPreferences-3nghK9sV.js";import"./useId-YybdL5Un.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-3yxgkOzz.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-DSmQ1Geb.js";import"./useListNavigation-DjaqFaqj.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DMK5VL4J.js";import"./ArrowDownIcon-CmBMvlCm.js";import"./InputGroup-DYfM3a0r.js";import"./Label-B8FFqsuX.js";import"./SupportLabel-DFRExa6A.js";import"./WarningIcon-GMl9vRJY.js";import"./SlotComponent-uZB1GUCc.js";import"./mergeRefs-DrgoG18o.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
