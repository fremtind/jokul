import{j as e,r as _}from"./iframe-Bb6hSxAD.js";import{c as z}from"./cow-CdXr5BwN.js";import{F as L}from"./File-BU9FvP42.js";import{S as s,E as n,a as r,A as B,b as l,d as t,p as O}from"./_index-BfTO8Wx0.js";import{H as T}from"./Help-NfUmaSbG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DECzcEeY.js";import"./SlotComponent-X6ko4yft.js";import"./mergeRefs-_7lZvp9j.js";import"./Text-B2QNQrN6.js";import"./Link-A39fTY-U.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./Button-BIesmK9f.js";import"./usePreviousValue-p-gqGbz3.js";import"./Loader-DpQqeLnz.js";import"./useDelayedRender-D9sz0mmN.js";import"./TrashCanIcon-Cy0e6Pwh.js";import"./Icon-BSvMylBh.js";import"./SupportLabel-CSd4AkXd.js";import"./SuccessIcon-CXewzJnl.js";import"./WarningIcon-DQW0lgOD.js";import"./FieldGroup-DeKz2z6j.js";import"./useId-o42BfMX2.js";import"./Label-CdtnS82U.js";const ae={title:"Komponenter/File Input/Props",parameters:{layout:"padded",docs:{description:{component:`Én story per prop på FileInput og File, med verdiene side om side. Overskriften over
hvert eksempel er koden som gir det.`}}}},j=[t("kvittering.jpg"),O("faktura.pdf")],v={name:"legend og labelProps",render:()=>e.jsxs(s,{children:[["small","medium","large"].map(i=>e.jsx(n,{kode:`labelProps={{ variant: "${i}" }}`,children:e.jsx(r,{legend:"Vedlegg",labelProps:{variant:i}})},i)),e.jsx(n,{kode:"labelProps={{ srOnly: true }}",children:e.jsx(r,{legend:"Vedlegg",labelProps:{srOnly:!0}})}),e.jsx(n,{kode:"labelProps={{ pageHeading: true }}",children:e.jsx(r,{legend:"Last opp kvitteringen",labelProps:{pageHeading:!0}})})]})},E={name:"tooltip",render:()=>e.jsxs(s,{children:[e.jsx(n,{kode:'tooltip={<Help buttonText="…">…</Help>}',children:e.jsx(r,{legend:"Vedlegg",tooltip:e.jsx(T,{buttonText:"Hva kan jeg laste opp?",children:"Du kan laste opp bilder og PDF-er."})})}),e.jsx(n,{kode:'tooltip={<Help showButtonText buttonText="…">…</Help>}',children:e.jsx(r,{legend:"Vedlegg",tooltip:e.jsx(T,{showButtonText:!0,buttonText:"Hva kan jeg laste opp?",children:"Bilder og PDF-er på opptil 8 MB."})})}),e.jsx(n,{kode:'tooltip={…} labelProps={{ variant: "large" }}',children:e.jsx(r,{legend:"Vedlegg",labelProps:{variant:"large"},tooltip:e.jsx(T,{buttonText:"Hva kan jeg laste opp?",children:"Du kan laste opp bilder og PDF-er."})})})]})},o={name:"description og maxSizeBytes",render:()=>e.jsxs(s,{children:[e.jsx(n,{kode:'description="…"',children:e.jsx(r,{legend:"Vedlegg",description:"Last opp kvitteringen for det du har kjøpt."})}),e.jsx(n,{kode:"maxSizeBytes={8_000_000}",children:e.jsx(r,{legend:"Vedlegg",maxSizeBytes:8e6})}),e.jsx(n,{kode:'description="…" maxSizeBytes={8_000_000}',children:e.jsx(r,{legend:"Vedlegg",description:"Last opp kvitteringen for det du har kjøpt.",maxSizeBytes:8e6})}),e.jsx(n,{kode:"maxSizeBytes={100_000} – prøv å legge til en fil",children:e.jsx(r,{legend:"Vedlegg",maxSizeBytes:1e5})})]})},p={name:"accept",render:()=>e.jsx(s,{children:["image/*",".pdf","image/*,.pdf","image/png,.docx"].map(i=>e.jsx(n,{kode:`accept="${i}"`,children:e.jsx(r,{legend:"Vedlegg",accept:i})},i))})},h={name:"multiple",render:()=>e.jsxs(s,{children:[e.jsx(n,{kode:"multiple={true} (standard)",children:e.jsx(r,{legend:"Vedlegg",filer:j})}),e.jsx(n,{kode:"multiple={false}",children:e.jsx(r,{legend:"Vedlegg",multiple:!1,filer:[t("kvittering.jpg")]})})]})},F={name:"fileVariant",render:()=>e.jsxs(s,{children:[e.jsx(n,{kode:'fileVariant="list" (standard)',children:e.jsx(r,{legend:"Vedlegg",filer:j})}),e.jsx(n,{kode:'fileVariant="card"',children:e.jsx(r,{legend:"Vedlegg",fileVariant:"card",filer:j})})]})},d={name:"errorLabel, helpLabel og supportLabelProps",render:()=>e.jsxs(s,{children:[e.jsx(n,{kode:'errorLabel="…"',children:e.jsx(r,{legend:"Vedlegg",errorLabel:"Du må legge ved kvitteringen"})}),e.jsx(n,{kode:'helpLabel="…" (utgått)',children:e.jsx(r,{legend:"Vedlegg",helpLabel:"Last opp kvitteringen for det du har kjøpt."})}),e.jsx(n,{kode:'errorLabel="…" supportLabelProps={{ srOnly: true }}',children:e.jsx(r,{legend:"Vedlegg",errorLabel:"Du må legge ved kvitteringen",supportLabelProps:{srOnly:!0}})})]})},g={name:"disabled",render:()=>e.jsxs(s,{children:[e.jsx(n,{kode:"disabled={false} (standard)",children:e.jsx(r,{legend:"Vedlegg",filer:j})}),e.jsx(n,{kode:"disabled={true}",children:e.jsx(r,{legend:"Vedlegg",disabled:!0,filer:j})})]})},m={name:"value og onChange",render:()=>{const[i,a]=_.useState([]);return e.jsxs(s,{children:[e.jsx(n,{kode:'accept="image/*,.pdf" maxSizeBytes={8_000_000}',children:e.jsx(r,{legend:"Vedlegg",accept:"image/*,.pdf",maxSizeBytes:8e6,onChange:(b,P)=>a(P)})}),e.jsx(n,{kode:"onChange={(e, files) => …} – files:",children:e.jsx("pre",{style:{fontSize:"0.8rem",whiteSpace:"pre-wrap"},children:JSON.stringify(i.map(({file:b,...P})=>({file:{name:b.name,type:b.type,size:b.size},...P})),null,2)})})]})}},c={name:"id, className, data-testautoid og trackingProps",render:()=>e.jsx(B,{selector:"fieldset, input[type=file]",children:e.jsx(r,{legend:"Vedlegg",id:"vedlegg",className:"min-klasse","data-testautoid":"vedlegg",accept:".pdf",trackingProps:{id:"skademelding-vedlegg",extra:{steg:"3"}}})})},S={name:"File: fileName, fileType og fileSize",render:()=>e.jsxs(s,{children:[e.jsx(n,{kode:'fileType="image/jpeg"',children:e.jsx(l,{fil:t("kvittering.jpg")})}),e.jsx(n,{kode:'fileType="application/pdf"',children:e.jsx(l,{fil:O("faktura.pdf")})}),e.jsx(n,{kode:'fileType="application/zip"',children:e.jsx(l,{fil:{navn:"bilder.zip",type:"application/zip",størrelse:52e6}})}),e.jsx(n,{kode:'fileType=""',children:e.jsx(l,{fil:{navn:"ukjent",størrelse:512}})})]})},k={name:"File: path og file",loaders:[async()=>{const i=await(await fetch(z)).blob();return{ku:new window.File([i],"ku.jpg",{type:"image/jpeg"})}}],render:(i,{loaded:{ku:a}})=>e.jsxs(s,{children:[e.jsx(n,{kode:"uten path og file",children:e.jsx(L,{fileName:"kvittering.jpg",fileType:"image/jpeg",fileSize:349e4})}),e.jsx(n,{kode:'path="/kvittering.jpg"',children:e.jsx(L,{fileName:"kvittering.jpg",fileType:"image/jpeg",fileSize:349e4,path:z})}),e.jsx(n,{kode:"file={file}",children:e.jsx(L,{fileName:a.name,fileType:a.type,fileSize:a.size,file:a})})]})},y={name:"File: state og uploadProgress",render:()=>e.jsxs(s,{children:[e.jsx(n,{kode:"state={undefined}",children:e.jsx(l,{fil:t("kvittering.jpg")})}),e.jsx(n,{kode:'state="loading"',children:e.jsx(l,{fil:t("kvittering.jpg",{state:"loading"})})}),[0,35,90].map(i=>e.jsx(n,{kode:`state="loading" uploadProgress={${i}}`,children:e.jsx(l,{fil:t("kvittering.jpg",{state:"loading",uploadProgress:i})})},i)),e.jsx(n,{kode:'state="error"',children:e.jsx(l,{fil:t("kvittering.jpg",{state:"error"})})})]})},u={name:"File: errorLabel",render:()=>e.jsxs(s,{children:[e.jsx(n,{kode:'state="error" (errorLabel="Feil" er standard)',children:e.jsx(l,{fil:t("kvittering.jpg",{state:"error"})})}),e.jsx(n,{kode:'state="error" errorLabel="…"',children:e.jsx(l,{fil:t("kvittering.jpg",{state:"error",errorLabel:"Filen er 12 MB, men kan maksimalt være 8 MB"})})}),e.jsx(n,{kode:'errorLabel="…" uten state="error"',children:e.jsx(l,{fil:t("kvittering.jpg",{errorLabel:"Vises ikke"})})})]})},f={name:"File: variant og hideThumbnail",render:()=>e.jsx(s,{children:["list","card"].flatMap(i=>[!1,!0].map(a=>e.jsx(n,{kode:`variant="${i}"${a?" hideThumbnail":""}`,children:e.jsx("div",{style:{maxWidth:i==="card"?"12rem":void 0},children:e.jsx(l,{fil:t("kvittering.jpg",{hideThumbnail:a}),variant:i,onRemove:()=>{}})})},`${i}-${a}`)))})},x={name:"File: onRemove",render:()=>e.jsxs(s,{children:[e.jsx(n,{kode:"uten onRemove",children:e.jsx(l,{fil:t("kvittering.jpg")})}),e.jsx(n,{kode:"onRemove={() => …}",children:e.jsx(l,{fil:t("kvittering.jpg"),onRemove:()=>{}})})]})},V={name:"File: trackingProps",render:()=>e.jsx(B,{selector:".jkl-file",children:e.jsx(l,{fil:t("kvittering.jpg"),trackingProps:{id:"kvittering",extra:{steg:"3"}}})})},oe=["LegendOgLabelProps","Tooltip","DescriptionOgMaxSizeBytes","Accept","Multiple","FileVariant","ErrorLabelOgSupportLabelProps","Disabled","ValueOgOnChange","Attributes","FileNavnTypeOgStorrelse","FilePathOgFile","FileStateOgUploadProgress","FileErrorLabel","FileVariantOgHideThumbnail","FileOnRemove","FileTrackingProps"];v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "legend og labelProps",
  render: () => <Sammenligning>
            {(["small", "medium", "large"] as const).map(variant => <Eksempel key={variant} kode={\`labelProps={{ variant: "\${variant}" }}\`}>
                    <EksempelFileInput legend="Vedlegg" labelProps={{
        variant
      }} />
                </Eksempel>)}
            <Eksempel kode="labelProps={{ srOnly: true }}">
                <EksempelFileInput legend="Vedlegg" labelProps={{
        srOnly: true
      }} />
            </Eksempel>
            <Eksempel kode="labelProps={{ pageHeading: true }}">
                <EksempelFileInput legend="Last opp kvitteringen" labelProps={{
        pageHeading: true
      }} />
            </Eksempel>
        </Sammenligning>
}`,...v.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "tooltip",
  render: () => <Sammenligning>
            <Eksempel kode={\`tooltip={<Help buttonText="…">…</Help>}\`}>
                <EksempelFileInput legend="Vedlegg" tooltip={<Help buttonText="Hva kan jeg laste opp?">
                            Du kan laste opp bilder og PDF-er.
                        </Help>} />
            </Eksempel>
            <Eksempel kode='tooltip={<Help showButtonText buttonText="…">…</Help>}'>
                <EksempelFileInput legend="Vedlegg" tooltip={<Help showButtonText buttonText="Hva kan jeg laste opp?">
                            Bilder og PDF-er på opptil 8 MB.
                        </Help>} />
            </Eksempel>
            <Eksempel kode='tooltip={…} labelProps={{ variant: "large" }}'>
                <EksempelFileInput legend="Vedlegg" labelProps={{
        variant: "large"
      }} tooltip={<Help buttonText="Hva kan jeg laste opp?">
                            Du kan laste opp bilder og PDF-er.
                        </Help>} />
            </Eksempel>
        </Sammenligning>
}`,...E.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "description og maxSizeBytes",
  render: () => <Sammenligning>
            <Eksempel kode='description="…"'>
                <EksempelFileInput legend="Vedlegg" description="Last opp kvitteringen for det du har kjøpt." />
            </Eksempel>
            <Eksempel kode="maxSizeBytes={8_000_000}">
                <EksempelFileInput legend="Vedlegg" maxSizeBytes={8_000_000} />
            </Eksempel>
            <Eksempel kode='description="…" maxSizeBytes={8_000_000}'>
                <EksempelFileInput legend="Vedlegg" description="Last opp kvitteringen for det du har kjøpt." maxSizeBytes={8_000_000} />
            </Eksempel>
            <Eksempel kode="maxSizeBytes={100_000} – prøv å legge til en fil">
                <EksempelFileInput legend="Vedlegg" maxSizeBytes={100_000} />
            </Eksempel>
        </Sammenligning>
}`,...o.parameters?.docs?.source},description:{story:"`maxSizeBytes` legger til «Maks … per fil.» etter `description`.",...o.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "accept",
  render: () => <Sammenligning>
            {["image/*", ".pdf", "image/*,.pdf", "image/png,.docx"].map(accept => <Eksempel key={accept} kode={\`accept="\${accept}"\`}>
                        <EksempelFileInput legend="Vedlegg" accept={accept} />
                    </Eksempel>)}
        </Sammenligning>
}`,...p.parameters?.docs?.source},description:{story:"`accept` vises ikke, men filer med feil type får en feilmelding. Prøv å legge til filer.",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "multiple",
  render: () => <Sammenligning>
            <Eksempel kode="multiple={true} (standard)">
                <EksempelFileInput legend="Vedlegg" filer={toFiler} />
            </Eksempel>
            <Eksempel kode="multiple={false}">
                <EksempelFileInput legend="Vedlegg" multiple={false} filer={[bilde("kvittering.jpg")]} />
            </Eksempel>
        </Sammenligning>
}`,...h.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "fileVariant",
  render: () => <Sammenligning>
            <Eksempel kode='fileVariant="list" (standard)'>
                <EksempelFileInput legend="Vedlegg" filer={toFiler} />
            </Eksempel>
            <Eksempel kode='fileVariant="card"'>
                <EksempelFileInput legend="Vedlegg" fileVariant="card" filer={toFiler} />
            </Eksempel>
        </Sammenligning>
}`,...F.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "errorLabel, helpLabel og supportLabelProps",
  render: () => <Sammenligning>
            <Eksempel kode='errorLabel="…"'>
                <EksempelFileInput legend="Vedlegg" errorLabel="Du må legge ved kvitteringen" />
            </Eksempel>
            <Eksempel kode='helpLabel="…" (utgått)'>
                <EksempelFileInput legend="Vedlegg" helpLabel="Last opp kvitteringen for det du har kjøpt." />
            </Eksempel>
            <Eksempel kode='errorLabel="…" supportLabelProps={{ srOnly: true }}'>
                <EksempelFileInput legend="Vedlegg" errorLabel="Du må legge ved kvitteringen" supportLabelProps={{
        srOnly: true
      }} />
            </Eksempel>
        </Sammenligning>
}`,...d.parameters?.docs?.source},description:{story:"`helpLabel` er utgått. Bruk `description`.",...d.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "disabled",
  render: () => <Sammenligning>
            <Eksempel kode="disabled={false} (standard)">
                <EksempelFileInput legend="Vedlegg" filer={toFiler} />
            </Eksempel>
            <Eksempel kode="disabled={true}">
                <EksempelFileInput legend="Vedlegg" disabled filer={toFiler} />
            </Eksempel>
        </Sammenligning>
}`,...g.parameters?.docs?.source},description:{story:"Ikke bruk i kundeflater, se beskrivelsen av `disabled`.",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "value og onChange",
  render: () => {
    const [siste, setSiste] = useState<UploadedFile[]>([]);
    return <Sammenligning>
                <Eksempel kode='accept="image/*,.pdf" maxSizeBytes={8_000_000}'>
                    <EksempelFileInput legend="Vedlegg" accept="image/*,.pdf" maxSizeBytes={8_000_000} onChange={(_, files) => setSiste(files)} />
                </Eksempel>
                <Eksempel kode="onChange={(e, files) => …} – files:">
                    <pre style={{
          fontSize: "0.8rem",
          whiteSpace: "pre-wrap"
        }}>
                        {JSON.stringify(siste.map(({
            file,
            ...rest
          }) => ({
            file: {
              name: file.name,
              type: file.type,
              size: file.size
            },
            ...rest
          })), null, 2)}
                    </pre>
                </Eksempel>
            </Sammenligning>;
  }
}`,...m.parameters?.docs?.source},description:{story:"Legg til filer og se hva `onChange` får. `value` er filene som vises.",...m.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "id, className, data-testautoid og trackingProps",
  render: () => <Attributter selector="fieldset, input[type=file]">
            <EksempelFileInput legend="Vedlegg" id="vedlegg" className="min-klasse" data-testautoid="vedlegg" accept=".pdf" trackingProps={{
      id: "skademelding-vedlegg",
      extra: {
        steg: "3"
      }
    }} />
        </Attributter>
}`,...c.parameters?.docs?.source},description:{story:"Hvor `id`, `className`, `data-testautoid` og `trackingProps` havner i DOM-en.",...c.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "File: fileName, fileType og fileSize",
  render: () => <Sammenligning>
            <Eksempel kode='fileType="image/jpeg"'>
                <FilVisning fil={bilde("kvittering.jpg")} />
            </Eksempel>
            <Eksempel kode='fileType="application/pdf"'>
                <FilVisning fil={pdf("faktura.pdf")} />
            </Eksempel>
            <Eksempel kode='fileType="application/zip"'>
                <FilVisning fil={{
        navn: "bilder.zip",
        type: "application/zip",
        størrelse: 52_000_000
      }} />
            </Eksempel>
            <Eksempel kode='fileType=""'>
                <FilVisning fil={{
        navn: "ukjent",
        størrelse: 512
      }} />
            </Eksempel>
        </Sammenligning>
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "File: path og file",
  loaders: [async () => {
    const blob = await (await fetch(cow.default)).blob();
    return {
      ku: new window.File([blob], "ku.jpg", {
        type: "image/jpeg"
      })
    };
  }],
  render: (_, {
    loaded: {
      ku
    }
  }) => <Sammenligning>
            <Eksempel kode="uten path og file">
                <File fileName="kvittering.jpg" fileType="image/jpeg" fileSize={3_490_000} />
            </Eksempel>
            <Eksempel kode='path="/kvittering.jpg"'>
                <File fileName="kvittering.jpg" fileType="image/jpeg" fileSize={3_490_000} path={cow.default} />
            </Eksempel>
            <Eksempel kode="file={file}">
                <File fileName={ku.name} fileType={ku.type} fileSize={ku.size} file={ku} />
            </Eksempel>
        </Sammenligning>
}`,...k.parameters?.docs?.source},description:{story:"Med `path` blir navnet en lenke. Med `file` lages forhåndsvisningen fra selve filen.",...k.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "File: state og uploadProgress",
  render: () => <Sammenligning>
            <Eksempel kode="state={undefined}">
                <FilVisning fil={bilde("kvittering.jpg")} />
            </Eksempel>
            <Eksempel kode='state="loading"'>
                <FilVisning fil={bilde("kvittering.jpg", {
        state: "loading"
      })} />
            </Eksempel>
            {[0, 35, 90].map(uploadProgress => <Eksempel key={uploadProgress} kode={\`state="loading" uploadProgress={\${uploadProgress}}\`}>
                    <FilVisning fil={bilde("kvittering.jpg", {
        state: "loading",
        uploadProgress
      })} />
                </Eksempel>)}
            <Eksempel kode='state="error"'>
                <FilVisning fil={bilde("kvittering.jpg", {
        state: "error"
      })} />
            </Eksempel>
        </Sammenligning>
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "File: errorLabel",
  render: () => <Sammenligning>
            <Eksempel kode='state="error" (errorLabel="Feil" er standard)'>
                <FilVisning fil={bilde("kvittering.jpg", {
        state: "error"
      })} />
            </Eksempel>
            <Eksempel kode='state="error" errorLabel="…"'>
                <FilVisning fil={bilde("kvittering.jpg", {
        state: "error",
        errorLabel: "Filen er 12 MB, men kan maksimalt være 8 MB"
      })} />
            </Eksempel>
            <Eksempel kode='errorLabel="…" uten state="error"'>
                <FilVisning fil={bilde("kvittering.jpg", {
        errorLabel: "Vises ikke"
      })} />
            </Eksempel>
        </Sammenligning>
}`,...u.parameters?.docs?.source},description:{story:'`errorLabel` vises bare når `state="error"`.',...u.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "File: variant og hideThumbnail",
  render: () => <Sammenligning>
            {(["list", "card"] as const).flatMap(variant => [false, true].map(hideThumbnail => <Eksempel key={\`\${variant}-\${hideThumbnail}\`} kode={\`variant="\${variant}"\${hideThumbnail ? " hideThumbnail" : ""}\`}>
                        <div style={{
        maxWidth: variant === "card" ? "12rem" : undefined
      }}>
                            <FilVisning fil={bilde("kvittering.jpg", {
          hideThumbnail
        })} variant={variant} onRemove={() => {}} />
                        </div>
                    </Eksempel>))}
        </Sammenligning>
}`,...f.parameters?.docs?.source},description:{story:"Inne i FileInput styres `variant` av `fileVariant`, men kan overstyres per fil.",...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "File: onRemove",
  render: () => <Sammenligning>
            <Eksempel kode="uten onRemove">
                <FilVisning fil={bilde("kvittering.jpg")} />
            </Eksempel>
            <Eksempel kode="onRemove={() => …}">
                <FilVisning fil={bilde("kvittering.jpg")} onRemove={() => {}} />
            </Eksempel>
        </Sammenligning>
}`,...x.parameters?.docs?.source},description:{story:"Uten `onRemove` vises ingen fjern-knapp, f.eks. mens filen lastes opp.",...x.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "File: trackingProps",
  render: () => <Attributter selector=".jkl-file">
            <FilVisning fil={bilde("kvittering.jpg")} trackingProps={{
      id: "kvittering",
      extra: {
        steg: "3"
      }
    }} />
        </Attributter>
}`,...V.parameters?.docs?.source}}};export{p as Accept,c as Attributes,o as DescriptionOgMaxSizeBytes,g as Disabled,d as ErrorLabelOgSupportLabelProps,u as FileErrorLabel,S as FileNavnTypeOgStorrelse,x as FileOnRemove,k as FilePathOgFile,y as FileStateOgUploadProgress,V as FileTrackingProps,F as FileVariant,f as FileVariantOgHideThumbnail,v as LegendOgLabelProps,h as Multiple,E as Tooltip,m as ValueOgOnChange,oe as __namedExportsOrder,ae as default};
