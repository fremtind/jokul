import{j as e}from"./iframe-Bq_zWpjG.js";import{P as o}from"./PopupTip-D_NCJBFk.js";import{S as a}from"./Select-5MayXJmv.js";/* empty css               */import{F as s}from"./Flex-BA8tadIs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-6bpx_BLA.js";import"./Icon-Coo_j_Hx.js";import"./TooltipTrigger-D1L80mP4.js";import"./floating-ui.react-vON_io4X.js";import"./index-DIvmWXLv.js";import"./index-DGguc1-Z.js";import"./TooltipContent-nNEf3ixS.js";import"./useBrowserPreferences-BBk-rKay.js";import"./useId-CCRC9UYz.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-W20QsAmf.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-BPVqKOK-.js";import"./useListNavigation-BAP9MEdy.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-0x7gmHU6.js";import"./ArrowDownIcon-BmHkWkE9.js";import"./InputGroup-Cua7eWJv.js";import"./Label-BgPIeJu5.js";import"./SupportLabel-C9BsNJpA.js";import"./WarningIcon-4ILhv2et.js";import"./SlotComponent-M1yRGOM-.js";import"./mergeRefs-BTmdILdX.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
