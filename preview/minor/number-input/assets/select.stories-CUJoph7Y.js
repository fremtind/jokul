import{j as e}from"./iframe-B8JwKusI.js";import{P as o}from"./PopupTip-DkOJUxfR.js";import{S as a}from"./Select-ClPql9fv.js";/* empty css               */import{F as s}from"./Flex-DYhN2TYq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-N8cLUHIN.js";import"./Icon-DUw4J85W.js";import"./TooltipTrigger-BdR5p4nK.js";import"./floating-ui.react-DAp3NUGr.js";import"./index-eYyxBxq5.js";import"./index-CxI9h1DQ.js";import"./TooltipContent-BJgDBpOd.js";import"./useBrowserPreferences-Ce0gmW7C.js";import"./useId-CyQAT9Yl.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-CIRQ6gxg.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-GZKh6gpC.js";import"./useListNavigation-B9J21el5.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-vxIsTUIZ.js";import"./ArrowDownIcon-Bd1-eR79.js";import"./InputGroup-D2hY0-cV.js";import"./Label-Bc-SSxvS.js";import"./SupportLabel-C7IxSZxe.js";import"./WarningIcon-BmvBzLRj.js";import"./SlotComponent-OmKhLmVt.js";import"./mergeRefs-BgiaTUx1.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
