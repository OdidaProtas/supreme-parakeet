
export default async function handleException(promise: Promise<any>) {
  try {
    return [await promise, null];
  } catch (e) {
    return [null, e];
  }
}
