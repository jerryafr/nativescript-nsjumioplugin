var Nsjumioplugin = require("nativescript-nsjumioplugin").Nsjumioplugin;
var nsjumioplugin = new Nsjumioplugin();

describe("greet function", function() {
    it("exists", function() {
        expect(nsjumioplugin.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(nsjumioplugin.greet()).toEqual("Hello, NS");
    });
});