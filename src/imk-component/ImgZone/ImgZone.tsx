import React from 'react';
import { ComponentBody, ImokaCtx, useGoLinkAction } from '@imoka/imoka-mobweb-reactor';
import { GlobalSpec } from '@/types/GlobalSpec';
import { ImgZone } from '@imoka/imoka-mobweb-reactor-support';
import { ImgZoneSpec } from './ImgZoneSpec';
import './ImgZone.less';

export type Props = {
  Imoka: ImokaCtx<ImgZoneSpec, GlobalSpec>,
}

export default ({ Imoka: { spec: { property }, metaInfo, bodyProps, envInfo }}: Props) => {
  const goLink = useGoLinkAction();

  const handleAction = action => {
    goLink(action.payload);
  }
  return (
    <ComponentBody metaInfo={metaInfo} styleName="img-zone" {...bodyProps}>
      <ImgZone imgzone={property.imgzone} zoneVisible={envInfo.isInEditorEnv()} onAction={handleAction}/>
    </ComponentBody>
  )
};