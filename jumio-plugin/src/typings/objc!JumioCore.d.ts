
interface CameraProcessingDataSource extends NSObjectProtocol {

	captureSessionManagerShouldProcessSampleBuffer(): boolean;
}
declare var CameraProcessingDataSource: {

	prototype: CameraProcessingDataSource;
};

interface CameraProcessingDelegate extends NSObjectProtocol {

	captureSessionManagerDidFinishProcessingSampleBufferOutputImageFrameOutputRect(sampleBuffer: any, imageFrame: string, rect: CGRect): void;

	captureSessionManagerDidOutputSampleBuffer(sampleBuffer: any): void;

	captureSessionManagerDidOutputmetaData?(metadataObjects: NSArray<any>): void;

	captureSessionManagerFlashNeeded?(flashNeeded: boolean): void;
}
declare var CameraProcessingDelegate: {

	prototype: CameraProcessingDelegate;
};

declare const enum ContentType {

	JSON = 0,

	MultipartForm = 1
}

declare const enum DeviceModel {

	NOT_AVAILABLE = 0,

	IPHONE_2G = 1,

	IPHONE_3G = 2,

	IPHONE_3GS = 3,

	IPHONE_4 = 4,

	IPHONE_4_CDMA = 5,

	IPHONE_4S = 6,

	IPHONE_5 = 7,

	IPHONE_5_CDMA_GSM = 8,

	IPHONE_5C = 9,

	IPHONE_5C_CDMA_GSM = 10,

	IPHONE_5S = 11,

	IPHONE_5S_CDMA_GSM = 12,

	IPHONE_6_PLUS = 13,

	IPHONE_6 = 14,

	IPHONE_6S = 15,

	IPHONE_6S_PLUS = 16,

	IPHONE_7 = 17,

	IPHONE_7_PLUS = 18,

	IPHONE_SE = 19,

	IPHONE_8 = 20,

	IPHONE_8_PLUS = 21,

	IPHONE_X = 22,

	IPHONE_XS = 23,

	IPHONE_XS_MAX = 24,

	IPHONE_XR = 25,

	IPOD_TOUCH_1G = 26,

	IPOD_TOUCH_2G = 27,

	IPOD_TOUCH_3G = 28,

	IPOD_TOUCH_4G = 29,

	IPOD_TOUCH_5G = 30,

	IPAD = 31,

	IPAD_2 = 32,

	IPAD_2_WIFI = 33,

	IPAD_2_CDMA = 34,

	IPAD_3 = 35,

	IPAD_3G = 36,

	IPAD_3_WIFI = 37,

	IPAD_3_WIFI_CDMA = 38,

	IPAD_4 = 39,

	IPAD_4_WIFI = 40,

	IPAD_4_GSM_CDMA = 41,

	IPAD_AIR_WIFI = 42,

	IPAD_AIR = 43,

	IPAD_AIR_2_WIFI = 44,

	IPAD_AIR_2 = 45,

	IPAD_PRO_12_9_WIFI = 46,

	IPAD_PRO_12_9 = 47,

	IPAD_PRO_9_7_WIFI = 48,

	IPAD_PRO_9_7 = 49,

	IPAD_MINI = 50,

	IPAD_MINI_WIFI = 51,

	IPAD_MINI_WIFI_CDMA = 52,

	IPAD_MINI_2_WIFI = 53,

	IPAD_MINI_2 = 54,

	IPAD_MINI_3_WIFI = 55,

	IPAD_MINI_3 = 56,

	IPAD_MINI_3_2 = 57,

	SIMULATOR = 58
}

declare const enum HTTPMethod {

	GET = 0,

	POST = 1,

	PUT = 2,

	DELETE = 3
}

declare class JMAlertView extends JMBaseView {

	static alloc(): JMAlertView; // inherited from NSObject

	static appearance(): JMAlertView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): JMAlertView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): JMAlertView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): JMAlertView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): JMAlertView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): JMAlertView; // inherited from UIAppearance

	static new(): JMAlertView; // inherited from NSObject

	readonly confirmButton: JMThemeableButton;

	delegate: JMAlertViewDelegate;

	constructor(o: { message: string; cancelButtonTitle: string; confirmButtonTitle: string; });

	constructor(o: { title: string; message: string; cancelButtonTitle: string; confirmButtonTitle: string; });

	createCancelButton(): JMThemeableButton;

	createConfirmButton(): JMThemeableButton;

	createLandscapeConstraints(): NSArray<any>;

	createMessageLabel(): UILabel;

	createPortraitConstraints(): NSArray<any>;

	createTitleLabel(): UILabel;

	hideAnimatedCompletion(animated: boolean, completion: (p1: boolean) => void): void;

	initWithMessageCancelButtonTitleConfirmButtonTitle(message: string, cancelButtonTitle: string, confirmButtonTitle: string): this;

	initWithTitleMessageCancelButtonTitleConfirmButtonTitle(title: string, message: string, cancelButtonTitle: string, confirmButtonTitle: string): this;

	showAnimatedCompletion(animated: boolean, completion: (p1: boolean) => void): void;
}

interface JMAlertViewDelegate extends NSObjectProtocol {

	alertViewDidCancel?(alertView: JMAlertView): void;

