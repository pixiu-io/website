// Create event filter objects from types and regions
// Used by gatsby-node.js to pass filter data to the events page
// Each filter has: { name (machine key), label (display), items: [{ name }] }
function createEventFilters(types, regions) {
  return [
    {
      name: 'type',
      label: 'Type',
      items: types.map((name) => ({ name })),
    },
    {
      name: 'region',
      label: 'Region',
      items: regions.map((name) => ({ name })),
    },
  ];
}

module.exports = { createEventFilters };
