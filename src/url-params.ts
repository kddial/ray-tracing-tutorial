export function shouldStop() {
  return window.location.search.indexOf('stop') >= 0;
}

export function shouldShowDebugInfo() {
  return window.location.search.indexOf('debug') >= 0;
}
