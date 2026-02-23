import{j as e}from"./iframe-CmSEJ0l9.js";import{P as o}from"./PopupTip-BBI5iqP-.js";import{S as a}from"./Select-AaNeEUqQ.js";/* empty css               */import{F as s}from"./Flex-kqMyoOtC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-khIF6uNT.js";import"./Icon-BVqeQxsf.js";import"./TooltipTrigger-B4eaTt9e.js";import"./floating-ui.react-BxffW-7g.js";import"./index-DtLdkJZ2.js";import"./index-COmcjl4r.js";import"./TooltipContent-DvAfdauY.js";import"./useBrowserPreferences-stsVXoP3.js";import"./useId-B_mxl2xK.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-CsaaipMi.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-DuQpU8FN.js";import"./useListNavigation-3oidDyNk.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BY1Hiz2a.js";import"./ArrowDownIcon-DgSEvY8F.js";import"./InputGroup-DiOaUY_n.js";import"./Label-BYXiWHX8.js";import"./SupportLabel-DEaboEfo.js";import"./WarningIcon-BPILy-xc.js";import"./SlotComponent-Lj5qO5Ig.js";import"./mergeRefs-CSYGIqMT.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
