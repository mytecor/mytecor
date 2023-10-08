export type Symbol = {
  width?: number
  height?: number
  id: string
  url: string | URL
}

export const spritePromises = new Map<Symbol['url'], Promise<void>>()

export const injectSprite = (symbol: Symbol): Symbol => {
  const { url } = symbol

  if (!spritePromises.has(url)) {
    const promise = fetch(url).then(async (res) => {
      document.body.insertAdjacentHTML('beforeend', await res.text())
    })

    spritePromises.set(url, promise)
  }

  return symbol
}

export const removeSprite = (symbol: Symbol): void => {
  const { url, id } = symbol

  spritePromises.delete(url)
  document.getElementById(id)?.closest('svg')?.remove()
}
