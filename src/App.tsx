import React, { lazy, Suspense } from 'react'
import styles from './App.less'

const Page1 = lazy(() => import('./views/Page1'))

const App = () => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <div>App</div>
        <Page1 />
      </Suspense>
    </div>
  )
}

export default App
