import{j as e}from"./iframe-sZfDv0Z7.js";import{B as i}from"./Help-Es_cwSml.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import{F as s}from"./Flex-CiSgbQ97.js";import{a as o}from"./DescriptionList-8_xXmtDn.js";import{L as a}from"./Link-Db-YFDME.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DzYcyYW4.js";import"./Button-DDqOTrri.js";import"./usePreviousValue-BLiXUWnf.js";import"./Loader-4Pv88kLu.js";import"./useDelayedRender-BTELEnuz.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-BGg0CDuv.js";import"./mergeRefs-CpOMz9T3.js";const F={title:"Komponenter/Help/Eksempler",args:{position:"top"},component:i},n={name:"Knyttet til tekst",args:{position:"bottom",showButtonText:!1,buttonText:"Pris på tjenesten",children:"Reise SMS er en gratistjeneste levert av telefonoperatøren din."},render:r=>e.jsxs(s,{gap:"m",direction:"column",style:{maxWidth:"40ch"},children:[e.jsxs(s,{gap:"2xs",alignItems:"center",children:[e.jsx("h1",{className:"jkl-heading-1",children:"Reise SMS"}),e.jsx(i,{...r})]}),e.jsx("p",{children:"Når du kommer til et nytt land, vil du få en SMS med påminnelse om hva du skal gjøre når noe skjer, og hvor du kan få hjelp. Døgnet rundt i hele verden."})]})},t={name:"I Description List",args:{position:"right",showButtonText:!1,buttonText:"Hva er unntakene?",iconPosition:"right",children:e.jsxs("p",{children:["Reiseforsikringen gjelder i hele verden, unntatt i land som"," ",e.jsx(a,{href:"https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/reiserad_land/id2589040/",children:"Utenriksdepartementet fraråder å reise til"}),"."]})},render:r=>e.jsx(o,{children:e.jsx(o.Item,{terms:"Område",details:e.jsxs(s,{gap:"xs",children:[e.jsx("p",{children:"Hele verden"}),e.jsx(i,{...r})]})})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Knyttet til tekst",
  args: {
    position: "bottom",
    showButtonText: false,
    buttonText: "Pris på tjenesten",
    children: "Reise SMS er en gratistjeneste levert av telefonoperatøren din."
  },
  render: args => <Flex gap="m" direction="column" style={{
    maxWidth: "40ch"
  }}>
            <Flex gap="2xs" alignItems="center">
                <h1 className="jkl-heading-1">Reise SMS</h1>
                <Help {...args} />
            </Flex>
            <p>
                Når du kommer til et nytt land, vil du få en SMS med påminnelse
                om hva du skal gjøre når noe skjer, og hvor du kan få hjelp.
                Døgnet rundt i hele verden.
            </p>
        </Flex>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
            <DescriptionList.Item terms="Område" details={<Flex gap="xs">
                        <p>Hele verden</p>
                        <Help {...args} />
                    </Flex>} />
        </DescriptionList>
}`,...t.parameters?.docs?.source}}};const R=["Help1","Help2"];export{n as Help1,t as Help2,R as __namedExportsOrder,F as default};
