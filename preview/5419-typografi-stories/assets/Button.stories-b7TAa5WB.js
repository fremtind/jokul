import{j as n}from"./jsx-runtime-DqZpzl9T.js";import{R as g}from"./index-siqcju79.js";import{B as p}from"./Button-fpmiG8ZH.js";/* empty css               */import{F as h}from"./Flex-4pIEM4q7.js";import{P as m}from"./PlusIcon-DEnm6k6m.js";import{C as k}from"./CloseIcon-CGR_BR3u.js";import{C as f}from"./CheckIcon-BRyROgH7.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-DNbIHoXc.js";import"./mergeRefs-DouPjScu.js";import"./Icon-DnRkF4CO.js";const F={title:"Komponenter/Button",component:p,parameters:{layout:"centered",docs:{toc:!0}},args:{type:"button",children:"Knapp",variant:"primary",icon:void 0,loader:{showLoader:!1,textDescription:"Laster inn avtaler"}},argTypes:{iconLeft:{table:{disable:!0}},iconRight:{table:{disable:!0}},iconPosition:{control:{type:"radio"},options:["left","right"]},variant:{control:"select",options:["primary","secondary","ghost"]},ref:{table:{disable:!0}},as:{table:{disable:!0}}},tags:["autodocs","forms"]},e={name:"Primær knapp"},o={name:"Sekundær knapp",args:{variant:"secondary"}},a={name:"Ghost knapp",args:{variant:"ghost"}},t={name:"Knapp med ikon",args:{variant:"primary",icon:n.jsx(m,{bold:!1}),iconPosition:"right",children:"Knapp"}},s={name:"Knapp med kun ikon",args:{variant:"primary",icon:n.jsx(m,{bold:!1}),iconPosition:"right",children:null}},i={name:"Knapp med loader",args:{variant:"primary",children:"Klikk for å vise loader",loader:{showLoader:!0,textDescription:"Lagrer..."}},render:r=>{const[l,d]=g.useState(!1),u=()=>{d(!0),setTimeout(()=>d(!1),2e3)};return n.jsx(p,{...r,onClick:u,loader:{showLoader:l,textDescription:"Lagrer..."},children:r.children})}},c={name:"Knapper med kort tekst",argTypes:{as:{table:{disable:!0}},children:{table:{disable:!0}},icon:{control:"boolean"}},render:({icon:r})=>n.jsxs(h,{gap:"s",children:[n.jsx(p,{icon:r?n.jsx(k,{}):void 0,children:"Nei"}),n.jsx(p,{icon:r?n.jsx(f,{}):void 0,variant:"primary",children:"Ja"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Primær knapp"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Sekundær knapp",
  args: {
    variant: "secondary"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Ghost knapp",
  args: {
    variant: "ghost"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Knapp med ikon",
  args: {
    variant: "primary",
    icon: <PlusIcon bold={false} />,
    iconPosition: "right",
    children: "Knapp"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Knapp med kun ikon",
  args: {
    variant: "primary",
    icon: <PlusIcon bold={false} />,
    iconPosition: "right",
    children: null
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Knapp med loader",
  args: {
    variant: "primary",
    children: "Klikk for å vise loader",
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
  }) => <Flex gap="s">
            <Button icon={icon ? <CloseIcon /> : undefined}>Nei</Button>
            <Button icon={icon ? <CheckIcon /> : undefined} variant="primary">
                Ja
            </Button>
        </Flex>
}`,...c.parameters?.docs?.source}}};const G=["PrimaryButton","SecondaryButton","GhostButton","ButtonWithIcon","ButtonWithIconOnly","ButtonWithLoader","ShortButtons"];export{t as ButtonWithIcon,s as ButtonWithIconOnly,i as ButtonWithLoader,a as GhostButton,e as PrimaryButton,o as SecondaryButton,c as ShortButtons,G as __namedExportsOrder,F as default};
