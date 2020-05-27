/* ============================================================================= 
#
# Author: 桔子桑
# Date: 2020-03-16 14:18:35
# FilePath: /shader-react/src/pages/Index.js
# Description: 
#
============================================================================= */
/*********************
 *
 * @Author: 桔子桑
 * @Date: 2020-03-14 13:47:42
 * @FilePath: /shader-react/src/pages/Index.js
 * @Description: 文件描述
 *
*********************/
import React,{Component} from 'react'

export class Index extends Component {
	constructor(props){
    super(props);
    this.case = [
      {
        title:'热力环流(without texture)',
        img:'/images/wind.png',
        to:'/index.html#/details?mesh=wind'
      },
      {
        title:'光线追踪',
        img:'/images/raytracing.png',
        to:'/index.html#/RayTracing'
      },
      {
        title:'扫光',
        img:'/images/sweeplight.png',
        to:'/index.html#/posteffect?effect=sweeplight'
      },
      {
        title:'战争迷雾',
        img:'/images/warfog.png',
        to:'/index.html#/posteffect?effect=warfog'
      },
      // {
      //   title:'局部Bloom辉光',
      //   img:'/images/part-bloom.png',
      //   to:'/index.html#/rtt'
      // },
      {
        title:'判断物体在视线正中央',
        img:'/images/calccenter.png',
        to:'/index.html#/details?mesh=judgeCenter'
      },
      {
        title:'模型外发光',
        img:'/images/modeloutline.png',
        to:'/index.html#/details?mesh=modeloutline'
      },
      {
        title:'运动的轨迹线',
        img:'/images/road.png',
        to:'/index.html#/details?mesh=road'
      },
      {
        title:'雷达扫描',
        img:'/images/radar.png',
        to:'/index.html#/details?mesh=radar'
      },
      {
        title:'自定义多边形围栏',
        img:'/images/rail.png',
        to:'/index.html#/details?mesh=rail'
      },
      {
        title:'外散圆环',
        img:'/images/ring.png',
        to:'/index.html#/details?mesh=ring'
      },
      {
        title:'模型剖切',
        img:'/images/modelcut.png',
        to:'/index.html#/details?mesh=modelcut'
      },
      {
        title:'扩散光柱',
        img:'/images/lightbeam.png',
        to:'/index.html#/details?mesh=lightBeam'
      },
      {
        title:'双向自旋转光圈',
        img:'/images/autorotate.png',
        to:'/index.html#/details?mesh=autoRotate'
      },
    ]
    
  }
  //根据数据拼接菜单dom
	caseDom = ()=>{
		return this.case.map((items,index)=>{
          return (
            <div key={index} className="case">
              <a href={items.to}>
                <div className="imgwrap">
                  <img src={process.env.PUBLIC_URL + items.img}></img>
                </div>
              </a>
              <div className="casetitle">{items.title}</div>
            </div>
          )
        }) 
  }
  
  
  render() {
    var Case = this.caseDom();
    return (
      <div>
        {Case}
      </div>
    );
  }


}