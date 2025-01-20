var O=Object.defineProperty;var W=(c,n,i)=>n in c?O(c,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):c[n]=i;var u=(c,n,i)=>(W(c,typeof n!="symbol"?n+"":n,i),i);import{j as t}from"./AboutHeader-CpM0iYLI.js";import{r as h}from"./index-B80Lgev0.js";import{c as G}from"./ReactAppend-CBRQCQGz.js";import{B as M}from"./Base-plxfDuQi.js";import{C as Y,G as _}from"./CreateReactScript-BTmFJSrT.js";import{T as q,D as E}from"./DxButton-Cze-ypGT.js";import{R as T}from"./ReactAppend-C-tNgxIf.js";import{S as V}from"./sweetalert2.all-Dh0rZL5X.js";import{B as F}from"./Results-DSLuSBy_.js";import{N as l}from"./Number2Currency-e57Tgsuk.js";import{M as z}from"./Modal-DUfP1iw0.js";import{i as I}from"./tippy-react.esm-CHhA99mn.js";import{m as D}from"./main-B2CtU6ez.js";import{r as H}from"./DxBox-CdMuSyGE.js";import"./index-DO3Aws4m.js";/* empty css              */import"./Logout-CPQZ59pt.js";import"./index.esm-Cu-mVv1q.js";import"./___vite-browser-external_commonjs-proxy-C9-083JZ.js";import"./WhatsAppModal-CjZ0YwJN.js";/* empty css               */class J extends F{constructor(){super(...arguments);u(this,"path","admin/sales")}}class K extends F{constructor(){super(...arguments);u(this,"path","admin/sale-statuses");u(this,"bySale",async i=>{try{const{status:e,result:a}=await D.Fetch(`/api/${this.path}/by-sale/${i}`);if(!e)throw new Error((a==null?void 0:a.message)||"Ocurrio un error inesperado");return a.data}catch(e){return D.Notify.add({icon:"/assets/img/favicon.png",title:"Error",body:e.message,type:"danger"}),null}})}}const p=new J,Q=new K,U=({statuses:c})=>{var y,v,g,w,S,C,k,R;const n=h.useRef(),i=h.useRef(),[e,a]=h.useState(null),[j,f]=h.useState([]),B=async s=>{const r=await p.save({id:e.id,status_id:s.target.value});r&&(a(r.data),$(n.current).dxDataGrid("instance").refresh())},A=async s=>{const{isConfirmed:r}=await V.fire({title:"Anular pedido",text:"¿Estas seguro de anular este pedido?",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, anular",cancelButtonText:"Cancelar"});!r||!await p.delete(s)||$(n.current).dxDataGrid("instance").refresh()},N=async s=>{const r=await p.get(s);a(r),$(i.current).modal("show")};h.useEffect(()=>{e&&Q.bySale(e.id).then(s=>{f(s||[])})},[e]);const P=Number(e==null?void 0:e.amount)+Number(e==null?void 0:e.delivery)-Number(e==null?void 0:e.bundle_discount)-Number(e==null?void 0:e.renewal_discount)-Number(e==null?void 0:e.coupon_discount);return t.jsxs(t.Fragment,{children:[t.jsx(q,{gridRef:n,title:"Pedidos",rest:p,toolBar:s=>{s.unshift({widget:"dxButton",location:"after",options:{icon:"refresh",hint:"Refrescar tabla",onClick:()=>$(n.current).dxDataGrid("instance").refresh()}})},columns:[{dataField:"id",caption:"ID",visible:!1},{dataField:"name",caption:"Orden",width:"250px",cellTemplate:(s,{data:r})=>{s.css("cursor","pointer"),s.on("click",()=>{N(r.id)}),T(s,t.jsxs("p",{className:"mb-0",style:{width:"100%"},children:[t.jsxs("b",{className:"d-block",children:[r.name," ",r.lastname]}),t.jsxs("small",{className:"text-nowrap text-muted",style:{overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,fontFamily:"monospace"},children:["#",_.APP_CORRELATIVE,"-",r.code]})]}))}},{dataField:"created_at",caption:"Fecha",dataType:"date",sortOrder:"desc",cellTemplate:(s,{data:r})=>{s.html(H(t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"d-block",children:moment(r.created_at).fromNow()}),t.jsx("small",{className:"d-block text-muted",children:moment(r.created_at).format("lll")})]})))}},{dataField:"status.name",caption:"Estado",cellTemplate:(s,{data:r})=>{T(s,t.jsx("span",{className:"badge rounded-pill",style:{backgroundColor:r.status.color?`${r.status.color}2e`:"#3333332e",color:r.status.color??"#333"},children:r.status.name}))}},{dataField:"amount",caption:"Total",dataType:"number",cellTemplate:(s,{data:r})=>{const o=Number(r.amount)||0,d=Number(r.delivery)||0,m=Number(r.bundle_discount)||0,x=Number(r.renewal_discount)||0,b=Number(r.coupon_discount)||0;s.text(`S/. ${l(o+d-m-x-b)}`)}},{caption:"Acciones",cellTemplate:(s,{data:r})=>{s.append(E({className:"btn btn-xs btn-light",title:"Ver pedido",icon:"fa fa-eye",onClick:()=>N(r.id)})),s.append(E({className:"btn btn-xs btn-soft-danger",title:"Anular pedido",icon:"fa fa-trash",onClick:()=>A(r.id)}))},allowFiltering:!1,allowExporting:!1}]}),t.jsx(z,{modalRef:i,title:`Detalles del pedido #${_.APP_CORRELATIVE}-${e==null?void 0:e.code}`,size:"lg",bodyStyle:{backgroundColor:"#ebeff2"},hideButtonSubmit:!0,children:t.jsxs("div",{className:"row",children:[t.jsxs("div",{className:"col-md-8",children:[t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"card-header p-2",children:t.jsx("h5",{className:"card-title mb-0",children:"Detalles de Venta"})}),t.jsx("div",{className:"card-body p-2",children:t.jsx("table",{className:"table table-borderless table-sm mb-0",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("th",{children:"Nombres:"}),t.jsxs("td",{children:[e==null?void 0:e.name," ",e==null?void 0:e.lastname]})]}),t.jsxs("tr",{children:[t.jsx("th",{children:"Email:"}),t.jsx("td",{children:e==null?void 0:e.email})]}),t.jsxs("tr",{children:[t.jsx("th",{children:"Teléfono:"}),t.jsx("td",{children:e==null?void 0:e.phone})]}),t.jsxs("tr",{children:[t.jsx("th",{children:"Dirección:"}),t.jsxs("td",{children:[e==null?void 0:e.address," ",e==null?void 0:e.number,t.jsxs("small",{className:"text-muted d-block",children:[(e==null?void 0:e.province)??(e==null?void 0:e.district),", ",e==null?void 0:e.department,", ",e==null?void 0:e.country," ",(e==null?void 0:e.zip_code)&&t.jsxs(t.Fragment,{children:["- ",e==null?void 0:e.zip_code]})]})]})]}),(e==null?void 0:e.reference)&&t.jsxs("tr",{children:[t.jsx("th",{children:"Referencia:"}),t.jsx("td",{children:e==null?void 0:e.reference})]}),(e==null?void 0:e.comment)&&t.jsxs("tr",{children:[t.jsx("th",{children:"Comentario:"}),t.jsx("td",{children:e==null?void 0:e.comment})]})]})})})]}),t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"card-header p-2",children:t.jsx("h5",{className:"card-title mb-0",children:"Artículos"})}),t.jsx("div",{className:"card-body p-2 table-responsive",children:t.jsxs("table",{className:"table table-striped table-bordered table-sm table-hover mb-0",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Nombre"}),t.jsx("th",{children:"Colores"}),t.jsx("th",{children:"Precio"}),t.jsx("th",{children:"Cantidad"}),t.jsx("th",{children:"Subtotal"})]})}),t.jsx("tbody",{children:(y=e==null?void 0:e.details)==null?void 0:y.map((s,r)=>{var m;const o=s.quantity*100/100,d=s.price*s.quantity;return t.jsxs("tr",{children:[t.jsx("td",{children:s.name}),t.jsx("td",{children:(m=s==null?void 0:s.colors)==null?void 0:m.map((x,b)=>t.jsx(I,{content:x.name,children:t.jsx("i",{className:"mdi mdi-circle",style:{color:x.hex,WebkitTextStroke:"1px #808080"}})},b))}),t.jsxs("td",{align:"right",children:["S/ ",l(s.price)]}),t.jsx("td",{align:"center",children:o}),t.jsxs("td",{align:"right",children:["S/ ",l(d)]})]},r)})})]})})]}),t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"card-header p-2",children:t.jsx("h5",{className:"card-title mb-0",children:"Resumen"})}),t.jsxs("div",{className:"card-body p-2",children:[t.jsxs("div",{className:"d-flex justify-content-between",children:[t.jsx("b",{children:"Subtotal:"}),t.jsxs("span",{children:["S/ ",l(e==null?void 0:e.amount)]})]}),t.jsxs("div",{className:"d-flex justify-content-between",children:[t.jsx("b",{children:"Envío:"}),t.jsxs("span",{children:["S/ ",l(e==null?void 0:e.delivery)]})]}),(e==null?void 0:e.bundle)&&t.jsxs("div",{className:"d-flex justify-content-between",children:[t.jsxs("b",{children:["Descuento x paquete:",t.jsxs("small",{className:"d-block text-muted",style:{fontWeight:"lighter"},children:["Elegiste ",(v=e==null?void 0:e.bundle)==null?void 0:v.name," (-",((g=e==null?void 0:e.bundle)==null?void 0:g.percentage)*1e4/100,"%)"]})]}),t.jsxs("span",{children:["S/ -",l(e==null?void 0:e.bundle_discount)]})]}),(e==null?void 0:e.renewal)&&t.jsxs("div",{className:"d-flex justify-content-between",children:[t.jsxs("b",{children:["Subscripción:",t.jsxs("small",{className:"d-block text-muted",style:{fontWeight:"lighter"},children:[(w=e==null?void 0:e.renewal)==null?void 0:w.name," (-",((S=e==null?void 0:e.renewal)==null?void 0:S.percentage)*1e4/100,"%)"]})]}),t.jsxs("span",{children:["S/ -",l(e==null?void 0:e.renewal_discount)]})]}),(e==null?void 0:e.coupon)&&t.jsxs("div",{className:"d-flex justify-content-between",children:[t.jsxs("b",{children:["Cupón aplicado:",t.jsxs("small",{className:"d-block text-muted",style:{fontWeight:"lighter"},children:[(C=e==null?void 0:e.coupon)==null?void 0:C.name," (-",((k=e==null?void 0:e.coupon)==null?void 0:k.amount)*100/100,"%)"]})]}),t.jsxs("span",{children:["S/ -",l(e==null?void 0:e.coupon_discount)]})]}),t.jsx("hr",{className:"my-2"}),t.jsxs("div",{className:"d-flex justify-content-between",children:[t.jsx("b",{children:"Total:"}),t.jsx("span",{children:t.jsxs("strong",{children:["S/ ",l(P)]})})]})]})]})]}),t.jsxs("div",{className:"col-md-4",children:[t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"card-header p-2",children:t.jsx("h5",{className:"card-title mb-0",children:"Estado"})}),t.jsx("div",{className:"card-body p-2",children:t.jsxs("div",{className:"",children:[t.jsx("label",{htmlFor:"statusSelect",className:"form-label",children:"Estado Actual"}),t.jsx("select",{className:"form-select",id:"statusSelect",value:e==null?void 0:e.status_id,onChange:B,disabled:!((R=e==null?void 0:e.status)!=null&&R.reversible),children:c.map((s,r)=>t.jsx("option",{value:s.id,children:s.name},r))})]})})]}),t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"card-header p-2",children:t.jsx("h5",{className:"card-title mb-0",children:"Cambios de Estado"})}),t.jsx("div",{className:"card-body p-2 d-flex flex-column gap-1",children:j==null?void 0:j.map((s,r)=>{var o,d,m;return t.jsxs("article",{class:"border py-1 px-2 ms-3",style:{position:"relative",borderRadius:"16px 4px 4px 16px",backgroundColor:s.status.color?`${s.status.color}2e`:"#3333332e"},children:[t.jsx("i",{className:"mdi mdi-circle left-2",style:{color:s.status.color||"#333",position:"absolute",left:"-25px",top:"50%",transform:"translateY(-50%)"}}),t.jsx("b",{style:{color:s.status.color||"#333"},children:(o=s==null?void 0:s.status)==null?void 0:o.name}),t.jsxs("small",{className:"d-block text-truncate",children:[(d=s==null?void 0:s.user)==null?void 0:d.name," ",(m=s==null?void 0:s.user)==null?void 0:m.lastname]}),t.jsx("small",{className:"d-block text-muted",children:moment(s.created_at).format("YYYY-MM-DD HH:mm")})]},r)})})]})]})]})})]})};Y((c,n)=>{G(c).render(t.jsx(M,{...n,title:"Pedidos",children:t.jsx(U,{...n})}))});