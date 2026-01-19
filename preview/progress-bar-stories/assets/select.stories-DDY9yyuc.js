import{j as e}from"./iframe-BLkUpd90.js";import{P as o}from"./PopupTip-D1XsWd7H.js";import{S as a}from"./Select-DOLeSCrl.js";/* empty css               */import{F as s}from"./Flex-C3tD5e2N.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CmmrcN__.js";import"./Icon-C5BUtbpO.js";import"./TooltipTrigger-D6z1IxSD.js";import"./floating-ui.react-DjHSFk7s.js";import"./index-DwHYRKJZ.js";import"./index-BGzR11oQ.js";import"./TooltipContent-DQVYUIj_.js";import"./useBrowserPreferences-CJh4-RsK.js";import"./useId-Cx1CVnI-.js";import"./getThemeAndDensity-v_O0Epee.js";import"./useAnimatedHeight-Bq79K2zO.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-D32f_KmJ.js";import"./useListNavigation-BCp1emSX.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-mldRQuYH.js";import"./ArrowDownIcon-DXFt3nKI.js";import"./InputGroup-BS6z23Je.js";import"./Label-ClbbEBQm.js";import"./SupportLabel-PqwXe1Hg.js";import"./WarningIcon-Kq_VDe4Y.js";import"./SlotComponent-jVST4kCf.js";import"./mergeRefs-a3vf9HQc.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
