function isFree() {
  return Date.now() < new Date('2026-12-31T23:59:59').getTime()
}
function checkNutz() {
  if(isFree()) {
    localStorage.setItem('9','EVIG')
    localStorage.setItem('99','EDIT TOR OPEN')
    localStorage.setItem('999','EVIG NUTZ')
    return 'FREE — bis 31.12. alle Tore offen'
  } else {
    return 'PAID — License nötig — 9=0€ 99=9€ 999=29€'
  }
}
