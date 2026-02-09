import{j as e}from"./iframe-g9tc2sDn.js";import{P as o}from"./PopupTip-BLcdKCYg.js";import{S as a}from"./Select-W-q_-Kza.js";/* empty css               */import{F as s}from"./Flex-COjroXxn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-lzNREceV.js";import"./Icon-ITtVxmRN.js";import"./TooltipTrigger-PXxxYagr.js";import"./floating-ui.react-Bw_Uq0ZD.js";import"./index-DV9VOlNY.js";import"./index-C2XFly4k.js";import"./TooltipContent-BWcRVQbK.js";import"./useBrowserPreferences-Df9kMGoX.js";import"./useId-BdUeg3P0.js";import"./getThemeAndDensity-v_O0Epee.js";import"./useAnimatedHeight-5KrjDHUC.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-C9J9Jf1y.js";import"./useListNavigation-Cik40VTU.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BEMCPo0R.js";import"./ArrowDownIcon-D7YhwMRM.js";import"./InputGroup-FSoX_IgN.js";import"./Label-KA-SW84d.js";import"./SupportLabel-CRaF74pA.js";import"./WarningIcon-CymMXplh.js";import"./SlotComponent-qysEF6EQ.js";import"./mergeRefs-B2lAsRw5.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
