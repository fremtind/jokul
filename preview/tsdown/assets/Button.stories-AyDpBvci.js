import{j as n,R as l}from"./iframe-DVuwCucA.js";import{B as c}from"./Button-DB5r_dXF.js";/* empty css               */import{F as u}from"./Flex-BxxaizJs.js";import{P as g}from"./PlusIcon-CJxuz1H8.js";import{C as h}from"./CloseIcon-CHmUl82e.js";import{C as k}from"./CheckIcon-uQ_O9BYJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-B-gSGwjc.js";import"./Loader-C4LBy92m.js";import"./useDelayedRender-BlEZZ8Ry.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-CS1dbB1w.js";import"./mergeRefs-CWvskeAi.js";import"./Icon-BvCYJseA.js";const F={title:"Komponenter/Button",component:c,args:{type:"button",children:"Knapp",variant:"primary",icon:void 0,loader:{showLoader:!1,textDescription:"Laster inn avtaler"},iconPosition:"left"},argTypes:{iconPosition:{control:{type:"radio"},options:["left","right"]},variant:{control:"select",options:["primary","secondary","ghost"]}}},e={name:"Primær knapp"},o={name:"Sekundær knapp",args:{variant:"secondary"}},a={name:"Ghost knapp",args:{variant:"ghost"}},t={name:"Knapp med ikon",args:{variant:"primary",icon:n.jsx(g,{bold:!1}),iconPosition:"right",children:"Knapp"}},s={name:"Knapp med loader",args:{variant:"primary",children:"Klikk for å vise loader",loader:{showLoader:!0,textDescription:"Lagrer..."}},render:r=>{const[d,p]=l.useState(!1),m=()=>{p(!0),setTimeout(()=>p(!1),2e3)};return n.jsx(c,{...r,onClick:m,loader:{showLoader:d,textDescription:"Lagrer..."},children:r.children})}},i={name:"Knapper med kort tekst",argTypes:{as:{table:{disable:!0}},children:{table:{disable:!0}},icon:{control:"boolean"}},render:({icon:r})=>n.jsxs(u,{gap:"s",children:[n.jsx(c,{icon:r?n.jsx(h,{}):void 0,children:"Nei"}),n.jsx(c,{icon:r?n.jsx(k,{}):void 0,variant:"primary",children:"Ja"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const G=["PrimaryButton","SecondaryButton","GhostButton","ButtonWithIcon","ButtonWithLoader","ShortButtons"];export{t as ButtonWithIcon,s as ButtonWithLoader,a as GhostButton,e as PrimaryButton,o as SecondaryButton,i as ShortButtons,G as __namedExportsOrder,F as default};
