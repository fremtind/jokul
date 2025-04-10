"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2111],{38178:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return L},Head:function(){return P},default:function(){return V}});var r=n(64717),l=n(92379),a=n(51136),s=n(74124),i=n(18142),o=n(76914),m=n(15392),c=n(91331),d=n(49995),p=n(94100),u=n(76873),k=n(73960),f=n(85100);const g=[{prop:"Radioknapper",defaultValue:!0},{prop:"Tekstfelt",defaultValue:!0},{prop:"Datovelgere",defaultValue:!1},{prop:"Nedtrekksfelt",defaultValue:!0},{prop:"Avmerkingsbokser",defaultValue:!0}],v=e=>{var t,n,r,g,v,j;let{boolValues:b}=e;const E=null==b?void 0:b.Radioknapper,h=null==b?void 0:b.Tekstfelt,y=null==b?void 0:b.Datovelgere,_=null==b?void 0:b.Avmerkingsbokser,N=null==b?void 0:b.Nedtrekksfelt,{formState:w,handleSubmit:O,register:D,watch:S}=(0,f.cI)(),x=S();return console.table(x),l.createElement("form",{className:"ml-40",onSubmit:O((e=>console.table(e)))},l.createElement("p",{className:"heading-4 mb-16"},"Hvem er eier av forsikringen?"),E&&l.createElement(p.S,{className:"mb-24",labelProps:{variant:"small"},legend:"Kjønn",errorLabel:null===(t=w.errors.kjonn)||void 0===t?void 0:t.message},l.createElement(u.E,Object.assign({},D("kjonn",{required:"Du må oppgi kjønn på eieren av forsikringen"}),{label:"Kvinne",value:"kvinne"})),l.createElement(u.E,Object.assign({},D("kjonn",{required:"Du må oppgi kjønn på eieren av forsikringen"}),{label:"Mann",value:"mann"}))),h&&l.createElement(l.Fragment,null,l.createElement(a.o,Object.assign({},D("fodselsnummer",{required:"Du må fylle ut eierens fødselsnummer",pattern:{value:/^\d{11}$/,message:"Fødselsnummeret må bestå av 11 siffer"}}),{className:"mb-24",label:"Fødselsnummer",errorLabel:null===(n=w.errors.fodselsnummer)||void 0===n?void 0:n.message})),l.createElement(a.o,Object.assign({},D("navn",{required:"Du må fylle ut eierens for- og etternavn"}),{className:"mb-24",label:"For- og etternavn",errorLabel:null===(r=w.errors.navn)||void 0===r?void 0:r.message}))),y&&l.createElement(i.M,Object.assign({className:"mb-24",disableAfterDate:(0,o.Bb)(new Date),errorLabel:null===(g=w.errors.fodselsdato)||void 0===g?void 0:g.message,label:"Fødselsdato"},D("fodselsdato",{required:"Du må fylle ut fødselsdato",validate:{isCorrectFormat:e=>(0,m.R0)(e)||"Datoen må være skrevet i formen "+(0,c.p6)(new Date)+" eller kortformat",withinUpperBound:e=>(0,m.Xc)(e,new Date)||"Datoen må være før "+(0,c.p6)(new Date)}}))),N&&l.createElement(k.P,Object.assign({},D("stilling",{required:"Du må oppgi eierens stilling"}),{className:"mb-40",errorLabel:null===(v=w.errors.stilling)||void 0===v?void 0:v.message,items:["Designer","Utvikler","Tester","Leder","Annet"],label:"Stilling",width:"14rem"})),_&&l.createElement(d.N,{legend:"Er klient",labelProps:{variant:"small"},errorLabel:null===(j=w.errors.klient)||void 0===j?void 0:j.message},l.createElement(s.X,Object.assign({},D("klient"),{value:"ja"}),"Ja")))};var j=n(55293),b=n(61531),E=n(85562);const h=()=>l.createElement("div",{className:"mb-64"},l.createElement("section",{className:"jkl-portal-component-example"},l.createElement("div",{className:"jkl-portal-component-example__example-wrapper"},l.createElement("form",{className:"jkl-portal-form-field-anatomy ml-40",onSubmit:e=>e.preventDefault()},l.createElement("span",{className:"jkl-portal-form-field-anatomy__indicator jkl-portal-form-field-anatomy__indicator--heading","aria-hidden":"true"},l.createElement("span",{className:"jkl-portal-form-field-anatomy__indicator-number"},"1")),l.createElement("p",{className:"heading-4 mb-16"},"Forsikringseier"),l.createElement("span",{className:"jkl-portal-form-field-anatomy__indicator jkl-portal-form-field-anatomy__indicator--label","aria-hidden":"true"},l.createElement("span",{className:"jkl-portal-form-field-anatomy__indicator-number"},"2")),l.createElement("span",{className:"jkl-portal-form-field-anatomy__indicator jkl-portal-form-field-anatomy__indicator--input","aria-hidden":"true"},l.createElement("span",{className:"jkl-portal-form-field-anatomy__indicator-number"},"3")),l.createElement("span",{className:"jkl-portal-form-field-anatomy__indicator jkl-portal-form-field-anatomy__indicator--support-label","aria-hidden":"true"},l.createElement("span",{className:"jkl-portal-form-field-anatomy__indicator-number"},"4")),l.createElement(a.o,{className:"mb-24",name:"fodselsnummer",label:"Fødselsnummer",defaultValue:"Input",helpLabel:"Hjelpetekst eller feilmeldingstekst"}),l.createElement("span",{className:"jkl-portal-form-field-anatomy__indicator jkl-portal-form-field-anatomy__indicator--input-with-icon","aria-hidden":"true"},l.createElement("span",{className:"jkl-portal-form-field-anatomy__indicator-number"},"5")),l.createElement(E.p,{placeholder:"Placeholder",items:["Designer","Utvikler","Tester","Leder","Annet"],label:"Stilling",width:"14rem"}))),l.createElement("aside",{className:"jkl-portal-component-example__example-options"},l.createElement(j.GS,null,l.createElement(b.HC,null,"Ledetekst"),l.createElement(b.HC,null,"Overskrift"),l.createElement(b.HC,null,"Inputfelt"),l.createElement(b.HC,null,"Hjelpetekst"),l.createElement(b.HC,null,"Inputfelt med ikon")))));function y(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",em:"em",a:"a",ul:"ul",li:"li"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:s,PortalImage:i,Grid:o,DoDontExample:m}=t;return s||N("ComponentExample",!0),m||N("DoDontExample",!0),o||N("Grid",!0),n||N("Ingress",!0),i||N("PortalImage",!0),l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Skjemadesign"),"\n",l.createElement(n,null,l.createElement(t.p,null,"Skjemaer er viktige i Fremtinds løsninger og vi ønsker at de skal være konsekvente. Her finner du noen regler for\nskjemaoppsett og hvordan vi bruker skjemakomponentene.")),"\n",l.createElement(t.h2,null,"Skjemaseksjoner"),"\n",l.createElement(t.p,null,"I Jøkul har vi flere skjemakomponenter. En eller flere skjemakomponenter sammen, utgjør en skjemaseksjon, og et skjema kan bestå av en eller flere seksjoner."),"\n",l.createElement(s,{title:"",component:v,knobs:{boolProps:g}}),"\n",l.createElement(t.p,null,"Hver skjemakomponent har en ledetekst. Det kan være en overskrift med et spørsmål, et ord eller en setning, som sier noe om hva vi ønsker at brukeren skal oppgi eller gjøre. Deretter er det selve komponenten som brukeren skal gjøre noe med, og eventuelt en hjelpetekst eller melding."),"\n",l.createElement(h),"\n",l.createElement(t.p,null,"Vi avgrenser seksjoner tydelig fra hverandre. Hvis seksjonene ligger på en felles bakgrunn, bruker vi luft til å vise dette skillet. Ellers kan vi ramme dem inn i egne kort. Hvis det er nødvendig, kan vi ha en overskrift på hver seksjon."),"\n",l.createElement(i,{className:"jkl-spacing-40--bottom",src:"/assets/documentation/skjemadesign/skjemadesign_hund.png",alt:"Skjermbilde av et skjemadesign fra kjøpsflyten for hundeforsikring"}),"\n",l.createElement(t.p,null,"De interne løsningene vi lager, kan ha mer kompakte skjemakomponenter. Det kan være nyttig hvis det er viktig å komprimere informasjonen vi gir i et skjermbilde, men hovedregelen er at vi skal følge prinsippene for skjemaoppsett."),"\n",l.createElement(t.h3,null,"Hvilken størrelse skal ledetekstene ha i et dynamisk skjema?"),"\n",l.createElement(t.p,null,"I et dynamisk skjema kommer underordnede spørsmål frem når brukeren har tatt stilling til ett eller flere steg i skjemaet. Velg størrelse på ledeteksten ut fra det brukeren ser i standardmodus. Det vil si at hvis en seksjon starter med bare ett spørsmål, velger du stor ledetekst, mens spørsmålene som dukker opp når du har svart på dette ene spørsmålet, får normal ledetekst. Svar på ett spørsmål kan også starte en ny skjemaseksjon."),"\n",l.createElement(t.h2,null,"Skjemavalidering"),"\n",l.createElement(t.p,null,"Det er vanskelig å komme med en ferdig mal for validering som fungerer for alle skjema i alle sammenhenger. Det som beskrives her er en ",l.createElement(t.em,null,"anbefaling")," og et godt utgangspunkt. Om du opplever at deler av anbefalingen ikke fungerer godt for deg er det helt lov å gjøre noe annet."),"\n",l.createElement(t.p,null,"Som hovedregel følger vi i stor grad det funksjonelle i ",l.createElement(t.a,{href:"https://www.uutilsynet.no/wcag-standarden/skjema/38#formidle_feil_i_skjema_1"},"uutilsynets løsningsforslag for skjema"),". Vi beskriver noen av disse temaene i vår egen ",l.createElement(t.a,{href:"/preview/4641-docker-image/universell-utforming/guide"},"oppslagsguide for universell utforming")," også."),"\n",l.createElement(t.p,null,"Kort fortalt:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Vi validerer skjemaet for første gang når brukeren prøver å sende inn skjemaet eller det gjeldende steget"),"\n",l.createElement(t.li,null,"Hvert skjemafelt merkes med ",l.createElement(t.a,{href:"/preview/4641-docker-image/profil/farger"},"statusfargen vår for feil")," og får en beskrivende feilmelding"),"\n",l.createElement(t.li,null,"Vi lister også alle feilmeldingene i skjemaet i en ",l.createElement(t.a,{href:"/preview/4641-docker-image/komponenter/message"},"FormErrorMessage")," i starten av skjemaet"),"\n",l.createElement(t.li,null,"Vi scroller opp til denne listen automatisk og flytter tastaturfokus til første skjemafelt"),"\n",l.createElement(t.li,null,"Når brukeren retter feilen skjuler vi feilmeldingen med én gang begge steder, og går tilbake til standard farge"),"\n",l.createElement(t.li,null,"Når alle feil er rettet fjerner vi oppsummeringen fra starten av skjemaet"),"\n"),"\n",l.createElement(t.h3,null,"Valider skjemaet ved forsøk på innsending"),"\n",l.createElement(t.p,null,"Mange skjemaer er delt inn i flere sider eller steg, mens andre er korte nok til at alt er på samme side. Om et skjema har flere steg skal hvert steg valideres for seg selv. Et steg må være uten feil for at brukeren skal kunne gå videre til neste steg."),"\n",l.createElement(t.p,null,"Vi viser ingen valideringsfeil før brukeren har prøvd å trykke seg videre i skjemaet."),"\n",l.createElement(t.p,null,"Et unntak gjøres dersom et valg gjort i skjemaet gjør at vi vet at brukeren ikke får lov til å gå videre i flyten. I disse tilfellene viser vi en ",l.createElement(t.a,{href:"/preview/4641-docker-image/komponenter/message"},"InfoMessage")," under skjemafeltet som forklarer hvorfor brukeren ikke trenger fortsette med utfyllingen av skjemaet, og hva neste steg er for dem. Beskjeden dukker opp med en gang valget er gjort så brukeren slipper fylle ut unødvendig informasjon."),"\n",l.createElement(i,{className:"jkl-spacing-40--bottom",src:"/assets/documentation/skjemadesign/skjemavalidering_blocker.png",alt:"Skjermbilde av et skjema hvor vi informerer brukeren om riktig vei videre i en InfoMessage"}),"\n",l.createElement(t.h3,null,"Liste med feilene i skjemaet"),"\n",l.createElement(t.p,null,"Et skjema kan ofte ha flere feil, og noen ganger feil som er knyttet til hverandre, gjerne kalt kryssvalidering. For å gi brukeren en oversikt over feilene lister vi opp samtlige feil i en ",l.createElement(t.a,{href:"/preview/4641-docker-image/komponenter/message"},"ErrorMessage")," som vises over skjemaet (se ",l.createElement(t.a,{href:"/preview/4641-docker-image/komponenter/message#i-skjema"},"FormErrorMessage")," for en variant med ferdige animasjoner)."),"\n",l.createElement(t.p,null,"Innholdet i denne meldingsboksen skal være ",l.createElement(t.em,null,"selve feilmeldingene"),". Det holder ikke å liste ",l.createElement(t.em,null,"ledeteksten")," til skjemafeltene det gjelder. Innholdet blir lest opp av skjermlesere."),"\n",l.createElement(t.p,null,"Vi scroller automatisk opp så toppen av meldingsboksen er synlig for brukeren. Første inputfelt under oppsummeringen får tastaturfokus, sånn at tastaturbrukere enklere kan komme i gang med rettingen av feil."),"\n",l.createElement(i,{className:"jkl-spacing-40--bottom",src:"/assets/documentation/skjemadesign/skjemavalidering_error_summary.png",alt:"Skjermbilde av en oppsummering av fire valideringsfeil vist i en ErrorMessage"}),"\n",l.createElement(t.h3,null,"Feilmeldinger under skjemafelt"),"\n",l.createElement(t.p,null,"Om et skjemafelt har feil viser vi en feilmeldingstekst under feltet. Vi har valgt at valideringsteksten skal erstatte hjelpeteksten. Derfor er det veldig viktig at feilmeldingen også tar med seg informasjonen fra hjelpeteksten, i tillegg til å forklare hva som er feil."),"\n",l.createElement(o,null,l.createElement(m,{type:"do",description:"Feilmeldingen inkluderer hjelpeteksten.",content:l.createElement(a.o,{label:"Fødselsnummer",errorLabel:"Du må fylle ut fødselsnummer, 11 siffer",defaultValue:"Input"})}),l.createElement(m,{type:"dont",description:"Feilmeldingen mangler hjelpeteksten.",content:l.createElement(a.o,{label:"Fødselsnummer",errorLabel:"Fødselsnummeret er feil",defaultValue:"Input"})})),"\n",l.createElement(t.h3,null,"Retting av feil"),"\n",l.createElement(t.p,null,"Feilmeldingene forsvinner og skjemaet går tilbake til vanlig farge med én gang feilen er rettet. Brukeren skal ikke trenge å gå videre til neste skjemafelt for at statusen skal oppdateres."),"\n",l.createElement(t.p,null,"Vi fjerner feilmeldingen fra oppsummeringen på samme måte som for skjemafeltet. Den forsvinner med én gang feilen er rettet. Når siste feil er rettet skjuler vi selve meldingsboksen."),"\n",l.createElement(t.h3,null,"Vertikal bevegelse"),"\n",l.createElement(t.p,null,"Siden høyden på oppsummeringen av feil endrer seg underveis er det en fare for at scrollposisjonen til brukeren endres."),"\n",l.createElement(t.p,null,"Moderne nettlesere har støtte for ",l.createElement(t.a,{href:"https://drafts.csswg.org/css-scroll-anchoring"},"CSS Scroll Anchoring")," uten at vi trenger å foreta oss noe, ",l.createElement(t.a,{href:"https://caniuse.com/css-overflow-anchor"},"med unntak av Safari")," som ikke har støtte i skrivende stund. Dette er en del av CSS-spesifikasjonen, så Safari kommer til å få støtte på sikt."),"\n",l.createElement(t.p,null,"Det vil uansett kunne bli noe vertikal bevegelse når vi fjerner feilmeldingene fra skjemafeltene, dersom det ikke er noen hjelpetekst til vanlig."),"\n",l.createElement(t.h3,null,"Eksempel på skjemavalidering"),"\n",l.createElement(t.p,null,"Det er mange detaljer her, og mye å sette seg inn i. Et bilde sier mer enn tusen ord, og et interaktivt eksempel sier enda mer enn det!"),"\n",l.createElement("a",{href:"/eksempler/skjemavalidering",className:"jkl-spacing-24--top jkl-spacing-64--bottom jkl-button jkl-button--primary"},l.createElement(t.p,null,"Gå til eksempelet")))}var _=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(y,e)):y(e)};function N(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var w=n(75482),O=n(96036),D=n(59001),S=n(65458),x=n(79379);const P=e=>{let{pageContext:t}=e;return l.createElement(O.p,{title:t.title})},L=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:s}=n.page,{types:i}=r;return l.createElement(x.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(S.M1,Object.assign({},s,{versions:r.versions})),t.pathname.includes("komponenter")&&l.createElement(D.c,{variant:"komponent",component:s.title}),l.createElement(S.w5,s),a,i&&l.createElement(w.l,{types:i}))};function V(e){return l.createElement(L,e,l.createElement(_,e))}},75482:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(96845),l=n(41162),a=n(74797),s=n(92379),i=n(25329);const o=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,s=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",s)},p=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(m):[],o=(e=>{var t,n,r,l,a,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return s.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&s.createElement(i.dn,{className:"jkl-portal-code-block"},o),r.length>0&&s.createElement(u,{props:r}),a.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(u,{props:a})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return i}});var r=n(48467),l=n(58990),a=n(92379),s=n(25329);const i=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(l.U,null),a.createElement(s.nv,null,o[t].text)),a.createElement(r.r,{href:o[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},o={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},96845:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(99767),l=n(651),a=n(80324),s=n.n(a);const i=["className","density","id"],o=e=>{let{className:t,density:n,id:a}=e,o=(0,r.Z)(e,i);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:s()("jkl-accordion",t),"data-density":n,id:a},o))}},41162:function(e,t,n){n.d(t,{Q:function(){return d}});var r=n(99767),l=n(651),a=n(42054),s=n(95020),i=n(80324),o=n.n(i),m=n(92379);const c=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:p,id:u}=e,k=(0,r.Z)(e,c);const[f,g]=(0,m.useState)(d),[v]=(0,m.useState)((()=>d)),{detailsRef:j,summaryRef:b,contentRef:E,onSummaryClick:h}=(0,s.E)({onOpenChange:(e,t)=>{g(e),p&&p(t,e)},isExpanded:v});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:o()("jkl-accordion-item",i),ref:j,id:u,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:b,children:[n,(0,l.jsx)(a.K,{className:"jkl-accordion-item__arrow",pointingDown:!f,bold:f})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return c}});var r=n(92379),l=n(55650),a=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const c=e=>r.createElement(l.J,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))o.call(t,n)&&m(e,n,t[n]);return e})({},e),"");c.displayName="QuestionIcon"},85562:function(e,t,n){n.d(t,{p:function(){return v}});var r=n(76918),l=n(42054),a=n(29311),s=n(80324),i=n.n(s),o=n(92379),m=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&f(e,n,t[n]);if(p)for(var n of p(t))k.call(t,n)&&f(e,n,t[n]);return e};const v=(0,o.forwardRef)(((e,t)=>{const n=e,{label:s,className:m,density:f,errorLabel:v,helpLabel:j,inline:b,invalid:E,items:h,labelProps:y,placeholder:_="Velg",selectClassName:N,supportLabelProps:w,tooltip:O,value:D,width:S}=n,x=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["label","className","density","errorLabel","helpLabel","inline","invalid","items","labelProps","placeholder","selectClassName","supportLabelProps","tooltip","value","width"]),P={label:s,density:f,errorLabel:v,helpLabel:j,labelProps:y,inline:b,supportLabelProps:w,tooltip:O};return o.createElement(a.B,(L=g({},P),V={"data-testid":"jkl-select",className:i()("jkl-select",m,{"jkl-select--inline":b,"jkl-select--invalid":!!v||E}),render:e=>o.createElement("div",{className:"jkl-select__outer-wrapper",style:{width:S}},o.createElement("select",g(g({ref:t,className:i()("jkl-select__button",N,{"jkl-select__button--active-value":!!D}),defaultValue:D?void 0:"",value:D},e),x),_&&!D&&o.createElement("option",{disabled:!0,value:""},_),h.map(r.Y).map((e=>o.createElement("option",{"data-testid":"jkl-select__option",className:"jkl-select__option",key:e.value,value:e.value},e.label)))),o.createElement(l.K,{variant:"medium",pointingDown:!0,className:"jkl-select__arrow"}))},c(L,d(V))));var L,V}));v.displayName="NativeSelect"},74797:function(e,t,n){n.d(t,{w:function(){return j}});var r=n(92379),l=n(94207),a=n(49309),s=n(36774),i=n(64081),o=n(64483),m=n(42104),c=n(98746),d=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const j=(0,r.forwardRef)(((e,t)=>{var n,d=e,{caption:j,columns:b,emptyTableText:E,rows:h,verticalAlign:y}=d,_=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(l.i,(n=((e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(k)for(var n of k(t))g.call(t,n)&&v(e,n,t[n]);return e})({fullWidth:!0},_),p(n,u({ref:t}))),j&&r.createElement(s.R,{srOnly:!0},j),r.createElement(o.s,null,r.createElement(c.S,null,b.map(((e,t)=>r.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===h.length&&E&&r.createElement(c.S,null,r.createElement(i.p,{colSpan:b.length},E)),h.map(((e,t)=>r.createElement(c.S,{key:t},e.map(((e,t)=>r.createElement(i.p,{key:t,"data-th":b[t],verticalAlign:y},e))))))))}));j.displayName="DataTable"}}]);