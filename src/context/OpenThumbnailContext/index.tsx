import { createContext, useContext } from 'react'
export type GlobalContent = {
  openThumbnail: string
  setOpenThumbnail: (c: string) => void
}
export const OpenThumbnailContext = createContext<GlobalContent>({
  openThumbnail: '', // set a default value
  setOpenThumbnail: () => {},
})
export const useGlobalContext = () => useContext(OpenThumbnailContext)
