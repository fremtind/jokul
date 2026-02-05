import{j as e}from"./iframe-BeW8231r.js";import{P as o}from"./PopupTip-D1uATAmJ.js";import{S as a}from"./Select-DRFC0Kua.js";/* empty css               */import{F as s}from"./Flex-CD48eqwi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Ciy05p2g.js";import"./Icon-C2YR2oDk.js";import"./TooltipTrigger-DBreVulo.js";import"./floating-ui.react-3XB4crQl.js";import"./index-BfQHnZ7l.js";import"./index-BN073Zom.js";import"./TooltipContent-BJIP85Y4.js";import"./useBrowserPreferences-CB5LaC5l.js";import"./useId-CD2qvuFc.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-D7FSCwoO.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-1e7mNHur.js";import"./useListNavigation-WKQW53X2.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-D7BVXUAi.js";import"./ArrowDownIcon-B6RRcPs9.js";import"./InputGroup-DVXEd7Bi.js";import"./Label-CR2FVV2F.js";import"./SupportLabel-vE8N1Zgi.js";import"./WarningIcon-BjIpl0Xz.js";import"./SlotComponent-CLc-BvzD.js";import"./mergeRefs-CqsBF_-Y.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
