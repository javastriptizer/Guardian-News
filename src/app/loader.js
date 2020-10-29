import { Spinner } from 'spin.js';
import './assets/styles/loader.scss';

class Loader {
  loader = {};

  constructor(target) {
    this.target = target;

    this.loader = new Spinner();
  }

  start() {
    this.loader.spin(this.target);
  }

  stop() {
    this.loader.stop();
  }
}

export default Loader;
