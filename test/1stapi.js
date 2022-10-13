const axios = require('axios');
const { expect, assert } = require('chai');
const should = require('chai').should();
const { faker } = require('@faker-js/faker')
 

describe('apiTask', function () {

    //async way 
    it('get Weather forecasts Request async function', async function () {
      const response = await axios.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json');
      //console.log(response);
      //expect(response.status).to.equal(200);
      //assert.equal(response.status,200);
      response.status.should.equal(200);
      expect(response.data.product).to.equal('astro');
      expect(response.data.dataseries[0].timepoint).to.equal(3);
      //expect(response.data.dataseries[.wind10m.speed]).to.all.not.null; chai things lib needed 
      //response.data.dataseries.wind10m.should.all.have.members('speed'); chai things lib needed 
      response.data.dataseries.every(i => expect(i.wind10m).to.contains.all.keys('speed'))
  });

  it('Predict age based on a name Request async function', async function () {
    const response = await axios.get('https://api.agify.io', { params: { name: faker.name.firstName() } });
    //console.log(response);
    assert.equal(response.status,200);
});

it('post method create user async function', async function () {
  const response = await axios.post('https://reqres.in/api/users', {
    data: {
    "name": faker.name.firstName(),
    "job": faker.name.jobTitle()
    }
});
  //console.log(response);
  assert.equal(response.status,201);
});

});