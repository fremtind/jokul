import{j as n,R as l}from"./iframe-D0jGEvlt.js";import{B as c}from"./Button-DFpKOUrv.js";/* empty css               */import{F as u}from"./Flex-CmKK2ZAj.js";import{P as h}from"./PlusIcon-BTw9kzBN.js";import{C as g}from"./CloseIcon-CdsjrUDC.js";import{C as k}from"./CheckIcon-C4o9KafA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-BxIkCuXX.js";import"./Loader-Au8-qRJU.js";import"./useDelayedRender-BLeqD9XR.js";import"./SlotComponent-1EZLqoFD.js";import"./mergeRefs-D8AuGf56.js";import"./Icon-BhmjRupB.js";const T={title:"Komponenter/Button",component:c,args:{type:"button",children:"Knapp",variant:"primary",icon:void 0,loader:{showLoader:!1,textDescription:"Laster inn avtaler"},hidden:!1,iconPosition:"left"},argTypes:{iconPosition:{control:{type:"radio"},options:["left","right"]},variant:{control:"select",options:["primary","secondary","ghost"]}}},e={name:"Primær knapp"},o={name:"Sekundær knapp",args:{variant:"secondary"}},a={name:"Ghost knapp",args:{variant:"ghost"}},t={name:"Knapp med ikon",args:{variant:"primary",icon:n.jsx(h,{bold:!1}),iconPosition:"right",children:"Knapp"}},s={name:"Knapp med loader",args:{variant:"primary",children:"Klikk for å vise loader",loader:{showLoader:!0,textDescription:"Lagrer..."}},render:r=>{const[d,p]=l.useState(!1),m=()=>{p(!0),setTimeout(()=>p(!1),2e3)};return n.jsx(c,{...r,onClick:m,loader:{showLoader:d,textDescription:"Lagrer..."},children:r.children})}},i={name:"Knapper med kort tekst",argTypes:{as:{table:{disable:!0}},children:{table:{disable:!0}},icon:{control:"boolean"}},render:({icon:r})=>n.jsxs(u,{gap:"s",children:[n.jsx(c,{icon:r?n.jsx(g,{}):void 0,children:"Nei"}),n.jsx(c,{icon:r?n.jsx(k,{}):void 0,variant:"primary",children:"Ja"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
  }) => <Flex gap="s">
            <Button icon={icon ? <CloseIcon /> : undefined}>Nei</Button>
            <Button icon={icon ? <CheckIcon /> : undefined} variant="primary">
                Ja
            </Button>
        </Flex>
}`,...i.parameters?.docs?.source}}};const F=["PrimaryButton","SecondaryButton","GhostButton","ButtonWithIcon","ButtonWithLoader","ShortButtons"];export{t as ButtonWithIcon,s as ButtonWithLoader,a as GhostButton,e as PrimaryButton,o as SecondaryButton,i as ShortButtons,F as __namedExportsOrder,T as default};
