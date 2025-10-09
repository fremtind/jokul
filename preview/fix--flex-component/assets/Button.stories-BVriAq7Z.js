import{R as e}from"./index-siqcju79.js";import{B as c}from"./Button-B5NjJfvA.js";/* empty css               */import{F as l}from"./Flex-Sbj6idBa.js";import{P as u}from"./PlusIcon-B4FgZaw1.js";import{C as g}from"./CloseIcon-Bpeq_SK8.js";import{C as h}from"./CheckIcon-CgnQAFKR.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./SlotComponent-CWN6EcE2.js";import"./Icon-Crh-gXYv.js";const T={title:"Komponenter/Button",component:c,parameters:{layout:"centered",docs:{toc:!0}},args:{type:"button",children:"Knapp",variant:"primary",icon:void 0},argTypes:{iconLeft:{table:{disable:!0}},iconRight:{table:{disable:!0}},iconPosition:{control:{type:"radio"},options:["left","right"]},variant:{control:"select",options:["primary","secondary","ghost"]},ref:{table:{disable:!0}},as:{table:{disable:!0}}},tags:["autodocs","forms"]},r={name:"Primær knapp"},a={name:"Sekundær knapp",args:{variant:"secondary"}},t={name:"Ghost knapp",args:{variant:"ghost"}},o={name:"Knapp med ikon",args:{variant:"primary",icon:e.createElement(u,{bold:!1}),iconPosition:"right",children:"Knapp"}},s={name:"Knapp med loader",args:{variant:"primary",children:"Lagre",loader:{showLoader:!0,textDescription:"Lagrer..."}},render:n=>{const[m,p]=e.useState(!1),d=()=>{p(!0),setTimeout(()=>p(!1),2e3)};return e.createElement(c,{...n,onClick:d,loader:{showLoader:m,textDescription:"Lagrer..."}},n.children)}},i={name:"Knapper med kort tekst",argTypes:{as:{table:{disable:!0}},children:{table:{disable:!0}},icon:{control:"boolean"}},render:({icon:n})=>e.createElement(l,{gap:"sm"},e.createElement(c,{icon:n?e.createElement(g,null):void 0},"Nei"),e.createElement(c,{icon:n?e.createElement(h,null):void 0,variant:"primary"},"Ja"))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Primær knapp"
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Sekundær knapp",
  args: {
    variant: "secondary"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Ghost knapp",
  args: {
    variant: "ghost"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Knapp med ikon",
  args: {
    variant: "primary",
    icon: <PlusIcon bold={false} />,
    iconPosition: "right",
    children: "Knapp"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
  }) => <Flex gap="sm">
            <Button icon={icon ? <CloseIcon /> : undefined}>Nei</Button>
            <Button icon={icon ? <CheckIcon /> : undefined} variant="primary">
                Ja
            </Button>
        </Flex>
}`,...i.parameters?.docs?.source}}};const w=["PrimaryButton","SecondaryButton","GhostButton","ButtonWithIcon","ButtonWithLoader","ShortButtons"];export{o as ButtonWithIcon,s as ButtonWithLoader,t as GhostButton,r as PrimaryButton,a as SecondaryButton,i as ShortButtons,w as __namedExportsOrder,T as default};
