import{R as e,r as d}from"./index-siqcju79.js";import{H as t}from"./_index-Bl3TJPI3.js";/* empty css               *//* empty css               *//* empty css               */import{F as s}from"./Flex-DP-fj2ie.js";import{b as c,D as u,a as g}from"./DescriptionList-BkNFVB_x.js";import{L as h}from"./Link-Dwdm3rDB.js";import{B as p}from"./Button-Bm5jRD6q.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./Icon-mINJCSxV.js";import"./tokens-CvksrKef.js";import"./SlotComponent-CWN6EcE2.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";const N={title:"Komponenter/Help/Eksempler",args:{position:"top"},component:t},r={name:"Løpende tekst",args:{position:"bottom",showButtonText:!0,buttonText:"Pris på tjenesten",children:"Reise SMS er en gratistjeneste levert av telefonoperatøren din."},render:n=>e.createElement(s,{gap:24,direction:"column",style:{maxWidth:"40ch"}},e.createElement("h1",{className:"jkl-heading-1"},"Reise SMS"),e.createElement("p",null,"Når du kommer til et nytt land, vil du få en SMS med påminnelse om hva du skal gjøre når noe skjer, og hvor du kan få hjelp. Døgnet rundt i hele verden."),e.createElement(s,{wrap:!0},e.createElement(t,{...n}),e.createElement(t,{...n,buttonText:"Land"})))},i={name:"I Description List",args:{position:"right",showButtonText:!1,buttonText:"Hva er unntakene?",iconPosition:"right",children:e.createElement("p",null,"Reiseforsikringen gjelder i hele verden, unntatt i land som"," ",e.createElement(h,{href:"https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/reiserad_land/id2589040/"},"Utenriksdepartementet fraråder å reise til"),".")},render:n=>e.createElement(c,null,e.createElement(u,null,"Område"),e.createElement(g,null,"Hele verden",e.createElement(t,{...n})))},o={name:"Med handlinger",args:{position:"bottom",showButtonText:!1,buttonText:"Hva er unntakene?",children:""},render:n=>{const[a,l]=d.useState(1);return e.createElement(e.Fragment,null,e.createElement("h1",{className:"jkl-heading-2"},"Kundeforhold"),e.createElement("p",null,"NICE, PARIS, PROLIFE",e.createElement(t,{...n},e.createElement(s,{gap:12,direction:"column",id:"tip-1"},e.createElement("div",null,e.createElement("h2",{className:"jkl-heading-4"},"Tips #",a),e.createElement("p",null,"Eksempeltekst")),e.createElement("footer",{"data-layout-density":"compact",style:{display:"grid",gridTemplateColumns:"repeat(2, auto)",gap:"24px",justifyContent:"space-between"}},e.createElement(p,{style:{gridColumn:1},onClick:m=>l(a-1)},"Forrige"),e.createElement(p,{style:{gridColumn:2},onClick:m=>l(a+1)},"Neste"))))))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Løpende tekst",
  args: {
    position: "bottom",
    showButtonText: true,
    buttonText: "Pris på tjenesten",
    children: "Reise SMS er en gratistjeneste levert av telefonoperatøren din."
  },
  render: args => <Flex gap={24} direction="column" style={{
    maxWidth: "40ch"
  }}>
            <h1 className="jkl-heading-1">Reise SMS</h1>
            <p>
                Når du kommer til et nytt land, vil du få en SMS med påminnelse
                om hva du skal gjøre når noe skjer, og hvor du kan få hjelp.
                Døgnet rundt i hele verden.
            </p>
            <Flex wrap>
                <Help {...args} />
                <Help {...args} buttonText="Land" />
            </Flex>
        </Flex>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "I Description List",
  args: {
    position: "right",
    showButtonText: false,
    buttonText: "Hva er unntakene?",
    iconPosition: "right",
    children: <p>
                Reiseforsikringen gjelder i hele verden, unntatt i land som{" "}
                <Link href="https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/reiserad_land/id2589040/">
                    Utenriksdepartementet fraråder å reise til
                </Link>
                .
            </p>
  },
  render: args => <DescriptionList>
            <DescriptionTerm>Område</DescriptionTerm>
            <DescriptionDetail>
                Hele verden
                <Help {...args} />
            </DescriptionDetail>
        </DescriptionList>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Med handlinger",
  args: {
    position: "bottom",
    showButtonText: false,
    buttonText: "Hva er unntakene?",
    children: ""
  },
  render: args => {
    const [tip, setTip] = useState(1);
    return <>
                <h1 className="jkl-heading-2">Kundeforhold</h1>
                <p>
                    NICE, PARIS, PROLIFE
                    <Help {...args}>
                        <Flex gap={12} direction="column" id="tip-1">
                            <div>
                                <h2 className="jkl-heading-4">Tips #{tip}</h2>
                                <p>Eksempeltekst</p>
                            </div>

                            <footer data-layout-density="compact" style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, auto)",
              gap: "24px",
              justifyContent: "space-between"
            }}>
                                <Button style={{
                gridColumn: 1
              }} onClick={_ => setTip(tip - 1)}>
                                    Forrige
                                </Button>

                                <Button style={{
                gridColumn: 2
              }} onClick={_ => setTip(tip + 1)}>
                                    Neste
                                </Button>
                            </footer>
                        </Flex>
                    </Help>
                </p>
            </>;
  }
}`,...o.parameters?.docs?.source}}};const R=["Help1","Help2","Help3"];export{r as Help1,i as Help2,o as Help3,R as __namedExportsOrder,N as default};