	alertViewDidConfirm?(alertView: JMAlertView): void;
}
declare var JMAlertViewDelegate: {

	prototype: JMAlertViewDelegate;
};

interface JMAnimator extends NSObjectProtocol {

	offTransitionDuration(): number;

	onTransitionDuration(): number;

	performOffTransitionToFullScreenBlur(isPop: boolean, toFullScreen: boolean): void;

	performOnTransition(isPop: boolean): void;

	prepareForCustomTransition(isPop: boolean): void;

	startsWithFullScreenBlur(): boolean;

	transitionType(): JMNavigationControllerTransitionType;

	viewOffTransitionDuration(): number;

	viewOnTransitionDuration(): number;
}
declare var JMAnimator: {

	prototype: JMAnimator;
};

declare class JMAppearance extends NSObject {

	static alloc(): JMAppearance; // inherited from NSObject

	static new(): JMAppearance; // inherited from NSObject

	static setGeneralAppearanceForClass(containingClass: any): void;
}

declare class JMAutolayoutUtilities extends NSObject {

	static alloc(): JMAutolayoutUtilities; // inherited from NSObject

	static autolayoutActivityIndicatorView(): UIActivityIndicatorView;

	static autolayoutButton(): UIButton;

	static autolayoutImageView(): UIImageView;

	static autolayoutLabel(): UILabel;

	static autolayoutLabelWithJustifiedParagraphStyleText(text: string): UILabel;

	static autolayoutTableViewWithTableViewStyle(tableViewStyle: UITableViewStyle): UITableView;

	static autolayoutView(): UIView;

	static new(): JMAutolayoutUtilities; // inherited from NSObject
}

declare class JMBaseServerTask extends NSObject {

	static alloc(): JMBaseServerTask; // inherited from NSObject

	static new(): JMBaseServerTask; // inherited from NSObject

	readonly boundary: string;

	completionBlock: (p1: JMBaseServerTaskResult) => void;

	configuration: JMBaseServerTaskConfiguration;

	readonly contentType: ContentType;

	readonly defaultError: NSError;

	errorBlock: (p1: NSError) => void;

	readonly httpMethod: HTTPMethod;

	readonly serverTaskLogInfo: JMServerTaskLogInfo;

	readonly sessionTask: NSURLSessionTask;

	timeoutInterval: number;

	constructor(o: { configuration: JMBaseServerTaskConfiguration; });

	addObjectForKeyToDictionary(aObject: any, aKey: any, aDictionary: NSMutableDictionary<any, any>): void;

	cancel(): void;

	contentTypeString(contentType: ContentType): string;

	createAuthentificationValue(): string;

	createHTTPBody(): NSData;

	createHTTPHeaders(): NSDictionary<any, any>;

	createRequestParameters(): NSDictionary<any, any>;

	createSession(): NSURLSession;

	createSessionTaskWithURLRequest(urlRequest: NSURLRequest): NSURLSessionTask;

	createURL(): NSURL;

	createURLQueryFromParameters(parameters: NSDictionary<any, any>): NSArray<any>;

	createURLRequest(): NSMutableURLRequest;

	createURLwithBaseURLURLPathParameters(baseURL: string, urlPath: string, parameters: NSDictionary<any, any>): NSURL;

	createUserAgentValue(): string;

	decryptDataError(encryptedData: NSData): NSData;

	encryptDataError(unencryptedData: NSData): NSData;

	errorFromHTTPResponse(httpResponse: NSHTTPURLResponse): NSError;

	errorFromSystemError(systemError: NSError): NSError;

	formatStringForMaximumLength(string: string, maxLength: number): string;

	handleTaskFailedWithError(error: NSError): void;

	handleTaskResultResponseError(data: NSData, response: NSHTTPURLResponse, error: NSError): void;

	handleTaskSuccessfulWithResult(data: NSData): void;

	initWithConfiguration(configuration: JMBaseServerTaskConfiguration): this;

	invalidate(): void;

	isResponseDataValid(data: NSData): boolean;

	logServerTaskInfo(): void;

	performCompletionBlockWithResult(result: JMBaseServerTaskResult): void;

	performErrorBlockWithError(error: NSError): void;

	startError(completionBlock: (p1: JMBaseServerTaskResult) => void, errorBlock: (p1: NSError) => void): void;

	startTask(): void;

	stringFromContentType(accept: ContentType): string;

	stringFromHTTPMethod(method: HTTPMethod): string;
}

declare class JMBaseServerTaskConfiguration extends NSObject {

	static alloc(): JMBaseServerTaskConfiguration; // inherited from NSObject

	static new(): JMBaseServerTaskConfiguration; // inherited from NSObject

	baseURL: string;

	jumioIdScanReference: string;

	merchantApiSecret: string;

	merchantApiToken: string;

	merchantReportingCriteria: string;

	session: NSURLSession;

	trackingId: string;
}

declare class JMBaseServerTaskResult extends NSObject {

	static alloc(): JMBaseServerTaskResult; // inherited from NSObject

	static new(): JMBaseServerTaskResult; // inherited from NSObject

	loadFromData(data: NSData): void;
}

declare class JMBaseState extends NSObject implements NSCopying {

