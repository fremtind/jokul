import{j as e,R as B}from"./iframe-zpIsUMYL.js";import{G as T,R as r}from"./stateGrid-COaSk8We.js";import{T as y}from"./Title-QFywjyFi.js";import{T as i}from"./Text--ItatX3e.js";import{D as v,t as C}from"./DateInput-DZLiwU17.js";import{T as l}from"./TextInput-Do4-4LkZ.js";import{T as R}from"./TextArea-rhq8IgTD.js";import{S as D}from"./Select-BB6T1U2X.js";import{N as m}from"./NumberInput-CV0Vbf3I.js";import{S as L}from"./Search-BOJ4AxnW.js";import{C as S}from"./Combobox-DSUAwctX.js";import{C as O}from"./CheckboxPanel-e5iE8oJ2.js";import{R as P}from"./RadioPanel-CHxnbLBo.js";import{P as V}from"./PopupTip-B7E-U2tw.js";import{F as N}from"./FieldGroup-DEBJTo3H.js";import{C as o}from"./Checkbox-DbBrlpJ7.js";import{S as A,a as j}from"./SegmentedControlButton-l_6vm_9S.js";import{I as G}from"./IconButton-D_HHwSPU.js";import{C as F}from"./CopyIcon-DBZ6ax6c.js";import{F as $}from"./FileInput-DQD5FPvm.js";import{R as I}from"./RadioButton-C9NdeOeD.js";import{T as w}from"./ToggleSwitch-D4q5n4uT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-Dke5WO_s.js";import"./Flex-CZ44juCk.js";import"./SlotComponent-BvyvmNvi.js";import"./mergeRefs-C5B2LNbB.js";import"./Button-CkyzHkqu.js";import"./usePreviousValue-D0qsaQ1K.js";import"./Loader-BIWB7Xr8.js";import"./useDelayedRender-CfgF7us7.js";import"./ArrowRightIcon-4oNbg31K.js";import"./Icon-DhWlKq84.js";import"./TableCaption-rIER8hBe.js";import"./tableContext-DQuslMsQ.js";import"./InputGroup-10PImMO5.js";import"./useId-DxELmYub.js";import"./Label-CdX-08tO.js";import"./SupportLabel-dfQt5yi0.js";import"./SuccessIcon-CJuqG36J.js";import"./WarningIcon-BZW7TVg4.js";import"./CalendarIcon-qrRG4JuT.js";import"./BaseTextInput-PSnVMgCJ.js";import"./useListNavigation-DHEqhOT0.js";import"./ArrowDownIcon-jb1wvMDi.js";import"./CloseIcon-D4B9m4LH.js";import"./PlusIcon-JPLA8QgV.js";import"./MinusIcon-CFjVfVO5.js";import"./useAnimatedHeight-D3htIO2I.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CC5_eeAJ.js";import"./Chip-BiWHk3km.js";import"./CheckIcon-OPgZAgvx.js";import"./ArrowVerticalAnimated-CtPFmHjt.js";import"./TooltipTrigger-BmgnyKzA.js";import"./floating-ui.react-Dmuxbk7-.js";import"./index-BmTFNVTr.js";import"./index-D5DBDYDB.js";import"./TooltipContent-COXJZCUb.js";import"./getThemeAndSize-CZAj3IXt.js";import"./InputPanel-BqE_X7Jx.js";import"./QuestionIcon-DQ_QzJR2.js";import"./fileInputContext-DdmCWhdH.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./BaseRadioButton-mJi_EkXC.js";import"./useSwipeGesture-BqLHdsEm.js";const an={title:"Mønstre/Tilstander på skjemafelter",parameters:{layout:"padded",docs:{description:{component:"Disabled dempes til 50 %, readOnly får en dempet ramme med full tekstkontrast. Begge legges på selve kontrollen — label, beskrivelse og støttetekst beholder full kontrast. readOnly får i tillegg et låseikon rett bak label-teksten, foran et eventuelt tooltip; felter med skjult label får ingen lås."}}},tags:["forms"]},p=C(new Date),d=[{value:"reise",label:"Reiseforsikring"},{value:"bil",label:"Bilforsikring"},{value:"hus",label:"Husforsikring"}],E=[{name:"TextInput",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(l,{label:"E-post",helpLabel:"Vi bruker adressen til å sende deg polisen.",defaultValue:"ola.nordmann@eksempel.no",disabled:n,readOnly:a})},{name:"TextArea",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(R,{label:"Beskriv skaden",helpLabel:"Ta med tid, sted og hva som skjedde.",defaultValue:"Bilen ble påkjørt bakfra i et veikryss.",rows:3,disabled:n,readOnly:a})},{name:"Select",supportsReadOnly:!1,render:({disabled:n})=>e.jsx(D,{label:"Hvilken forsikring gjelder det?",helpLabel:"Velg den avtalen saken hører til.",items:d,defaultValue:"reise",disabled:n})},{name:"DateInput",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(v,{label:"Når skjedde skaden?",helpLabel:"Oppgi datoen så nøyaktig du kan.",labelProps:{srOnly:!1},defaultValue:p,disabled:n,readOnly:a})},{name:"NumberInput",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(m,{label:"Antall reisende",helpLabel:"Du kan legge til opptil 8 personer.",min:0,max:8,defaultValue:2,stepper:!0,disabled:n,readOnly:a})},{name:"Search",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(L,{label:"Søk",labelProps:{srOnly:!1},defaultValue:"Reiseforsikring",disabled:n,readOnly:a})},{name:"Combobox",supportsReadOnly:!0,render:({disabled:n,readOnly:a,idSuffix:z})=>e.jsx(S,{label:"Hvilke forsikringer gjelder det?",name:`combobox-${z}`,items:d,value:[d[0]],width:"20ch",onChange:()=>{},disabled:n,readOnly:a})},{name:"TextInput + actionButton",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(l,{label:"Kundenummer",defaultValue:"1234 5678",disabled:n,readOnly:a,actionButton:e.jsx(G,{title:"Kopier kundenummer",disabled:n,children:e.jsx(F,{})})})},{name:"FileInput",supportsReadOnly:!1,render:({disabled:n})=>e.jsx($,{legend:"Legg til dokumentasjon",labelProps:{variant:"small"},variant:"small",accept:"image/*,.pdf",value:[],onChange:()=>{},disabled:n})},{name:"FieldGroup",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsxs(N,{legend:"Hva vil du varsles om?",labelProps:{variant:"small"},disabled:n,children:[e.jsx(o,{name:`varsel-${a}`,value:"sms",defaultChecked:!0,children:"SMS"}),e.jsx(o,{name:`varsel-epost-${a}`,value:"epost",children:"E-post"})]})},{name:"Checkbox",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsxs(e.Fragment,{children:[e.jsx(o,{name:`samtykke-${a}`,value:"ja",defaultChecked:!0,disabled:n,children:"Avkrysset"}),e.jsx(o,{name:`samtykke-av-${a}`,value:"nei",disabled:n,children:"Ikke avkrysset"})]})},{name:"RadioButton",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsxs(e.Fragment,{children:[e.jsx(I,{name:`kontakt-${a}`,value:"epost",defaultChecked:!0,disabled:n,children:"Valgt"}),e.jsx(I,{name:`kontakt-${a}`,value:"sms",disabled:n,children:"Ikke valgt"})]})},{name:"ToggleSwitch",supportsReadOnly:!1,render:({disabled:n})=>e.jsxs(e.Fragment,{children:[e.jsx(w,{"aria-pressed":!0,disabled:n,children:"På"}),e.jsx(w,{"aria-pressed":!1,disabled:n,children:"Av"})]})},{name:"CheckboxPanel",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsx(O,{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling.",amount:"229 kr/mnd",name:`dekning-${a}`,value:"livsforsikring",defaultChecked:!0,disabled:n})},{name:"RadioPanel",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsx(P,{label:"Uføreforsikring",description:"Gir deg månedlig utbetaling hvis du blir ufør.",amount:"312 kr/mnd",name:`forsikring-${a}`,value:"uforeforsikring",defaultChecked:!0,disabled:n})},{name:"SegmentedControl",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsxs(A,{legend:"Dekning",labelProps:{srOnly:!1,variant:"small"},children:[e.jsx(j,{name:`dekkes-${a}`,value:"dekkes",defaultChecked:!0,disabled:n,children:"Dekkes"}),e.jsx(j,{name:`dekkes-${a}`,value:"dekkes-ikke",disabled:n,children:"Dekkes ikke"})]})}],s=[{heading:"Normal",suffix:"normal",props:{}},{heading:"Disabled",suffix:"disabled",props:{disabled:!0}},{heading:"ReadOnly",suffix:"readonly",props:{readOnly:!0}}],h={name:"Alle tilstander",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:[e.jsx(y,{size:"m",as:"h2",children:"Normal, disabled og readOnly"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(8rem, max-content) repeat(3, minmax(0, 1fr))",gap:"var(--jkl-spacing-24)",alignItems:"start"},children:[e.jsx("span",{}),s.map(n=>e.jsx(y,{size:"s",as:"h3",children:n.heading},n.heading)),E.map(n=>e.jsxs(B.Fragment,{children:[e.jsx(i,{size:"s",style:{paddingTop:"0.5lh"},children:n.name}),s.map(a=>e.jsx("div",{style:{display:"grid",gap:"var(--jkl-spacing-8)",alignContent:"start"},children:a.suffix==="readonly"&&!n.supportsReadOnly?e.jsx(i,{size:"s",style:{color:"var(--jkl-color-text-subdued)"},children:"Ikke relevant"}):n.render({...a.props,idSuffix:`${n.name}-${a.suffix}`})},a.heading))]},n.name))]})]})},t=[{suffix:"invalid",props:{}},{suffix:"invalid-disabled",props:{disabled:!0}},{suffix:"invalid-readonly",props:{readOnly:!0}}],u={name:"Disabled og invalid",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:[e.jsx(y,{size:"m",as:"h2",children:"Feilmelding kombinert med låst felt"}),e.jsxs(T,{columns:["Invalid","Invalid + disabled","Invalid + readOnly"],children:[e.jsx(r,{name:"TextInput",children:t.map(n=>e.jsx(l,{label:"E-post",errorLabel:"Adressen mangler @",defaultValue:"ola.nordmann",...n.props},n.suffix))}),e.jsx(r,{name:"TextArea",children:t.map(n=>e.jsx(R,{label:"Beskriv skaden",errorLabel:"Beskrivelsen er for kort",defaultValue:"Påkjørt",rows:2,...n.props},n.suffix))}),e.jsx(r,{name:"Select",children:t.map(n=>e.jsx(D,{label:"Hvilken forsikring?",errorLabel:"Du må velge en forsikring",items:d,...n.props},n.suffix))}),e.jsx(r,{name:"DateInput",children:t.map(n=>e.jsx(v,{label:"Når skjedde skaden?",labelProps:{srOnly:!1},errorLabel:"Datoen kan ikke være frem i tid",defaultValue:p,...n.props},n.suffix))}),e.jsx(r,{name:"NumberInput",children:t.map(n=>e.jsx(m,{label:"Antall reisende",errorLabel:"Maks 8 reisende",defaultValue:2,stepper:!0,...n.props},n.suffix))}),e.jsx(r,{name:"Search",children:t.map(n=>e.jsx(L,{label:"Søk",labelProps:{srOnly:!1},errorLabel:"Søket ga ingen treff",defaultValue:"Reiseforsikring",...n.props},n.suffix))}),e.jsx(r,{name:"Combobox",children:t.map(n=>e.jsx(S,{label:"Hvilke forsikringer?",name:`combobox-${n.suffix}`,items:d,value:[],width:"20ch",errorLabel:"Velg minst én forsikring",invalid:!0,onChange:()=>{},...n.props},n.suffix))}),e.jsx(r,{name:"CheckboxPanel",children:t.map(n=>e.jsx(O,{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling.",amount:"229 kr/mnd",name:`dekning-${n.suffix}`,value:"livsforsikring","aria-invalid":!0,...n.props},n.suffix))}),e.jsx(r,{name:"RadioPanel",children:t.map(n=>e.jsx(P,{label:"Uføreforsikring",description:"Gir deg månedlig utbetaling hvis du blir ufør.",amount:"312 kr/mnd",name:`forsikring-${n.suffix}`,value:"uforeforsikring","aria-invalid":!0,...n.props},n.suffix))})]})]})},f={name:"NumberInput utenfor grensen",render:()=>e.jsxs(T,{columns:["Normal","Disabled","ReadOnly"],children:[e.jsx(r,{name:"Uten errorLabel",children:s.map(n=>e.jsx(m,{label:"Antall reisende",min:0,max:8,defaultValue:20,stepper:!0,...n.props},n.suffix))}),e.jsx(r,{name:"Med errorLabel",children:s.map(n=>e.jsx(m,{label:"Antall reisende",errorLabel:"Du kan legge til opptil 8 personer",min:0,max:8,defaultValue:20,stepper:!0,...n.props},n.suffix))})]})},k={name:"Nøstet disabled",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)",maxWidth:"24rem"},children:[e.jsx(m,{label:"Antall reisende på minimum",description:"Decrement-knappen er selv disabled inne i et dempet felt.",min:0,max:8,defaultValue:0,stepper:!0,disabled:!0}),e.jsx(v,{label:"Dato, disabled",labelProps:{srOnly:!1},description:"Kalendertriggeren er en disabled knapp inne i et dempet felt.",defaultValue:p,disabled:!0}),e.jsx(v,{label:"Dato, readOnly",labelProps:{srOnly:!1},description:"Dempet trigger i et felt med full kontrast.",defaultValue:p,readOnly:!0}),e.jsxs(N,{legend:"Disabled gruppe",labelProps:{variant:"small"},description:"Checkboxene er disabled hver for seg i tillegg til gruppen.",disabled:!0,children:[e.jsx(o,{name:"nostet-varsel",value:"sms",defaultChecked:!0,disabled:!0,children:"SMS"}),e.jsx(o,{name:"nostet-varsel-epost",value:"epost",disabled:!0,children:"E-post"})]}),e.jsx(O,{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling.",amount:"229 kr/mnd",name:"nostet-dekning",value:"livsforsikring",defaultChecked:!0,disabled:!0}),e.jsxs(A,{legend:"Dekning",labelProps:{srOnly:!1,variant:"small"},children:[e.jsx(j,{name:"nostet-dekkes",value:"dekkes",defaultChecked:!0,disabled:!0,children:"Dekkes"}),e.jsx(j,{name:"nostet-dekkes",value:"dekkes-ikke",disabled:!0,children:"Dekkes ikke"})]})]})},g={name:"Tetthet og tilstand",render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:["small","medium","large"].map(n=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-16)"},children:[e.jsx(y,{size:"s",as:"h3",children:n}),e.jsxs(T,{columns:["Normal","Disabled","ReadOnly"],children:[e.jsx(r,{name:"TextInput",children:s.map(a=>e.jsx(l,{"data-size":n,label:"E-post",defaultValue:"ola.nordmann@eksempel.no",...a.props},a.suffix))}),e.jsx(r,{name:"NumberInput",children:s.map(a=>e.jsx(m,{"data-size":n,label:"Antall reisende",min:0,max:8,defaultValue:2,stepper:!0,...a.props},a.suffix))}),e.jsx(r,{name:"Select",children:s.map(a=>e.jsx(D,{"data-size":n,label:"Hvilken forsikring?",items:d,defaultValue:"reise",...a.props},a.suffix))})]})]},n))})},c={name:"Label, tooltip og inline",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)",maxWidth:"24rem"},children:[e.jsx(l,{label:"Fødselsnummer",tooltip:e.jsx(V,{content:"Vi bruker fødselsnummeret til å hente opplysninger fra Folkeregisteret."}),defaultValue:"01019012345",disabled:!0}),e.jsx(l,{label:"Kundenummer",tooltip:e.jsx(V,{content:"Kundenummeret finner du øverst på fakturaen."}),defaultValue:"1234 5678",readOnly:!0}),e.jsx(l,{label:"Skjult label, readOnly",labelProps:{srOnly:!0},defaultValue:"Verdien står alene uten synlig label",readOnly:!0}),e.jsxs("div",{children:[e.jsx(i,{size:"s",children:"inline + disabled"}),e.jsxs(i,{children:["Vi forsikrer"," ",e.jsx(l,{label:"Antall biler",inline:!0,width:"4ch",defaultValue:"2",disabled:!0})," ","biler for deg."]})]}),e.jsxs("div",{children:[e.jsx(i,{size:"s",children:"inline + errorLabel"}),e.jsxs(i,{children:["Vi forsikrer"," ",e.jsx(l,{label:"Antall biler",errorLabel:"Du må oppgi minst én bil",inline:!0,width:"4ch",defaultValue:""})," ","biler for deg."]})]})]})},b={name:"Tomme og lange verdier",render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:e.jsxs(T,{columns:["Normal","Disabled","ReadOnly"],children:[e.jsx(r,{name:"Tom med placeholder",children:s.map(n=>e.jsx(l,{label:"E-post",placeholder:"ola.nordmann@eksempel.no",value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(r,{name:"Tom og invalid",children:s.map(n=>e.jsx(l,{label:"E-post",placeholder:"ola.nordmann@eksempel.no",errorLabel:"Du må oppgi en e-postadresse",value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(r,{name:"Lang verdi",children:s.map(n=>e.jsx(l,{label:"Adresse",width:"16ch",defaultValue:"Nedre Storgate 42B, 3015 Drammen",...n.props},n.suffix))}),e.jsx(r,{name:"maxLength",children:s.map(n=>e.jsx(l,{label:"Kontonummer",maxLength:11,defaultValue:"12345678903",...n.props},n.suffix))}),e.jsx(r,{name:"Lang i TextArea",children:s.map(n=>e.jsx(R,{label:"Beskriv skaden",rows:2,defaultValue:"Bilen ble påkjørt bakfra i et veikryss, og både støtfanger og bakluke fikk synlige skader som må vurderes av verksted.",...n.props},n.suffix))})]})})},x={name:"Datoavgrensing demper ikke feltet",render:()=>e.jsx(v,{label:"Når skal du reise?",labelProps:{srOnly:!1},description:"Du kan bare velge datoer innenfor de neste 14 dagene.",defaultValue:p,min:p,max:C(new Date(new Date().setDate(new Date().getDate()+14)))})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Alle tilstander",
  render: () => <div style={{
    display: "grid",
    gap: "var(--jkl-spacing-32)"
  }}>
            <Title size="m" as="h2">
                Normal, disabled og readOnly
            </Title>
            <div style={{
      display: "grid",
      gridTemplateColumns: "minmax(8rem, max-content) repeat(3, minmax(0, 1fr))",
      gap: "var(--jkl-spacing-24)",
      alignItems: "start"
    }}>
                <span />
                {columns.map(column => <Title key={column.heading} size="s" as="h3">
                        {column.heading}
                    </Title>)}

                {rows.map(row => <React.Fragment key={row.name}>
                        <Text size="s" style={{
          paddingTop: "0.5lh"
        }}>
                            {row.name}
                        </Text>
                        {columns.map(column => <div key={column.heading} style={{
          display: "grid",
          gap: "var(--jkl-spacing-8)",
          alignContent: "start"
        }}>
                                {column.suffix === "readonly" && !row.supportsReadOnly ? <Text size="s" style={{
            color: "var(--jkl-color-text-subdued)"
          }}>
                                        Ikke relevant
                                    </Text> : row.render({
            ...column.props,
            idSuffix: \`\${row.name}-\${column.suffix}\`
          })}
                            </div>)}
                    </React.Fragment>)}
            </div>
        </div>
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Disabled og invalid",
  render: () => <div style={{
    display: "grid",
    gap: "var(--jkl-spacing-32)"
  }}>
            <Title size="m" as="h2">
                Feilmelding kombinert med låst felt
            </Title>
            <Grid columns={["Invalid", "Invalid + disabled", "Invalid + readOnly"]}>
                <Row name="TextInput">
                    {invalidStates.map(state => <TextInput key={state.suffix} label="E-post" errorLabel="Adressen mangler @" defaultValue="ola.nordmann" {...state.props} />)}
                </Row>
                <Row name="TextArea">
                    {invalidStates.map(state => <TextArea key={state.suffix} label="Beskriv skaden" errorLabel="Beskrivelsen er for kort" defaultValue="Påkjørt" rows={2} {...state.props} />)}
                </Row>
                <Row name="Select">
                    {invalidStates.map(state => <Select key={state.suffix} label="Hvilken forsikring?" errorLabel="Du må velge en forsikring" items={forsikringer} {...state.props} />)}
                </Row>
                <Row name="DateInput">
                    {invalidStates.map(state => <DateInput key={state.suffix} label="Når skjedde skaden?" labelProps={{
          srOnly: false
        }} errorLabel="Datoen kan ikke være frem i tid" defaultValue={today} {...state.props} />)}
                </Row>
                <Row name="NumberInput">
                    {invalidStates.map(state => <NumberInput key={state.suffix} label="Antall reisende" errorLabel="Maks 8 reisende" defaultValue={2} stepper {...state.props} />)}
                </Row>
                <Row name="Search">
                    {invalidStates.map(state => <Search key={state.suffix} label="Søk" labelProps={{
          srOnly: false
        }} errorLabel="Søket ga ingen treff" defaultValue="Reiseforsikring" {...state.props} />)}
                </Row>
                <Row name="Combobox">
                    {invalidStates.map(state => <Combobox key={state.suffix} label="Hvilke forsikringer?" name={\`combobox-\${state.suffix}\`} items={forsikringer} value={[]} width="20ch" errorLabel="Velg minst én forsikring" invalid onChange={() => undefined} {...state.props} />)}
                </Row>
                <Row name="CheckboxPanel">
                    {invalidStates.map(state => <CheckboxPanel key={state.suffix} label="Livsforsikring" description="Gir dine etterlatte en engangsutbetaling." amount="229 kr/mnd" name={\`dekning-\${state.suffix}\`} value="livsforsikring" aria-invalid {...state.props} />)}
                </Row>
                <Row name="RadioPanel">
                    {invalidStates.map(state => <RadioPanel key={state.suffix} label="Uføreforsikring" description="Gir deg månedlig utbetaling hvis du blir ufør." amount="312 kr/mnd" name={\`forsikring-\${state.suffix}\`} value="uforeforsikring" aria-invalid {...state.props} />)}
                </Row>
            </Grid>
        </div>
}`,...u.parameters?.docs?.source},description:{story:"`aria-invalid` utledes av `errorLabel` — det finnes ingen `invalid`-prop på\nskjemafeltene. Unntakene er Combobox, som har en egen `invalid` ved siden av\n`errorLabel`, og panelene, som ikke har `errorLabel` i det hele tatt og derfor\nmå få `aria-invalid` direkte.\n\nDen røde rammen vinner over den dempede read-only-rammen, fordi invalid-regelen\nhar høyere spesifisitet enn read-only-hooken. På en disabled kontroll beholdes\nden røde rammen, men dempet til 50 %. InputPanel er unntaket: der nullstilles\nden røde rammen når panelet er disabled.",...u.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "NumberInput utenfor grensen",
  render: () => <Grid columns={["Normal", "Disabled", "ReadOnly"]}>
            <Row name="Uten errorLabel">
                {columns.map(column => <NumberInput key={column.suffix} label="Antall reisende" min={0} max={8} defaultValue={20} stepper {...column.props} />)}
            </Row>
            <Row name="Med errorLabel">
                {columns.map(column => <NumberInput key={column.suffix} label="Antall reisende" errorLabel="Du kan legge til opptil 8 personer" min={0} max={8} defaultValue={20} stepper {...column.props} />)}
            </Row>
        </Grid>
}`,...f.parameters?.docs?.source},description:{story:"Verdien bryter `max`, så nettleseren matcher `:invalid` og gir feltet rød\nbakgrunn. Disabled og readOnly felter er unntatt native constraint validation,\nså `:invalid` slutter å matche og bakgrunnen forsvinner.\n\nKan feltet være låst, må feilmeldingen komme fra `errorLabel` — native\nvalidering alene er ikke nok.",...f.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Nøstet disabled",
  render: () => <div style={{
    display: "grid",
    gap: "var(--jkl-spacing-32)",
    maxWidth: "24rem"
  }}>
            <NumberInput label="Antall reisende på minimum" description="Decrement-knappen er selv disabled inne i et dempet felt." min={0} max={8} defaultValue={0} stepper disabled />
            <DateInput label="Dato, disabled" labelProps={{
      srOnly: false
    }} description="Kalendertriggeren er en disabled knapp inne i et dempet felt." defaultValue={today} disabled />
            <DateInput label="Dato, readOnly" labelProps={{
      srOnly: false
    }} description="Dempet trigger i et felt med full kontrast." defaultValue={today} readOnly />
            <FieldGroup legend="Disabled gruppe" labelProps={{
      variant: "small"
    }} description="Checkboxene er disabled hver for seg i tillegg til gruppen." disabled>
                <Checkbox name="nostet-varsel" value="sms" defaultChecked disabled>
                    SMS
                </Checkbox>
                <Checkbox name="nostet-varsel-epost" value="epost" disabled>
                    E-post
                </Checkbox>
            </FieldGroup>
            <CheckboxPanel label="Livsforsikring" description="Gir dine etterlatte en engangsutbetaling." amount="229 kr/mnd" name="nostet-dekning" value="livsforsikring" defaultChecked disabled />
            <SegmentedControl legend="Dekning" labelProps={{
      srOnly: false,
      variant: "small"
    }}>
                <SegmentedControlButton name="nostet-dekkes" value="dekkes" defaultChecked disabled>
                    Dekkes
                </SegmentedControlButton>
                <SegmentedControlButton name="nostet-dekkes" value="dekkes-ikke" disabled>
                    Dekkes ikke
                </SegmentedControlButton>
            </SegmentedControl>
        </div>
}`,...k.parameters?.docs?.source},description:{story:"`disabled-control` demper til 50 % og nullstiller `--jkl-nested-disabled-opacity`\npå etterkommerne, slik at en disabled kontroll inne i en disabled flate ikke\nblir dempet to ganger. Alt her skal lese 50 %, aldri 25 %.",...k.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Tetthet og tilstand",
  render: () => <div style={{
    display: "grid",
    gap: "var(--jkl-spacing-32)"
  }}>
            {(["small", "medium", "large"] as const).map(size => <div key={size} style={{
      display: "grid",
      gap: "var(--jkl-spacing-16)"
    }}>
                    <Title size="s" as="h3">
                        {size}
                    </Title>
                    <Grid columns={["Normal", "Disabled", "ReadOnly"]}>
                        <Row name="TextInput">
                            {columns.map(column => <TextInput key={column.suffix} data-size={size} label="E-post" defaultValue="ola.nordmann@eksempel.no" {...column.props} />)}
                        </Row>
                        <Row name="NumberInput">
                            {columns.map(column => <NumberInput key={column.suffix} data-size={size} label="Antall reisende" min={0} max={8} defaultValue={2} stepper {...column.props} />)}
                        </Row>
                        <Row name="Select">
                            {columns.map(column => <Select key={column.suffix} data-size={size} label="Hvilken forsikring?" items={forsikringer} defaultValue="reise" {...column.props} />)}
                        </Row>
                    </Grid>
                </div>)}
        </div>
}`,...g.parameters?.docs?.source},description:{story:"Tilstandene skal se like ut i alle tettheter.",...g.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Label, tooltip og inline",
  render: () => <div style={{
    display: "grid",
    gap: "var(--jkl-spacing-32)",
    maxWidth: "24rem"
  }}>
            <TextInput label="Fødselsnummer" tooltip={<PopupTip content="Vi bruker fødselsnummeret til å hente opplysninger fra Folkeregisteret." />} defaultValue="01019012345" disabled />
            <TextInput label="Kundenummer" tooltip={<PopupTip content="Kundenummeret finner du øverst på fakturaen." />} defaultValue="1234 5678" readOnly />
            <TextInput label="Skjult label, readOnly" labelProps={{
      srOnly: true
    }} defaultValue="Verdien står alene uten synlig label" readOnly />
            <div>
                <Text size="s">inline + disabled</Text>
                <Text>
                    Vi forsikrer{" "}
                    <TextInput label="Antall biler" inline width="4ch" defaultValue="2" disabled />{" "}
                    biler for deg.
                </Text>
            </div>
            <div>
                <Text size="s">inline + errorLabel</Text>
                <Text>
                    Vi forsikrer{" "}
                    <TextInput label="Antall biler" errorLabel="Du må oppgi minst én bil" inline width="4ch" defaultValue="" />{" "}
                    biler for deg.
                </Text>
            </div>
        </div>
}`,...c.parameters?.docs?.source},description:{story:"Labelen og kontrollen behandles ulikt. Tooltipen hører til labelen, så den\nbeholder full kontrast og kan åpnes selv om kontrollen er låst.\n\n`inline` tvinger `srOnly` på både label og støttetekst. Med `inline` blir\naltså en `errorLabel` usynlig — den finnes bare for skjermlesere.",...c.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Tomme og lange verdier",
  render: () => <div style={{
    display: "grid",
    gap: "var(--jkl-spacing-32)"
  }}>
            <Grid columns={["Normal", "Disabled", "ReadOnly"]}>
                <Row name="Tom med placeholder">
                    {columns.map(column => <TextInput key={column.suffix} label="E-post" placeholder="ola.nordmann@eksempel.no" value="" onChange={() => undefined} {...column.props} />)}
                </Row>
                <Row name="Tom og invalid">
                    {columns.map(column => <TextInput key={column.suffix} label="E-post" placeholder="ola.nordmann@eksempel.no" errorLabel="Du må oppgi en e-postadresse" value="" onChange={() => undefined} {...column.props} />)}
                </Row>
                <Row name="Lang verdi">
                    {columns.map(column => <TextInput key={column.suffix} label="Adresse" width="16ch" defaultValue="Nedre Storgate 42B, 3015 Drammen" {...column.props} />)}
                </Row>
                <Row name="maxLength">
                    {columns.map(column => <TextInput key={column.suffix} label="Kontonummer" maxLength={11} defaultValue="12345678903" {...column.props} />)}
                </Row>
                <Row name="Lang i TextArea">
                    {columns.map(column => <TextArea key={column.suffix} label="Beskriv skaden" rows={2} defaultValue="Bilen ble påkjørt bakfra i et veikryss, og både støtfanger og bakluke fikk synlige skader som må vurderes av verksted." {...column.props} />)}
                </Row>
            </Grid>
        </div>
}`,...b.parameters?.docs?.source},description:{story:"Placeholderfargen styres av `--placeholder-color`, som invalid-regelen også\noverskriver. Lange verdier skal klippes av feltet, ikke flyte ut av det.",...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Datoavgrensing demper ikke feltet",
  render: () => <DateInput label="Når skal du reise?" labelProps={{
    srOnly: false
  }} description="Du kan bare velge datoer innenfor de neste 14 dagene." defaultValue={today} min={today} max={toValidInputValue(new Date(new Date().setDate(new Date().getDate() + 14)))} />
}`,...x.parameters?.docs?.source},description:{story:"Kalenderen i DateInput inneholder disabled dag-inputs for datoer utenfor\n`min`/`max`. Feltet under er ikke disabled og skal derfor ha full kontrast —\nblir det dempet, treffer disabled-selectoren for bredt.",...x.parameters?.docs?.description}}};const rn=["AlleTilstander","DisabledOgInvalid","NumberInputUtenforGrense","NøstetDisabled","TetthetOgTilstand","LabelTooltipOgInline","TommeOgLangeVerdier","DatoavgrensingDemperIkkeFeltet"];export{h as AlleTilstander,x as DatoavgrensingDemperIkkeFeltet,u as DisabledOgInvalid,c as LabelTooltipOgInline,f as NumberInputUtenforGrense,k as NøstetDisabled,g as TetthetOgTilstand,b as TommeOgLangeVerdier,rn as __namedExportsOrder,an as default};
