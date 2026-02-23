import{j as e}from"./iframe-FOGmXTkF.js";import{B as s}from"./Help-Bfa3j0Ef.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import{F as i}from"./Flex-BFtDMrYm.js";import{D as o,a,b as l}from"./DescriptionList-d6CW_nE0.js";import{L as p}from"./Link-CIqiV_1V.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-3MCil2qv.js";import"./Button-CEJytBrS.js";import"./usePreviousValue-BWAkSlF0.js";import"./Loader-BUuMR0_9.js";import"./useDelayedRender-mdC-rZ-k.js";import"./SlotComponent-CTdaHKLm.js";import"./mergeRefs-5elFVm-s.js";const b={title:"Komponenter/Help/Eksempler",args:{position:"top"},component:s},n={name:"Knyttet til tekst",args:{position:"bottom",showButtonText:!1,buttonText:"Pris på tjenesten",children:"Reise SMS er en gratistjeneste levert av telefonoperatøren din."},render:t=>e.jsxs(i,{gap:"m",direction:"column",style:{maxWidth:"40ch"},children:[e.jsxs(i,{gap:"2xs",alignItems:"center",children:[e.jsx("h1",{className:"jkl-heading-1",children:"Reise SMS"}),e.jsx(s,{...t})]}),e.jsx("p",{children:"Når du kommer til et nytt land, vil du få en SMS med påminnelse om hva du skal gjøre når noe skjer, og hvor du kan få hjelp. Døgnet rundt i hele verden."})]})},r={name:"I Description List",args:{position:"right",showButtonText:!1,buttonText:"Hva er unntakene?",iconPosition:"right",children:e.jsxs("p",{children:["Reiseforsikringen gjelder i hele verden, unntatt i land som"," ",e.jsx(p,{href:"https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/reiserad_land/id2589040/",children:"Utenriksdepartementet fraråder å reise til"}),"."]})},render:t=>e.jsxs(o,{children:[e.jsx(a,{children:"Område"}),e.jsx(l,{children:e.jsxs(i,{gap:"xs",children:[e.jsx("p",{children:"Hele verden"}),e.jsx(s,{...t})]})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const R=["Help1","Help2"];export{n as Help1,r as Help2,R as __namedExportsOrder,b as default};