	static alloc(): JMBaseState; // inherited from NSObject

	static new(): JMBaseState; // inherited from NSObject

	didEnterStateBlock: (p1: JMStateTransition) => void;

	didExitStateBlock: (p1: JMStateTransition) => void;

	readonly name: string;

	stateMachine: JMStateMachine;

	willEnterStateBlock: (p1: JMStateTransition) => void;

	willExitStateBlock: (p1: JMStateTransition) => void;

	constructor(o: { name: string; });

	cleanUp(): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithName(name: string): this;
}

declare class JMBaseTableViewCell extends UITableViewCell {

	static alloc(): JMBaseTableViewCell; // inherited from NSObject

	static appearance(): JMBaseTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): JMBaseTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): JMBaseTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): JMBaseTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): JMBaseTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): JMBaseTableViewCell; // inherited from UIAppearance

	static new(): JMBaseTableViewCell; // inherited from NSObject

	shouldUpdateSuperViewConstraints: boolean;

	shouldUpdateViewConstraints: boolean;

	initCell(): void;
}

declare class JMBaseView extends UIView {

	static alloc(): JMBaseView; // inherited from NSObject

	static appearance(): JMBaseView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): JMBaseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): JMBaseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): JMBaseView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): JMBaseView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): JMBaseView; // inherited from UIAppearance

	static new(): JMBaseView; // inherited from NSObject

	hideSensitiveData(hide: boolean): void;

	initControl(): void;

	updateViewForOrientation(interfaceOrientation: UIInterfaceOrientation): void;
}

declare class JMCameraFocusIndicatorView extends JMBaseView {

	static alloc(): JMCameraFocusIndicatorView; // inherited from NSObject

	static appearance(): JMCameraFocusIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): JMCameraFocusIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): JMCameraFocusIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): JMCameraFocusIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): JMCameraFocusIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): JMCameraFocusIndicatorView; // inherited from UIAppearance

	static new(): JMCameraFocusIndicatorView; // inherited from NSObject

	color: UIColor;

	constructor(o: { center: CGPoint; });

	initWithCenter(centerPos: CGPoint): this;

	setBlinkingCompletion(isBlinkingOn: boolean, completion: () => void): void;
}

declare class JMCaptureSessionManager extends NSObject implements AVCaptureMetadataOutputObjectsDelegate, AVCaptureVideoDataOutputSampleBufferDelegate {

	static allVideoCaptureDevices(): NSArray<AVCaptureDevice>;

	static alloc(): JMCaptureSessionManager; // inherited from NSObject

	static focusConfidenceFromDataLengthWidthHeightStrideChannels(data: string, length: number, width: number, height: number, stride: number, channels: number): number;

	static imageFromRGBBufferSize(buffer: string, size: CGSize): UIImage;

	static isCameraAvailableAtPosition(devicePosition: AVCaptureDevicePosition): boolean;

	static new(): JMCaptureSessionManager; // inherited from NSObject

	readonly activeCameraDevice: AVCaptureDevice;

	readonly backCameraActive: boolean;

	readonly captureSessionPreset: string;

	capturing: boolean;

	cropFactorWidth: number;

	cropFactorY: number;

	cropRawFrameBufferAfterOutput: boolean;

	cropRectOffsetFactorY: number;

	croppedRGBFrameBufferData: NSMutableData;

	readonly croppingRectForCurrentConfiguration: CGRect;

	dateOfLastFocusAdjustment: Date;

	focusPointOfInterest: CGPoint;

	readonly imageFrameSizeForCurrentConfiguration: CGSize;

	readonly imageToBlur: UIImage;

	previewLayer: AVCaptureVideoPreviewLayer;

	previewVisible: boolean;

	readonly torchAvailable: boolean;

	readonly torchOn: boolean;

	readonly twoCamerasAvailable: boolean;

	videoOrientation: AVCaptureVideoOrientation;

