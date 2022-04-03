import { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { SwitchTheme } from '../SwitchTheme'
import { ThemeContext } from '../../context/ThemeContext'

import styles from './styles'

const useStyles = makeStyles(styles)

export default function Header() {
  const classes = useStyles()
  const { colorTheme, setColorTheme } = useContext(ThemeContext)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(colorTheme === 'dark')
  }, [colorTheme])

  return (
    <header className={classes.root}>
      <div className={classes.container}>
        <div>{`<fagner rodrigues />`}</div>
        <SwitchTheme
          onChange={() =>
            setColorTheme(colorTheme === 'light' ? 'dark' : 'light')
          }
          value={checked}
        />
      </div>
    </header>
  )
}
