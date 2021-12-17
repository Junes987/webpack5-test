import React, { FC } from 'react'
import styles from './index.less'

interface IProps {
  username: string
}

const Home2: FC<IProps> = (props: IProps) => {
  const { username } = props
  return <div className={styles.container}>TSX {username}</div>
}

export default Home2
