import{j as e}from"./iframe-C14rEe6T.js";import{P as o}from"./PopupTip-Dnh1i9IQ.js";import{S as a}from"./Select-QV8CgDh8.js";/* empty css               */import{F as s}from"./Flex-DuuCp_do.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CEz7G2dw.js";import"./Icon-CusSDIhm.js";import"./TooltipTrigger-Caf7f8dW.js";import"./floating-ui.react-3hzDm4-U.js";import"./index-LLA-Sj3o.js";import"./index-5GJL9cFn.js";import"./useBrowserPreferences-BJYaDPCV.js";import"./useId-k4wiYRdm.js";import"./useAnimatedHeight-CU0J3Zz1.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-BEeFFqBd.js";import"./useListNavigation-CFTL8D1j.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Bcdvci8J.js";import"./ArrowDownIcon-CqU1fIpK.js";import"./InputGroup-byx3EXA2.js";import"./Label-BYHV_mne.js";import"./SupportLabel-BKp8Wxri.js";import"./WarningIcon-DdFEwpRk.js";import"./SlotComponent-D_CQXGfD.js";import"./mergeRefs-DctfpK3d.js";const G={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
