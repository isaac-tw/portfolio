declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        mobileOld: true;
        mobile: true;
        tablet: true;
        laptop: true;
        desktop: true;
    }
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        cardTitle: React.CSSProperties;
        cardSubtitle: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        cardTitle?: React.CSSProperties;
        cardSubtitle?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        cardTitle: true;
        cardSubtitle: true;
    }
}

export const baseTheme = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            mobileOld: 0,
            mobile: 350,
            tablet: 600,
            laptop: 1024,
            desktop: 1536,
        },
    },
    typography: {
        fontFamily: '"Karla", sans-serif',
    },
}
