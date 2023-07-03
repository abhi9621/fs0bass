class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    addEventListener(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }
  
    removeEventListener(event, listener) {
      if (this.events[event]) {
        this.events[event] = this.events[event].filter(
          (existingListener) => existingListener !== listener
        );
      }
    }
  
    emit(event, data) {
      if (this.events[event]) {
        this.events[event].forEach((listener) => listener(data));
      }
    }
  }
  
  // Example usage
  const emitter = new EventEmitter();
  
  // Add event listeners
  const listener1 = (data) => console.log('Listener 1:', data);
  const listener2 = (data) => console.log('Listener 2:', data);
  
  emitter.addEventListener('customEvent', listener1);
  emitter.addEventListener('customEvent', listener2);
  
  // Emit the event
  emitter.emit('customEvent', 'Hello, World!');
  
  // Remove event listener
  emitter.removeEventListener('customEvent', listener2);
  
  // Emit the event again
  emitter.emit('customEvent', 'Hello again!');