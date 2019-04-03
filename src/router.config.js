import index from './components/index'
import login from './components/login'
import topMenu from './components/topMenu'
import footer from './components/footer'
import caseIndex from './components/case/caseIndex'

export default[
    {path:'/',component:index,name:index},
    {path:'/login',component:login,name:login},
    {path:'/index',component:index,name:index,children:[
{path:'/index/caseIndex',component:caseIndex,name:caseIndex},
    
    ]},
    {path:'/topMenu',component:topMenu,name:topMenu},
    {path:'/footer',component:footer,name:footer},

]