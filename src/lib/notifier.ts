export const createNotifier = () => {
  const subs = new Set<() => void>()

  const subscribe = (listener: () => void) => {
    subs.add(listener)

    return () => {
      subs.delete(listener)
    }
  }

  const notify = () => {
    for (const listener of subs) {
      listener()
    }
  }

  return {
    notify,
    subscribe,
  }
}
