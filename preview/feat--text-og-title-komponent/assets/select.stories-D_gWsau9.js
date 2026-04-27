import{j as e}from"./iframe-DPF96T-f.js";import{P as o}from"./PopupTip-BqqYHI7r.js";import{S as a}from"./Select-HAhOX--r.js";/* empty css               */import{F as s}from"./Flex-AKEWxviy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DF_hXyPY.js";import"./Icon-DerCTD_Z.js";import"./TooltipTrigger-B78jcOxS.js";import"./floating-ui.react-0QlF-gGd.js";import"./index-CVDQdptl.js";import"./index-C8y_P26x.js";import"./TooltipContent-D8Yc4vvt.js";import"./useBrowserPreferences-BsnyesTp.js";import"./useId-CHRcJ9e5.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-DVfTmbN4.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-DaL5yUZh.js";import"./useListNavigation-DI-TjYP7.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DUCyND5x.js";import"./ArrowDownIcon-Ctf6VLKx.js";import"./InputGroup-CMFi7VuW.js";import"./Label-hfqGr7EE.js";import"./SupportLabel-Boi-E1cX.js";import"./WarningIcon-mv2m6I_y.js";import"./SlotComponent-CxGmuRq5.js";import"./mergeRefs-CUPVjfva.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
