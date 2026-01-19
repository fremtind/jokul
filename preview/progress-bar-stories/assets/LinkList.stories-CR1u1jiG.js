import{j as n,R as m}from"./iframe-BLkUpd90.js";import{c as L}from"./clsx-B-dksMZM.js";import{A as d}from"./ArrowRightIcon-BeOp7vGo.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C5BUtbpO.js";const c=({className:e,...r})=>n.jsx("li",{className:L("jkl-link-list-item",e),...r}),p=m.forwardRef(function(r,t){const{as:o="a",children:k,className:a,...l}=r;return n.jsxs(o,{className:L("jkl-link-list-link",a),ref:t,...l,children:[k,n.jsx(d,{className:"jkl-link-list-link__arrow"})]})}),i=({variant:e,className:r,...t})=>{const o=e==="ordered"?"ol":"ul";return n.jsx(o,{className:L("jkl-link-list",r,{"jkl-link-list--ordered":e==="ordered","jkl-link-list--unordered":e==="unordered"}),...t})};i.Link=p;i.Item=c;i.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ className, ...rest }",optional:!1,type:null}],returns:null}],displayName:"LinkList"};const I={title:"Komponenter/LinkList",component:i,argTypes:{variant:{control:"radio",options:["ordered","unordered"]}}},s={name:"LinkList",args:{variant:"unordered"},render:e=>n.jsxs(i,{...e,children:[n.jsx(i.Item,{children:n.jsx(i.Link,{href:"#",children:"SpareBank 1"})}),n.jsx(i.Item,{children:n.jsx(i.Link,{href:"#",children:"DNB"})}),n.jsx(i.Item,{children:n.jsx(i.Link,{href:"#",children:"LOfavør"})}),n.jsx(i.Item,{children:n.jsx(i.Link,{href:"#",children:"Norsk Sykepleierforbund"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "LinkList",
  args: {
    variant: "unordered"
  },
  render: props => <LinkList {...props}>
            <LinkList.Item>
                <LinkList.Link href="#">SpareBank 1</LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
                <LinkList.Link href="#">DNB</LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
                <LinkList.Link href="#">LOfavør</LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
                <LinkList.Link href="#">Norsk Sykepleierforbund</LinkList.Link>
            </LinkList.Item>
        </LinkList>
}`,...s.parameters?.docs?.source}}};const N=["LinkListStory"];export{s as LinkListStory,N as __namedExportsOrder,I as default};
