export type ModelMutator<M> = <K extends keyof M>(
  id: string,
  key: K,
  value: M[K]
) => void
