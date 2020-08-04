import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
background-color: var(--black);
color: var(--white);
flex: 1;
padding-top: 50px;
padding-left: 5%;
padding-right: 5%;
${({ paddingAll }) => css`
    padding: ${paddingAll}
`}
`;

function PageDefault({ children, paddingAll, btnCategoria }) {
  const cadastroCategoria = Boolean(btnCategoria);
  return (
    <>
      <Menu cadastroCategoria={cadastroCategoria} />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  children: '',
  paddingAll: '',
  btnCategoria: false,
};

PageDefault.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
  paddingAll: PropTypes.number,
  btnCategoria: PropTypes.bool,
};

export default PageDefault;
