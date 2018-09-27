const STEPS = [
  'Create post component',
  'Fetch posts',
  'Render posts list',
  'Open post comments'
];


export const getSteps = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(STEPS);
    }, 3000)
  })
};
