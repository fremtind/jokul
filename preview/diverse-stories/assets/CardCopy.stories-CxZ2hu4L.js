import{R as e}from"./index-siqcju79.js";import{B as p}from"./Button-Bm5jRD6q.js";import{F as c}from"./Flex-DP-fj2ie.js";import{C as l}from"./CheckIcon-CJPuDLts.js";import{C as m}from"./CopyIcon-V1dXprj3.js";import{C as d,a as C,b as a}from"./types-CisFmCLD.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./tokens-CvksrKef.js";import"./SlotComponent-CWN6EcE2.js";import"./Icon-mINJCSxV.js";const _={title:"Komponenter/Card",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{clickable:!1},argTypes:{variant:{control:"select",options:C},padding:{control:"select",options:d}}},t={name:"Card med kopier-knapp",args:{padding:"m",variant:"low",children:"FremtindSD",clickable:!1},render:({...r})=>{const[i,n]=e.useState(!1);function s(o){navigator.clipboard.writeText(o)}return e.createElement(a,{...r},e.createElement(c,{alignItems:"center",gap:16},e.createElement("p",null,r.children),e.createElement(p,{variant:"ghost",icon:i?e.createElement(l,null):e.createElement(m,null),iconPosition:"right",onClick:o=>{s(r.children?.toString()||"FremtindSD"),n(!0),setTimeout(()=>{n(!1)},3e3)}})))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Card med kopier-knapp",
  args: {
    padding: "m",
    variant: "low",
    children: "FremtindSD",
    clickable: false
  },
  render: ({
    ...args
  }) => {
    const [hasCopied, setHasCopied] = React.useState(false);
    function copyToClipboard(text: string) {
      navigator.clipboard.writeText(text);
    }
    return <Card {...args}>
                <Flex alignItems="center" gap={16}>
                    <p>{args.children}</p>
                    <Button variant="ghost" icon={hasCopied ? <CheckIcon /> : <CopyIcon />} iconPosition="right" onClick={_ => {
          copyToClipboard(args.children?.toString() || "FremtindSD");
          setHasCopied(true);
          setTimeout(() => {
            setHasCopied(false);
          }, 3000);
        }} />
                </Flex>
            </Card>;
  }
}`,...t.parameters?.docs?.source}}};const A=["CopyCard"];export{t as CopyCard,A as __namedExportsOrder,_ as default};
