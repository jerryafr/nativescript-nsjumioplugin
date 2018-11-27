import { Common } from './nsjumioplugin.common';

export class Nsjumioplugin extends NSObject implements NetverifyViewControllerDelegate {
    private cancelWithError;
    private finishInitWithError;
    private finishedScan;

    constructor() {
        super();
        // console.log(1);
        // this.greet();
    }

    public start(merchantApiToken, merchantApiSecret, customerEmail, cancelWithError, finishInitWithError, finishedScan) {
        this.cancelWithError = cancelWithError;
        this.finishInitWithError = finishInitWithError;
        this.finishedScan = finishedScan;

        console.log("EEEEEEEEEEEE greet");

        const config = new NetverifyConfiguration();
        config.merchantApiToken = merchantApiToken;
        config.merchantApiSecret = merchantApiSecret;
        config.delegate = this;
        config.customerId = customerEmail;

        try {
            const netverifyViewController = NetverifyViewController.alloc().initWithConfiguration(config);

            this.rootVC().presentViewControllerAnimatedCompletion(
                netverifyViewController, false, function completion() {
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
        this.cancelWithError();
        this.rootVC().dismissViewControllerAnimatedCompletion(true, function() {

        });
    }

    netverifyViewControllerDidFinishInitializingWithError?(netverifyViewController: NetverifyViewController, error: NetverifyError): void {
        console.log("EEEEEEEEEEE 2");
        this.finishInitWithError();
    }

    netverifyViewControllerDidFinishWithDocumentDataScanReference(netverifyViewController: NetverifyViewController, documentData: NetverifyDocumentData, scanReference: string): void {
        console.log("EEEEEEEEEEE 3");
        console.log("finished successfully with scan reference: %@", scanReference);

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

        this.rootVC().dismissViewControllerAnimatedCompletion(true, function() {

        });
    }
}