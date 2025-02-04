declare module '@mui/material/styles' {
    interface CustomTheme {
        /**
         * @deprecated
         */
        fontSizes: {
            largeHeader: string;
            mainHeader: string;
            bodySize: string;
            smallBody: string;
            smallerBody: string;
        };
        /**
         * @deprecated
         */
        fontWeight: {
            thin: number;
            medium: number;
            semi: number;
            bold: number;
        };
        /**
         * @deprecated
         */
        boxShadows: {
            main: string;
            card: string;
            elevated: string;
            popup: string;
            primaryHeader: string;
            separator: string;
        };
    }

    interface CustomPalette {
        /**
         * Generic neutral palette color.
         */
        neutral: PaletteColorOptions;

        /**
         * Table colors.
         */
        table: {
            headerColor: string;
            headerBackground: string;
            headerHover: string;
            divider: string;
            rowHover: string;
        };

        /**
         * Colors for event log output.
         */
        eventLog: {
            diffAdd: string;
            diffSub: string;
            edited: string;
        };

        /**
         * For 'Seen' column on feature toggles list and other.
         */
        seen: {
            unknown: string;
            recent: string;
            inactive: string;
            abandoned: string;
            primary: string;
        };

        // dividerAlternative: string;

        /**
         * Background color for the API command in the sidebar
         */
        codebox: string;

        /**
         * Gradient for the login page
         */
        loginGradient: {
            from: string;
            to: string;
        };

        /**
         * Text highlight effect color. Used when filtering/searching over content.
         */
        highlight: string;
    }

    interface Theme extends CustomTheme {}
    interface ThemeOptions extends CustomTheme {}

    interface Palette extends CustomPalette {}
    interface PaletteOptions extends CustomPalette {}

    interface TypeBackground extends CustomTypeBackground {}

    /* Extend the background object from MUI */
    interface CustomTypeBackground {
        application: string;
        sidebar: string;
        elevation1: string;
        elevation2: string;
    }

    interface PaletteColor {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
        border?: string;
    }
    interface PaletteColorOptions {
        light?: string;
        main?: string;
        dark?: string;
        contrastText?: string;
        border?: string;
    }
}

declare module '@mui/system/createTheme/shape' {
    interface Shape {
        borderRadiusMedium: number;
        borderRadiusLarge: number;
        borderRadiusExtraLarge: number;
        tableRowHeight: number;
        tableRowHeightCompact: number;
        tableRowHeightDense: number;
    }
}
declare module '@mui/material/styles/zIndex' {
    interface ZIndex {
        sticky: number;
    }
}

export {};
