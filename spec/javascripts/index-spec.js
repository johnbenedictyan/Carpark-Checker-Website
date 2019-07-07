/* global jasmine */
/* global axios */
/* global beforeAll */
/* global loadFixtures */
/* global expect */

jasmine.DEFAULT_TIMEOUT_INTERVAL = 11000;

beforeAll(function(done) {
    loadFixtures('index-fixture.html');
    setTimeout(function() {
        done();
    }, 5000);
});

describe('Testing the functionality, this is the checklist', () => {
    it('should add an item', () => {
        expect(true).toBe(true);
        //...
    });
    it('should delete an item', () => {
        expect(true).toBe(true);
        //...
    });
    it('should mark item as complete', () => {
        expect(true).toBe(true);
        //...
    });
});

describe('API tests', () => {

 it('Should get data from the carpark availability dataset api.', (done) => {
   axios.get("https://api.data.gov.sg/v1/transport/carpark-availability")
    .then((response) => {
      expect(response.status).toBe(200); 
      done();
    });
 });
 
 it('Should get data from the carpark information dataset api.', (done) => {
   axios.get("https://data.gov.sg/api/action/datastore_search", { params: { resource_id: "139a3035-e624-4f56-b63f-89ae28d4ae4c", limit: "20" } })
    .then((response) => {
      expect(response.status).toBe(200); 
      done();
    });
 });
 
});