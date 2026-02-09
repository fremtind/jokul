import{j as e}from"./iframe-rOKMGclQ.js";import{B as s}from"./Help-Dq_iSFh2.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import{F as i}from"./Flex-CNFlGjlC.js";import{D as o,a,b as p}from"./DescriptionList-CYse43cI.js";import{L as l}from"./Link-DaJYF-_X.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-B2v-MAqb.js";import"./Button-Fubt6UQf.js";import"./usePreviousValue-Dnmc0hhp.js";import"./Loader-GJpLVJft.js";import"./useDelayedRender-D619kWR1.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-Bfb3Utuc.js";import"./mergeRefs-DRqoC2gh.js";const R={title:"Komponenter/Help/Eksempler",args:{position:"top"},component:s},n={name:"Knyttet til tekst",args:{position:"bottom",showButtonText:!1,buttonText:"Pris på tjenesten",children:"Reise SMS er en gratistjeneste levert av telefonoperatøren din."},render:t=>e.jsxs(i,{gap:"m",direction:"column",style:{maxWidth:"40ch"},children:[e.jsxs(i,{gap:"2xs",alignItems:"center",children:[e.jsx("h1",{className:"jkl-heading-1",children:"Reise SMS"}),e.jsx(s,{...t})]}),e.jsx("p",{children:"Når du kommer til et nytt land, vil du få en SMS med påminnelse om hva du skal gjøre når noe skjer, og hvor du kan få hjelp. Døgnet rundt i hele verden."})]})},r={name:"I Description List",args:{position:"right",showButtonText:!1,buttonText:"Hva er unntakene?",iconPosition:"right",children:e.jsxs("p",{children:["Reiseforsikringen gjelder i hele verden, unntatt i land som"," ",e.jsx(l,{href:"https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/reiserad_land/id2589040/",children:"Utenriksdepartementet fraråder å reise til"}),"."]})},render:t=>e.jsxs(o,{children:[e.jsx(a,{children:"Område"}),e.jsx(p,{children:e.jsxs(i,{gap:"xs",children:[e.jsx("p",{children:"Hele verden"}),e.jsx(s,{...t})]})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
                <Flex gap="xs">
                    <p>Hele verden</p>
                    <Help {...args} />
                </Flex>
            </DescriptionDetail>
        </DescriptionList>
}`,...r.parameters?.docs?.source}}};const y=["Help1","Help2"];export{n as Help1,r as Help2,y as __namedExportsOrder,R as default};
