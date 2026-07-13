// Event-related constants
// EVENT_REGEX is used in gatsby-node.js GraphQL queries to filter event MDX files
// from the content/events/ directory
const EVENT_REGEX = '/content/events/';

// Number of events displayed per page on the events board
const EVENT_PER_PAGE = 6;

module.exports = { EVENT_REGEX, EVENT_PER_PAGE };
