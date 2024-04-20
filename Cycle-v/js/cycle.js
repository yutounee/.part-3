import config from './config.js';
import * as utils from './utils.js';
import * as templates from './templates.js';

class Cycle {
  target = config.target;
  data = config.data;
  len = this.data.length;
  index = config.index;
  interval = config.interval;
  mode = config.mode;

  constructor() {
    this._index = this.index - 1;
    this._interval;
  }

  getIncrease() {
    return this._index < this.len - 1 ? this._index += 1 : 0;
  }

  getDecrease() {
    return this._index > 0 ? this._index -= 1 : this.len - 1;
  }

  setState(newIndex, oldIndex) {
    switch (this.mode) {
      case 'fade':
        this.target.children[0].children[0].children[newIndex].classList.add('cycle-fadeIn');
        this.target.children[0].children[0].children[oldIndex].classList.remove('cycle-fadeIn');
        break;
      case 'slide':
        this.target.children[0].children[0].style.left = -newIndex * 100 + '%';
        break;
    }
    
    this.target.children[1].children[newIndex].classList.add('cycle-pagination-active');
    this.target.children[1].children[oldIndex].classList.remove('cycle-pagination-active');
    this._index = newIndex;
  }

  clickHandler({ target }) {
    const { tagName, type } = target;

    if (tagName !== 'INPUT' || type !== 'button') return;
    const direction = target.dataset.value;
    const oldIndex = this._index;

    if (direction === 'next') {
      this.setState(this.getIncrease(), oldIndex);
    } else {
      this.setState(this.getDecrease(), oldIndex);
    }
  }

  updateIndex() {
    const oldIndex = this._index;

    this.setState(this.getIncrease(), oldIndex);
  }

  hoverTarget(e) {
    switch (e.type) {
      case 'mouseenter':
        clearInterval(this._interval);
        break;
      case 'mouseleave':
        this._interval = setInterval(this.updateIndex.bind(this), this.interval.duration * 1000);
        break;
      default:
    }
  }

  setEvent() {
    this.target.addEventListener('click', (e) => this.clickHandler(e));

    if (!this.interval.isAuto) return;

    this.target.addEventListener('mouseenter', (e) => this.hoverTarget(e));
    this.target.addEventListener('mouseleave', (e) => this.hoverTarget(e));
  }

  setInit() {
    const body = this.target.children[0];
    const ul = body.children[0];
    const foot = body.nextElementSibling;

    // make DOM
    ul.innerHTML = utils.makeStr(this.data, templates.item, this._index, this.mode);
    foot.innerHTML = utils.makeStr(this.data, templates.paginationItem, this._index);

    // init layout
    switch (this.mode) {
      case 'fade':
        this.target.classList.add('cycle-fade');
        break;
      case 'slide':
        this.target.classList.add('cycle-slide');
        this.target.children[0].classList.add('mask');
        ul.style.width = this.len * 100 + '%';
        ul.style.left = -this._index * 100 + '%';
        break;
      default:
        this.target.classList.add('cycle-fade');
    }

    // false: return 
    if (!this.interval.isAuto) return;

    // true: setInterval
    this._interval = setInterval(this.updateIndex.bind(this), this.interval.duration * 1000);
  }

  static getInstance() {
    if (!this._instance) {
      this._instance = new Cycle();
    }

    return this._instance;
  }
}

const cycle = Cycle.getInstance();

cycle.setInit();
cycle.setEvent();
