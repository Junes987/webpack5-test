import React, { FC } from 'react'
import _ from 'lodash'
import styles from './index.less'

const Page1: FC = () => {
  console.log(_.join(['Hello', 'webpack'], ' '))
  return <div className={styles.container}>Page1</div>
}

export default Page1
