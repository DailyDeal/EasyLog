export default class EasyLogs {
  constructor(level) {
    // Logging levels:
    this.LOG = {
      INFO: 4,
      DEBUG: 3,
      WARN: 2,
      ERROR: 1,
      DISABLED: 0
    };
    this.setLevel(level);
  }

  getLevel() {
    return this.level;
  }

  setLevel(level = this.LOG.INFO) {
    if (typeof level !== 'number') {
      throw new Error(`SetLevel method expected a Number as argument but got ${typeof level} instead`);
    }
    this.level = level;
  }

  getConsole(method) {
    return console[method] ? console[method] : console.log;
  }

  shouldLog(logLevel) {
    return this.level > 0 && this.level <= logLevel;
  }

  beautify(value) {
    return JSON.stringify(value, null, 2);
  }

  info(message) {
    if (this.shouldLog(this.LOG.INFO)) {
      const console = this.getConsole('info');
      console(`INFO: ${message}`);
    }
  }

  debug(message) {
    if (this.shouldLog(this.LOG.DEBUG)) {
      const console = this.getConsole('log'); // Yeah, stupid AF, but for consistency...
      console(`DEBUG: ${message}`);
    }
  }

  warn(message) {
    if (this.shouldLog(this.LOG.WARN)) {
      const console = this.getConsole('warn');
      console(`WARNING: ${message}`);
    }
  }

  error(message) {
    if (this.shouldLog(this.LOG.ERROR)) {
      const console = this.getConsole('error');
      console(`ERROR: ${message}`);
    }
  }
}
