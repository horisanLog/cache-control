import "../styles/globals.css"
import type { AppProps } from "next/app"
import { RecoilRoot } from "recoil"
import { RecoilHistorySyncJSONNext } from "recoil-sync-next"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <RecoilHistorySyncJSONNext>
        <Component {...pageProps} />
      </RecoilHistorySyncJSONNext>
    </RecoilRoot>
  )
}
