import{j as e}from"./iframe-Bd9jJ03_.js";import{P as o}from"./PopupTip-Djm9JGko.js";import{S as a}from"./Select-BDsNKUAL.js";/* empty css               */import{F as s}from"./Flex-BZnJil1l.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CU2wqpnp.js";import"./Icon-BMPLUX3C.js";import"./TooltipTrigger-BWxpW89L.js";import"./floating-ui.react-DPp1BBNW.js";import"./index-De4qVEY0.js";import"./index-DH6hbZKE.js";import"./TooltipContent-D1IcjsCq.js";import"./useBrowserPreferences-9o2DUpIl.js";import"./useId-DkCvPqzq.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-6tC2SFHr.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-Btgy-jgg.js";import"./useListNavigation-ukV7HNN2.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CPi7U7o_.js";import"./ArrowDownIcon-2zw40Vms.js";import"./InputGroup-D7pAmOAh.js";import"./Label-DnG3AGPF.js";import"./SupportLabel-BO4d3sxD.js";import"./WarningIcon-1B-NxNrn.js";import"./SlotComponent-COZhGrMr.js";import"./mergeRefs-CaFnkYei.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
