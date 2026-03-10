import{j as e}from"./iframe-BJRY17Xz.js";import{P as o}from"./PopupTip-IeU2Sktr.js";import{S as a}from"./Select-B4xaGrAN.js";/* empty css               */import{F as s}from"./Flex-BpNOE7CD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-B6vCL_vw.js";import"./Icon-C7i3mUoD.js";import"./TooltipTrigger-Cee6tCR1.js";import"./floating-ui.react-F_QZq-zG.js";import"./index-mz9fMd_0.js";import"./index-Ddj4HyRf.js";import"./TooltipContent-BQak-EwE.js";import"./useBrowserPreferences-CGbWjUwk.js";import"./useId-BC8bvml_.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-Dj3Mi7Bw.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-BdoJAUra.js";import"./useListNavigation-DQiSUblJ.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BrfURqOQ.js";import"./ArrowDownIcon-C1k-d_21.js";import"./InputGroup-DyJEr3ML.js";import"./Label-B9CivQ1K.js";import"./SupportLabel-CaG3sFnq.js";import"./WarningIcon-CKmcMyoV.js";import"./SlotComponent-CiKZ9SOd.js";import"./mergeRefs-D_XfpzO3.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
