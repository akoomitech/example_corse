import React from 'react';
import { inject } from 'mobx-react';
import { PageBody, Region, ImokaContextProvider, useImokaOnReady } from '@imoka/imoka-mobweb-reactor';
import { IStore } from '@/store';
import './App.less';
import './imk-component'

export default inject('imoka')(({ imoka }: Partial<IStore>) => {
  const ready = useImokaOnReady(imoka);

  return (
    <div styleName="app">
      {
        ready && (
          <ImokaContextProvider imoka={imoka}>
            <PageBody>
              <Region regionId="regionId" />
            </PageBody>
          </ImokaContextProvider>
        )
      }
    </div>
  )
});