import{j as p}from"./jsx-runtime-D9p_MChh.js";import{c as u}from"./clsx-B-dksMZM.js";import{R as k}from"./index-CRL2yuNo.js";import{t as c}from"./tokens-NmszT_nq.js";const f=k.forwardRef(function(n,t){const{as:r="div",className:o,contentWidth:s="70ch",position:i="left",centerWithin:l=!1,gutter:e=40,style:a,...d}=n,m=r;return p.jsx(m,{"data-testid":"jkl-column","data-position":i,"data-center-within":l,className:u("jkl-column",o),style:{...a,"--content-width":s,"--gutter":e?c.unit[e]:0},...d,ref:t})});f.__docgenInfo={description:`Column-komponenten brukes for å sentrere innhold på siden.
Du angir den maksimale bredden innholdet kan ta, og eventuelle
marger du ønsker at skal være på hver side av innholdet.

Du kan også angi at innhold som ikke tar opp hele bredden av
Column-komponenten skal sentreres, heller enn å vises til venstre.`,methods:[],displayName:"Column",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]'},description:""},contentWidth:{required:!1,tsType:{name:"string"},description:`En CSS-lengde som definerer den maksimale bredden innholdet kan ha.
Hvis hele Column er smalere enn denne bredden, vil innholdet ta opp
hele bredden (ekskludert marger). Hvis Column er bredere enn denne
bredden, vil innholdet vises i en venstre- eller midtstilt kolonne.
@default "70ch"`},position:{required:!1,tsType:{name:"union",raw:'"left" | "center"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'}]},description:`Angir om kolonnen med innholdet skal være venstrejustert eller
midtstilt. Som standard er denne satt til venstrejustert.
@default "left"`},centerWithin:{required:!1,tsType:{name:"boolean"},description:`Sentrerer smalt innhold _inne i_ Column-komponenten. For eksempel vil
en knapp eller en overskrift vises midt på siden, ikke ved venstre marg.`},gutter:{required:!1,tsType:{name:"unknown"},description:`Setter bredden til margene på hver side av innholdet dersom innholdet
i Column fyller hele bredden. Som standard er denne satt til unit.40,
som tilsvarer 32px.
@default 40`}}};export{f as C};
