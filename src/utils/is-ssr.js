// Check if currently server-side rendering
// Used by card-item components to guard browser-only logic
const isSSR = typeof window === 'undefined';

export default isSSR;
