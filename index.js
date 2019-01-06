const SW = 'Shockwave',
FLASH = 'Flash',
SHOCKWAVE_FLASH = `${SW} ${FLASH}`,
SHOCKWAVE_FLASH_AX = `${SW}${FLASH}.${SW}${FLASH}`,
FLASH_MIME_TYPE = 'application/x-shockwave-flash'

function getFlashVersion() {
  const {plugins, mimeTypes} = window.navigator

  if (plugins && typeof plugins[SHOCKWAVE_FLASH] == 'object') {
    const {description} = plugins[SHOCKWAVE_FLASH]
    if (description && (mimeTypes && mimeTypes[FLASH_MIME_TYPE] && mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) {
      return parseFloat(d.replace(/^.*\s+(\S+)\s+\S+$/, '$1'))
    }
  } else if (window.ActiveXObject) {
    try {
      const flash = new ActiveXObject(SHOCKWAVE_FLASH_AX)
      if (flash) {
        const version = flash.GetVariable('$version')
        if (version) {
          return parseFloat(version.replace(/^\S+\s+(\d+),(\d+).*$/i,'$1.$2'))
        }
      }
    }
    catch(e) {}
  }
  return -1
}

export default getFlashVersion