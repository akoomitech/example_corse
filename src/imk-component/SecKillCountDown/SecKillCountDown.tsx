import React from 'react';
import { ComponentBody, ImokaCtx } from '@imoka/imoka-mobweb-reactor';
import { GlobalSpec } from '@/types/GlobalSpec';
import { SecKillCountDownSpec } from './SecKillCountDownSpec';
import CountTimeBar from '@/component/CountTimeBar';
import './SecKillCountDown.less';

export type Props = {
  Imoka: ImokaCtx<SecKillCountDownSpec, GlobalSpec>,
}

export default ({ Imoka: { spec: { property, theme: { colors: [ titleColor, numberColor, numberBgColor, numberUnitColor ] } }, metaInfo, bodyProps }}: Props) => {

  return (
    <ComponentBody metaInfo={metaInfo} styleName="sec-kill-count-down" {...bodyProps}>
      <div styleName="title" style={{ color: titleColor.color }}>{ property.title }</div>
      <div styleName="count-time-bar">
        <CountTimeBar 
          toTime={property.toTime}
          format={property.format}
          unit="time"
          numberBgColor={numberBgColor}
          numberColor={numberColor}
          numberUnitColor={numberUnitColor}
        />
      </div>
    </ComponentBody>
  )
};