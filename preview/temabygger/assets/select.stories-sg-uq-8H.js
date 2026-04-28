import{j as e}from"./iframe-4qUkCLET.js";import{P as o}from"./PopupTip-BcJ6V_jq.js";import{S as a}from"./Select-BwMbn_S0.js";/* empty css               */import{F as s}from"./Flex-B4UO2wvz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-C7fvPgQf.js";import"./Icon-D-1gNPsF.js";import"./TooltipTrigger-C0MtyP9G.js";import"./floating-ui.react-BcUYDCRQ.js";import"./index-DQSN_kt6.js";import"./index-CpRlENve.js";import"./TooltipContent-BEnFJ20d.js";import"./useBrowserPreferences-CcL7QPnU.js";import"./useId-CBjKlYnp.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-VJw_Ykie.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-DE87bowY.js";import"./useListNavigation-BBBdDPhL.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B5RSunoq.js";import"./ArrowDownIcon-DsZnyI4a.js";import"./InputGroup-CUkJOeyB.js";import"./Label-B1eyw7re.js";import"./SupportLabel-C4YcDHnw.js";import"./WarningIcon-D6EhRwgr.js";import"./SlotComponent-BcLEVbYu.js";import"./mergeRefs-4xYaoolw.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
