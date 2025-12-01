import{c}from"./clsx-B-dksMZM.js";import{R as n}from"./index-siqcju79.js";import{t as k}from"./tokens-CmXyXTIM.js";const h=n.forwardRef(function(t,r){const{as:i="div",className:s,contentWidth:o="70ch",position:a="center",centerWithin:l=!1,gutter:e=32,style:d,...m}=t,p=i;return n.createElement(p,{"data-testid":"jkl-center","data-position":a,"data-center-within":l,className:c("jkl-center",s),style:{...d,"--content-width":o,"--gutter":e?k.spacing[e]:0},...m,ref:r})});h.__docgenInfo={description:`Center-komponenten brukes for å sentrere innhold på siden.
Du angir den maksimale bredden innholdet kan ta, og eventuelle
marger du ønsker at skal være på hver side av innholdet.

Du kan også angi at innhold som ikke tar opp hele bredden av
Center-komponenten skal vises til venstre, heller enn å sentreres.`,methods:[],displayName:"Center",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]'},description:""},contentWidth:{required:!1,tsType:{name:"string"},description:`En CSS-lengde som definerer den maksimale bredden innholdet kan ha.
Hvis hele Center er smalere enn denne bredden, vil innholdet ta opp
hele bredden (ekskludert marger). Hvis Center er bredere enn denne
bredden, vil innholdet vises i en venstre- eller midtstilt kolonne.
@default "70ch"`},position:{required:!1,tsType:{name:"union",raw:'"left" | "center"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'}]},description:`Angir om kolonnen med innholdet skal være venstrejustert eller
midtstilt. Som standard er denne satt til midtstilt.
@default "center"`},centerWithin:{required:!1,tsType:{name:"boolean"},description:`Sentrerer smalt innhold _inne i_ Center-komponenten. For eksempel vil
en knapp eller en overskrift vises midt på siden, ikke ved venstre marg.`},gutter:{required:!1,tsType:{name:"unknown"},description:`Setter bredden til margene på hver side av innholdet dersom innholdet
i Center fyller hele bredden.
@default 32`}}};export{h as C};
