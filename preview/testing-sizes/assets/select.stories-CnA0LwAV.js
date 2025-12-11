import{j as e}from"./iframe-Bv7LMU6l.js";import{P as o}from"./PopupTip-B50YuA5R.js";import{S as a}from"./Select-CArYNITO.js";/* empty css               */import{F as s}from"./Flex-DEGsCmqw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DkPSjwdV.js";import"./Icon-B48KsVuT.js";import"./TooltipTrigger-HU5_NhzJ.js";import"./floating-ui.react-BkRzZOi8.js";import"./index-Z66sHRoJ.js";import"./index-xIKVrMOc.js";import"./useBrowserPreferences-DkPrRMgJ.js";import"./useId-dGUThTlM.js";import"./useAnimatedHeight-Bi8ddasT.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-IE3jCIN5.js";import"./useListNavigation-BCeYyLXB.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-XidSVZiW.js";import"./ArrowDownIcon-HH_bjTf_.js";import"./InputGroup-CplB2iNL.js";import"./Label-CUsTONqQ.js";import"./SupportLabel-D2fcnhBk.js";import"./WarningIcon-8NJ-Eevq.js";import"./SlotComponent-C4FUfkUa.js";import"./mergeRefs-NE9DwXo1.js";const G={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
