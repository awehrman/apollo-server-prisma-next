import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme.style';

const Page = ({ children }) => (
	<ThemeProvider theme={ theme }>
		{ children }
	</ThemeProvider>
);

export default Page;
