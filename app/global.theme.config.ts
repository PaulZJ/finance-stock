'use client'
import {createTheme} from "@mui/material/styles"

declare module "@mui/material/styles" {
    interface PaletteColor {
        retroRed?: string
        retroDark?: string
        retroGreen?: string
    }

    interface SimplePaletteColorOptions {
        retroRed?: string
        retroDark?: string
        retroGreen?: string
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        retroRed: true
        retroDark: true
        retroGreen: true
    }
}

type ColorKeys = 'retroRed' | 'retroDark' | 'retroGreen'

const colors: Record<ColorKeys, string> = {
    retroDark: '#000000',
    retroRed: '#e0f2fe',
    retroGreen: '#FFFF00'
}

let theme = createTheme()
for(const color in colors) {
    const key = color as ColorKeys
    theme = createTheme(theme, {
        palette: {
            [color]:theme.palette.augmentColor({
                color: {
                    main: colors[key]
                },
                name: color
            })
        }
    })
}

theme = createTheme(theme, {
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        }
    }
})

export default theme