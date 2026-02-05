import{j as e}from"./iframe-CJC-gKdl.js";import{P as o}from"./PopupTip-C_eCxhkq.js";import{S as a}from"./Select-CJGkgD3a.js";/* empty css               */import{F as s}from"./Flex-ByUskIs9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CtDmH274.js";import"./Icon-BZpM8QvX.js";import"./TooltipTrigger-zUJ5nU-Q.js";import"./floating-ui.react-J4naseLC.js";import"./index-D65caPSj.js";import"./index--eJzuzuH.js";import"./TooltipContent-UZzJhEyH.js";import"./useBrowserPreferences-CJtNkP00.js";import"./useId-IgzJ_9Cy.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-BcqslypA.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-CPer9xMX.js";import"./useListNavigation-CRnAq_dw.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CKIxc_kg.js";import"./ArrowDownIcon-CgozGjVI.js";import"./InputGroup-K5TOCmJc.js";import"./Label-aGT48Cas.js";import"./SupportLabel-WNVZPiAE.js";import"./WarningIcon-CyIPJFEC.js";import"./SlotComponent-CK7FXX3B.js";import"./mergeRefs-BfEMGVl5.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
