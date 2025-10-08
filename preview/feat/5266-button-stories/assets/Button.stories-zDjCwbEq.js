import{R as e}from"./index-siqcju79.js";import{B as p}from"./Button-Dng0c-UK.js";/* empty css               */import{F as u}from"./Flex-B3l4XY1h.js";import{P as g}from"./PlusIcon-DK-Iu2WO.js";import{C as h}from"./CloseIcon-bvBUMA_V.js";import{C as y}from"./CheckIcon-CJPuDLts.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./tokens-CmXyXTIM.js";import"./SlotComponent-CWN6EcE2.js";import"./Icon-mINJCSxV.js";const D={title:"Komponenter/Button",component:p,parameters:{layout:"centered",docs:{toc:!0}},args:{type:"button",children:"Knapp",variant:"primary",icon:void 0},argTypes:{iconLeft:{table:{disable:!0}},iconRight:{table:{disable:!0}},iconPosition:{control:{type:"radio"},options:["left","right"]},variant:{control:"select",options:["primary","secondary","tertiary","ghost"]},ref:{table:{disable:!0}},as:{table:{disable:!0}}},tags:["autodocs","forms"]},n={name:"Primær knapp"},a={name:"Sekundær knapp",args:{variant:"secondary"}},t={name:"Tertiær knapp",args:{variant:"tertiary"}},o={name:"Ghost knapp",args:{variant:"ghost"}},s={name:"Knapp med ikon",args:{variant:"primary",icon:e.createElement(g,{bold:!1}),iconPosition:"right",children:"Knapp"}},i={name:"Knapp med loader",args:{variant:"primary",children:"Lagre",loader:{showLoader:!0,textDescription:"Lagrer..."}},render:r=>{const[d,m]=e.useState(!1),l=()=>{m(!0),setTimeout(()=>m(!1),2e3)};return e.createElement(p,{...r,onClick:l,loader:{showLoader:d,textDescription:"Lagrer..."}},r.children)}},c={name:"Knapper med kort tekst",argTypes:{as:{table:{disable:!0}},children:{table:{disable:!0}},icon:{control:"boolean"}},render:({icon:r})=>e.createElement(u,{gap:16},e.createElement(p,{icon:r?e.createElement(h,null):void 0},"Nei"),e.createElement(p,{icon:r?e.createElement(y,null):void 0,variant:"primary"},"Ja"))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Primær knapp"
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Sekundær knapp",
  args: {
    variant: "secondary"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Tertiær knapp",
  args: {
    variant: "tertiary"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Ghost knapp",
  args: {
    variant: "ghost"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Knapp med ikon",
  args: {
    variant: "primary",
    icon: <PlusIcon bold={false} />,
    iconPosition: "right",
    children: "Knapp"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Knapp med loader",
  args: {
    variant: "primary",
    children: "Lagre",
    loader: {
      showLoader: true,
      textDescription: "Lagrer..."
    }
  },
  render: args => {
    const [isLoading, setIsLoading] = React.useState(false);
    const handleSave = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };
    return <Button {...args} onClick={handleSave} loader={{
      showLoader: isLoading,
      textDescription: "Lagrer..."
    }}>
                {args.children}
            </Button>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const F=["PrimaryButton","SecondaryButton","TertiaryButton","GhostButton","ButtonWithIcon","ButtonWithLoader","ShortButtons"];export{s as ButtonWithIcon,i as ButtonWithLoader,o as GhostButton,n as PrimaryButton,a as SecondaryButton,c as ShortButtons,t as TertiaryButton,F as __namedExportsOrder,D as default};
