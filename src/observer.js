class Observer {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  broadcast(message) {
    this.subscribers.forEach((subscriber) => {
      subscriber.innerText = message;
    });
  }
}

class SubsAddController {
  constructor(observer) {
    this.observer = observer;
  }

  addNewSubscriber() {
    const observer = this.observer;
    function addSubscriber(event) {
      event.preventDefault();
      const subscriber = document.createElement('div');
      subscriber.className = 'subscriber';
      document.body.appendChild(subscriber);
      observer.subscribe(subscriber);
    }
    const button = document.querySelector('#add');
    button.addEventListener('click', addSubscriber);
  }
}

class NotificationController {
  constructor(observer) {
    this.observer = observer;
  }

  notifyAll() {
    const observer = this.observer;
    const inputText = document.querySelector('input[type = text]');
    function notify() {
      observer.broadcast(inputText.value);
    }
    inputText.addEventListener('input', notify);
  }
}

const observer = new Observer();
const addController = new SubsAddController(observer);
const notifyController = new NotificationController(observer);

addController.addNewSubscriber();
notifyController.notifyAll();
