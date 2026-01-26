import{j as e}from"./iframe-Dt52Y0Re.js";import{P as o}from"./PopupTip-BLWVYWgd.js";import{S as a}from"./Select-DpE6IcrE.js";/* empty css               */import{F as s}from"./Flex-CD0r2zJL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Cv2WHxzq.js";import"./Icon-B0mT6NzT.js";import"./TooltipTrigger-04x6QAcS.js";import"./floating-ui.react-Dz2-rV8Q.js";import"./index-7OYnhAk7.js";import"./index-BYrmG1HX.js";import"./TooltipContent-B_y-U3rd.js";import"./useBrowserPreferences-FiPOl0yu.js";import"./useId-C6VoJPiw.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-Dt0Pk_WV.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-q_e6wXYe.js";import"./useListNavigation-CJBK_mIL.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-HC-1STOt.js";import"./ArrowDownIcon-DYi87ebG.js";import"./InputGroup-BQZJO3_X.js";import"./Label-D4ZONwhR.js";import"./SupportLabel-SLWEo-yk.js";import"./WarningIcon-C_SZlROY.js";import"./SlotComponent-0ibP19R5.js";import"./mergeRefs-CNFccflk.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
