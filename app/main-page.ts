import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {HelloWorldModel} from './main-view-model';

import * as camera from "nativescript-camera";
import { Nsjumioplugin } from 'nativescript-nsjumioplugin';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    camera.requestPermissions();

    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onTap(args: observable.EventData) {
    console.log(1);
    const nsjumioplugin = new Nsjumioplugin();
    const email = 'test@example.com';
    const merchantApiToken = 'GET_IT_FROM_JUMIO_PANEL';
    const merchantApiSecret = 'GET_IT_FROM_JUMIO_PANEL';
    nsjumioplugin.start(merchantApiToken, merchantApiSecret, email, () => {
      // cancelWithError
    }, () => {
      // finishInitWithError
    }, () => {
      // finishedScan
    });
}

