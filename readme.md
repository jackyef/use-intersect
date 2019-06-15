# useIntersect()

This is a simple React custom hook to easily use IntersectionObserver in your React app.

## Usage
Simply call `useImpression` and pass it a function that you want to be fired once an element is intersected.
The hook will return a React ref object for you to assign to your element.

```javascript
/**
 * @param {Function} onIntersect Function to call once intersected
 * @param {Object} optionsData Options object used to initialize IntersectionObserver
 * @param {boolean} onlyOnce Whether to stop observing after onIntersect is fired once
 * 
 * @returns {Object} A ref object created by useRef. Use this to assign to the element you want to observe.
 */
 const Component = () => {
   const targetRef = useImpression(() => console.log('impressed!'));
 
   return <div ref={targetRef}>Something here</div>
 }
```