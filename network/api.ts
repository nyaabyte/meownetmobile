export async function api(endpoint: String, input?: String) {
  const res = await fetch(
    `https://api.nyabyte.dev/${endpoint}`,
    input
      ? {
          method: 'post',
          body: JSON.stringify(input),
        }
      : {
          method: 'get',
        }
  );
  if (!res.ok) throw 'Fetch responded with code: ' + res.status;

  const data = await res.json();
  if (data.error) throw data.error;
  return data;
}
