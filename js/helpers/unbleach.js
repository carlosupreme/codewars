function unbleach(ws) {
  return ws.replace(/ /g, '[space]').replace(/\t/g, '[tab]').replace(/\n/g, '[LF]');
}

export { unbleach };