import{j as e}from"./AboutHeader-CpM0iYLI.js";import{c as f}from"./ReactAppend-CBRQCQGz.js";import{r}from"./index-B80Lgev0.js";import{J as h}from"./JSEncrypt-D3I3x59l.js";import{C as j,G as c}from"./CreateReactScript-B4L7iD9b.js";import{A as b}from"./AuthRest-CGfaKhqI.js";import{a as n}from"./index.esm-Cu-mVv1q.js";import{S as N}from"./sweetalert2.all-Dh0rZL5X.js";import{m as l}from"./main-B2CtU6ez.js";import"./index-DO3Aws4m.js";/* empty css               *//* empty css              */import"./___vite-browser-external_commonjs-proxy-C9-083JZ.js";const g=({})=>{document.title=`Login | ${c.APP_NAME}`;const s=new h;s.setPublicKey(c.PUBLIC_RSA_KEY);const[a,t]=r.useState(!0),i=r.useRef(),o=r.useRef();r.useRef(),r.useEffect(()=>{l.GET.message&&N.fire({icon:"info",title:"Mensaje",text:l.GET.message,showConfirmButton:!1,timer:3e3}),l.GET.service?history.pushState(null,null,`/login?service=${l.GET.service}`):history.pushState(null,null,"/login")},[null]);const m=async d=>{d.preventDefault(),t(!0);const u=i.current.value,p=o.current.value,x={email:s.encrypt(u),password:s.encrypt(p)};if(!await b.login(x))return t(!1);location.reload()};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"account-pages my-5",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsxs("div",{className:"col-md-8 col-lg-6 col-xl-4",children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx(n,{href:"/",className:"d-block mb-2",children:e.jsx("img",{src:"/assets/img/logo-dark.svg",alt:"",className:"mx-auto",style:{height:"40px"}})}),e.jsx("b",{className:"mb-4",style:{color:"#404040",fontSize:"x-large"},children:"¡Ahora puedes ser una Vuá lover!"}),e.jsxs("ul",{className:"d-flex flex-wrap justify-content-center gap-x-4 gap-y-0 text-sm",children:[e.jsxs("li",{children:[e.jsx("i",{className:"mdi mdi-circle-small"})," Guarda tus fórmulas únicas"]}),e.jsxs("li",{children:[e.jsx("i",{className:"mdi mdi-circle-small"})," Beneficios en tu cumpleaños"]}),e.jsxs("li",{children:[e.jsx("i",{className:"mdi mdi-circle-small"})," Recibe las promos del mes primero"]})]})]}),e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("div",{className:"text-center mb-4 d-flex align-items-center justify-content-evenly gap-1 border p-1",style:{borderRadius:"8px"},children:[e.jsx("h4",{className:"btn btn-pink text-uppercase mt-0 font-bold w-100 d-block",style:{backgroundColor:"#F1CACD",border:"none"},children:"INICIA SESIÓN"}),e.jsx("a",{href:"/register",className:"btn btn-white text-uppercase mt-0 font-bold w-100 d-block",style:{border:"none"},children:"REGÍSTRATE"})]}),e.jsxs("form",{onSubmit:m,autoComplete:"off",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"email",className:"form-label",children:"Correo o Usuario"}),e.jsx("input",{ref:i,className:"form-control",type:"email",id:"email",required:!0,placeholder:"Ingrese su correo o usuario"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"password",className:"form-label",children:"Contraseña"}),e.jsx("input",{ref:o,className:"form-control",type:"password",required:!0,id:"password",placeholder:"Ingrese su contraseña"})]}),e.jsx("div",{className:"mb-3 d-grid text-center",children:e.jsx("button",{className:"btn btn-pink rounded-pill w-max mx-auto px-4",type:"submit",style:{backgroundColor:"#A191B8",borderColor:"#A191B8"},children:" INGRESAR "})})]})]})}),e.jsx("div",{className:"row mt-3",children:e.jsx("div",{className:"col-12 text-center",children:e.jsxs("p",{className:"",children:["No tienes una cuenta aun? ",e.jsx(n,{href:"/register",className:" ms-1",children:e.jsx("b",{children:"Registrate"})})]})})})]})})})})})};j((s,a)=>{f(s).render(e.jsx(g,{...a}))});