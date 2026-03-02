import{j as e}from"./iframe-C6DTywqF.js";import{B as s}from"./_index-CHcn5U5m.js";/* empty css               *//* empty css               *//* empty css               */import{F as i}from"./Flex-DG8yJ1k-.js";import{D as o,a,b as l}from"./DescriptionList-BWtdzMPe.js";import{L as p}from"./Link-CnXi_N9X.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DtMNsZn9.js";import"./Button-Bs96-gv2.js";import"./usePreviousValue-D_S2K512.js";import"./Loader-Bxspm60u.js";import"./useDelayedRender-K-q9hRla.js";import"./SlotComponent-BMOkW8ov.js";import"./mergeRefs-IuxsbNiS.js";const F={title:"Komponenter/Help/Eksempler",args:{position:"top"},component:s},n={name:"Knyttet til tekst",args:{position:"bottom",showButtonText:!1,buttonText:"Pris på tjenesten",children:"Reise SMS er en gratistjeneste levert av telefonoperatøren din."},render:t=>e.jsxs(i,{gap:"m",direction:"column",style:{maxWidth:"40ch"},children:[e.jsxs(i,{gap:"2xs",alignItems:"center",children:[e.jsx("h1",{className:"jkl-heading-1",children:"Reise SMS"}),e.jsx(s,{...t})]}),e.jsx("p",{children:"Når du kommer til et nytt land, vil du få en SMS med påminnelse om hva du skal gjøre når noe skjer, og hvor du kan få hjelp. Døgnet rundt i hele verden."})]})},r={name:"I Description List",args:{position:"right",showButtonText:!1,buttonText:"Hva er unntakene?",iconPosition:"right",children:e.jsxs("p",{children:["Reiseforsikringen gjelder i hele verden, unntatt i land som"," ",e.jsx(p,{href:"https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/reiserad_land/id2589040/",children:"Utenriksdepartementet fraråder å reise til"}),"."]})},render:t=>e.jsxs(o,{children:[e.jsx(a,{children:"Område"}),e.jsx(l,{children:e.jsxs(i,{gap:"xs",children:[e.jsx("p",{children:"Hele verden"}),e.jsx(s,{...t})]})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const b=["Help1","Help2"];export{n as Help1,r as Help2,b as __namedExportsOrder,F as default};
