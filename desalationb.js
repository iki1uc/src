import { sniffPipeline } from './src/desalationb.js'

// in renderTabScanner():
const { named } = sniffPipeline(
  Array.from(state.knownTabs.entries()).map(([id,info])=>({tabId:id, ...info})),
  document.getElementById('pqNameFilter')?.value || "",
  { selfId: state.tabId }
)
// named jetzt rendern statt rawTabs
