const devtools = require('@imoka/imoka-mobweb-devtools')
const { requireImkComp, TypesValue, Comp } = devtools;


const SecKillCountDown = requireImkComp('SecKillCountDown').build();

const ImgZone = requireImkComp('ImgZone').build();


module.exports = [
  Comp(SecKillCountDown).label('秒杀倒计时').snapshot('@/sec_kill_counter_down.jpeg'),
  Comp(ImgZone).label('图片热区').snapshot('@/imgzone.png')
]