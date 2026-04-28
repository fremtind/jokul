import{j as e}from"./iframe-T23mdjuL.js";import{P as o}from"./PopupTip-BFhe_rm1.js";import{S as a}from"./Select-C9UOBbJ6.js";/* empty css               */import{F as s}from"./Flex-BpSmumhu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-D04cvnjG.js";import"./Icon-n9CxozG4.js";import"./TooltipTrigger-DHTR2vhB.js";import"./floating-ui.react-BPubeX2L.js";import"./index-ibbcM1Jp.js";import"./index-lS-rtNlE.js";import"./TooltipContent-D_gEIiTn.js";import"./useBrowserPreferences-BXo7WWi9.js";import"./useId-Csw23UKE.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-CCMyKxo3.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-q5cBSili.js";import"./useListNavigation-DrWWjY8m.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BOXsERNy.js";import"./ArrowDownIcon-CAC_61TF.js";import"./InputGroup-BPtbHig4.js";import"./Label-CgWob-kP.js";import"./SupportLabel-kkGv9zRu.js";import"./WarningIcon-BnqZCwcb.js";import"./SlotComponent-B15PDqP-.js";import"./mergeRefs-dEb1y5DC.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
