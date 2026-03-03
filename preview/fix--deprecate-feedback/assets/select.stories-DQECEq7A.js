import{j as e}from"./iframe-CH9XGqLt.js";import{P as o}from"./PopupTip-WfUMqg7c.js";import{S as a}from"./Select-nuRoBrRa.js";/* empty css               */import{F as s}from"./Flex-D1nFTKwS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DuSzmO1t.js";import"./Icon-CE4Xg_O7.js";import"./TooltipTrigger-hrn9Nmvf.js";import"./floating-ui.react-8rVHYFFO.js";import"./index-Bcp6PUyC.js";import"./index-DcywMsLs.js";import"./TooltipContent-CJVwV5L7.js";import"./useBrowserPreferences-Djrzv5RV.js";import"./useId-B4DNed72.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-BwVM0Oc4.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-sFI-ykgl.js";import"./useListNavigation-B9Z4x20H.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DnyY2Q3k.js";import"./ArrowDownIcon-CqOaIXK8.js";import"./InputGroup-C9btk5IY.js";import"./Label-BDEa5KhV.js";import"./SupportLabel-4ryjkqBd.js";import"./WarningIcon-C8udvh4c.js";import"./SlotComponent-CvEGOdou.js";import"./mergeRefs-CeLw9eJh.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
