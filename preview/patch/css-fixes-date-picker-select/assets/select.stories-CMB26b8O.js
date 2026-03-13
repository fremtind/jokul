import{j as e}from"./iframe-DmB4tOtU.js";import{P as o}from"./PopupTip-BuuXKHQx.js";import{S as a}from"./Select-DQMo0BhW.js";/* empty css               */import{F as s}from"./Flex-Cmlc2Tzs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CRGlofnk.js";import"./Icon-b7MplHOl.js";import"./TooltipTrigger-CY2Xm4hp.js";import"./floating-ui.react-ChKNwz6t.js";import"./index-DwibMiwt.js";import"./index-DvDxVEHT.js";import"./TooltipContent-BZNpdq-1.js";import"./useBrowserPreferences-BRgT5eqp.js";import"./useId-BULXlfvn.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-DZysIbRU.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-CwiRmhnv.js";import"./useListNavigation-BpdKCb_v.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DfV44-Rt.js";import"./ArrowDownIcon-Cekz8FkB.js";import"./InputGroup-QstfbOpK.js";import"./Label-CyRm-IeW.js";import"./SupportLabel-DdF3LMuH.js";import"./WarningIcon-CQN4XZU2.js";import"./SlotComponent-BiJ6Yix8.js";import"./mergeRefs-ClKEdXU3.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
