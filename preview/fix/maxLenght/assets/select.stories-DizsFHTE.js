import{j as e}from"./iframe-B_A73W-G.js";import{P as o}from"./PopupTip-BE8TD5cw.js";import{S as a}from"./Select-BkYEan-z.js";/* empty css               */import{F as s}from"./Flex-Dn-soizb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BPHKG8B1.js";import"./Icon-CeiFtBV_.js";import"./TooltipTrigger-omR7ipqN.js";import"./floating-ui.react-iBKoGpet.js";import"./index-CdFHOO4x.js";import"./index-BiO_EMWB.js";import"./useBrowserPreferences-DcnXeMpS.js";import"./useId-2X4W-6uW.js";import"./useAnimatedHeight-4M279RPn.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-DKvwFX6r.js";import"./useListNavigation-CtVa-Zo2.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BtBrUGCA.js";import"./ArrowDownIcon-CekoELiS.js";import"./InputGroup-DYiBIODx.js";import"./Label-CXHFDtSg.js";import"./SupportLabel-BSg9yuLr.js";import"./WarningIcon-joSIZwnY.js";import"./SlotComponent-BTwvbeRu.js";import"./mergeRefs-B23l44nC.js";const G={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const J=["SelectStory","SelectInline","SelectMedTooltip"];export{t as SelectInline,n as SelectMedTooltip,r as SelectStory,J as __namedExportsOrder,G as default};
