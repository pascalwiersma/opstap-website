/** Server-side check van de anti-spam-rekensom uit components/Rekensom.tsx — voorkomt dat een bot de client overslaat en direct naar de API post. */
export function rekensomKlopt(a: unknown, b: unknown, antwoord: unknown): boolean {
  const numA = Number(a)
  const numB = Number(b)
  const numAntwoord = Number(antwoord)
  if (!Number.isFinite(numA) || !Number.isFinite(numB) || !Number.isFinite(numAntwoord)) return false
  return numAntwoord === numA + numB
}
