import{j as e}from"./iframe-DJWmC8DY.js";import{P as o}from"./PopupTip-CTViykrx.js";import{S as a}from"./Select-UbYZd2tV.js";/* empty css               */import{F as s}from"./Flex-CbDuem5N.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-D0-d2M3V.js";import"./Icon-CU0s3i34.js";import"./TooltipTrigger-Bxc3JnGi.js";import"./floating-ui.react-Bzv2D3qJ.js";import"./index--I8GmXm9.js";import"./index-CYpeD7n_.js";import"./TooltipContent-DjmPvoY1.js";import"./useBrowserPreferences-BRWA3ql6.js";import"./useId-C7FGvi6F.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-Cnhmkpi2.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-DOlpnL1Z.js";import"./useListNavigation-co-VDtgY.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BEuUD3cl.js";import"./ArrowDownIcon-aaVe9l73.js";import"./InputGroup-DjZBTNzm.js";import"./Label-YVNx8RhF.js";import"./SupportLabel-Pv_MGKDj.js";import"./WarningIcon-CzyDSudv.js";import"./SlotComponent-Bh_ead9Q.js";import"./mergeRefs-CiEqolQA.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
