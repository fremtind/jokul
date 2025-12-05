import{j as e}from"./iframe-Bgbk8A8w.js";import{P as o}from"./PopupTip-DAxkl_pT.js";import{S as a}from"./Select-BA2ZnMJ5.js";/* empty css               */import{F as s}from"./Flex-CTeDgElK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BdKbqEMr.js";import"./Icon-DESNu5Cp.js";import"./TooltipTrigger-D0NRFcB5.js";import"./floating-ui.react-bZol8CgV.js";import"./index-VuPyW35P.js";import"./index-BqIt4wZd.js";import"./useBrowserPreferences-Dg2kYqDQ.js";import"./useId-BepAFXbc.js";import"./useAnimatedHeight-BqxoK_q1.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-BC70uycc.js";import"./useListNavigation-fLrqmSLu.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-C3DJpyve.js";import"./ArrowDownIcon-BSczm2ks.js";import"./InputGroup-BmIcIgxw.js";import"./Label-Cs-HSq_H.js";import"./SupportLabel-BDO1ZkW6.js";import"./WarningIcon-BXDRy6cv.js";import"./SlotComponent-Dk98sxiQ.js";import"./mergeRefs-BwahFmA8.js";const G={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
