/// <reference lib="webworker" />


addEventListener('message', ({ data }) => {
  // Perform computation here
  const result = data.value * 2;
  postMessage(result);
});
