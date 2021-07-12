/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useCallback, useContext, useEffect, memo, AnimationEvent } from 'react';
import Link from 'next/link';
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';

import { AppContext } from 'src/pages/_app';
import { preventDefault } from 'src/utils';
import { Box, Logo, Anchor, Button } from '.';

const AppNav = (): JSX.Element => {
  const { windowWidth } = useContext(AppContext);
  const isPC = windowWidth > 991;
  const [open, setOpen] = useState(false);
  const [renderNav, setRenderNav] = useState(isPC);
  const [isNegativeScroll, setIsNegativeScroll] = useState(isPC);

  const handleNavOpenClick = useCallback(() => {
    setOpen((prev) => !prev && !isPC);
  }, [isPC]);

  const handleNavAnimationEnd = useCallback(
    (e: AnimationEvent<HTMLUListElement>) => {
      const self = e.target as HTMLElement;

      // prevent event bubbling
      if (!/nav-links-container/.test(self.className)) {
        return;
      }

      setRenderNav(isPC ? isNegativeScroll : open);
      // this.renderNav = this.isPC ? !!this.isNegativeScroll : !this.sidebar.shrink;
    },
    [isPC, open, isNegativeScroll]
  );

  useEffect(() => {
    let throttle: NodeJS.Timeout;

    if (!isPC) {
      document.body.dataset.nav_open = String(open);
    } else {
      document.body.dataset.nav_open = 'false';
    }

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      start: 'top top',
      end: document.body.offsetHeight,
      trigger: document.body,
      onUpdate: ({ direction }) => {
        clearTimeout(throttle);

        throttle = setTimeout(() => {
          setIsNegativeScroll(direction === -1);

          if (direction === -1 && isPC) {
            setRenderNav(true);
          }
        }, 200);
      }
    });
  }, [open, isPC]);

  console.log(windowWidth, isPC);

  return (
    <Container className="AppNav anim__fadeInUp" fluid>
      <Container
        as="nav"
        className="navbar sidenav-closed container pl-3 pr-1 pr-sm-2 pr-lg-3 py-1 py-sm-2 py-lg-3 mb-lg-4">
        <Logo />

        {(renderNav || open) && (
          <Box
            className={`navbar__underlay d-lg-none animate__animated anim__dur--05s ${
              !open ? 'animate__fadeOutUp' : 'animate__fadeInDown '
            }`}
          />
        )}

        {(renderNav || open) && (
          <Box
            as="ul"
            className={`navbar__nav-links-container px-2 px-sm-3 px-lg-2 pb-5 pb-lg-2 pt-lg-2 mx-auto ${
              isPC
                ? isNegativeScroll
                  ? 'anim__fadeInDown anim__dur--025s'
                  : 'anim__fadeOutUp'
                : !open
                ? 'anim__fadeOut'
                : 'anim__fadeIn anim__dur--05s'
            }`}
            onAnimationEnd={handleNavAnimationEnd}>
            <Box as="li" className="mx-lg-1">
              <Link href="/">
                <a
                  className="navbar__nav-link"
                  onClick={!isPC ? handleNavOpenClick : undefined}
                  onKeyDown={handleNavOpenClick}>
                  Home
                </a>
              </Link>
            </Box>

            <Box as="li" className="mx-lg-1">
              <Anchor
                button
                className="navbar__nav-link is-anchor"
                href="#"
                onClick={preventDefault()}>
                About us
              </Anchor>

              <Box className="navbar__menu">
                <Link href="/about">
                  <a
                    onClick={!isPC ? handleNavOpenClick : undefined}
                    onKeyDown={handleNavOpenClick}>
                    <Box as="span">I</Box>

                    <Box as="p" className="">
                      <Box as="span" className="h6 mt-0">
                        Our Company
                      </Box>
                      Learn what we stand for, our vision and achievements
                    </Box>
                  </a>
                </Link>

                <Link href="/about">
                  <a
                    onClick={!isPC ? handleNavOpenClick : undefined}
                    onKeyDown={handleNavOpenClick}>
                    <Box as="span">I</Box>
                    <Box as="p" className="">
                      <Box as="span" className="h6 mt-0">
                        In the media
                      </Box>
                      As seen on Spotify and Arise News, catch the latest news about us
                    </Box>
                  </a>
                </Link>
              </Box>
            </Box>

            <Box as="li" className="mx-lg-1">
              <Anchor
                button
                className="navbar__nav-link is-anchor"
                href="#"
                onClick={preventDefault()}>
                Health Plans
              </Anchor>

              <Box className="navbar__menu">
                <Link href="/individual-plan">
                  <a
                    onClick={!isPC ? handleNavOpenClick : undefined}
                    onKeyDown={handleNavOpenClick}>
                    <Box as="span">I</Box>
                    <Box as="p" className="">
                      <Box as="span" className="h6 mt-0">
                        Individual Plan
                      </Box>
                      Affordable health plans for yourself and your family.
                    </Box>
                  </a>
                </Link>
                <Link href="/corporate-plan">
                  <a
                    onClick={!isPC ? handleNavOpenClick : undefined}
                    onKeyDown={handleNavOpenClick}>
                    <Box as="span">ICN</Box>
                    <Box as="p">
                      <Box as="span" className="h6 mt-0">
                        Corporate Plan
                      </Box>
                      We have the right health plans for your business.
                    </Box>
                  </a>
                </Link>
              </Box>
            </Box>

            <Box as="li" className="mx-lg-1">
              <Link href="/faq">
                <a
                  className="navbar__nav-link"
                  onClick={!isPC ? handleNavOpenClick : undefined}
                  onKeyDown={handleNavOpenClick}>
                  FAQ
                </a>
              </Link>
            </Box>

            <Box as="li" className="mx-lg-1">
              <Link href="https://blog.cribmd.com">
                <a
                  className="navbar__nav-link"
                  onClick={!isPC ? handleNavOpenClick : undefined}
                  onKeyDown={handleNavOpenClick}>
                  Blog
                </a>
              </Link>
            </Box>

            <Box as="li" className="d-block d-lg-none mt-5 pt-3 mx-lg-1">
              <Anchor button className="navbar__cta--text navbar__nav-link btn--text" href="/login">
                Log in
              </Anchor>
            </Box>
          </Box>
        )}

        <Box as="ul" className="navbar__ctas-container p-2">
          <Box as="li" className="d-none d-lg-block">
            <Anchor button className="navbar__cta--text navbar__nav-link btn--text" href="/login">
              Log in
            </Anchor>
          </Box>

          <Box as="li">
            <Anchor
              button
              className="navbar__cta--primary navbar__nav-link btn--primary ml-0 ml-lg-2"
              href="/signup">
              Sign up
            </Anchor>
          </Box>

          <Box as="li">
            <Button
              aria-label="menu button"
              className="navbar__menu-button navbar__nav-link d-inline-flex d-lg-none btn--text ml-2 ml-sm-2 px-2"
              onClick={handleNavOpenClick}>
              {!open ? 'Menu' : 'Close'}
              <Box as="span" className="custom-bars-wrapper ml-1">
                <Box as="span"></Box>
                <Box as="span"></Box>
                <Box as="span"></Box>
              </Box>
            </Button>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default memo(AppNav);
