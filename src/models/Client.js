export default class Client {
  constructor() {
    this.address = 'localhost=1234';
    this.channels = ['chn1', 'chn2'];
    this.action = 'Sending [test.txt] file to 192.168.1.4=7848 throuhg channel chn3...';
    this.received = 0;
    this.sent = 485;
  }
}
