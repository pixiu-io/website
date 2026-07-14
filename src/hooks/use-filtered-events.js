import { useMemo } from 'react';

// Filter events based on active filter selections
// events: array of event objects (each with `type` and `region` frontmatter)
// activeFilters: { type: string[], region: string[] }
// Returns filtered array of events
const useFilteredEvents = (events, activeFilters) => {
  const filteredEvents = useMemo(() => {
    if (!events) return [];
    if (!activeFilters) return events;

    return events.filter((event) => {
      const typeFilters = activeFilters.type;
      const regionFilters = activeFilters.region;

      const typeMatch =
        !typeFilters || typeFilters.length === 0 || typeFilters.includes(event.type);
      const regionMatch =
        !regionFilters ||
        regionFilters.length === 0 ||
        regionFilters.includes(event.region);

      return typeMatch && regionMatch;
    });
  }, [events, activeFilters]);

  return filteredEvents;
};

export default useFilteredEvents;
