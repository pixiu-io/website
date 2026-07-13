import { useState, useCallback } from 'react';
import algoliasearch from 'algoliasearch/lite';

// Algolia search hook for the search modal
// Returns { searchClient, searchQuery, setSearchQuery, onSearchStateChange }
const useAlgoliaSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID || 'latency',
    process.env.GATSBY_ALGOLIA_SEARCH_KEY || '6be0576ff61c053d5f9a3225e2a90f76'
  );

  const onSearchStateChange = useCallback((state) => {
    // Update search query from Algolia state
    if (state && state.query !== undefined) {
      setSearchQuery(state.query);
    }
  }, []);

  return {
    searchClient,
    searchQuery,
    setSearchQuery,
    onSearchStateChange,
  };
};

export default useAlgoliaSearch;
