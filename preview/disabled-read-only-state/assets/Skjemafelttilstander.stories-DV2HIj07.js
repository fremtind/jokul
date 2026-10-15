import{j as e,R as $}from"./iframe-Un4u8ble.js";import{G as j,R as r}from"./stateGrid-DOMGurHi.js";import{T as h}from"./Title-BnR39vfn.js";import{T as d}from"./Text-BmkQkz6M.js";import{T as s}from"./TextInput-Ds7RDi01.js";import{T}from"./TextArea-DEGMYaok.js";import{S as w}from"./Select-BhZeNmQd.js";import{N as o}from"./NumberInput-BE-uiY14.js";import{S as I}from"./Search-UmrtH6uf.js";import{C as D}from"./Combobox-B-FW9G84.js";import{I as P}from"./IconButton-B_2NK8JL.js";import{C as N}from"./CopyIcon-rvf9L1WY.js";import{D as y,t as A}from"./DateInput-mtDO1wdd.js";import{C}from"./CheckboxPanel-B46HHMtV.js";import{R as B}from"./RadioPanel-DLGd0sQr.js";import{P as O}from"./PopupTip-D_LstZpu.js";import{F as G}from"./FieldGroup-DhlgmweU.js";import{C as m}from"./Checkbox-DVaNyjav.js";import{S as z,a as R}from"./SegmentedControlButton-D_z1ivec.js";import{F as E}from"./FileInput-CfIO9dwz.js";import{R as V}from"./RadioButton-DoO7Hp1h.js";import{T as S}from"./ToggleSwitch-DfA70YGD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-B_gwCkjB.js";import"./useId-Cg3o3FDR.js";import"./Label-WTHz9bAK.js";import"./SupportLabel-DmnibL6V.js";import"./SuccessIcon-ln5l7J5u.js";import"./Icon-BE-Nj4c-.js";import"./WarningIcon-RsipP120.js";import"./BaseTextInput-xlu0or7S.js";import"./mergeRefs-C9durSYX.js";import"./Button-DL4BfSDz.js";import"./usePreviousValue-BWvpykeN.js";import"./Loader-ExVESAM3.js";import"./useDelayedRender-DG4FG95-.js";import"./Flex-Ci-ipJ53.js";import"./SlotComponent-ZyiHHNUf.js";import"./useListNavigation-BlcgE5MD.js";import"./ArrowDownIcon-BR-fSFCv.js";import"./CloseIcon-5xCbpV1k.js";import"./PlusIcon-Ct4y9D84.js";import"./MinusIcon-CjuwQQPF.js";import"./useAnimatedHeight-C3YofKvk.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BKxb1R-J.js";import"./Chip-vNaGg5VQ.js";import"./CheckIcon-FPUFa3ft.js";import"./ArrowVerticalAnimated-CEBgFygD.js";import"./TooltipTrigger-Bhbvqe55.js";import"./floating-ui.react-BrU6Tx_R.js";import"./index-DQuwD8Ww.js";import"./index-DuCfJzL-.js";import"./TooltipContent-DBopdQpl.js";import"./getThemeAndSize-CZAj3IXt.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-B9poHXl4.js";import"./TableCaption-A4t1WPHL.js";import"./tableContext-DeZA-TpR.js";import"./CalendarIcon-B92tWJK2.js";import"./InputPanel-CeZqfVFi.js";import"./QuestionIcon-DidVhAvY.js";import"./fileInputContext-CChYBpwH.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./BaseRadioButton-XBmJenV6.js";import"./useSwipeGesture-8j1DKY9s.js";const rn={title:"Mønstre/Tilstander på skjemafelter",parameters:{layout:"padded",docs:{description:{component:"Disabled dempes til 50 %, readOnly får en dempet ramme med full tekstkontrast. Begge legges på selve kontrollen — label, beskrivelse og støttetekst beholder full kontrast. readOnly får i tillegg et låseikon rett bak label-teksten, foran et eventuelt tooltip; felter med skjult label får ingen lås."}}},tags:["forms"]},p=A(new Date),i=[{value:"reise",label:"Reiseforsikring"},{value:"bil",label:"Bilforsikring"},{value:"hus",label:"Husforsikring"}],K=[{name:"TextInput",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(s,{label:"E-post",helpLabel:"Vi bruker adressen til å sende deg polisen.",defaultValue:"ola.nordmann@eksempel.no",disabled:n,readOnly:a})},{name:"TextArea",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(T,{label:"Beskriv skaden",helpLabel:"Ta med tid, sted og hva som skjedde.",defaultValue:"Bilen ble påkjørt bakfra i et veikryss.",rows:3,disabled:n,readOnly:a})},{name:"Select",supportsReadOnly:!1,render:({disabled:n})=>e.jsx(w,{label:"Hvilken forsikring gjelder det?",helpLabel:"Velg den avtalen saken hører til.",items:i,defaultValue:"reise",disabled:n})},{name:"DateInput",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(y,{label:"Når skjedde skaden?",helpLabel:"Oppgi datoen så nøyaktig du kan.",labelProps:{srOnly:!1},defaultValue:p,disabled:n,readOnly:a})},{name:"NumberInput",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(o,{label:"Antall reisende",helpLabel:"Du kan legge til opptil 8 personer.",min:0,max:8,defaultValue:2,stepper:!0,disabled:n,readOnly:a})},{name:"Search",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(I,{label:"Søk",labelProps:{srOnly:!1},defaultValue:"Reiseforsikring",disabled:n,readOnly:a})},{name:"Combobox",supportsReadOnly:!0,render:({disabled:n,readOnly:a,idSuffix:F})=>e.jsx(D,{label:"Hvilke forsikringer gjelder det?",name:`combobox-${F}`,items:i,value:[i[0]],width:"20ch",onChange:()=>{},disabled:n,readOnly:a})},{name:"TextInput + actionButton",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(s,{label:"Kundenummer",defaultValue:"1234 5678",disabled:n,readOnly:a,actionButton:e.jsx(P,{title:"Kopier kundenummer",disabled:n,children:e.jsx(N,{})})})},{name:"FileInput",supportsReadOnly:!1,render:({disabled:n})=>e.jsx(E,{legend:"Legg til dokumentasjon",labelProps:{variant:"small"},variant:"small",accept:"image/*,.pdf",value:[],onChange:()=>{},disabled:n})},{name:"FieldGroup",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsxs(G,{legend:"Hva vil du varsles om?",labelProps:{variant:"small"},disabled:n,children:[e.jsx(m,{name:`varsel-${a}`,value:"sms",defaultChecked:!0,children:"SMS"}),e.jsx(m,{name:`varsel-epost-${a}`,value:"epost",children:"E-post"})]})},{name:"Checkbox",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsxs(e.Fragment,{children:[e.jsx(m,{name:`samtykke-${a}`,value:"ja",defaultChecked:!0,disabled:n,children:"Avkrysset"}),e.jsx(m,{name:`samtykke-av-${a}`,value:"nei",disabled:n,children:"Ikke avkrysset"})]})},{name:"RadioButton",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsxs(e.Fragment,{children:[e.jsx(V,{name:`kontakt-${a}`,value:"epost",defaultChecked:!0,disabled:n,children:"Valgt"}),e.jsx(V,{name:`kontakt-${a}`,value:"sms",disabled:n,children:"Ikke valgt"})]})},{name:"ToggleSwitch",supportsReadOnly:!1,render:({disabled:n})=>e.jsxs(e.Fragment,{children:[e.jsx(S,{"aria-pressed":!0,disabled:n,children:"På"}),e.jsx(S,{"aria-pressed":!1,disabled:n,children:"Av"})]})},{name:"CheckboxPanel",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsx(C,{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling.",amount:"229 kr/mnd",name:`dekning-${a}`,value:"livsforsikring",defaultChecked:!0,disabled:n})},{name:"RadioPanel",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsx(B,{label:"Uføreforsikring",description:"Gir deg månedlig utbetaling hvis du blir ufør.",amount:"312 kr/mnd",name:`forsikring-${a}`,value:"uforeforsikring",defaultChecked:!0,disabled:n})},{name:"SegmentedControl",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsxs(z,{legend:"Dekning",labelProps:{srOnly:!1,variant:"small"},children:[e.jsx(R,{name:`dekkes-${a}`,value:"dekkes",defaultChecked:!0,disabled:n,children:"Dekkes"}),e.jsx(R,{name:`dekkes-${a}`,value:"dekkes-ikke",disabled:n,children:"Dekkes ikke"})]})}],l=[{heading:"Normal",suffix:"normal",props:{}},{heading:"Disabled",suffix:"disabled",props:{disabled:!0}},{heading:"ReadOnly",suffix:"readonly",props:{readOnly:!0}}],L=()=>e.jsx(d,{size:"s",style:{color:"var(--jkl-color-text-subdued)"},children:"Ikke relevant"}),u={name:"Alle tilstander",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:[e.jsx(h,{size:"m",as:"h2",children:"Normal, disabled og readOnly"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(8rem, max-content) repeat(3, minmax(0, 1fr))",gap:"var(--jkl-spacing-24)",alignItems:"start"},children:[e.jsx("span",{}),l.map(n=>e.jsx(h,{size:"s",as:"h3",children:n.heading},n.heading)),K.map(n=>e.jsxs($.Fragment,{children:[e.jsx(d,{size:"s",style:{paddingTop:"0.5lh"},children:n.name}),l.map(a=>e.jsx("div",{style:{display:"grid",gap:"var(--jkl-spacing-8)",alignContent:"start"},children:a.suffix==="readonly"&&!n.supportsReadOnly?e.jsx(L,{}):n.render({...a.props,idSuffix:`${n.name}-${a.suffix}`})},a.heading))]},n.name))]}),e.jsx(h,{size:"m",as:"h2",children:"Tomme felter med placeholder"}),e.jsxs(j,{columns:["Normal","Disabled","ReadOnly"],children:[e.jsx(r,{name:"TextInput",children:l.map(n=>e.jsx(s,{label:"E-post",placeholder:"ola.nordmann@eksempel.no",value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(r,{name:"TextArea",children:l.map(n=>e.jsx(T,{label:"Beskriv skaden",placeholder:"Ta med tid, sted og hva som skjedde.",rows:3,value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(r,{name:"Select",children:l.map(n=>n.suffix==="readonly"?e.jsx(L,{},n.suffix):e.jsx(w,{label:"Hvilken forsikring gjelder det?",placeholder:"Velg forsikring",items:i,disabled:n.props.disabled},n.suffix))}),e.jsx(r,{name:"NumberInput",children:l.map(n=>e.jsx(o,{label:"Antall reisende",placeholder:"2",min:0,max:8,stepper:!0,value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(r,{name:"Search",children:l.map(n=>e.jsx(I,{label:"Søk",labelProps:{srOnly:!1},placeholder:"Søk etter forsikring",value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(r,{name:"Combobox",children:l.map(n=>e.jsx(D,{label:"Hvilke forsikringer gjelder det?",name:`combobox-placeholder-${n.suffix}`,placeholder:"Velg forsikringer",items:i,value:[],width:"20ch",onChange:()=>{},...n.props},n.suffix))}),e.jsx(r,{name:"TextInput + actionButton",children:l.map(n=>e.jsx(s,{label:"Kundenummer",placeholder:"1234 5678",value:"",onChange:()=>{},...n.props,actionButton:e.jsx(P,{title:"Kopier kundenummer",disabled:n.props.disabled,children:e.jsx(N,{})})},n.suffix))})]})]})},t=[{suffix:"invalid",props:{}},{suffix:"invalid-disabled",props:{disabled:!0}},{suffix:"invalid-readonly",props:{readOnly:!0}}],f={name:"Disabled og invalid",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:[e.jsx(h,{size:"m",as:"h2",children:"Feilmelding kombinert med låst felt"}),e.jsxs(j,{columns:["Invalid","Invalid + disabled","Invalid + readOnly"],children:[e.jsx(r,{name:"TextInput",children:t.map(n=>e.jsx(s,{label:"E-post",errorLabel:"Adressen mangler @",defaultValue:"ola.nordmann",...n.props},n.suffix))}),e.jsx(r,{name:"TextArea",children:t.map(n=>e.jsx(T,{label:"Beskriv skaden",errorLabel:"Beskrivelsen er for kort",defaultValue:"Påkjørt",rows:2,...n.props},n.suffix))}),e.jsx(r,{name:"Select",children:t.map(n=>e.jsx(w,{label:"Hvilken forsikring?",errorLabel:"Du må velge en forsikring",items:i,...n.props},n.suffix))}),e.jsx(r,{name:"DateInput",children:t.map(n=>e.jsx(y,{label:"Når skjedde skaden?",labelProps:{srOnly:!1},errorLabel:"Datoen kan ikke være frem i tid",defaultValue:p,...n.props},n.suffix))}),e.jsx(r,{name:"NumberInput",children:t.map(n=>e.jsx(o,{label:"Antall reisende",errorLabel:"Maks 8 reisende",defaultValue:2,stepper:!0,...n.props},n.suffix))}),e.jsx(r,{name:"Search",children:t.map(n=>e.jsx(I,{label:"Søk",labelProps:{srOnly:!1},errorLabel:"Søket ga ingen treff",defaultValue:"Reiseforsikring",...n.props},n.suffix))}),e.jsx(r,{name:"Combobox",children:t.map(n=>e.jsx(D,{label:"Hvilke forsikringer?",name:`combobox-${n.suffix}`,items:i,value:[],width:"20ch",errorLabel:"Velg minst én forsikring",invalid:!0,onChange:()=>{},...n.props},n.suffix))}),e.jsx(r,{name:"CheckboxPanel",children:t.map(n=>e.jsx(C,{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling.",amount:"229 kr/mnd",name:`dekning-${n.suffix}`,value:"livsforsikring","aria-invalid":!0,...n.props},n.suffix))}),e.jsx(r,{name:"RadioPanel",children:t.map(n=>e.jsx(B,{label:"Uføreforsikring",description:"Gir deg månedlig utbetaling hvis du blir ufør.",amount:"312 kr/mnd",name:`forsikring-${n.suffix}`,value:"uforeforsikring","aria-invalid":!0,...n.props},n.suffix))})]})]})},k={name:"NumberInput utenfor grensen",render:()=>e.jsxs(j,{columns:["Normal","Disabled","ReadOnly"],children:[e.jsx(r,{name:"Uten errorLabel",children:l.map(n=>e.jsx(o,{label:"Antall reisende",min:0,max:8,defaultValue:20,stepper:!0,...n.props},n.suffix))}),e.jsx(r,{name:"Med errorLabel",children:l.map(n=>e.jsx(o,{label:"Antall reisende",errorLabel:"Du kan legge til opptil 8 personer",min:0,max:8,defaultValue:20,stepper:!0,...n.props},n.suffix))})]})},c={name:"Nøstet disabled",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)",maxWidth:"24rem"},children:[e.jsx(o,{label:"Antall reisende på minimum",description:"Decrement-knappen er selv disabled inne i et dempet felt.",min:0,max:8,defaultValue:0,stepper:!0,disabled:!0}),e.jsx(y,{label:"Dato, disabled",labelProps:{srOnly:!1},description:"Kalendertriggeren er en disabled knapp inne i et dempet felt.",defaultValue:p,disabled:!0}),e.jsx(y,{label:"Dato, readOnly",labelProps:{srOnly:!1},description:"Dempet trigger i et felt med full kontrast.",defaultValue:p,readOnly:!0}),e.jsxs(G,{legend:"Disabled gruppe",labelProps:{variant:"small"},description:"Checkboxene er disabled hver for seg i tillegg til gruppen.",disabled:!0,children:[e.jsx(m,{name:"nostet-varsel",value:"sms",defaultChecked:!0,disabled:!0,children:"SMS"}),e.jsx(m,{name:"nostet-varsel-epost",value:"epost",disabled:!0,children:"E-post"})]}),e.jsx(C,{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling.",amount:"229 kr/mnd",name:"nostet-dekning",value:"livsforsikring",defaultChecked:!0,disabled:!0}),e.jsxs(z,{legend:"Dekning",labelProps:{srOnly:!1,variant:"small"},children:[e.jsx(R,{name:"nostet-dekkes",value:"dekkes",defaultChecked:!0,disabled:!0,children:"Dekkes"}),e.jsx(R,{name:"nostet-dekkes",value:"dekkes-ikke",disabled:!0,children:"Dekkes ikke"})]})]})},g={name:"Tetthet og tilstand",render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:["small","medium","large"].map(n=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-16)"},children:[e.jsx(h,{size:"s",as:"h3",children:n}),e.jsxs(j,{columns:["Normal","Disabled","ReadOnly"],children:[e.jsx(r,{name:"TextInput",children:l.map(a=>e.jsx(s,{"data-size":n,label:"E-post",defaultValue:"ola.nordmann@eksempel.no",...a.props},a.suffix))}),e.jsx(r,{name:"NumberInput",children:l.map(a=>e.jsx(o,{"data-size":n,label:"Antall reisende",min:0,max:8,defaultValue:2,stepper:!0,...a.props},a.suffix))}),e.jsx(r,{name:"Select",children:l.map(a=>e.jsx(w,{"data-size":n,label:"Hvilken forsikring?",items:i,defaultValue:"reise",...a.props},a.suffix))})]})]},n))})},b={name:"Label, tooltip og inline",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)",maxWidth:"24rem"},children:[e.jsx(s,{label:"Fødselsnummer",tooltip:e.jsx(O,{content:"Vi bruker fødselsnummeret til å hente opplysninger fra Folkeregisteret."}),defaultValue:"01019012345",disabled:!0}),e.jsx(s,{label:"Kundenummer",tooltip:e.jsx(O,{content:"Kundenummeret finner du øverst på fakturaen."}),defaultValue:"1234 5678",readOnly:!0}),e.jsx(s,{label:"Skjult label, readOnly",labelProps:{srOnly:!0},defaultValue:"Verdien står alene uten synlig label",readOnly:!0}),e.jsxs("div",{children:[e.jsx(d,{size:"s",children:"inline + disabled"}),e.jsxs(d,{children:["Vi forsikrer"," ",e.jsx(s,{label:"Antall biler",inline:!0,width:"4ch",defaultValue:"2",disabled:!0})," ","biler for deg."]})]}),e.jsxs("div",{children:[e.jsx(d,{size:"s",children:"inline + errorLabel"}),e.jsxs(d,{children:["Vi forsikrer"," ",e.jsx(s,{label:"Antall biler",errorLabel:"Du må oppgi minst én bil",inline:!0,width:"4ch",defaultValue:""})," ","biler for deg."]})]})]})},x={name:"Tomme og lange verdier",render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:e.jsxs(j,{columns:["Normal","Disabled","ReadOnly"],children:[e.jsx(r,{name:"Tom med placeholder",children:l.map(n=>e.jsx(s,{label:"E-post",placeholder:"ola.nordmann@eksempel.no",value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(r,{name:"Tom og invalid",children:l.map(n=>e.jsx(s,{label:"E-post",placeholder:"ola.nordmann@eksempel.no",errorLabel:"Du må oppgi en e-postadresse",value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(r,{name:"Lang verdi",children:l.map(n=>e.jsx(s,{label:"Adresse",width:"16ch",defaultValue:"Nedre Storgate 42B, 3015 Drammen",...n.props},n.suffix))}),e.jsx(r,{name:"maxLength",children:l.map(n=>e.jsx(s,{label:"Kontonummer",maxLength:11,defaultValue:"12345678903",...n.props},n.suffix))}),e.jsx(r,{name:"Lang i TextArea",children:l.map(n=>e.jsx(T,{label:"Beskriv skaden",rows:2,defaultValue:"Bilen ble påkjørt bakfra i et veikryss, og både støtfanger og bakluke fikk synlige skader som må vurderes av verksted.",...n.props},n.suffix))})]})})},v={name:"Datoavgrensing demper ikke feltet",render:()=>e.jsx(y,{label:"Når skal du reise?",labelProps:{srOnly:!1},description:"Du kan bare velge datoer innenfor de neste 14 dagene.",defaultValue:p,min:p,max:A(new Date(new Date().setDate(new Date().getDate()+14)))})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
                                {column.suffix === "readonly" && !row.supportsReadOnly ? <IkkeRelevant /> : row.render({
            ...column.props,
            idSuffix: \`\${row.name}-\${column.suffix}\`
          })}
                            </div>)}
                    </React.Fragment>)}
            </div>

            <Title size="m" as="h2">
                Tomme felter med placeholder
            </Title>
            <Grid columns={["Normal", "Disabled", "ReadOnly"]}>
                <Row name="TextInput">
                    {columns.map(column => <TextInput key={column.suffix} label="E-post" placeholder="ola.nordmann@eksempel.no" value="" onChange={() => undefined} {...column.props} />)}
                </Row>
                <Row name="TextArea">
                    {columns.map(column => <TextArea key={column.suffix} label="Beskriv skaden" placeholder="Ta med tid, sted og hva som skjedde." rows={3} value="" onChange={() => undefined} {...column.props} />)}
                </Row>
                <Row name="Select">
                    {columns.map(column =>
        // Placeholderen er knappeteksten, ikke en native placeholder.
        column.suffix === "readonly" ? <IkkeRelevant key={column.suffix} /> : <Select key={column.suffix} label="Hvilken forsikring gjelder det?" placeholder="Velg forsikring" items={forsikringer} disabled={column.props.disabled} />)}
                </Row>
                <Row name="NumberInput">
                    {columns.map(column => <NumberInput key={column.suffix} label="Antall reisende" placeholder="2" min={0} max={8} stepper value="" onChange={() => undefined} {...column.props} />)}
                </Row>
                <Row name="Search">
                    {columns.map(column => <Search key={column.suffix} label="Søk" labelProps={{
          srOnly: false
        }} placeholder="Søk etter forsikring" value="" onChange={() => undefined} {...column.props} />)}
                </Row>
                <Row name="Combobox">
                    {columns.map(column => <Combobox key={column.suffix} label="Hvilke forsikringer gjelder det?" name={\`combobox-placeholder-\${column.suffix}\`} placeholder="Velg forsikringer" items={forsikringer} value={[]} width="20ch" onChange={() => undefined} {...column.props} />)}
                </Row>
                <Row name="TextInput + actionButton">
                    {columns.map(column => <TextInput key={column.suffix} label="Kundenummer" placeholder="1234 5678" value="" onChange={() => undefined} {...column.props} actionButton={<IconButton title="Kopier kundenummer" disabled={column.props.disabled}>
                                    <CopyIcon />
                                </IconButton>} />)}
                </Row>
            </Grid>
        </div>
}`,...u.parameters?.docs?.source},description:{story:`Placeholderen vises bare i et tomt felt, så fylte og tomme felter må stå ved
siden av hverandre: det fylte rutenettet viser tekstkontrasten, det tomme viser
placeholderfargen. \`--placeholder-color\` er \`text-subdued\`, og i disabled-kolonnen
dempes den i tillegg til 50 % — den kombinasjonen er den svakeste teksten i
designsystemet.

DateInput mangler i det tomme rutenettet med vilje. Feltet er \`type="date"\`, og
nettleseren ignorerer \`placeholder\` på datofelter til fordel for sitt eget
\`dd.mm.åååå\`-hint.

To felter har placeholder også når du ikke ber om det: TextArea bruker et
mellomrom, som trengs sammen med \`rows\` for den ekspanderende effekten, og Search
bruker «Søk». Select og Combobox har ingen native placeholder — Select viser
teksten i knappen, Combobox blanker sin egen så snart noe er valgt.`,...u.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:"`aria-invalid` utledes av `errorLabel` — det finnes ingen `invalid`-prop på\nskjemafeltene. Unntakene er Combobox, som har en egen `invalid` ved siden av\n`errorLabel`, og panelene, som ikke har `errorLabel` i det hele tatt og derfor\nmå få `aria-invalid` direkte.\n\nDen røde rammen vinner over den dempede read-only-rammen, fordi invalid-regelen\nhar høyere spesifisitet enn read-only-hooken. På en disabled kontroll beholdes\nden røde rammen, men dempet til 50 %. InputPanel er unntaket: der nullstilles\nden røde rammen når panelet er disabled.",...f.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "NumberInput utenfor grensen",
  render: () => <Grid columns={["Normal", "Disabled", "ReadOnly"]}>
            <Row name="Uten errorLabel">
                {columns.map(column => <NumberInput key={column.suffix} label="Antall reisende" min={0} max={8} defaultValue={20} stepper {...column.props} />)}
            </Row>
            <Row name="Med errorLabel">
                {columns.map(column => <NumberInput key={column.suffix} label="Antall reisende" errorLabel="Du kan legge til opptil 8 personer" min={0} max={8} defaultValue={20} stepper {...column.props} />)}
            </Row>
        </Grid>
}`,...k.parameters?.docs?.source},description:{story:"Verdien bryter `max`, så nettleseren matcher `:invalid` og gir feltet rød\nbakgrunn. Disabled og readOnly felter er unntatt native constraint validation,\nså `:invalid` slutter å matche og bakgrunnen forsvinner.\n\nKan feltet være låst, må feilmeldingen komme fra `errorLabel` — native\nvalidering alene er ikke nok.",...k.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"`disabled-control` demper til 50 % og nullstiller `--jkl-nested-disabled-opacity`\npå etterkommerne, slik at en disabled kontroll inne i en disabled flate ikke\nblir dempet to ganger. Alt her skal lese 50 %, aldri 25 %.",...c.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Tilstandene skal se like ut i alle tettheter.",...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Labelen og kontrollen behandles ulikt. Tooltipen hører til labelen, så den\nbeholder full kontrast og kan åpnes selv om kontrollen er låst.\n\n`inline` tvinger `srOnly` på både label og støttetekst. Med `inline` blir\naltså en `errorLabel` usynlig — den finnes bare for skjermlesere.",...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Placeholderfargen styres av `--placeholder-color`, som invalid-regelen også\noverskriver. Lange verdier skal klippes av feltet, ikke flyte ut av det.",...x.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Datoavgrensing demper ikke feltet",
  render: () => <DateInput label="Når skal du reise?" labelProps={{
    srOnly: false
  }} description="Du kan bare velge datoer innenfor de neste 14 dagene." defaultValue={today} min={today} max={toValidInputValue(new Date(new Date().setDate(new Date().getDate() + 14)))} />
}`,...v.parameters?.docs?.source},description:{story:"Kalenderen i DateInput inneholder disabled dag-inputs for datoer utenfor\n`min`/`max`. Feltet under er ikke disabled og skal derfor ha full kontrast —\nblir det dempet, treffer disabled-selectoren for bredt.",...v.parameters?.docs?.description}}};const ln=["AlleTilstander","DisabledOgInvalid","NumberInputUtenforGrense","NøstetDisabled","TetthetOgTilstand","LabelTooltipOgInline","TommeOgLangeVerdier","DatoavgrensingDemperIkkeFeltet"];export{u as AlleTilstander,v as DatoavgrensingDemperIkkeFeltet,f as DisabledOgInvalid,b as LabelTooltipOgInline,k as NumberInputUtenforGrense,c as NøstetDisabled,g as TetthetOgTilstand,x as TommeOgLangeVerdier,ln as __namedExportsOrder,rn as default};
