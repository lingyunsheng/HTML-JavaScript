// import { V4MAPPED } from "dns";

// json 对象  林 gaodeMap
var googleMap = {
    // :function可省
    show() {
        console.log('开始渲染GOOGLE地图');
    }
}
var gaodeMap = {
    // :function可省
    show() {
        console.log('开始渲染高德地图');
    }
}
const baiduMap = {
    // 接口 为互换做准备 
    show() {
        console.log('开始渲染百度地图');
    }
}
const sosoMap = {
    // 接口 为互换做准备 
    // show() {
    //     console.log('开始渲染百度地图');
    // }
}
/**
 * 
 * @param {object} map 
 */
const　renderMap = (map) => {
    // map 检测 一定要有show()方法
    // 函数原型对象指向function Function实例
    if (map.show && map.show instanceof Function) {
        map.show();
    }

    // googleMap.show();
    // 分支太多    
    // if (type === 'baidu')
    //     baiduMap.show();
    // else if (type === 'google')
    //     googleMap.show();  
    // else if (type === 'gaode')
    //     gaodeMap.show(); 
}

renderMap(baiduMap);
renderMap(googleMap);
renderMap(sosoMap);

