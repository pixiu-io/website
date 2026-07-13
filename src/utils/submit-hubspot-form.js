// Submit a HubSpot form via the HubSpot API
// Used by the subscribe form component
const HUBSPOT_PORTAL_ID = '9197153';
const HUBSPOT_BASE_URL = 'https://api.hsforms.com/submissions/v3/integration/submit';

async function submitHubspotForm(formId, fields, context = {}) {
  const url = `${HUBSPOT_BASE_URL}/${HUBSPOT_PORTAL_ID}/${formId}`;

  const payload = {
    fields,
    context,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `HubSpot form submission failed with status ${response.status}`
    );
  }

  return response.json();
}

export default submitHubspotForm;
