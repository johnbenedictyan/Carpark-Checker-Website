/* global jasmine */
/* global axios */
/* global beforeAll */
/* global loadFixtures */
/* global expect */

jasmine.DEFAULT_TIMEOUT_INTERVAL = 11000;

// beforeAll(function(done) {
//     loadFixtures('index-fixture.html');
//     setTimeout(function() {
//         done();
//     }, 5000);
// });

describe('Testing the CarparkCondition function, this is the checklist', () => {
    it('should output colours  when given the relevant inputs', () => {
        expect(CarparkCondition(30, 100)).toBe("red");
        expect(CarparkCondition(50, 100)).toBe("yellow");
        expect(CarparkCondition(100, 100)).toBe("green");
    });
    it('should output an erro when given incorrect inputs', () => {
        expect(CarparkCondition("string", "string")).toBe("The given input type is not accepted");
        expect(CarparkCondition(undefined, undefined)).toBe("The given input type is not accepted");
        expect(CarparkCondition(true, true)).toBe("The given input type is not accepted");
        expect(CarparkCondition(false, false)).toBe("The given input type is not accepted");
    });
});

describe('Testing the axios get calls to the different APIs, this is the checklist', () => {

    it('should get data from the carpark availability dataset api.', (done) => {
        axios.get("https://api.data.gov.sg/v1/transport/carpark-availability")
            .then((response) => {
                expect(response.status).toBe(200);
                done();
            });
    });

    it('should get data from the carpark information dataset api.', (done) => {
        axios.get("https://data.gov.sg/api/action/datastore_search", { params: { resource_id: "139a3035-e624-4f56-b63f-89ae28d4ae4c", limit: "20" } })
            .then((response) => {
                expect(response.status).toBe(200);
                done();
            });
    });

});

describe('Testing the isInArray function, this is the checklist', () => {
    it('should output true when the object is present in the array', () => {
        expect(isInArray([1, 2, 3], 1)).toBe(true);
        expect(isInArray(["x", "y", "z"], "x")).toBe(true);
    });
    it('should output false when the object is present in the array', () => {
        expect(isInArray([1, 2, 3], 100)).toBe(false);
        expect(isInArray(["x", "y", "z"], "test")).toBe(false);
    });
    it('should return an error when the object passed into the array parameter is not an array', () => {
        expect(isInArray(("a", "b", "c"), 100)).toBe("The array input is not an array");
        expect(isInArray({ test: "test" }, 100)).toBe("The array input is not an array");
        expect(isInArray("string", 100)).toBe("The array input is not an array");
        expect(isInArray(100, 100)).toBe("The array input is not an array");
        expect(isInArray(undefined, 100)).toBe("The array input is not an array");
        expect(isInArray(true, 100)).toBe("The array input is not an array");
        expect(isInArray(false, 100)).toBe("The array input is not an array");
    });
    it('should return an error when the object passed into the item parameter is undefined', () => {
        expect(isInArray([1, 2, 3], undefined)).toBe("The value input is undefined");
    });
    it('should return an error when the object passed into the array parameter is not an array and the object passes into the value parameter is undefined', () => {
        expect(isInArray(("a", "b", "c"), undefined)).toBe("The array input is not an array and the value input is undefined");
        expect(isInArray({ test: "test" }, undefined)).toBe("The array input is not an array and the value input is undefined");
        expect(isInArray("string", undefined)).toBe("The array input is not an array and the value input is undefined");
        expect(isInArray(100, undefined)).toBe("The array input is not an array and the value input is undefined");
        expect(isInArray(undefined, undefined)).toBe("The array input is not an array and the value input is undefined");
        expect(isInArray(true, undefined)).toBe("The array input is not an array and the value input is undefined");
        expect(isInArray(false, undefined)).toBe("The array input is not an array and the value input is undefined");
    });
});

describe('Testing the resolveAfterXSeconds function, this is the checklist', () => {
    it('should output a resolved promise when a valid time is passed in the parameters', () => {
        return resolveAfterXSeconds(1).then(response => {
            expect(response).toBe("It has been resolved");
        });
    });
    it('should output an error when an invalid input is passed in the parameters', () => {
        expect(resolveAfterXSeconds("string")).toBe("The given input type is not accepted");
        expect(resolveAfterXSeconds(undefined)).toBe("The given input type is not accepted");
        expect(resolveAfterXSeconds(true)).toBe("The given input type is not accepted");
        expect(resolveAfterXSeconds(false)).toBe("The given input type is not accepted");
    });
});
