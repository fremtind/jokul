import{j as e}from"./iframe-CTbQ37GR.js";import{P as o}from"./PopupTip-DWkXwH8F.js";import{S as a}from"./Select-Rz5yR3kk.js";/* empty css               */import{F as s}from"./Flex-CV5d1Oa-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-3ivgdojY.js";import"./Icon-DH3AneDh.js";import"./TooltipTrigger-DKjuCQoa.js";import"./floating-ui.react-YUCa2Zhl.js";import"./index-CQ3lWhW9.js";import"./index-IKfEc_LZ.js";import"./TooltipContent-CKA0KkpG.js";import"./useBrowserPreferences-Bc_skSd0.js";import"./useId-9xkqMgJy.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-CJcLSPGW.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-jMCAhOxF.js";import"./useListNavigation-DA_eT7Fl.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Cds-qLtn.js";import"./ArrowDownIcon-BRuzEHsc.js";import"./InputGroup-mIS6WzCb.js";import"./Label-CBdtC75F.js";import"./SupportLabel-C3WxlAcS.js";import"./WarningIcon-DhbtjuSN.js";import"./SlotComponent-Broje9WZ.js";import"./mergeRefs-Brrq9sk_.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
