const { expect } = require('chai');
const path = require('path');
const TestRunner = require('medic-conf-test-harness');

const harness = new TestRunner({
  directory: __dirname,  
});

describe('does it work in nools', () => {
  before(async () => await harness.start());
  after(async () => { return await harness.stop(); });
  beforeEach(async () => await harness.clear());

  it('doesnt crash nools', async () => {
    expect(await harness.getTasks()).to.be.empty;
  });
});
