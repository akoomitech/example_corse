
import { ISpec } from '@imoka/imoka-mobweb-reactor';
import { ImgZone } from '@imoka/imoka-mobweb-tss';

export type ImgZoneSpecProperty = {
  
     /**
  * 选择图片 
  */
 imgzone: ImgZone
  
}

export type ImgZoneSpecAppearance = {
  
}

export type ImgZoneSpecTheme = {
  
}

export type ImgZoneSpec = ISpec<ImgZoneSpecProperty, ImgZoneSpecAppearance, ImgZoneSpecTheme>;