	videoOrientationSupported: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { configuration: JMCaptureSessionManagerConfiguration; });

	addDefaultVideoInput(): void;

	captureOutputDidDropSampleBufferFromConnection(output: AVCaptureOutput, sampleBuffer: any, connection: AVCaptureConnection): void;

	captureOutputDidOutputMetadataObjectsFromConnection(output: AVCaptureOutput, metadataObjects: NSArray<AVMetadataObject>, connection: AVCaptureConnection): void;

	captureOutputDidOutputSampleBufferFromConnection(output: AVCaptureOutput, sampleBuffer: any, connection: AVCaptureConnection): void;

	captureOutputSizeForInterfaceOrientation(interfaceOrientation: UIInterfaceOrientation): CGSize;

	class(): typeof NSObject;

	cleanUp(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	convertRawBGRABufferBufferSizeInRectToMutableDataObject(srcBuffer: string, size: CGSize, rect: CGRect, dstData: NSMutableData): boolean;

	dataFromRawBGRABufferBufferSizeInRect(buffer: string, size: CGSize, rect: CGRect): NSData;

	dataFromRawBGRABufferInRect(rect: CGRect): NSData;

	detachDelegateAndDataSource(): void;

	detectFaceOnSampleBufferInRect(sampleBuffer: any, rect: CGRect): boolean;

	disableVideoDataOutput(): void;

	enableVideoDataOutput(): void;

	finalCameraPosition(): AVCaptureDevicePosition;

	focusConfidenceFromCurrentSampleBuffer(): number;

	focusOnCard(): void;

	focusOnPoint(focusPoint: CGPoint): void;

	imageFrameSizeForCurrentCaptureSessionPresetWithVideoOrientation(videoOrientation: AVCaptureVideoOrientation): CGSize;

	imageFrameSizeForCurrentConfigurationWithPadding(): CGSize;

	imageFromCurrentCroppedRGBBuffer(): UIImage;

	imageFromCurrentRawBGRABuffer(): UIImage;

	imageFromCurrentRawBGRABufferWithoutPadding(): UIImage;

	imageFromRawBGRABufferSizeCopy(buffer: string, size: CGSize, copy: boolean): UIImage;

	initWithConfiguration(configuration: JMCaptureSessionManagerConfiguration): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	manualFocusInEffectFor(second: number): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeCaptureInputs(): void;

	removeCaptureOutputs(): void;

	respondsToSelector(aSelector: string): boolean;

	restartCapturing(): void;

	retainCount(): number;

	self(): this;

	setCropRectOffsetFactorYFromAbsolutePixels(cropRectOffsetYPixels: number): void;

	setCropRectOffsetFactorYWithAbsolutePixels(cropRectOffsetYPixels: number): void;

	setRequiresFaceMetaDataWithCaptureDevicePosition(devicePosition: AVCaptureDevicePosition): void;

	setTorchMode(torchMode: AVCaptureTorchMode): void;

	setVideoOrientationIncludingPreviewLayer(videoOrientation: AVCaptureVideoOrientation, considerPreviewLayer: boolean): void;

	startCameraObservations(): void;

	startCapturing(): void;

	startCapturingAndPreview(): void;

	stopCameraObservations(): void;

	stopCapturing(): void;

	stopCapturingAndPreview(): void;

	toggleCamera(): void;

	toggleTorchMode(): void;

	transformCGRectForUIImageOrientationSize(source: CGRect, orientation: UIImageOrientation, imageSize: CGSize): CGRect;

	updateConfiguration(configuration: JMCaptureSessionManagerConfiguration): void;

	updateSessionPreset(): void;
}

declare class JMCaptureSessionManagerConfiguration extends NSObject {

	static alloc(): JMCaptureSessionManagerConfiguration; // inherited from NSObject

	static new(): JMCaptureSessionManagerConfiguration; // inherited from NSObject

	allowedCaptureDevicePositions: number;

	applyOrientationToPreview: boolean;

	cameraPosition: AVCaptureDevicePosition;

	cameraProcessingDataSource: CameraProcessingDataSource;

	cameraProcessingDelegate: CameraProcessingDelegate;

	isMocked: boolean;

	requiresBarcodeMetaData: boolean;

	requiresFaceMetaData: boolean;

	videoOrientation: AVCaptureVideoOrientation;
}

declare class JMCaptureSessionMocker extends NSObject {

	static alloc(): JMCaptureSessionMocker; // inherited from NSObject

	static new(): JMCaptureSessionMocker; // inherited from NSObject
}

declare class JMDeviceInfo extends NSObject {

	static alloc(): JMDeviceInfo; // inherited from NSObject

	static cpuCores(): number;

	static deviceInterfaceOrientation(): UIInterfaceOrientation;

	static deviceModel(): DeviceModel;

	static deviceModelDescription(): string;

	static deviceModelString(): string;

	static deviceNetworkType(): JMNetworkStatus;

	static deviceOrientation(): UIDeviceOrientation;

	static hasNotch(): boolean;

	static isIPHONE_X(): boolean;

	static isJailbrokenDevice(): boolean;

	static isPad(): boolean;

	static isPhone(): boolean;

	static new(): JMDeviceInfo; // inherited from NSObject
}

declare class JMDeviceOrientationChangeNotifier extends NSObject {

	static alloc(): JMDeviceOrientationChangeNotifier; // inherited from NSObject

	static new(): JMDeviceOrientationChangeNotifier; // inherited from NSObject

	delegate: JMDeviceOrientationChangeNotifierDelegate;

	supportedInterfaceOrientations: UIInterfaceOrientationMask;

	beginGeneratingDeviceOrientationChangeNotifications(): void;

	endGeneratingDeviceOrientationChangeNotifications(): void;
}

interface JMDeviceOrientationChangeNotifierDelegate extends NSObjectProtocol {

	deviceDidRotateToInterfaceOrientationFromInterfaceOrientation(toInterfaceOrientation: UIInterfaceOrientation, fromInterfaceOrientation: UIInterfaceOrientation): void;
}
declare var JMDeviceOrientationChangeNotifierDelegate: {

	prototype: JMDeviceOrientationChangeNotifierDelegate;
};

declare class JMEndpoint extends NSObject implements NSCopying {

	static alloc(): JMEndpoint; // inherited from NSObject

	static new(): JMEndpoint; // inherited from NSObject

	apiSecret: string;

	apiToken: string;

	dataCenter: JumioDataCenter;

	hardcoded: boolean;

	readonly hostname: string;

	name: string;

	production: boolean;

	publicKeyALE: string;

