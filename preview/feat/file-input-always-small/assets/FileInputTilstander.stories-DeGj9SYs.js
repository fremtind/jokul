import{j as e}from"./iframe-B-nSori2.js";import{e as t,a as u,d as v,p as j}from"./_index-DpugEcpW.js";import{H as E}from"./Help-ByyZqzFx.js";import{F as y}from"./Flex-B0Ak0vhd.js";import{T as b}from"./Title-BhqKmAep.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./File-54q2ysD5.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Text-B8gZsiOs.js";import"./Link-D1g5_uNm.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./Button-BZD-B4EM.js";import"./usePreviousValue-CiekwCsx.js";import"./Loader-DhlofV_G.js";import"./useDelayedRender-C8fiDYlW.js";import"./TrashCanIcon-Cbw5RF77.js";import"./Icon-BV2me0SG.js";import"./SupportLabel-B-mkj_Od.js";import"./SuccessIcon-CVUXNYEU.js";import"./WarningIcon-BMDZZg0C.js";import"./FieldGroup-Ds0CFbAi.js";import"./useId-59BUdYcS.js";import"./Label-DCcYgmLk.js";import"./SlotComponent-B51aY1wL.js";import"./mergeRefs-_7lZvp9j.js";const{fireEvent:B,fn:S,userEvent:h,within:T}=__STORYBOOK_MODULE_TEST__,te={title:"Komponenter/File Input/Tilstander",component:u,parameters:{layout:"padded",docs:{description:{component:"Alle tilstandene til FileInput og filene i den, én story per tilstand. Bytt mellom\nliste og kort med `fileVariant`."}}},args:{legend:"Vedlegg",filer:[],fileVariant:"list",multiple:!0,disabled:!1,onChange:S()},argTypes:{fileVariant:{control:{type:"inline-radio"},options:["list","card"]},filer:{control:!1},onChange:{control:!1}},render:r=>e.jsx("div",{style:{maxWidth:"40rem"},children:e.jsx(u,{...r})})},x=({tittel:r,fileVariant:m})=>e.jsxs(y,{direction:"column",gap:"32",style:{flex:"1 1 24rem"},children:[e.jsx(b,{as:"h2",size:"s",children:r}),Object.entries({"Valgte filer":t.valgt,"Laster opp":t.lasterOpp,Feil:t.feil}).map(([k,F])=>e.jsx(u,{legend:k,filer:F,fileVariant:m},k))]}),a={argTypes:{fileVariant:{control:!1}},render:()=>e.jsxs(y,{wrap:!0,gap:"40",children:[e.jsx(x,{tittel:"Liste",fileVariant:"list"}),e.jsx(x,{tittel:"Kort",fileVariant:"card"})]})},d={},f={name:"Med hjelpetekst og tooltip",args:{description:"Last opp kvitteringen for det du har kjøpt.",maxSizeBytes:8e6,accept:"image/*,.pdf",tooltip:e.jsx(E,{buttonText:"Hva kan jeg laste opp?",children:"Du kan laste opp bilder og PDF-er."})}},s={name:"Bare én fil",args:{multiple:!1,filer:[v("kvittering.jpg")]}},i={name:"Valgte filer",args:{filer:t.valgt}},n={name:"Laster opp",args:{filer:t.lasterOpp}},o={name:"Feil på filene",args:{filer:t.feil}},g={name:"Feil på feltet",args:{errorLabel:"Du må legge ved kvitteringen"}},l={args:{disabled:!0,filer:[v("kvittering.jpg"),j("faktura.pdf")]}},p={name:"Fil dras over",play:async({canvasElement:r})=>{const m=r.querySelector("input[type=file]");m&&B.dragEnter(m)}},c={play:async({canvasElement:r})=>{await T(r).findByText("Legg til fil"),await h.tab()}},ae=["Oversikt","Tom","MedHjelpetekst","EnFil","ValgteFiler","LasterOpp","FeilPaFiler","FeilPaFeltet","Deaktivert","DraOver","Fokus"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  argTypes: {
    fileVariant: {
      control: false
    }
  },
  render: () => <Flex wrap gap="40">
            <Kolonne tittel="Liste" fileVariant="list" />
            <Kolonne tittel="Kort" fileVariant="card" />
        </Flex>
}`,...a.parameters?.docs?.source},description:{story:"Alle filtilstandene som liste og som kort, side om side.",...a.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Med hjelpetekst og tooltip",
  args: {
    description: "Last opp kvitteringen for det du har kjøpt.",
    maxSizeBytes: 8_000_000,
    accept: "image/*,.pdf",
    tooltip: <Help buttonText="Hva kan jeg laste opp?">
                Du kan laste opp bilder og PDF-er.
            </Help>
  }
}`,...f.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Bare én fil",
  args: {
    multiple: false,
    filer: [bilde("kvittering.jpg")]
  }
}`,...s.parameters?.docs?.source},description:{story:"Med `multiple={false}` står det «slipp fil her», og en ny fil erstatter den gamle.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Valgte filer",
  args: {
    filer: eksempelfiler.valgt
  }
}`,...i.parameters?.docs?.source},description:{story:"Bilde, PDF, langt filnavn og fil uten miniatyrbilde.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Laster opp",
  args: {
    filer: eksempelfiler.lasterOpp
  }
}`,...n.parameters?.docs?.source},description:{story:"Med `uploadProgress` fylles linjen nederst opp. Uten glir den frem og tilbake.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Feil på filene",
  args: {
    filer: eksempelfiler.feil
  }
}`,...o.parameters?.docs?.source},description:{story:"For stor fil, feil filtype, feil fra serveren og standardteksten «Feil».",...o.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Feil på feltet",
  args: {
    errorLabel: "Du må legge ved kvitteringen"
  }
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    filer: [bilde("kvittering.jpg"), pdf("faktura.pdf")]
  }
}`,...l.parameters?.docs?.source},description:{story:"Ikke bruk i kundeflater, se beskrivelsen av `disabled`.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Fil dras over",
  play: async ({
    canvasElement
  }) => {
    const input = canvasElement.querySelector("input[type=file]");
    if (input) {
      fireEvent.dragEnter(input);
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"Simulerer at en fil dras over dropsonen.",...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findByText("Legg til fil");
    await userEvent.tab();
  }
}`,...c.parameters?.docs?.source},description:{story:"Tastaturfokus på «Legg til fil».",...c.parameters?.docs?.description}}};export{l as Deaktivert,p as DraOver,s as EnFil,g as FeilPaFeltet,o as FeilPaFiler,c as Fokus,n as LasterOpp,f as MedHjelpetekst,a as Oversikt,d as Tom,i as ValgteFiler,ae as __namedExportsOrder,te as default};
