import{j as n,R as g}from"./iframe-BdcnJvFl.js";import{B as r}from"./Button-CPBu0pSY.js";/* empty css               */import{F as m}from"./Flex-CQUWBvvq.js";import{P as x}from"./PlusIcon-DrIzoT75.js";import{C as p}from"./ChevronDownIcon-BBnJ3SaJ.js";import{C as B}from"./CloseIcon-yhu8EtbT.js";import{C as v}from"./CheckIcon-DULvgkrM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-Bu3jrSWf.js";import"./Loader-DkYOQJ92.js";import"./types-BlFGa32c.js";import"./useDelayedRender-UJCyr5Yt.js";import"./SlotComponent-onVuAPvH.js";import"./mergeRefs-_7lZvp9j.js";import"./Icon-tjEiNOfZ.js";const R={title:"Komponenter/Button",component:r,args:{type:"button",children:"Knapp",variant:"primary",icon:void 0,loader:{showLoader:!1,textDescription:"Laster inn avtaler"},hidden:!1,disabled:!1,iconPosition:"left"},argTypes:{iconPosition:{control:{type:"radio"},options:["left","right"]},variant:{control:"select",options:["primary","secondary","ghost"]}}},o={name:"Primær knapp"},a={name:"Sekundær knapp",args:{variant:"secondary"}},t={name:"Ghost knapp",args:{variant:"ghost"}},s={name:"Deaktiverte knapper",args:{disabled:!0,variant:"secondary",children:"Button"},render:e=>n.jsxs(m,{gap:"xl",children:[n.jsx(r,{...e}),n.jsx(r,{...e,icon:n.jsx(p,{}),iconPosition:"left"}),n.jsx(r,{...e,icon:n.jsx(p,{}),iconPosition:"right"}),n.jsx(r,{...e,icon:n.jsx(p,{}),"aria-label":"Vis mer",children:null})]})},i={name:"Knapp med ikon",args:{variant:"primary",icon:n.jsx(x,{bold:!1}),iconPosition:"right",children:"Knapp"}},c={name:"Knapp med loader",args:{variant:"primary",children:"Klikk for å vise loader",loader:{showLoader:!0,textDescription:"Lagrer..."}},render:e=>{const[u,l]=g.useState(!1),h=()=>{l(!0),setTimeout(()=>l(!1),2e3)};return n.jsx(r,{...e,onClick:h,loader:{showLoader:u,textDescription:"Lagrer..."},children:e.children})}},d={name:"Knapper med kort tekst",argTypes:{as:{table:{disable:!0}},children:{table:{disable:!0}},icon:{control:"boolean"}},render:({icon:e})=>n.jsxs(m,{gap:"s",children:[n.jsx(r,{icon:e?n.jsx(B,{}):void 0,children:"Nei"}),n.jsx(r,{icon:e?n.jsx(v,{}):void 0,variant:"primary",children:"Ja"})]})},W=["PrimaryButton","SecondaryButton","GhostButton","DisabledButtons","ButtonWithIcon","ButtonWithLoader","ShortButtons"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Primær knapp"
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Sekundær knapp",
  args: {
    variant: "secondary"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Ghost knapp",
  args: {
    variant: "ghost"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Deaktiverte knapper",
  args: {
    disabled: true,
    variant: "secondary",
    children: "Button"
  },
  render: args => <Flex gap="xl">
            <Button {...args} />
            <Button {...args} icon={<ChevronDownIcon />} iconPosition="left" />
            <Button {...args} icon={<ChevronDownIcon />} iconPosition="right" />
            <Button {...args} icon={<ChevronDownIcon />} aria-label="Vis mer">
                {null}
            </Button>
        </Flex>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Knapp med ikon",
  args: {
    variant: "primary",
    icon: <PlusIcon bold={false} />,
    iconPosition: "right",
    children: "Knapp"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};export{i as ButtonWithIcon,c as ButtonWithLoader,s as DisabledButtons,t as GhostButton,o as PrimaryButton,a as SecondaryButton,d as ShortButtons,W as __namedExportsOrder,R as default};