	publicKeyIdALE: string;

	selected: boolean;

	url: string;

	constructor(o: { dataCenter: JumioDataCenter; });

	URLForDataCenter(dataCenter: JumioDataCenter): string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	endpointDescription(): NSDictionary<any, any>;

	initWithDataCenter(dataCenter: JumioDataCenter): this;

	nameForDataCenter(dataCenter: JumioDataCenter): string;
}

declare class JMExtendedScanDebugging extends NSObject {

	static alloc(): JMExtendedScanDebugging; // inherited from NSObject

	static new(): JMExtendedScanDebugging; // inherited from NSObject

	currentDirectory: string;

	currentOcrFile: string;

	enabled: boolean;

	finalDirectory: string;

	logFinalized: boolean;

	rootDirectory: string;

	scanStarted: boolean;

	serverTasksLogFile: string;

	useCameraMocks: boolean;

	appendLineToLogStringKeyBoolValue(logString: NSMutableString, aKey: string, aBoolValue: boolean): void;

	appendLineToLogStringKeyValue(logString: NSMutableString, aKey: string, aValue: string): void;

	appendLineToLogStringKeyValueSeparator(logString: NSMutableString, aKey: string, aValue: string, aSeparator: string): void;

	createDirectoryAtPath(path: string): boolean;

	createLogStringFromServerTaskLogInfo(serverTaskLogInfo: JMServerTaskLogInfo): string;

	createLogTimestamp(): string;

	finalizeLogForScanReference(scanReference: string): void;

	logImageWithIdentifier(image: UIImage, identifier: string): void;

	logServerTaskLogInfo(serverTaskLogInfo: JMServerTaskLogInfo): void;

	removeDirectoryAtPath(path: string): boolean;

	renameFileAtPathTo(sourcePath: string, destinationPath: string): void;

	reset(): void;

	rootDirectoryWithName(directoryName: string): string;

	startLog(): void;

	systemDocumentsDirectoryPath(): string;

	writeDataAtPath(data: NSData, filePath: string): void;

	writeStringAtPath(string: string, filePath: string): void;
}

declare class JMFinalState extends JMState {

	static alloc(): JMFinalState; // inherited from NSObject

	static finalStateWithName(name: string): JMFinalState;

	static new(): JMFinalState; // inherited from NSObject

	static stateWithName(name: string): JMFinalState; // inherited from JMState
}

declare class JMFontUtilities extends NSObject {

	static alloc(): JMFontUtilities; // inherited from NSObject

	static boldFontWithSize(size: number): UIFont;

	static italicFontWithSize(size: number): UIFont;

	static lightFontWithSize(size: number): UIFont;

	static mediumFontWithSize(size: number): UIFont;

	static new(): JMFontUtilities; // inherited from NSObject

	static regularFontWithSize(size: number): UIFont;
}

declare class JMImage extends NSObject {

	static alloc(): JMImage; // inherited from NSObject

	static new(): JMImage; // inherited from NSObject

	croppedImageData: NSData;

	focusValueCroppedImage: number;

	imageSizeCroppedImage: CGSize;

	imageSizeSampleBuffer: CGSize;

	constructor(o: { sampleBuffer: any; });

	constructor(o: { sampleBuffer: any; croppedImageData: NSData; focusValue: number; imageSizeCroppedImage: CGSize; });

	initWithSampleBuffer(buffer: any): this;

	initWithSampleBufferCroppedImageDataFocusValueImageSizeCroppedImage(buffer: any, imageData: NSData, value: number, sizeCroppedImage: CGSize): this;
}

declare class JMImageBundle extends NSObject {

	static alloc(): JMImageBundle; // inherited from NSObject

	static new(): JMImageBundle; // inherited from NSObject
}

declare class JMImageUtilities extends NSObject {

	static alloc(): JMImageUtilities; // inherited from NSObject

	static applyBlurWithRadiusToImage(blurRadius: number, image: UIImage): UIImage;

	static cropRectFromImage(rect: CGRect, image: UIImage): UIImage;

	static imageWithColor(color: UIColor): UIImage;

	static imageWithColorWithSize(color: UIColor, size: CGSize): UIImage;

	static new(): JMImageUtilities; // inherited from NSObject

	static rotateImageByDegrees(image: UIImage, degrees: number): UIImage;

	static scaleImageProportionalyToSize(sourceImage: UIImage, targetSize: CGSize): UIImage;

	static scaleImageToSize(sourceImage: UIImage, targetSize: CGSize): UIImage;
}

declare class JMLoadingTableViewCell extends JMBaseTableViewCell {

	static alloc(): JMLoadingTableViewCell; // inherited from NSObject

	static appearance(): JMLoadingTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): JMLoadingTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): JMLoadingTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): JMLoadingTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): JMLoadingTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): JMLoadingTableViewCell; // inherited from UIAppearance

	static new(): JMLoadingTableViewCell; // inherited from NSObject

	loading: boolean;
}

declare var JMLoadingTableViewCellRightMargin: number;

declare class JMNavigationBarItem extends UIButton {

	static alloc(): JMNavigationBarItem; // inherited from NSObject

