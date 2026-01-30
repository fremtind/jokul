import{j as e}from"./iframe-BrNtw50k.js";import{P as o}from"./PopupTip-BWLFPCA5.js";import{S as a}from"./Select-CqN_Qj8v.js";/* empty css               */import{F as s}from"./Flex-BAzxviLw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Jc71m5-a.js";import"./Icon-5AbHA9Gm.js";import"./TooltipTrigger-CbY2iT_7.js";import"./floating-ui.react-BeMPK7l-.js";import"./index-By3vEyP2.js";import"./index-UTLEf2mJ.js";import"./TooltipContent-Dz1swd04.js";import"./useBrowserPreferences-DDGP3hJh.js";import"./useId-BeQ_DQ32.js";import"./getThemeAndDensity-v_O0Epee.js";import"./useAnimatedHeight-VPXlVOLl.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-CwX6TBe2.js";import"./useListNavigation-DxRadxFV.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BhRQnoNZ.js";import"./ArrowDownIcon-Sjm-FwEq.js";import"./InputGroup-negs4E41.js";import"./Label-DFhw044x.js";import"./SupportLabel-KIAeb1Ts.js";import"./WarningIcon-BC1RgzsN.js";import"./SlotComponent-Bly1Gv5X.js";import"./mergeRefs-CtjasCnI.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
