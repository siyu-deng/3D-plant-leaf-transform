/*
 * @Author: zp
 * @Date: 2019-12-08 05:29:57
 * @LastEditors: zp
 * @LastEditTime: 2019-12-12 23:43:05
 * @Description: 
 */
"use strict";
import "./LJBasicViewer.js";
var LJBasicViewerInterface = function(dom) {
    var viewer = new LJ.LJViewer(dom);
    viewer.setViewerSizeOfWindow(true);

    function onResize() {
        viewer.resize();
    }
    window.addEventListener('resize', onResize, false);
    viewer.render();
    this.viewer = viewer;
};

LJBasicViewerInterface.prototype = {
    /**
     * @description: 传入url加载模型 支持 gltf/glb、fbx、obj
     * @param {type} url:string 必须 模型地址 mtlUrl:string 可选 默认在.obj同目录下寻找同名.mtl文件 传入则依照mtlUrl加载.mtl文件
     * @return: 
     */
    addToScene: function(url, mtlUrl) {
        this.viewer.addToScene(url, mtlUrl);
    }
};

export {
    LJBasicViewerInterface
};