	static appearance(): JMNavigationBarItem; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): JMNavigationBarItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): JMNavigationBarItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): JMNavigationBarItem; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): JMNavigationBarItem; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): JMNavigationBarItem; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): JMNavigationBarItem; // inherited from UIButton

	static new(): JMNavigationBarItem; // inherited from NSObject

	constructor(o: { size: CGSize; });

	initWithSize(size: CGSize): this;

	setBackgroundColorForState(backgroundColor: UIColor, state: UIControlState): void;
}

declare class JMNavigationController extends UINavigationController {

	static alloc(): JMNavigationController; // inherited from NSObject

	static new(): JMNavigationController; // inherited from NSObject

	previewLayer: AVCaptureVideoPreviewLayer;
}

declare const enum JMNavigationControllerTransitionType {

	PushPop = 0,

	Custom = 1
}

declare class JMNetworkState extends JMState implements NSCopying {

	static alloc(): JMNetworkState; // inherited from NSObject

	static new(): JMNetworkState; // inherited from NSObject

	static stateWithName(name: string): JMNetworkState; // inherited from JMState

	readonly isCanceled: boolean;

	baseURL(): string;

	cancel(): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	didFailTask(): void;

	executeTask(): void;

	initStateMachine(): void;

	isCurrentStatusError(): boolean;

	isCurrentStatusSuccess(): boolean;

	isExecutable(): boolean;

	merchantApiSecret(): string;

	merchantApiToken(): string;

	reset(): void;
}

interface JMNetworkStateImplementation extends NSObjectProtocol {

	didEnterStateErrorBlock(): void;

	didEnterStateSuccessBlock(): void;

	willEnterStatePendingBlockImplementation(): void;
}
declare var JMNetworkStateImplementation: {

	prototype: JMNetworkStateImplementation;
};

declare class JMNetworkStateMachine extends JMStateMachine {

	static alloc(): JMNetworkStateMachine; // inherited from NSObject

	static new(): JMNetworkStateMachine; // inherited from NSObject

	static stateMachine(): JMNetworkStateMachine; // inherited from JMStateMachine
}

declare const enum JMNetworkStatus {

	NotReachable = 0,

	ReachableViaWiFi = 1,

	ReachableViaWWAN = 2
}

declare class JMOfflineManager extends NSObject {

	static alloc(): JMOfflineManager; // inherited from NSObject

	static new(): JMOfflineManager; // inherited from NSObject

	brandingEnabled: boolean;

	bundleIdentifier: string;

	bundleIdentifierInvalid: boolean;

	expirationDate: Date;

	expired: boolean;

	offlineModeActivated: boolean;

	token: string;

	tokenProvided: boolean;

	tokenVerified: boolean;

	dictionaryFromPayload(payload: string): NSDictionary<any, any>;

	reset(): void;
}

declare class JMReachability extends NSObject {

	static alloc(): JMReachability; // inherited from NSObject

	static new(): JMReachability; // inherited from NSObject

	static reachabilityForInternetConnection(): JMReachability;

	static reachabilityWithAddress(hostAddress: interop.Pointer | interop.Reference<sockaddr>): JMReachability;

	static reachabilityWithHostName(hostName: string): JMReachability;

	connectionRequired(): boolean;

	currentReachabilityStatus(): JMNetworkStatus;

	startNotifier(): boolean;

	stopNotifier(): void;
}

declare class JMResourceLoader extends NSObject {

	static alloc(): JMResourceLoader; // inherited from NSObject

	static imageResourceWithName(imageName: string): UIImage;

	static new(): JMResourceLoader; // inherited from NSObject

	static sharedInstance(): JMResourceLoader;

	static suffixForImagesDependingOnDeviceScreenScale(): string;

	getFontWithNameBundle(name: string, bundle: NSBundle): NSData;

	getImageWithNameBundle(imageName: string, bundleName: NSBundle): UIImage;

	getOCRRootPathForBundle(bundle: NSBundle): string;

	getPlistFromBundle(bundle: NSBundle): NSDictionary<any, any>;

	killYourself(): void;
}

declare class JMRoi extends JMBaseView {

	static alloc(): JMRoi; // inherited from NSObject

	static appearance(): JMRoi; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): JMRoi; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): JMRoi; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): JMRoi; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): JMRoi; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): JMRoi; // inherited from UIAppearance

	static new(): JMRoi; // inherited from NSObject

	borderColor: UIColor;

	borderWidth: number;

	readonly contentInset: number;

	readonly roundCorners: UIRectCorner;

	readonly roundCornersRadius: number;

	cornerRadii(): CGSize;

	cropBezierPathFromCropRect(cropRect: CGRect): UIBezierPath;

	cropRect(): CGRect;
}

declare class JMRoiOverlay extends JMBaseView {

	static alloc(): JMRoiOverlay; // inherited from NSObject

