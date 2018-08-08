// 导入vue-router包
import VueRouter from 'vue-router';
import Vue from 'vue';

// 注册路由
Vue.use(VueRouter);

import HeroList from '../views/hero/List.vue';
import WeaponList from '../views/weapon/List.vue';
import EquipList from '../views/Equip/List.vue';
var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/hero'},
        {name:'hero',path:'/hero',component:HeroList},
        {name:'weapon',path:'/weapon',component:WeaponList},
        {name:'equip',path:'/equip',component:EquipList}
    ]
})

export default router;