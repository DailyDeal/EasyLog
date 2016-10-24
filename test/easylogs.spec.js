import chai from 'chai';
import EasyLogs from '../lib/easylogs';

chai.expect();

const expect = chai.expect;

let log;

describe('Given an instance of EasyLogs', () => {
  before(() => {
    log = new EasyLogs();
  });

  it('should be an instanceof EasyLogs', () => {
    expect(log instanceof EasyLogs).to.be.true;
  });

  it('if no level is passed, should be 4 by default', () => {
    expect(log.getLevel()).to.be.equal(4);
  });

  it('if the level passed is not a string, should throw', () => {
    expect(log.setLevel.bind(null, '1')).to.throw;
  });

  it('if level is changes, it should update', () => {
    log.setLevel(1);
    expect(log.getLevel()).to.be.equal(1);
  });

  it('if level is 4, should log everything', () => {
    const levels = [1, 2, 3, 4];

    log.setLevel(4);

    const willLog = levels
      .map(level => log.shouldLog(level))
      .every(res => res === true);

    expect(willLog).to.be.true;
  });

  it('if level is 0, logging should be disabled', () => {
    const levels = [1, 2, 3, 4];

    log.setLevel(0);

    const willLog = levels
      .map(level => log.shouldLog(level))
      .every(res => res === true);

    expect(willLog).to.be.false;
  });
});
