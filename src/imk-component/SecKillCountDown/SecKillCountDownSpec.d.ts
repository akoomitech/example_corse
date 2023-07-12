
import { ISpec } from '@imoka/imoka-mobweb-reactor';
import { String, DateTime, ColorSet, ColorSetColor } from '@imoka/imoka-mobweb-tss';

export type SecKillCountDownSpecProperty = {
  
     /**
  * 标题 
  */
 title: String
  
    
 /**
  * 时间格式 
  */
 format: 'day' | 'hour'
  
     /**
  * 截止时间 
  */
 toTime: DateTime
  
}

export type SecKillCountDownSpecAppearance = {
  
}

export type SecKillCountDownSpecTheme = {
  
    
 /**
  * 颜色 
  */
 colors: [ColorSetColor,ColorSetColor,ColorSetColor,ColorSetColor]

  
}

export type SecKillCountDownSpec = ISpec<SecKillCountDownSpecProperty, SecKillCountDownSpecAppearance, SecKillCountDownSpecTheme>;
