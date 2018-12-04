import { Common } from './nsjumioplugin.common';
import { View } from 'tns-core-modules/ui/page/page';

export class Nsjumioplugin extends NSObject implements NetverifyViewControllerDelegate {
    public static ObjCProtocols = [NetverifyViewControllerDelegate];

    private cancelWithError;
    private finishInitWithError;
    private finishedScan;
    netverifyViewController: NetverifyViewController;

    private delegate;
    private config;
    private _vc;

    constructor() {
        super();
        // console.log(1);
        // this.greet();
    }

    public start(merchantApiToken, merchantApiSecret, customerEmail, cancelWithError, finishInitWithError, finishedScan) {
        this.cancelWithError = cancelWithError;
        this.finishInitWithError = finishInitWithError;
        this.finishedScan = finishedScan;

        console.log("EEEEEEEEEEEE greet 9");

        this._vc = this.rootVC();

        let config = this.config;
        config = NetverifyConfiguration.new();
        config.merchantApiToken = merchantApiToken;
        config.merchantApiSecret = merchantApiSecret;
        this.delegate = this;
        config.delegate = this.delegate;
        config.customerId = customerEmail;

        try {
            this.netverifyViewController = NetverifyViewController.alloc().initWithConfiguration(config);

            this._vc.presentViewControllerAnimatedCompletion(
                this.netverifyViewController,
                false,
                () => {
                    // this._raiseShownModallyEvent(parent, context, closeCallback);
                    console.log('EEEEEEEEEEEE done');
                });
        } catch (e) {
            console.log('EEEEEEEEEEEE EXCEPTION HANDLED:', e);
        }
    }

    rootVC() {
        const appWindow = UIApplication.sharedApplication.keyWindow;
        return appWindow.rootViewController;
    }

    netverifyViewControllerDidCancelWithErrorScanReference(netverifyViewController: NetverifyViewController, error: NetverifyError, scanReference: string): void {
        console.log("EEEEEEEEEEE 1");
        this._vc.dismissViewControllerAnimatedCompletion(true, null);
        this.cancelWithError();
        this.netverifyViewController.destroy();
    }

    netverifyViewControllerDidFinishInitializingWithError?(netverifyViewController: NetverifyViewController, error: NetverifyError): void {
        console.log("EEEEEEEEEEE 2");
        if (error) {
            this.finishInitWithError();
            this._vc.dismissViewControllerAnimatedCompletion(true, null);
            this.netverifyViewController.destroy();
        }
    }

    netverifyViewControllerDidFinishWithDocumentDataScanReference(netverifyViewController: NetverifyViewController, documentData: NetverifyDocumentData, scanReference: string): void {
        console.log("EEEEEEEEEEE 3");
        console.log("finished successfully with scan reference: %@", scanReference);
        this.finishedScan(netverifyViewController, documentData, scanReference);
        /*
        this.finishedScan(documentData);

        const selectedCountry = documentData.selectedCountry;
        const selectedDocumentType = documentData.selectedDocumentType;
        let documentTypeStr;
        switch (selectedDocumentType) {
            case NetverifyDocumentTypeDriverLicense:
                documentTypeStr = "DL";
                break;
            case NetverifyDocumentTypeIdentityCard:
                documentTypeStr = "ID";
                break;
            case NetverifyDocumentTypePassport:
                documentTypeStr = "PP";
                break;
            case NetverifyDocumentTypeVisa:
                documentTypeStr = "Visa";
                break;
            default:
                break;
        }

        const idNumber = documentData.idNumber;
        const personalNumber = documentData.personalNumber;
        const issuingDate = documentData.issuingDate;
        const expiryDate = documentData.expiryDate;
        const issuingCountry = documentData.issuingCountry;
        const optionalData1 = documentData.optionalData1;
        const optionalData2 = documentData.optionalData2;

        // person
        const lastName = documentData.lastName;
        const firstName = documentData.firstName;
        // const middleName = documentData.middleName;
        const dateOfBirth = documentData.dob;
        const gender = documentData.gender;
        let genderStr;
        switch (gender) {
            default:
            case NetverifyGenderUnknown: {
                genderStr = "Unknown";
            } break;
            case NetverifyGenderF: {
                genderStr = "female";
            } break;
            case NetverifyGenderM: {
                genderStr = "male";
            } break;
            case NetverifyGenderX: {
                genderStr = "Unspecified";
            } break;
        }
        const originatingCountry = documentData.originatingCountry;
        */

        this._vc.dismissViewControllerAnimatedCompletion(true, null);
        this.netverifyViewController.destroy();
    }

}
