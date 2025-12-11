import{R as e}from"./index-siqcju79.js";import{B as o}from"./Help-DxJDcIt9.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import{F as i}from"./Flex-CB0XPCq0.js";import{b as a,D as s,a as l}from"./DescriptionList-BkNFVB_x.js";import{L as m}from"./Link-Dwdm3rDB.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./Icon-mINJCSxV.js";import"./Button-Dng0c-UK.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./tokens-CmXyXTIM.js";import"./SlotComponent-CWN6EcE2.js";const L={title:"Komponenter/Help/Eksempler",args:{position:"top"},component:o},t={name:"Knyttet til tekst",args:{position:"bottom",showButtonText:!1,buttonText:"Pris på tjenesten",children:"Reise SMS er en gratistjeneste levert av telefonoperatøren din."},render:r=>e.createElement(i,{gap:24,direction:"column",style:{maxWidth:"40ch"}},e.createElement(i,{gap:12,alignItems:"center"},e.createElement("h1",{className:"jkl-heading-1"},"Reise SMS"),e.createElement(o,{...r})),e.createElement("p",null,"Når du kommer til et nytt land, vil du få en SMS med påminnelse om hva du skal gjøre når noe skjer, og hvor du kan få hjelp. Døgnet rundt i hele verden."))},n={name:"I Description List",args:{position:"right",showButtonText:!1,buttonText:"Hva er unntakene?",iconPosition:"right",children:e.createElement("p",null,"Reiseforsikringen gjelder i hele verden, unntatt i land som"," ",e.createElement(m,{href:"https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/reiserad_land/id2589040/"},"Utenriksdepartementet fraråder å reise til"),".")},render:r=>e.createElement(a,null,e.createElement(s,null,"Område"),e.createElement(l,{"data-layout-density":"compact"},e.createElement(i,{gap:4},e.createElement("p",null,"Hele verden"),e.createElement(o,{...r}))))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Knyttet til tekst",
  args: {
    position: "bottom",
    showButtonText: false,
    buttonText: "Pris på tjenesten",
    children: "Reise SMS er en gratistjeneste levert av telefonoperatøren din."
  },
  render: args => <Flex gap={24} direction="column" style={{
    maxWidth: "40ch"
  }}>
            <Flex gap={12} alignItems="center">
                <h1 className="jkl-heading-1">Reise SMS</h1>
                <Help {...args} />
            </Flex>
            <p>
                Når du kommer til et nytt land, vil du få en SMS med påminnelse
                om hva du skal gjøre når noe skjer, og hvor du kan få hjelp.
                Døgnet rundt i hele verden.
            </p>
        </Flex>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
            <DescriptionDetail data-layout-density="compact">
                <Flex gap={4}>
                    <p>Hele verden</p>
                    <Help {...args} />
                </Flex>
            </DescriptionDetail>
        </DescriptionList>
}`,...n.parameters?.docs?.source}}};const F=["Help1","Help2"];export{t as Help1,n as Help2,F as __namedExportsOrder,L as default};