	static appearance(): JMRoiOverlay; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): JMRoiOverlay; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): JMRoiOverlay; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): JMRoiOverlay; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): JMRoiOverlay; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): JMRoiOverlay; // inherited from UIAppearance

	static new(): JMRoiOverlay; // inherited from NSObject

	readonly contentInset: UIEdgeInsets;

	roi: JMRoi;

	roiSettings: JMRoiSettings;

	yOffsetCache: number;

	constructor(o: { roiAspectRatio: number; });

	initWithRoiAspectRatio(aspectRatio: number): this;

	landscapeLayoutConstraints(): NSArray<any>;

	landscapeRoiAspectRatioConstraint(): NSLayoutConstraint;

	normalizeOffset(offset: number): number;

	portraitLayoutConstraints(): NSArray<any>;

	portraitRoiAspectRatioConstraint(): NSLayoutConstraint;

	roiBounds(): CGRect;

	setContentInsets(insets: UIEdgeInsets): void;

	setRoiAspectRatio(aspectRatio: number): void;

	setRoiOffset(offset: CGPoint): void;

	updateConstraintsFromLandscapeConstraints(constraints: NSArray<any>): void;

	updateConstraintsFromPortraitConstraints(constraints: NSArray<any>): void;
}

declare class JMRoiSettings extends NSObject {

	static alloc(): JMRoiSettings; // inherited from NSObject

	static new(): JMRoiSettings; // inherited from NSObject
}

declare class JMSDK extends NSObject {

	static alloc(): JMSDK; // inherited from NSObject

	static new(): JMSDK; // inherited from NSObject

	bundle: NSBundle;

	readonly plistDictionary: NSDictionary<any, any>;

	bundleValueForKey(key: string): string;

	mobileDeviceDetails(): NSDictionary<any, any>;

	sdkVersionString(): string;

	sdkVersionStringFull(): string;

	shortVersionString(): string;

	versionString(): string;
}

declare class JMScanMockHelper extends NSObject {

	static alloc(): JMScanMockHelper; // inherited from NSObject

	static new(): JMScanMockHelper; // inherited from NSObject

	constructor(o: { captureSessionManager: JMCaptureSessionManager; });

	addRecordButtonToView(view: UIView): void;

	initWithCaptureSessionManager(captureSessionManager: JMCaptureSessionManager): this;

	isExtendedDebuggingEnabled(): boolean;

	mockPath(): string;

	recordButtonTapped(): void;

	shouldDisplayRecordButton(): boolean;

	startMocking(): void;

	stopMocking(): void;

	stopRecording(): void;

	videoMockWriterPath(): string;
}

declare class JMScreenInfo extends NSObject {

	static alloc(): JMScreenInfo; // inherited from NSObject

	static isScreen3Dot5Inch(): boolean;

	static isScreenAtLeast4Dot7Inch(): boolean;

	static isScreenAtLeast4Inch(): boolean;

	static isScreenAtLeast5Dot5Inch(): boolean;

	static new(): JMScreenInfo; // inherited from NSObject
}

declare class JMServerTaskLogInfo extends NSObject {

	static alloc(): JMServerTaskLogInfo; // inherited from NSObject

	static new(): JMServerTaskLogInfo; // inherited from NSObject

	data: NSData;

	error: NSError;

	executionTime: number;

	httpBody: string;

	statusCode: number;

	taskClass: typeof NSObject;

	reset(): void;
}

declare class JMState extends JMBaseState implements NSCopying {

	static alloc(): JMState; // inherited from NSObject

	static new(): JMState; // inherited from NSObject

	static stateWithName(name: string): JMState;

	required: boolean;

	addTransition(transition: JMStateTransition): void;

	addTransitionToTargetWithNameForEvent(targetState: JMBaseState, name: string, event: JMStateTransitionEvent): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	removeTransition(transition: JMStateTransition): void;

	transitionsSet(): NSSet<any>;
}

declare class JMStateMachine extends NSObject {

	static alloc(): JMStateMachine; // inherited from NSObject

	static new(): JMStateMachine; // inherited from NSObject

	static stateMachine(): JMStateMachine;

	currentState: JMBaseState;

	readonly fireEventLock: NSRecursiveLock;

	readonly initialState: JMBaseState;

	readonly isActive: boolean;

	activate(): void;

	addState(state: JMBaseState): void;

	allStates(): NSSet<any>;

	canFireEventWithName(eventName: string): boolean;

	cleanUp(): void;

	fireEventWithName(eventName: string): boolean;

	isCurrentStateName(name: string): boolean;

	removeState(state: JMBaseState): void;

	reset(): void;

	resetToStateWithName(stateName: string): void;

	stateWithName(name: string): JMState;

	transitionWithEventName(name: string): JMStateTransition;
}

declare class JMStateMachineController extends NSObject {

	static alloc(): JMStateMachineController; // inherited from NSObject

	static new(): JMStateMachineController; // inherited from NSObject

	readonly stateMachine: JMStateMachine;

	initData(): void;

	initStateMachine(): void;

	initUI(): void;

	takeOverControl(): void;
}

declare class JMStateTransition extends NSObject implements NSCopying {

	static alloc(): JMStateTransition; // inherited from NSObject

	static new(): JMStateTransition; // inherited from NSObject

	static resetTransitionFromSourceStateTargetState(sourceState: JMBaseState, targetState: JMBaseState): JMStateTransition;

	static transitionWithNameSourceStateTargetStateEvent(name: string, sourceState: JMBaseState, targetState: JMBaseState, event: JMStateTransitionEvent): JMStateTransition;

	readonly event: JMStateTransitionEvent;

	readonly name: string;

	readonly sourceState: JMBaseState;

