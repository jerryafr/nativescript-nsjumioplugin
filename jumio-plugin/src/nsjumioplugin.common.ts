import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { View } from 'tns-core-modules/ui/page/page';

export class Common extends Observable {
  public message: string;

  constructor() {
    super();
  }

  public start(merchantApiToken, merchantApiSecret, customerEmail, cancelWithError, finishInitWithError, finishedScan) {
  }
}
