jasmine.DEFAULT_TIMEOUT_INTERVAL = 11000;

        beforeAll(function(done){
            loadFixtures('index-fixture.html');
            setTimeout(function() {   
                done();
            }, 5000);
        });
