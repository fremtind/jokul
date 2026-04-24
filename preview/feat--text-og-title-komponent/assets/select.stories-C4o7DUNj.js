import{j as e}from"./iframe-CdMBQode.js";import{P as o}from"./PopupTip-BOkrN8vR.js";import{S as a}from"./Select-CyaBZagT.js";/* empty css               */import{F as s}from"./Flex-CimmCvSY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-ByqRfQz3.js";import"./Icon-ByJav2If.js";import"./TooltipTrigger-BvI-UrAG.js";import"./floating-ui.react-C4iK0IPq.js";import"./index-D_jdk-Ug.js";import"./index-DeL-Hdfn.js";import"./TooltipContent-pBlf761U.js";import"./useBrowserPreferences-CIcmKAaK.js";import"./useId-h225ykP6.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-9EcvY9lH.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-CqcQf1Io.js";import"./useListNavigation-BhUj1uA0.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BoaFg0X0.js";import"./ArrowDownIcon-D9g2ZTsO.js";import"./InputGroup-A-Ll4LGi.js";import"./Label-nyUvZJnR.js";import"./SupportLabel-9MAu-Rny.js";import"./WarningIcon-DCokgduR.js";import"./SlotComponent-cvaRma8Z.js";import"./mergeRefs-gOb-_29c.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
