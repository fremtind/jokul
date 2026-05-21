import{j as e}from"./iframe-CbVzgljb.js";import{P as o}from"./PopupTip-CHGi876G.js";import{S as a}from"./Select-BjnWKzys.js";/* empty css               */import{F as s}from"./Flex-Cam7XsT3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DDqQ_8GM.js";import"./Icon-DYIqOKBd.js";import"./TooltipTrigger-B2GPdOiF.js";import"./floating-ui.react-mQwy5RTD.js";import"./index-BTbgiesa.js";import"./index-DOQ9xPmR.js";import"./TooltipContent-m4zghZlN.js";import"./useBrowserPreferences-BhFyMk2O.js";import"./useId-D9OZSiZI.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-CUEQCwVE.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-CgNGPr-h.js";import"./useListNavigation-BgRSafHZ.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-oqrDKju6.js";import"./ArrowDownIcon-BWZs64lc.js";import"./InputGroup-Bn4gqv61.js";import"./Label-DUOUiTPI.js";import"./SupportLabel-DbGyd2Qv.js";import"./WarningIcon-BDmw08Cz.js";import"./SlotComponent-CAxTN-FV.js";import"./mergeRefs-D32Mb2jR.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
