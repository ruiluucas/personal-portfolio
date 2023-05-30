'use client'

import { Provider } from 'react-redux'
import store from '@/context/store.jsx'

export default function ContextProvider({ children }: any) {
  return <Provider store={store}>{children}</Provider>
}
