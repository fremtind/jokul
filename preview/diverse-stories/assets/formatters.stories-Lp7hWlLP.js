import{R as e}from"./index-siqcju79.js";import{N,p as y,a as s,n as O,f as K}from"./formatBytes-CR-O9sah.js";/* empty css               */import{b as o,D as r,a as t}from"./DescriptionList-BkNFVB_x.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";function B(n){const i=`${n.getDate()}`.padStart(2,"0"),a=`${n.getMonth()+1}`.padStart(2,"0");return`${i}.${a}.${n.getFullYear()}`}const V={full:/^(\d{6})(\d{5})$/};function _(n,i){const a=n.replace(/\W/g,""),m=V.full,l=a.match(m);return l?l.slice(1).filter(Boolean).join(N):n}const M={full:/^(\d{4})(\d{2})(\d{5})$/,partial:/^(\d{4})(\d{1,2})?(\d{1,5})?$/};function b(n,i){const a=n.replace(/\W/g,""),m=i?.partial?M.partial:M.full,l=a.match(m);return l?l.slice(1).filter(Boolean).join(i?.separator||N):n}const I={full:/^(\d{4})(\d{4})(\d{4})(\d{4})$/};function U(n,i){const a=n.replace(/[\s-.]/g,""),m=I.full,l=a.match(m);return l?l.slice(1).filter(Boolean).join(N):n}const G={full:/^(\d{3})(\d{3})(\d{3})$/};function C(n,i){const a=n.replace(/[\s-.]/g,""),m=G.full,l=a.match(m);return l?l.slice(1).filter(Boolean).join(N):n}const x={mobil:/^([8]\d{2})(\d{2})(\d{3})$/,fast:/^([2-9]\d)(\d{2})(\d{2})(\d{2})$/,mobilPartial:/^([8]\d{2})(\d{1,2})?(\d{1,3})?$/,fastPartial:/^([2-9]\d)(\d{1,2})?(\d{1,2})?(\d{1,2})?$/};function k(n,i){const a=n.replace(/\W/g,""),m=i?.partial?x.mobilPartial:x.mobil,l=i?.partial?x.fastPartial:x.fast,c=a.match(m)||a.match(l);return c?[i?.countryCode?`+${i.countryCode}`:void 0,...c.slice(1)].filter(Boolean).join(N):n}const P={style:"unit",unit:"kilometer"};function j(n,i){const a=y(n);if(!a)return n.toString();const{suffix:m,...l}={...P,...i};return[s(a,l),m].join("")}const L={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function S(n,i){const a=y(n);if(Number.isNaN(a))return n.toString();const m=Number.isInteger(a)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},l=i?.suffix!==void 0?i.suffix:L.suffix,{prefix:c,...$}={...L,...m,...i},R=c?.length?`${c}${O}`:"",w=l?.length?`${O}${l}`:"",A=s(a,$);return`${R}${A}${w}`}const z={title:"Utils/Formatters",parameters:{layout:"centered",docs:{toc:!0}},tags:["autodocs"]},u={name:"Oversikt",parameters:{layout:"fullscreen"},render:()=>e.createElement("div",{style:{maxWidth:"80cqi",maxHeight:"800px",padding:"1lh",margin:"auto"}},e.createElement(d.render,null),e.createElement("hr",null),e.createElement(p.render,null),e.createElement("hr",null),e.createElement(D.render,null),e.createElement("hr",null),e.createElement(f.render,null),e.createElement("hr",null),e.createElement(g.render,null),e.createElement("hr",null),e.createElement(E.render,null),e.createElement("hr",null),e.createElement(h.render,null),e.createElement("hr",null),e.createElement(v.render,null),e.createElement("hr",null),e.createElement(T.render,null),e.createElement("hr",null),e.createElement(F.render,null),e.createElement("br",null))},d={name:"Fødselsnummer",render:()=>e.createElement("div",null,e.createElement("p",{className:"jkl-heading-2"},"Fødselsnummer"),_("01065100203"))},p={name:"Kortnummer",render:()=>e.createElement("div",null,e.createElement("p",{className:"jkl-heading-2"},"Kortnummer"),U("5457623898234113"))},D={name:"Kontonummer",render:()=>e.createElement("div",null,e.createElement("p",{className:"jkl-heading-2"},"Kontonummer"),e.createElement(o,null,e.createElement(r,null,"Uten separator"),e.createElement(t,null,b("44441155546")),e.createElement(r,null,"Med separator"),e.createElement(t,null,b("44441155546",{separator:"."}))))},f={name:"Telefonnummer",render:()=>e.createElement("div",null,e.createElement("p",{className:"jkl-heading-2"},"Telefonnummer"),e.createElement(o,null,e.createElement(r,null,"Vanlig nummer"),e.createElement(t,null,k("22438634")),e.createElement(r,null,"815 nummer"),e.createElement(t,null,k("81549300")),e.createElement(r,null,"Med landskode"),e.createElement(t,null,k("98651731",{countryCode:"47"}))))},g={name:"Avstand",render:()=>e.createElement("div",null,e.createElement("p",{className:"jkl-heading-2"},"Avstand"),e.createElement(o,null,e.createElement(r,null,"Kun avstanden"),e.createElement(t,null,j("12000")),e.createElement(r,null,"Med suffix"),e.createElement(t,null,j("8000",{suffix:" per år"})),e.createElement(r,null,"Med suffix og unit"),e.createElement(t,null,j("9,81",{unit:"meter",suffix:"/s"}))))},E={name:"Valuta",render:()=>e.createElement("div",null,e.createElement("p",{className:"jkl-heading-2"},"Valuta"),e.createElement(o,null,e.createElement(r,null,"Heltall"),e.createElement(t,null,S("5000")),e.createElement(r,null,"Desimaltall"),e.createElement(t,null,S("127,5")),e.createElement(r,null,"Med prefix og påtvungne desimaler"),e.createElement(t,null,S("859",{prefix:"kr",suffix:"",minimumFractionDigits:2}))))},h={name:"Øvrige Tall",render:()=>e.createElement("div",null,e.createElement("p",{className:"jkl-heading-2"},"Øvrige tall"),e.createElement(o,null,e.createElement(r,null,"Korte tall"),e.createElement(t,null,s("123")),e.createElement(r,null,"Over 1 tusen"),e.createElement(t,null,s("12345")),e.createElement(r,null,"Over 1 million"),e.createElement(t,null,s("1234567")),e.createElement(r,null,"Desimaltall"),e.createElement(t,null,s("12345,67"))))},v={name:"Dato",render:()=>e.createElement("div",null,e.createElement("p",{className:"jkl-heading-2"},"Dato"),e.createElement(o,null,e.createElement(r,null,"Kun dato"),e.createElement(t,null,e.createElement("time",{dateTime:new Date().toString()},B(new Date))),e.createElement(r,null,"Med tid"),e.createElement(t,null,e.createElement("time",{dateTime:new Date().toString()},new Date().toLocaleDateString("no-nb",{year:"numeric",month:"numeric",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric"}))),e.createElement(r,null,"Med tekstlig måned"),e.createElement(t,null,e.createElement("time",{dateTime:new Date().toString()},new Date().toLocaleDateString("no-nb",{year:"numeric",month:"long",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric"}))),e.createElement(r,null,"Kun måned"),e.createElement(t,null,new Date().toLocaleDateString("no-nb",{month:"long"}))))},T={name:"Organisasjonsnummer",render:()=>e.createElement("div",null,e.createElement("p",{className:"jkl-heading-2"},"Organisasjonsnummer"),e.createElement("p",null,C("915651232")))},F={name:"Filstørrelser",render:()=>e.createElement("div",null,e.createElement("p",{className:"jkl-heading-2"},"Filstørrelser"),e.createElement(o,null,e.createElement(r,null,"KB"),e.createElement(t,null,K(88e3)),e.createElement(r,null,"MB"),e.createElement(t,null,K(8888e6))))};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Oversikt",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    maxWidth: "80cqi",
    maxHeight: "800px",
    padding: "1lh",
    margin: "auto"
  }}>
            <FormatterFodselsnummer.render />
            <hr />
            <FormatterKortnummer.render />
            <hr />
            <FormatterKontonummer.render />
            <hr />
            <FormatterTelefonnummer.render />
            <hr />
            <FormatterAvstand.render />
            <hr />
            <FormatterValuta.render />
            <hr />
            <FormatterOvrigeTall.render />
            <hr />
            <FormatterDato.render />
            <hr />
            <FormatterOrganisasjonsnummer.render />
            <hr />
            <FormatterFilstorrelser.render />
            <br />
        </div>
}`,...u.parameters?.docs?.source},description:{story:"Les mer [om formattering av tid, tall og datoer](https://sprakradet.no/godt-og-korrekt-sprak/rettskriving-og-grammatikk/tall-tid-dato/) her.",...u.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Fødselsnummer",
  render: () => <div>
            <p className="jkl-heading-2">Fødselsnummer</p>
            {formatFodselsnummer("01065100203")}
        </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Kortnummer",
  render: () => <div>
            <p className="jkl-heading-2">Kortnummer</p>
            {formatKortnummer("5457623898234113")}
        </div>
}`,...p.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Kontonummer",
  render: () => <div>
            <p className="jkl-heading-2">Kontonummer</p>
            <DescriptionList>
                <DescriptionTerm>Uten separator</DescriptionTerm>
                <DescriptionDetail>
                    {formatKontonummer("44441155546")}
                </DescriptionDetail>

                <DescriptionTerm>Med separator</DescriptionTerm>
                <DescriptionDetail>
                    {formatKontonummer("44441155546", {
          separator: "."
        })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...D.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Telefonnummer",
  render: () => <div>
            <p className="jkl-heading-2">Telefonnummer</p>
            <DescriptionList>
                <DescriptionTerm>Vanlig nummer</DescriptionTerm>
                <DescriptionDetail>
                    {formatTelefonnummer("22438634")}
                </DescriptionDetail>

                <DescriptionTerm>815 nummer</DescriptionTerm>
                <DescriptionDetail>
                    {formatTelefonnummer("81549300")}
                </DescriptionDetail>

                <DescriptionTerm>Med landskode</DescriptionTerm>
                <DescriptionDetail>
                    {formatTelefonnummer("98651731", {
          countryCode: "47"
        })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Avstand",
  render: () => <div>
            <p className="jkl-heading-2">Avstand</p>
            <DescriptionList>
                <DescriptionTerm>Kun avstanden</DescriptionTerm>
                <DescriptionDetail>{formatAvstand("12000")}</DescriptionDetail>

                <DescriptionTerm>Med suffix</DescriptionTerm>
                <DescriptionDetail>
                    {formatAvstand("8000", {
          suffix: " per år"
        })}
                </DescriptionDetail>

                <DescriptionTerm>Med suffix og unit</DescriptionTerm>
                <DescriptionDetail>
                    {formatAvstand("9,81", {
          unit: "meter",
          suffix: "/s"
        })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...g.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Valuta",
  render: () => <div>
            <p className="jkl-heading-2">Valuta</p>
            <DescriptionList>
                <DescriptionTerm>Heltall</DescriptionTerm>
                <DescriptionDetail>{formatValuta("5000")}</DescriptionDetail>

                <DescriptionTerm>Desimaltall</DescriptionTerm>
                <DescriptionDetail>{formatValuta("127,5")}</DescriptionDetail>

                <DescriptionTerm>
                    Med prefix og påtvungne desimaler
                </DescriptionTerm>
                <DescriptionDetail>
                    {formatValuta("859", {
          prefix: "kr",
          suffix: "",
          minimumFractionDigits: 2
        })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...E.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Øvrige Tall",
  render: () => <div>
            <p className="jkl-heading-2">Øvrige tall</p>
            <DescriptionList>
                <DescriptionTerm>Korte tall</DescriptionTerm>
                <DescriptionDetail>{formatNumber("123")}</DescriptionDetail>

                <DescriptionTerm>Over 1 tusen</DescriptionTerm>
                <DescriptionDetail>{formatNumber("12345")}</DescriptionDetail>

                <DescriptionTerm>Over 1 million</DescriptionTerm>
                <DescriptionDetail>{formatNumber("1234567")}</DescriptionDetail>

                <DescriptionTerm>Desimaltall</DescriptionTerm>
                <DescriptionDetail>
                    {formatNumber("12345,67")}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Dato",
  render: () => <div>
            <p className="jkl-heading-2">Dato</p>
            <DescriptionList>
                <DescriptionTerm>Kun dato</DescriptionTerm>
                <DescriptionDetail>
                    <time dateTime={new Date().toString()}>
                        {formatDate(new Date())}
                    </time>
                </DescriptionDetail>

                <DescriptionTerm>Med tid</DescriptionTerm>
                <DescriptionDetail>
                    <time dateTime={new Date().toString()}>
                        {new Date().toLocaleDateString("no-nb", {
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
          })}
                    </time>
                </DescriptionDetail>

                <DescriptionTerm>Med tekstlig måned</DescriptionTerm>
                <DescriptionDetail>
                    <time dateTime={new Date().toString()}>
                        {new Date().toLocaleDateString("no-nb", {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
          })}
                    </time>
                </DescriptionDetail>

                <DescriptionTerm>Kun måned</DescriptionTerm>
                <DescriptionDetail>
                    {new Date().toLocaleDateString("no-nb", {
          month: "long"
        })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Organisasjonsnummer",
  render: () => <div>
            <p className="jkl-heading-2">Organisasjonsnummer</p>
            <p>{formatOrganisasjonsnummer("915651232")}</p>
        </div>
}`,...T.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Filstørrelser",
  render: () => <div>
            <p className="jkl-heading-2">Filstørrelser</p>
            <DescriptionList>
                <DescriptionTerm>KB</DescriptionTerm>
                <DescriptionDetail>{formatBytes(88_000)}</DescriptionDetail>

                <DescriptionTerm>MB</DescriptionTerm>
                <DescriptionDetail>
                    {formatBytes(8_888_000_000)}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...F.parameters?.docs?.source}}};const Q=["Overview","FormatterFodselsnummer","FormatterKortnummer","FormatterKontonummer","FormatterTelefonnummer","FormatterAvstand","FormatterValuta","FormatterOvrigeTall","FormatterDato","FormatterOrganisasjonsnummer","FormatterFilstorrelser"];export{g as FormatterAvstand,v as FormatterDato,F as FormatterFilstorrelser,d as FormatterFodselsnummer,D as FormatterKontonummer,p as FormatterKortnummer,T as FormatterOrganisasjonsnummer,h as FormatterOvrigeTall,f as FormatterTelefonnummer,E as FormatterValuta,u as Overview,Q as __namedExportsOrder,z as default};
