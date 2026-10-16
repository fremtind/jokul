import{j as e,R as H}from"./iframe-BluD2y5g.js";import{G as m,R as a}from"./stateGrid-WQBLO1X2.js";import{T as R}from"./Title-gkAEVevz.js";import{T as s}from"./TextInput-p3Flpm93.js";import{T as w}from"./TextArea-DgpYjxHp.js";import{S as I}from"./Select-Fs4Bou6o.js";import{N as o}from"./NumberInput-6sUIelhs.js";import{S as V}from"./Search-Df_amlk7.js";import{C}from"./Combobox-BF6ObpX5.js";import{I as A}from"./IconButton-BZ4zeUNb.js";import{C as N}from"./CopyIcon-CTWdGlyF.js";import{D as j,t as B}from"./DateInput-BHo8h9yb.js";import{C as D}from"./CheckboxPanel-BBzYRI-3.js";import{R as G}from"./RadioPanel-DHlt5OEB.js";import{P as S}from"./PopupTip-BALPCqHe.js";import{T as h}from"./Text-Drke1_hS.js";import{F}from"./FieldGroup-L6KxTIWe.js";import{C as d}from"./Checkbox-B637ZDxp.js";import{S as $,a as T}from"./SegmentedControlButton-0oY9krJv.js";import{F as E}from"./FileInput-C3C3JZLN.js";import{R as O}from"./RadioButton-DrqbN2PC.js";import{T as L}from"./ToggleSwitch-UA6zbH3y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-D7CFmTiR.js";import"./useId-CqDn8-2e.js";import"./Label-BuBxX9pA.js";import"./SupportLabel-CuwoYV1K.js";import"./SuccessIcon-De2Rf2HP.js";import"./Icon-kqGXX5uY.js";import"./WarningIcon-BvUiAEtD.js";import"./BaseTextInput-3yLPs4tR.js";import"./mergeRefs-CLpafj6m.js";import"./Button-BZjykdVU.js";import"./usePreviousValue-BbleQHP3.js";import"./Loader-Boup7Z4s.js";import"./useDelayedRender-NECEF8kA.js";import"./Flex-BEXagI8H.js";import"./SlotComponent-BhFqMO8i.js";import"./useListNavigation-DwhTreHd.js";import"./ArrowDownIcon-DuwEs9a-.js";import"./CloseIcon-Fvd7iKu-.js";import"./PlusIcon-DoOGhQhA.js";import"./MinusIcon-PnKbBh_3.js";import"./useAnimatedHeight-c8sxQ045.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Bi9Y6njz.js";import"./Chip-DNauBQFT.js";import"./CheckIcon-BsRBRY0Z.js";import"./ArrowVerticalAnimated-BEDmrzL1.js";import"./TooltipTrigger-C71H4jqG.js";import"./floating-ui.react-BfYA8F-T.js";import"./index-VO3XEULM.js";import"./index-CeaZETLJ.js";import"./TooltipContent-DQ0kCxy4.js";import"./getThemeAndSize-CZAj3IXt.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BGCXpquZ.js";import"./TableCaption-B4FTyzCs.js";import"./tableContext-CdK22oRm.js";import"./CalendarIcon-BBiXYhJN.js";import"./InputPanel-CwcCl1TQ.js";import"./QuestionIcon-BSes4oaW.js";import"./fileInputContext-D-bodG1N.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./BaseRadioButton-BZ89SPLB.js";import"./useSwipeGesture-DIAYzG27.js";const ln={title:"Mønstre/Tilstander på skjemafelter",parameters:{layout:"padded",docs:{description:{component:"Disabled dempes til 50 %, readOnly får en dempet ramme med full tekstkontrast. Begge legges på selve kontrollen — label, beskrivelse og støttetekst beholder full kontrast. readOnly får i tillegg et låseikon rett bak label-teksten, foran et eventuelt tooltip; felter med skjult label får ingen lås."}}},tags:["forms"]},p=B(new Date),i=[{value:"reise",label:"Reiseforsikring"},{value:"bil",label:"Bilforsikring"},{value:"hus",label:"Husforsikring"}],K=[{name:"TextInput",supportsReadOnly:!0,render:({disabled:n,readOnly:r})=>e.jsx(s,{label:"E-post",helpLabel:"Vi bruker adressen til å sende deg polisen.",defaultValue:"ola.nordmann@eksempel.no",disabled:n,readOnly:r})},{name:"TextArea",supportsReadOnly:!0,render:({disabled:n,readOnly:r})=>e.jsx(w,{label:"Beskriv skaden",helpLabel:"Ta med tid, sted og hva som skjedde.",defaultValue:"Bilen ble påkjørt bakfra i et veikryss.",rows:3,disabled:n,readOnly:r})},{name:"Select",supportsReadOnly:!1,render:({disabled:n})=>e.jsx(I,{label:"Hvilken forsikring gjelder det?",helpLabel:"Velg den avtalen saken hører til.",items:i,defaultValue:"reise",disabled:n})},{name:"DateInput",supportsReadOnly:!0,render:({disabled:n,readOnly:r})=>e.jsx(j,{label:"Når skjedde skaden?",helpLabel:"Oppgi datoen så nøyaktig du kan.",labelProps:{srOnly:!1},defaultValue:p,disabled:n,readOnly:r})},{name:"NumberInput",supportsReadOnly:!0,render:({disabled:n,readOnly:r})=>e.jsx(o,{label:"Antall reisende",helpLabel:"Du kan legge til opptil 8 personer.",min:0,max:8,defaultValue:2,stepper:!0,disabled:n,readOnly:r})},{name:"Search",supportsReadOnly:!0,render:({disabled:n,readOnly:r})=>e.jsx(V,{label:"Søk",labelProps:{srOnly:!1},defaultValue:"Reiseforsikring",disabled:n,readOnly:r})},{name:"Combobox",supportsReadOnly:!0,render:({disabled:n,readOnly:r,idSuffix:z})=>e.jsx(C,{label:"Hvilke forsikringer gjelder det?",name:`combobox-${z}`,items:i,value:[i[0]],width:"20ch",onChange:()=>{},disabled:n,readOnly:r})},{name:"TextInput + actionButton",supportsReadOnly:!0,render:({disabled:n,readOnly:r})=>e.jsx(s,{label:"Kundenummer",defaultValue:"1234 5678",disabled:n,readOnly:r,actionButton:e.jsx(A,{title:"Kopier kundenummer",disabled:n,children:e.jsx(N,{})})})},{name:"FileInput",supportsReadOnly:!1,render:({disabled:n})=>e.jsx(E,{legend:"Legg til dokumentasjon",labelProps:{variant:"small"},variant:"small",accept:"image/*,.pdf",value:[],onChange:()=>{},disabled:n})},{name:"FieldGroup",supportsReadOnly:!1,render:({disabled:n,idSuffix:r})=>e.jsxs(F,{legend:"Hva vil du varsles om?",labelProps:{variant:"small"},disabled:n,children:[e.jsx(d,{name:`varsel-${r}`,value:"sms",defaultChecked:!0,children:"SMS"}),e.jsx(d,{name:`varsel-epost-${r}`,value:"epost",children:"E-post"})]})},{name:"Checkbox",supportsReadOnly:!1,render:({disabled:n,idSuffix:r})=>e.jsxs(e.Fragment,{children:[e.jsx(d,{name:`samtykke-${r}`,value:"ja",defaultChecked:!0,disabled:n,children:"Avkrysset"}),e.jsx(d,{name:`samtykke-av-${r}`,value:"nei",disabled:n,children:"Ikke avkrysset"})]})},{name:"RadioButton",supportsReadOnly:!1,render:({disabled:n,idSuffix:r})=>e.jsxs(e.Fragment,{children:[e.jsx(O,{name:`kontakt-${r}`,value:"epost",defaultChecked:!0,disabled:n,children:"Valgt"}),e.jsx(O,{name:`kontakt-${r}`,value:"sms",disabled:n,children:"Ikke valgt"})]})},{name:"ToggleSwitch",supportsReadOnly:!1,render:({disabled:n})=>e.jsxs(e.Fragment,{children:[e.jsx(L,{"aria-pressed":!0,disabled:n,children:"På"}),e.jsx(L,{"aria-pressed":!1,disabled:n,children:"Av"})]})},{name:"CheckboxPanel",supportsReadOnly:!1,render:({disabled:n,idSuffix:r})=>e.jsx(D,{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling.",amount:"229 kr/mnd",name:`dekning-${r}`,value:"livsforsikring",defaultChecked:!0,disabled:n})},{name:"RadioPanel",supportsReadOnly:!1,render:({disabled:n,idSuffix:r})=>e.jsx(G,{label:"Uføreforsikring",description:"Gir deg månedlig utbetaling hvis du blir ufør.",amount:"312 kr/mnd",name:`forsikring-${r}`,value:"uforeforsikring",defaultChecked:!0,disabled:n})},{name:"SegmentedControl",supportsReadOnly:!1,render:({disabled:n,idSuffix:r})=>e.jsxs($,{legend:"Dekning",labelProps:{srOnly:!1,variant:"small"},children:[e.jsx(T,{name:`dekkes-${r}`,value:"dekkes",defaultChecked:!0,disabled:n,children:"Dekkes"}),e.jsx(T,{name:`dekkes-${r}`,value:"dekkes-ikke",disabled:n,children:"Dekkes ikke"})]})}],l=[{heading:"Normal",suffix:"normal",props:{}},{heading:"Disabled",suffix:"disabled",props:{disabled:!0}},{heading:"ReadOnly",suffix:"readonly",props:{readOnly:!0}}],y=l.map(n=>n.heading),P=()=>e.jsx(h,{size:"s",style:{color:"var(--jkl-color-text-subdued)"},children:"Ikke relevant"}),u={name:"Alle tilstander",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:[e.jsx(R,{size:"m",as:"h2",children:"Normal, disabled og readOnly"}),e.jsx(m,{columns:y,children:K.map(n=>e.jsx(a,{name:n.name,children:l.map(r=>r.suffix==="readonly"&&!n.supportsReadOnly?e.jsx(P,{},r.suffix):e.jsx(H.Fragment,{children:n.render({...r.props,idSuffix:`${n.name}-${r.suffix}`})},r.suffix))},n.name))}),e.jsx(R,{size:"m",as:"h2",children:"Tomme felter med placeholder"}),e.jsxs(m,{columns:y,children:[e.jsx(a,{name:"TextInput",children:l.map(n=>e.jsx(s,{label:"E-post",placeholder:"ola.nordmann@eksempel.no",value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(a,{name:"TextArea",children:l.map(n=>e.jsx(w,{label:"Beskriv skaden",placeholder:"Ta med tid, sted og hva som skjedde.",rows:3,value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(a,{name:"Select",children:l.map(n=>n.suffix==="readonly"?e.jsx(P,{},n.suffix):e.jsx(I,{label:"Hvilken forsikring gjelder det?",placeholder:"Velg forsikring",items:i,disabled:n.props.disabled},n.suffix))}),e.jsx(a,{name:"NumberInput",children:l.map(n=>e.jsx(o,{label:"Antall reisende",placeholder:"2",min:0,max:8,stepper:!0,value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(a,{name:"Search",children:l.map(n=>e.jsx(V,{label:"Søk",labelProps:{srOnly:!1},placeholder:"Søk etter forsikring",value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(a,{name:"Combobox",children:l.map(n=>e.jsx(C,{label:"Hvilke forsikringer gjelder det?",name:`combobox-placeholder-${n.suffix}`,placeholder:"Velg forsikringer",items:i,value:[],width:"20ch",onChange:()=>{},...n.props},n.suffix))}),e.jsx(a,{name:"TextInput + actionButton",children:l.map(n=>e.jsx(s,{label:"Kundenummer",placeholder:"1234 5678",value:"",onChange:()=>{},...n.props,actionButton:e.jsx(A,{title:"Kopier kundenummer",disabled:n.props.disabled,children:e.jsx(N,{})})},n.suffix))})]})]})},t=l.map(n=>({suffix:`invalid-${n.suffix}`,props:n.props})),f={name:"Disabled og invalid",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:[e.jsx(R,{size:"m",as:"h2",children:"Feilmelding kombinert med låst felt"}),e.jsxs(m,{columns:["Invalid","Invalid + disabled","Invalid + readOnly"],children:[e.jsx(a,{name:"TextInput",children:t.map(n=>e.jsx(s,{label:"E-post",errorLabel:"Adressen mangler @",defaultValue:"ola.nordmann",...n.props},n.suffix))}),e.jsx(a,{name:"TextArea",children:t.map(n=>e.jsx(w,{label:"Beskriv skaden",errorLabel:"Beskrivelsen er for kort",defaultValue:"Påkjørt",rows:2,...n.props},n.suffix))}),e.jsx(a,{name:"Select",children:t.map(n=>e.jsx(I,{label:"Hvilken forsikring?",errorLabel:"Du må velge en forsikring",items:i,...n.props},n.suffix))}),e.jsx(a,{name:"DateInput",children:t.map(n=>e.jsx(j,{label:"Når skjedde skaden?",labelProps:{srOnly:!1},errorLabel:"Datoen kan ikke være frem i tid",defaultValue:p,...n.props},n.suffix))}),e.jsx(a,{name:"NumberInput",children:t.map(n=>e.jsx(o,{label:"Antall reisende",errorLabel:"Maks 8 reisende",defaultValue:2,stepper:!0,...n.props},n.suffix))}),e.jsx(a,{name:"Search",children:t.map(n=>e.jsx(V,{label:"Søk",labelProps:{srOnly:!1},errorLabel:"Søket ga ingen treff",defaultValue:"Reiseforsikring",...n.props},n.suffix))}),e.jsx(a,{name:"Combobox",children:t.map(n=>e.jsx(C,{label:"Hvilke forsikringer?",name:`combobox-${n.suffix}`,items:i,value:[],width:"20ch",errorLabel:"Velg minst én forsikring",invalid:!0,onChange:()=>{},...n.props},n.suffix))}),e.jsx(a,{name:"CheckboxPanel",children:t.map(n=>e.jsx(D,{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling.",amount:"229 kr/mnd",name:`dekning-${n.suffix}`,value:"livsforsikring","aria-invalid":!0,...n.props},n.suffix))}),e.jsx(a,{name:"RadioPanel",children:t.map(n=>e.jsx(G,{label:"Uføreforsikring",description:"Gir deg månedlig utbetaling hvis du blir ufør.",amount:"312 kr/mnd",name:`forsikring-${n.suffix}`,value:"uforeforsikring","aria-invalid":!0,...n.props},n.suffix))})]})]})},k={name:"NumberInput utenfor grensen",render:()=>e.jsxs(m,{columns:y,children:[e.jsx(a,{name:"Uten errorLabel",children:l.map(n=>e.jsx(o,{label:"Antall reisende",min:0,max:8,defaultValue:20,stepper:!0,...n.props},n.suffix))}),e.jsx(a,{name:"Med errorLabel",children:l.map(n=>e.jsx(o,{label:"Antall reisende",errorLabel:"Du kan legge til opptil 8 personer",min:0,max:8,defaultValue:20,stepper:!0,...n.props},n.suffix))})]})},c={name:"Nøstet disabled",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)",maxWidth:"24rem"},children:[e.jsx(o,{label:"Antall reisende på minimum",description:"Decrement-knappen er selv disabled inne i et dempet felt.",min:0,max:8,defaultValue:0,stepper:!0,disabled:!0}),e.jsx(j,{label:"Dato, disabled",labelProps:{srOnly:!1},description:"Kalendertriggeren er en disabled knapp inne i et dempet felt.",defaultValue:p,disabled:!0}),e.jsx(j,{label:"Dato, readOnly",labelProps:{srOnly:!1},description:"Dempet trigger i et felt med full kontrast.",defaultValue:p,readOnly:!0}),e.jsxs(F,{legend:"Disabled gruppe",labelProps:{variant:"small"},description:"Checkboxene er disabled hver for seg i tillegg til gruppen.",disabled:!0,children:[e.jsx(d,{name:"nostet-varsel",value:"sms",defaultChecked:!0,disabled:!0,children:"SMS"}),e.jsx(d,{name:"nostet-varsel-epost",value:"epost",disabled:!0,children:"E-post"})]}),e.jsx(D,{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling.",amount:"229 kr/mnd",name:"nostet-dekning",value:"livsforsikring",defaultChecked:!0,disabled:!0}),e.jsxs($,{legend:"Dekning",labelProps:{srOnly:!1,variant:"small"},children:[e.jsx(T,{name:"nostet-dekkes",value:"dekkes",defaultChecked:!0,disabled:!0,children:"Dekkes"}),e.jsx(T,{name:"nostet-dekkes",value:"dekkes-ikke",disabled:!0,children:"Dekkes ikke"})]})]})},g={name:"Tetthet og tilstand",render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:["small","medium","large"].map(n=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-16)"},children:[e.jsx(R,{size:"s",as:"h3",children:n}),e.jsxs(m,{columns:y,children:[e.jsx(a,{name:"TextInput",children:l.map(r=>e.jsx(s,{"data-size":n,label:"E-post",defaultValue:"ola.nordmann@eksempel.no",...r.props},r.suffix))}),e.jsx(a,{name:"NumberInput",children:l.map(r=>e.jsx(o,{"data-size":n,label:"Antall reisende",min:0,max:8,defaultValue:2,stepper:!0,...r.props},r.suffix))}),e.jsx(a,{name:"Select",children:l.map(r=>e.jsx(I,{"data-size":n,label:"Hvilken forsikring?",items:i,defaultValue:"reise",...r.props},r.suffix))})]})]},n))})},b={name:"Label, tooltip og inline",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)",maxWidth:"24rem"},children:[e.jsx(s,{label:"Fødselsnummer",tooltip:e.jsx(S,{content:"Vi bruker fødselsnummeret til å hente opplysninger fra Folkeregisteret."}),defaultValue:"01019012345",disabled:!0}),e.jsx(s,{label:"Kundenummer",tooltip:e.jsx(S,{content:"Kundenummeret finner du øverst på fakturaen."}),defaultValue:"1234 5678",readOnly:!0}),e.jsx(s,{label:"Skjult label, readOnly",labelProps:{srOnly:!0},defaultValue:"Verdien står alene uten synlig label",readOnly:!0}),e.jsxs("div",{children:[e.jsx(h,{size:"s",children:"inline + disabled"}),e.jsxs(h,{children:["Vi forsikrer"," ",e.jsx(s,{label:"Antall biler",inline:!0,width:"4ch",defaultValue:"2",disabled:!0})," ","biler for deg."]})]}),e.jsxs("div",{children:[e.jsx(h,{size:"s",children:"inline + errorLabel"}),e.jsxs(h,{children:["Vi forsikrer"," ",e.jsx(s,{label:"Antall biler",errorLabel:"Du må oppgi minst én bil",inline:!0,width:"4ch",defaultValue:""})," ","biler for deg."]})]})]})},x={name:"Tomme og lange verdier",render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:e.jsxs(m,{columns:y,children:[e.jsx(a,{name:"Tom med placeholder",children:l.map(n=>e.jsx(s,{label:"E-post",placeholder:"ola.nordmann@eksempel.no",value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(a,{name:"Tom og invalid",children:l.map(n=>e.jsx(s,{label:"E-post",placeholder:"ola.nordmann@eksempel.no",errorLabel:"Du må oppgi en e-postadresse",value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(a,{name:"Lang verdi",children:l.map(n=>e.jsx(s,{label:"Adresse",width:"16ch",defaultValue:"Nedre Storgate 42B, 3015 Drammen",...n.props},n.suffix))}),e.jsx(a,{name:"maxLength",children:l.map(n=>e.jsx(s,{label:"Kontonummer",maxLength:11,defaultValue:"12345678903",...n.props},n.suffix))}),e.jsx(a,{name:"Lang i TextArea",children:l.map(n=>e.jsx(w,{label:"Beskriv skaden",rows:2,defaultValue:"Bilen ble påkjørt bakfra i et veikryss, og både støtfanger og bakluke fikk synlige skader som må vurderes av verksted.",...n.props},n.suffix))})]})})},v={name:"Datoavgrensing demper ikke feltet",render:()=>e.jsx(j,{label:"Når skal du reise?",labelProps:{srOnly:!1},description:"Du kan bare velge datoer innenfor de neste 14 dagene.",defaultValue:p,min:p,max:B(new Date(new Date().setDate(new Date().getDate()+14)))})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Alle tilstander",
  render: () => <div style={{
    display: "grid",
    gap: "var(--jkl-spacing-32)"
  }}>
            <Title size="m" as="h2">
                Normal, disabled og readOnly
            </Title>
            <Grid columns={stateHeadings}>
                {rows.map(row => <Row key={row.name} name={row.name}>
                        {columns.map(column => column.suffix === "readonly" && !row.supportsReadOnly ? <IkkeRelevant key={column.suffix} /> : <React.Fragment key={column.suffix}>
                                    {row.render({
            ...column.props,
            idSuffix: \`\${row.name}-\${column.suffix}\`
          })}
                                </React.Fragment>)}
                    </Row>)}
            </Grid>

            <Title size="m" as="h2">
                Tomme felter med placeholder
            </Title>
            <Grid columns={stateHeadings}>
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
  render: () => <Grid columns={stateHeadings}>
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
                    <Grid columns={stateHeadings}>
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
            <Grid columns={stateHeadings}>
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
}`,...v.parameters?.docs?.source},description:{story:"Kalenderen i DateInput inneholder disabled dag-inputs for datoer utenfor\n`min`/`max`. Feltet under er ikke disabled og skal derfor ha full kontrast —\nblir det dempet, treffer disabled-selectoren for bredt.",...v.parameters?.docs?.description}}};const sn=["AlleTilstander","DisabledOgInvalid","NumberInputUtenforGrense","NøstetDisabled","TetthetOgTilstand","LabelTooltipOgInline","TommeOgLangeVerdier","DatoavgrensingDemperIkkeFeltet"];export{u as AlleTilstander,v as DatoavgrensingDemperIkkeFeltet,f as DisabledOgInvalid,b as LabelTooltipOgInline,k as NumberInputUtenforGrense,c as NøstetDisabled,g as TetthetOgTilstand,x as TommeOgLangeVerdier,sn as __namedExportsOrder,ln as default};