	readonly targetState: JMBaseState;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	isResetTransition(): boolean;
}

declare class JMStateTransitionEvent extends NSObject implements NSCopying {

	static alloc(): JMStateTransitionEvent; // inherited from NSObject

	static new(): JMStateTransitionEvent; // inherited from NSObject

	static transitionEventWithName(name: string): JMStateTransitionEvent;

	readonly name: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class JMString extends NSObject {

	static alloc(): JMString; // inherited from NSObject

	static new(): JMString; // inherited from NSObject

	mutableString: NSMutableString;

	constructor(o: { string: string; });

	appendString(aString: string): void;

	deleteCharactersInRange(aRange: NSRange): void;

	initWithString(aString: string): this;

	insertStringAtIndex(aString: string, anIndex: number): void;

	replaceCharactersInRangeWithString(aRange: NSRange, aString: string): void;

	replaceOccurrencesOfStringWithStringOptionsRange(target: string, replacement: string, opts: NSStringCompareOptions, searchRange: NSRange): number;

	setString(aString: string): void;
}

declare class JMStringUtilities extends NSObject {

	static alloc(): JMStringUtilities; // inherited from NSObject

	static formatStringByTrimmingLeadingAndTrailingWhiteSpaceForMaximumLength(string: string, maxLength: number): string;

	static formatStringByTrimmingLeadingAndTrailingWhiteSpaceForMaximumLengthWithRegex(string: string, maxLength: number, regex: string): string;

	static formatStringForMaximumLengthRegex(string: string, maxLength: number, regex: string): string;

	static indexOfInString(text: string, string: string): number;

	static isNumericString(string: string): boolean;

	static new(): JMStringUtilities; // inherited from NSObject

	static secureSubstringFromIndexInString(index: number, string: string): string;

	static stringAttributesDictionaryWithFontFontColorAlignment(font: UIFont, fontColor: UIColor, alignment: NSTextAlignment): NSDictionary<any, any>;

	static stringAttributesDictionaryWithFontFontColorShadowAlignment(font: UIFont, fontColor: UIColor, shadow: NSShadow, alignment: NSTextAlignment): NSDictionary<any, any>;

	static trimLeadingTrailingWhiteSpaceFromString(string: string): string;

	static trimStringToMaximumLength(string: string, maxLength: number): string;
}

declare class JMSystemInfo extends NSObject {

	static alloc(): JMSystemInfo; // inherited from NSObject

	static isSystemVersionAtLeastOS11(): boolean;

	static new(): JMSystemInfo; // inherited from NSObject

	static systemVersionNumber(): number;

	static systemVersionString(): string;
}

declare class JMThemeableButton extends UIButton {

	static alloc(): JMThemeableButton; // inherited from NSObject

	static appearance(): JMThemeableButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): JMThemeableButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): JMThemeableButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): JMThemeableButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): JMThemeableButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): JMThemeableButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): JMThemeableButton; // inherited from UIButton

	static new(): JMThemeableButton; // inherited from NSObject

	cornerRadius: number;

	constructor(o: { size: CGSize; });

	backgroundColorForState(state: UIControlState): UIColor;

	initWithSize(size: CGSize): this;

	setBackgroundColorForState(backgroundColor: UIColor, state: UIControlState): void;

	setDefaultValues(): void;

	setTitle(title: string): void;
}

declare const enum JumioCameraPosition {

	Back = 0,

	Front = 1
}

declare var JumioCoreVersionNumber: number;

declare var JumioCoreVersionString: interop.Reference<number>;

declare const enum JumioDataCenter {

	US = 0,

	EU = 1
}

declare var kCameraFocusIndicatorViewHeight: number;

declare var kCameraFocusIndicatorViewWidth: number;

declare var kConfigurationKeyAccept: string;

declare var kConfigurationKeyAcceptEncodingKey: string;

declare var kConfigurationKeyAcceptEncodingValue: string;

declare var kConfigurationKeyAuthorization: string;

declare var kConfigurationKeyBoundary: string;

declare var kConfigurationKeyContentEncodingKey: string;

declare var kConfigurationKeyContentEncodingValue: string;

declare var kConfigurationKeyContentType: string;

declare var kConfigurationValueALE: string;

declare var kConfigurationValueBoundary: string;

declare var kConfigurationValueJSON: string;

declare var kConfigurationValueMultipartForm: string;

declare var kJMNetworkStateErrorState: string;

declare var kJMNetworkStateIdleState: string;

declare var kJMNetworkStatePendingState: string;

declare var kJMNetworkStateSuccessState: string;

declare var kJMNetworkStateTransitionError: string;

declare var kJMNetworkStateTransitionEventToError: string;

declare var kJMNetworkStateTransitionEventToPending: string;

declare var kJMNetworkStateTransitionEventToSuccess: string;

declare var kJMNetworkStateTransitionPending: string;

declare var kJMNetworkStateTransitionSuccess: string;

declare var kJMSDKBundleShortVersionKey: string;

declare var kJMSDKBundleVersionKey: string;

declare var kReachabilityChangedNotification: string;

declare var kServerTaskHeaderUserAgentKey: string;

declare var kServerTaskHeaderXTrackingIdKey: string;
