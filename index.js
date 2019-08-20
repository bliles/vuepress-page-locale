module.exports = {
  extendPageData ($page) {
    const { _computed } = $page

    $page.locale = _computed.$lang
  }
}