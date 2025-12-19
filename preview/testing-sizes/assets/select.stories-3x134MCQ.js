import{j as e}from"./iframe-D9oBkFDu.js";import{P as o}from"./PopupTip-uvzIBDyB.js";import{S as a}from"./Select-CJ5NGLzL.js";/* empty css               */import{F as s}from"./Flex-BSP-HEL-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BhGNYskh.js";import"./Icon-DDKdvxRe.js";import"./TooltipTrigger-ClPDCEjy.js";import"./floating-ui.react-DvJTplsb.js";import"./index-CehPbylh.js";import"./index-C4suEgJ5.js";import"./useBrowserPreferences-BsW4RqqL.js";import"./useId-BgRHuBZ0.js";import"./useAnimatedHeight-acTAmu1s.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-D1hWIRBe.js";import"./useListNavigation-BOEO2p0g.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-IEkcJvrz.js";import"./ArrowDownIcon-DjePpHbb.js";import"./InputGroup-B9a1iAaF.js";import"./Label-BHbH4__I.js";import"./SupportLabel-dgUyORTL.js";import"./WarningIcon-Cm3wfqIK.js";import"./SlotComponent-DgZ07_Qg.js";import"./mergeRefs-CY3P0X8Y.js";const G={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
