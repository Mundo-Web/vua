var te=Object.defineProperty;var ne=(c,o,i)=>o in c?te(c,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):c[o]=i;var G=(c,o,i)=>(ne(c,typeof o!="symbol"?o+"":o,i),i);import{j as r}from"./AboutHeader-DEdD30eg.js";import{r as n}from"./index-RYns6xqu.js";import{c as oe}from"./ReactAppend-vpV7VTGG.js";import{B as ie}from"./Base-B5Ue5Z-0.js";import{C as le}from"./CreateReactScript-BERtc5uF.js";import{T as ce,R as O,D as L}from"./ReactAppend-CDWOQzm8.js";import{M as ue}from"./Modal-HDEzC3Rq.js";import{I as a}from"./InputFormGroup-CLeK_lOM.js";import{T as ae}from"./TextareaFormGroup-soTxV26S.js";import{S as K}from"./SwitchFormGroup-XpIpamlZ.js";import{I as me}from"./ImageFormGroup-C2iOHudC.js";import{S as P}from"./SelectFormGroup-DkCpPgSc.js";import{S as pe}from"./sweetalert2.all-DJo0UVK6.js";import{B as fe}from"./Results-2jWyQwHC.js";import{Q as de}from"./QuillFormGroup-DNmhkTnW.js";import{r as U}from"./DxBox-DZgBbgD6.js";import"./index-CXU7o9CY.js";import"./tippy-react.esm-DYFqe69e.js";/* empty css              */import"./main-BjVPLcVK.js";import"./___vite-browser-external_commonjs-proxy-DbMF7jdq.js";import"./index.esm-Bla6j_hB.js";/* empty css               */class be extends fe{constructor(){super(...arguments);G(this,"path","admin/courses");G(this,"hasFiles",!0)}}const p=new be,xe=({icons:c,categories:o})=>{const i=n.useRef(),g=n.useRef(),j=n.useRef(),v=n.useRef(),R=n.useRef(),y=n.useRef(),N=n.useRef(),C=n.useRef(),w=n.useRef(),S=n.useRef(),F=n.useRef(),T=n.useRef(),D=n.useRef(),k=n.useRef(),q=n.useRef(),f=n.useRef(),[W,I]=n.useState(!1),[J,d]=n.useState([""]),[_,b]=n.useState([""]),[M,x]=n.useState([""]),[V,h]=n.useState([{icon:"",text:""}]),Q=e=>{e!=null&&e.id?I(!0):I(!1),j.current.value=(e==null?void 0:e.id)??"",$(v.current).val((e==null?void 0:e.category_id)??null).trigger("change"),R.current.value=(e==null?void 0:e.name)??"",y.current.value=(e==null?void 0:e.summary)??"",N.editor.root.innerHTML=(e==null?void 0:e.description)??"",C.current.value=(e==null?void 0:e.sessions)??0,w.current.value=(e==null?void 0:e.type)??"Presencial",S.current.value=(e==null?void 0:e.certificate)??"",F.current.value=(e==null?void 0:e.session_duration)??"",T.current.value=(e==null?void 0:e.long_duration)??"",D.current.value=(e==null?void 0:e.price)??"",k.current.value=(e==null?void 0:e.discount)??"",q.current.value=(e==null?void 0:e.students)??"",f.image.src=`/api/courses/media/${e==null?void 0:e.image}`,f.current.value=null,d(e!=null&&e.audience?JSON.parse(e.audience):[""]),b(e!=null&&e.requirements?JSON.parse(e.requirements):[""]),x(e!=null&&e.objectives?JSON.parse(e.objectives):[""]),h(e!=null&&e.content?JSON.parse(e.content):[{icon:"",text:""}]),$(g.current).modal("show")},X=async e=>{e.preventDefault();const s={id:j.current.value||void 0,category_id:v.current.value,name:R.current.value,summary:y.current.value,description:N.current.value,sessions:C.current.value,type:w.current.value,certificate:S.current.value,session_duration:F.current.value,long_duration:T.current.value,price:D.current.value,discount:k.current.value,students:q.current.value,audience:JSON.stringify(J.filter(Boolean)),requirements:JSON.stringify(_.filter(Boolean)),objectives:JSON.stringify(M.filter(Boolean)),content:JSON.stringify(V.filter(u=>u.icon||u.text))},t=new FormData;for(const u in s)t.append(u,s[u]);const l=f.current.files[0];l&&t.append("image",l),await p.save(t)&&($(i.current).dxDataGrid("instance").refresh(),$(g.current).modal("hide"))},Y=async({id:e,value:s})=>{await p.boolean({id:e,field:"visible",value:s})&&$(i.current).dxDataGrid("instance").refresh()},Z=async({id:e,value:s})=>{await p.boolean({id:e,field:"featured",value:s})&&$(i.current).dxDataGrid("instance").refresh()},ee=async e=>{const{isConfirmed:s}=await pe.fire({title:"Eliminar curso",text:"¿Estás seguro de eliminar este curso?",icon:"warning",showCancelButton:!0,confirmButtonText:"Sí, eliminar",cancelButtonText:"Cancelar"});!s||!await p.delete(e)||$(i.current).dxDataGrid("instance").refresh()},A=(e,s,t)=>{t(l=>l.map((m,u)=>u===e?s:m))},B=e=>{e(s=>[...s,""])},E=(e,s)=>{s(t=>t.filter((l,m)=>m!==e))},z=(e,s,t)=>{h(l=>l.map((m,u)=>u===e?{...m,[s]:t}:m))},re=()=>{h(e=>[...e,{icon:"",text:""}])},se=e=>{h(s=>s.filter((t,l)=>l!==e))},H=e=>$(U(r.jsx("span",{children:r.jsx("i",{className:`${e.id} me-1`})})));return r.jsxs(r.Fragment,{children:[r.jsx(ce,{gridRef:i,title:"Cursos",rest:p,toolBar:e=>{e.unshift({widget:"dxButton",location:"after",options:{icon:"refresh",hint:"Refrescar tabla",onClick:()=>$(i.current).dxDataGrid("instance").refresh()}}),e.unshift({widget:"dxButton",location:"after",options:{icon:"plus",text:"Nuevo curso",hint:"Nuevo curso",onClick:()=>Q()}})},columns:[{dataField:"id",caption:"ID",visible:!1},{dataField:"category.name",caption:"Categoría"},{dataField:"name",caption:"Nombre",cellTemplate:(e,{data:s})=>{e.html(U(r.jsxs(r.Fragment,{children:[r.jsx("b",{children:s.name}),r.jsx("br",{})]})))}},{dataField:"price",caption:"Precio",dataType:"number",width:"100px",cellTemplate:(e,{data:s})=>{e.text(`S/.${Number(s.price).toFixed(2)}`)}},{dataField:"image",caption:"Imagen",width:"90px",allowFiltering:!1,cellTemplate:(e,{data:s})=>{O(e,r.jsx("img",{src:`/api/courses/media/${s.image}`,style:{width:"80px",height:"48px",objectFit:"cover",objectPosition:"center",borderRadius:"4px"},onError:t=>t.target.src="/api/cover/thumbnail/null"}))}},{dataField:"featured",caption:"Destacado",dataType:"boolean",width:"120px",cellTemplate:(e,{data:s})=>{O(e,r.jsx(K,{checked:s.featured,onChange:t=>Z({id:s.id,value:t.target.checked})}))}},{dataField:"visible",caption:"Visible",dataType:"boolean",width:"120px",cellTemplate:(e,{data:s})=>{O(e,r.jsx(K,{checked:s.visible,onChange:t=>Y({id:s.id,value:t.target.checked})}))}},{caption:"Acciones",cellTemplate:(e,{data:s})=>{e.css("text-overflow","unset"),e.append(L({className:"btn btn-xs btn-soft-primary",title:"Editar",icon:"fa fa-pen",onClick:()=>Q(s)})),e.append(L({className:"btn btn-xs btn-soft-danger",title:"Eliminar",icon:"fa fa-trash",onClick:()=>ee(s.id)}))},allowFiltering:!1,allowExporting:!1}]}),r.jsxs(ue,{modalRef:g,title:W?"Editar curso":"Agregar curso",onSubmit:X,size:"lg",children:[r.jsxs("div",{className:"row",id:"principal-container",children:[r.jsx("input",{ref:j,type:"hidden"}),r.jsx(me,{eRef:f,label:"Imagen",col:"col-md-6",aspect:1}),r.jsxs("div",{className:"col-md-6",children:[r.jsx(P,{eRef:v,label:"Categoría",required:!0,dropdownParent:"#principal-container",children:o.map((e,s)=>r.jsx("option",{value:e.id,children:e.name},s))}),r.jsx(a,{eRef:R,label:"Nombre del curso",required:!0}),r.jsx(ae,{eRef:y,label:"Resumen",rows:3,required:!0}),r.jsxs("div",{className:"row",children:[r.jsx(a,{eRef:D,label:"Precio",type:"number",col:"col-sm-6",step:"0.01",required:!0}),r.jsx(a,{eRef:k,label:"Descuento",type:"number",col:"col-sm-6",step:"0.01"}),r.jsx(a,{eRef:C,label:"Sesiones",type:"number",placeholder:"12",col:"col-md-3",required:!0}),r.jsxs(P,{eRef:w,label:"Tipo",col:"col-md-5",dropdownParent:"#principal-container",children:[r.jsx("option",{children:"Presencial"}),r.jsx("option",{children:"Semipresencial"}),r.jsx("option",{children:"Virtual"})]}),r.jsx(a,{eRef:F,label:"Duración (horas)",type:"number",placeholder:"2",col:"col-md-4",required:!0})]})]})]}),r.jsxs("div",{className:"row",id:"courses-container",children:[r.jsx(a,{eRef:S,label:"Tipo certificado",col:"col-md-6",placeholder:"Físico y Virtual PDF",required:!0}),r.jsx(a,{eRef:q,label:"Estudiantes",type:"number",col:"col-md-2"}),r.jsx(a,{eRef:T,label:"Duración total (días)",placeholder:"30",col:"col-md-4"}),r.jsx(de,{eRef:N,label:"Descripción"}),r.jsxs("div",{className:"col-md-6 mb-3",children:[r.jsx("label",{className:"form-label",children:"¿A quién va dirigido?"}),J.map((e,s)=>r.jsxs("div",{className:"input-group mb-2",children:[r.jsx("input",{type:"text",className:"form-control",value:e,onChange:t=>A(s,t.target.value,d)}),r.jsx("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>E(s,d),children:r.jsx("i",{className:"fa fa-trash"})})]},s)),r.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>B(d),children:"Agregar Audiencia"})]}),r.jsxs("div",{className:"col-md-6 mb-3",children:[r.jsx("label",{className:"form-label",children:"¿Cuáles son los requisitos?"}),_.map((e,s)=>r.jsxs("div",{className:"input-group mb-2",children:[r.jsx("input",{type:"text",className:"form-control",value:e,onChange:t=>A(s,t.target.value,b)}),r.jsx("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>E(s,b),children:r.jsx("i",{className:"fa fa-trash"})})]},s)),r.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>B(b),children:"Agregar Requisito"})]}),r.jsxs("div",{className:"col-md-12 mb-3",children:[r.jsx("label",{className:"form-label",children:"¿Qué aprenderas?"}),M.map((e,s)=>r.jsxs("div",{className:"input-group mb-2",children:[r.jsx("input",{type:"text",className:"form-control",value:e,onChange:t=>A(s,t.target.value,x)}),r.jsx("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>E(s,x),children:r.jsx("i",{className:"fa fa-trash"})})]},s)),r.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>B(x),children:"Agregar Objetivo"})]}),r.jsxs("div",{className:"col-12 mb-3",children:[r.jsx("label",{className:"form-label",children:"Contenido"}),V.map((e,s)=>r.jsxs("div",{className:"input-group mb-2",style:{width:"100%"},children:[r.jsx(P,{className:"input-group-text",dropdownParent:"#courses-container",onChange:t=>z(s,"icon",t.target.value),templateResult:H,templateSelection:H,noMargin:!0,children:c.map((t,l)=>r.jsx("option",{value:t.id,children:t.value},l))}),r.jsx("input",{type:"text",className:"form-control",placeholder:"Texto",value:e.text,onChange:t=>z(s,"text",t.target.value)}),r.jsx("button",{type:"button",className:"btn btn-outline-danger input-group-text",onClick:()=>se(s),children:r.jsx("i",{className:"fa fa-trash"})})]},s)),r.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:re,children:"Agregar Contenido"})]})]})]})]})};le((c,o)=>{oe(c).render(r.jsx(ie,{...o,title:"Cursos",children:r.jsx(xe,{...o})}))});