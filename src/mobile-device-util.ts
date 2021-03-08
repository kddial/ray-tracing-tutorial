// @ts-nocheck

export function isMobileDevice() {
  return Boolean(
    window.navigator.userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    ),
  );
}

window.isMobile = isMobileDevice();
