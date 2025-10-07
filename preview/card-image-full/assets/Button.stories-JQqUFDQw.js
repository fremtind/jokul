import{R as r}from"./index-siqcju79.js";import{B as c}from"./Button-Dng0c-UK.js";/* empty css               */import{F as m}from"./Flex-B3l4XY1h.js";import{C as p}from"./CloseIcon-bvBUMA_V.js";import{C as u}from"./CheckIcon-CJPuDLts.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./tokens-CmXyXTIM.js";import"./SlotComponent-CWN6EcE2.js";import"./Icon-mINJCSxV.js";const F={title:"Komponenter/Button",component:c,parameters:{layout:"centered",docs:{toc:!0}},args:{type:"button",children:"Knapp",variant:"secondary",loader:{showLoader:!1,textDescription:"laster inn"}},tags:["autodocs","forms"]},e={},t={args:{variant:"primary"}},a={args:{variant:"secondary"}},n={args:{variant:"tertiary"}},o={args:{variant:"ghost"}},s={name:"Knapper med kort tekst",argTypes:{as:{table:{disable:!0}},children:{table:{disable:!0}},iconLeft:{table:{disable:!0}},iconRight:{table:{disable:!0}},icon:{control:"boolean"}},render:({icon:i})=>r.createElement(m,{gap:16},r.createElement(c,{icon:i?r.createElement(p,null):void 0},"Nei"),r.createElement(c,{icon:i?r.createElement(u,null):void 0,variant:"primary"},"Ja"))};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "tertiary"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Knapper med kort tekst",
  argTypes: {
    as: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    iconLeft: {
      table: {
        disable: true
      }
    },
    iconRight: {
      table: {
        disable: true
      }
    },
    icon: {
      control: "boolean"
    }
  },
  render: ({
    icon
  }) => <Flex gap={16}>
            <Button icon={icon ? <CloseIcon /> : undefined}>Nei</Button>
            <Button icon={icon ? <CheckIcon /> : undefined} variant="primary">
                Ja
            </Button>
        </Flex>
}`,...s.parameters?.docs?.source}}};const I=["ButtonStory","PrimaryButton","SecondaryButton","TertiaryButton","GhostButton","ShortButtons"];export{e as ButtonStory,o as GhostButton,t as PrimaryButton,a as SecondaryButton,s as ShortButtons,n as TertiaryButton,I as __namedExportsOrder,F as default};
