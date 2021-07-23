import { useState, useCallback, useContext, useEffect, memo, AnimationEvent } from 'react';
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Container from 'react-bootstrap/Container';

import { AppContext } from 'src/pages/_app';
import { preventDefault } from 'src/utils';
import { Box, Logo, Anchor, Button } from '.';
import { NavLink, SVGIcon } from './shared';

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
        if (!isPC) return;

        clearTimeout(throttle);

        throttle = setTimeout(() => {
          setIsNegativeScroll(direction === -1);

          if (direction === -1 && isPC) {
            setRenderNav(true);
          }
        }, 15);
      }
    });
  }, [open, isPC]);

  // useEffect(() => {
  //   setRenderNav(isPC);
  // }, [isPC]);

  return (
    <Container
      as="nav"
      className="AppNav shrink-max-width-xxl px-3 py-1 py-sm-2 py-lg-3 mb-3 mb-lg-4">
      <Logo className={isPC ? (isNegativeScroll ? '' : 'lighten') : ''} />

      {!isPC && (renderNav || open) && (
        <Box
          className={`AppNav__underlay d-lg-none anim__dur--05s ${
            open ? 'anim__fadeInDownBig' : 'anim__fadeOutDownBig'
          }`}
        />
      )}

      {(renderNav || open) && (
        <Box
          as="ul"
          className={`AppNav__nav-links-container px-2 px-sm-3 px-lg-2 pb-5 pb-lg-2 pt-lg-2 mx-auto ${
            isPC
              ? isNegativeScroll
                ? 'anim__fadeInDown anim__dur--025s'
                : 'anim__fadeOutUp'
              : !open
              ? 'anim__OutDownBig anim__dur--05s'
              : 'anim__fadeIn anim__dur--05s'
          }`}
          onAnimationEnd={handleNavAnimationEnd}>
          <Box as="li" className="mx-lg-1">
            <NavLink
              button
              exact
              href="/"
              color="tertiary"
              className="AppNav__nav-link"
              onClick={!isPC ? handleNavOpenClick : undefined}
              onKeyDown={handleNavOpenClick}>
              Home
            </NavLink>
          </Box>

          <Box as="li" className="mx-lg-1">
            <NavLink
              button
              color="tertiary"
              className="AppNav__nav-link is-anchor"
              href="/about"
              onClick={preventDefault()}>
              About us
            </NavLink>

            <Box className="AppNav__menu">
              <Anchor
                routeLink
                href="/about/our-company"
                onClick={!isPC ? handleNavOpenClick : undefined}
                onKeyDown={handleNavOpenClick}>
                <Box as="span">
                  <SVGIcon name="cribmd-logo" />
                </Box>

                <Box as="p" className="">
                  <Box as="span" className="h6 mt-0">
                    Our Company
                  </Box>
                  Learn what we stand for, our vision and achievements
                </Box>
              </Anchor>

              <Anchor
                routeLink
                href="/about/in-the-media"
                onClick={!isPC ? handleNavOpenClick : undefined}
                onKeyDown={handleNavOpenClick}>
                <Box as="span">
                  <SVGIcon name="volume" />
                </Box>

                <Box as="p" className="">
                  <Box as="span" className="h6 mt-0">
                    In the media
                  </Box>
                  As seen on Spotify and Arise News, catch the latest news about us
                </Box>
              </Anchor>
            </Box>
          </Box>

          <Box as="li" className="mx-lg-1">
            <NavLink
              button
              color="tertiary"
              className="AppNav__nav-link is-anchor"
              href="/health-plans"
              onClick={preventDefault()}>
              Health Plans
            </NavLink>

            <Box className="AppNav__menu">
              <Anchor
                routeLink
                href="/health-plans/individual"
                onClick={!isPC ? handleNavOpenClick : undefined}
                onKeyDown={handleNavOpenClick}>
                <Box as="span">
                  <SVGIcon name="credit-card-individual" />
                </Box>

                <Box as="p" className="">
                  <Box as="span" className="h6 mt-0">
                    Individual Plan
                  </Box>
                  Affordable health plans for yourself and your family.
                </Box>
              </Anchor>

              <Anchor
                routeLink
                href="/health-plans/corporate"
                onClick={!isPC ? handleNavOpenClick : undefined}
                onKeyDown={handleNavOpenClick}>
                <Box as="span">
                  <SVGIcon name="credit-card-corporate" />
                </Box>

                <Box as="p">
                  <Box as="span" className="h6 mt-0">
                    Corporate Plan
                  </Box>
                  We have the right health plans for your business.
                </Box>
              </Anchor>
            </Box>
          </Box>

          <Box as="li" className="mx-lg-1">
            <NavLink
              button
              href="/faq"
              color="tertiary"
              className="AppNav__nav-link"
              onClick={!isPC ? handleNavOpenClick : undefined}>
              FAQ
            </NavLink>
          </Box>

          <Box as="li" className="mx-lg-1">
            <Anchor
              button
              color="tertiary"
              href="https://blog.cribmd.com"
              className="AppNav__nav-link"
              onClick={!isPC ? handleNavOpenClick : undefined}
              onKeyDown={handleNavOpenClick}>
              Blog
            </Anchor>
          </Box>

          <Box as="li" className="d-block d-lg-none mt-5 pt-3 mx-lg-1">
            <Anchor
              button
              color="tertiary"
              className="AppNav__cta--text AppNav__nav-link btn--text"
              href="https://www.cribmd.com/login">
              Log in
            </Anchor>
          </Box>
        </Box>
      )}

      <Box as="ul" className="AppNav__ctas-container p-2">
        <Box as="li" className="d-none d-lg-block">
          <Anchor
            button
            color="tertiary"
            className="AppNav__cta--text AppNav__nav-link btn--text"
            href="https://www.cribmd.com/login">
            Log in
          </Anchor>
        </Box>

        <Box as="li">
          <Anchor
            button
            variant="contained"
            color="primary"
            className="AppNav__nav-link ms-0 ms-lg-2"
            href="https://www.cribmd.com/signup">
            Sign up
          </Anchor>
        </Box>

        <Box as="li">
          <Button
            aria-label="menu button"
            className="AppNav__menu-button AppNav__nav-link d-inline-flex d-lg-none btn--text ms-2 ms-sm-2 px-2"
            onClick={handleNavOpenClick}>
            {!open ? 'Menu' : 'Close'}
            <Box as="span" className="custom-bars-wrapper ms-1">
              <Box as="span"></Box>
              <Box as="span"></Box>
              <Box as="span"></Box>
            </Box>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default memo(AppNav);
