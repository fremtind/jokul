import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{R as l}from"./index-siqcju79.js";import{B as c}from"./Button-ezu_9wT-.js";/* empty css               */import{F as u}from"./Flex-BO3EKfKB.js";import{P as g}from"./PlusIcon-COYQzd5X.js";import{C as h}from"./CloseIcon-BPFAU_ZX.js";import{C as f}from"./CheckIcon-C9zGFCoK.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";import"./tokens-CmXyXTIM.js";import"./SlotComponent-DjLpilNT.js";import"./mergeRefs-CYSLoF3z.js";import"./Icon-CqyKskc7.js";const F={title:"Komponenter/Button",component:c,parameters:{layout:"centered",docs:{toc:!0}},args:{type:"button",children:"Knapp",variant:"primary",icon:void 0,loader:{showLoader:!1,textDescription:"Laster inn avtaler"}},argTypes:{iconLeft:{table:{disable:!0}},iconRight:{table:{disable:!0}},iconPosition:{control:{type:"radio"},options:["left","right"]},variant:{control:"select",options:["primary","secondary","ghost"]},ref:{table:{disable:!0}},as:{table:{disable:!0}}},tags:["autodocs","forms"]},n={name:"Primær knapp"},a={name:"Sekundær knapp",args:{variant:"secondary"}},o={name:"Ghost knapp",args:{variant:"ghost"}},t={name:"Knapp med ikon",args:{variant:"primary",icon:e.jsx(g,{bold:!1}),iconPosition:"right",children:"Knapp"}},s={name:"Knapp med loader",args:{variant:"primary",children:"Klikk for å vise loader",loader:{showLoader:!0,textDescription:"Lagrer..."}},render:r=>{const[d,p]=l.useState(!1),m=()=>{p(!0),setTimeout(()=>p(!1),2e3)};return e.jsx(c,{...r,onClick:m,loader:{showLoader:d,textDescription:"Lagrer..."},children:r.children})}},i={name:"Knapper med kort tekst",argTypes:{as:{table:{disable:!0}},children:{table:{disable:!0}},icon:{control:"boolean"}},render:({icon:r})=>e.jsxs(u,{gap:16,children:[e.jsx(c,{icon:r?e.jsx(h,{}):void 0,children:"Nei"}),e.jsx(c,{icon:r?e.jsx(f,{}):void 0,variant:"primary",children:"Ja"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Primær knapp"
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Sekundær knapp",
  args: {
    variant: "secondary"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Ghost knapp",
  args: {
    variant: "ghost"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Knapp med ikon",
  args: {
    variant: "primary",
    icon: <PlusIcon bold={false} />,
    iconPosition: "right",
    children: "Knapp"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  }) => <Flex gap={16}>
            <Button icon={icon ? <CloseIcon /> : undefined}>Nei</Button>
            <Button icon={icon ? <CheckIcon /> : undefined} variant="primary">
                Ja
            </Button>
        </Flex>
}`,...i.parameters?.docs?.source}}};const G=["PrimaryButton","SecondaryButton","GhostButton","ButtonWithIcon","ButtonWithLoader","ShortButtons"];export{t as ButtonWithIcon,s as ButtonWithLoader,o as GhostButton,n as PrimaryButton,a as SecondaryButton,i as ShortButtons,G as __namedExportsOrder,F as default};
