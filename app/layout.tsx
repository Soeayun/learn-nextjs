import "../styles/global.css"; // 적용한 css가 모든 곳에 적용
import Navigation from "../components/navigation";
import {Metadata} from "next";
 


export const metadata :Metadata= {
  title: {
      template:"%s | Next Movies",
      default: "Loading.."
  },
  description: "The nest movies",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <Navigation />
          {children}
      </body>
    </html>
  )
}
